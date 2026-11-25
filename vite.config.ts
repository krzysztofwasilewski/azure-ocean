import { fileURLToPath } from 'node:url';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig, type Plugin } from 'vite';
import { renderNotFound, renderPage } from './src/render';

const root = fileURLToPath(new URL('.', import.meta.url));

/**
 * Replaces each HTML entry with the page rendered from src/render.ts:
 *   index.html → English, pl/index.html → Polish, 404.html → bilingual 404.
 * Runs before Vite's own HTML processing, so the <script src="/src/main.ts"> it emits is bundled as usual.
 */
function i18nPages(): Plugin {
  return {
    name: 'azure-ocean-i18n-pages',
    transformIndexHtml: {
      order: 'pre',
      handler(_html, ctx) {
        const path = ctx.path.replace(/\\/g, '/');
        if (path.endsWith('/404.html')) return renderNotFound();
        if (path.startsWith('/pl/')) return renderPage('pl');
        return renderPage('en');
      },
    },
  };
}

export default defineConfig({
  plugins: [tailwindcss(), i18nPages()],
  build: {
    rollupOptions: {
      input: {
        en: `${root}index.html`,
        pl: `${root}pl/index.html`,
        notFound: `${root}404.html`,
      },
    },
  },
});
