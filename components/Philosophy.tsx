import React from 'react';
import { motion } from 'framer-motion';
import { GitMerge, BrainCircuit, Activity } from 'lucide-react';

// Cast motion components to any to avoid strict type checking issues
const MotionDiv = motion.div as any;

export const Philosophy: React.FC = () => {
  return (
    <div className="py-24 bg-slate-950 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-brand-900/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-brand-500 font-bold tracking-wider uppercase mb-2">Our Philosophy</h2>
            <h3 className="text-3xl md:text-5xl font-display font-bold mb-6">
              MagMute = <span className="text-white">Mag</span>nitude + <span className="text-white">Mut</span>ation
            </h3>
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              In nature, evolution thrives on mutation and selection. In AI, we believe the next leap isn't a bigger model, but a swarm of specialized agents that can self-improve.
            </p>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Our name signifies our long-term goal: <strong>Multi-Agent Autonomous Evolution</strong>. We build systems where agents write their own code, optimize their own parameters, and evolve strategies that no human could design manually.
            </p>
            
            <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                    <div className="bg-slate-900 p-3 rounded-lg border border-slate-800">
                        <GitMerge className="text-brand-400" size={24} />
                    </div>
                    <div>
                        <h4 className="text-white font-bold text-lg">Self-Evolving Codebase</h4>
                        <p className="text-slate-400 text-sm">Agents that propose, test, and merge their own improvements.</p>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <div className="bg-slate-900 p-3 rounded-lg border border-slate-800">
                        <BrainCircuit className="text-accent-purple" size={24} />
                    </div>
                    <div>
                        <h4 className="text-white font-bold text-lg">Swarm Intelligence</h4>
                        <p className="text-slate-400 text-sm">Distributed reasoning across specialized nodes rather than monolithic thinking.</p>
                    </div>
                </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-brand-500 to-accent-purple blur-2xl opacity-20 transform rotate-6"></div>
            <div className="relative bg-slate-900 border border-slate-800 rounded-2xl p-8 overflow-hidden">
                <div className="flex items-center gap-2 mb-4 border-b border-slate-800 pb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="text-xs text-slate-500 ml-2 font-mono">evolution_engine.py</span>
                </div>
                <div className="font-mono text-sm space-y-2">
                    <div className="text-slate-400"># Initializing Gen 1 Swarm</div>
                    <div className="flex gap-2">
                        <span className="text-brand-400">def</span>
                        <span className="text-yellow-200">evolve_strategy</span>
                        <span className="text-slate-300">(agent_pool):</span>
                    </div>
                    <div className="pl-4 text-slate-300">
                        <span className="text-accent-purple">while</span> score &lt; target:
                    </div>
                    <div className="pl-8 text-slate-500">// Agents mutating logic...</div>
                    <div className="pl-8 text-slate-300">
                        new_gen = mutate(agent_pool)
                    </div>
                    <div className="pl-8 text-slate-300">
                        results = backtest(new_gen)
                    </div>
                    <div className="pl-8 text-green-400">
                        print(f"Generation {`{gen}`}: Alpha Found")
                    </div>
                    
                    <MotionDiv 
                        className="mt-4 p-3 bg-slate-950/50 rounded border border-brand-500/30 text-green-400"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        {'>'} Optimization Complete. <br/>
                        {'>'} Strategy evolved. Sharpe Ratio: 3.4
                    </MotionDiv>
                </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};