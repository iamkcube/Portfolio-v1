import ThemeSwitcher from "@/components/ThemeSwitcher";

export default function Navbar() {
	return (
		<nav
			className="grid grid-cols-subgrid justify-between items-center w-full sticky top-0 pt-6 col-span-2 z-40 
			before:content-[''] before:absolute before:inset-[-5rem_-4rem_-2rem_-4rem] before:bg-[linear-gradient(to_bottom,hsla(var(--bg-color),0.75)_60%,transparent)]"
		>
			<div className="logo text-2xl z-50">Kalinga</div>
			<div className="flex justify-between z-50">
				<ul className="flex justify-center items-center gap-10">
					<li>
						<a
							className="box-shadow-2xl"
							href="#home"
						>
							Home
						</a>
					</li>
					<li>
						<a
							className="box-shadow-2xl"
							href="#about"
						>
							About
						</a>
					</li>
					<li>
						<a
							className="box-shadow-2xl"
							href="#projects"
						>
							Projects
						</a>
					</li>
					<li>
						<a
							className="box-shadow-2xl"
							href="#contact"
						>
							Contact
						</a>
					</li>
				</ul>
				<ThemeSwitcher />
			</div>
		</nav>
	);
}
