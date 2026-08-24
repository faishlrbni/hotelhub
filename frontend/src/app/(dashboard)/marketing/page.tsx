'use client';

import { useState } from 'react';
import { 
  Megaphone, 
  Tag, 
  TrendingUp, 
  Percent, 
  DollarSign, 
  Search, 
  Filter, 
  Plus, 
  ChevronRight, 
  X, 
  Users, 
  Target, 
  BarChart3, 
  Gift, 
  ExternalLink, 
  Sparkles, 
  CheckCircle2, 
  Clock,
  ArrowUpRight,
  Share2
} from 'lucide-react';
import { KpiCard } from '@/components/ui/kpi-card';
import { SectionCard } from '@/components/ui/section-card';

interface Campaign {
  id: string;
  name: string;
  code: string;
  channel: string;
  spend: string;
  revenue: string;
  roi: string;
  redemptions: number;
  startDate: string;
  endDate: string;
  status: 'Active' | 'Scheduled' | 'Completed' | 'Paused';
  targetAudience: string;
  discount: string;
}

interface Coupon {
  code: string;
  type: string;
  redemptions: number;
  discountVal: string;
  grossRev: string;
  netRev: string;
  status: 'Active' | 'Expired';
}

const mockCampaigns: Campaign[] = [
  {
    id: 'CMP-101',
    name: 'Summer Escapes 2026',
    code: 'SUMMER20',
    channel: 'Google Search Ads',
    spend: 'Rp 15,000,000',
    revenue: 'Rp 68,400,000',
    roi: '+356%',
    redemptions: 142,
    startDate: 'Jul 01, 2026',
    endDate: 'Aug 31, 2026',
    status: 'Active',
    targetAudience: 'Leisure Couples & Families (Domestic)',
    discount: '20% Off Room Rate'
  },
  {
    id: 'CMP-102',
    name: 'Direct Booking Perk - Free Breakfast',
    code: 'FREEBREAKFAST',
    channel: 'Website Pop-up',
    spend: 'Rp 4,200,000',
    revenue: 'Rp 38,100,000',
    roi: '+807%',
    redemptions: 98,
    startDate: 'Jun 15, 2026',
    endDate: 'Sep 30, 2026',
    status: 'Active',
    targetAudience: 'Direct Site Visitors',
    discount: 'Complimentary Buffet Breakfast'
  },
  {
    id: 'CMP-103',
    name: 'VIP Retreat Promo',
    code: 'VIPDIRECT',
    channel: 'Email Newsletter',
    spend: 'Rp 2,500,000',
    revenue: 'Rp 29,800,000',
    roi: '+1,092%',
    redemptions: 46,
    startDate: 'Jul 10, 2026',
    endDate: 'Aug 20, 2026',
    status: 'Active',
    targetAudience: 'Platinum & Gold Loyalty Guests',
    discount: '15% Off Suite + Spa Voucher'
  },
  {
    id: 'CMP-104',
    name: 'Autumn Early Bird Special',
    code: 'EARLYBIRD15',
    channel: 'Meta (Instagram & FB)',
    spend: 'Rp 8,000,000',
    revenue: 'Rp 24,200,000',
    roi: '+202%',
    redemptions: 74,
    startDate: 'Aug 01, 2026',
    endDate: 'Oct 15, 2026',
    status: 'Active',
    targetAudience: 'Millennial Travelers (Regional)',
    discount: '15% Advance Purchase'
  },
  {
    id: 'CMP-105',
    name: 'Weekend Getaway Influencer Promo',
    code: 'WEEKEND10',
    channel: 'Social Partners',
    spend: 'Rp 6,000,000',
    revenue: 'Rp 18,000,000',
    roi: '+200%',
    redemptions: 35,
    startDate: 'May 01, 2026',
    endDate: 'Jul 31, 2026',
    status: 'Completed',
    targetAudience: 'Lifestyle & Foodie Followers',
    discount: '10% Off Weekend Stays'
  },
  {
    id: 'CMP-106',
    name: 'End of Year Festive Early Access',
    code: 'FESTIVE2026',
    channel: 'Direct Mail & SMS',
    spend: 'Rp 5,000,000',
    revenue: 'Rp 6,000,000',
    roi: '+20%',
    redemptions: 17,
    startDate: 'Sep 01, 2026',
    endDate: 'Dec 31, 2026',
    status: 'Scheduled',
    targetAudience: 'Repeat Corporate & Event Bookers',
    discount: 'Early Bird Gala & Room Package'
  }
];

