# Website verification protocol

This protocol prevents tool failures and incomplete checks from being reported as website failures.

## Verification command

Run:

```bash
npm run verify:live
```

The command checks these conditions independently:

| Area | Acceptance condition |
| --- | --- |
| DNS | The hostname resolves in the current test environment. |
| HTTPS | The production URL returns a final 2xx response. |
| Identity | The returned homepage contains the expected site title. |
| Robots | `/robots.txt` returns 2xx and does not disallow the entire site. |
| Sitemap | `/sitemap.xml` returns 2xx and contains the production URL. |
| TLS | The endpoint presents a certificate that is currently valid. |

These checks establish what the calling environment can verify. If a proxy, sandbox, allowlist, or network restriction blocks a check, classify it as **unverified**. Do not diagnose the production service from that result.

## Evidence required for broader conclusions

| Claim | Minimum evidence |
| --- | --- |
| Publicly configured | Hosting access setting is `public`. |
| Publicly reachable | External HTTPS retrieval returns 2xx and expected page content. |
| DNS is broken | Authoritative or multiple independent public resolvers fail or return an incorrect record. |
| TLS is broken | A public TLS test confirms certificate or handshake failure. |
| Not indexed | Search-engine inspection finds no indexed result; failure by a single crawler is insufficient. |
| Deployment is live | Hosting deployment status is successful and the deployed content is retrievable. |
| Form works | A controlled end-to-end submission reaches the intended destination without creating unwanted duplicate records or messages. |

## Evidence log format

Create `verification-results/YYYY-MM-DD-topic.md` containing:

```markdown
# Verification: topic

- Time (UTC):
- Target:
- Change or question:

## Results

| Test | Classification | Evidence |
| --- | --- | --- |
| Test name | Verified / Observed / Unverified | Exact result |

## Conclusion

State only what the evidence proves.

## Superseded conclusions

List any earlier statement replaced by this evidence, or `None`.
```
