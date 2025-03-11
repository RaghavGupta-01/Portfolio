import React from 'react';
import profile_image from '../assets/profile_image.png';

const AboutMe = () => {
    return (
        <section id='about' className="flex flex-col px-4 md:px-16 lg:px-20 py-12 min-h-screen bg-gradient-to-b from-gray-900 to-black">
            <div className="pb-6 lg:pb-20 md:pb-10">
                <h1 className="text-[28px] sm:text-[34px] md:text-[42px] lg:text-[50px] font-bold font-sans text-white relative inline-block">
                    About <span className="text-blue-400">Me</span>
                    <span className="text-[48px] sm:text-[56px] md:text-[80px] lg:text-[100px] leading-none text-blue-400">.</span>

                    <div className="absolute -bottom-3 left-0 h-3 w-full bg-white transform -skew-x-12 rounded-sm shadow-lg shadow-white/80"></div>
                </h1>
            </div>

            {/* Mobile profile image */}
            <div className="md:hidden w-full flex justify-center mb-10 mt-10">
                <div className="relative">
                    <div className="absolute inset-0 bg-blue-400 rounded-lg transform rotate-3"></div>
                    <img
                        src={profile_image}
                        alt="Profile"
                        className="relative w-64 sm:w-80 h-auto rounded-lg border-2 border-gray-700 shadow-lg transform -rotate-2 transition-transform duration-300 hover:rotate-0"
                    />
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-16 lg:gap-24">
                <div className="flex-1 w-full">
                    <div className="mb-8 md:mb-10">
                        <h2 className="text-[24px] sm:text-[28px] text-center md:text-left md:text-[36px] lg:text-[42px] font-bold text-white underline decoration-white underline-offset-8">
                            I am <span className="text-blue-400 font-extrabold">Raghav Gupta</span>
                            <span className="text-[24px] sm:text-[28px] md:text-[36px] lg:text-[42px] leading-none text-white-400">.</span>
                        </h2>
                        {/* <p className="text-left text-gray-400 text-[16px] sm:text-[18px] md:text-[20px] mt-2">
                              Turning ideas into elegant code
                            </p> */}
                    </div>

                    <div className="flex-1">
                        <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] text-gray-300 leading-relaxed font-sans mb-6">
                            A <span className="text-blue-400 font-bold">Third-year Computer Science student</span> with hands-on experience in full-stack web development
                        </p>

                        <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] text-gray-300 leading-relaxed font-sans mb-6">
                            Passionate about building <span className="font-semibold text-white">scalable SaaS solutions</span> and
                            <span className="font-semibold text-white"> innovative applications</span>.
                        </p>

                        <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] text-gray-300 leading-relaxed font-sans">
                            Seeking opportunities to apply my <span className="italic text-blue-400">problem-solving skills</span> and
                            <span className="italic text-blue-400"> technical expertise</span> in real-world projects.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-3">
                            <div className="px-4 py-2 bg-gray-800 rounded-full border border-blue-400 shadow-md text-white">React</div>
                            <div className="px-4 py-2 bg-gray-800 rounded-full border border-blue-400 shadow-md text-white">Node.js</div>
                            <div className="px-4 py-2 bg-gray-800 rounded-full border border-blue-400 shadow-md text-white">MongoDB</div>
                            <div className="px-4 py-2 bg-gray-800 rounded-full border border-blue-400 shadow-md text-white">PostgreSQL</div>
                            <div className="px-4 py-2 bg-gray-800 rounded-full border border-blue-400 shadow-md text-white">AI</div>
                        </div>
                    </div>
                </div>

                {/* Desktop profile image */}
                <div className="hidden md:flex flex-1 justify-center items-center">
                    <div className="relative">
                        <div className="absolute inset-0 bg-blue-400 rounded-lg transform rotate-3"></div>
                        <img
                            src={profile_image}
                            alt="Profile"
                            className="relative w-72 md:w-96 lg:w-120 h-auto rounded-lg border-2 border-gray-700 shadow-xl transform -rotate-2 transition-transform duration-300 hover:rotate-0"
                        />
                    </div>
                </div>
            </div>

            {/* <div className="mt-12 pt-6 border-t border-gray-800">
                <div className="flex items-center px-6 py-3 bg-gray-800 rounded-full inline-block">
                    <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                    <span className="text-white">Currently open to opportunities</span>
                </div>
            </div> */}

        </section>
    );
};

export default AboutMe;