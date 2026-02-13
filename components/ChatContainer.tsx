"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, TrendingUp, BarChart3, Target } from "lucide-react";
import { cn } from "@/lib/utils";
import { ChatContainerProps, Message, MessageRole } from "@/types";
import { CodeBlock } from "./CodeBlock";

const suggestions = [
  {
    id: "trend",
    title: "Trend Following",
    description: "EMA crossovers with momentum confirmation",
    icon: TrendingUp,
    prompt: "Create a trend following strategy using EMA 50/200 crossover with RSI confirmation above 50",
  },
  {
    id: "mean",
    title: "Mean Reversion",
    description: "RSI oversold with Bollinger Bands",
    icon: BarChart3,
    prompt: "Build a mean reversion strategy using RSI oversold conditions with Bollinger Band squeeze",
  },
  {
    id: "breakout",
    title: "Breakout System",
    description: "Support/Resistance with volume spike",
    icon: Target,
    prompt: "Generate a breakout strategy using support/resistance levels with volume confirmation",
  },
];

const TypingIndicator = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="flex items-start gap-3 mb-6"
    >
      <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
        <Bot className="w-4 h-4 text-emerald-400" />
      </div>
      <div className="bg-[#151b2b] border border-slate-800 rounded-2xl rounded-tl-none px-4 py-3">
        <div className="flex items-center gap-1.5">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 rounded-full bg-emerald-400"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.1,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const MessageBubble = ({ message, index }: { message: Message; index: number }) => {
  const isUser = message.role === "user";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.3 }}
      className={cn("flex items-start gap-3 mb-6", isUser && "flex-row-reverse")}
    >
      {/* Avatar */}
      <div
        className={cn(
          "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0",
          isUser
            ? "bg-gradient-to-br from-emerald-500 to-emerald-600"
            : "bg-emerald-500/20"
        )}
      >
        {isUser ? (
          <span className="text-sm font-semibold text-white">A</span>
        ) : (
          <Bot className="w-4 h-4 text-emerald-400" />
        )}
      </div>

      {/* Message Content */}
      <div
        className={cn(
          "max-w-[85%] lg:max-w-[70%]",
          isUser ? "items-end" : "items-start"
        )}
      >
        <div
          className={cn(
            "px-4 py-3 rounded-2xl",
            isUser
              ? "bg-emerald-500/10 border border-emerald-500/20 rounded-tr-none text-slate-200"
              : "bg-[#151b2b] border border-slate-800 rounded-tl-none text-slate-300"
          )}
        >
          <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
        </div>

        {/* Code Block if present */}
        {message.code && message.language && (
          <div className="mt-4">
            <CodeBlock
              code={message.code}
              language={message.language}
              title={message.language === "pinescript" ? "PineScript v5" : "MQL5"}
              isValid={true}
            />
          </div>
        )}

        {/* Timestamp */}
        <span className="text-[10px] text-slate-500 mt-1.5 block">
          {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
        </span>
      </div>
    </motion.div>
  );
};

const WelcomeState = ({ onSuggestionClick }: { onSuggestionClick: (prompt: string) => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center h-full px-4"
    >
      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/20">
        <Bot className="w-8 h-8 text-white" />
      </div>

      <h2 className="text-2xl font-semibold text-white mb-2 text-center">
        Describe your strategy...
      </h2>
      <p className="text-slate-400 text-center mb-8 max-w-md">
        I'll generate production-ready trading code in PineScript or MQL5. 
        Include entry rules, indicators, and risk management.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-3xl">
        {suggestions.map((suggestion, index) => (
          <motion.button
            key={suggestion.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + index * 0.1 }}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onSuggestionClick(suggestion.prompt)}
            className={cn(
              "p-4 rounded-xl text-left",
              "bg-[#151b2b] border border-slate-800",
              "hover:border-emerald-500/30 hover:bg-slate-800/50",
              "transition-all duration-200 group"
            )}
          >
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-3 group-hover:bg-emerald-500/20 transition-colors">
              <suggestion.icon className="w-5 h-5 text-emerald-400" />
            </div>
            <h3 className="font-medium text-slate-200 mb-1">{suggestion.title}</h3>
            <p className="text-xs text-slate-500">{suggestion.description}</p>
          </motion.button>
        ))}
      </div>

      {/* Quick Tips */}
      <div className="mt-8 flex flex-wrap justify-center gap-2">
        {["RSI Strategy", "MACD Divergence", "Grid Trading", "Martingale"].map((tip) => (
          <button
            key={tip}
            onClick={() => onSuggestionClick(`Create a ${tip.toLowerCase()} strategy`)}
            className="px-3 py-1.5 rounded-full text-xs bg-slate-800/50 text-slate-400 hover:bg-slate-800 hover:text-emerald-400 transition-colors border border-slate-800"
          >
            {tip}
          </button>
        ))}
      </div>
    </motion.div>
  );
};

export function ChatContainer({ messages, isTyping, onSuggestionClick }: ChatContainerProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping]);

  return (
    <div
      ref={scrollRef}
      className="flex-1 overflow-y-auto scrollbar-thin p-4 lg:p-6"
    >
      {messages.length === 0 ? (
        <WelcomeState onSuggestionClick={onSuggestionClick} />
      ) : (
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="popLayout">
            {messages.map((message, index) => (
              <MessageBubble key={message.id} message={message} index={index} />
            ))}
          </AnimatePresence>

          {isTyping && <TypingIndicator />}

          <div ref={messagesEndRef} />
        </div>
      )}
    </div>
  );
}
