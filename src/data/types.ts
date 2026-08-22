import React from 'react';

export interface AboutMeData {
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
