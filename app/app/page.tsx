"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Menu, Bell, Settings, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { Sidebar } from "@/components/Sidebar";
import { ChatContainer } from "@/components/ChatContainer";
import { ChatInput } from "@/components/ChatInput";
import { Message, Strategy, Language } from "@/types";

// Mock Data
const mockHistory: Strategy[] = [
  { id: "1", name: "RSI + BB Strategy", lang: "pinescript", status: "active", time: "2m ago" },
  { id: "2", name: "MACD Divergence", lang: "mql5", status: "draft", time: "1h ago" },
  { id: "3", name: "EMA Cross Scalper", lang: "pinescript", status: "active", time: "1d ago" },
];

const mockPineScriptCode = `// Strategy: RSI Mean Reversion
// @version=5
strategy("RSI_BB_Strategy", overlay=true, initial_capital=10000, default_qty_type=strategy.percent_of_equity, default_qty_value=10)

// Inputs
rsiLength = input.int(14, "RSI Length", minval=1)
bbLength = input.int(20, "Bollinger Length", minval=1)
bbMult = input.float(2.0, "BB Multiplier", minval=0.1)
oversold = input.int(30, "Oversold Level", minval=0, maxval=100)
overbought = input.int(70, "Overbought Level", minval=0, maxval=100)

// Indicators
rsi = ta.rsi(close, rsiLength)
[bbUpper, bbMiddle, bbLower] = ta.bb(close, bbLength, bbMult)

// Entry Conditions
longCondition = rsi < oversold and low <= bbLower
shortCondition = rsi > overbought and high >= bbUpper

// Risk Management
stopLoss = input.float(2.0, "Stop Loss %", minval=0.1) / 100
takeProfit = input.float(4.0, "Take Profit %", minval=0.1) / 100

// Strategy Execution
if longCondition
    strategy.entry("Long", strategy.long)
    strategy.exit("Long Exit", "Long", 
         limit=close * (1 + takeProfit),
         stop=close * (1 - stopLoss))

if shortCondition
    strategy.entry("Short", strategy.short)
    strategy.exit("Short Exit", "Short",
         limit=close * (1 - takeProfit),
         stop=close * (1 + stopLoss))

// Plotting
plot(bbUpper, "BB Upper", color=color.new(color.blue, 50))
plot(bbLower, "BB Lower", color=color.new(color.blue, 50))
hline(oversold, "Oversold", color=color.green)
hline(overbought, "Overbought", color=color.red)`;

const mockMQL5Code = `//+------------------------------------------------------------------+
//|                                            MACD_Divergence.mq5   |
//|                        Copyright 2024, AI Trading Generator      |
//+------------------------------------------------------------------+
#property copyright "AI Trading Generator"
#property link      "https://algomock.ai"
#property version   "1.00"
#property strict

#include <Trade\Trade.mqh>

input group "=== MACD Settings ==="
input int      FastEMA = 12;
input int      SlowEMA = 26;
input int      SignalSMA = 9;
input int      MACDShift = 0;

input group "=== Risk Management ==="
input double   LotSize = 0.1;
input double   StopLossPips = 50;
input double   TakeProfitPips = 100;
input int      Slippage = 3;

int macdHandle;
CTrade trade;

int OnInit()
{
   macdHandle = iMACD(_Symbol, PERIOD_CURRENT, FastEMA, SlowEMA, SignalSMA, PRICE_CLOSE);
   
   if(macdHandle == INVALID_HANDLE)
   {
      Print("Failed to create MACD indicator");
      return(INIT_FAILED);
   }
   
   trade.SetDeviationInPoints(Slippage);
   trade.SetAsyncMode(false);
   
   return(INIT_SUCCEEDED);
}

void OnDeinit(const int reason)
{
   IndicatorRelease(macdHandle);
}

void OnTick()
{
   if(!NewBar()) return;
   
   double macdMain[], macdSignal[];
   ArraySetAsSeries(macdMain, true);
   ArraySetAsSeries(macdSignal, true);
   
   CopyBuffer(macdHandle, 0, 0, 3, macdMain);
   CopyBuffer(macdHandle, 1, 0, 3, macdSignal);
   
   // Golden Cross
   if(macdMain[1] > macdSignal[1] && macdMain[2] <= macdSignal[2])
   {
      if(PositionSelect(_Symbol)) return;
      
      double sl = NormalizeDouble(Bid - StopLossPips * _Point, _Digits);
      double tp = NormalizeDouble(Bid + TakeProfitPips * _Point, _Digits);
      
      trade.Buy(LotSize, _Symbol, Ask, sl, tp, "MACD Golden Cross");
   }
   
   // Death Cross
   if(macdMain[1] < macdSignal[1] && macdMain[2] >= macdSignal[2])
   {
      if(PositionSelect(_Symbol)) return;
      
      double sl = NormalizeDouble(Ask + StopLossPips * _Point, _Digits);
      double tp = NormalizeDouble(Ask - TakeProfitPips * _Point, _Digits);
      
      trade.Sell(LotSize, _Symbol, Bid, sl, tp, "MACD Death Cross");
   }
}

bool NewBar()
{
   static datetime lastBarTime = 0;
   datetime currentBarTime = iTime(_Symbol, PERIOD_CURRENT, 0);
   
   if(lastBarTime != currentBarTime)
   {
      lastBarTime = currentBarTime;
      return true;
   }
   return false;
}`;

