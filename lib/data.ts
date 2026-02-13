// Mock Data for AlgoMock Website

export const stats = {
  strategiesGenerated: 52431,
  activeUsers: 12500,
  countriesServed: 87,
  successRate: 94,
  avgTimeSaved: 8, // hours per week
  monthlyGrowth: 40, // percent
};

export const revenueMetrics = {
  currentMRR: 224000,
  currentARR: 2688000,
  lastMonthRevenue: 312000,
  yoyGrowth: 2396, // percent
  grossMargin: 87, // percent
  cac: 45,
  ltv: 890,
  ltvCacRatio: 19.8,
  paybackPeriod: 1.2, // months
  nrr: 142, // percent
};

export const userMetrics = {
  totalUsers: 12500,
  activeDaily: 4231,
  activeWeekly: 8934,
  paidUsers: 3421,
  freeToPaidRate: 28.5, // percent
  monthlyChurn: 8, // percent
  retentionRate: 92, // percent
};

export const topStrategies = [
  {
    id: "1",
    name: "RSI Mean Reversion",
    description: "Buy when RSI oversold, sell when overbought",
    uses: 2341,
    winRate: 68.2,
    avgProfit: 12400,
    category: "Mean Reversion",
    difficulty: "Beginner",
  },
  {
    id: "2",
    name: "MACD Golden Cross",
    description: "Trend following with MACD signal confirmation",
    uses: 1892,
    winRate: 64.8,
    avgProfit: 9800,
    category: "Trend Following",
    difficulty: "Beginner",
  },
  {
    id: "3",
    name: "EMA 50/200 Cross",
    description: "Long-term trend following with dual EMA",
    uses: 1654,
    winRate: 61.3,
    avgProfit: 8200,
    category: "Trend Following",
    difficulty: "Intermediate",
  },
  {
    id: "4",
    name: "Bollinger Squeeze",
    description: "Volatility breakout strategy",
    uses: 1432,
    winRate: 59.7,
    avgProfit: 7100,
    category: "Breakout",
    difficulty: "Advanced",
  },
  {
    id: "5",
    name: "ATR Trailing Stop",
    description: "Dynamic stop loss based on volatility",
    uses: 1234,
    winRate: 72.1,
    avgProfit: 6500,
    category: "Risk Management",
    difficulty: "Intermediate",
  },
];

export const recentActivity = [
  { user: "Marcus T.", action: "Generated RSI Strategy", time: "2m ago", lang: "PineScript", country: "US" },
  { user: "Sarah K.", action: "Backtested MACD System", time: "5m ago", lang: "MQL5", country: "UK" },
  { user: "David L.", action: "Exported to TradingView", time: "8m ago", lang: "PineScript", country: "DE" },
  { user: "Elena R.", action: "Created BB Squeeze", time: "12m ago", lang: "PineScript", country: "ES" },
  { user: "James W.", action: "Modified Stop Loss", time: "15m ago", lang: "MQL5", country: "AU" },
  { user: "Aisha P.", action: "Generated EMA Cross", time: "18m ago", lang: "PineScript", country: "CA" },
  { user: "Chen W.", action: "Tested Strategy", time: "22m ago", lang: "MQL5", country: "SG" },
  { user: "Maria S.", action: "Saved Version 2", time: "25m ago", lang: "PineScript", country: "BR" },
  { user: "John D.", action: "Shared Strategy", time: "28m ago", lang: "PineScript", country: "US" },
  { user: "Lisa M.", action: "Generated Breakout", time: "32m ago", lang: "MQL5", country: "JP" },
];

