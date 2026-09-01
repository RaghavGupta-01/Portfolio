import type { Experience } from "./types";

export const experienceData: Experience[] = [
	{
		company: "Wobbitech",
		roles: [
			{
				title: "Frontend Developer Intern",
				date: "May 2026 – Jul 2026",
				location: "Melbourne, Australia (Remote)",
				points: [
					"Engineered a shared React + TypeScript design system of 52 reusable components, replacing manual UI implementations across 10 product modules with a single importable package, consolidating 20,000+ lines of redundant code.",
					"Designed flexible, reusable component APIs achieving pixel-perfect Figma implementations with full responsive layout and light/dark theme support.",
					"Converted Figma designs into frontend code and integrated REST APIs using TanStack Query across 3 product modules.",
				],
			},
		],
	},
	{
		company: "Circuit House Technologies (Lumio)",
		roles: [
			{
				title: "Frontend Developer Intern",
				date: "Oct 2025 – Apr 2026",
				location: "Bengaluru, India",
				points: [
					"Developed responsive UI components using Astro, React.js, and TypeScript for an OTT content discovery platform, implementing Figma designs with pixel accuracy.",
					"Replaced 1,000 lines of hardcoded article and media data with a Strapi CMS-driven SSG pipeline, reducing build time 64s → 21s and enabling content updates without deployments.",
					"Optimized image delivery using AVIF, lazy loading, and quality controls, reducing load time 10s → 3s on 4G and less than 1s on 5G.",
					"Migrated 444MB of media assets to AWS S3 + CloudFront CDN, reducing asset storage 523MB → 78MB (85%) and overall project size 2.86GB → 2.42GB.",
				],
			},
		],
	},
	{
		company: "INFLEKT Core Pvt. Ltd.",
		roles: [
			{
				title: "Software Developer Intern",
				date: "Jul 2025 – Sept 2025",
				location: "Gurugram, India",
				points: [
					"Built a document timeline extraction feature using Google Document AI + OpenAI API in Next.js that converts uploaded legal PDFs into chronological event timelines with highlighted source text.",
					"Integrated Cashfree Payment Gateway into a challan payment platform, streamlining digital transactions and ensuring secure payment processing.",
				],
			},
		],
	},
];
