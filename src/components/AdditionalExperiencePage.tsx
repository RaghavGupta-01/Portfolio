import {
	ArrowLeft,
	BarChart3,
	CheckCircle2,
	Cloud,
	Search,
	Workflow,
	Zap,
} from "lucide-react";
import type React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { additionalExperienceData } from "../data";

const iconMap: Record<string, React.ReactNode> = {
	Cloud: <Cloud className="h-6 w-6 text-blue-500 dark:text-blue-400" />,
	Zap: <Zap className="h-6 w-6 text-yellow-500 dark:text-yellow-400" />,
	BarChart3: (
		<BarChart3 className="h-6 w-6 text-emerald-500 dark:text-emerald-400" />
	),
	Search: <Search className="h-6 w-6 text-purple-500 dark:text-purple-400" />,
	Workflow: <Workflow className="h-6 w-6 text-rose-500 dark:text-rose-400" />,
};

const AdditionalExperiencePage: React.FC = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className="min-h-screen bg-background text-foreground transition-colors duration-300 relative overflow-hidden py-10 px-4 sm:px-8 lg:px-16">
			{/* Ambient background glows */}
			<div className="absolute top-10 left-1/4 w-[400px] h-[400px] bg-blue-500/10 dark:bg-blue-400/5 rounded-full blur-[140px] pointer-events-none z-0" />
			<div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-purple-500/10 dark:bg-purple-400/5 rounded-full blur-[140px] pointer-events-none z-0" />

			<div className="max-w-5xl mx-auto relative z-10">
				{/* Top Header & Navigation */}
				<div className="flex items-center justify-between mb-12">
					<Link
						to="/"
						className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-border/70 bg-card/80 backdrop-blur-md text-foreground font-medium text-sm hover:border-blue-500/50 hover:bg-muted/60 transition-all duration-200 shadow-sm group"
					>
						<ArrowLeft className="h-4 w-4 text-blue-500 group-hover:-translate-x-1 transition-transform duration-200" />
						<span>Back to Home</span>
					</Link>
				</div>

				{/* Page Title & Subtitle */}
				<div className="text-center md:text-left pb-12">
					<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground font-sans">
						Additional{" "}
						<span className="text-blue-500 dark:text-blue-400">
							Experience & Work
						</span>
						<span className="text-blue-500 dark:text-blue-400">.</span>
					</h1>
					<p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-3xl leading-relaxed">
						Technical capabilities, production optimizations, and specialized
						tooling built across cloud, analytics, performance, SEO, and design
						systems.
					</p>
				</div>

				{/* Cards Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{additionalExperienceData.map((category, index) => {
						const isFullWidth =
							index === additionalExperienceData.length - 1 &&
							additionalExperienceData.length % 2 !== 0;

						return (
							<div
								key={category.id}
								className={`group relative flex flex-col p-6 sm:p-8 rounded-3xl border border-border/80 bg-card/60 backdrop-blur-xl shadow-md hover:shadow-xl hover:-translate-y-1.5 hover:border-blue-500/40 transition-all duration-300 ${
									isFullWidth ? "md:col-span-2" : ""
								}`}
							>
								{/* Top Header of Card */}
								<div className="flex items-center gap-4 mb-5">
									<div className="p-3.5 rounded-2xl bg-muted/80 border border-border/60 group-hover:scale-105 group-hover:bg-blue-500/10 group-hover:border-blue-500/30 transition-all duration-300">
										{iconMap[category.iconName] || (
											<Cloud className="h-6 w-6 text-blue-500" />
										)}
									</div>
									<h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
										{category.title}
									</h2>
								</div>

								{/* Bullet points */}
								<div className="pt-4 border-t border-border/40">
									<ul className="space-y-3.5">
										{category.points.map((point) => (
											<li
												key={point}
												className="flex items-start gap-3 text-sm sm:text-base text-foreground/90 font-sans leading-relaxed"
											>
												<CheckCircle2 className="h-5 w-5 text-blue-500 dark:text-blue-400 mt-0.5 flex-shrink-0" />
												<span>{point}</span>
											</li>
										))}
									</ul>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default AdditionalExperiencePage;
