// This is the Tailwind CSS configuration file for the Astro project.

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: '#3b82f6',
					dark: '#1d4ed8',
				},
				secondary: '#8b5cf6',
				accent: '#06b6d4',
				squirtle: {
					DEFAULT: '#8db5ac',
					light: '#20444c',
					dark: '#ba681c',
				},
			},
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif'],
			},
			animation: {
				'fade-in-up': 'fadeInUp 0.6s ease-out',
				'pulse-glow': 'pulse-glow 2s infinite',
			},
		},
	},
	plugins: [
        require('@tailwindcss/typography'),
      ],
}