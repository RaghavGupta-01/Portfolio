import ctrlpImg from "../assets/ctrlp_img.png";
import manasImg from "../assets/manas_img.png";
import travelgramImg from "../assets/travelgram_img.png";
import type { Project } from "./types";

export const projectsData: Project[] = [
	{
		title: "CTRLP",
		image: ctrlpImg,
		description:
			"A fast and efficient document printing solution for students and businesses to print documents remotely.",
		technologies: [
			"React",
			"Node.js",
			"PostgreSQL",
			"Supabase",
			"Google OAuth",
			"Razorpay",
		],
		githubLink: "https://github.com/RaghavGupta-01/ctrlp-website",
		demoLink: "https://ctrlp.co.in",
	},
	{
		title: "TravelGram",
		image: travelgramImg,
		description: "A social media app to share your travel memories",
		technologies: ["React", "Redux", "MongoDB", "Node.js", "Express", "MUI"],
		githubLink: "https://github.com/RaghavGupta-01/TravelGram",
		demoLink: "https://travelgram-app.vercel.app/posts",
	},
	{
		title: "M.A.N.A.S.",
		image: manasImg,
		description:
			"Short for 'Mental Health Assistance for Navigating Academic Success', a mental health assistance app for college students made under CRISPR Club of IIITN",
		technologies: ["React", "Node.js", "Express", "MongoDB", "TailwindCSS"],
		githubLink: "https://github.com/RaghavGupta-01/TravelGram",
	},
];
