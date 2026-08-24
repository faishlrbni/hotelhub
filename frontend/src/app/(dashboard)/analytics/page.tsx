'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  BarChart3,
  TrendingUp,
  FileText,
  Database,
  AlertTriangle,
  Users,
  Plus,
  ArrowRight,
  Sparkles,
  Download,
  Calendar,
  Filter,
  CheckCircle2,
  ChevronRight,
  Zap,
  DollarSign,
  Bed,
  Layers,
  X,
} from 'lucide-react';
import { KpiCard } from '@/components/ui/kpi-card';
import { SectionCard } from '@/components/ui/section-card';

interface ReportItem {
  id: string;
  title: string;
  badge?: string;
  description: string;
  category: 'Performance' | 'Revenue' | 'Guest' | 'Operations';
  lastUpdated: string;
  schedule?: string;
  views: number;
}

const PINNED_REPORTS: ReportItem[] = [
  {
    id: 'REP-001',
    title: 'Weekly performance snapshot',
    badge: 'AUTO',
    description: 'Occupancy · ADR · RevPAR · sent every Monday',
    category: 'Performance',
    lastUpdated: 'Updated 2 days ago',
    schedule: 'Weekly on Mondays at 08:00 AM',
    views: 142,
  },
  {
    id: 'REP-002',
    title: 'Channel profitability',
    description: 'Direct vs OTA net revenue after commissions',
    category: 'Revenue',
    lastUpdated: 'Updated yesterday',
    schedule: 'Daily automated sync',
    views: 98,
  },
  {
    id: 'REP-003',
    title: 'Guest lifetime value',
    description: 'Segment x repeat rate x avg spend',
    category: 'Guest',
    lastUpdated: 'Updated 3 days ago',
    schedule: 'Monthly recalculation',
    views: 76,
  },
  {
    id: 'REP-004',
    title: 'Housekeeping efficiency',
    description: 'Rooms/hour by team and floor',
    category: 'Operations',
    lastUpdated: 'Updated 5 hours ago',
    schedule: 'Shift end digest',
    views: 210,
  },
  {
    id: 'REP-005',
    title: 'Forecast accuracy',
    description: 'AI forecast vs. actual · last 90 days',
    category: 'Performance',
    lastUpdated: 'Updated today',
    schedule: 'Real-time rolling 90D',
    views: 165,
  },
];

