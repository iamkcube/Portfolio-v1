import { projects } from "@/assets/ts/projects";
import BlockCounter from "@/components/BlockCounter";
import ProjectCard from "@/components/ProjectCard";
import { Box } from "@mui/material";
import React, { useState } from "react";

export default function ProjectBlock() {
	const [activeIndex, setActiveIndex] = useState(1);

	const handlePrevious = () => {
		setActiveIndex((current) =>
			current === 0 ? projects.length - 1 : current - 1
		);
	};

	const handleNext = () => {
		setActiveIndex((current) => (current + 1) % projects.length);
	};

	return (
		<>
			<BlockCounter />
			<div
				id="projects"
				className="grid md:mb-32 gap-4 overflow-hidden md:overflow-visible"
			>
				<h2 className="text-[clamp(2rem,7vw,3rem)] font-bold md:mb-16">
					Projects
				</h2>
				<div
					className="relative p-[var(--carousel-padding)] md:p-0"
					style={
						{
							"--carousel-padding": "1rem",
						} as React.CSSProperties
					}
				>
					<button
						onClick={handlePrevious}
						className="md:hidden absolute left-0 top-1/2 -translate-y-1/2 z-20 
						bg-[hsl(var(--bg-color),0.75)] p-2 rounded-full hover:bg-[hsl(var(--bg-color))] transition-colors"
						aria-label="Previous project"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 1792 1792"
							id="chevron"
						>
							<path
								d="M307 941L1049 1683C1061.67 1695.67 1076.67 1702 1094 1702C1111.33 1702 1126.33 1695.67 1139 1683L1305 1517C1317.67 1504.33 1324 1489.33 1324 1472C1324 1454.67 1317.67 1439.67 1305 1427L774 896L1305 365C1317.67 352.333 1324 337.333 1324 320C1324 302.667 1317.67 287.667 1305 275L1139 109C1126.33 96.3333 1111.33 90 1094 90C1076.67 90 1061.67 96.3333 1049 109L307 851C294.333 863.667 288 878.667 288 896C288 913.333 294.333 928.333 307 941Z"
								fill="hsla(var(--text-color),0.8)"
							/>
						</svg>
					</button>

					<button
						onClick={handleNext}
						className="md:hidden absolute right-0 top-1/2 -translate-y-1/2 z-20 
						bg-[hsl(var(--bg-color),0.75)] p-2 rounded-full hover:bg-[hsl(var(--bg-color))] transition-colors"
						aria-label="Next project"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 1792 1792"
							id="chevron"
						>
							<path
								d="M1485 941L743 1683C730.333 1695.67 715.333 1702 698 1702C680.667 1702 665.667 1695.67 653 1683L487 1517C474.333 1504.33 468 1489.33 468 1472C468 1454.67 474.333 1439.67 487 1427L1018 896L487 365C474.333 352.333 468 337.333 468 320C468 302.667 474.333 287.667 487 275L653 109C665.667 96.3333 680.667 90 698 90C715.333 90 730.333 96.3333 743 109L1485 851C1497.67 863.667 1504 878.667 1504 896C1504 913.333 1497.67 928.333 1485 941Z"
								fill="hsla(var(--text-color),0.8)"
							/>
						</svg>
					</button>
					<Box
						className="flex
						md:grid
						md:grid-cols-[repeat(auto-fit,minmax(18.5rem,1fr))]
						gap-x-4 gap-y-32
						md:gap-x-12 md:gap-y-32
						transition-[translate] duration-500
							
							[&:has(.project-card:hover)_.project-card]:bg-gray-900
							md:[&:has(.project-card:hover)_.project-card]:scale-90
							[&:has(.project-card:hover)_.project-card]:opacity-10
							
							[&:has(.project-card:hover)_.project-card:hover]:bg-transparent
							md:[&:has(.project-card:hover)_.project-card:hover]:scale-105
							[&:has(.project-card:hover)_.project-card:hover]:opacity-100
							"
						sx={{
							"@media (max-width:768px)": {
								translate: `calc(-${
									100 * activeIndex
								}% - calc(1rem * ${activeIndex})) 0`,
							},
						}}
					>
						{projects.map((project, index) => (
							<React.Fragment key={index}>
								<ProjectCard
									title={project.title}
									description={project.description}
									primaryImgUrl={project.primaryImgUrl}
									secondaryImgUrl={project.secondaryImgUrl}
								/>
								{/* {index < projects.length - 1 && <div></div>} */}
							</React.Fragment>
						))}
					</Box>
				</div>
				{/* Dots Navigation */}
				<div className="flex justify-center gap-2 md:hidden">
					{projects.map((_, index) => (
						<button
							key={index}
							onClick={() => {
								setActiveIndex(index);
							}}
							className={`size-3 rounded-full transition-all duration-300 ${
								index === activeIndex % projects.length
									? "bg-white w-6"
									: "bg-gray-500"
							}`}
							aria-label={`Go to project ${index + 1}`}
						/>
					))}
				</div>
			</div>
		</>
	);
}
