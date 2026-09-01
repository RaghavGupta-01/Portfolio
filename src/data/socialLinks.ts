import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import type { SocialLink } from "./types";

export const socialLinksData: SocialLink[] = [
	{
		name: "GitHub",
		icon: React.createElement(FaGithub, { className: "text-4xl" }),
		url: "https://github.com/RaghavGupta-01",
	},
	{
		name: "LinkedIn",
		icon: React.createElement(FaLinkedin, { className: "text-4xl" }),
		url: "https://www.linkedin.com/in/raghav-gupta-b00899264/",
	},
	{
		name: "Email",
		icon: React.createElement(MdEmail, { className: "text-4xl" }),
		url: "mailto:raghav010304@gmail.com",
	},
];
