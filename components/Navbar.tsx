import { useCallback } from "react";
import ThemeSwitcher from "@/components/ThemeSwitcher";

const smoothScrollTo = (targetPosition: number, duration = 1000) => {
	const startPosition = window.scrollY;
	const distance = targetPosition - startPosition;
	let startTime: number | null = null;

	const easeInOutCubic = (t: number) => {
		return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
	};

	const animation = (currentTime: number) => {
		if (startTime === null) startTime = currentTime;
		const timeElapsed = currentTime - startTime;
		const progress = Math.min(timeElapsed / duration, 1);

		window.scrollTo(0, startPosition + distance * easeInOutCubic(progress));

		if (timeElapsed < duration) {
			requestAnimationFrame(animation);
		}
	};

	requestAnimationFrame(animation);
};

export default function Navbar() {
	const handleNavClick = useCallback(
		(e: { preventDefault: () => void }, targetId: string) => {
			e.preventDefault();

			if (targetId === "#") {
				// Scroll to top
				smoothScrollTo(0);
			} else {
				// Scroll to section
				const element = document.querySelector(targetId);
				if (element) {
					const targetPosition =
						element.getBoundingClientRect().top +
						window.scrollY -
						7 * 16; // 7rem scroll padding
					smoothScrollTo(targetPosition);
				}
			}
		},
		[]
	);

	return (
		<nav
			className="flex md:grid grid-cols-subgrid justify-between items-center w-full sticky top-0 pt-6 md:col-span-2 z-40
            before:content-[''] before:absolute 
			before:w-[calc(100%_+_2rem)] md:before:w-[calc(100%_+_8rem)] before:h-[calc(100%_+_4rem)] 
			before:-mt-6 before:-ml-4 md:before:-ml-16
			before:bg-[linear-gradient(to_bottom,hsla(var(--bg-color),0.75)_60%,transparent)]"
		>
			<div className="logo font-bold md:font-normal text-base md:text-2xl z-50">
				Kalinga
			</div>
			<div className="flex justify-between z-50">
				<ul className="hidden md:flex justify-center items-center gap-10">
					<li>
						<a
							className="box-shadow-2xl hover:opacity-80 transition-opacity cursor-pointer"
							href="#"
							onClick={(e) => handleNavClick(e, "#")}
						>
							Home
						</a>
					</li>
					<li>
						<a
							className="box-shadow-2xl hover:opacity-80 transition-opacity cursor-pointer"
							href="#about"
							onClick={(e) => handleNavClick(e, "#about")}
						>
							About
						</a>
					</li>
					<li>
						<a
							className="box-shadow-2xl hover:opacity-80 transition-opacity cursor-pointer"
							href="#projects"
							onClick={(e) => handleNavClick(e, "#projects")}
						>
							Projects
						</a>
					</li>
					<li>
						<a
							className="box-shadow-2xl hover:opacity-80 transition-opacity cursor-pointer"
							href="#contact"
							onClick={(e) => handleNavClick(e, "#contact")}
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
