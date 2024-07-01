import { useEffect, useRef } from 'react';
import './main.scss';
import { experiences, projects } from './data';
import Hero from './features/Hero/Hero';
import About from './features/About/About';
import Experience from './features/Experience/Experience';
import Projects from './features/Projects/Projects';
import Footer from './features/Footer/Footer';

const App = () => {
  return (
    <div className="container">
      <Hero />
      <main className="main">
        <div className="container--main">
          <About />
          <Experience experiences={experiences} />
          <Projects projects={projects} />
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default App;
