import type React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import MySkills from "./components/MySkills";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import { ThemeProvider } from "./context/ThemeContext";

const HomePage: React.FC = () => (
	<main id="main-content">
		<AboutMe />
		<MySkills />
		<Experience />
		<Projects />
	</main>
);

const App: React.FC = () => {
	return (
		<ThemeProvider>
			<HashRouter>
				<div className="relative min-h-screen bg-background text-foreground transition-colors duration-300 flex flex-col justify-between">
					<div>
						<Navbar />
						<Routes>
							<Route path="/" element={<HomePage />} />
						</Routes>
					</div>
					<Footer />
				</div>
			</HashRouter>
		</ThemeProvider>
	);
};

export default App;
