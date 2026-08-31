import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>(() => {
        if (typeof window === 'undefined') {
            return 'dark';
        }
        try {
            const savedTheme = window.localStorage.getItem('theme');
            return savedTheme === 'light' || savedTheme === 'dark' ? savedTheme : 'dark';
        } catch {
            return 'dark';
        }
    });

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.toggle('dark', theme === 'dark');
        try {
            window.localStorage.setItem('theme', theme);
        } catch {}
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
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
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
