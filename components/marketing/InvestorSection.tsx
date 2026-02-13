"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  Users,
  Globe,
  Award,
  Target,
  BarChart3,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const metrics = [
  {
    label: "Monthly Active Users",
    value: "12,500",
    growth: "+340%",
    icon: Users,
  },
  {
    label: "Strategies Generated",
    value: "52,000+",
    growth: "+520%",
    icon: Target,
  },
  {
    label: "Countries Served",
    value: "87",
    growth: "Global",
    icon: Globe,
  },
  {
    label: "User Satisfaction",
    value: "4.9/5",
    growth: "NPS 72",
    icon: Award,
  },
];

const highlights = [
  {
    icon: TrendingUp,
    title: "Rapid Growth",
    description:
      "Revenue growing 40% month-over-month with 85% gross margins. Unit economics strongly positive.",
  },
  {
    icon: BarChart3,
    title: "Large TAM",
    description:
      "$12B+ algorithmic trading software market growing 12% annually. First-mover in AI code generation.",
  },
  {
    icon: Target,
    title: "Strong Retention",
    description:
      "92% monthly retention rate. Average user generates 8+ strategies in first month.",
  },
];

export function InvestorSection() {
  return (
    <section id="investors" className="py-24 bg-[#0b0f19] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-emerald-500/5 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-medium mb-4">
            For Investors
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Join the Future of{" "}
            <span className="text-emerald-400">Algorithmic Trading</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            AlgoMock is transforming how traders build strategies. We're raising our 
            Series A to accelerate growth and expand into enterprise markets.
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-[#151b2b] border border-slate-800"
            >
              <div className="flex items-center justify-between mb-4">
                <metric.icon className="w-6 h-6 text-emerald-400" />
                <span className="text-sm font-medium text-emerald-400">
                  {metric.growth}
                </span>
              </div>
              <div className="text-3xl font-bold text-white mb-1">
                {metric.value}
              </div>
              <div className="text-sm text-slate-400">{metric.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Investment Highlights */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Why Invest in AlgoMock?
            </h3>
            <div className="space-y-6">
              {highlights.map((highlight, index) => (
                <div key={highlight.title} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                    <highlight.icon className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">
                      {highlight.title}
                    </h4>
                    <p className="text-slate-400">{highlight.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-transparent border border-emerald-500/20"
          >
            <h3 className="text-xl font-bold text-white mb-4">
              Series A Round
            </h3>
            <div className="space-y-4 mb-6">
              <div className="flex justify-between py-3 border-b border-slate-800">
                <span className="text-slate-400">Round Size</span>
                <span className="text-white font-semibold">$8M</span>
              </div>
              <div className="flex justify-between py-3 border-b border-slate-800">
                <span className="text-slate-400">Pre-Money Valuation</span>
                <span className="text-white font-semibold">$32M</span>
              </div>
              <div className="flex justify-between py-3 border-b border-slate-800">
                <span className="text-slate-400">Use of Funds</span>
                <span className="text-white font-semibold">Growth & R&D</span>
              </div>
              <div className="flex justify-between py-3">
                <span className="text-slate-400">Minimum Check</span>
                <span className="text-white font-semibold">$250K</span>
              </div>
            </div>
            <button className="w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-medium transition-colors flex items-center justify-center gap-2">
              Download Pitch Deck
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center p-8 rounded-2xl bg-[#151b2b] border border-slate-800"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Interested in Learning More?
          </h3>
          <p className="text-slate-400 mb-6 max-w-2xl mx-auto">
            We'd love to discuss the opportunity with qualified investors. 
            Schedule a call with our founding team to see the full pitch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="mailto:investors@algomock.ai"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-medium transition-colors"
            >
              Contact Investor Relations
              <ArrowRight className="w-4 h-4" />
            </Link>
            <button className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium transition-colors">
              View Financials
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
