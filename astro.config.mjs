import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  // root: new URL("./foo", import.meta.url).toString(),
  publicDir: new URL("./public", import.meta.url).toString(),

  output: 'hybrid',
  build: {
    rollupOptions: {
      external: []
    }
  },
  adapter: cloudflare({
    platformProxy:{
      enabled: true
    }
  })
});