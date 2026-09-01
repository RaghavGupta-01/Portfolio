import type React from "react";
import { skillCategories } from "../data";

const MySkills: React.FC = () => {
	return (
		<section
			id="skills"
			className="flex flex-col px-6 md:px-16 lg:px-24 py-20 border-t bg-background text-foreground transition-colors duration-300"
		>
			<div className="pb-16 text-center md:text-left">
				<h2 className="text-[28px] sm:text-[34px] md:text-[42px] lg:text-[50px] font-bold font-sans text-foreground relative inline-block">
					My <span className="text-blue-500 dark:text-blue-400">Skills</span>
					<span className="text-[48px] sm:text-[56px] md:text-[80px] lg:text-[100px] leading-none text-blue-500 dark:text-blue-400">
						.
					</span>
					<div className="absolute -bottom-3 left-0 h-3 w-full bg-blue-500/10 dark:bg-blue-400/10 transform -skew-x-12 rounded-sm shadow-sm" />
				</h2>
			</div>

			<div className="max-w-5xl w-full mx-auto flex flex-col gap-12 md:gap-16 mt-8">
				{skillCategories.map((category) => (
					<div
						key={category.title}
						className="flex flex-col md:flex-row items-start gap-4 md:gap-12 lg:gap-16"
					>
						<div className="w-full md:w-44 lg:w-52 flex-shrink-0">
							<h3 className="text-sm sm:text-base font-bold tracking-[0.2em] text-muted-foreground dark:text-muted-foreground/80 uppercase pt-1">
								{category.title}
							</h3>
						</div>

						<div className="flex-grow grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-8 gap-y-7 w-full">
							{category.skills.map((skill) => (
								<div
									key={skill.name}
									className="flex items-center gap-3.5 group transition-transform duration-200 hover:translate-x-1"
								>
									<div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
										<img
											src={skill.icon}
											alt={skill.name}
											className={`w-full h-full object-contain transition-transform duration-300 group-hover:scale-110 ${
												skill.name.toLowerCase() === "github"
													? "dark:invert"
													: ""
											}`}
											loading="lazy"
										/>
									</div>
									<span className="text-sm sm:text-base font-medium tracking-wide text-foreground/80 dark:text-foreground/90 group-hover:text-foreground transition-colors">
										{skill.name}
									</span>
								</div>
							))}
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default MySkills;
