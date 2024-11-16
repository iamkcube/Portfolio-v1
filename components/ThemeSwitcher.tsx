"use client";

import { useDarkMode } from "@/contexts/DarkModeContext";

const ThemeSwitcher = () => {
	// const [isDarkMode, setIsDarkMode] = useState(true);
	const { isDarkMode, toggleDarkMode } = useDarkMode();


	// useEffect(() => {
	// 	// Check for saved theme in localStorage
	// 	const savedTheme = localStorage.getItem("theme");
	// 	if (savedTheme === "light") {
	// 		setIsDarkMode(false);
	// 		document.documentElement.classList.remove("dark");
	// 	} else {
	// 		setIsDarkMode(true);
	// 		document.documentElement.classList.add("dark");
	// 	}
	// }, []);

	// const toggleTheme = () => {
	// 	if (isDarkMode) {
	// 		document.documentElement.classList.remove("dark");
	// 		localStorage.setItem("theme", "light");
	// 	} else {
	// 		document.documentElement.classList.add("dark");
	// 		localStorage.setItem("theme", "dark");
	// 	}
	// 	setIsDarkMode(!isDarkMode);
	// };

	return (
		<button
			id="theme-switcher"
			aria-label="Theme Switch"
			className="cursor-pointer bg-transparent border-0 opacity-80 size-6 md:size-8 rounded-full relative isolation-isolate hover:opacity-100 focus-visible:opacity-100"
			onClick={toggleDarkMode}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
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
