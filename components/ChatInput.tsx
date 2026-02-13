"use client";

import { useState, useRef, useEffect, KeyboardEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  Paperclip,
  Mic,
  ChevronDown,
  FileCode2,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { ChatInputProps, Language } from "@/types";

const quickPrompts = [
  "RSI oversold bounce",
  "MACD golden cross",
  "Bollinger Bands squeeze",
];

const languages: { value: Language; label: string; color: string }[] = [
  { value: "pinescript", label: "PineScript", color: "text-blue-400" },
  { value: "mql5", label: "MQL5", color: "text-purple-400" },
];

export function ChatInput({
  onSend,
  onTemplateClick,
  disabled = false,
  initialValue = "",
}: ChatInputProps) {
  const [message, setMessage] = useState(initialValue);
  const [selectedLang, setSelectedLang] = useState<Language>("pinescript");
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const langDropdownRef = useRef<HTMLDivElement>(null);

  // Auto-resize textarea
  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      const newHeight = Math.min(textarea.scrollHeight, 200);
      textarea.style.height = `${newHeight}px`;
    }
  }, [message]);

  // Update message when initialValue changes
  useEffect(() => {
    if (initialValue) {
      setMessage(initialValue);
      textareaRef.current?.focus();
    }
  }, [initialValue]);

  // Close lang dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        langDropdownRef.current &&
        !langDropdownRef.current.contains(event.target as Node)
      ) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSend = () => {
    if (!message.trim() || disabled) return;
    onSend(message.trim(), selectedLang);
    setMessage("");
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleQuickPromptClick = (prompt: string) => {
    setMessage(prompt);
    textareaRef.current?.focus();
  };

  const selectedLangData = languages.find((l) => l.value === selectedLang);

  return (
    <div className="border-t border-slate-800 bg-[#0b0f19]/95 backdrop-blur">
      {/* Quick Prompts */}
      <div className="px-4 py-2 border-b border-slate-800/50 overflow-x-auto scrollbar-thin">
        <div className="flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
          <span className="text-xs text-slate-500 flex-shrink-0">Quick prompts:</span>
          {quickPrompts.map((prompt) => (
            <motion.button
              key={prompt}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleQuickPromptClick(prompt)}
              className="px-3 py-1 rounded-full text-xs bg-slate-800/50 text-slate-400 hover:bg-slate-800 hover:text-emerald-400 transition-colors border border-slate-800 whitespace-nowrap"
            >
              {prompt}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Input Area */}
      <div className="p-4">
        <div
          className={cn(
            "relative rounded-xl border transition-all duration-200",
            "bg-[#151b2b]",
            isFocused
              ? "border-emerald-500/50 ring-1 ring-emerald-500/20"
              : "border-slate-800 hover:border-slate-700"
          )}
        >
          <textarea
            ref={textareaRef}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder="Describe your trading strategy... (e.g., 'RSI oversold with Bollinger Band bounce')"
            disabled={disabled}
            className={cn(
              "w-full bg-transparent text-sm text-slate-200 placeholder:text-slate-500",
              "resize-none outline-none min-h-[56px] max-h-[200px]",
              "px-4 pt-4 pb-16"
            )}
            rows={1}
            aria-label="Strategy description"
          />

          {/* Toolbar */}
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
            <div className="flex items-center gap-1">
              {/* Attach */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition-colors"
                aria-label="Attach file"
              >
                <Paperclip className="w-4 h-4" />
              </motion.button>

              {/* Voice */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition-colors"
                aria-label="Voice input"
              >
                <Mic className="w-4 h-4" />
              </motion.button>

              {/* Language Selector */}
              <div className="relative" ref={langDropdownRef}>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsLangOpen(!isLangOpen)}
                  className={cn(
                    "flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium",
                    "bg-slate-800/50 hover:bg-slate-800 transition-colors",
                    selectedLangData?.color
                  )}
                  aria-label="Select language"
                  aria-expanded={isLangOpen}
                >
                  <FileCode2 className="w-3.5 h-3.5" />
                  {selectedLangData?.label}
                  <ChevronDown
                    className={cn(
                      "w-3 h-3 transition-transform",
                      isLangOpen && "rotate-180"
                    )}
                  />
                </motion.button>

                <AnimatePresence>
                  {isLangOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 5 }}
                      className={cn(
                        "absolute bottom-full left-0 mb-2",
                        "bg-[#1e232e] border border-slate-800 rounded-lg",
                        "shadow-xl shadow-black/20 overflow-hidden min-w-[140px]"
                      )}
                    >
                      {languages.map((lang) => (
                        <button
                          key={lang.value}
                          onClick={() => {
                            setSelectedLang(lang.value);
                            setIsLangOpen(false);
                          }}
                          className={cn(
                            "w-full flex items-center gap-2 px-3 py-2 text-xs",
                            "hover:bg-slate-800 transition-colors",
                            selectedLang === lang.value
                              ? "bg-slate-800/50"
                              : "",
                            lang.color
                          )}
                        >
                          <FileCode2 className="w-3.5 h-3.5" />
                          {lang.label}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Send Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleSend}
              disabled={!message.trim() || disabled}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium",
                "transition-all duration-200",
                message.trim() && !disabled
                  ? "bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg shadow-emerald-500/20"
                  : "bg-slate-800 text-slate-500 cursor-not-allowed"
              )}
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
              Send
            </motion.button>
          </div>
        </div>

        {/* Footer hint */}
        <p className="mt-2 text-[11px] text-slate-600 text-center">
          Press <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-500">Enter</kbd> to send,{" "}
          <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-500">Shift+Enter</kbd> for new line
        </p>
      </div>
    </div>
  );
}
