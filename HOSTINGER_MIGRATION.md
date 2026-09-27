# Hostinger migration staging

Source: ChatGPT Sites project version 63, source commit `190f7f9fd7ffb51df54e0c421bb477085692d2a2`.
The complete original source is preserved on `migration/sites-v63`; its Git tree is `c64d95fee8b7bd52bb7df19ec8082e70ccf0c8c9`.

This branch changes the development, build, and start commands to native Next.js for a Hostinger Node.js web app. Page content, routes, assets, and styling remain those of the Sites source.

Build check: `npm ci && npm run build` with Node.js 22. The GitHub workflow in this branch is intended to run this check. Do not treat this note as evidence that the Hostinger deployment has passed.

Deployment check: create a separate Hostinger Node.js web app from this private repository and select this branch. Use a temporary Hostinger URL or separate staging domain. Confirm all routes, images, interactions, responsive layout, and metadata against the current live site before switching `jennydb.shopandhire.net`.
