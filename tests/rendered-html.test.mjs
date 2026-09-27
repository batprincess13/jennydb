import assert from "node:assert/strict";
import test from "node:test";

test("renders public indexing and entity metadata", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  const response = await worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );

  assert.equal(response.status, 200);
  assert.match(
    response.headers.get("content-type") ?? "",
    /^text\/html\b/i,
  );
  const html = await response.text();
  assert.match(html, /<meta[^>]+name=["']robots["'][^>]+content=["'][^"']*index[^"']*follow/i);
  assert.match(html, /application\/ld\+json/i);
  assert.match(html, /Jenny Delumen-Buenaobra/);
  assert.match(html, /AI with operational judgment/);
  assert.match(html, /Diagnose the real problem/);
  assert.match(html, /Define the value/);
  assert.match(html, /Decide AI(?:&#x27;|')s role/);
  assert.match(html, /Prepare the operation/);
  assert.match(html, /Direct and govern/);
  assert.match(html, /Validate the result/);
  assert.doesNotMatch(html, /codex-preview/);
  const jsonLd = [...html.matchAll(/<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)];
  assert.ok(jsonLd.length > 0);
  for (const block of jsonLd) JSON.parse(block[1]);
});

test("renders every expertise route with unique metadata and structured data", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("routes", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  const routes = [
    ["/operating-principles", "Operating Principles for Reliable Execution"],
    ["/fractional-operations-leadership", "Fractional Operations Leadership for Growing Businesses"],
    ["/operations-systems-process-improvement", "Operations Systems and Process Improvement"],
    ["/delegation-systems", "Delegation Systems for Growing Businesses"],
    ["/ai-enabled-operations", "AI with Operational Judgment Framework"],
    ["/case-studies", "Case Studies"],
  ];

  for (const [path, title] of routes) {
    const response = await worker.fetch(
      new Request(`http://localhost${path}`, { headers: { accept: "text/html" } }),
      { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
      { waitUntil() {}, passThroughOnException() {} },
    );
    const html = await response.text();
    assert.equal(response.status, 200, path);
    assert.match(html, new RegExp(title.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")), path);
    assert.match(html, /application\/ld\+json/i, path);
    assert.match(html, new RegExp(`canonical[^>]+${path}`), path);
    const jsonLd = [...html.matchAll(/<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)];
    assert.ok(jsonLd.length > 0, path);
    for (const block of jsonLd) JSON.parse(block[1]);
    if (["/operating-principles", "/delegation-systems", "/ai-enabled-operations"].includes(path)) {
      assert.match(html, /Practical guide by Jenny Delumen-Buenaobra/, path);
    }
    if (path === "/ai-enabled-operations") {
      assert.match(html, /Published thinking behind the framework/, path);
      assert.match(html, /why-we-really-using-ai-jennifer-delumen-buenaobra-v2exc/, path);
      assert.match(html, /ai-doesnt-differentiate-you-jennifer-delumen-buenaobra-xn9jc/, path);
      assert.match(html, /can-ai-replace-managers-jennifer-delumen-buenaobra-wystc/, path);
      assert.match(html, /you-might-ai-replaceable-heres-part-isnt-jennifer-delumen-buenaobra-ztklc/, path);
    }
    if (path === "/case-studies") {
      assert.match(html, /Building the operating structure for a new enterprise account/, path);
      assert.match(html, /Implementing a new technical-support process across four sites/, path);
      assert.match(html, /Designing a governed prompt-building system/, path);
      assert.match(html, /Using a domain-specific GPT to frame an application/, path);
      assert.doesNotMatch(html, /\bDell\b|\bConvergys\b|\bRondesse\b/, path);
    }
  }
});
