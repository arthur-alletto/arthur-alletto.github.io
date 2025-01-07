/** @type {import('tailwindcss').Config} */

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-custom-hiero': 'linear-gradient(0deg, rgba(169, 160, 221, 1) 30%, transparent)',
				'gradient-custom-jamventure': 'linear-gradient(0deg, rgba(34, 32, 53, 1) 30%, transparent)',
				'gradient-custom-ceramique': 'linear-gradient(0deg, rgba(82, 180, 153, 1) 30%, transparent)',
				'gradient-custom-bunbun': 'linear-gradient(0deg, rgba(169, 160, 221, 0.96) 30%, transparent)',
				
			},

			fontFamily: {
				'lato': ["Lato", "sans-serif"],
				'dynapuff': ["DynaPuff", "sans-serif"],
				'poppins': ["Poppins", "sans-serif"],
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
