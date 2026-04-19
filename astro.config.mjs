// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Preview hosting on GitHub Pages under a project path.
// When the site moves to dreysmobiledetailing.com, swap `site` to the real
// domain and set `base` back to '/'.
const SITE = 'https://callmeaderp.github.io';
const BASE = '/dreys-mobile-detailing-preview';

// https://astro.build/config
export default defineConfig({
  site: SITE,
  base: BASE,
  trailingSlash: 'always',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
