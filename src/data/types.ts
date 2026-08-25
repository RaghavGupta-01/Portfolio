import React from 'react';

export interface ProfileData {
    name: string;
    profileImage: string;
    role: string;
    bio: string[];
    skillsTags: string[];
}

export interface Skill {
    name: string;
    icon: React.ReactNode;
}

export interface SkillCategory {
    title: string;
    skills: Skill[];
}

export interface Project {
    title: string;
    image: string;
    description: string;
    technologies: string[];
    githubLink: string;
    demoLink?: string;
}

export interface SocialLink {
    name: string;
    icon: React.ReactNode;
    url: string;
}

export interface Role {
    title: string;
    date: string;
    location: string;
    points: string[];
}

export interface Experience {
    company: string;
    roles: Role[];
}