export const testimonials = [
  {
    id: "1",
    name: "Marcus Chen",
    role: "Day Trader",
    company: "Independent",
    avatar: "MC",
    content: "AlgoMock cut my strategy development time by 90%. What used to take me a full day now takes 5 minutes. The code quality is excellent - better than what I used to write manually.",
    rating: 5,
    strategy: "RSI Mean Reversion",
    profit: "+$12,400",
  },
  {
    id: "2",
    name: "Sarah Williams",
    role: "Quantitative Analyst",
    company: "Hedge Fund",
    avatar: "SW",
    content: "As a quant, I need to test dozens of ideas quickly. AlgoMock lets me iterate at the speed of thought. The MQL5 support is a game-changer for MetaTrader users.",
    rating: 5,
    strategy: "MACD Divergence",
    profit: "+$8,900",
  },
  {
    id: "3",
    name: "David Park",
    role: "Prop Firm Trader",
    company: "Apex Trading",
    avatar: "DP",
    content: "Our firm uses AlgoMock Enterprise to rapidly prototype strategies before full development. It's reduced our R&D cycle from weeks to days.",
    rating: 5,
    strategy: "EMA Cross Scalper",
    profit: "+$45,000",
  },
  {
    id: "4",
    name: "Elena Rodriguez",
    role: "Forex Trader",
    company: "Independent",
    avatar: "ER",
    content: "I don't know how to code, but I understand trading. AlgoMock bridges that gap perfectly. I've built and backtested 12 strategies in my first month.",
    rating: 5,
    strategy: "Bollinger Squeeze",
    profit: "+$6,200",
  },
  {
    id: "5",
    name: "James Thompson",
    role: "Crypto Trader",
    company: "DeFi Capital",
    avatar: "JT",
    content: "The RSI + Bollinger Band strategy AlgoMock generated for me has a 68% win rate over 6 months. I've never seen results this consistent.",
    rating: 5,
    strategy: "RSI + BB Combo",
    profit: "+$23,500",
  },
  {
    id: "6",
    name: "Aisha Patel",
    role: "Swing Trader",
    company: "Independent",
    avatar: "AP",
    content: "Customer support is incredible. Had an issue with MQL5 export, they fixed it within hours. This team actually cares about their users.",
    rating: 5,
    strategy: "ATR Trailing Stop",
    profit: "+$4,800",
  },
];

export const investors = [
  {
    name: "Andreessen Horowitz",
    stage: "Series A Lead",
    amount: "$5M",
    thesis: "AI-powered developer tools",
  },
  {
    name: "Sequoia Capital",
    stage: "Series A",
    amount: "$2M",
    thesis: "Fintech infrastructure",
  },
  {
    name: "Y Combinator",
    stage: "Seed",
    amount: "$500K",
    thesis: "Winter 2024 Batch",
  },
];

export const pressCoverage = [
  {
    publication: "TechCrunch",
    title: "AlgoMock Raises $8M to Democratize Algorithmic Trading",
    date: "2024-01-15",
    url: "#",
  },
  {
    publication: "Forbes",
    title: "How AI is Changing the Way Traders Build Strategies",
    date: "2024-01-10",
    url: "#",
  },
  {
    publication: "Bloomberg",
    title: "The Rise of Natural Language Trading Systems",
    date: "2023-12-28",
    url: "#",
  },
];

export const changelog = [
  {
    version: "2.4.0",
    date: "2024-02-01",
    type: "feature",
    title: "MQL5 Support",
    description: "Full support for MetaTrader 5 strategy generation.",
  },
  {
    version: "2.3.0",
    date: "2024-01-15",
    type: "feature",
    title: "Strategy Templates",
    description: "50+ pre-built strategy templates for common setups.",
  },
  {
    version: "2.2.0",
    date: "2024-01-01",
    type: "improvement",
    title: "Faster Generation",
    description: "40% faster code generation with improved AI model.",
  },
  {
    version: "2.1.0",
    date: "2023-12-15",
    type: "feature",
    title: "Version Control",
    description: "Save and compare different versions of your strategies.",
  },
  {
    version: "2.0.0",
    date: "2023-12-01",
    type: "milestone",
    title: "Series A Launch",
    description: "$8M Series A funding and complete platform redesign.",
  },
];

export const competitors = [
  { name: "ChatGPT", type: "General AI", tradingFocus: false, accuracy: "Low" },
  { name: "GitHub Copilot", type: "Code Assistant", tradingFocus: false, accuracy: "Medium" },
  { name: "TradingView Pine", type: "Platform", tradingFocus: true, accuracy: "N/A" },
  { name: "MetaEditor", type: "Platform", tradingFocus: true, accuracy: "N/A" },
  { name: "AlgoMock", type: "Trading AI", tradingFocus: true, accuracy: "High" },
];

export const marketData = {
  tam: 12000000000, // $12B algorithmic trading software market
  growth: 12.5, // 12.5% CAGR
  addressable: 2500000000, // $2.5B serviceable addressable
  obtainable: 500000000, // $500M serviceable obtainable
};
