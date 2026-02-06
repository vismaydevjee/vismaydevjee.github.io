import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="bg-[#000000] min-h-screen text-[#f5f5f7] selection:bg-[#0071e3]/30 selection:text-white font-sans">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>

      <footer className="py-12 text-center text-[#86868b] text-xs border-t border-white/10 bg-[#121212]">
        <div className="max-w-7xl mx-auto px-6">
           <p>© {new Date().getFullYear()} Vismay Devjee. Designed in Boston.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
