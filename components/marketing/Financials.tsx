"use client";

import { motion } from "framer-motion";
import { TrendingUp, DollarSign, Users, CreditCard, ArrowUpRight } from "lucide-react";

const revenueData = [
  { month: "Jan", revenue: 12500, mrr: 8200 },
  { month: "Feb", revenue: 18200, mrr: 12400 },
  { month: "Mar", revenue: 26400, mrr: 18500 },
  { month: "Apr", revenue: 38900, mrr: 27300 },
  { month: "May", revenue: 54200, mrr: 38400 },
  { month: "Jun", revenue: 76800, mrr: 52100 },
  { month: "Jul", revenue: 98500, mrr: 68700 },
  { month: "Aug", revenue: 124000, mrr: 89200 },
  { month: "Sep", revenue: 156000, mrr: 112000 },
  { month: "Oct", revenue: 198000, mrr: 143000 },
  { month: "Nov", revenue: 245000, mrr: 178000 },
  { month: "Dec", revenue: 312000, mrr: 224000 },
];

const unitEconomics = [
  { label: "CAC", value: "$45", description: "Customer Acquisition Cost" },
  { label: "LTV", value: "$890", description: "Lifetime Value" },
  { label: "LTV:CAC", value: "19.8x", description: "LTV to CAC Ratio" },
  { label: "Gross Margin", value: "87%", description: "After infrastructure costs" },
  { label: "Payback Period", value: "1.2 mo", description: "Time to recover CAC" },
  { label: "NRR", value: "142%", description: "Net Revenue Retention" },
];

const projections = [
  { year: "2024", revenue: "$1.2M", users: "12K", valuation: "$32M" },
  { year: "2025", revenue: "$5.8M", users: "45K", valuation: "$120M" },
  { year: "2026", revenue: "$18M", users: "120K", valuation: "$400M" },
  { year: "2027", revenue: "$45M", users: "280K", valuation: "$1B" },
];

export function Financials() {
  const maxRevenue = Math.max(...revenueData.map((d) => d.revenue));

  return (
    <section className="py-24 bg-[#151b2b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-medium mb-4">
            Financial Performance
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Strong Unit Economics &{" "}
            <span className="text-emerald-400">Rapid Growth</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            12 months of consistent growth with best-in-class SaaS metrics.
            Revenue up 2,400% YoY.
          </p>
        </motion.div>

        {/* Revenue Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-6 rounded-2xl bg-[#0b0f19] border border-slate-800 mb-8"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-semibold text-white">Monthly Revenue</h3>
              <p className="text-sm text-slate-500">Last 12 months</p>
            </div>
            <div className="flex items-center gap-2 text-emerald-400">
              <TrendingUp className="w-5 h-5" />
              <span className="font-semibold">+2,396% YoY</span>
            </div>
          </div>

          {/* Chart */}
          <div className="h-64 flex items-end gap-2">
            {revenueData.map((data, index) => (
              <div key={data.month} className="flex-1 flex flex-col items-center gap-2">
                <motion.div
                  initial={{ height: 0 }}
                  whileInView={{ height: `${(data.revenue / maxRevenue) * 100}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="w-full bg-gradient-to-t from-emerald-500/50 to-emerald-400 rounded-t-sm relative group"
                >
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-800 px-2 py-1 rounded text-xs text-white whitespace-nowrap">
                    ${(data.revenue / 1000).toFixed(0)}k
                  </div>
                </motion.div>
                <span className="text-xs text-slate-500">{data.month}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Unit Economics */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {unitEconomics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="p-6 rounded-xl bg-[#0b0f19] border border-slate-800"
            >
              <div className="text-sm text-slate-500 mb-1">{metric.label}</div>
              <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
              <div className="text-xs text-slate-400">{metric.description}</div>
            </motion.div>
          ))}
        </div>

        {/* Financial Projections */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-6 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-transparent border border-emerald-500/20"
        >
          <h3 className="text-lg font-semibold text-white mb-6">Financial Projections</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-800">
                  <th className="text-left py-3 px-4 text-sm font-medium text-slate-400">Year</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-slate-400">Revenue</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-slate-400">Users</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-slate-400">Valuation Target</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-slate-400">Growth</th>
                </tr>
              </thead>
              <tbody>
                {projections.map((proj, index) => (
                  <tr key={proj.year} className="border-b border-slate-800/50 last:border-0">
                    <td className="py-4 px-4 text-white font-medium">{proj.year}</td>
                    <td className="py-4 px-4 text-emerald-400 font-semibold">{proj.revenue}</td>
                    <td className="py-4 px-4 text-slate-300">{proj.users}</td>
                    <td className="py-4 px-4 text-slate-300">{proj.valuation}</td>
                    <td className="py-4 px-4">
                      {index > 0 && (
                        <span className="flex items-center gap-1 text-emerald-400 text-sm">
                          <ArrowUpRight className="w-4 h-4" />
                          {index === 1 ? "383%" : index === 2 ? "210%" : "150%"}
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
