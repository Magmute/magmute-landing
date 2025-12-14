import React from 'react';
import { CheckCircle2, Sparkles, Users2 } from 'lucide-react';

export const Roadmap: React.FC = () => {
  return (
    <div className="py-24 bg-slate-900 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-display font-bold text-white mb-12 text-center">Evolution Roadmap</h2>
        
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
          
          {/* Item 1 */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-green-500 bg-slate-900 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 shadow-[0_0_15px_rgba(34,197,94,0.4)]">
                <CheckCircle2 size={20} className="text-green-500" />
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-xl border border-green-500/30 bg-slate-950/50 shadow-lg">
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-bold text-white text-lg">PromptFolio v1.0</h3>
                <span className="text-xs font-mono text-green-400 border border-green-500/30 px-2 py-0.5 rounded">RELEASED</span>
              </div>
              <p className="text-slate-400 text-sm">
                LLM-to-Quant interface. Advanced stock screening and market analysis generated from text prompts.
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-brand-500 bg-slate-900 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 shadow-[0_0_15px_rgba(14,165,233,0.4)]">
                <Users2 size={20} className="text-brand-500 animate-pulse" />
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-xl border border-brand-500/30 bg-slate-950/50 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-brand-500 text-xs text-white px-2 py-1 rounded-bl-lg font-bold">IN DEV</div>
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-bold text-white text-lg">AI Team</h3>
              </div>
              <p className="text-slate-400 text-sm">
                A fully autonomous software development squad. Product Managers, Engineers, and QA agents collaborating to turn ideas into shipping code without human intervention.
              </p>
            </div>
          </div>

           {/* Item 3 */}
           <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-purple-500/50 bg-slate-900 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
                <Sparkles size={20} className="text-purple-400" />
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-xl border border-purple-500/20 bg-slate-950/30 shadow-lg relative overflow-hidden">
               <div className="absolute top-0 left-0 md:left-auto md:right-0 bg-purple-900/30 text-xs text-purple-200 px-2 py-1 rounded-br-lg md:rounded-bl-lg md:rounded-br-none font-bold backdrop-blur-sm border-b border-r md:border-r-0 md:border-l border-purple-500/30">CONCEPT</div>
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-bold text-slate-200 text-lg">Digital Me</h3>
              </div>
              <p className="text-slate-400 text-sm italic">
                "What if you could be in two places at once?" <br/>
                Exploring the boundaries of identity. An AI twin that learns, thinks, and evolves exactly like you. The future is personal.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};