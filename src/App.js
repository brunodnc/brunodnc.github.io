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
        <em> Subtítulo aqui <strong>bem</strong> legal</em>
        {/* <em>from a <strong>VISCERAL</strong> perspective</em> */}
      </p>
    </header>
    <main>
      <Projects />
      <About />
    </main>
    <footer id="contact">
    <p>Thanks for your kind attention. This page was made using the React framework and is hosted on GitHub Pages,</p>
    </footer>
    </div>
  );
}

export default App;