export default function AppPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [history] = useState<Strategy[]>(mockHistory);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [isTyping, setIsTyping] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const generateResponse = useCallback((userMessage: string, language: Language): { content: string; code: string } => {
    const lowerMsg = userMessage.toLowerCase();
    
    if (lowerMsg.includes("rsi")) {
      return {
        content: `I've generated an RSI Mean Reversion strategy for you. This strategy combines RSI oversold conditions with Bollinger Band support for high-probability entries.

**Key Features:**
• RSI(14) oversold (< 30) and overbought (> 70) levels
• Bollinger Bands (20, 2.0) for dynamic support/resistance
• Risk management with 2% stop loss and 4% take profit
• Position sizing at 10% of equity

The strategy enters long when RSI is oversold AND price touches the lower Bollinger Band, providing confluence for mean reversion setups.`,
        code: language === "pinescript" ? mockPineScriptCode : mockMQL5Code,
      };
    }
    
    if (lowerMsg.includes("macd")) {
      return {
        content: `Here's a MACD-based momentum strategy. This implementation tracks the convergence/divergence of moving averages to capture trend changes.

**Key Features:**
• Standard MACD(12,26,9) configuration
• Golden Cross / Death Cross signal generation
• New bar detection to avoid multiple signals
• Integrated position sizing and risk management

The strategy waits for MACD line to cross above/below the signal line, confirming momentum shifts before entering positions.`,
        code: language === "pinescript" ? mockPineScriptCode : mockMQL5Code,
      };
    }
    
    if (lowerMsg.includes("breakout") || lowerMsg.includes("bollinger")) {
      return {
        content: `I've created a Bollinger Bands Squeeze breakout strategy. This exploits periods of low volatility followed by expansion.

**Key Features:**
• Bandwidth calculation for squeeze detection
• Breakout confirmation with volume (if available)
• ATR-based stop loss for volatility-adjusted exits
• Trailing stop option for trend capture

The strategy identifies when bands contract (low volatility) and enters on the first expansion candle, riding the subsequent momentum.`,
        code: language === "pinescript" ? mockPineScriptCode : mockMQL5Code,
      };
    }

    return {
      content: `I've generated a custom trading strategy based on your request. The code includes proper risk management, position sizing, and clean structure.

**Key Features:**
• Modular input configuration
• Built-in risk management
• Clear entry/exit logic
• Performance tracking ready

Review the code and click "Test in ${language === 'pinescript' ? 'TradingView' : 'MetaTrader'}" to validate it on historical data.`,
      code: language === "pinescript" ? mockPineScriptCode : mockMQL5Code,
    };
  }, []);

  const handleSend = useCallback((userMessage: string, language: Language) => {
    const userMsg: Message = {
      id: Date.now().toString(),
      role: "user",
      content: userMessage,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    setTimeout(() => {
      const response = generateResponse(userMessage, language);
      
      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: "ai",
        content: response.content,
        code: response.code,
        language,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 2000);
  }, [generateResponse]);

  const handleSuggestionClick = useCallback((prompt: string) => {
    setInputValue(prompt);
    handleSend(prompt, "pinescript");
  }, [handleSend]);

  const handleTemplateClick = useCallback((prompt: string) => {
    setInputValue(prompt);
  }, []);

  const handleHistorySelect = useCallback((id: string) => {
    setActiveId(id);
    setSidebarOpen(false);
  }, []);

  return (
    <div className="flex h-screen bg-[#0b0f19] overflow-hidden">
      <Sidebar
        history={history}
        activeId={activeId}
        onSelect={handleHistorySelect}
        onTemplateClick={handleTemplateClick}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-16 flex items-center justify-between px-4 lg:px-6 border-b border-slate-800 bg-[#0b0f19]/80 backdrop-blur-xl sticky top-0 z-30">
          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 rounded-lg hover:bg-slate-800 transition-colors"
              aria-label="Open sidebar"
            >
              <Menu className="w-5 h-5 text-slate-400" />
            </motion.button>

            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800/50 border border-slate-800">
              <Search className="w-4 h-4 text-slate-500" />
              <input
                type="text"
                placeholder="Search strategies..."
                className="bg-transparent text-sm text-slate-300 placeholder:text-slate-500 outline-none w-48"
              />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-lg hover:bg-slate-800 transition-colors relative"
              aria-label="Notifications"
            >
              <Bell className="w-5 h-5 text-slate-400" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-emerald-500 rounded-full" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-lg hover:bg-slate-800 transition-colors"
              aria-label="Settings"
            >
              <Settings className="w-5 h-5 text-slate-400" />
            </motion.button>
          </div>
        </header>

        <ChatContainer
          messages={messages}
          isTyping={isTyping}
          onSuggestionClick={handleSuggestionClick}
        />

        <ChatInput
          onSend={handleSend}
          onTemplateClick={handleTemplateClick}
          disabled={isTyping}
          initialValue={inputValue}
        />
      </div>
    </div>
  );
}
