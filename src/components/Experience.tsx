import { ArrowRight, MapPin } from "lucide-react";
import type React from "react";
import circuithouse from "../assets/circuit_house_tech_logo.jpg";
import inflekt from "../assets/inflekt_logo.png";
import wobbitech from "../assets/wobitech_logo.jpg";
import { experienceData } from "../data";

const Experience: React.FC = () => {
	const getCompanyLogo = (company: string): string | null => {
		const lower = company.toLowerCase();
		if (lower.includes("wobbi")) return wobbitech;
		if (lower.includes("circuit")) return circuithouse;
		if (lower.includes("inflekt")) return inflekt;
		return null;
	};

	return (
		<section
			id="experience"
			className="relative flex flex-col px-6 md:px-16 lg:px-24 py-20 border-t bg-background text-foreground transition-colors duration-300 overflow-hidden"
		>
			<div className="absolute top-1/4 left-1/3 w-[300px] h-[300px] bg-blue-500/5 dark:bg-blue-400/5 rounded-full blur-[130px] pointer-events-none z-0" />
			<div className="absolute bottom-1/4 right-1/3 w-[300px] h-[300px] bg-blue-400/5 dark:bg-blue-500/5 rounded-full blur-[130px] pointer-events-none z-0" />

			<div className="pb-16 text-center md:text-left z-10">
				<h2 className="text-[28px] sm:text-[34px] md:text-[42px] lg:text-[50px] font-bold font-sans text-foreground relative inline-block">
					My{" "}
					<span className="text-blue-500 dark:text-blue-400">Experience</span>
					<span className="text-[48px] sm:text-[56px] md:text-[80px] lg:text-[100px] leading-none text-blue-500 dark:text-blue-400">
						.
					</span>
					<div className="absolute -bottom-3 left-0 h-3 w-full bg-blue-500/10 dark:bg-blue-400/10 transform -skew-x-12 rounded-sm shadow-sm" />
				</h2>
			</div>

			<div className="relative max-w-4xl w-full mx-auto mt-6 z-10">
				<div className="flex flex-col gap-14">
					{experienceData.map((exp) => {
						const logoSrc = getCompanyLogo(exp.company);

						return (
							<div key={exp.company} className="relative flex flex-col w-full">
								<div className="flex items-center mb-8 relative">
									<div className="absolute -left-1 sm:left-[20px] w-14 h-14 rounded-full border-2 border-border bg-card text-foreground flex items-center justify-center z-10 shadow-md font-extrabold text-xl sm:text-2xl overflow-hidden">
										{logoSrc ? (
											<img
												src={logoSrc}
												alt={exp.company}
												className="w-full h-full object-cover"
											/>
										) : (
											exp.company[0]
										)}
									</div>

									<div className="pl-16 sm:pl-24">
										<h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-foreground">
											{exp.company}
										</h3>
									</div>
								</div>
								<div className="flex flex-col gap-10 relative w-full">
									<div className="absolute left-[23px] sm:left-[47px] top-[14px] bottom-[0px] w-[2px] bg-blue-400 dark:bg-blue-400 pointer-events-none" />
									{exp.roles.map((role) => (
										<div
											key={`${exp.company}-${role.title}`}
											className="relative flex flex-col w-full pl-16 sm:pl-24"
										>
											{/* Smaller dot for the specific role on the timeline */}
											<div className="absolute left-4 sm:left-10 top-1.5 w-4 h-4 rounded-full border-2 border-muted-foreground/30 bg-background dark:bg-slate-900 z-[15] flex items-center justify-center">
												<div className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400" />
											</div>

											{/* Role details */}
											<div className="flex flex-col w-full">
												{/* Role Title and Dates */}
												<div className="flex flex-col md:flex-row md:items-start justify-between gap-2.5 mb-2">
													<h4 className="text-lg sm:text-xl font-bold tracking-tight text-foreground leading-snug">
														{role.title}
													</h4>
													<span className="inline-flex items-center text-xs font-semibold px-3 py-1.5 bg-muted/65 border border-border/80 rounded-full text-foreground whitespace-nowrap self-start md:self-auto">
														{role.date}
													</span>
												</div>

												{/* Location */}
												<div className="flex items-center gap-1.5 text-xs sm:text-sm text-muted-foreground/80 mb-4 font-medium">
													<MapPin className="h-4 w-4 text-muted-foreground/50 flex-shrink-0" />
													<span>{role.location}</span>
												</div>

												{/* Points / Achievements (Clean list without card borders) */}
												<div className="mt-2 pl-1">
													<ul className="space-y-3.5">
														{role.points.map((pt) => (
															<li
																key={pt}
																className="flex gap-2.5 items-start leading-relaxed text-sm sm:text-base text-muted-foreground hover:text-foreground transition-colors duration-200"
															>
																<ArrowRight className="h-[18px] w-[18px] text-blue-500 dark:text-blue-400 mt-1 flex-shrink-0" />
																<span className="text-foreground/90 dark:text-foreground/85 font-sans">
																	{pt}
																</span>
															</li>
														))}
													</ul>
												</div>
											</div>
										</div>
									))}
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Experience;
