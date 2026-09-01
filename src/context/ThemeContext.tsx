import type React from "react";
import {
	createContext,
	useContext,
	useEffect,
	useLayoutEffect,
	useState,
} from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
	theme: Theme;
	toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [theme, setTheme] = useState<Theme>(() => {
		try {
			if (typeof window !== "undefined" && window.localStorage) {
				const savedTheme = window.localStorage.getItem("theme");
				return (savedTheme as Theme) || "dark";
			}
		} catch {
			// Fallback to dark theme if localStorage is unavailable
		}
		return "dark";
	});

	useLayoutEffect(() => {
		if (typeof window !== "undefined") {
			const root = window.document.documentElement;
			if (theme === "dark") {
				root.classList.add("dark");
			} else {
				root.classList.remove("dark");
			}
		}
	}, [theme]);

	useEffect(() => {
		try {
			if (typeof window !== "undefined" && window.localStorage) {
				window.localStorage.setItem("theme", theme);
			}
		} catch {
			// Ignore localStorage errors
		}
	}, [theme]);

	const toggleTheme = () => {
		setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
	};

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export const useTheme = () => {
	const context = useContext(ThemeContext);
	if (context === undefined) {
		throw new Error("useTheme must be used within a ThemeProvider");
	}
	return context;
};
