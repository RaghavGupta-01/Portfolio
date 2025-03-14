import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const SocialLinks = () => {
    const socialLinks = [
        { name: 'GitHub', icon: <FaGithub className="text-4xl" />, url: 'https://github.com/RaghavGupta-01' },
        { name: 'LinkedIn', icon: <FaLinkedin className="text-4xl" />, url: 'https://www.linkedin.com/in/raghav-gupta-b00899264/' },
        { name: 'Email', icon: <MdEmail className="text-4xl" />, url: 'mailto:raghav010304@gmail.com' }
    ];

    return (
        <section id="social-links" className="flex flex-col px-4 md:px-16 lg:px-20 py-12 bg-gradient-to-b from-gray-900 to-black">
            <div className="text-center pb-6 lg:pb-12 md:pb-10">
                <h1 className="text-[28px] sm:text-[34px] md:text-[42px] lg:text-[50px] font-bold font-sans text-white relative inline-block">
                    Connect <span className="text-blue-400">With Me</span>
                    <span className="text-[48px] sm:text-[56px] md:text-[80px] lg:text-[100px] leading-none text-blue-400">.</span>
                    <div className="absolute -bottom-3 left-0 h-3 w-full bg-white transform -skew-x-12 rounded-sm shadow-lg shadow-white/80"></div>
                </h1>
            </div>

            <div className="flex flex-col items-center mt-10">
                <div className="bg-gray-900 rounded-lg p-8 border border-gray-800 shadow-lg w-full max-w-3xl">
                    <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-gray-300 leading-relaxed font-sans mb-8 text-center">
                        Feel free to reach out for <span className="text-blue-400 font-bold">collaborations</span> or just to say <span className="text-blue-400 font-bold">hello</span>!
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                        {socialLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex flex-col items-center justify-center bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-blue-400 transition-all duration-300 transform hover:-translate-y-2"
                            >
                                <div className="w-16 h-16 flex items-center justify-center bg-gray-900 rounded-full border-2 border-blue-400 shadow-lg mb-4 group-hover:bg-blue-400/10 transition-all duration-300">
                                    <div className="text-blue-400">{link.icon}</div>
                                </div>
                                <span className="font-medium text-xl text-white">{link.name}</span>
                                <div className="w-0 group-hover:w-full h-1 bg-blue-400 mt-4 transition-all duration-300 rounded-full"></div>
                            </a>
                        ))}
                    </div>

                    {/* <div className="mt-10 text-center">
                        <div className="inline-flex items-center px-6 py-3 bg-gray-800 rounded-full border border-blue-400 shadow-md">
                            <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                            <span className="text-white">Currently open to opportunities</span>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    );
};

export default SocialLinks;