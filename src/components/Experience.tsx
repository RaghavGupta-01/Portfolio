import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { experienceData } from '../data';

const Experience: React.FC = () => {
    // Initialize with first company's first role expanded
    const [expandedRoles, setExpandedRoles] = useState<Record<string, boolean>>({
        "0-0": true
    });

    const toggleRole = (key: string) => {
        setExpandedRoles(prev => ({
            ...prev,
            [key]: !prev[key]
        }));
    };

    return (
        <section id="experience" className="flex flex-col px-4 md:px-16 lg:px-20 py-16 border-t bg-background text-foreground transition-colors duration-300">
            <div className="pb-6 lg:pb-12 md:pb-10">
                <h1 className="text-[28px] sm:text-[34px] md:text-[42px] lg:text-[50px] font-bold font-sans text-foreground relative inline-block">
                    My <span className="text-blue-500 dark:text-blue-400">Experience</span>
                    <span className="text-[48px] sm:text-[56px] md:text-[80px] lg:text-[100px] leading-none text-blue-500 dark:text-blue-400">.</span>
                    <div className="absolute -bottom-3 left-0 h-3 w-full bg-blue-500/10 dark:bg-blue-400/10 transform -skew-x-12 rounded-sm shadow-md"></div>
                </h1>
            </div>

            <div className="max-w-4xl w-full mx-auto mt-10 relative flex flex-col gap-12">
                {experienceData.map((exp, compIdx) => (
                    <div key={compIdx} className="relative flex gap-6 items-start">
                        {/* Left timeline design */}
                        <div className="flex flex-col items-center h-full relative">
                            <div className="w-12 h-12 rounded-full bg-card border-2 border-blue-500 dark:border-blue-400 flex items-center justify-center text-blue-500 dark:text-blue-400 font-extrabold text-xl shadow-lg shadow-blue-500/10">
                                {exp.company[0]}
                            </div>
                            {compIdx < experienceData.length - 1 && (
                                <div className="w-0.5 bg-gradient-to-b from-blue-500/80 dark:from-blue-400/80 to-transparent flex-grow absolute top-12 bottom-[-48px] left-[23px]"></div>
                            )}
                        </div>

                        {/* Right details content */}
                        <div className="flex-1 min-w-0">
                            <h2 className="text-2xl font-bold text-foreground mb-4 tracking-wide">
                                {exp.company}
                            </h2>

                            <div className="flex flex-col gap-4">
                                {exp.roles.map((role, roleIdx) => {
                                    const roleKey = `${compIdx}-${roleIdx}`;
                                    const isExpanded = !!expandedRoles[roleKey];

                                    return (
                                        <div key={roleIdx} className="w-full">
                                            {/* Accordion Header */}
                                            <button
                                                onClick={() => toggleRole(roleKey)}
                                                className="w-full text-left bg-card border border-border hover:border-blue-500/30 dark:hover:border-blue-400/30 rounded-xl p-5 flex justify-between items-center transition-all duration-300 transform active:scale-[0.99] group shadow-md"
                                            >
                                                <div className="pr-4">
                                                    <h4 className="text-lg font-bold text-foreground group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
                                                        {role.title}
                                                    </h4>
                                                    <div className="flex flex-wrap items-center gap-x-3 text-sm text-muted-foreground mt-1.5 font-medium">
                                                        <span>{role.date}</span>
                                                        <span className="text-blue-500 dark:text-blue-400/60">•</span>
                                                        <span>{role.location}</span>
                                                    </div>
                                                </div>
                                                <span className="text-blue-500 dark:text-blue-400 text-lg p-2 bg-muted border border-border group-hover:border-blue-500/20 group-hover:bg-blue-500/10 transition-all duration-300 rounded-full flex items-center justify-center">
                                                    {isExpanded ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                                                </span>
                                            </button>

                                            {/* Accordion Content with animated expand */}
                                            <div
                                                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                                                    isExpanded ? 'max-h-[800px] opacity-100 mt-3' : 'max-h-0 opacity-0'
                                                }`}
                                            >
                                                <div className="bg-muted/30 border border-border rounded-xl p-5 shadow-inner">
                                                    <ul className="list-none space-y-4 text-muted-foreground text-sm md:text-base">
                                                        {role.points.map((pt, ptIdx) => (
                                                            <li key={ptIdx} className="flex gap-3 items-start leading-relaxed">
                                                                 <span className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400 mt-2 flex-shrink-0 shadow shadow-blue-500"></span>
                                                                 <span className="text-foreground/95 dark:text-foreground/90">{pt}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
