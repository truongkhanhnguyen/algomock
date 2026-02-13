"use client";

import { motion } from "framer-motion";
import { MessageSquare, Cpu, Rocket, CheckCircle } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Describe Your Strategy",
    description:
      "Tell us what you want in plain English. 'Create an RSI oversold strategy with Bollinger Band confirmation' or upload your existing code.",
    color: "from-blue-500 to-blue-600",
  },
  {
    number: "02",
    icon: Cpu,
    title: "AI Generates Code",
    description:
      "Our AI analyzes your request, applies best practices, and generates production-ready code with proper risk management and comments.",
    color: "from-emerald-500 to-emerald-600",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Test & Deploy",
    description:
      "Copy the code directly to TradingView or MetaTrader, run backtests, and deploy to live trading when ready.",
    color: "from-purple-500 to-purple-600",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-[#151b2b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-medium mb-4">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            From Idea to Execution in{" "}
            <span className="text-emerald-400">3 Simple Steps</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            No coding knowledge required. Our AI handles all the technical complexity
            while you focus on strategy logic.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-px bg-gradient-to-r from-slate-700 to-transparent" />
              )}

              <div className="p-8 rounded-2xl bg-[#0b0f19] border border-slate-800 h-full">
                {/* Number Badge */}
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} text-white font-bold text-lg mb-6`}
                >
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-slate-800 flex items-center justify-center mb-6">
                  <step.icon className="w-8 h-8 text-emerald-400" />
                </div>

                <h3 className="text-xl font-semibold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Example Prompts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-transparent border border-emerald-500/20"
        >
          <h3 className="text-xl font-semibold text-white mb-6 text-center">
            Try These Example Prompts
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "RSI oversold with BB bounce",
              "MACD golden cross strategy",
              "EMA 50/200 trend following",
              "Bollinger Bands squeeze breakout",
            ].map((prompt) => (
              <div
                key={prompt}
                className="flex items-center gap-3 p-4 rounded-xl bg-[#0b0f19] border border-slate-800"
              >
                <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span className="text-sm text-slate-300">{prompt}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
