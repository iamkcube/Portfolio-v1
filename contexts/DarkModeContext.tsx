"use client";

import React, {
	createContext,
	useContext,
	useState,
	useEffect,
	ReactNode,
} from "react";

interface DarkModeContextType {
	isDarkMode: boolean;
	setIsDarkMode: (isDark: boolean) => void;
	toggleDarkMode: () => void;
}

const DarkModeContext = createContext<DarkModeContextType | undefined>(
	undefined
);

interface DarkModeProviderProps {
	children: ReactNode;
	initialDarkMode?: boolean;
}

export const DarkModeProvider: React.FC<DarkModeProviderProps> = ({
	children,
	initialDarkMode = true,
}) => {
	// Initialize state with a default value
	const [isDarkMode, setIsDarkMode] = useState<boolean>(initialDarkMode);

	useEffect(() => {
		// Access localStorage only on the client-side
		if (typeof window !== "undefined") {
			const savedMode = localStorage.getItem("darkMode");
			if (savedMode !== null) {
				setIsDarkMode(JSON.parse(savedMode));
			}
		}
	}, []);

	// Update localStorage when dark mode changes
	useEffect(() => {
		if (typeof window !== "undefined") {
			localStorage.setItem("darkMode", JSON.stringify(isDarkMode));

			// Optionally update document classes/data attributes
			if (isDarkMode) {
				document.documentElement.classList.add("dark");
			} else {
				document.documentElement.classList.remove("dark");
			}
		}
	}, [isDarkMode]);

	const toggleDarkMode = () => {
		setIsDarkMode((prev: boolean) => !prev);
	};

	const value = {
		isDarkMode,
		setIsDarkMode,
		toggleDarkMode,
	};

	return (
		<DarkModeContext.Provider value={value}>
			{children}
		</DarkModeContext.Provider>
	);
};

// Custom hook to use the dark mode context
export const useDarkMode = () => {
	const context = useContext(DarkModeContext);
	if (context === undefined) {
		throw new Error("useDarkMode must be used within a DarkModeProvider");
	}
	return context;
};
