'use client';

import { useState } from 'react';
import {
  TrendingUp,
  DollarSign,
  Sparkles,
  ArrowUpRight,
  ArrowDownRight,
  Download,
  Plus,
  BarChart3,
  Globe,
  SlidersHorizontal,
  Layers,
  Bed,
  CheckCircle2,
  Tag,
  Calendar,
  Percent,
  X,
} from 'lucide-react';
import { KpiCard } from '@/components/ui/kpi-card';
import { SectionCard } from '@/components/ui/section-card';

interface RatePlanItem {
  id: string;
  category: string;
  roomsCount: number;
  baseRate: string;
  dynamicRate: string;
  occupancy: string;
  status: 'Surging' | 'Optimal' | 'Discounted';
}

const RATE_PLANS: RatePlanItem[] = [
  { id: 'RP-01', category: 'Deluxe Ocean View', roomsCount: 32, baseRate: 'Rp 1,450,000', dynamicRate: 'Rp 1,620,000', occupancy: '84%', status: 'Surging' },
  { id: 'RP-02', category: 'Ocean View Suite', roomsCount: 18, baseRate: 'Rp 2,400,000', dynamicRate: 'Rp 2,650,000', occupancy: '92%', status: 'Surging' },
  { id: 'RP-03', category: 'Standard Twin', roomsCount: 40, baseRate: 'Rp 850,000', dynamicRate: 'Rp 850,000', occupancy: '70%', status: 'Optimal' },
  { id: 'RP-04', category: 'Beach Villa', roomsCount: 10, baseRate: 'Rp 3,800,000', dynamicRate: 'Rp 4,100,000', occupancy: '95%', status: 'Surging' },
  { id: 'RP-05', category: 'Executive Suite', roomsCount: 20, baseRate: 'Rp 1,900,000', dynamicRate: 'Rp 1,750,000', occupancy: '48%', status: 'Discounted' },
];

