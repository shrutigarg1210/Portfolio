import Navbar from './components/Navbar';
import Skills from './components/skills/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import Project from './components/Project';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Home/>
     <Skills/>
     <Project/>
     <Contact/>
    <Footer/>
    </div>
  );
}

export default App;
