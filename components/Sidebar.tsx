"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bot,
  History,
  LayoutTemplate,
  User,
  Crown,
  ChevronLeft,
  ChevronRight,
  X,
  FileCode2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SidebarProps, Language } from "@/types";

const templates = [
  { id: "rsi", name: "RSI Oversold", prompt: "Create an RSI oversold strategy that buys when RSI < 30 and sells when RSI > 70" },
  { id: "macd", name: "MACD Cross", prompt: "Build a MACD golden cross strategy with signal line confirmation" },
  { id: "bb", name: "Bollinger Squeeze", prompt: "Generate a Bollinger Bands squeeze breakout strategy" },
];

const getLanguageColor = (lang: Language): string => {
  switch (lang) {
    case "pinescript":
      return "bg-blue-500/20 text-blue-400 border-blue-500/30";
    case "mql5":
      return "bg-purple-500/20 text-purple-400 border-purple-500/30";
    default:
      return "bg-slate-500/20 text-slate-400";
  }
};

export function Sidebar({
  history,
  activeId,
  onSelect,
  onTemplateClick,
  isOpen,
  onClose,
}: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <>
      {/* Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={onClose}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{
          width: isCollapsed ? 80 : 280,
          x: isOpen ? 0 : -280,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={cn(
          "fixed lg:static inset-y-0 left-0 z-50 bg-[#151b2b] border-r border-slate-800",
          "flex flex-col overflow-hidden"
        )}
      >
        {/* Logo */}
        <div className="flex items-center justify-between p-4 border-b border-slate-800">
          <div className={cn("flex items-center gap-3", isCollapsed && "justify-center w-full")}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center flex-shrink-0">
              <Bot className="w-6 h-6 text-white" />
            </div>
            {!isCollapsed && (
              <div>
                <h1 className="font-semibold text-white text-sm">AlgoMock</h1>
                <p className="text-xs text-slate-400">AI Code Generator</p>
              </div>
            )}
          </div>
          <div className="flex items-center gap-1">
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className={cn(
                "hidden lg:flex p-1.5 rounded-lg hover:bg-slate-800 transition-colors",
                isCollapsed && "absolute right-2"
              )}
              aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
            >
              {isCollapsed ? (
                <ChevronRight className="w-4 h-4 text-slate-400" />
              ) : (
                <ChevronLeft className="w-4 h-4 text-slate-400" />
              )}
            </button>
            <button
              onClick={onClose}
              className="lg:hidden p-1.5 rounded-lg hover:bg-slate-800 transition-colors"
              aria-label="Close sidebar"
            >
              <X className="w-4 h-4 text-slate-400" />
            </button>
          </div>
        </div>

        {/* History Section */}
        <div className="flex-1 overflow-y-auto scrollbar-thin">
          <div className={cn("p-4", isCollapsed && "px-2")}>
            {!isCollapsed && (
              <div className="flex items-center gap-2 mb-3 text-slate-400">
                <History className="w-4 h-4" />
                <span className="text-xs font-medium uppercase tracking-wider">History</span>
              </div>
            )}
            {isCollapsed && (
              <div className="flex justify-center mb-3">
                <History className="w-5 h-5 text-slate-400" />
              </div>
            )}

            <div className="space-y-1">
              {history.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => onSelect(item.id)}
                  className={cn(
                    "w-full text-left p-3 rounded-lg transition-all duration-200",
                    "hover:bg-slate-800/50 group",
                    activeId === item.id
                      ? "bg-slate-800/50 border-l-2 border-emerald-500"
                      : "border-l-2 border-transparent"
                  )}
                >
                  {isCollapsed ? (
                    <div className="flex justify-center">
                      <div
                        className={cn(
                          "w-2 h-2 rounded-full",
                          item.status === "active" ? "bg-emerald-500" : "bg-slate-500"
                        )}
                      />
                    </div>
                  ) : (
                    <>
                      <div className="flex items-start justify-between mb-1">
                        <span className="text-sm font-medium text-slate-200 truncate pr-2">
                          {item.name}
                        </span>
                        <span
                          className={cn(
                            "w-2 h-2 rounded-full flex-shrink-0 mt-1",
                            item.status === "active" ? "bg-emerald-500" : "bg-slate-500"
                          )}
                        />
                      </div>
                      <div className="flex items-center gap-2">
                        <span
                          className={cn(
                            "text-[10px] px-1.5 py-0.5 rounded border font-medium uppercase",
                            getLanguageColor(item.lang)
                          )}
                        >
                          {item.lang}
                        </span>
                        <span className="text-xs text-slate-500">{item.time}</span>
                      </div>
                    </>
                  )}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Templates Section */}
          <div className={cn("px-4 pb-4", isCollapsed && "px-2")}>
            {!isCollapsed && (
              <div className="flex items-center gap-2 mb-3 text-slate-400">
                <LayoutTemplate className="w-4 h-4" />
                <span className="text-xs font-medium uppercase tracking-wider">Templates</span>
              </div>
            )}
            {isCollapsed && (
              <div className="flex justify-center mb-3">
                <LayoutTemplate className="w-5 h-5 text-slate-400" />
              </div>
            )}

            <div className="space-y-2">
              {templates.map((template) => (
                <button
                  key={template.id}
                  onClick={() => onTemplateClick(template.prompt)}
                  className={cn(
                    "w-full text-left px-3 py-2 rounded-lg",
                    "bg-slate-800/30 hover:bg-slate-800/60",
                    "border border-slate-700/50 hover:border-emerald-500/30",
                    "transition-all duration-200 text-sm text-slate-300",
                    "hover:text-emerald-400 group flex items-center gap-2",
                    isCollapsed && "justify-center px-2"
                  )}
                >
                  <FileCode2 className="w-4 h-4 text-slate-500 group-hover:text-emerald-500 transition-colors" />
                  {!isCollapsed && <span>{template.name}</span>}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* User Profile */}
        <div className="p-4 border-t border-slate-800">
          <button
            className={cn(
              "w-full flex items-center gap-3 p-3 rounded-lg",
              "hover:bg-slate-800/50 transition-colors group",
              isCollapsed && "justify-center"
            )}
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center flex-shrink-0">
              <User className="w-5 h-5 text-slate-400" />
            </div>
            {!isCollapsed && (
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-slate-200 truncate">Alex Trader</p>
                <p className="text-xs text-slate-500">alex@example.com</p>
              </div>
            )}
            {!isCollapsed && (
              <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-gradient-to-r from-amber-500/20 to-yellow-500/20 border border-amber-500/30">
                <Crown className="w-3 h-3 text-amber-400" />
                <span className="text-[10px] font-semibold text-amber-400 uppercase">Pro</span>
              </div>
            )}
          </button>
        </div>
      </motion.aside>
    </>
  );
}
