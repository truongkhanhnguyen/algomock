import { Navbar } from "@/components/marketing/Navbar";
import { Hero } from "@/components/marketing/Hero";
import { AnalyticsDashboard } from "@/components/marketing/AnalyticsDashboard";
import { Features } from "@/components/marketing/Features";
import { HowItWorks } from "@/components/marketing/HowItWorks";
import { Comparison } from "@/components/marketing/Comparison";
import { Testimonials } from "@/components/marketing/Testimonials";
import { Pricing } from "@/components/marketing/Pricing";
import { FAQ } from "@/components/marketing/FAQ";
import { InvestorSection } from "@/components/marketing/InvestorSection";
import { Financials } from "@/components/marketing/Financials";
import { Team } from "@/components/marketing/Team";
import { Footer } from "@/components/marketing/Footer";

export default function MarketingPage() {
  return (
    <main className="min-h-screen bg-[#0b0f19]">
      <Navbar />
      <Hero />
      <AnalyticsDashboard />
      <Features />
      <HowItWorks />
      <Comparison />
      <Testimonials />
      <Pricing />
      <FAQ />
      <InvestorSection />
      <Financials />
      <Team />
      <Footer />
    </main>
  );
}
