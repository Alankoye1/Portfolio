import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { useScrollProgress } from './hooks/useScrollProgress';
import './App.css';

/**
 * REACT LESSON: App is the root component. It does almost nothing itself: it
 * just lists the page's sections in order. Each section is its own component
 * with its own file, which keeps every file small and easy to find.
 */
const App: React.FC = () => {
      // Keeps the --scroll CSS variables up to date for scroll-linked effects.
      useScrollProgress();

      return (
            <div className="App">
                  <a href="#main" className="skip-link">Skip to content</a>
                  <Header />
                  <main id="main">
                        <Hero />
                        <About />
                        <Experience />
                        <Projects />
                        <Skills />
                        <Contact />
                  </main>
                  <Footer />
            </div>
      );
};

export default App;