const mockCoupons: Coupon[] = [
  {
    code: 'SUMMER20',
    type: '20% Room Discount',
    redemptions: 142,
    discountVal: 'Rp 8,400,000',
    grossRev: 'Rp 42,000,000',
    netRev: 'Rp 33,600,000',
    status: 'Active'
  },
  {
    code: 'FREEBREAKFAST',
    type: 'Complimentary Meal',
    redemptions: 98,
    discountVal: 'Rp 2,900,000',
    grossRev: 'Rp 38,100,000',
    netRev: 'Rp 35,200,000',
    status: 'Active'
  },
  {
    code: 'VIPDIRECT',
    type: '15% Off Suite + Spa',
    redemptions: 46,
    discountVal: 'Rp 5,200,000',
    grossRev: 'Rp 34,600,000',
    netRev: 'Rp 29,400,000',
    status: 'Active'
  },
  {
    code: 'EARLYBIRD15',
    type: '15% Advance Purchase',
    redemptions: 74,
    discountVal: 'Rp 4,200,000',
    grossRev: 'Rp 28,000,000',
    netRev: 'Rp 23,800,000',
    status: 'Active'
  },
  {
    code: 'WEEKEND10',
    type: '10% Weekend Stay',
    redemptions: 52,
    discountVal: 'Rp 2,100,000',
    grossRev: 'Rp 21,000,000',
    netRev: 'Rp 18,900,000',
    status: 'Expired'
  }
];

import { useHotelStore } from '@/lib/store';

