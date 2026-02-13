"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Editor from "@monaco-editor/react";
import {
  Copy,
  Check,
  Download,
  Play,
  Edit3,
  Save,
  FileCode2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { CodeBlockProps, Language } from "@/types";

const getLanguageLabel = (lang: Language): string => {
  switch (lang) {
    case "pinescript":
      return "PineScript v5";
    case "mql5":
      return "MQL5";
    default:
      return "Code";
  }
};

const getLanguageColor = (lang: Language): string => {
  switch (lang) {
    case "pinescript":
      return "text-blue-400";
    case "mql5":
      return "text-purple-400";
    default:
      return "text-slate-400";
  }
};

export function CodeBlock({ code, language, title, isValid = true }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const extension = language === "pinescript" ? ".pine" : ".mq5";
    const blob = new Blob([code], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `strategy${extension}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn(
        "rounded-lg overflow-hidden border border-slate-800",
        "bg-[#1e232e]"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#151b2b] border-b border-slate-800">
        <div className="flex items-center gap-3">
          <FileCode2 className={cn("w-4 h-4", getLanguageColor(language))} />
          <span className={cn("text-sm font-medium", getLanguageColor(language))}>
            {title || getLanguageLabel(language)}
          </span>
          {isValid && (
            <span className="flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
              <Check className="w-3 h-3" />
              Validated
            </span>
          )}
        </div>

        <div className="flex items-center gap-1">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleCopy}
            className={cn(
              "p-2 rounded-lg transition-colors",
              "hover:bg-slate-800 text-slate-400 hover:text-slate-200",
              copied && "text-emerald-400 hover:text-emerald-400"
            )}
            aria-label={copied ? "Copied" : "Copy code"}
          >
            <motion.div
              initial={false}
              animate={{ scale: copied ? [1, 1.2, 1] : 1 }}
              transition={{ duration: 0.2 }}
            >
              {copied ? (
                <Check className="w-4 h-4" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </motion.div>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleDownload}
            className="p-2 rounded-lg transition-colors hover:bg-slate-800 text-slate-400 hover:text-slate-200"
            aria-label="Download code"
          >
            <Download className="w-4 h-4" />
          </motion.button>
        </div>
      </div>

      {/* Editor */}
      <div className="relative">
        <Editor
          height="300px"
          language={language === "pinescript" ? "javascript" : "cpp"}
          value={code}
          theme="vs-dark"
          options={{
            readOnly: true,
            minimap: { enabled: false },
            scrollbar: {
              vertical: "auto",
              horizontal: "auto",
            },
            lineNumbers: "on",
            renderLineHighlight: "line",
            fontFamily: "JetBrains Mono, monospace",
            fontSize: 13,
            padding: { top: 16, bottom: 16 },
            scrollBeyondLastLine: false,
            wordWrap: "on",
            automaticLayout: true,
          }}
        />
      </div>

      {/* Footer Actions */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#151b2b] border-t border-slate-800">
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <span>{code.split("\n").length} lines</span>
          <span>•</span>
          <span>{code.length} chars</span>
        </div>

        <div className="flex items-center gap-2">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm text-slate-300 hover:bg-slate-800 transition-colors"
          >
            <Edit3 className="w-3.5 h-3.5" />
            Modify
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm text-slate-300 hover:bg-slate-800 transition-colors"
          >
            <Save className="w-3.5 h-3.5" />
            Save Version
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 px-4 py-1.5 rounded-lg text-sm font-medium bg-emerald-500 hover:bg-emerald-600 text-white transition-colors shadow-lg shadow-emerald-500/20"
          >
            <Play className="w-3.5 h-3.5" />
            Test in {language === "pinescript" ? "TradingView" : "MetaTrader"}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
