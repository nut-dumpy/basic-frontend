import { defineConfig } from 'astro/config'

import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
	experimental: {
		assets: true,
	},
	integrations: [tailwind()],

	site: 'http://localhost:3000/',
	base: '/',
	trailingSlash: 'never',
})
