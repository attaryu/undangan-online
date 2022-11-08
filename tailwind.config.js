/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./**/*.{html, js}"],
	theme: {
		fontFamily: {
			"rage-italic": "Rage Italic",
			outfit: "Outfit-Regular",
			"outfit-medium": "Outfit-Medium",
			"outfit-semibold": "Outfit-SemiBold",
			"outfit-bold": "Outfit-Bold",
			"outfit-extrabold": "Outfit-ExtraBold",
			"outfit-black": "Outfit-Black",
			"josefin-slab": "Josefin Slab",
			"josefin-slab-italic": "Josefin Slab Italic",
			"josefin-slab-thin": "Josefin Slab Thin",
			"josefin-slab-thin-italic": "Josefin Slab Thin Italic",
			"josefin-slab-light": "Josefin Slab Light",
			"josefin-slab-light-italic": "Josefin Slab Light Italic",
			"josefin-slab-semibold": "Josefin Slab SemiBold",
			"josefin-slab-semibold-italic": "Josefin Slab SemiBold Italic",
			"josefin-slab-bold": "Josefin Slab Bold",
			"josefin-slab-bold-italic": "Josefin Slab Bold Italic",
		},
		colors: {
			"brown-pastel": "#d4a276",
			"green-pastel": "#b8c99d",
			"green-fade": "#d0e0b6",
			white: "#ffffff",
			zinc: {
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
