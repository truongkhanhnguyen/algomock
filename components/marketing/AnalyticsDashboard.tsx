"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  Users,
  Code2,
  Clock,
  ArrowUpRight,
  ArrowDownRight,
  Activity,
  Globe,
} from "lucide-react";

const metrics = [
  {
    label: "Active Strategies",
    value: "8,492",
    change: "+12.5%",
    trend: "up",
    icon: Code2,
    color: "emerald",
  },
  {
    label: "Daily Code Generations",
    value: "3,847",
    change: "+23.1%",
    trend: "up",
    icon: Activity,
    color: "blue",
  },
  {
    label: "Avg. Generation Time",
    value: "2.3s",
    change: "-18.2%",
    trend: "down",
    icon: Clock,
    color: "purple",
  },
  {
    label: "Active Users (24h)",
    value: "4,231",
    change: "+8.7%",
    trend: "up",
    icon: Users,
    color: "orange",
  },
];

const recentActivity = [
  { user: "Marcus T.", action: "Generated RSI Strategy", time: "2m ago", lang: "PineScript" },
  { user: "Sarah K.", action: "Backtested MACD System", time: "5m ago", lang: "MQL5" },
  { user: "David L.", action: "Exported to TradingView", time: "8m ago", lang: "PineScript" },
  { user: "Elena R.", action: "Created BB Squeeze", time: "12m ago", lang: "PineScript" },
  { user: "James W.", action: "Modified Stop Loss", time: "15m ago", lang: "MQL5" },
];

const topStrategies = [
  { name: "RSI Mean Reversion", uses: 2341, winRate: "68.2%", profit: "+$12.4K" },
  { name: "MACD Golden Cross", uses: 1892, winRate: "64.8%", profit: "+$9.8K" },
  { name: "EMA 50/200 Cross", uses: 1654, winRate: "61.3%", profit: "+$8.2K" },
  { name: "BB Squeeze Breakout", uses: 1432, winRate: "59.7%", profit: "+$7.1K" },
];

const globalUsage = [
  { country: "United States", users: "3,421", percent: 28 },
  { country: "United Kingdom", users: "1,892", percent: 16 },
  { country: "Germany", users: "1,543", percent: 13 },
  { country: "Australia", users: "1,234", percent: 10 },
  { country: "Canada", users: "987", percent: 8 },
  { country: "Others", users: "2,923", percent: 25 },
];

export function AnalyticsDashboard() {
  return (
    <section className="py-24 bg-[#0b0f19] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-medium mb-4">
            Live Analytics
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Real-Time Platform Activity
          </h2>
          <p className="text-slate-400">
            See how traders are using AlgoMock right now
          </p>
        </motion.div>

        {/* Main Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl bg-[#151b2b] border border-slate-800 overflow-hidden"
        >
          {/* Dashboard Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-sm text-slate-300">Live Data</span>
            </div>
            <span className="text-xs text-slate-500">Last updated: Just now</span>
          </div>

          <div className="p-6">
            {/* Metrics Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {metrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 rounded-xl bg-[#0b0f19] border border-slate-800"
                >
                  <div className="flex items-center justify-between mb-3">
                    <metric.icon className={`w-5 h-5 text-${metric.color}-400`} />
                    <span
                      className={`flex items-center gap-1 text-xs ${
                        metric.trend === "up" ? "text-emerald-400" : "text-emerald-400"
                      }`}
                    >
                      {metric.trend === "up" ? (
                        <ArrowUpRight className="w-3 h-3" />
                      ) : (
                        <ArrowDownRight className="w-3 h-3" />
                      )}
                      {metric.change}
                    </span>
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
                  <div className="text-xs text-slate-500">{metric.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Charts Row */}
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Top Strategies */}
              <div className="p-4 rounded-xl bg-[#0b0f19] border border-slate-800">
                <h3 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-emerald-400" />
                  Top Performing Strategies
                </h3>
                <div className="space-y-3">
                  {topStrategies.map((strategy, index) => (
                    <div
                      key={strategy.name}
                      className="flex items-center justify-between p-3 rounded-lg bg-slate-800/30"
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded bg-slate-800 flex items-center justify-center text-xs text-slate-400">
                          {index + 1}
                        </span>
                        <div>
                          <div className="text-sm text-white">{strategy.name}</div>
                          <div className="text-xs text-slate-500">{strategy.uses.toLocaleString()} uses</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium text-emerald-400">{strategy.winRate}</div>
                        <div className="text-xs text-slate-500">{strategy.profit}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Global Usage */}
              <div className="p-4 rounded-xl bg-[#0b0f19] border border-slate-800">
                <h3 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
                  <Globe className="w-4 h-4 text-blue-400" />
                  Global Usage
                </h3>
                <div className="space-y-3">
                  {globalUsage.map((country) => (
                    <div key={country.country} className="space-y-1">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-300">{country.country}</span>
                        <span className="text-slate-500">{country.users} users</span>
                      </div>
                      <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${country.percent}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 }}
                          className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-emerald-400"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="mt-6 p-4 rounded-xl bg-[#0b0f19] border border-slate-800">
              <h3 className="text-sm font-semibold text-white mb-4">Recent Activity</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {recentActivity.map((activity, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-3 rounded-lg bg-slate-800/30"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
                        <span className="text-[10px] text-emerald-400 font-medium">
                          {activity.user.charAt(0)}
                        </span>
                      </div>
                      <span className="text-xs text-slate-400">{activity.user}</span>
                    </div>
                    <div className="text-xs text-slate-300 mb-1">{activity.action}</div>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] text-slate-500">{activity.time}</span>
                      <span
                        className={`text-[10px] px-1.5 py-0.5 rounded ${
                          activity.lang === "PineScript"
                            ? "bg-blue-500/20 text-blue-400"
                            : "bg-purple-500/20 text-purple-400"
                        }`}
                      >
                        {activity.lang}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
