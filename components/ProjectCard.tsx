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
				display: "grid",
				padding: "1.5rem",
				backgroundColor: "transparent",
				backgroundImage: `linear-gradient(to top,hsl(var(--bg-color)), transparent), url(${secondaryImgUrl})`,
				borderRadius: "0.75rem",
				transition:
					"transform 500ms ease-in-out, color 500ms ease-in-out, background-color 500ms ease-in-out, opacity 500ms ease-in-out, backdrop-filter 500ms ease-in-out",
				cursor: "pointer",
				zIndex: 0,
				isolation: "isolate",

				"&::before": {
					content: `'${description}'`,
					position: "absolute",
					inset: 0,
					padding: "2rem",
					backgroundColor: "hsla(var(--bg-color),0.15)",
					color: "transparent",
					borderRadius: "0.75rem",
					zIndex: 10,
					transformOrigin: "bottom",
					cursor: "pointer",
					transition:
						"transform 500ms ease-in-out, color 500ms ease-in-out, background-color 500ms ease-in-out, opacity 500ms ease-in-out, backdrop-filter 500ms ease-in-out",
					WebkitBackdropFilter: "blur(0)",
					backdropFilter: "blur(0)",
				},
				"&:hover::before": {
					color: "hsl(var(--text-color))",
					transform: "translate(-1rem) rotate(12deg)",
					zIndex: 10,
					transformOrigin: "bottom",
					cursor: "pointer",
					WebkitBackdropFilter:
						"blur(4px) brightness(.5) grayscale(20%) saturate(1.5)",
					backdropFilter:
						"blur(4px) brightness(.5) grayscale(20%) saturate(1.5)",
				},

				"&::after": {
					content: "''",
					backgroundImage: `url(${primaryImgUrl})`,
					position: "absolute",
					inset: 0,
					backgroundColor: "transparent",
					borderRadius: "0.75rem",
					zIndex: -10,
					transformOrigin: "bottom",
					cursor: "pointer",
					transition:
						"transform 500ms ease-in-out, color 500ms ease-in-out, background-color 500ms ease-in-out, opacity 500ms ease-in-out, backdrop-filter 500ms ease-in-out",
				},

				"&:hover::after": {
					zIndex: -10,
					transform: "translate(-1rem) rotate(-12deg)",
					backgroundColor: "hsla(0,0%,100%,0.15)",
				},

				"&:hover>h3": {
					transform: "translateY(calc( 0.5rem + 5rem ))",
				},
			}}
		>
			<img
				className="aspect-video mb-4 rounded-lg"
				src={""}
				alt=""
			/>
			<h3
				className={`text-[1.75rem] font-bold text-accent mb-2 transition-transform ease-in-out`}
			>
				{title}
			</h3>
			<p
				className="mb-4 scale-y-100 origin-bottom transition-transform 
			line-clamp-3
			group-hover:scale-y-0"
			>
				{description}
			</p>
		</Box>
	);
}
