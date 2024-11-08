"use client";

import { projects } from "@/assets/ts/projects";
import AboutSection from "@/components/AboutSection";
import ArrowSVG from "@/components/ArrowSVG";
import Background from "@/components/Background";
import ContactForm from "@/components/ContactForm";
import Cursor from "@/components/Cursor";
import MainSection from "@/components/MainSection";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import SocialMediaHandles from "@/components/SocialMediaHandles";
import React from "react";

export default function Home() {
	return (
		<div className="grid grid-rows-[auto_calc(100vh_-_12rem)_repeat(3,auto)] grid-cols-[1fr_4fr] gap-y-24 gap-x-16 min-h-screen mx-16 mt-8 font-voyager">
			<Cursor />
			<Background />
			<Navbar />
			<div className="grid justify-end">
				<p className="text-md ml-auto text-right font-bold w-[15ch] mt-3">
					Experienced Fullstack developer specializing in React,
					Next.js, and user-centric design.
				</p>
				<ArrowSVG />
			</div>
			<MainSection />
			<div className="grid">
				<p className="text-lg ml-auto text-right font-bold w-[15ch] mt-3">
					1 of 4
				</p>
			</div>
			<div
				id="about"
				className="grid gap-4"
			>
				<h2 className="text-5xl font-bold mb-8">About</h2>
				<AboutSection />
			</div>
			<div className="grid mb-32">
				<p className="text-lg ml-auto text-right font-bold w-[15ch] mt-3">
					2 of 4
				</p>
			</div>
			<div
				id="projects"
				className="grid mb-32 gap-4"
			>
				<h2 className="text-5xl font-bold mb-16">Projects</h2>
				<div
					className="grid grid-cols-[repeat(auto-fit,minmax(18.5rem,1fr))] gap-x-12 gap-y-32 
					

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
			<div className="grid">
				<p className="text-lg ml-auto text-right font-bold w-[15ch] mt-3 mb-12">
					3 of 4
				</p>
			</div>
			<div
				id="contact"
				className="grid gap-4"
			>
				<h2 className="text-5xl font-bold mb-8">Contact</h2>
				<ContactForm />
				<SocialMediaHandles />
			</div>
			<footer className="flex gap-6 flex-wrap items-center justify-center"></footer>
		</div>
	);
}
