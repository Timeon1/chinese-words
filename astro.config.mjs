import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
// import cloudflare from "@astrojs/cloudflare";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site:"https://chinese-words-bi5.pages.dev/",
  trailingSlash: 'never',
  integrations: [sitemap({
    lastmod: new Date('2024-06-24'),
  }),tailwind(), react()],
  output: 'static',
  build: {
    rollupOptions: {
      external: []
    },
    format: 'file'
  },
  // adapter: cloudflare({
  //   platformProxy: {
  //     enabled: true
  //   }
  // })
});