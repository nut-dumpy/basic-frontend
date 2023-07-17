const a = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				sgray: {
					100: '#17181A',
					200: '#414449',
					300: '#8B938D',
					500: '#DBDBDB',
					700: '#D8D8D8',
					800: '#FAFAFA',
					900: '#FFFFFF',
				},
				fp: {
					100: '#1B152B',
					300: '#39057A',
					400: '#7A7D9C',
					500: '#7F56D9',
					700: '#AD93E7',
					900: '#EBDBFF',
				},
			},
			fontFamily: {
				fh: 'Inter,sans',
				ft: 'Manrope,sans',
			},
		},
	},
	plugins: [],
}