export default function RevenuePage() {
  const [activeTab, setActiveTab] = useState<'ai' | 'trends' | 'matrix'>('ai');

  const [isExporting, setIsExporting] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const handleExportReport = () => {
    setIsExporting(true);
    const csvRows = [
      ['HOTELHUB REVENUE & YIELD MANAGEMENT REPORT'],
      ['Generated Date', new Date().toLocaleDateString('en-US', { dateStyle: 'full' })],
      [''],
      ['RATE PLAN CATEGORY', 'ROOMS', 'BASE RATE', 'DYNAMIC RATE', 'OCCUPANCY', 'YIELD STATUS'],
      ...RATE_PLANS.map((r) => [
        `"${r.category}"`,
        r.roomsCount,
        `"${r.baseRate}"`,
        `"${r.dynamicRate}"`,
        `"${r.occupancy}"`,
        r.status
      ])
    ];

    const csvContent = 'data:text/csv;charset=utf-8,' + csvRows.map((e) => e.join(',')).join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'HotelHub-Revenue-Yield-Report.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      setIsExporting(false);
      setToastMessage('✓ Revenue Yield Report exported successfully.');
      setTimeout(() => setToastMessage(''), 4000);
    }, 400);
  };

  const [showCreatePromoModal, setShowCreatePromoModal] = useState(false);
  const [promoName, setPromoName] = useState('');
  const [promoDiscount, setPromoDiscount] = useState('15');
  const [promoChannel, setPromoChannel] = useState('Direct Web Booking');

  const handleCreatePromoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!promoName.trim()) return;
    setShowCreatePromoModal(false);
    setPromoName('');
    setToastMessage(`Promotion "${promoName}" (${promoDiscount}% OFF) created & activated!`);
    setTimeout(() => setToastMessage(''), 3500);
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6 max-w-[1600px] mx-auto min-h-screen relative">
          
      {toastMessage && (
        <div className="fixed top-5 right-5 z-50 bg-emerald-600 text-white px-5 py-3 rounded-xl shadow-2xl text-xs font-bold flex items-center gap-2.5 animate-in fade-in duration-300">
          <CheckCircle2 className="w-4 h-4" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Header Block */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-semibold text-[var(--text-tertiary)] uppercase tracking-wider block mb-1">
            Yield Management & Revenue Operations
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-display)] tracking-tight">
            Revenue & Yield Management
          </h1>
          <p className="text-xs text-[var(--text-tertiary)] mt-1 font-medium">
            AI-driven rate recommendations & yield optimization.
          </p>
        </div>

        {/* Top Action Buttons */}
        <div className="flex flex-wrap sm:flex-nowrap items-center gap-2.5 sm:gap-3 w-full sm:w-auto shrink-0">
          <button
            type="button"
            onClick={handleExportReport}
            disabled={isExporting}
            className="btn-secondary w-full sm:w-auto flex-1 sm:flex-initial"
          >
            <Download className="w-3.5 h-3.5 text-[var(--text-tertiary)]" />
            <span>Export report</span>
          </button>

          <button
            type="button"
            onClick={() => setShowCreatePromoModal(true)}
            className="btn-primary w-full sm:w-auto flex-1 sm:flex-initial"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Create promotion</span>
          </button>
        </div>
      </div>

          {/* 4 Top KPI Metric Cards (Reusable Component Standard) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-3.5">
            <KpiCard 
              label="TOTAL REVENUE MTD"
              value="Rp 184.2M"
              icon={TrendingUp}
              iconBgColor="bg-emerald-500/10"
              iconColor="text-[#19B26B]"
              trendText="+6.1% vs target"
              subtext="Target: Rp 173.5M MTD"
            />
            <KpiCard 
              label="ADR (AVG DAILY RATE)"
              value="Rp 1.12M"
              icon={DollarSign}
              iconBgColor="bg-[#387FF7]/10"
              iconColor="text-[#387FF7] dark:text-[#6099F9]"
              trendText="+4.2% MoM"
              subtext="Average room rate across categories"
            />
            <KpiCard 
              label="REVPAR"
              value="Rp 878K"
              icon={BarChart3}
              iconBgColor="bg-[#F79009]/10"
              iconColor="text-[#F79009]"
              trendText="78.4% occupancy rate"
              subtext="Revenue per available room"
            />
            <KpiCard 
              label="FORWARD PACING"
              value="Rp 92.4M"
              icon={Calendar}
              iconBgColor="bg-rose-500/10"
              iconColor="text-[#FF385C]"
              trendText="Next 30 days pacing"
              subtext="On-the-books advance revenue"
            />
          </div>

          {/* View Mode Switcher */}
          <div className="p-1 bg-[var(--bg-card)] border border-black/[0.06] dark:border-white/[0.08] rounded-xl flex items-center gap-1 w-full md:w-auto shrink-0 border-b border-black/[0.06] dark:border-white/[0.08]">
            <button
              type="button"
              onClick={() => setActiveTab('ai')}
              className={`h-9 px-3 sm:px-4 text-xs font-semibold whitespace-nowrap flex-1 md:flex-initial justify-center transition-all cursor-pointer flex items-center gap-1.5 rounded-lg ${
                activeTab === 'ai'
                  ? 'bg-[#FF385C] text-white shadow-xs'
                  : 'text-[var(--text-tertiary)] hover:text-[var(--text-primary)] hover:bg-black/[0.03] dark:hover:bg-white/[0.05]'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 shrink-0" />
              <span className="sm:hidden">AI Suggestions</span>
              <span className="hidden sm:inline">AI Yield Suggestions</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('trends')}
              className={`h-9 px-3 sm:px-4 text-xs font-semibold whitespace-nowrap flex-1 md:flex-initial justify-center transition-all cursor-pointer flex items-center gap-1.5 rounded-lg ${
                activeTab === 'trends'
                  ? 'bg-[#FF385C] text-white shadow-xs'
                  : 'text-[var(--text-tertiary)] hover:text-[var(--text-primary)] hover:bg-black/[0.03] dark:hover:bg-white/[0.05]'
              }`}
            >
              <BarChart3 className="w-3.5 h-3.5 shrink-0" />
              <span className="sm:hidden">Revenue Trends</span>
              <span className="hidden sm:inline">Revenue Trends & Channel Mix</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('matrix')}
              className={`h-9 px-3 sm:px-4 text-xs font-semibold whitespace-nowrap flex-1 md:flex-initial justify-center transition-all cursor-pointer flex items-center gap-1.5 rounded-lg ${
                activeTab === 'matrix'
                  ? 'bg-[#FF385C] text-white shadow-xs'
                  : 'text-[var(--text-tertiary)] hover:text-[var(--text-primary)] hover:bg-black/[0.03] dark:hover:bg-white/[0.05]'
              }`}
            >
              <Tag className="w-3.5 h-3.5 shrink-0" />
              <span className="sm:hidden">Rate Matrix</span>
              <span className="hidden sm:inline">Room Rate Matrix</span>
            </button>
          </div>

          {/* VIEW TAB 1: AI YIELD SUGGESTIONS (User's Screenshot Grid) */}
          {activeTab === 'ai' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* AI Recommendation Card 1 (High Demand) */}
              <div 
                style={{ borderRadius: '24px' }}
                className="p-6 sm:p-8 bg-[var(--bg-card)] border border-black/[0.04] dark:border-white/[0.08] shadow-[0_4px_16px_rgba(0,0,0,0.02)] space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span 
                      style={{ borderRadius: '9999px' }}
                      className="px-3 py-1 text-xs font-bold bg-rose-500/10 text-[#FF385C] flex items-center gap-1.5"
                    >
                      <Sparkles className="w-3.5 h-3.5" /> High Demand Alert
                    </span>
                    <span className="text-xs text-[var(--text-tertiary)] font-medium">Aug 15 - Aug 18</span>
                  </div>
                  <h3 className="text-base font-bold text-[var(--text-display)] tracking-tight">
                    Increase Deluxe Room Rate by +12%
                  </h3>
                  <p className="text-xs text-[var(--text-tertiary)] leading-relaxed">
                    Competitor occupancy in Bali Nusa Dua area has reached 88%. Elevating base rate from Rp 1,450,000 to Rp 1,620,000 will capture an estimated +Rp 34,500,000 in additional revenue.
                  </p>
                </div>

                <div className="pt-4 border-t border-black/[0.04] dark:border-white/[0.06] flex items-center justify-between">
                  <div className="text-xs font-semibold text-[#19B26B] flex items-center gap-1">
                    <ArrowUpRight className="w-4 h-4" /> Estimated Impact: +Rp 34.5M
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setToastMessage('✓ Deluxe Room dynamic rate increased by +12%!');
                      setTimeout(() => setToastMessage(''), 4500);
                    }}
                    style={{ borderRadius: '10px' }}
                    className="h-9 px-4 bg-[#FF385C] hover:bg-[#E00B41] text-white text-xs font-bold transition-all shadow-xs cursor-pointer"
                  >
                    Accept Suggestion
                  </button>
                </div>
              </div>

              {/* AI Recommendation Card 2 (Slow Window) */}
              <div 
                style={{ borderRadius: '24px' }}
                className="p-6 sm:p-8 bg-[var(--bg-card)] border border-black/[0.04] dark:border-white/[0.08] shadow-[0_4px_16px_rgba(0,0,0,0.02)] space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span 
                      style={{ borderRadius: '9999px' }}
                      className="px-3 py-1 text-xs font-bold bg-sky-500/10 text-sky-600 dark:text-sky-400 flex items-center gap-1.5"
                    >
                      <TrendingUp className="w-3.5 h-3.5" /> Slow Window Alert
                    </span>
                    <span className="text-xs text-[var(--text-tertiary)] font-medium">Aug 22 - Aug 25</span>
                  </div>
                  <h3 className="text-base font-bold text-[var(--text-display)] tracking-tight">
                    Launch Flash Promotion Package
                  </h3>
                  <p className="text-xs text-[var(--text-tertiary)] leading-relaxed">
                    Pacing shows 45% occupancy for midweek next week. Launching a 15% discount coupon for direct bookings can increase pickup by +22 rooms.
                  </p>
                </div>

                <div className="pt-4 border-t border-black/[0.04] dark:border-white/[0.06] flex items-center justify-between">
                  <div className="text-xs font-semibold text-sky-600 dark:text-sky-400 flex items-center gap-1">
                    <ArrowUpRight className="w-4 h-4" /> Expected Pickup: +22 Rooms
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setToastMessage('✓ Flash Promotion campaign created & published.');
                      setTimeout(() => setToastMessage(''), 4500);
                    }}
                    style={{ borderRadius: '10px' }}
                    className="h-9 px-4 bg-[#387FF7] hover:bg-[#2F6ED6] text-white text-xs font-bold transition-all shadow-xs cursor-pointer"
                  >
                    Create Campaign
                  </button>
                </div>
              </div>

              {/* AI Recommendation Card 3 (Seasonal Peak) */}
              <div 
                style={{ borderRadius: '24px' }}
                className="p-6 sm:p-8 bg-[var(--bg-card)] border border-black/[0.04] dark:border-white/[0.08] shadow-[0_4px_16px_rgba(0,0,0,0.02)] space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span 
                      style={{ borderRadius: '9999px' }}
                      className="px-3 py-1 text-xs font-bold bg-emerald-500/10 text-[#19B26B] flex items-center gap-1.5"
                    >
                      <Sparkles className="w-3.5 h-3.5" /> Long Weekend Surge
                    </span>
                    <span className="text-xs text-[var(--text-tertiary)] font-medium">Sep 01 - Sep 04</span>
                  </div>
                  <h3 className="text-base font-bold text-[var(--text-display)] tracking-tight">
                    Adjust Suite Base Rate for Long Weekend
                  </h3>
                  <p className="text-xs text-[var(--text-tertiary)] leading-relaxed">
                    Holiday search traffic up by +38%. Elevating Suite base rate to Rp 2,850,000 will capture premium yields with minimal drop in conversion.
                  </p>
                </div>

                <div className="pt-4 border-t border-black/[0.04] dark:border-white/[0.06] flex items-center justify-between">
                  <div className="text-xs font-semibold text-[#19B26B] flex items-center gap-1">
                    <ArrowUpRight className="w-4 h-4" /> Estimated Impact: +Rp 18.2M
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setToastMessage('✓ Suite base rate updated to Rp 2,850,000 for holiday weekend.');
                      setTimeout(() => setToastMessage(''), 4500);
                    }}
                    style={{ borderRadius: '10px' }}
                    className="h-9 px-4 bg-[#19B26B] hover:bg-[#15965A] text-white text-xs font-bold transition-all shadow-xs cursor-pointer"
                  >
                    Apply Adjustment
                  </button>
                </div>
              </div>

            </div>
          )}

          {/* VIEW TAB 2: REVENUE TRENDS & CHANNEL MIX */}
          {activeTab === 'trends' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              {/* Revenue Bar Chart (2 Cols) */}
              <SectionCard
                className="lg:col-span-2 flex flex-col justify-between"
                title="Monthly Revenue Pacing"
                subtitle="2026 vs 2025 revenue performance (millions IDR)"
                headerAction={
                  <div className="flex items-center gap-4 text-xs font-semibold">
                    <div className="flex items-center gap-1.5">
                      <span style={{ borderRadius: '50%' }} className="w-2.5 h-2.5 bg-[#19B26B] shrink-0 inline-block" />
                      <span className="text-[var(--text-primary)]">2026</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[var(--text-tertiary)]">
                      <span style={{ borderRadius: '50%' }} className="w-2.5 h-2.5 bg-gray-400 dark:bg-gray-600 shrink-0 inline-block" />
                      <span>2025</span>
                    </div>
                  </div>
                }
              >
                {/* Chart Container */}
                <div className="py-2">
                  <div className="flex items-end justify-between gap-3 sm:gap-6 h-56 px-2 pb-2">
                    {[
                      { month: 'Jan', v2026: 60, v2025: 45 },
                      { month: 'Feb', v2026: 75, v2025: 55 },
                      { month: 'Mar', v2026: 82, v2025: 60 },
                      { month: 'Apr', v2026: 88, v2025: 70 },
                      { month: 'May', v2026: 95, v2025: 78 },
                      { month: 'Jun', v2026: 90, v2025: 80 },
                      { month: 'Jul', v2026: 110, v2025: 85 },
                    ].map((item, idx) => (
                      <div key={idx} className="flex-1 flex flex-col items-center gap-3 h-full justify-end group">
                        <div className="w-full max-w-[56px] flex items-end justify-center gap-1.5 sm:gap-2 h-full">
                          <div
                            style={{ height: `${item.v2025}%`, borderTopLeftRadius: '6px', borderTopRightRadius: '6px' }}
                            className="w-3 sm:w-4 bg-gray-300 dark:bg-gray-700 transition-all group-hover:opacity-80"
                            title={`2025: ${item.v2025}M`}
                          />
                          <div
                            style={{ height: `${item.v2026}%`, borderTopLeftRadius: '6px', borderTopRightRadius: '6px' }}
                            className="w-3 sm:w-4 bg-[#19B26B] transition-all group-hover:opacity-80 shadow-xs"
                            title={`2026: ${item.v2026}M`}
                          />
                        </div>
                        <span className="text-xs font-semibold text-[var(--text-tertiary)] group-hover:text-[var(--text-primary)] transition-colors">
                          {item.month}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </SectionCard>

              {/* Revenue Sources Progress Bars (1 Col) */}
              <SectionCard
                title="Revenue Channel Share"
                subtitle="Share of bookings this month"
              >

                <div className="space-y-5">
                  <div>
                    <div className="flex justify-between text-xs font-semibold mb-2">
                      <span className="text-[var(--text-primary)]">Direct</span>
                      <span className="text-[var(--text-primary)] font-bold">42%</span>
                    </div>
                    <div style={{ borderRadius: '9999px' }} className="w-full h-2.5 bg-black/[0.04] dark:bg-white/[0.06] overflow-hidden">
                      <div style={{ width: '42%', borderRadius: '9999px' }} className="h-full bg-[#FF385C]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-semibold mb-2">
                      <span className="text-[var(--text-primary)]">Booking.com</span>
                      <span className="text-[var(--text-primary)] font-bold">28%</span>
                    </div>
                    <div style={{ borderRadius: '9999px' }} className="w-full h-2.5 bg-black/[0.04] dark:bg-white/[0.06] overflow-hidden">
                      <div style={{ width: '28%', borderRadius: '9999px' }} className="h-full bg-[#19B26B]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-semibold mb-2">
                      <span className="text-[var(--text-primary)]">Expedia</span>
                      <span className="text-[var(--text-primary)] font-bold">14%</span>
                    </div>
                    <div style={{ borderRadius: '9999px' }} className="w-full h-2.5 bg-black/[0.04] dark:bg-white/[0.06] overflow-hidden">
                      <div style={{ width: '14%', borderRadius: '9999px' }} className="h-full bg-[#DC6903]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-semibold mb-2">
                      <span className="text-[var(--text-primary)]">Corporate</span>
                      <span className="text-[var(--text-primary)] font-bold">10%</span>
                    </div>
                    <div style={{ borderRadius: '9999px' }} className="w-full h-2.5 bg-black/[0.04] dark:bg-white/[0.06] overflow-hidden">
                      <div style={{ width: '10%', borderRadius: '9999px' }} className="h-full bg-[#387FF7]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-semibold mb-2">
                      <span className="text-[var(--text-primary)]">Walk-in</span>
                      <span className="text-[var(--text-primary)] font-bold">6%</span>
                    </div>
                    <div style={{ borderRadius: '9999px' }} className="w-full h-2.5 bg-black/[0.04] dark:bg-white/[0.06] overflow-hidden">
                      <div style={{ width: '6%', borderRadius: '9999px' }} className="h-full bg-[#9E35A7]" />
                    </div>
                  </div>
                </div>
              </SectionCard>

            </div>
          )}

          {/* VIEW TAB 3: ROOM RATE MATRIX TABLE */}
          {activeTab === 'matrix' && (
            <SectionCard
              title="Room Category Rate Matrix"
              subtitle="Manage base rates and AI dynamic yield pricing"
            >
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-black/[0.06] dark:border-white/[0.08] text-[var(--text-tertiary)] font-semibold uppercase tracking-wider text-[10px]">
                      <th className="py-3 px-4">Plan Ref</th>
                      <th className="py-3 px-4">Category</th>
                      <th className="py-3 px-4">Inventory</th>
                      <th className="py-3 px-4">Base Rate</th>
                      <th className="py-3 px-4">Dynamic Rate</th>
                      <th className="py-3 px-4">Occupancy</th>
                      <th className="py-3 px-4">Yield Status</th>
                      <th className="py-3 px-4 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-black/[0.04] dark:divide-white/[0.06]">
                    {RATE_PLANS.map((plan) => (
                      <tr key={plan.id} className="hover:bg-black/[0.01] dark:hover:bg-white/[0.01] transition-colors">
                        <td className="py-3.5 px-4 font-mono font-bold text-[var(--text-tertiary)]">{plan.id}</td>
                        <td className="py-3.5 px-4 font-bold text-[var(--text-display)]">{plan.category}</td>
                        <td className="py-3.5 px-4 font-semibold text-[var(--text-primary)]">{plan.roomsCount} rooms</td>
                        <td className="py-3.5 px-4 text-[var(--text-tertiary)] font-medium line-through">{plan.baseRate}</td>
                        <td className="py-3.5 px-4 font-extrabold text-[#FF385C] text-sm">{plan.dynamicRate}</td>
                        <td className="py-3.5 px-4 font-semibold text-[var(--text-primary)]">{plan.occupancy}</td>
                        <td className="py-3.5 px-4">
                          <span
                            style={{ borderRadius: '9999px' }}
                            className={`px-3 py-1 text-[11px] font-bold ${
                              plan.status === 'Surging'
                                ? 'bg-[#FF385C]/10 text-[#FF385C]'
                                : plan.status === 'Optimal'
                                ? 'bg-[#19B26B]/10 text-[#19B26B]'
                                : 'bg-[#387FF7]/10 text-[#387FF7]'
                            }`}
                          >
                            {plan.status}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 text-right">
                          <button
                            type="button"
                            onClick={() => {
                              setToastMessage(`✓ Rate settings updated for ${plan.category}`);
                              setTimeout(() => setToastMessage(''), 4500);
                            }}
                            style={{ borderRadius: '10px' }}
                            className="h-8 px-3 bg-[var(--bg-left-panel)] border border-black/[0.08] dark:border-white/[0.12] text-xs font-semibold text-[var(--text-primary)] hover:bg-[#FF385C] hover:text-white transition-all cursor-pointer"
                          >
                            Edit rate
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </SectionCard>
          )}

      {/* Create Promotion Modal */}
      {showCreatePromoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4">
          <form
            onSubmit={handleCreatePromoSubmit}
            style={{ borderRadius: '24px' }}
            className="w-full max-w-md bg-[var(--bg-card)] border border-black/[0.08] dark:border-white/[0.12] p-6 shadow-2xl space-y-4 animate-in fade-in zoom-in-95 duration-200 relative"
          >
            <button
              type="button"
              onClick={() => setShowCreatePromoModal(false)}
              style={{ borderRadius: '50%' }}
              className="w-8 h-8 flex items-center justify-center bg-[var(--bg-left-panel)] text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors absolute top-6 right-6 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <h3 className="text-base font-bold text-[var(--text-display)] flex items-center gap-2">
              <Plus className="w-4.5 h-4.5 text-[#FF385C]" />
              Create Yield Promotion
            </h3>

            <div className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-[var(--text-primary)] mb-1">
                  Promotion Campaign Name *
                </label>
                <input
                  type="text"
                  required
                  value={promoName}
                  onChange={(e) => setPromoName(e.target.value)}
                  placeholder="e.g. Flash Midweek Special"
                  style={{ borderRadius: '10px' }}
                  className="w-full px-3.5 py-2 text-xs bg-[var(--bg-card)] border border-black/[0.08] dark:border-white/[0.12] text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[#FF385C]/40"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[var(--text-primary)] mb-1">
                    Discount Percentage (%)
                  </label>
                  <input
                    type="number"
                    value={promoDiscount}
                    onChange={(e) => setPromoDiscount(e.target.value)}
                    placeholder="15"
                    style={{ borderRadius: '10px' }}
                    className="w-full px-3.5 py-2 text-xs bg-[var(--bg-card)] border border-black/[0.08] dark:border-white/[0.12] text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[#FF385C]/40"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[var(--text-primary)] mb-1">
                    Target Booking Channel
                  </label>
                  <select
                    value={promoChannel}
                    onChange={(e) => setPromoChannel(e.target.value)}
                    style={{ borderRadius: '10px' }}
                    className="w-full px-3.5 py-2 text-xs bg-[var(--bg-card)] border border-black/[0.08] dark:border-white/[0.12] text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[#FF385C]/40"
                  >
                    <option value="Direct Web Booking">Direct Web Booking</option>
                    <option value="Booking.com OTA">Booking.com OTA</option>
                    <option value="Email Newsletter VIP">Email Newsletter VIP</option>
                    <option value="Agoda Member Perk">Agoda Member Perk</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-3 border-t border-black/[0.06] dark:border-white/[0.08]">
              <button
                type="button"
                onClick={() => setShowCreatePromoModal(false)}
                className="btn-secondary"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn-primary"
              >
                Activate Promotion
              </button>
            </div>
          </form>
        </div>
      )}

    </div>
  );
}
