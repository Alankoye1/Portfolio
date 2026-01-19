import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';

const App: React.FC = () => {
      return (
            <div className="App">
                  <Header />
                  <main>
                        <Hero />
                        <About />
                        <Skills />
                        <Experience />
                        <Projects />
                        <Contact />
                  </main>
                  <Footer />
            </div>
      );
};

export default App;