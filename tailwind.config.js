/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./**/*.{html, js}"],
	theme: {
		fontFamily: {
			"rage-italic": "Rage Italic",
			"josefin-slab": ['"Josefin Slab"', "serif"],
			outfit: ['"Outfit"', "sans-serif"],
		},
		colors: {
			"brown-pastel": "#d4a276",
			"green-pastel": "#b8c99d",
			"green-fade": "#d0e0b6",
			white: "#ffffff",
			black: "#000000",
			zinc: {
				400: "#a1a1aa",
				600: "#52525b",
				700: "#3f3f46",
				800: "#27272a",
				900: "#18181b",
			},
		},
		extends: {
			transitionTimingFunction: {
				swap: "cubic-bezier(0.04, 0.39, 0.17, 0.96)",
			},
		},
	},
	plugins: [],
};
