import React from 'react';
import ctrlp_img from '../assets/ctrlp_img.png';
import travelgram_img from '../assets/travelgram_img.png';
import manas_img from '../assets/manas_img.png';

interface Project {
    title: string;
    image: string;
    description: string;
    technologies: string[];
    githubLink: string;
    demoLink?: string;
}

const Projects: React.FC = () => {
    const projects: Project[] = [
        {
            title: "CTRLP",
            image: ctrlp_img,
            description: "A fast and efficient document printing solution for students and businesses to print documents remotely.",
            technologies: ["React", "Node.js", "PostgreSQL", "Supabase", "Google OAuth", "Razorpay"],
            githubLink: "https://github.com/RaghavGupta-01/ctrlp-website",
            demoLink: "https://ctrlp.co.in"
        },
        {
            title: "TravelGram",
            image: travelgram_img,
            description: "A social media app to share your travel memories",
            technologies: ["React", "Redux", "MongoDB", "Node.js", "Express", "MUI"],
            githubLink: "https://github.com/RaghavGupta-01/TravelGram",
            demoLink: "https://travelgram-app.vercel.app/posts"
        },
        {
            title: "M.A.N.A.S.",
            image: manas_img,
            description: "Short for 'Mental Health Assistance for Navigating Academic Success', a mental health assistance app for college students made under CRISPR Club of IIITN",
            technologies: ["React", "Node.js", "Express", "MongoDB", "TailwindCSS"],
            githubLink: "https://github.com/RaghavGupta-01/TravelGram"
        }
    ];

    return (
        <section id="projects" className="flex flex-col px-4 md:px-16 lg:px-20 py-12 min-h-screen bg-gradient-to-b from-gray-900 to-black">
            <div className="pb-6 lg:pb-20 md:pb-10">
                <h1 className="text-[28px] sm:text-[34px] md:text-[42px] lg:text-[50px] font-bold font-sans text-white relative inline-block">
                    My <span className="text-blue-400">Projects</span>
                    <span className="text-[48px] sm:text-[56px] md:text-[80px] lg:text-[100px] leading-none text-blue-400">.</span>
                    <div className="absolute -bottom-3 left-0 h-3 w-full bg-white transform -skew-x-12 rounded-sm shadow-lg shadow-white/80"></div>
                </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                {projects.map((project, index) => (
                    <div key={index} className="bg-gray-800 rounded-lg p-6 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-blue-400/20">
                        <h3 className="text-[20px] md:text-[24px] font-bold text-white mb-4">{project.title}</h3>
                        <div className="relative mb-4 group">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-40 transition-opacity"></div>
                            <div className="relative aspect-[5/3] overflow-hidden rounded-lg border-2 border-blue-400/30">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-fill"
                                />
                            </div>
                        </div>
                        <p className="text-gray-300 text-[16px] md:text-[18px] mb-6">{project.description}</p>

                        <div className="flex flex-wrap gap-2 mb-6">
                            {project.technologies.map((tech, techIndex) => (
                                <span key={techIndex} className="px-3 py-1 bg-gray-900 rounded-full border border-blue-400 text-sm text-white">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex gap-4">
                            <a href={project.githubLink} target="_blank" rel="noopener noreferrer"
                                className="px-4 py-2 bg-blue-400 text-black rounded-full font-semibold hover:bg-blue-500 transition-colors">
                                GitHub
                            </a>
                            {project.demoLink && (
                                <a href={project.demoLink} target="_blank" rel="noopener noreferrer"
                                    className="px-4 py-2 bg-gray-900 text-white rounded-full font-semibold border border-blue-400 hover:bg-gray-700 transition-colors">
                                    Live Demo
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
