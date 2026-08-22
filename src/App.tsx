import React from 'react';
import './App.css';
import AboutMe from './components/AboutMe';
import MySkills from './components/MySkills';
import Experience from './components/Experience';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import SocialLinks from './components/SocialLinks';

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <AboutMe />
      <MySkills />
      <Experience />
      <Projects />
      <SocialLinks />
    </div>
  );
}

export default App;
