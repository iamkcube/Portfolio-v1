import { projects } from "@/assets/ts/projects";
import Background from "@/components/Background";
import ProjectCard from "@/components/ProjectCard";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import React from "react";

export default function Home() {
	return (
		<div className="grid grid-rows-[auto_calc(100vh_-_12rem)_repeat(3,auto)] grid-cols-[1fr_4fr] gap-y-24 gap-x-16 min-h-screen mx-16 mt-8 font-voyager">
			<Background />
			<nav
				className="grid grid-cols-subgrid justify-between items-center w-full sticky top-0 pt-6 col-span-2 z-40 
			before:content-[''] before:absolute before:inset-[-5rem_-4rem_-2rem_-4rem] before:bg-[linear-gradient(to_bottom,hsla(var(--bg-color),0.75)_60%,transparent)]"
			>
				<div className="logo text-2xl z-50">Kalinga</div>
				<div className="flex justify-between z-50">
					<ul className="flex justify-center items-center gap-10">
						<li>
							<a href="#home">Home</a>
						</li>
						<li>
							<a href="#about">About</a>
						</li>
						<li>
							<a href="#projects">Projects</a>
						</li>
						<li>
							<a href="#contact">Contact</a>
						</li>
					</ul>
					<ThemeSwitcher />
				</div>
			</nav>
			<div className="grid justify-end">
				<p className="text-md ml-auto text-right font-bold w-[15ch]">
					Experienced Fullstack developer specializing in React,
					Next.js, and user-centric design.
				</p>
				<svg
					className="mt-auto ml-auto"
					fill="none"
					width="100"
					height="100"
					viewBox="0 0 32 32"
					xmlns="http://www.w3.org/2000/svg"
				>
					<rect
						x="26"
						y="2"
						width="4"
						height="28"
					/>
					<rect
						x="2"
						y="30"
						width="4"
						height="28"
						transform="rotate(-90 2 30)"
					/>
					<rect
						x="1.69897"
						y="4.52734"
						width="4"
						height="34.8105"
						transform="rotate(-45 1.69897 4.52734)"
					/>
				</svg>
			</div>
			<main className="flex flex-col gap-8 items-center sm:items-start">
				<div className="grid font-bold text-8xl gap-2">
					<span>Design.</span>
					<span className="text-accent ">Development.</span>
					<span>Knowledge.</span>
				</div>
			</main>
			<div className="grid">
				<p className="text-lg ml-auto text-right font-bold w-[15ch]">
					1 of 4
				</p>
			</div>
			<div
				id="about"
				className="grid gap-4"
			>
				<h2 className="text-5xl font-bold mb-8">About</h2>
				<p className="text-xl">
					Hi, I'm <strong>Kalinga Kumar Khatua</strong> 👋
				</p>
				<p className="w-[70ch]">
					I'm a <strong>Full-Stack Developer</strong> with over 3
					years of experience, specializing in <strong>React</strong>{" "}
					and <strong>Next.js</strong>, passionate about creating
					scalable, high-performance applications that prioritize
					exceptional <strong>UI/UX design</strong>. My love for
					solving complex problems has driven me to continuously
					refine my skills in
					<strong>front-end</strong> and <strong>back-end</strong>{" "}
					development.
				</p>
				<section className="grid gap-2 mt-4 w-[70ch]">
					<h3 className="text-2xl font-bold">My Journey 🚀</h3>
					<hr className="opacity-20" />
					<p>
						From developing dynamic web applications for{" "}
						<strong>East Coast Railway</strong> to designing and
						implementing scalable systems at{" "}
						<strong>PlanOCast</strong>, I've had the opportunity to
						work on challenging, real-world projects where I led
						integrations, solved complex problems, and contributed
						to the product's overall success.
						<br />
						One of my proudest accomplishments was delivering a
						<strong>TechFest website</strong> in just one week,
						integrating <strong>real-time registration</strong> and{" "}
						<strong>
							dynamic UI under tight deadlines using Agile
							development practices
						</strong>
						.
					</p>
				</section>
				<section className="grid gap-2 mt-4 w-[70ch]">
					<h3 className="text-2xl font-bold">What Drives Me 🔥</h3>
					<hr className="opacity-20" />
					<p>
						My passion for learning and adapting to new challenges
						is the cornerstone of my work. Whether mastering a new
						technology or finding a creative solution to a problem,
						I'm always looking for ways to improve and innovate.
						Recently, I transitioned from my{" "}
						<strong>MERN stack expertise</strong> to{" "}
						<strong> PHP</strong> for an internship project,
						successfully leading backend development and integrating
						it seamlessly with the frontend.
					</p>
					<p>
						I'm driven by continuous learning and love exploring new
						technologies. Whether it's switching tech stacks or
						refining my design process, I'm always pushing the
						boundaries of what's possible in development.
					</p>
				</section>
				<section className="grid gap-2 mt-4 w-[70ch]">
					<h3 className="text-2xl font-bold">Skills Snapshot 💡</h3>
					<hr className="opacity-20" />
					<ul className="grid gap-1">
						<li>
							<b>Languages:</b> TypeScript, JavaScript, Python,
							Java, PHP
						</li>
						<li>
							<b>Technologies:</b> React, Next.js, Tailwind CSS,
							FastAPI, Git, AWS, Google Cloud
						</li>
						<li>
							<b>Tools:</b> Figma, Vite, Render, MySQL, Firebase
						</li>
					</ul>
				</section>
			</div>
			<div className="grid">
				<p className="text-lg ml-auto text-right font-bold w-[15ch]">
					2 of 4
				</p>
			</div>
			<div
				id="projects"
				className="grid gap-4"
			>
				<h2 className="text-5xl font-bold mb-16">Projects</h2>
				<div
					className="grid grid-cols-3 gap-4
					

				[&:has(.project-card:hover)_.project-card]:bg-gray-900 
				[&:has(.project-card:hover)_.project-card]:scale-90 
				[&:has(.project-card:hover)_.project-card]:opacity-10 
				
				[&:has(.project-card:hover)_.project-card:hover]:bg-orange-800 
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
							{index < projects.length - 1 && <div></div>}
						</React.Fragment>
					))}
				</div>
			</div>
			{/* <footer className="flex gap-6 flex-wrap items-center justify-center"></footer> */}
		</div>
	);
}
