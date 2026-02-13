"use client";

import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Free",
    description: "Perfect for trying out the platform",
    price: "$0",
    period: "/month",
    features: [
      "5 strategies per month",
      "PineScript only",
      "Basic templates",
      "Community support",
      "Standard generation speed",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Pro",
    description: "For serious traders and developers",
    price: "$29",
    period: "/month",
    features: [
      "Unlimited strategies",
      "PineScript + MQL5",
      "Advanced templates",
      "Priority support",
      "Faster generation",
      "Strategy backtesting",
      "Export to all platforms",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "For prop firms and institutions",
    price: "Custom",
    period: "",
    features: [
      "Everything in Pro",
      "Custom AI training",
      "API access",
      "White-label options",
      "Dedicated support",
      "SLA guarantee",
      "On-premise deployment",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-[#0b0f19]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-medium mb-4">
            Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Simple, Transparent{" "}
            <span className="text-emerald-400">Pricing</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Start free, upgrade when you need more. No hidden fees, cancel anytime.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative p-8 rounded-2xl border ${
                plan.popular
                  ? "bg-gradient-to-b from-emerald-500/10 to-transparent border-emerald-500/30"
                  : "bg-[#151b2b] border-slate-800"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-emerald-500 text-white text-sm font-medium">
                    <Sparkles className="w-4 h-4" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-sm text-slate-400">{plan.description}</p>
              </div>

              <div className="mb-6">
                <span className="text-4xl font-bold text-white">
                  {plan.price}
                </span>
                <span className="text-slate-400">{plan.period}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-sm text-slate-300"
                  >
                    <Check
                      className={`w-5 h-5 flex-shrink-0 ${
                        plan.popular ? "text-emerald-400" : "text-slate-500"
                      }`}
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href="/app"
                className={`block w-full text-center py-3 rounded-xl font-medium transition-all ${
                  plan.popular
                    ? "bg-emerald-500 hover:bg-emerald-600 text-white"
                    : "bg-slate-800 hover:bg-slate-700 text-white"
                }`}
              >
                {plan.cta}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-slate-500 mb-4">
            Trusted by traders at leading firms
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-slate-600">
            {["TradingView", "MetaTrader", "Interactive Brokers", "TD Ameritrade"].map(
              (company) => (
                <span
                  key={company}
                  className="text-lg font-semibold opacity-50 hover:opacity-100 transition-opacity"
                >
                  {company}
                </span>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
