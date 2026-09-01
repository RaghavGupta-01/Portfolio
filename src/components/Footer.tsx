import type React from "react";
import { socialLinksData } from "../data";

const Footer: React.FC = () => {
	return (
		<footer
			id="contact"
			className="border-t border-border/50 bg-background text-foreground py-12 px-6 md:px-16 lg:px-24 transition-colors duration-300"
		>
			<div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
				{/* Copyright info */}
				<div className="flex flex-col gap-1.5">
					<p className="text-sm text-muted-foreground font-sans">
						© {new Date().getFullYear()} Raghav Gupta. All rights reserved.
					</p>
					<p className="text-xs text-muted-foreground font-sans">
						Built with React, TypeScript & Tailwind CSS
					</p>
				</div>

				{/* Minimalist social links */}
				<div className="flex items-center gap-6 text-sm text-muted-foreground font-medium font-sans">
					{socialLinksData.map((link) => (
						<a
							key={link.name}
							href={link.url}
							target="_blank"
							rel="noopener noreferrer"
							className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200"
						>
							{link.name}
						</a>
					))}
				</div>
			</div>
		</footer>
	);
};

export default Footer;
