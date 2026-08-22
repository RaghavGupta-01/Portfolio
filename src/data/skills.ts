import React from 'react';
import { FaCode, FaReact, FaNodeJs, FaUsers, FaComment, FaGitAlt, FaDocker, FaAws, FaGoogle, FaBrain } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiPostgresql, SiSupabase, SiRazorpay, SiCplusplus, SiC } from 'react-icons/si';
import { Skill } from './types';

export const technicalSkills: Skill[] = [
    { name: 'C', icon: React.createElement(SiC, { className: "text-5xl" }) },
    { name: 'C++', icon: React.createElement(SiCplusplus, { className: "text-5xl" }) },
    { name: 'OOPS', icon: React.createElement(FaCode, { className: "text-5xl" }) },
    { name: 'React.js', icon: React.createElement(FaReact, { className: "text-5xl" }) },
    { name: 'Node.js', icon: React.createElement(FaNodeJs, { className: "text-5xl" }) },
    { name: 'Express.js', icon: React.createElement(SiExpress, { className: "text-5xl" }) },
    { name: 'MongoDB', icon: React.createElement(SiMongodb, { className: "text-5xl" }) },
    { name: 'PostgreSQL', icon: React.createElement(SiPostgresql, { className: "text-5xl" }) },
];

export const softSkills: Skill[] = [
    { name: 'Communication', icon: React.createElement(FaComment, { className: "text-3xl" }) },
    { name: 'Teamwork', icon: React.createElement(FaUsers, { className: "text-3xl" }) },
];

export const toolsFrameworks: Skill[] = [
    { name: 'Git', icon: React.createElement(FaGitAlt, { className: "text-5xl" }) },
    { name: 'GitHub', icon: React.createElement(FaGitAlt, { className: "text-5xl" }) },
    { name: 'AWS', icon: React.createElement(FaAws, { className: "text-5xl" }) },
    { name: 'Docker', icon: React.createElement(FaDocker, { className: "text-5xl" }) },
    { name: 'Supabase', icon: React.createElement(SiSupabase, { className: "text-5xl" }) },
    { name: 'Razorpay', icon: React.createElement(SiRazorpay, { className: "text-5xl" }) },
    { name: 'Google OAuth', icon: React.createElement(FaGoogle, { className: "text-5xl" }) },
    { name: 'AI Fundamentals', icon: React.createElement(FaBrain, { className: "text-5xl" }) },
];
