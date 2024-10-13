"use client";

import { useState, useEffect } from "react";

const ThemeSwitcher = () => {
	const [isDarkMode, setIsDarkMode] = useState(true);

	useEffect(() => {
		// Check for saved theme in localStorage
		const savedTheme = localStorage.getItem("theme");
		if (savedTheme === "dark") {
			setIsDarkMode(true);
			document.documentElement.classList.add("dark");
		} else {
			setIsDarkMode(false);
			document.documentElement.classList.remove("dark");
		}
	}, []);

	const toggleTheme = () => {
		if (isDarkMode) {
			document.documentElement.classList.remove("dark");
			localStorage.setItem("theme", "light");
		} else {
			document.documentElement.classList.add("dark");
			localStorage.setItem("theme", "dark");
		}
		setIsDarkMode(!isDarkMode);
	};

	return (
		<button
			id="theme-switcher"
			className="cursor-pointer bg-transparent border-0 opacity-80 w-8 h-8 rounded-full relative isolation-isolate hover:opacity-100 focus-visible:opacity-100"
			onClick={toggleTheme}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="32"
				height="32"
				viewBox="0 0 472.39 472.39"
				className={`fill-current ${
					!isDarkMode ? "text-accent" : "text-gray-300"
				} transition-colors duration-1000`}
			>
				<g
					className={`transition-transform duration-1000 ease-out ${
						!isDarkMode ? "translate-x-[15%]" : ""
					}`}
				>
					<circle
						cx="236.2"
						cy="236.2"
						r="103.78"
						className={`fill-current ${
							!isDarkMode ? "text-accent" : "text-gray-500"
						} transition-colors duration-1000`}
					/>
				</g>
				<g
					className={`transform origin-center transition-transform duration-1000 ease-[cubic-bezier(0.11,0.14,0.29,1.32)] ${
						!isDarkMode ? "rotate-180" : ""
					}`}
				>
					<path d="M403.21,167V69.18H305.38L236.2,0,167,69.18H69.18V167L0,236.2l69.18,69.18v97.83H167l69.18,69.18,69.18-69.18h97.83V305.38l69.18-69.18Zm-167,198.17a129,129,0,1,1,129-129A129,129,0,0,1,236.2,365.19Z" />
				</g>
			</svg>
		</button>
	);
};

export default ThemeSwitcher;
