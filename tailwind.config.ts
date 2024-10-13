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
		},
		backgroundImage: {
			'noisy-bg': "url('./../assets/images/noisy.png')",
			'noise-bg': "url('./../assets/images/noise.png')",
		  },
	},
	plugins: [],
};
export default config;
