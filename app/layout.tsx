import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { DarkModeProvider } from "@/contexts/DarkModeContext";

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
	metadataBase: new URL("https://iamkcube.vercel.app"),
	title: {
		template: "%s | Kalinga - Portfolio",
		default: "Kalinga - Portfolio Website",
	},
	description:
		"Full Stack Developer with 3+ years of experience specializing in React, Next.js, and TypeScript. Recent experience at Planocast and East Coast Railway.",
	keywords: [
		"full stack developer",
		"react developer",
		"next.js developer",
		"typescript developer",
		"frontend engineer",
		"bhubaneswar",
		"india",
		"react",
		"next.js",
		"typescript",
		"javascript",
		"python",
		"tailwind",
		"fastapi",
		"aws",
		"google cloud",
	],
	openGraph: {
		type: "website",
		locale: "en_IN",
		url: "/",
		siteName: "Kalinga Kumar Khatua - Portfolio",
		title: "Kalinga Kumar Khatua - Full Stack Developer Portfolio",
		description:
			"Full Stack Developer with 3+ years of experience specializing in React, Next.js, and TypeScript. Recent experience at Planocast and East Coast Railway. CGPA 9.23 at OUTR.",
		images: [
			{
				url: "/og-image.webp",
				width: 666,
				height: 666,
				alt: "Kalinga Kumar Khatua - Full Stack Developer Portfolio",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Kalinga Kumar Khatua - Full Stack Developer",
		description:
			"Full Stack Developer with 3+ years of experience specializing in React, Next.js, and TypeScript.",
		creator: "@iamkcube_",
		images: ["/og-image.webp"],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	authors: [
		{ name: "Kalinga Kumar Khatua", url: "https://github.com/iamkcube" },
	],
	creator: "Kalinga Kumar Khatua",
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
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
					href="/noise.webp"
					as="image"
					type="image/webp"
				/>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							"@context": "https://schema.org",
							"@type": "Person",
							name: "Kalinga Kumar Khatua",
							url: "https://iamkcube.vercel.app",
							email: "kalingakhatua@gmail.com",
							telephone: "+919776826977",
							jobTitle: "Full Stack Developer",
							alumniOf: {
								"@type": "CollegeOrUniversity",
								name: "Odisha University of Technology and Research",
							},
							sameAs: [
								"https://github.com/iamkcube",
								"https://linkedin.com/in/kalingakhatua",
								"https://leetcode.com/u/iamkcube",
							],
							knowsAbout: [
								"React",
								"Next.js",
								"TypeScript",
								"JavaScript",
								"Python",
								"CSS",
								"Java",
								"C++",
								"PHP",
								"Tailwind",
								"FastAPI",
								"Git",
								"AWS",
								"Google Cloud",
							],
							workExperience: [
								{
									"@type": "WorkPosition",
									name: "Senior Software Developer",
									worksFor: {
										"@type": "Organization",
										name: "Planocast",
									},
									startDate: "2023-05",
									endDate: "2023-12",
								},
								{
									"@type": "WorkPosition",
									name: "Full Stack Development Intern",
									worksFor: {
										"@type": "Organization",
										name: "East Coast Railway",
									},
									startDate: "2024-06",
									endDate: "2024-07",
								},
							],
						}),
					}}
				/>
			</head>
			<DarkModeProvider initialDarkMode={true}>
				<body className={`${voyager.variable} antialiased`}>
					<AppRouterCacheProvider>{children}</AppRouterCacheProvider>
				</body>
			</DarkModeProvider>
		</html>
	);
}
