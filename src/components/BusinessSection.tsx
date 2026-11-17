import React from 'react';
import { BUSINESS_SWOT, FINANCIAL_METRICS } from '../data/cafeData';
import { 
  TrendingUp, 
  Target, 
  Tag, 
  Award, 
  CheckCircle2, 
  AlertTriangle, 
  ShieldAlert, 
  Lightbulb,
  Users
} from 'lucide-react';

export const BusinessSection: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      {/* Header */}
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#486350] bg-[#eaf1ec] px-3 py-1 rounded-full border border-[#d5e2d7] mb-3">
          <TrendingUp className="w-4 h-4 text-[#5f7d69]" />
          <span>School Entrepreneurship & Feasibility Model</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-stone-800 tracking-tight">
          Business Plan & Promotional Strategy
        </h1>
        <p className="text-base text-stone-600 mt-3 leading-relaxed">
          Developed by Nadia Putri (Grade 9A). To demonstrate real-world economic feasibility to our teachers, 
          we modeled customer segmentation, calculated break-even daily volume, and formulated student campaigns.
        </p>
      </div>

      {/* Target Market Segmentation (Pastel Cards) */}
      <section className="bg-white rounded-3xl border border-stone-200/90 p-6 sm:p-8 space-y-6 shadow-xs">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs font-semibold text-[#54735b] uppercase tracking-wider mb-1">
              Market Analysis
            </div>
            <h2 className="text-xl font-bold text-stone-800">
              Target Audience Segmentation
            </h2>
          </div>
          <span className="text-xs text-stone-500 font-medium">Based on 120 Student Responses</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-[#edf3ee] border border-[#d8e4da] space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold text-[#35523c] uppercase">Primary Group</span>
              <span className="text-xl font-bold font-mono text-[#3e6147]">65%</span>
            </div>
            <h3 className="text-base font-bold text-stone-800">Junior High Students</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Need affordable energy during 20-minute recesses and quiet, plug-friendly study seating after school hours for collaborative group projects.
            </p>
            <div className="pt-2 text-[11px] text-[#42614b] font-medium">
              Average Budget: Rp 12.000 – Rp 20.000 / visit
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#f2ede4] border border-[#e3d7c5] space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold text-[#694f31] uppercase">Secondary Group</span>
              <span className="text-xl font-bold font-mono text-[#785936]">25%</span>
            </div>
            <h3 className="text-base font-bold text-stone-800">Teachers & School Staff</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Need rapid grab-and-go morning espresso and tea without waiting in student canteen lines before the 7:15 AM first bell rings.
            </p>
            <div className="pt-2 text-[11px] text-[#735330] font-medium">
              Average Budget: Rp 18.000 – Rp 25.000 / visit
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#eef1f5] border border-[#d6dfec] space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold text-[#445b7a] uppercase">Extracurricular</span>
              <span className="text-xl font-bold font-mono text-[#4b678c]">10%</span>
            </div>
            <h3 className="text-base font-bold text-stone-800">Parents & Weekend Clubs</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Parents attending parent-teacher conferences, weekend sports tournaments, and student robotics or coding bootcamps.
            </p>
            <div className="pt-2 text-[11px] text-[#4c678a] font-medium">
              Average Budget: Rp 25.000 – Rp 35.000 / visit
            </div>
          </div>
        </div>
      </section>

      {/* SWOT Analysis Matrix in Soft Pastel Tones */}
      <section className="space-y-6">
        <div>
          <div className="text-xs font-semibold text-[#54735b] uppercase tracking-wider mb-1">
            Strategic Evaluation
          </div>
          <h2 className="text-xl font-bold text-stone-800">
            School Entrepreneurship SWOT Matrix
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-1">
            Analyzing internal advantages and external risks to assure sustainable operation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Strengths */}
          <div className="bg-white p-6 rounded-3xl border border-stone-200/90 shadow-xs space-y-3">
            <div className="flex items-center gap-2 text-[#46664f] font-bold text-sm">
              <CheckCircle2 className="w-4 h-4" />
              <span>Strengths (Internal)</span>
            </div>
            <ul className="space-y-2 text-xs text-stone-600">
              {BUSINESS_SWOT.strengths.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[#5f8769] font-bold">·</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Weaknesses */}
          <div className="bg-white p-6 rounded-3xl border border-stone-200/90 shadow-xs space-y-3">
            <div className="flex items-center gap-2 text-[#966b3b] font-bold text-sm">
              <AlertTriangle className="w-4 h-4" />
              <span>Weaknesses (Internal)</span>
            </div>
            <ul className="space-y-2 text-xs text-stone-600">
              {BUSINESS_SWOT.weaknesses.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[#966b3b] font-bold">·</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Opportunities */}
          <div className="bg-white p-6 rounded-3xl border border-stone-200/90 shadow-xs space-y-3">
            <div className="flex items-center gap-2 text-[#476082] font-bold text-sm">
              <Lightbulb className="w-4 h-4" />
              <span>Opportunities (External)</span>
            </div>
            <ul className="space-y-2 text-xs text-stone-600">
              {BUSINESS_SWOT.opportunities.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[#56759e] font-bold">·</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Threats */}
          <div className="bg-white p-6 rounded-3xl border border-stone-200/90 shadow-xs space-y-3">
            <div className="flex items-center gap-2 text-[#995349] font-bold text-sm">
              <ShieldAlert className="w-4 h-4" />
              <span>Threats (External)</span>
            </div>
            <ul className="space-y-2 text-xs text-stone-600">
              {BUSINESS_SWOT.threats.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[#995349] font-bold">·</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Financial Feasibility & Payback Model in Soft Oatmeal Box */}
      <section className="bg-[#f5efe6]/80 rounded-3xl p-6 sm:p-8 space-y-6 border border-[#e8ded0] shadow-xs">
        <div>
          <div className="text-xs font-semibold text-[#665541] uppercase tracking-wider mb-1">
            Financial Modeling
          </div>
          <h2 className="text-xl font-bold text-stone-800">
            Budget Projections & Break-Even Analysis
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-1">
            Modeled using basic economic unit margin formulas studied in Grade 9 Social Studies (IPS).
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          <div className="bg-white p-4 rounded-2xl border border-stone-200/70">
            <div className="text-[11px] text-stone-500">Prototype CAPEX</div>
            <div className="text-base font-bold font-mono text-[#4b6d58] mt-1">
              Rp 45.0M
            </div>
            <div className="text-[10px] text-stone-400 mt-0.5">Sensors + Robotic Arm</div>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-stone-200/70">
            <div className="text-[11px] text-stone-500">Monthly OPEX</div>
            <div className="text-base font-bold font-mono text-stone-800 mt-1">
              Rp 7.2M
            </div>
            <div className="text-[10px] text-stone-400 mt-0.5">Beans, Oat Milk, Maint.</div>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-stone-200/70">
            <div className="text-[11px] text-stone-500">Avg. Drink Price</div>
            <div className="text-base font-bold font-mono text-stone-800 mt-1">
              Rp 15.000
            </div>
            <div className="text-[10px] text-stone-400 mt-0.5">Student Price Point</div>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-stone-200/70">
            <div className="text-[11px] text-stone-500">Gross Margin</div>
            <div className="text-base font-bold font-mono text-[#526f96] mt-1">
              62%
            </div>
            <div className="text-[10px] text-stone-400 mt-0.5">Cost of Goods: 38%</div>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-stone-200/70">
            <div className="text-[11px] text-stone-500">Break-Even Sales</div>
            <div className="text-base font-bold font-mono text-[#916d3e] mt-1">
              28 cups/day
            </div>
            <div className="text-[10px] text-stone-400 mt-0.5">Easily met by 120 students</div>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-stone-200/70">
            <div className="text-[11px] text-stone-500">Payback Period</div>
            <div className="text-base font-bold font-mono text-[#4b6d58] mt-1">
              9.5 Months
            </div>
            <div className="text-[10px] text-stone-400 mt-0.5">Within 1 Academic Year</div>
          </div>
        </div>
      </section>

      {/* Promotional Campaigns (Student-Specific) */}
      <section className="space-y-6">
        <div>
          <div className="text-xs font-semibold text-[#54735b] uppercase tracking-wider mb-1">
            Marketing Initiatives
          </div>
          <h2 className="text-xl font-bold text-stone-800">
            Student-Centered Promotional Campaigns
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-1">
            Four tailored marketing campaigns designed specifically for school culture and academic motivation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-3xl border border-stone-200/90 shadow-xs space-y-2">
            <div className="w-10 h-10 rounded-2xl bg-[#faf3e8] text-[#8c6734] flex items-center justify-center font-bold">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-stone-800">1. Straight-A Report Card Promo</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Show your midterm report card with an average score of 90+ to receive an automatic 25% discount on all Brain Booster beverages.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-stone-200/90 shadow-xs space-y-2">
            <div className="w-10 h-10 rounded-2xl bg-[#edf3ee] text-[#486b51] flex items-center justify-center font-bold">
              <Tag className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-stone-800">2. Bring Your Own Tumbler (BYOT)</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Bring any reusable tumbler to save Rp 5.000 instantly and earn 1 digital green point toward free snack rewards.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-stone-200/90 shadow-xs space-y-2">
            <div className="w-10 h-10 rounded-2xl bg-[#eef1f5] text-[#4c6382] flex items-center justify-center font-bold">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-stone-800">3. Study Squad Group Pack</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Groups of 4 students ordering together at a smart table receive a complimentary plate of warm oatmeal Coding Cookies.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-stone-200/90 shadow-xs space-y-2">
            <div className="w-10 h-10 rounded-2xl bg-[#f5efe6] text-[#70583b] flex items-center justify-center font-bold">
              <Target className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-stone-800">4. Teacher Express Pass</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Faculty members tap their teacher badge to bypass the student queue between 6:45 AM and 7:15 AM for instant morning espresso.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
