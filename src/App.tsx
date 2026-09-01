import type React from "react";
import "./App.css";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import MySkills from "./components/MySkills";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import { ThemeProvider } from "./context/ThemeContext";

const App: React.FC = () => {
	return (
		<ThemeProvider>
			<div className="relative min-h-screen bg-background text-foreground transition-colors duration-300">
				<Navbar />
				<AboutMe />
				<MySkills />
				<Experience />
				<Projects />
				<Footer />
			</div>
		</ThemeProvider>
	);
};

export default App;
