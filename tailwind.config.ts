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
			"h1-mobile": "3rem",
			h2: "2.5rem",
			"h2-mobile": "2rem",
			h3: "1.25rem",
			"h3-mobile": "1.125rem",
			paragraph: "1rem",
		},
		borderRadius: {
			full: "9999px",
			default: "0.375rem",
			"bento-card": "1.5rem",
			"bento-tag": "0.5rem",
			"4": "1rem",
		},
		extend: {
			container: {
				center: true,
			},
		},
		screens: {
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			"2xl": "1440px",
		},
	},
} as import("tailwindcss").Config;
