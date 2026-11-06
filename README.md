# ariffirdausmk.github.io

Personal portfolio of Arif Firdaus, Software Engineer. Built as a React single-page app with Vite and TypeScript, and deployed to GitHub Pages.

## Develop

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # outputs to dist/
npm run preview   # serve the production build
```

## Edit content

All copy (bio, experience, projects, skills, education, links) lives in [`src/data/profile.ts`](src/data/profile.ts). Components only render that data. Empty `email`, `linkedin` or `resume` values are hidden automatically.

Images are in `public/images/`.

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes `dist/` to GitHub Pages.

One-time setup: in the repo, go to **Settings → Pages → Build and deployment** and set **Source** to **GitHub Actions**.
