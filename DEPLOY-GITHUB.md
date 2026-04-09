# Push this to GitHub

## Terminal method

```bash
git init
git branch -M main
git add .
git commit -m "Initial Deadball Baseball static app"
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git push -u origin main
```

## GitHub Pages

After push:

- Open the repo on GitHub
- Go to **Settings**
- Go to **Pages**
- Under **Build and deployment**, choose **Deploy from a branch**
- Branch: **main**
- Folder: **/(root)**
- Save

Use the root `index.html` for production because it is self-contained.
