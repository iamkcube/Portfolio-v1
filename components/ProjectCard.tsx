"use client";

import { Box } from "@mui/material";

import { useEffect, useRef, useState } from "react";

interface projectProps {
	title: string;
	description: string;
	primaryImgUrl: string;
	secondaryImgUrl: string;
}

export default function ProjectCard({
	title,
	description,
	primaryImgUrl,
	secondaryImgUrl,
}: projectProps) {
	const sectionRef = useRef<HTMLDivElement | null>(null);
	const [sectionHeight, setSectionHeight] = useState<number>(0);

	useEffect(() => {
		// Function to update section height
		const updateHeight = () => {
			if (sectionRef.current) {
				setSectionHeight(sectionRef.current.clientHeight);
			}
		};

		// Set initial height
		updateHeight();

		// Add event listener for resize
		window.addEventListener("resize", updateHeight);

		// Cleanup on component unmount
		return () => {
			window.removeEventListener("resize", updateHeight);
		};
	}, []);

	useEffect(() => {
		console.log("🚀 ~ useEffect ~ sectionHeight:", sectionHeight);
	}, [sectionHeight]);

	return (
		<Box
			ref={sectionRef}
			className="group project-card"
			sx={{
				position: "relative",
				color: "hsl(var(--text-color-dark))",
				borderRadius: "0.75rem",
				transition:
					"transform 750ms ease, color 750ms ease, background-color 750ms ease, opacity 750ms ease, backdrop-filter 750ms ease",

				"&:hover .before": {
					color: "hsl(var(--text-color-dark))",
					opacity: 1,
					transform: "translate(1rem) rotate(12deg)",
					transformOrigin: "bottom",
					cursor: "pointer",
					WebkitBackdropFilter:
						"blur(4px) brightness(.5) grayscale(20%) saturate(1.5)",
					backdropFilter:
						"blur(4px) brightness(.5) grayscale(20%) saturate(1.5)",
				},

				"&:hover .after": {
					zIndex: -10,
					transform: "translate(-1rem) rotate(-12deg)",
					backgroundColor: "hsla(0,0%,100%,0.15)",
					opacity: 1,
				},

				"&:hover h3": {
					transform: "translateY(calc( 0.5rem + 5rem  + 9rem))",
				},
			}}
		>
			<Box
				className="before"
				sx={{
					position: "absolute",
					inset: 0,
					padding: "2rem",
					backgroundColor: "hsla(var(--bg-color),0.15)",
					color: "transparent",
					borderRadius: "0.75rem",
					zIndex: 10,
					transformOrigin: "bottom",
					cursor: "pointer",
					opacity: 0,
					transition:
						"transform 750ms cubic-bezier(0.68, -0.55, 0.27, 1.55), color 750ms ease-in, background-color 750ms ease-in, opacity 750ms ease-in, backdrop-filter 750ms ease-in",
					WebkitBackdropFilter: "blur(0)",
					backdropFilter: "blur(0)",
				}}
			>
				<p>{description}</p>
			</Box>
			<Box
				sx={{
					display: "grid",
					padding: "1.5rem",
					backgroundColor: "transparent",
					backgroundImage: `linear-gradient(to top,hsl(var(--bg-color-dark)) 20%, transparent), url(${secondaryImgUrl})`,
					borderRadius: "0.75rem",
					transition:
						"transform 750ms cubic-bezier(0.68, -0.55, 0.27, 1.55), color 750ms cubic-bezier(0.68, -0.55, 0.27, 1.55), background-color 750ms cubic-bezier(0.68, -0.55, 0.27, 1.55), opacity 750ms cubic-bezier(0.68, -0.55, 0.27, 1.55), backdrop-filter 750ms cubic-bezier(0.68, -0.55, 0.27, 1.55)",
					cursor: "pointer",
					zIndex: 0,
					minHeight: "100%",
				}}
			>
				<div className="aspect-video mb-4 rounded-lg"></div>
				{/* <img
					className="aspect-video mb-4 rounded-lg"
					src={""}
					alt=""
				/> */}
				<h3
					className={`text-[1.75rem] font-bold text-accent mb-2 transition-transform ease-out`}
				>
					{title}
				</h3>
				<p
					className="mb-4 scale-y-100 origin-bottom transition-[transform,opacity]
				line-clamp-3 duration-500
				group-hover:opacity-0"
				>
					{description}
				</p>
			</Box>
			<Box
				className="after"
				sx={{
					content: "''",
					backgroundImage: `url(${primaryImgUrl})`,
					position: "absolute",
					inset: 0,
					backgroundColor: "transparent",
					borderRadius: "0.75rem",
					zIndex: -10,
					transformOrigin: "bottom",
					cursor: "pointer",
					opacity: 0,
					transition:
						"transform 750ms cubic-bezier(0.68, -0.55, 0.27, 1.55), color 750ms cubic-bezier(0.68, -0.55, 0.27, 1.55), background-color 750ms cubic-bezier(0.68, -0.55, 0.27, 1.55), opacity 750ms cubic-bezier(0.68, -0.55, 0.27, 1.55), backdrop-filter 750ms cubic-bezier(0.68, -0.55, 0.27, 1.55)",
				}}
			></Box>
		</Box>
	);
}
