import type { AdditionalExperienceCategory } from "./types";

export const additionalExperienceData: AdditionalExperienceCategory[] = [
	{
		id: "cloud-infrastructure",
		title: "Cloud & Infrastructure",
		iconName: "Cloud",
		points: [
			"Google Cloud Console application creation and verification.",
			"Firebase configuration and analytics integration.",
			"Application environment and deployment configuration.",
		],
	},
	{
		id: "performance-quality",
		title: "Performance & Quality",
		iconName: "Zap",
		points: [
			"Lighthouse-based performance, accessibility, SEO, and best-practice audits.",
			"Google PageSpeed Insights analysis and Core Web Vitals optimization.",
			"Frontend profiling, performance debugging, and page-load optimization.",
		],
	},
	{
		id: "analytics-tracking",
		title: "Analytics & Tracking",
		iconName: "BarChart3",
		points: [
			"Firebase Analytics integration for user and interaction event tracking.",
			"Google Tag Manager configuration and tag management.",
			"Google Analytics (gtag) integration and event instrumentation.",
		],
	},
	{
		id: "seo-web-platform",
		title: "SEO & Web Platform",
		iconName: "Search",
		points: [
			"Root HTML optimization for metadata, Open Graph, canonical URLs, and indexing.",
			"XML sitemap creation and optimization for search-engine discoverability.",
			"Search-engine crawling and indexing configuration.",
		],
	},
	{
		id: "design-systems-automation",
		title: "Design Systems & Automation",
		iconName: "Workflow",
		points: [
			"Python-based extraction of design primitive tokens (colors, spacing, typography) from Figma files.",
			"Automated conversion of extracted design tokens into SCSS primitive variables.",
			"Development of scripts to automate repetitive design-system workflows.",
		],
	},
];
