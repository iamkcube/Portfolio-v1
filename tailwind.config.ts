import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: "hsl(var(--bgColor))",
				foreground: "hsl(var(--text-color))",
				accent: "var(--accent-color)",
			},
			fontFamily: {
				voyager: ["var(--font-voyager)", "sans-serif"],
			},
			animation: {
				"line-anim": "line-anim 5s ease-in-out 3s infinite alternate",
			},
			keyframes: {
				"line-anim": {
					"80%": { "stroke-dashoffset": "0", fill: "transparent" },
					"100%": { "stroke-dashoffset": "0", fill: "currentColor" },
				},
			},
		},
		backgroundImage: {
			"noisy-bg": "url('./../assets/images/noisy.webp')",
			"noise-bg": "url('./../assets/images/noise.webp')",
		},
	},
	plugins: [],
};
export default config;