export default function AnalyticsPage() {
  const [selectedReport, setSelectedReport] = useState<ReportItem | null>(null);
  const [activeTab, setActiveTab] = useState<'pinned' | 'builder' | 'anomalies'>('pinned');
  const [timeRange, setTimeRange] = useState<'30D' | '90D' | 'YTD'>('30D');
  const [toastMessage, setToastMessage] = useState('');

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6 max-w-[1600px] mx-auto min-h-screen relative">
      
      {toastMessage && (
        <div className="fixed top-5 right-5 z-50 bg-emerald-600 text-white px-5 py-3 rounded-xl shadow-2xl text-xs font-bold flex items-center gap-2.5 animate-in fade-in duration-300">
          <CheckCircle2 className="w-4 h-4 text-white" />
          <span>{toastMessage}</span>
        </div>
      )}
      
      {/* 1. Page Hero Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="block text-xs font-semibold text-[var(--text-tertiary)] uppercase tracking-wider mb-1">
            Business intelligence
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-display)] tracking-tight">
            Analytics
          </h1>
          <p className="text-xs text-[var(--text-tertiary)] mt-1 font-medium">
            Custom dashboards that answer the questions you were about to ask.
          </p>
        </div>

        <div className="flex flex-wrap sm:flex-nowrap items-center gap-2.5 sm:gap-3 w-full sm:w-auto shrink-0">
          <button
            type="button"
            className="btn-secondary w-full sm:w-auto flex-1 sm:flex-initial"
          >
            <Download className="w-3.5 h-3.5 text-[var(--text-tertiary)]" />
            <span>Export CSV</span>
          </button>
          <button
            type="button"
            className="btn-primary w-full sm:w-auto flex-1 sm:flex-initial"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Build dashboard</span>
          </button>
        </div>
      </div>

      {/* 2. Top 4 KPI Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-3.5">
        <KpiCard
          label="SAVED REPORTS"
          value="24"
          icon={FileText}
          iconBgColor="bg-pink-500/10"
          iconColor="text-[#FF385C]"
          trendText="12 shared with team"
          subtext="Custom executive dashboards"
        />
        <KpiCard
          label="DATA SOURCES"
          value="8"
          icon={Database}
          iconBgColor="bg-emerald-500/10"
          iconColor="text-[#19B26B]"
          trendText="PMS · OTAs · POS · CRM"
          subtext="Real-time synced pipelines"
        />
        <KpiCard
          label="ANOMALIES DETECTED"
          value="3"
          icon={AlertTriangle}
          iconBgColor="bg-amber-500/10"
          iconColor="text-[#F79009]"
          trendText="This week · AI"
          trendIcon={Sparkles}
          trendColor="text-[#F79009]"
          subtext="Automated variance alerts"
        />
        <KpiCard
          label="TEAM MEMBERS"
          value="11"
          icon={Users}
          iconBgColor="bg-[#387FF7]/10"
          iconColor="text-[#387FF7] dark:text-[#6099F9]"
          trendText="Analytics access"
          subtext="Role-based permissions"
        />
      </div>

      {/* 3. Main Section Card: Pinned Reports */}
      <SectionCard
        title="Pinned reports"
        headerAction={
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 bg-[var(--bg-left-panel)] border border-black/[0.06] dark:border-white/[0.08] p-1 rounded-lg">
              {(['30D', '90D', 'YTD'] as const).map((range) => (
                <button
                  key={range}
                  type="button"
                  onClick={() => setTimeRange(range)}
                  style={{ borderRadius: '6px' }}
                  className={`px-2.5 py-1 text-[11px] font-semibold transition-all cursor-pointer ${
                    timeRange === range
                      ? 'bg-[#181D27] dark:bg-white text-white dark:text-[#181D27] shadow-xs'
                      : 'text-[var(--text-tertiary)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  {range}
                </button>
              ))}
            </div>
            <Link
              href="/ai/reports"
              className="text-xs font-semibold text-[#387FF7] dark:text-[#6099F9] hover:underline flex items-center gap-1 cursor-pointer transition-all hover:translate-x-0.5 active:scale-95 group"
            >
              <span>View all</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        }
      >
        <div className="divide-y divide-black/[0.04] dark:divide-white/[0.06]">
          {PINNED_REPORTS.map((report) => (
            <div
              key={report.id}
              onClick={() => setSelectedReport(report)}
              className="py-4 flex items-center justify-between gap-4 transition-all hover:bg-black/[0.01] dark:hover:bg-white/[0.01] px-3 rounded-xl cursor-pointer group"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <div 
                  style={{ borderRadius: '10px' }}
                  className="w-10 h-10 bg-pink-500/10 text-[#FF385C] flex items-center justify-center shrink-0 font-bold text-xs"
                >
                  <BarChart3 className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-[var(--text-primary)] group-hover:text-[#FF385C] transition-colors truncate">
                      {report.title}
                    </span>
                    {report.badge && (
                      <span
                        style={{ borderRadius: '6px' }}
                        className="px-2 py-0.5 text-[9px] font-extrabold uppercase bg-pink-500/10 text-[#FF385C]"
                      >
                        {report.badge}
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-[var(--text-tertiary)] truncate mt-0.5">
                    {report.description}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 shrink-0">
                <div className="text-right hidden sm:block">
                  <div className="text-xs font-semibold text-[var(--text-primary)]">
                    {report.category}
                  </div>
                  <div className="text-[10px] text-[var(--text-tertiary)]">
                    {report.lastUpdated}
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-[var(--text-tertiary)] group-hover:text-[var(--text-primary)] transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </SectionCard>

      {/* 4. Secondary Analytics Grid: Performance Snapshot & Anomaly Alert Log */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left 2 Cols: Performance Intelligence Matrix */}
        <div className="lg:col-span-2">
          <SectionCard
            title="Weekly performance matrix"
            subtitle="Real-time RevPAR, ADR & Occupancy variance across properties"
          >
            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-3 p-4 bg-[var(--bg-left-panel)] border border-black/[0.04] dark:border-white/[0.06] rounded-xl text-center">
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-[var(--text-tertiary)]">
                    RevPAR
                  </div>
                  <div className="text-xl font-extrabold text-[var(--text-display)] mt-1">
                    Rp 878.4K
                  </div>
                  <div className="text-[10px] font-bold text-[#19B26B] mt-0.5">
                    +4.2% vs target
                  </div>
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-[var(--text-tertiary)]">
                    Average Daily Rate
                  </div>
                  <div className="text-xl font-extrabold text-[var(--text-display)] mt-1">
                    Rp 1.12M
                  </div>
                  <div className="text-[10px] font-bold text-[#19B26B] mt-0.5">
                    +1.5% rate lift
                  </div>
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-[var(--text-tertiary)]">
                    Net Occupancy
                  </div>
                  <div className="text-xl font-extrabold text-[var(--text-display)] mt-1">
                    78.4%
                  </div>
                  <div className="text-[10px] font-bold text-[#387FF7] dark:text-[#6099F9] mt-0.5">
                    94 / 120 rooms
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-xs font-bold text-[var(--text-display)]">
                  Top Channel Contribution
                </div>
                <div className="space-y-2">
                  {[
                    { channel: 'Direct Booking Site', share: '48%', rev: 'Rp 88.4M', color: 'bg-[#FF385C]' },
                    { channel: 'Booking.com OTA', share: '32%', rev: 'Rp 58.9M', color: 'bg-[#387FF7]' },
                    { channel: 'Agoda & Expedia', share: '20%', rev: 'Rp 36.9M', color: 'bg-emerald-500' },
                  ].map((ch) => (
                    <div key={ch.channel} className="space-y-1">
                      <div className="flex justify-between text-xs font-semibold">
                        <span className="text-[var(--text-primary)]">{ch.channel}</span>
                        <span className="text-[var(--text-tertiary)]">{ch.share} ({ch.rev})</span>
                      </div>
                      <div className="w-full h-2 bg-black/[0.04] dark:bg-white/[0.06] rounded-full overflow-hidden">
                        <div className={`h-full ${ch.color} rounded-full`} style={{ width: ch.share }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </SectionCard>
        </div>

        {/* Right Col: AI Anomaly Alerts */}
        <div>
          <SectionCard
            title="AI Anomalies Log"
            subtitle="Automated variance detection"
          >
            <div className="space-y-3">
              {[
                { title: 'Weekend ADR Dip Detected', desc: 'Saturday rates dropped 8% below competitor median in Seminyak cluster.', type: 'High' },
                { title: 'OTA Commission Spike', desc: 'Booking.com share rose +6% YoY. Recommend boosting direct promo codes.', type: 'Medium' },
                { title: 'Housekeeping Delay Alert', desc: 'Floor 2 turnover time exceeded 35 min average between 11:00 - 13:00.', type: 'Normal' },
              ].map((alert, idx) => (
                <div
                  key={idx}
                  style={{ borderRadius: '12px' }}
                  className="p-3.5 bg-[var(--bg-left-panel)] border border-black/[0.06] dark:border-white/[0.08] space-y-1.5"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-xs text-[var(--text-display)] flex items-center gap-1.5">
                      <AlertTriangle className="w-3.5 h-3.5 text-[#F79009]" />
                      {alert.title}
                    </span>
                    <span 
                      style={{ borderRadius: '6px' }}
                      className={`px-1.5 py-0.5 text-[9px] font-extrabold uppercase ${
                        alert.type === 'High' ? 'bg-rose-500/10 text-[#FF385C]' : 'bg-amber-500/10 text-amber-500'
                      }`}
                    >
                      {alert.type}
                    </span>
                  </div>
                  <p className="text-[11px] text-[var(--text-tertiary)] leading-relaxed">
                    {alert.desc}
                  </p>
                </div>
              ))}
            </div>
          </SectionCard>
        </div>

      </div>

      {/* Report Modal */}
      {selectedReport && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4">
          <div 
            style={{ borderRadius: '24px' }}
            className="w-full max-w-lg bg-[var(--bg-card)] border border-black/[0.08] dark:border-white/[0.12] p-6 shadow-2xl space-y-6 animate-in fade-in zoom-in-95 duration-200 relative"
          >
            <button
              type="button"
              onClick={() => setSelectedReport(null)}
              style={{ borderRadius: '50%' }}
              className="w-8 h-8 flex items-center justify-center bg-[var(--bg-left-panel)] text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors absolute top-6 right-6 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="border-b border-black/[0.04] dark:border-white/[0.06] pb-4 pr-8">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-mono font-bold text-xs text-[var(--text-tertiary)]">
                  {selectedReport.id}
                </span>
                {selectedReport.badge && (
                  <span className="px-2 py-0.5 text-[9px] font-extrabold uppercase bg-pink-500/10 text-[#FF385C] rounded-md">
                    {selectedReport.badge}
                  </span>
                )}
              </div>
              <h3 className="text-lg font-bold text-[var(--text-display)]">
                {selectedReport.title}
              </h3>
              <p className="text-xs text-[var(--text-tertiary)] mt-1">
                {selectedReport.description}
              </p>
            </div>

            <div className="space-y-3">
              <div className="p-3.5 bg-[var(--bg-left-panel)] rounded-xl border border-black/[0.04] dark:border-white/[0.06] text-xs space-y-2">
                <div className="flex justify-between">
                  <span className="text-[var(--text-tertiary)]">Category</span>
                  <span className="font-semibold text-[var(--text-primary)]">{selectedReport.category}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--text-tertiary)]">Schedule</span>
                  <span className="font-semibold text-[var(--text-primary)]">{selectedReport.schedule}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--text-tertiary)]">Total Executive Views</span>
                  <span className="font-semibold text-[var(--text-primary)]">{selectedReport.views} views</span>
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setSelectedReport(null)}
                style={{ borderRadius: '10px' }}
                className="px-4 py-2 bg-[var(--bg-left-panel)] border border-black/[0.08] dark:border-white/[0.12] text-xs font-semibold text-[var(--text-primary)] hover:bg-black/[0.05] transition-all cursor-pointer"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => {
                  const reportTitle = selectedReport.title;
                  const csvRows = [
                    ['HOTELHUB ANALYTICS EXECUTIVE REPORT'],
                    ['Report Name', reportTitle],
                    ['Category', selectedReport.category],
                    ['Generated Date', new Date().toLocaleDateString('en-US', { dateStyle: 'full' })],
                    ['Description', `"${selectedReport.description}"`],
                    ['Last Updated', selectedReport.lastUpdated]
                  ];
                  const csvContent = 'data:text/csv;charset=utf-8,' + csvRows.map((e) => e.join(',')).join('\n');
                  const encodedUri = encodeURI(csvContent);
                  const link = document.createElement('a');
                  link.setAttribute('href', encodedUri);
                  link.setAttribute('download', `HotelHub-${reportTitle.replace(/\s+/g, '-')}-Report.csv`);
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);

                  setSelectedReport(null);
                  setToastMessage(`✓ ${reportTitle} exported successfully.`);
                  setTimeout(() => setToastMessage(''), 4000);
                }}
                style={{ borderRadius: '10px' }}
                className="px-4 py-2 bg-[#FF385C] text-white text-xs font-semibold shadow-xs hover:bg-[#E00B41] transition-all cursor-pointer"
              >
                Export Report
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
