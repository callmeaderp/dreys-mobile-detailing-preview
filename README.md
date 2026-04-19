# Drey's Mobile Detailing — Preview Build

Preview rebuild of [dreysmobiledetailing.com](https://dreysmobiledetailing.com),
hosted at: **https://callmeaderp.github.io/dreys-mobile-detailing-preview/**

Built with [Astro](https://astro.build) + [Tailwind CSS v4](https://tailwindcss.com).

Sections marked `PLACEHOLDER` contain invented content awaiting real
replacements (pricing, reviews, gallery photos, portrait). Sections marked
`DRAFT` are written copy awaiting review. These markers are removed before
the site moves to the production domain.

## Local development

```sh
npm install
npm run dev        # local dev server at http://localhost:4321/dreys-mobile-detailing-preview/
npm run build      # static build to ./dist
npm run preview    # serve the build locally
```

## Deploy

Pushes to `main` trigger `.github/workflows/deploy.yml`, which builds with
`astro build` and publishes `dist/` to GitHub Pages.

## Structure

```
src/
├── components/      # Nav, Footer, CtaBar, ServiceCard, Testimonial,
│                    # Placeholder, PreviewBanner
├── data/            # site.ts (NAP, hours, social), services.ts
│                    # (6 services with pricing tiers), url.ts (base helper)
├── layouts/         # BaseLayout.astro — meta, schema, OG, font preloads
├── pages/           # Home, About, Contact, FAQ, Gallery, Service Area,
│                    # Services index, /services/[slug] detail pages, 404
└── styles/          # global.css — Tailwind theme tokens, shared component CSS
```
