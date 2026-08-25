import React from 'react';
import './App.css';
import AboutMe from './components/AboutMe';
import MySkills from './components/MySkills';
import Experience from './components/Experience';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import SocialLinks from './components/SocialLinks';
import { ThemeProvider } from './context/ThemeContext';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-background text-foreground transition-colors duration-300">
        <Navbar />
        <AboutMe />
        <MySkills />
        <Experience />
        <Projects />
        <SocialLinks />
      </div>
    </ThemeProvider>
  );
}

export default App;
