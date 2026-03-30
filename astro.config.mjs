import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://www.zaivi.net',
  base: '/',
  integrations: [
    react(),
    tailwind()
  ],
  output: 'static',
  vite: {
    build: {
      cssMinify: true,
      minify: 'esbuild'
    }
  }
});
