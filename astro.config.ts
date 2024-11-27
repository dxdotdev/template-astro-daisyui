import { defineConfig } from 'astro/config'

import tailwind from '@astrojs/tailwind'
import alpinejs from '@astrojs/alpinejs'
import solidjs from '@astrojs/solid-js'

export default defineConfig({
  integrations: [
    tailwind(),
    alpinejs({
      entrypoint: 'alpine.config.ts',
    }),
    solidjs(),
  ],
})
