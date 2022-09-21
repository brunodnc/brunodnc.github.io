import './App.css';
import { Navbar }from './components/Navbar';
import { Projects } from './components/Projects';
import {Linkedin, Github} from '@icons-pack/react-simple-icons'

function App() {
  return (
    <div className="App">
    <Navbar />
    <div id="welcome-section">
      <h1>Bruno Domenico</h1>
      <p><em>Software <strong>and</strong> Web Developer</em></p>
      <div>
        <a className='icons' href="https://github.com/brunodnc" target="_blank" rel="noreferrer">{< Github/>}</a>
        <a className='icons' href="https://www.linkedin.com/in/brunodnc/" target="_blank" rel="noreferrer">{<Linkedin />}</a>
      </div>
      <a className='hero-footer' href="#projects">Projects</a>
    </div>
    <main>
      <Projects />
    </main>
    <footer id="contact">
    <p>Thanks for your kind attention. This page was made using the React framework and is hosted on GitHub Pages,</p>
    </footer>
    </div>
  );
}

export default App;
