/** @type {import('tailwindcss').Config} */

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {

			},

			fontFamily: {
				'dmsans': ["DM Sans", "sans-serif"],
				'dynapuff': ["DynaPuff", "sans-serif"],
			},

			fontWeight: {
				thin: '100',
				extralight: '200',
				light: '300',
				regular: '400',
				medium: '500',
				semibold: '600',
				bold: '700',
				extrabold: '800',
				black: '900',
			}

			
		},
	},
	plugins: [],
}
