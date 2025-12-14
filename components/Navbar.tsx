import React, { useState } from 'react';
import { Menu, X, Github, Terminal } from 'lucide-react';

interface NavbarProps {
  scrolled: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Philosophy', href: '#philosophy' },
    { name: 'Products', href: '#product' },
    { name: 'Roadmap', href: '#roadmap' },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled || isOpen ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <div className="bg-gradient-to-br from-brand-400 to-accent-purple w-10 h-10 rounded-lg flex items-center justify-center">
              <span className="font-display font-bold text-xl text-white">M</span>
            </div>
            <span className="font-display font-bold text-2xl tracking-tight text-white">
              MagMute
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-medium text-slate-300 hover:text-white transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a 
              href="https://github.com/magmute" 
              target="_blank"
              rel="noreferrer"
              className="text-slate-300 hover:text-white transition-colors"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://github.com/magmute"
              target="_blank"
              rel="noreferrer"
              className="bg-white text-slate-950 hover:bg-slate-200 px-5 py-2.5 rounded-full font-bold transition-all duration-200 shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.5)]"
            >
              Get Started
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-950 border-b border-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800"
              >
                {link.name}
              </a>
            ))}
            <div className="mt-4 flex flex-col gap-3 px-3">
                <a href="https://github.com/magmute" className="flex items-center gap-2 text-slate-300">
                    <Github size={20} /> GitHub
                </a>
                 <a 
                  href="https://github.com/magmute/PromptFolio"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center bg-brand-500 text-white px-5 py-3 rounded-lg font-bold"
                >
                  Launch PromptFolio
                </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};