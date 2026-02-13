"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles, TrendingUp, Shield, Zap } from "lucide-react";
import Link from "next/link";

const stats = [
  { label: "Strategies Generated", value: "50K+", suffix: "" },
  { label: "Active Traders", value: "12K", suffix: "" },
  { label: "Success Rate", value: "94", suffix: "%" },
  { label: "Avg. Time Saved", value: "8", suffix: "hrs/week" },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[#0b0f19]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6"
            >
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span className="text-sm text-emerald-400 font-medium">
                Now with MQL5 Support
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Turn Trading Ideas Into{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">
                Executable Code
              </span>{" "}
              in Seconds
            </h1>

            <p className="text-lg text-slate-400 mb-8 max-w-xl">
              AI-powered code generation for trading strategies. Describe your strategy in plain English, 
              get production-ready PineScript and MQL5 code instantly.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="/app"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-semibold transition-all shadow-lg shadow-emerald-500/25"
              >
                Start Building Free
                <ArrowRight className="w-5 h-5" />
              </Link>
              <button className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold transition-all">
                <Play className="w-5 h-5" />
                Watch Demo
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-emerald-400" />
                <span>Bank-grade Security</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-emerald-400" />
                <span>Instant Generation</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-emerald-400" />
                <span>Backtest Ready</span>
              </div>
            </div>
          </motion.div>

          {/* Right - Code Preview */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-[#151b2b] shadow-2xl shadow-emerald-500/10">
              {/* Window Header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-[#0b0f19] border-b border-slate-800">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex-1 text-center">
                  <span className="text-xs text-slate-500">strategy.pine</span>
                </div>
              </div>

              {/* Code Content */}
              <div className="p-6 font-mono text-sm">
                <div className="text-slate-500 mb-2">// Generated in 2.3 seconds</div>
                <div className="space-y-1">
                  <div>
                    <span className="text-purple-400">strategy</span>
                    <span className="text-slate-300">(</span>
                    <span className="text-green-400">"RSI_MeanReversion"</span>
                    <span className="text-slate-300">, </span>
                    <span className="text-blue-400">overlay</span>
                    <span className="text-slate-300">=</span>
                    <span className="text-orange-400">true</span>
                    <span className="text-slate-300">)</span>
                  </div>
                  <div className="mt-3">
                    <span className="text-slate-500">// Input parameters</span>
                  </div>
                  <div>
                    <span className="text-blue-400">rsiLength</span>
                    <span className="text-slate-300"> = </span>
                    <span className="text-purple-400">input.int</span>
                    <span className="text-slate-300">(</span>
                    <span className="text-orange-400">14</span>
                    <span className="text-slate-300">, </span>
                    <span className="text-green-400">"RSI Length"</span>
                    <span className="text-slate-300">)</span>
                  </div>
                  <div>
                    <span className="text-blue-400">oversold</span>
                    <span className="text-slate-300"> = </span>
                    <span className="text-orange-400">30</span>
                  </div>
                  <div>
                    <span className="text-blue-400">overbought</span>
                    <span className="text-slate-300"> = </span>
                    <span className="text-orange-400">70</span>
                  </div>
                  <div className="mt-3">
                    <span className="text-slate-500">// Calculate RSI</span>
                  </div>
                  <div>
                    <span className="text-blue-400">rsi</span>
                    <span className="text-slate-300"> = </span>
                    <span className="text-purple-400">ta.rsi</span>
                    <span className="text-slate-300">(</span>
                    <span className="text-blue-400">close</span>
                    <span className="text-slate-300">, </span>
                    <span className="text-blue-400">rsiLength</span>
                    <span className="text-slate-300">)</span>
                  </div>
                  <div className="mt-3">
                    <span className="text-slate-500">// Entry conditions</span>
                  </div>
                  <div>
                    <span className="text-purple-400">if</span>
                    <span className="text-slate-300"> rsi &lt; oversold</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-blue-400">strategy.entry</span>
                    <span className="text-slate-300">(</span>
                    <span className="text-green-400">"Long"</span>
                    <span className="text-slate-300">, </span>
                    <span className="text-blue-400">strategy.long</span>
                    <span className="text-slate-300">)</span>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-4 -right-4 px-4 py-2 rounded-xl bg-emerald-500 text-white text-sm font-medium shadow-lg"
              >
                ✓ Validated & Ready
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-2xl bg-[#151b2b]/50 border border-slate-800"
            >
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                {stat.value}
                <span className="text-emerald-400">{stat.suffix}</span>
              </div>
              <div className="text-sm text-slate-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
