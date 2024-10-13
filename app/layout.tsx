import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

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
	variable: "--font-voyager",
	display: "swap",
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
		<html lang="en">
			<body className={`${voyager.variable} antialiased`}>
				<AppRouterCacheProvider>{children}</AppRouterCacheProvider>
			</body>
		</html>
	);
}
