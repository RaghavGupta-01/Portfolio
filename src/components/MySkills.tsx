import React from 'react';
import { skillCategories } from '../data';

const MySkills: React.FC = () => {
    return (
        <section id="skills" className="flex flex-col px-4 md:px-16 lg:px-20 py-12 min-h-screen bg-gradient-to-b from-gray-900 to-black">
            <div className="text-center pb-6 lg:pb-12 md:pb-10">
                <h1 className="text-[28px] sm:text-[34px] md:text-[42px] lg:text-[50px] font-bold font-sans text-white relative inline-block">
                    My <span className="text-blue-400">Skills</span>
                    <span className="text-[48px] sm:text-[56px] md:text-[80px] lg:text-[100px] leading-none text-blue-400">.</span>
                    <div className="absolute -bottom-3 left-0 h-3 w-full bg-white transform -skew-x-12 rounded-sm shadow-lg shadow-white/80"></div>
                </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                {skillCategories.map((category, index) => (
                    <div 
                        key={index} 
                        className={`bg-gray-800/80 border border-blue-400/10 rounded-xl p-6 hover:border-blue-400/40 hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-300 flex flex-col justify-start ${
                            index === 3 || index === 4 ? 'lg:col-span-1 md:col-span-2 lg:md:col-span-1' : ''
                        }`}
                    >
                        <h3 className="text-xl font-bold text-white mb-6 border-b border-gray-700/60 pb-3 flex items-center gap-3">
                            <span className="w-2.5 h-2.5 rounded-full bg-blue-400 shadow-md shadow-blue-400/50"></span>
                            {category.title}
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            {category.skills.map((skill, skillIdx) => (
                                <div 
                                    key={skillIdx} 
                                    className="flex items-center gap-3 bg-gray-900/90 border border-gray-800 hover:border-blue-400/30 rounded-lg px-4 py-2.5 text-gray-300 hover:text-white transition-all duration-300 transform hover:-translate-y-0.5 hover:bg-gray-900"
                                >
                                    <span className="text-blue-400 transform hover:scale-110 transition-transform duration-300 flex items-center">
                                        {skill.icon}
                                    </span>
                                    <span className="text-sm font-semibold tracking-wide">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default MySkills;
