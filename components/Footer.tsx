import React from 'react';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
             <div className="flex items-center gap-2 mb-4">
                <div className="bg-gradient-to-br from-brand-400 to-accent-purple w-8 h-8 rounded-lg flex items-center justify-center">
                  <span className="font-display font-bold text-white">M</span>
                </div>
                <span className="font-display font-bold text-xl tracking-tight text-white">
                  MagMute
                </span>
              </div>
            <p className="text-slate-400 text-sm max-w-sm">
              Pioneering multi-agent autonomous evolution. We build open-source tools that empower developers to leverage swarm intelligence in finance and software engineering.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Products</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="https://github.com/magmute/PromptFolio" target="_blank" rel="noreferrer" className="hover:text-brand-400 transition-colors">PromptFolio</a></li>
              <li><span className="text-slate-500 cursor-help" title="In Development">AI Team (In Dev)</span></li>
              <li><span className="text-slate-600 cursor-default">Digital Me</span></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="https://github.com/magmute" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors"><Github size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
              <a href="mailto:magmute@gmail.com" className="text-slate-400 hover:text-white transition-colors"><Mail size={20} /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-600 text-sm">
            © {new Date().getFullYear()} MagMute. Open Source under MIT License.
          </p>
          <div className="flex gap-6 text-sm text-slate-600">
            <a href="#" className="hover:text-slate-400">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};