"use client";

import { motion } from "framer-motion";
import { Linkedin, Twitter } from "lucide-react";

const team = [
  {
    name: "Alexandra Chen",
    role: "CEO & Co-Founder",
    bio: "Former quant at Two Sigma. MIT Computer Science. Built trading systems processing $2B+ daily volume.",
    avatar: "AC",
    social: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Marcus Williams",
    role: "CTO & Co-Founder",
    bio: "Ex-Google AI. PhD Machine Learning from Stanford. 12+ years in NLP and code generation systems.",
    avatar: "MW",
    social: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Sarah Park",
    role: "Head of Product",
    bio: "Former PM at TradingView. Deep expertise in trader workflows and fintech UX.",
    avatar: "SP",
    social: { linkedin: "#", twitter: "#" },
  },
  {
    name: "David Kumar",
    role: "Lead Engineer",
    bio: "Ex-Meta infrastructure. Built systems serving 1B+ users. Expert in distributed systems.",
    avatar: "DK",
    social: { linkedin: "#", twitter: "#" },
  },
];

const advisors = [
  {
    name: "Robert Sterling",
    role: "Advisor",
    bio: "Former Managing Director at Goldman Sachs. 25 years in algorithmic trading.",
    avatar: "RS",
  },
  {
    name: "Jennifer Walsh",
    role: "Advisor",
    bio: "Partner at Andreessen Horowitz. Leads fintech investments.",
    avatar: "JW",
  },
];

export function Team() {
  return (
    <section className="py-24 bg-[#0b0f19]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-medium mb-4">
            Our Team
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Built by Experts in{" "}
            <span className="text-emerald-400">Trading & AI</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            World-class team with deep expertise in quantitative trading, 
            machine learning, and fintech.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-[#151b2b] border border-slate-800 group hover:border-emerald-500/30 transition-all"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center text-white text-xl font-bold mb-4 group-hover:scale-110 transition-transform">
                {member.avatar}
              </div>
              <h3 className="text-lg font-semibold text-white mb-1">{member.name}</h3>
              <p className="text-sm text-emerald-400 mb-3">{member.role}</p>
              <p className="text-sm text-slate-400 mb-4 leading-relaxed">{member.bio}</p>
              <div className="flex gap-3">
                <a
                  href={member.social.linkedin}
                  className="p-2 rounded-lg bg-slate-800/50 text-slate-400 hover:text-emerald-400 hover:bg-slate-800 transition-all"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={member.social.twitter}
                  className="p-2 rounded-lg bg-slate-800/50 text-slate-400 hover:text-emerald-400 hover:bg-slate-800 transition-all"
                >
                  <Twitter className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Advisors */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h3 className="text-xl font-semibold text-white">Advisory Board</h3>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {advisors.map((advisor, index) => (
            <motion.div
              key={advisor.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-[#151b2b] border border-slate-800 flex items-center gap-4"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-slate-600 to-slate-700 flex items-center justify-center text-white text-lg font-bold flex-shrink-0">
                {advisor.avatar}
              </div>
              <div>
                <h4 className="font-semibold text-white">{advisor.name}</h4>
                <p className="text-sm text-slate-500 mb-1">{advisor.role}</p>
                <p className="text-xs text-slate-400">{advisor.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
