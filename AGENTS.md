# Project operating rules

These rules apply to every change, diagnosis, and status report for this site.

## Authoritative project facts

- Production URL: `https://jennydb.shopandhire.net`
- Sites project ID: read it from `.openai/hosting.json`; never infer or replace it.
- The repository, hosting control plane, DNS, HTTP response, search indexing, and a caller's network path are separate systems. A failure in one is not proof that another failed.

## Evidence rules

1. Do not diagnose a production problem from a single failed request or tool.
2. Report observations precisely. Use only these classifications:
   - **Verified:** directly confirmed by an appropriate test.
   - **Observed:** the exact output of one test, without a broader conclusion.
   - **Possible cause:** supported by evidence but not proven.
   - **Unverified:** the required test could not be completed.
3. Never convert a timeout, sandbox restriction, proxy error, URL-safety rejection, or unavailable tool into a claim that the public website, DNS, TLS, deployment, or indexing is broken.
4. Verify consequential conclusions through an independent second path. For public availability, use both:
   - the hosting control plane or deployment status; and
   - an external HTTP retrieval that returns the expected page content.
5. DNS, TLS, HTTP, crawler access, search indexing, and application behavior must be tested and reported separately.
6. Before responding, compare the conclusion with earlier findings and the current evidence log. If new evidence overturns an earlier statement, explicitly retract and replace it.

## Change and release gate

1. Preserve existing content, behavior, branding, and configuration unless the requested change requires otherwise.
2. Inspect the worktree before editing and do not overwrite unrelated changes.
3. Run the relevant build or focused validation for source changes.
4. Run `npm run verify:live` after a production deployment when the environment permits public access.
5. Do not say **fixed**, **working**, **accessible**, **deployed**, or **indexed** unless the corresponding acceptance test passed.
6. A blocked test must be reported as **unverified**, with the blocking condition stated. It is not a failed-site result.
7. Record material production checks in `verification-results/` using the structure in `VERIFY.md`.

## Required handoff

Every material website handoff must state:

- what changed;
- what was tested;
- the exact result of each test;
- what remains unverified; and
- whether any earlier conclusion was superseded.