export default function MarketingPage() {
  const { campaigns, addCampaign, addCoupon } = useHotelStore() as any;
  const [activeTab, setActiveTab] = useState<'campaigns' | 'coupons' | 'channels' | 'sources'>('campaigns');
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [selectedCampaign, setSelectedCampaign] = useState<any | null>(null);
  const [showNewModal, setShowNewModal] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newType, setNewType] = useState('Google Search Ads');

  const filteredCampaigns = campaigns.filter((cmp: any) => {
    const matchesSearch = 
      cmp.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cmp.type.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'All' || cmp.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6 max-w-[1600px] mx-auto min-h-screen">
      
      {/* 1. Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-semibold text-[var(--text-tertiary)] uppercase tracking-wider block mb-1">
            Promotions & Attribution
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-display)] tracking-tight">
            Marketing
          </h1>
          <p className="text-xs text-[var(--text-tertiary)] mt-1 font-medium">
            Track campaign ROI, manage promo codes, and analyze booking channel conversions.
          </p>
        </div>

        <div className="flex flex-wrap sm:flex-nowrap items-center gap-2.5 sm:gap-3 w-full sm:w-auto shrink-0">
          <button
            type="button"
            className="btn-secondary w-full sm:w-auto flex-1 sm:flex-initial"
          >
            <BarChart3 className="w-3.5 h-3.5 text-[var(--text-tertiary)]" />
            <span>Export Report</span>
          </button>
          <button
            type="button"
            onClick={() => setShowNewModal(true)}
            className="btn-primary w-full sm:w-auto flex-1 sm:flex-initial"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>New Campaign</span>
          </button>
        </div>
      </div>

      {/* 2. Top Metric / KPI Cards (4 Grid - Reusable Component Standard) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-3.5">
        <KpiCard 
          label="CAMPAIGN REVENUE MTD"
          value="Rp 184.5M"
          icon={TrendingUp}
          iconBgColor="bg-emerald-500/10"
          iconColor="text-[#19B26B]"
          trendText="+22.4% vs last month"
          subtext="Attributed to active promotional offers"
        />
        <KpiCard 
          label="ACTIVE CAMPAIGNS"
          value="6 Active"
          icon={Megaphone}
          iconBgColor="bg-[#FF385C]/10"
          iconColor="text-[#FF385C]"
          trendText="2 scheduled for Q4 peak"
          subtext="Across 5 digital channels"
        />
        <KpiCard 
          label="COUPON REDEMPTION RATE"
          value="18.4%"
          icon={Tag}
          iconBgColor="bg-[#387FF7]/10"
          iconColor="text-[#387FF7]"
          trendText="+3.2% performance lift"
          subtext="412 total promo redemptions"
        />
        <KpiCard 
          label="AVERAGE CAMPAIGN ROI"
          value="340% ROI"
          icon={Percent}
          iconBgColor="bg-purple-500/10"
          iconColor="text-purple-600 dark:text-purple-400"
          trendText="4.4x return on ad spend"
          subtext="Highest return on Direct Web perks"
        />
      </div>

      {/* 3. Workspace Controls: Tab Switcher & Search Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        
        {/* Workspace View Tabs */}
        <div 
          style={{ borderRadius: '14px' }}
          className="p-1 bg-[var(--bg-card)] border border-black/[0.04] dark:border-white/[0.08] flex items-center gap-1 overflow-x-auto no-scrollbar max-w-full shrink-0"
        >
          <button
            type="button"
            onClick={() => setActiveTab('campaigns')}
            style={{ borderRadius: '10px' }}
            className={`px-3.5 sm:px-4 py-2 text-xs font-semibold whitespace-nowrap shrink-0 transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'campaigns'
                ? 'bg-[#FF385C] text-white shadow-xs'
                : 'text-[var(--text-tertiary)] hover:text-[var(--text-primary)] hover:bg-black/[0.03] dark:hover:bg-white/[0.05]'
            }`}
          >
            <Megaphone className="w-3.5 h-3.5 shrink-0" />
            <span>Active Campaigns & ROI</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('coupons')}
            style={{ borderRadius: '10px' }}
            className={`px-3.5 sm:px-4 py-2 text-xs font-semibold whitespace-nowrap shrink-0 transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'coupons'
                ? 'bg-[#FF385C] text-white shadow-xs'
                : 'text-[var(--text-tertiary)] hover:text-[var(--text-primary)] hover:bg-black/[0.03] dark:hover:bg-white/[0.05]'
            }`}
          >
            <Tag className="w-3.5 h-3.5 shrink-0" />
            <span>Promo Codes & Usage</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('channels')}
            style={{ borderRadius: '10px' }}
            className={`px-4 py-2 text-xs font-semibold transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'channels'
                ? 'bg-[#FF385C] text-white shadow-xs'
                : 'text-[var(--text-tertiary)] hover:text-[var(--text-primary)] hover:bg-black/[0.03] dark:hover:bg-white/[0.05]'
            }`}
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>Channel Attribution</span>
          </button>
        </div>

        {/* Search & Status Filter */}
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-tertiary)]" />
            <input
              type="text"
              placeholder="Search campaigns or codes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ borderRadius: '10px' }}
              className="h-9 pl-9 pr-3 text-xs bg-[var(--bg-card)] border border-black/[0.08] dark:border-white/[0.12] text-[var(--text-primary)] focus:outline-hidden focus:border-[#FF385C] w-48 sm:w-64 transition-all"
            />
          </div>

          <div className="flex items-center gap-1">
            <Filter className="w-3.5 h-3.5 text-[var(--text-tertiary)] shrink-0" />
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              style={{ borderRadius: '10px' }}
              className="h-9 px-3 text-xs bg-[var(--bg-card)] border border-black/[0.08] dark:border-white/[0.12] text-[var(--text-primary)] focus:outline-hidden cursor-pointer"
            >
              <option value="All">All Status</option>
              <option value="Active">Active</option>
              <option value="Scheduled">Scheduled</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
        </div>

      </div>

      {/* 4. Tab Contents */}

      {/* TAB 1: CAMPAIGN PERFORMANCE & ROI TABLE */}
      {activeTab === 'campaigns' && (
        <SectionCard
          title="Marketing Campaigns & ROI"
          subtitle="Real-time revenue attribution and return on ad spend (ROAS)"
          headerAction={
            <span className="text-xs font-semibold text-[var(--text-tertiary)]">
              Showing {filteredCampaigns.length} campaigns
            </span>
          }
        >

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-black/[0.06] dark:border-white/[0.08] text-[var(--text-tertiary)] font-semibold uppercase tracking-wider text-[10px]">
                  <th className="py-3 px-4">Campaign Name</th>
                  <th className="py-3 px-4">Code</th>
                  <th className="py-3 px-4">Channel</th>
                  <th className="py-3 px-4 text-right">Ad Spend</th>
                  <th className="py-3 px-4 text-right">Attributed Rev</th>
                  <th className="py-3 px-4 text-right">ROI</th>
                  <th className="py-3 px-4 text-center">Redemptions</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/[0.04] dark:divide-white/[0.06]">
                {filteredCampaigns.map((cmp: any) => (
                  <tr 
                    key={cmp.id}
                    className="hover:bg-black/[0.01] dark:hover:bg-white/[0.01] transition-colors"
                  >
                    <td className="py-3.5 px-4 font-bold text-[var(--text-primary)]">
                      <div className="flex flex-col">
                        <span>{cmp.title || cmp.name}</span>
                        <span className="text-[11px] text-[var(--text-tertiary)] font-normal">{cmp.targetAudience || 'Attributed Promotions'}</span>
                      </div>
                    </td>
                    <td className="py-3.5 px-4 font-mono font-bold text-[var(--text-primary)]">
                      <span className="px-2 py-0.5 rounded-md bg-black/[0.04] dark:bg-white/[0.06] border border-black/[0.06] dark:border-white/[0.08]">
                        {cmp.code || cmp.id}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-[var(--text-tertiary)] font-medium">
                      {cmp.type || cmp.channel}
                    </td>
                    <td className="py-3.5 px-4 text-right font-medium text-[var(--text-primary)]">
                      {cmp.spent || cmp.spend || 'Rp 12.5M'}
                    </td>
                    <td className="py-3.5 px-4 text-right font-bold text-[var(--text-primary)]">
                      {cmp.revenue || 'Rp 88.4M'}
                    </td>
                    <td className="py-3.5 px-4 text-right font-extrabold text-[#19B26B]">
                      {cmp.roi || '+607%'}
                    </td>
                    <td className="py-3.5 px-4 text-center font-bold text-[var(--text-primary)]">
                      {cmp.conversions ?? cmp.redemptions ?? 42}
                    </td>
                    <td className="py-3.5 px-4">
                      <span
                        style={{ borderRadius: '9999px' }}
                        className={`px-3 py-1 text-[11px] font-bold inline-flex items-center gap-1 ${
                          cmp.status === 'Active'
                            ? 'bg-[#19B26B]/10 text-[#19B26B]'
                            : cmp.status === 'Scheduled'
                            ? 'bg-[#387FF7]/10 text-[#387FF7]'
                            : cmp.status === 'Completed'
                            ? 'bg-gray-500/10 text-gray-500'
                            : 'bg-[#F79009]/10 text-[#F79009]'
                        }`}
                      >
                        {cmp.status}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      <button
                        type="button"
                        onClick={() => setSelectedCampaign(cmp)}
                        style={{ borderRadius: '10px' }}
                        className="h-8 px-3 text-xs font-semibold bg-[var(--bg-left-panel)] border border-black/[0.08] dark:border-white/[0.12] text-[var(--text-primary)] hover:bg-[#FF385C] hover:text-white transition-all cursor-pointer"
                      >
                        Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </SectionCard>
      )}

      {/* TAB 2: PROMO CODES & COUPON ANALYTICS */}
      {activeTab === 'coupons' && (
        <SectionCard
          title="Promo Codes & Coupon Usage"
          subtitle="Redemption volume, discount values granted, and net revenue impact"
          headerAction={
            <span className="text-xs font-semibold text-[var(--text-tertiary)]">
              5 Active Coupon Rules
            </span>
          }
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-black/[0.06] dark:border-white/[0.08] text-[var(--text-tertiary)] font-semibold uppercase tracking-wider text-[10px]">
                  <th className="py-3 px-4">Promo Code</th>
                  <th className="py-3 px-4">Discount Offer</th>
                  <th className="py-3 px-4 text-center">Redemptions</th>
                  <th className="py-3 px-4 text-right">Discount Value Given</th>
                  <th className="py-3 px-4 text-right">Gross Booking Value</th>
                  <th className="py-3 px-4 text-right">Net Revenue</th>
                  <th className="py-3 px-4">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/[0.04] dark:divide-white/[0.06]">
                {mockCoupons.map((coupon) => (
                  <tr 
                    key={coupon.code}
                    className="hover:bg-black/[0.01] dark:hover:bg-white/[0.01] transition-colors"
                  >
                    <td className="py-3.5 px-4 font-mono font-bold text-[var(--text-display)]">
                      <span className="px-2.5 py-1 rounded-md bg-[#FF385C]/10 text-[#FF385C] border border-[#FF385C]/20">
                        {coupon.code}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 font-semibold text-[var(--text-primary)]">
                      {coupon.type}
                    </td>
                    <td className="py-3.5 px-4 text-center font-extrabold text-[var(--text-display)]">
                      {coupon.redemptions}
                    </td>
                    <td className="py-3.5 px-4 text-right font-medium text-[#DE2031]">
                      -{coupon.discountVal}
                    </td>
                    <td className="py-3.5 px-4 text-right font-bold text-[var(--text-primary)]">
                      {coupon.grossRev}
                    </td>
                    <td className="py-3.5 px-4 text-right font-extrabold text-[var(--text-display)]">
                      {coupon.netRev}
                    </td>
                    <td className="py-3.5 px-4">
                      <span
                        style={{ borderRadius: '9999px' }}
                        className={`px-3 py-1 text-[11px] font-bold inline-flex items-center gap-1 ${
                          coupon.status === 'Active'
                            ? 'bg-[#19B26B]/10 text-[#19B26B]'
                            : 'bg-gray-500/10 text-gray-500'
                        }`}
                      >
                        {coupon.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </SectionCard>
      )}

      {/* TAB 3: CHANNEL ATTRIBUTION BREAKDOWN */}
      {activeTab === 'channels' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Main Channel Share Progress Bars (2 Cols) */}
          <div 
            style={{ borderRadius: '24px' }}
            className="lg:col-span-2 p-6 sm:p-8 bg-[var(--bg-card)] border border-black/[0.04] dark:border-white/[0.08] shadow-[0_4px_16px_rgba(0,0,0,0.02)] space-y-6"
          >
            <div className="border-b border-black/[0.04] dark:border-white/[0.06] pb-4">
              <h3 className="text-base font-bold text-[var(--text-display)] tracking-tight">
                Channel Revenue Attribution
              </h3>
              <p className="text-xs text-[var(--text-tertiary)] mt-0.5">
                Comparing Direct Website campaigns vs OTA channel commission costs
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-xs font-bold mb-2">
                  <span className="text-[var(--text-primary)]">Direct Website (Google & Social Ads)</span>
                  <span className="text-[#FF385C]">Rp 136.3M (73.8% attributed)</span>
                </div>
                <div style={{ borderRadius: '9999px' }} className="w-full h-3 bg-black/[0.04] dark:bg-white/[0.06] overflow-hidden">
                  <div style={{ width: '73.8%', borderRadius: '9999px' }} className="h-full bg-[#FF385C]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold mb-2">
                  <span className="text-[var(--text-primary)]">OTA Promotions (Booking.com & Expedia)</span>
                  <span className="text-[#387FF7]">Rp 32.2M (17.4% attributed)</span>
                </div>
                <div style={{ borderRadius: '9999px' }} className="w-full h-3 bg-black/[0.04] dark:bg-white/[0.06] overflow-hidden">
                  <div style={{ width: '17.4%', borderRadius: '9999px' }} className="h-full bg-[#387FF7]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold mb-2">
                  <span className="text-[var(--text-primary)]">Email & Loyalty Perks</span>
                  <span className="text-[#19B26B]">Rp 16.0M (8.8% attributed)</span>
                </div>
                <div style={{ borderRadius: '9999px' }} className="w-full h-3 bg-black/[0.04] dark:bg-white/[0.06] overflow-hidden">
                  <div style={{ width: '8.8%', borderRadius: '9999px' }} className="h-full bg-[#19B26B]" />
                </div>
              </div>
            </div>
          </div>

          {/* AI Marketing Insights (1 Col) */}
          <div 
            style={{ borderRadius: '24px' }}
            className="p-6 sm:p-8 bg-[var(--bg-card)] border border-black/[0.04] dark:border-white/[0.08] shadow-[0_4px_16px_rgba(0,0,0,0.02)] space-y-6"
          >
            <div className="border-b border-black/[0.04] dark:border-white/[0.06] pb-4">
              <div className="flex items-center gap-2">
                <h3 className="text-base font-bold text-[var(--text-display)] tracking-tight">
                  AI Marketing Insights
                </h3>
                <Sparkles className="w-3.5 h-3.5 text-[#FF385C]" />
              </div>
              <p className="text-xs text-[var(--text-tertiary)] mt-0.5">
                Automated budget reallocation recommendations
              </p>
            </div>

            <div className="space-y-4">
              <div 
                style={{ borderRadius: '16px' }}
                className="p-4 bg-[var(--bg-left-panel)] border border-black/[0.04] dark:border-white/[0.06] space-y-2"
              >
                <div className="text-[10px] font-bold uppercase tracking-wider text-[#19B26B]">
                  HIGH PERFORMER
                </div>
                <h4 className="text-xs font-bold text-[var(--text-display)]">
                  Google Search Ads ROI (+356%) outperforms Meta Ads
                </h4>
                <p className="text-xs text-[var(--text-tertiary)] leading-relaxed">
                  Shift Rp 3M from social ads to Google Search "Luxury Hotel Bali" keyphrase. Projected revenue gain: ~Rp 14.5M.
                </p>
              </div>

              <div 
                style={{ borderRadius: '16px' }}
                className="p-4 bg-[var(--bg-left-panel)] border border-black/[0.04] dark:border-white/[0.06] space-y-2"
              >
                <div className="text-[10px] font-bold uppercase tracking-wider text-[#F79009]">
                  LOYALTY OPPORTUNITY
                </div>
                <h4 className="text-xs font-bold text-[var(--text-display)]">
                  Email Newsletter generated 1,092% ROI
                </h4>
                <p className="text-xs text-[var(--text-tertiary)] leading-relaxed">
                  VIP retreat promo achieved zero ad commission costs. Send follow-up campaign to Gold tier members.
                </p>
              </div>
            </div>
          </div>

        </div>
      )}

      {/* 5. Campaign Detail Modal */}
      {selectedCampaign && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200">
          <div 
            style={{ borderRadius: '24px' }}
            className="w-full max-w-xl bg-[var(--bg-card)] border border-black/[0.08] dark:border-white/[0.12] shadow-2xl p-6 sm:p-8 space-y-6 relative"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedCampaign(null)}
              style={{ borderRadius: '50%' }}
              className="w-8 h-8 flex items-center justify-center bg-[var(--bg-left-panel)] text-[var(--text-tertiary)] hover:text-[var(--text-primary)] hover:bg-black/[0.05] dark:hover:bg-white/[0.08] transition-colors cursor-pointer absolute top-6 right-6"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Modal Header */}
            <div className="border-b border-black/[0.04] dark:border-white/[0.06] pb-4 pr-8">
              <div className="flex items-center gap-2 mb-1">
                <span 
                  style={{ borderRadius: '9999px' }}
                  className="px-2.5 py-0.5 bg-[#FF385C]/10 text-[#FF385C] text-[10px] font-bold"
                >
                  {selectedCampaign.id}
                </span>
                <span 
                  style={{ borderRadius: '9999px' }}
                  className="px-2.5 py-0.5 bg-[#19B26B]/10 text-[#19B26B] text-[10px] font-bold"
                >
                  {selectedCampaign.status}
                </span>
              </div>
              <h3 className="text-base font-bold text-[var(--text-display)] tracking-tight">
                {selectedCampaign.name}
              </h3>
              <p className="text-xs text-[var(--text-tertiary)] mt-0.5">
                Channel: {selectedCampaign.channel} · Offer: {selectedCampaign.discount}
              </p>
            </div>

            {/* Key Metrics Grid */}
            <div className="grid grid-cols-3 gap-3">
              <div 
                style={{ borderRadius: '16px' }}
                className="p-4 bg-[var(--bg-left-panel)] border border-black/[0.04] dark:border-white/[0.06] text-center"
              >
                <div className="text-[10px] font-bold text-[var(--text-tertiary)] uppercase">Ad Budget</div>
                <div className="text-sm sm:text-base font-extrabold text-[var(--text-display)] mt-1">{selectedCampaign.spend}</div>
              </div>
              <div 
                style={{ borderRadius: '16px' }}
                className="p-4 bg-[var(--bg-left-panel)] border border-black/[0.04] dark:border-white/[0.06] text-center"
              >
                <div className="text-[10px] font-bold text-[var(--text-tertiary)] uppercase">Attributed Revenue</div>
                <div className="text-sm sm:text-base font-extrabold text-[var(--text-display)] mt-1">{selectedCampaign.revenue}</div>
              </div>
              <div 
                style={{ borderRadius: '16px' }}
                className="p-4 bg-[var(--bg-left-panel)] border border-black/[0.04] dark:border-white/[0.06] text-center"
              >
                <div className="text-[10px] font-bold text-[var(--text-tertiary)] uppercase">Campaign ROI</div>
                <div className="text-sm sm:text-base font-extrabold text-[#19B26B] mt-1">{selectedCampaign.roi}</div>
              </div>
            </div>

            {/* Campaign Details */}
            <div className="space-y-3 text-xs text-[var(--text-tertiary)]">
              <div className="flex justify-between py-2 border-b border-black/[0.04] dark:border-white/[0.06]">
                <span className="font-semibold text-[var(--text-primary)]">Promo Code:</span>
                <span className="font-mono font-bold text-[#FF385C]">{selectedCampaign.code}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-black/[0.04] dark:border-white/[0.06]">
                <span className="font-semibold text-[var(--text-primary)]">Campaign Duration:</span>
                <span>{selectedCampaign.startDate} – {selectedCampaign.endDate}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-black/[0.04] dark:border-white/[0.06]">
                <span className="font-semibold text-[var(--text-primary)]">Target Audience:</span>
                <span className="font-medium text-[var(--text-primary)]">{selectedCampaign.targetAudience}</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="font-semibold text-[var(--text-primary)]">Redemption Count:</span>
                <span className="font-bold text-[var(--text-display)]">{selectedCampaign.redemptions} Bookings</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setSelectedCampaign(null)}
                style={{ borderRadius: '10px' }}
                className="h-9 px-4 text-xs font-semibold bg-[var(--bg-left-panel)] border border-black/[0.08] dark:border-white/[0.12] text-[var(--text-primary)] hover:bg-black/[0.05] dark:hover:bg-white/[0.08] transition-all cursor-pointer"
              >
                Close
              </button>
              <button
                type="button"
                style={{ borderRadius: '10px' }}
                className="h-9 px-4 text-xs font-semibold bg-[#FF385C] hover:bg-[#E00B41] text-white shadow-xs transition-all cursor-pointer"
              >
                Edit Campaign
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 6. New Campaign Modal */}
      {showNewModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200">
          <div 
            style={{ borderRadius: '24px' }}
            className="w-full max-w-lg bg-[var(--bg-card)] border border-black/[0.08] dark:border-white/[0.12] shadow-2xl p-6 sm:p-8 space-y-6 relative"
          >
            <button
              type="button"
              onClick={() => setShowNewModal(false)}
              style={{ borderRadius: '50%' }}
              className="w-8 h-8 flex items-center justify-center bg-[var(--bg-left-panel)] text-[var(--text-tertiary)] hover:text-[var(--text-primary)] hover:bg-black/[0.05] dark:hover:bg-white/[0.08] transition-colors cursor-pointer absolute top-6 right-6"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="border-b border-black/[0.04] dark:border-white/[0.06] pb-4">
              <h3 className="text-base font-bold text-[var(--text-display)] tracking-tight">
                Create New Marketing Campaign
              </h3>
              <p className="text-xs text-[var(--text-tertiary)] mt-0.5">
                Setup ad campaign parameters and generate promo codes
              </p>
            </div>

            <div className="space-y-4 text-xs">
              <div>
                <label className="block font-semibold text-[var(--text-primary)] mb-1">Campaign Name</label>
                <input 
                  type="text"
                  placeholder="e.g. End of Year Holiday Special"
                  style={{ borderRadius: '10px' }}
                  className="w-full h-9 px-3 bg-[var(--bg-left-panel)] border border-black/[0.08] dark:border-white/[0.12] text-[var(--text-primary)] focus:outline-hidden focus:border-[#FF385C]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-[var(--text-primary)] mb-1">Promo Code</label>
                  <input 
                    type="text"
                    placeholder="HOLIDAY2026"
                    style={{ borderRadius: '10px' }}
                    className="w-full h-9 px-3 font-mono font-bold bg-[var(--bg-left-panel)] border border-black/[0.08] dark:border-white/[0.12] text-[var(--text-primary)] focus:outline-hidden focus:border-[#FF385C]"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-[var(--text-primary)] mb-1">Channel</label>
                  <select 
                    style={{ borderRadius: '10px' }}
                    className="w-full h-9 px-3 bg-[var(--bg-left-panel)] border border-black/[0.08] dark:border-white/[0.12] text-[var(--text-primary)] focus:outline-hidden cursor-pointer"
                  >
                    <option>Google Search Ads</option>
                    <option>Meta (Instagram & FB)</option>
                    <option>Website Pop-up</option>
                    <option>Email Newsletter</option>
                    <option>OTA Promo</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-[var(--text-primary)] mb-1">Ad Budget (IDR)</label>
                  <input 
                    type="text"
                    placeholder="10,000,000"
                    style={{ borderRadius: '10px' }}
                    className="w-full h-9 px-3 bg-[var(--bg-left-panel)] border border-black/[0.08] dark:border-white/[0.12] text-[var(--text-primary)] focus:outline-hidden focus:border-[#FF385C]"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-[var(--text-primary)] mb-1">Discount Offer</label>
                  <input 
                    type="text"
                    placeholder="20% Off Room Rate"
                    style={{ borderRadius: '10px' }}
                    className="w-full h-9 px-3 bg-[var(--bg-left-panel)] border border-black/[0.08] dark:border-white/[0.12] text-[var(--text-primary)] focus:outline-hidden focus:border-[#FF385C]"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setShowNewModal(false)}
                style={{ borderRadius: '10px' }}
                className="h-9 px-4 text-xs font-semibold bg-[var(--bg-left-panel)] border border-black/[0.08] dark:border-white/[0.12] text-[var(--text-primary)] hover:bg-black/[0.05] dark:hover:bg-white/[0.08] transition-all cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => {
                  addCampaign({
                    title: newTitle || 'Autumn Package 2026',
                    type: newType,
                    status: 'Active',
                  });
                  setShowNewModal(false);
                  setNewTitle('');
                }}
                style={{ borderRadius: '10px' }}
                className="h-9 px-4 text-xs font-semibold bg-[#FF385C] hover:bg-[#E00B41] text-white shadow-xs transition-all cursor-pointer"
              >
                Launch Campaign
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
