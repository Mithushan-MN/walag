# Wal-Ag website — Vercel deployment

This archive contains the latest site, ready to deploy as a static website.

## Deploy from a Git repository
1. Extract this archive.
2. Upload the extracted contents to a Git repository. Keep vercel.json and dist/ at the repository root.
3. Import that repository into Vercel.
4. Use Framework Preset: Other; leave the Build Command empty; set Output Directory to dist. The included vercel.json already declares these settings.
5. Deploy. No environment variables or dependency installation are required.

## Deploy from your computer
Install the Vercel CLI, open a terminal in the extracted folder (the one containing vercel.json), and run:

    npx vercel --prod

Follow the account/project prompts.

## Contents and behaviour
- dist/index.html: site entry point.
- dist/style.css: responsive styling.
- dist/app.js, content.js, validation.js: navigation, pages and interactions.
- dist/assets/: bundled company imagery, hero images, videos and PDF downloads.
- Navigation uses hash routes such as /#/products; no server rewrites are required.
- The four-step enquiry and simulated staff dashboard use in-memory state. They do not send emails or store enquiries on a server. Reloading resets the state.
- YouTube playback requires an internet connection and may be subject to browser autoplay restrictions; poster imagery remains as a fallback.
- The files in dist/ are already the deployable build; there is no compilation step.

Includes the latest floating-header positioning, larger header arrows and paragraph typography changes.
