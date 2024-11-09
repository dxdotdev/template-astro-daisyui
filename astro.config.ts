import { defineConfig } from 'astro/config'

import alpinejs from '@astrojs/alpinejs'
import tailwind from '@astrojs/tailwind'

export default defineConfig({
  integrations: [
    tailwind(),
    alpinejs({
      entrypoint: 'alpine.config.ts',
    }),
  ],
})
