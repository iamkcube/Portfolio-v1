import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";

const voyager = localFont({
	src: [
		{
			path: "./fonts/Voyager-Thin.otf",
			weight: "100",
			style: "normal",
		},
		{
			path: "./fonts/Voyager-Light.otf",
			weight: "300",
			style: "normal",
		},
		{
			path: "./fonts/Voyager-Regular.otf",
			weight: "400",
			style: "normal",
		},
		{
			path: "./fonts/Voyager-Medium.otf",
			weight: "500",
			style: "normal",
		},
		{
			path: "./fonts/Voyager-Bold.otf",
			weight: "700",
			style: "normal",
		},
	],
	fallback: ["serif"],
	variable: "--font-voyager",
	adjustFontFallback: "Times New Roman",
	preload: true,
});

export const metadata: Metadata = {
	title: "Kalinga's Portfolio",
	description: "Kalinga's Portfolio",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className="dark"
		>
			<head>
				<link
					rel="preload"
					href="/noise.webp" /* Replace with your image path */
					as="image"
					type="image/webp" /* Update type as needed, e.g., image/png */
				/>
			</head>
			<body className={`${voyager.variable} antialiased`}>
				<AppRouterCacheProvider>{children}</AppRouterCacheProvider>
			</body>
		</html>
	);
}
