export default {
	content: [],
	theme: {
		fontFamily: {
			sans: ["DM Sans", "sans-serif"],
		},
		colors: {
			black: "#1A191E",
			white: "#FFFFFF",
		},
		fontSize: {
			h1: "4rem",
			h2: "2.5rem",
			h3: "1.25rem",
			paragraph: "1rem",
		},
		borderRadius: {
			full: "9999px",
			default: "0.375rem",
			"bento-card": "1.5rem",
			"bento-tag": "0.5rem",
		},
		extend: {
			container: {
				center: true,
			},
		},
	},
} as import("tailwindcss").Config;
