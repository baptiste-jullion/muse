// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2024-04-03",
	devtools: { enabled: true },
	modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts", "nuxt-marquee"],
	googleFonts: {
		families: {
			"DM Sans": true,
		},
		download: true,
	},
	css: ["~/assets/css/tailwind.css", "~/assets/css/lenis.css"],
	app: {
		head: {
	        title: "Muse",
	        htmlAttrs: {
		        lang: "fr",
		}
	    }
	},
});
