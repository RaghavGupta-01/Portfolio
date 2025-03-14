import './App.css';
import AboutMe from './components/AboutMe';
import MySkills from './components/MySkills';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import SocialLinks from './components/SocialLinks';
function App() {
  return (
    <div className="App">
      <Navbar />
      <AboutMe />
      <MySkills />
      <Projects />
      <SocialLinks />
    </div>
  );
}

export default App;
