import React, { useEffect, useState, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { profileData } from '../data';

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const { theme, toggleTheme } = useTheme();
    const menuRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleClick = (event: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
        event.preventDefault();
        setIsMenuOpen(false);

        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <header className="sticky top-4 z-50 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="glass-nav rounded-full px-6 py-3 border shadow-lg flex items-center justify-between transition-all duration-300">
                {/* Logo / Name */}
                <div className="flex items-center">
                    <a 
                        href="#about" 
                        onClick={(e) => handleClick(e, 'about')}
                        className="text-base sm:text-lg font-bold tracking-wider text-foreground hover:opacity-80 transition-opacity"
                    >
                        {profileData.name}
                    </a>
                </div>

                {/* Desktop menu */}
                <div className="hidden md:flex items-center space-x-1 sm:space-x-4">
                    <a href="#about" onClick={(e) => handleClick(e, 'about')} className="rounded-full px-3.5 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">About</a>
                    <a href="#skills" onClick={(e) => handleClick(e, 'skills')} className="rounded-full px-3.5 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Skills</a>
                    <a href="#experience" onClick={(e) => handleClick(e, 'experience')} className="rounded-full px-3.5 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Experience</a>
                    <a href="#projects" onClick={(e) => handleClick(e, 'projects')} className="rounded-full px-3.5 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Projects</a>
                    <a href="#social-links" onClick={(e) => handleClick(e, 'social-links')} className="rounded-full px-3.5 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Contact</a>
                </div>

                {/* Right side: Theme toggle and mobile menu toggle */}
                <div className="flex items-center space-x-2">
                    {/* Theme Toggle Button */}
                    <button
                        onClick={toggleTheme}
                        className="p-2.5 rounded-full border bg-background hover:bg-muted text-foreground transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50"
                        aria-label="Toggle theme"
                    >
                        {theme === 'dark' ? (
                            <Sun className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 fill-yellow-400" />
                        ) : (
                            <Moon className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500 fill-blue-500" />
                        )}
                    </button>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2.5 rounded-full border bg-background hover:bg-muted text-foreground transition-all duration-200 focus:outline-none"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X className="h-4 w-4 sm:h-5 sm:w-5" /> : <Menu className="h-4 w-4 sm:h-5 sm:w-5" />}
                    </button>
                </div>
            </nav>

            {/* Mobile menu dropdown */}
            {isMenuOpen && (
                <div 
                    ref={menuRef} 
                    className="absolute top-16 left-4 right-4 glass-nav rounded-2xl p-4 md:hidden border shadow-xl flex flex-col space-y-2 mt-2"
                >
                    <a href="#about" onClick={(e) => handleClick(e, 'about')} className="rounded-xl px-4 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors">About</a>
                    <a href="#skills" onClick={(e) => handleClick(e, 'skills')} className="rounded-xl px-4 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors">Skills</a>
                    <a href="#experience" onClick={(e) => handleClick(e, 'experience')} className="rounded-xl px-4 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors">Experience</a>
                    <a href="#projects" onClick={(e) => handleClick(e, 'projects')} className="rounded-xl px-4 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors">Projects</a>
                    <a href="#social-links" onClick={(e) => handleClick(e, 'social-links')} className="rounded-xl px-4 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors">Contact</a>
                </div>
            )}
        </header>
    );
};

export default Navbar;
