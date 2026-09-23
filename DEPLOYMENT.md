# Deployment Notes

## Current repository
`batprincess13/jennydb`

## Target
Host the static site through the existing Hostinger account and point the existing domain/subdomain to the deployed site.

## Files required by production
- `index.html`
- `styles.css`

No build step is required. The site is plain static HTML/CSS.

## Hostinger deployment path
Use Hostinger's Git deployment or repository deployment feature for this repository, with:
- Repository: `batprincess13/jennydb`
- Branch: `main`
- Build command: none
- Output / public directory: repository root

If Hostinger requires a deployment directory rather than repository root, deploy both production files into the web root for the existing site.

## Domain
Existing public URL: `jennydb.shopandhire.net`

Do not change DNS until the Hostinger project is confirmed to serve the repository correctly.

## Verification after deployment
1. Open the public URL on desktop and mobile.
2. Confirm the headline says “Operations & Execution Leader | AI Enthusiast.”
3. Confirm there is no “Operations Consultant” label.
4. Confirm the Intuit, Rondesse operating-buildout, and Rondesse Legal Assistant proof points render.
5. Confirm email and LinkedIn links work.
6. Confirm the page is responsive and navigation anchors work.
