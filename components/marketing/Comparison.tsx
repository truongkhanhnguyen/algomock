"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const features = [
  { name: "Natural Language Input", algomock: true, chatgpt: "Partial", others: false },
  { name: "PineScript Generation", algomock: true, chatgpt: true, others: false },
  { name: "MQL5 Generation", algomock: true, chatgpt: "Partial", others: false },
  { name: "Built-in Risk Management", algomock: true, chatgpt: false, others: false },
  { name: "One-Click Backtesting", algomock: true, chatgpt: false, others: false },
  { name: "Strategy Templates", algomock: true, chatgpt: false, others: true },
  { name: "Code Validation", algomock: true, chatgpt: false, others: false },
  { name: "Version Control", algomock: true, chatgpt: false, others: false },
  { name: "Export to TradingView", algomock: true, chatgpt: false, others: false },
  { name: "Export to MetaTrader", algomock: true, chatgpt: false, others: false },
  { name: "Strategy Library", algomock: true, chatgpt: false, others: true },
  { name: "Community Sharing", algomock: true, chatgpt: false, others: true },
];

export function Comparison() {
  return (
    <section className="py-24 bg-[#151b2b]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-medium mb-4">
            Comparison
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Why Traders Choose{" "}
            <span className="text-emerald-400">AlgoMock</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Purpose-built for trading strategy generation vs. generic AI tools.
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl bg-[#0b0f19] border border-slate-800 overflow-hidden"
        >
          <div className="grid grid-cols-4 gap-4 p-4 border-b border-slate-800 bg-slate-800/30">
            <div className="text-sm font-medium text-slate-400">Feature</div>
            <div className="text-center text-sm font-semibold text-emerald-400">AlgoMock</div>
            <div className="text-center text-sm font-medium text-slate-400">ChatGPT</div>
            <div className="text-center text-sm font-medium text-slate-400">Other Tools</div>
          </div>

          {features.map((feature, index) => (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.03 }}
              className="grid grid-cols-4 gap-4 p-4 border-b border-slate-800/50 last:border-0 hover:bg-slate-800/20 transition-colors"
            >
              <div className="text-sm text-slate-300">{feature.name}</div>
              <div className="flex justify-center">
                {feature.algomock === true ? (
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <Check className="w-4 h-4 text-emerald-400" />
                  </div>
                ) : (
                  <span className="text-sm text-slate-500">{feature.algomock}</span>
                )}
              </div>
              <div className="flex justify-center">
                {feature.chatgpt === true ? (
                  <div className="w-6 h-6 rounded-full bg-slate-700 flex items-center justify-center">
                    <Check className="w-4 h-4 text-slate-400" />
                  </div>
                ) : feature.chatgpt === false ? (
                  <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center">
                    <X className="w-4 h-4 text-red-400" />
                  </div>
                ) : (
                  <span className="text-sm text-slate-500">{feature.chatgpt}</span>
                )}
              </div>
              <div className="flex justify-center">
                {feature.others === true ? (
                  <div className="w-6 h-6 rounded-full bg-slate-700 flex items-center justify-center">
                    <Check className="w-4 h-4 text-slate-400" />
                  </div>
                ) : (
                  <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center">
                    <X className="w-4 h-4 text-red-400" />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-slate-400 mb-4">
            See the difference yourself. Try AlgoMock free.
          </p>
          <a
            href="/app"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-medium transition-colors"
          >
            Start Free Trial
          </a>
        </motion.div>
      </div>
    </section>
  );
}
