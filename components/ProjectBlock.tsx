import { projects } from "@/assets/ts/projects";
import BlockCounter from "@/components/BlockCounter";
import ProjectCard from "@/components/ProjectCard";
import React from "react";

export default function ProjectBlock() {
	return (
		<>
			<BlockCounter />
			<div
				id="projects"
				className="grid mb-32 gap-4"
			>
				<h2 className="text-[clamp(2rem,7vw,3rem)] font-bold md:mb-16">Projects</h2>
				<div
					className="grid 
					grid-cols-2 
					md:grid-cols-[repeat(auto-fit,minmax(18.5rem,1fr))] 
					gap-x-4 gap-y-32
					md:gap-x-12 md:gap-y-32
		
		[&:has(.project-card:hover)_.project-card]:bg-gray-900
		[&:has(.project-card:hover)_.project-card]:scale-90
		[&:has(.project-card:hover)_.project-card]:opacity-10
		
		[&:has(.project-card:hover)_.project-card:hover]:bg-transparent
		[&:has(.project-card:hover)_.project-card:hover]:scale-105
		[&:has(.project-card:hover)_.project-card:hover]:opacity-100
		"
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
				</div>
			</div>
		</>
	);
}
