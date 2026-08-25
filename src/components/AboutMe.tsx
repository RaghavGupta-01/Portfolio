import React, { useEffect, useState } from 'react';
import { profileData, socialLinksData } from '../data';
import { ArrowRight, Download, Mail } from 'lucide-react';

// Placeholders to be replaced with devicons / svgl.app icons
const Github = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
);

const Linkedin = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
    </svg>
);

const AboutMe: React.FC = () => {
    const [stars, setStars] = useState<{ id: number; x: number; y: number; size: number; duration: number }[]>([]);

    useEffect(() => {
        // Generate coordinates for background stars
        const newStars = Array.from({ length: 70 }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 2 + 0.8,
            duration: Math.random() * 4 + 2
        }));
        setStars(newStars);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    // Helper to get React-based Lucide icons corresponding to social link name
    const getSocialIcon = (name: string) => {
        switch (name.toLowerCase()) {
            case 'github':
                return <Github className="h-5 w-5" />;
            case 'linkedin':
                return <Linkedin className="h-5 w-5" />;
            case 'email':
                return <Mail className="h-5 w-5" />;
            default:
                return <Mail className="h-5 w-5" />;
        }
    };

    return (
        <section id="about" className="space-bg relative flex flex-col justify-center min-h-[92vh] py-16 md:py-24 px-4 sm:px-6 lg:px-12 xl:px-20 overflow-hidden">
            {/* Stars background */}
            <div className="stars-container opacity-100 dark:opacity-80 transition-opacity duration-300">
                {stars.map((star) => (
                    <div
                        key={star.id}
                        className="star bg-slate-400 dark:bg-white"
                        style={{
                            top: `${star.y}%`,
                            left: `${star.x}%`,
                            width: `${star.size}px`,
                            height: `${star.size}px`,
                            animationDuration: `${star.duration}s`,
                            '--twinkle-duration': `${star.duration}s`
                        } as React.CSSProperties}
                    />
                ))}
            </div>

            {/* Glowing radial background accents */}
            <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-blue-500/10 dark:bg-blue-600/5 rounded-full blur-[100px] pointer-events-none z-0" />
            <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-blue-400/10 dark:bg-blue-500/5 rounded-full blur-[100px] pointer-events-none z-0" />

            {/* Floating vertical sidebar (Mockup style) */}
            <div className="hidden lg:flex fixed right-8 top-1/2 -translate-y-1/2 flex-col items-center gap-5 z-40">
                {socialLinksData.map((link, idx) => (
                    <a
                        key={idx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 flex items-center justify-center rounded-full border bg-background/50 backdrop-blur-md text-foreground hover:text-blue-400 dark:hover:text-blue-400 hover:border-blue-400/50 hover:scale-110 shadow-sm transition-all duration-300"
                        title={link.name}
                    >
                        {getSocialIcon(link.name)}
                    </a>
                ))}
                <div className="w-[1px] h-28 bg-gradient-to-b from-border to-transparent mt-2" />
            </div>

            <div className="relative w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16 lg:gap-24 z-10">
                {/* Left Side Details */}
                <div className="flex-1 text-center md:text-left flex flex-col items-center md:items-start">
                    <h1 className="text-[34px] sm:text-[44px] md:text-[50px] lg:text-[60px] font-extrabold tracking-tight text-foreground leading-[1.1] mb-2 font-sans">
                        Hi, I'm <span className="text-foreground">{profileData.name}</span>
                    </h1>

                    <h2 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-bold text-blue-500 dark:text-blue-400 mb-6 tracking-wide">
                        {profileData.role}
                    </h2>

                    <div className="max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed mb-8 space-y-4">
                        {profileData.bio.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>

                    {/* Action buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 mb-8">
                        <button
                            onClick={() => scrollToSection('projects')}
                            className="group flex items-center justify-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-medium rounded-xl shadow-lg shadow-blue-500/25 transition-all duration-300 hover:-translate-y-0.5"
                        >
                            View My Work
                            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <a
                            href="/resume.pdf" // Placeholder, adjust accordingly
                            download
                            className="flex items-center justify-center gap-2 px-6 py-3 border bg-background/50 hover:bg-muted text-foreground font-medium rounded-xl transition-all duration-300 hover:-translate-y-0.5"
                        >
                            <Download className="h-4 w-4" />
                            Resume
                        </a>
                    </div>

                    {/* Circular social buttons (mobile-friendly and inline) */}
                    <div className="flex items-center gap-3">
                        {socialLinksData.map((link, idx) => (
                            <a
                                key={idx}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-11 h-11 flex items-center justify-center rounded-full border bg-background/30 hover:bg-blue-500/10 dark:hover:bg-blue-400/10 text-foreground hover:text-blue-500 dark:hover:text-blue-400 hover:border-blue-400/50 transition-all duration-300"
                                title={link.name}
                            >
                                {getSocialIcon(link.name)}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Right Side Circular Image */}
                <div className="flex-1 flex justify-center items-center z-10">
                    <div className="relative flex justify-center items-center">
                        {/* Outer rotating/glowing rings */}
                        <div className="absolute inset-0 rounded-full border border-blue-400/10 dark:border-blue-400/5 scale-[1.08] animate-[spin_40s_linear_infinite]" />
                        <div className="absolute inset-0 rounded-full border-2 border-dashed border-blue-400/10 dark:border-blue-500/10 scale-[1.18] animate-[spin_60s_linear_infinite_reverse]" />
                        <div className="absolute inset-0 bg-blue-500/10 dark:bg-blue-400/5 rounded-full blur-2xl scale-[0.9] pointer-events-none" />

                        {/* Masked Circular Image */}
                        <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden border-[6px] border-background dark:border-card shadow-2xl shadow-blue-500/10 transform hover:scale-[1.02] transition-transform duration-500">
                            <img
                                src={profileData.profileImage}
                                alt={profileData.name}
                                className="w-full h-full object-cover object-center"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
