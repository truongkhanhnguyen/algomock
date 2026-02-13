"use client";

import { motion } from "framer-motion";
import {
  Code2,
  MessageSquare,
  Shield,
  Zap,
  BarChart3,
  RefreshCw,
  Download,
  Globe,
} from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "Natural Language to Code",
    description:
      "Describe your strategy in plain English. No coding required. Our AI understands trading terminology and translates it into executable code.",
  },
  {
    icon: Code2,
    title: "Multi-Language Support",
    description:
      "Generate code for PineScript (TradingView), MQL5 (MetaTrader), and more. One platform, all major trading platforms covered.",
  },
  {
    icon: Zap,
    title: "Instant Generation",
    description:
      "Get production-ready code in under 3 seconds. No more spending hours writing and debugging strategy code manually.",
  },
  {
    icon: Shield,
    title: "Built-in Risk Management",
    description:
      "Every generated strategy includes stop-loss, take-profit, and position sizing. Protect your capital with professional risk controls.",
  },
  {
    icon: BarChart3,
    title: "Backtest Ready",
    description:
      "Code is optimized for immediate backtesting. Validate your strategy on historical data before going live.",
  },
  {
    icon: RefreshCw,
    title: "Strategy Iteration",
    description:
      "Refine and modify existing strategies with natural language. 'Make it more aggressive' or 'Add a filter' - it's that simple.",
  },
  {
    icon: Download,
    title: "One-Click Export",
    description:
      "Export your code directly to TradingView, MetaTrader, or download as a file. Seamless integration with your workflow.",
  },
  {
    icon: Globe,
    title: "Community Templates",
    description:
      "Access hundreds of proven strategy templates from the community. RSI, MACD, Bollinger Bands, and more.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-[#0b0f19]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-medium mb-4">
            Features
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Everything You Need to{" "}
            <span className="text-emerald-400">Build Strategies</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            From idea to execution in minutes, not days. Our AI handles the complexity
            so you can focus on what matters - finding profitable strategies.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group p-6 rounded-2xl bg-[#151b2b] border border-slate-800 hover:border-emerald-500/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-4 group-hover:bg-emerald-500/20 transition-colors">
                <feature.icon className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
