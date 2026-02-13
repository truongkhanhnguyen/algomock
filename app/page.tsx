import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b0f19] text-white">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-4">AlgoMock</h1>
        <p className="text-xl text-slate-400 mb-8">
          AI Trading Code Generator - Natural Language to PineScript/MQL5
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 rounded-xl bg-[#151b2b] border border-slate-800">
            <h2 className="text-2xl font-semibold mb-4 text-emerald-400">Investor Website</h2>
            <p className="text-slate-400 mb-4">View our full investor deck with metrics, team, and financials.</p>
            <Link 
              href="/marketing" 
              className="inline-block px-6 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white font-medium transition-colors"
            >
              View Investor Site
            </Link>
          </div>
          
          <div className="p-6 rounded-xl bg-[#151b2b] border border-slate-800">
            <h2 className="text-2xl font-semibold mb-4 text-emerald-400">AI Demo</h2>
            <p className="text-slate-400 mb-4">Try our AI code generator for trading strategies.</p>
            <Link 
              href="/app" 
              className="inline-block px-6 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white font-medium transition-colors"
            >
              Launch AI Demo
            </Link>
          </div>
        </div>
        
        <div className="mt-12 p-6 rounded-xl bg-[#151b2b] border border-slate-800">
          <h3 className="text-xl font-semibold mb-4">Key Metrics</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 rounded-lg bg-[#0b0f19]">
              <div className="text-2xl font-bold text-emerald-400">$224K</div>
              <div className="text-sm text-slate-500">MRR</div>
            </div>
            <div className="p-4 rounded-lg bg-[#0b0f19]">
              <div className="text-2xl font-bold text-emerald-400">12.5K</div>
              <div className="text-sm text-slate-500">Users</div>
            </div>
            <div className="p-4 rounded-lg bg-[#0b0f19]">
              <div className="text-2xl font-bold text-emerald-400">87%</div>
              <div className="text-sm text-slate-500">Gross Margin</div>
            </div>
            <div className="p-4 rounded-lg bg-[#0b0f19]">
              <div className="text-2xl font-bold text-emerald-400">19.8x</div>
              <div className="text-sm text-slate-500">LTV:CAC</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
