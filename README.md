# Drey's Mobile Detailing

Astro/Tailwind static preview rebuild for Drey's Mobile Detailing in Victor, New York.

Preview: <https://callmeaderp.github.io/dreys-mobile-detailing-preview/>

The preview uses real service/pricing data, customer reviews, processed gallery photos, and final owner art. It remains intentionally `noindex` until the production-domain cutover.

## Development

Requires Node 22.12 or newer.

```sh
npm ci
npm run dev
npm run build
npm run preview
```

The preview base path is `/dreys-mobile-detailing-preview/`. Use `u(path)` from `src/data/url.ts` for internal and static-asset links so local development, the project-path preview, and the future root-domain build remain consistent.

## Structure

```text
src/
├── assets/gallery/       processed public gallery images
├── components/           navigation, footer, CTA, service and testimonial UI
├── data/
│   ├── site.ts           NAP, contact/social data, service area, analytics, booking URL
│   ├── services.ts       service catalog, pricing, features, and route slugs
│   └── url.ts            base-aware URL helper
├── layouts/
│   └── BaseLayout.astro  metadata, canonical/OG tags, schema, noindex default
├── pages/                home, services, gallery, area, about, FAQ, contact, 404
└── styles/global.css     Tailwind theme and shared styling
```

Business-wide content belongs in `src/data/site.ts`; service-specific content belongs in `src/data/services.ts`. Avoid scattering duplicate phone numbers, addresses, booking URLs, prices, or service facts into page templates.

## Deployment

Pushes to `main` run `.github/workflows/deploy.yml`, install with `npm ci`, build the static site, and publish `dist/` to GitHub Pages.

The surrounding private workspace at `../` contains audits, legacy-site captures, source photos, screenshot tools, and launch planning. This repository contains only the deployable website.

## Production cutover

Do not simply point DNS at the preview build. Follow the private workspace's deployment checklist. The cutover includes:

1. update `site` and `base` in `astro.config.mjs` for `dreysmobiledetailing.com`;
2. change `BaseLayout.astro` so pages are no longer `noindex` by default;
3. update `robots.txt`, canonical URLs, sitemap output, Open Graph URLs, and structured-data URLs;
4. replace the booking URL with the final Square Appointments target when ready;
5. verify the contact path/form decision;
6. configure DNS/HTTPS and redirects;
7. rebuild and recrawl every route before removing the preview guard.

## Verification

At minimum before a push:

```sh
npm run build
```

Then serve the build and use the outer workspace's Playwright regression harness:

```sh
npm run preview
cd ..
python3 mobile-regression-check.py
```

Review every route at desktop and small-phone widths. Check navigation, CTA tap targets, overflow, gallery crop/quality, service cards and detail pages, contact links, FAQ interaction, 404 behavior, canonical/OG metadata, structured data, sitemap, and the presence of `noindex` on the preview.

Processed gallery assets should contain no EXIF/GPS metadata and retain the established plate-blur treatment. Source originals live only in the private outer workspace.

For business decisions, source evidence, booking/payment planning, and launch operations, read `../README.md`, `../CLAUDE.md`, and the routed private workspace documentation.
