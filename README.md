# TEFAHAD Portfolio

Personal portfolio for Tasnimul Ehsan Fahad — a single-page site focused on AI, technology, web experiments, and open source.

## Stack

- Next.js App Router
- React
- Tailwind CSS
- Framer Motion
- Vercel deployment

## Features

- Responsive single-page portfolio
- Animated hero and project sections
- Accessible mobile navigation with keyboard focus states
- Canonical metadata, Open Graph, Twitter metadata, robots, and sitemap
- Person and WebSite structured data
- Dynamically generated Open Graph image
- Reduced-motion support

## Local development

Requirements: Node.js 20.9+ and npm.

```bash
npm ci
npm run dev
```

Open `http://localhost:3000`.

## Production test

The repository treats a successful production build as its automated application test:

```bash
npm ci
npm run test
```

`npm run test` runs `next build`, so the same build path used for deployment is validated in CI.

## Production build

```bash
npm ci
npm run build
npm start
```

## Deployment

The site is deployed from the `main` branch to Vercel. No database or runtime environment variables are required for the current portfolio.

## Project structure

```text
app/
  layout.js          # Metadata and JSON-LD
  page.js            # Page composition
  globals.css        # Global styles and accessibility preferences
  robots.js          # Robots metadata
  sitemap.js         # Sitemap metadata
  opengraph-image.js # Dynamic social preview
  icon.svg           # Site icon
components/
  Navbar.jsx
  Hero.jsx
  About.jsx
  Projects.jsx
  Obsession.jsx
  Contact.jsx
  Footer.jsx
data/
  projects.js
```

## Dependency maintenance

Dependencies are kept on supported release lines and monitored with Dependabot. Security updates should be reviewed and tested through the pull-request build before merging.

## License

The portfolio content and design are personal work. Contact the owner before reusing personal branding, copy, or assets.
