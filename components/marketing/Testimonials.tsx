"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Marcus Chen",
    role: "Day Trader",
    avatar: "MC",
    content:
      "AlgoMock cut my strategy development time by 90%. What used to take me a full day now takes 5 minutes. The code quality is excellent - better than what I used to write manually.",
    rating: 5,
  },
  {
    name: "Sarah Williams",
    role: "Quantitative Analyst",
    avatar: "SW",
    content:
      "As a quant, I need to test dozens of ideas quickly. AlgoMock lets me iterate at the speed of thought. The MQL5 support is a game-changer for MetaTrader users.",
    rating: 5,
  },
  {
    name: "David Park",
    role: "Prop Firm Trader",
    avatar: "DP",
    content:
      "Our firm uses AlgoMock Enterprise to rapidly prototype strategies before full development. It's reduced our R&D cycle from weeks to days.",
    rating: 5,
  },
  {
    name: "Elena Rodriguez",
    role: "Forex Trader",
    avatar: "ER",
    content:
      "I don't know how to code, but I understand trading. AlgoMock bridges that gap perfectly. I've built and backtested 12 strategies in my first month.",
    rating: 5,
  },
  {
    name: "James Thompson",
    role: "Crypto Trader",
    avatar: "JT",
    content:
      "The RSI + Bollinger Band strategy AlgoMock generated for me has a 68% win rate over 6 months. I've never seen results this consistent.",
    rating: 5,
  },
  {
    name: "Aisha Patel",
    role: "Swing Trader",
    avatar: "AP",
    content:
      "Customer support is incredible. Had an issue with MQL5 export, they fixed it within hours. This team actually cares about their users.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-[#151b2b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Loved by{" "}
            <span className="text-emerald-400">12,000+ Traders</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            See what traders around the world are saying about AlgoMock.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="p-6 rounded-2xl bg-[#0b0f19] border border-slate-800"
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-emerald-500/20 mb-4" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-emerald-400 text-emerald-400"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-slate-300 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center text-white font-semibold text-sm">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="text-sm font-medium text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-slate-500">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
