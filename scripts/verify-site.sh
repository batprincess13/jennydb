#!/usr/bin/env bash

set -u
set -o pipefail

site_url="${1:-https://jennydb.shopandhire.net}"
site_host="${site_url#*://}"
site_host="${site_host%%/*}"
temporary_dir="$(mktemp -d)"
trap 'rm -rf "$temporary_dir"' EXIT

passed=0
failed=0
unverified=0

pass() {
  passed=$((passed + 1))
  printf 'VERIFIED  %s\n' "$1"
}

fail() {
  failed=$((failed + 1))
  printf 'FAILED    %s\n' "$1"
}

unknown() {
  unverified=$((unverified + 1))
  printf 'UNVERIFIED %s\n' "$1"
}

printf 'Target: %s\n' "$site_url"
printf 'Time:   %s\n\n' "$(date -u +'%Y-%m-%dT%H:%M:%SZ')"

if command -v getent >/dev/null 2>&1; then
  if getent ahosts "$site_host" >"$temporary_dir/dns.txt" 2>"$temporary_dir/dns.err" && [ -s "$temporary_dir/dns.txt" ]; then
    pass "DNS resolves in this environment"
  else
    unknown "DNS could not be confirmed in this environment"
  fi
else
  unknown "DNS test unavailable because getent is not installed"
fi

home_status="$(curl --silent --show-error --location --output "$temporary_dir/home.html" --write-out '%{http_code}' --connect-timeout 10 --max-time 30 "$site_url/" 2>"$temporary_dir/home.err")"
home_exit=$?
if [ "$home_exit" -ne 0 ]; then
  unknown "HTTPS retrieval was blocked or timed out: $(tr '\n' ' ' <"$temporary_dir/home.err")"
elif [[ "$home_status" =~ ^2[0-9][0-9]$ ]]; then
  pass "Homepage returned HTTP $home_status"
  if grep -Fqi "Jenny Delumen-Buenaobra" "$temporary_dir/home.html"; then
    pass "Homepage contains the expected site identity"
  else
    fail "Homepage did not contain the expected site identity"
  fi
else
  fail "Homepage returned HTTP $home_status"
fi

robots_status="$(curl --silent --show-error --location --output "$temporary_dir/robots.txt" --write-out '%{http_code}' --connect-timeout 10 --max-time 30 "$site_url/robots.txt" 2>"$temporary_dir/robots.err")"
robots_exit=$?
if [ "$robots_exit" -ne 0 ]; then
  unknown "robots.txt retrieval was blocked or timed out: $(tr '\n' ' ' <"$temporary_dir/robots.err")"
elif [[ "$robots_status" =~ ^2[0-9][0-9]$ ]]; then
  if grep -Eiq '^Disallow:[[:space:]]*/[[:space:]]*$' "$temporary_dir/robots.txt"; then
    fail "robots.txt disallows the entire site"
  else
    pass "robots.txt returned HTTP $robots_status without a site-wide disallow"
  fi
else
  fail "robots.txt returned HTTP $robots_status"
fi

sitemap_status="$(curl --silent --show-error --location --output "$temporary_dir/sitemap.xml" --write-out '%{http_code}' --connect-timeout 10 --max-time 30 "$site_url/sitemap.xml" 2>"$temporary_dir/sitemap.err")"
sitemap_exit=$?
if [ "$sitemap_exit" -ne 0 ]; then
  unknown "sitemap.xml retrieval was blocked or timed out: $(tr '\n' ' ' <"$temporary_dir/sitemap.err")"
elif [[ "$sitemap_status" =~ ^2[0-9][0-9]$ ]]; then
  if grep -Fq "$site_url" "$temporary_dir/sitemap.xml"; then
    pass "sitemap.xml returned HTTP $sitemap_status and contains the production URL"
  else
    fail "sitemap.xml does not contain the production URL"
  fi
else
  fail "sitemap.xml returned HTTP $sitemap_status"
fi

if command -v openssl >/dev/null 2>&1; then
  if timeout 20 openssl s_client -connect "$site_host:443" -servername "$site_host" < /dev/null 2>"$temporary_dir/tls.err" \
    | openssl x509 -noout -checkend 0 >"$temporary_dir/tls.txt" 2>>"$temporary_dir/tls.err"; then
    pass "TLS certificate is currently valid from this environment"
  else
    unknown "TLS validity could not be confirmed in this environment"
  fi
else
  unknown "TLS test unavailable because openssl is not installed"
fi

printf '\nSummary: %s verified, %s failed, %s unverified\n' "$passed" "$failed" "$unverified"

if [ "$failed" -gt 0 ]; then
  exit 1
fi

if [ "$unverified" -gt 0 ]; then
  exit 2
fi

exit 0
