import { ExternalLink } from "lucide-react";
import type React from "react";
import { projectsData } from "../data";

const Github = ({ className }: { className?: string }) => (
	<svg
		className={className}
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
	>
		<title>GitHub</title>
		<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
		<path d="M9 18c-4.51 2-5-2-7-2" />
	</svg>
);

const Projects: React.FC = () => {
	return (
		<section
			id="projects"
			className="flex flex-col px-4 md:px-16 lg:px-20 py-16 border-t bg-background text-foreground transition-colors duration-300"
		>
			<div className="pb-6 lg:pb-12 md:pb-10">
				<h1 className="text-[28px] sm:text-[34px] md:text-[42px] lg:text-[50px] font-bold font-sans text-foreground relative inline-block">
					My <span className="text-blue-500 dark:text-blue-400">Projects</span>
					<span className="text-[48px] sm:text-[56px] md:text-[80px] lg:text-[100px] leading-none text-blue-500 dark:text-blue-400">
						.
					</span>
					<div className="absolute -bottom-3 left-0 h-3 w-full bg-blue-500/10 dark:bg-blue-400/10 transform -skew-x-12 rounded-sm shadow-md" />
				</h1>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
				{projectsData.map((project) => (
					<div
						key={project.title}
						className="bg-card border border-border rounded-xl p-6 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col justify-between"
					>
						<div>
							<h3 className="text-[20px] md:text-[24px] font-bold text-foreground mb-4">
								{project.title}
							</h3>

							<div className="relative mb-4 group">
								<div className="absolute inset-0 bg-blue-500/10 dark:bg-blue-400/10 rounded-lg blur opacity-50 group-hover:opacity-75 transition-opacity" />
								<div className="relative aspect-[5/3] overflow-hidden rounded-lg border border-border">
									<img
										src={project.image}
										alt={project.title}
										className="w-full h-full object-cover"
									/>
								</div>
							</div>

							<p className="text-muted-foreground text-sm sm:text-base mb-6 leading-relaxed">
								{project.description}
							</p>
						</div>

						<div>
							<div className="flex flex-wrap gap-2 mb-6">
								{project.technologies.map((tech) => (
									<span
										key={tech}
										className="px-3 py-1 bg-muted/50 border border-border text-xs font-semibold rounded-full text-foreground"
									>
										{tech}
									</span>
								))}
							</div>

							<div className="flex gap-3">
								<a
									href={project.githubLink}
									target="_blank"
									rel="noopener noreferrer"
									className="flex-1 flex items-center justify-center gap-1.5 px-4 py-2.5 bg-blue-500 hover:bg-blue-600 text-white rounded-xl font-semibold text-sm transition-colors"
								>
									<Github className="h-4 w-4" />
									Code
								</a>
								{project.demoLink && (
									<a
										href={project.demoLink}
										target="_blank"
										rel="noopener noreferrer"
										className="flex-1 flex items-center justify-center gap-1.5 px-4 py-2.5 border bg-background hover:bg-muted text-foreground rounded-xl font-semibold text-sm transition-colors"
									>
										<ExternalLink className="h-4 w-4" />
										Live Demo
									</a>
								)}
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Projects;
