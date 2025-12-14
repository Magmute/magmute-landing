import React from 'react';
import { ArrowRight, Cpu, Network, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

// Cast motion components to any to avoid strict type checking issues in current environment
const MotionDiv = motion.div as any;
const MotionH1 = motion.h1 as any;
const MotionP = motion.p as any;

export const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 grid-bg opacity-30"></div>
        {/* Glows */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-purple/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        {/* Badge */}
        <MotionDiv 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/50 border border-slate-700 backdrop-blur-sm mb-8"
        >
          <span className="flex h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
          <span className="text-sm font-medium text-slate-300">Open Source Technology</span>
        </MotionDiv>

        {/* Main Heading */}
        <MotionH1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-6 leading-tight"
        >
          Autonomous Agents. <br />
          <span className="gradient-text">Infinite Evolution.</span>
        </MotionH1>

        {/* Subtitle */}
        <MotionP 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mb-10"
        >
          We are <strong className="text-white">MagMute</strong>. We build multi-agent systems that autonomously mutate and evolve to solve complex problems. 
          Experience the future of quantitative finance with our flagship agent swarm.
        </MotionP>

        {/* CTAs */}
        <MotionDiv 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <a 
            href="https://github.com/magmute/PromptFolio"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 bg-brand-500 hover:bg-brand-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-brand-500/25"
          >
            Explore PromptFolio <ArrowRight size={20} />
          </a>
          <a 
            href="https://github.com/magmute"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 px-8 py-4 rounded-lg font-bold text-lg transition-all"
          >
            Star on GitHub <Network size={20} />
          </a>
        </MotionDiv>

        {/* Tech Stack Visuals */}
        <MotionDiv 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-20 flex flex-wrap justify-center gap-8 text-slate-500 opacity-70"
        >
            <div className="flex items-center gap-2"><Cpu size={18} /> Multi-Agent Core</div>
            <div className="flex items-center gap-2"><Zap size={18} /> Genetic Algorithms</div>
            <div className="flex items-center gap-2"><Network size={18} /> Distributed Intelligence</div>
        </MotionDiv>
      </div>
    </div>
  );
};