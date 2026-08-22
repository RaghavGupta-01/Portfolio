import React from 'react';
import { 
    FaReact, FaNodeJs, FaGitAlt, FaDocker, FaAws, FaGoogle, FaBrain,
    FaHtml5, FaCss3Alt, FaSass, FaGithub, FaJs, FaCreditCard
} from 'react-icons/fa';
import { 
    SiExpress, SiMongodb, SiPostgresql, SiSupabase, SiRazorpay, SiCplusplus, SiC,
    SiTypescript, SiNextdotjs, SiRedux, SiTailwindcss, SiOpenai, SiGooglecloud
} from 'react-icons/si';
import { SkillCategory } from './types';

export const skillCategories: SkillCategory[] = [
    {
        title: "Programming Languages",
        skills: [
            { name: 'TypeScript', icon: React.createElement(SiTypescript, { className: "text-2xl" }) },
            { name: 'JavaScript', icon: React.createElement(FaJs, { className: "text-2xl" }) },
            { name: 'C++', icon: React.createElement(SiCplusplus, { className: "text-2xl" }) },
            { name: 'C', icon: React.createElement(SiC, { className: "text-2xl" }) },
        ]
    },
    {
        title: "Frontend & Design",
        skills: [
            { name: 'React.js', icon: React.createElement(FaReact, { className: "text-2xl" }) },
            { name: 'Next.js', icon: React.createElement(SiNextdotjs, { className: "text-2xl" }) },
            { name: 'Redux', icon: React.createElement(SiRedux, { className: "text-2xl" }) },
            { name: 'HTML5', icon: React.createElement(FaHtml5, { className: "text-2xl" }) },
            { name: 'CSS3', icon: React.createElement(FaCss3Alt, { className: "text-2xl" }) },
            { name: 'Tailwind CSS', icon: React.createElement(SiTailwindcss, { className: "text-2xl" }) },
            { name: 'SCSS', icon: React.createElement(FaSass, { className: "text-2xl" }) },
        ]
    },
    {
        title: "Backend & Databases",
        skills: [
            { name: 'Node.js', icon: React.createElement(FaNodeJs, { className: "text-2xl" }) },
            { name: 'Express.js', icon: React.createElement(SiExpress, { className: "text-2xl" }) },
            { name: 'MongoDB', icon: React.createElement(SiMongodb, { className: "text-2xl" }) },
            { name: 'PostgreSQL', icon: React.createElement(SiPostgresql, { className: "text-2xl" }) },
            { name: 'Supabase', icon: React.createElement(SiSupabase, { className: "text-2xl" }) },
        ]
    },
    {
        title: "APIs & AI Services",
        skills: [
            { name: 'OpenAI API', icon: React.createElement(SiOpenai, { className: "text-2xl" }) },
            { name: 'Gemini API', icon: React.createElement(FaBrain, { className: "text-2xl" }) },
            { name: 'Google Document AI', icon: React.createElement(SiGooglecloud, { className: "text-2xl" }) },
            { name: 'Google OAuth', icon: React.createElement(FaGoogle, { className: "text-2xl" }) },
            { name: 'Razorpay', icon: React.createElement(SiRazorpay, { className: "text-2xl" }) },
            { name: 'CashFree', icon: React.createElement(FaCreditCard, { className: "text-2xl" }) },
        ]
    },
    {
        title: "Tools & Cloud Platforms",
        skills: [
            { name: 'Git', icon: React.createElement(FaGitAlt, { className: "text-2xl" }) },
            { name: 'GitHub', icon: React.createElement(FaGithub, { className: "text-2xl" }) },
            { name: 'AWS (S3)', icon: React.createElement(FaAws, { className: "text-2xl" }) },
            { name: 'Docker', icon: React.createElement(FaDocker, { className: "text-2xl" }) },
        ]
    }
];
