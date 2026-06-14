import Scene3D from './components/Scene3D';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import NavDots from './components/NavDots';

export default function App() {
  return (
    <div className="relative min-h-screen bg-ink text-parchment">
      <Scene3D />
      <div className="grain" />
      <NavDots />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Contact />
      </main>
    </div>
  );
}
