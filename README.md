# Deadball Baseball

GitHub-ready static web app build for Deadball Baseball.

## What is in this repo

- `index.html` → standalone production-safe build with embedded CSS and JS
- `index-split.html` → split-file version of the app shell
- `styles.css` and `app.js` → split-file assets
- `vercel.json` and `netlify.toml` → optional static-host config files

## Recommended GitHub usage

For the most reliable GitHub Pages deployment, use the root `index.html` file because it is self-contained and avoids asset-path issues.

## Quick publish to GitHub

1. Create a new empty GitHub repository.
2. Upload all files from this folder to the repo root.
3. In GitHub, go to **Settings → Pages**.
4. Set the source to **Deploy from a branch**.
5. Choose the **main** branch and the **/(root)** folder.
6. Save and wait for Pages to publish.

## Local preview

Open `index.html` in a browser.

## Notes

This package is arranged to minimize broken styling/script loading on static hosts.
