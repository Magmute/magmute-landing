import React from 'react';
import { Terminal, TrendingUp, BarChart3, LineChart } from 'lucide-react';

export const ProductShowcase: React.FC = () => {
  return (
    <div className="py-24 bg-slate-900 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-900/30 text-brand-400 border border-brand-800 text-sm font-medium mb-4">
            <Terminal size={14} /> Flagship Product
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            PromptFolio
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            From natural language to quantitative analysis. Describe your investment logic, and let our agents provide comprehensive market insights.
          </p>
        </div>

        {/* Demo Interface */}
        <div className="bg-slate-950 rounded-xl border border-slate-800 shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[500px]">
          
          {/* Left: Input */}
          <div className="w-full md:w-1/2 p-8 border-b md:border-b-0 md:border-r border-slate-800 flex flex-col">
            <h3 className="text-slate-400 font-mono text-sm uppercase mb-4">Input // Strategy Description</h3>
            <div className="flex-1">
                <div className="font-mono text-lg text-slate-300 leading-relaxed">
                    <span className="text-brand-500">{'>'}{'>'}</span> Create a strategy that analyzes S&P 500 tech stocks when their 
                    <span className="text-accent-cyan bg-accent-cyan/10 px-1 mx-1 rounded">RSI is below 30</span>
                    and sells when 
                    <span className="text-accent-purple bg-accent-purple/10 px-1 mx-1 rounded">RSI is above 70</span>.
                    Prioritize companies with positive earnings surprises in the last 2 quarters.
                </div>
                <div className="mt-4 animate-pulse h-6 w-2 bg-brand-500"></div>
            </div>
            
            <div className="mt-8">
                <a 
                    href="https://github.com/magmute/PromptFolio"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full bg-white text-slate-950 font-bold py-3 rounded hover:bg-slate-200 transition-colors flex items-center justify-center gap-2"
                >
                    <Terminal size={18} />
                    Run Analysis
                </a>
            </div>
          </div>

          {/* Right: Output */}
          <div className="w-full md:w-1/2 bg-slate-900/50 p-8 flex flex-col">
            <h3 className="text-slate-400 font-mono text-sm uppercase mb-4">Output // Agent Analysis</h3>
            
            <div className="space-y-4">
                {/* Agent Step 1 */}
                <div className="flex gap-4 items-start">
                    <div className="bg-green-500/20 text-green-400 p-2 rounded">
                        <BarChart3 size={20} />
                    </div>
                    <div className="flex-1 bg-slate-900 p-3 rounded border border-slate-800">
                        <div className="text-xs text-slate-500 mb-1">Data Agent</div>
                        <div className="text-sm text-slate-300">Fetched OHLCV data for 72 tickers in Technology sector.</div>
                    </div>
                </div>

                {/* Agent Step 2 */}
                <div className="flex gap-4 items-start">
                    <div className="bg-brand-500/20 text-brand-400 p-2 rounded">
                        <LineChart size={20} />
                    </div>
                    <div className="flex-1 bg-slate-900 p-3 rounded border border-slate-800">
                        <div className="text-xs text-slate-500 mb-1">Quant Agent</div>
                        <div className="text-sm text-slate-300"> Calculated RSI(14). Identified 5 potential opportunities (NVDA, AMD, AAPL...).</div>
                    </div>
                </div>

                {/* Agent Step 3 */}
                <div className="flex gap-4 items-start">
                    <div className="bg-accent-purple/20 text-accent-purple p-2 rounded">
                        <TrendingUp size={20} />
                    </div>
                    <div className="flex-1 bg-slate-900 p-3 rounded border border-slate-800">
                        <div className="text-xs text-slate-500 mb-1">Strategy Agent</div>
                        <div className="text-sm text-slate-300 font-bold">Analysis Report Generated:</div>
                        <div className="mt-2 grid grid-cols-3 gap-2 text-xs">
                            <div className="bg-slate-800 p-2 rounded text-center">NVDA Strong</div>
                            <div className="bg-slate-800 p-2 rounded text-center">AMD Moderate</div>
                            <div className="bg-slate-800 p-2 rounded text-center">MSFT Neutral</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-auto pt-8 flex items-center justify-between text-xs text-slate-500 font-mono">
                <span>Latency: 142ms</span>
                <span>Agents Active: 4</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};