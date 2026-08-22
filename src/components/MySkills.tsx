import React from 'react';
import { FaCode, FaReact, FaNodeJs, FaUsers, FaComment, FaGitAlt, FaDocker, FaAws, FaGoogle, FaBrain } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiPostgresql, SiSupabase, SiRazorpay, SiCplusplus, SiC } from 'react-icons/si';

interface Skill {
    name: string;
    icon: React.ReactNode;
}

const MySkills: React.FC = () => {
    const technicalSkills: Skill[] = [
        { name: 'C', icon: <SiC className="text-5xl" /> },
        { name: 'C++', icon: <SiCplusplus className="text-5xl" /> },
        { name: 'OOPS', icon: <FaCode className="text-5xl" /> },
        { name: 'React.js', icon: <FaReact className="text-5xl" /> },
        { name: 'Node.js', icon: <FaNodeJs className="text-5xl" /> },
        { name: 'Express.js', icon: <SiExpress className="text-5xl" /> },
        { name: 'MongoDB', icon: <SiMongodb className="text-5xl" /> },
        { name: 'PostgreSQL', icon: <SiPostgresql className="text-5xl" /> },
    ];

    const softSkills: Skill[] = [
        { name: 'Communication', icon: <FaComment className="text-3xl" /> },
        { name: 'Teamwork', icon: <FaUsers className="text-3xl" /> },
    ];

    const toolsFrameworks: Skill[] = [
        { name: 'Git', icon: <FaGitAlt className="text-5xl" /> },
        { name: 'GitHub', icon: <FaGitAlt className="text-5xl" /> },
        { name: 'AWS', icon: <FaAws className="text-5xl" /> },
        { name: 'Docker', icon: <FaDocker className="text-5xl" /> },
        { name: 'Supabase', icon: <SiSupabase className="text-5xl" /> },
        { name: 'Razorpay', icon: <SiRazorpay className="text-5xl" /> },
        { name: 'Google OAuth', icon: <FaGoogle className="text-5xl" /> },
        { name: 'AI Fundamentals', icon: <FaBrain className="text-5xl" /> },
    ];

    const duplicateSkills = (skills: Skill[]): Skill[] => [...skills, ...skills, ...skills, ...skills, ...skills];

    return (
        <section id="skills" className="flex flex-col px-4 md:px-16 lg:px-20 py-12 min-h-screen bg-gradient-to-b from-gray-900 to-black">
            <div className="text-center pb-6 lg:pb-12 md:pb-10">
                <h1 className="text-[28px] sm:text-[34px] md:text-[42px] lg:text-[50px] font-bold font-sans text-white relative inline-block">
                    My <span className="text-blue-400">Skills</span>
                    <span className="text-[48px] sm:text-[56px] md:text-[80px] lg:text-[100px] leading-none text-blue-400">.</span>
                    <div className="absolute -bottom-3 left-0 h-3 w-full bg-white transform -skew-x-12 rounded-sm shadow-lg shadow-white/80"></div>
                </h1>
            </div>

            <div className="flex flex-col gap-16 mt-10">
                {/* Technical Skills */}
                <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 shadow-lg">
                    <div className="flex items-center justify-center px-6 py-3 bg-gray-800 rounded-full mx-auto mb-6 -mt-10 shadow-md w-fit">
                        <FaCode className="text-blue-400 mr-3" />
                        <h2 className="text-xl font-bold text-white">Technical Skills</h2>
                    </div>
                    <div className="overflow-hidden w-full relative">
                        <div className="flex whitespace-nowrap animate-scroll py-6">
                            {duplicateSkills(technicalSkills).map((skill, index) => (
                                <div key={index} className="inline-flex flex-col items-center justify-center mx-14 text-white">
                                    <div className="text-blue-400 mb-2 transform hover:scale-110 transition-transform duration-300">{skill.icon}</div>
                                    <span className="font-medium">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Tools & Frameworks */}
                <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 shadow-lg">
                    <div className="flex items-center justify-center px-6 py-3 bg-gray-800 rounded-full mx-auto mb-6 -mt-10 shadow-md w-fit">
                        <FaDocker className="text-blue-400 mr-3" />
                        <h2 className="text-xl font-bold text-white">Tools & Frameworks</h2>
                    </div>
                    <div className="overflow-hidden w-full relative py-6">
                        <div className="flex whitespace-nowrap animate-scroll">
                            {duplicateSkills(toolsFrameworks).map((skill, index) => (
                                <div key={index} className="inline-flex flex-col items-center justify-center mx-12 text-white">
                                    <div className="text-blue-400 mb-2 transform hover:scale-110 transition-transform duration-300">{skill.icon}</div>
                                    <span className="font-medium">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Soft Skills */}
                <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 shadow-lg">
                    <div className="flex items-center justify-center px-6 py-3 bg-gray-800 rounded-full mx-auto mb-6 -mt-10 shadow-md w-fit">
                        <FaUsers className="text-blue-400 mr-3" />
                        <h2 className="text-xl font-bold text-white">Soft Skills</h2>
                    </div>
                    <div className="grid grid-cols-2 gap-8 w-full py-6">
                        {softSkills.map((skill, index) => (
                            <div key={index} className="flex flex-col items-center justify-center">
                                <div className="w-24 h-24 flex items-center justify-center bg-gray-800 rounded-full border-2 border-blue-400 shadow-lg mb-4 transform hover:scale-110 transition-transform duration-300">
                                    <div className="text-blue-400 text-4xl">{skill.icon}</div>
                                </div>
                                <span className="font-medium text-xl text-white">{skill.name}</span>
                                <div className="w-full mt-4 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CSS for animations */}
            <style>{`
                @keyframes scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }

                @keyframes scrollReverse {
                    0% { transform: translateX(-50%); }
                    100% { transform: translateX(0); }
                }

                .animate-scroll {
                    animation: scroll 30s linear infinite;
                }

                .animate-scroll-reverse {
                    animation: scrollReverse 30s linear infinite;
                }
                @keyframes scroll-768 {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-420%); }
                }

                @media (max-width: 768px) {
                    .animate-scroll {
                        animation: scroll-768 10s linear infinite;
                    }

                    .animate-scroll-reverse {
                        animation: scrollReverse 10s linear infinite;
                    }
                }
            `}</style>
        </section>
    );
};

export default MySkills;
