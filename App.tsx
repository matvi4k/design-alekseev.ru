import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Manifesto from './components/Manifesto';
import Services from './components/Services';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-brand-black min-h-screen text-white selection:bg-brand-purple selection:text-white font-sans">
      <Navbar />
      <main>
        <Hero />
        <Manifesto />
        <Services />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;