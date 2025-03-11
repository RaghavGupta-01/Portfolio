import './App.css';
import AboutMe from './components/AboutMe';
import MySkills from './components/MySkills';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AboutMe />
      <MySkills />
    </div>
  );
}

export default App;
