const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			gray: colors.gray,

			sgray: {
				100: '#17181A',
				200: '#414449',
				300: '#8B938D',
				500: '#DBDBDB',
				700: '#D8D8D8',
				800: '#FAFAFA',
				900: '#FFFFFF',
			},
		},
		extend: {},
	},
	plugins: [],
}
