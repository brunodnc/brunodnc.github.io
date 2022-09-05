import './App.css';
import { Navbar }from './components/Navbar';
import { Projects } from './components/Projects';
import { About } from './components/About';

function App() {
  return (
    <div className="App">
    <Navbar />
    <header id="welcome-section">
      <h1>My Portfolio</h1>
      <p>
        <em>from a <strong>VISCERAL</strong> perspective</em>
      </p>
    </header>
    <main>
      <Projects />
      <About />
    </main>
    <footer id="contact">
      <h2>Contact</h2>
      <a href="https://github.com/brunodnc" target="_blank" rel="noreferrer">Github Profile</a>
      <a href="https://www.linkedin.com/in/brunodnc/">LinkedIn Profile</a>
    </footer>
    </div>
  );
}

export default App;
