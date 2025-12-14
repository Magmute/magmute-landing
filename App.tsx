import React, { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Philosophy } from './components/Philosophy';
import { ProductShowcase } from './components/ProductShowcase';
import { Features } from './components/Features';
import { Roadmap } from './components/Roadmap';
import { Footer } from './components/Footer';
import { Menu, X } from 'lucide-react';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 overflow-x-hidden selection:bg-brand-500 selection:text-white">
      <Navbar scrolled={scrolled} />
      
      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="philosophy">
          <Philosophy />
        </section>

        <section id="product">
          <ProductShowcase />
        </section>

        <section id="features">
          <Features />
        </section>

        <section id="roadmap">
          <Roadmap />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;