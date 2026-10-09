// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';

export default defineConfig({
  site: 'https://pixento.nl',
  trailingSlash: 'always',
  i18n: {
    locales: ['nl', 'en'],
    defaultLocale: 'nl',
    routing: { prefixDefaultLocale: false },
  },
  integrations: [icon()],
  markdown: {
    // Code blocks are styled by the case-study layout, not by a highlighter theme
    syntaxHighlight: false,
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
