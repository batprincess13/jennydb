# Verification: case studies and website alignment updates

- Time (UTC): 2026-09-24T15:10:12Z
- Target: https://jennydb.shopandhire.net
- Change or question: Publish and verify the new case-studies page, navigation links, revised experience statement, and approved page titles.

## Results

| Test | Classification | Evidence |
| --- | --- | --- |
| Local production build | Verified | `npm test` completed with the `/case-studies` route included; 2 tests passed and 0 failed. |
| Sites deployment | Verified | Version 60, commit `e3c0c96814f5c519f72d0e90fbc3fcf72b8b416b`, deployment `appgdep_6ab53c545dc481919b640ce5dafe7b3a` reached `succeeded`. |
| Homepage case-studies navigation | Verified | `https://jennydb.shopandhire.net/` returned HTTP 200 and contained `href="/case-studies"`. |
| Case-studies route and content | Verified | `https://jennydb.shopandhire.net/case-studies` returned HTTP 200 and contained the approved agent-led sales case heading. |
| Case-studies hero image | Verified | `https://jennydb.shopandhire.net/images/case-studies-operations-hero.png` returned HTTP 200 with `content-type: image/png`. |
| Operating Principles title | Verified | The public route returned HTTP 200 and contained `Operating Principles for Reliable Execution`. |
| Delegation Systems metadata title | Verified | The public route returned HTTP 200 and contained `Delegation Systems for Growing Businesses`. |
| Robots | Verified | `/robots.txt` returned HTTP 200 without a site-wide disallow. |
| Sitemap | Verified | `/sitemap.xml` returned HTTP 200 and contained `/case-studies`. |
| DNS validation | Unverified | The verification environment could not independently confirm DNS. Successful HTTPS retrieval demonstrates that the configured hostname resolved for subsequent requests, but this is not a separate DNS audit. |
| TLS validity audit | Unverified | The verification script could not independently validate the certificate chain in this environment. HTTPS content retrieval succeeded. |

## Conclusion

The production site serves the approved case-studies page and related alignment updates at the custom domain. The new route, navigation, image, revised titles, robots file, and sitemap were retrieved successfully. Independent DNS and certificate-chain audits remain unverified in this environment.

## Superseded conclusions

The initial HTTPS timeout from `npm run verify:live` is superseded by subsequent successful HTTP 200 retrievals of the homepage, case-studies page, revised expertise pages, sitemap, and hero image.
