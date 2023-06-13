/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: ['./src/**/*.{html,js}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', ...defaultTheme.fontFamily.sans],
			},
			colors: {
				primary: '#355b3e',
				secondary: '#58745e',
				tertiary: '#029664',
				system: '#2f3d4c',
				'system-light': '#f5dbc4',
			},
		},
	},
	plugins: [],
};
