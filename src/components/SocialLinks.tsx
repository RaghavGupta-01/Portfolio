import React from 'react';
import { socialLinksData } from '../data';

const SocialLinks: React.FC = () => {
    return (
        <section id="social-links" className="flex flex-col px-4 md:px-16 lg:px-20 py-16 border-t bg-background text-foreground transition-colors duration-300">
            <div className="text-center pb-6 lg:pb-12 md:pb-10">
                <h1 className="text-[28px] sm:text-[34px] md:text-[42px] lg:text-[50px] font-bold font-sans text-foreground relative inline-block">
                    Connect <span className="text-blue-500 dark:text-blue-400">With Me</span>
                    <span className="text-[48px] sm:text-[56px] md:text-[80px] lg:text-[100px] leading-none text-blue-500 dark:text-blue-400">.</span>
                    <div className="absolute -bottom-3 left-0 h-3 w-full bg-blue-500/10 dark:bg-blue-400/10 transform -skew-x-12 rounded-sm shadow-md"></div>
                </h1>
            </div>

            <div className="flex flex-col items-center mt-10">
                <div className="bg-card border border-border rounded-2xl p-8 shadow-xl w-full max-w-3xl">
                    <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-muted-foreground leading-relaxed font-sans mb-8 text-center">
                        Feel free to reach out for <span className="text-blue-500 dark:text-blue-400 font-bold">collaborations</span> or just to say <span className="text-blue-500 dark:text-blue-400 font-bold">hello</span>!
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                        {socialLinksData.map((link, index) => (
                            <a
                                key={index}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex flex-col items-center justify-center bg-muted/20 dark:bg-muted/10 border border-border hover:border-blue-500/50 dark:hover:border-blue-400/50 rounded-xl p-6 transition-all duration-300 transform hover:-translate-y-1.5 shadow-sm"
                            >
                                <div className="w-14 h-14 flex items-center justify-center bg-background border border-border rounded-full shadow-md mb-4 group-hover:bg-blue-500/10 dark:group-hover:bg-blue-400/10 group-hover:border-blue-500 dark:group-hover:border-blue-400 transition-all duration-300">
                                    <div className="text-blue-500 dark:text-blue-400 flex items-center justify-center">{link.icon}</div>
                                </div>
                                <span className="font-semibold text-lg text-foreground">{link.name}</span>
                                <div className="w-0 group-hover:w-12 h-[3px] bg-blue-500 dark:bg-blue-400 mt-3 transition-all duration-300 rounded-full"></div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SocialLinks;
