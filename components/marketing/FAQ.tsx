"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "How accurate is the generated code?",
    answer:
      "Our AI generates syntactically correct code 98.5% of the time. Each generation includes proper risk management, input validation, and follows platform-specific best practices. Generated code can be immediately copied to TradingView or MetaTrader for backtesting.",
  },
  {
    question: "Do I need coding experience to use AlgoMock?",
    answer:
      "Not at all. AlgoMock is designed for traders who understand strategy logic but don't know how to code. Simply describe your strategy in plain English, and our AI handles the technical implementation. However, if you do know coding, you can easily modify the generated code.",
  },
  {
    question: "Which trading platforms are supported?",
    answer:
      "Currently, we support PineScript for TradingView and MQL5 for MetaTrader 5. We're actively working on adding MQL4 (MT4), Python (for backtrader/zipline), and C# (for NinjaTrader). Pro users get early access to new language support.",
  },
  {
    question: "Can I backtest strategies before going live?",
    answer:
      "Absolutely. The generated code is ready for immediate backtesting on your chosen platform. We recommend always backtesting on historical data and using paper trading before deploying real capital. The code includes performance tracking variables to make analysis easier.",
  },
  {
    question: "Is my strategy data secure?",
    answer:
      "Yes. We use bank-grade encryption (AES-256) for all data. Your strategies are private by default. We never share your proprietary trading logic with other users or third parties. Enterprise customers can opt for on-premise deployment for maximum security.",
  },
  {
    question: "What's included in the free plan?",
    answer:
      "The free plan includes 5 strategy generations per month, PineScript support only, basic templates, and community support. It's perfect for trying out the platform. Upgrade to Pro for unlimited generations, MQL5 support, advanced templates, and priority support.",
  },
  {
    question: "Can I modify generated strategies?",
    answer:
      "Yes! You can modify the code directly in our built-in editor, or use natural language to request changes. For example, you can say 'Add a trailing stop' or 'Change the RSI period to 21' and the AI will update the code accordingly.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "Yes, we offer a 14-day money-back guarantee on all paid plans. If you're not satisfied with AlgoMock for any reason, contact our support team within 14 days of purchase for a full refund, no questions asked.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-[#0b0f19]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-medium mb-4">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Frequently Asked{" "}
            <span className="text-emerald-400">Questions</span>
          </h2>
          <p className="text-lg text-slate-400">
            Everything you need to know about AlgoMock.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="rounded-xl bg-[#151b2b] border border-slate-800 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-800/30 transition-colors"
              >
                <span className="font-medium text-white pr-4">{faq.question}</span>
                <ChevronDown
                  className={cn(
                    "w-5 h-5 text-slate-400 flex-shrink-0 transition-transform",
                    openIndex === index && "rotate-180"
                  )}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="px-5 pb-5 text-slate-400 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center p-6 rounded-2xl bg-[#151b2b] border border-slate-800"
        >
          <p className="text-slate-300 mb-2">Still have questions?</p>
          <p className="text-sm text-slate-500 mb-4">
            Can't find the answer you're looking for? Please chat with our friendly team.
          </p>
          <a
            href="mailto:support@algomock.ai"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-sm font-medium transition-colors"
          >
            Contact Support
          </a>
        </motion.div>
      </div>
    </section>
  );
}
