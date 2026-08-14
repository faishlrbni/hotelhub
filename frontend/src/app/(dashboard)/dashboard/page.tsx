'use client';

import { useState } from 'react';
import {
  Sparkles,
  ArrowUpRight,
  ArrowDownRight,
  ChevronRight,
  Download,
  ExternalLink,
  TrendingUp,
  Bed,
  DollarSign
} from 'lucide-react';
import { KpiCard } from '@/components/ui/kpi-card';
import { SectionCard } from '@/components/ui/section-card';

export default function DashboardOverviewPage() {
  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-8 max-w-[1600px] mx-auto min-h-screen">
          
          {/* Welcome Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-semibold text-[var(--text-tertiary)] uppercase tracking-wider block mb-1">
                Tuesday, 21 July 2026 · Aris Hotel Bali
              </span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-display)] tracking-tight">
                Good afternoon, Operations Team.
              </h1>
              <p className="text-xs text-[var(--text-tertiary)] mt-1 font-medium">
                Everything is on track for today's arrivals. Here's what's happening across your property.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3 shrink-0">
              <button
                type="button"
                style={{ borderRadius: '10px' }}
                className="h-9 px-4 text-xs font-semibold bg-[var(--bg-card)] border border-black/[0.08] dark:border-white/[0.12] text-[var(--text-primary)] hover:bg-black/[0.03] dark:hover:bg-white/[0.04] transition-all shadow-xs cursor-pointer flex items-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5 text-[var(--text-tertiary)]" />
                <span>Export Report</span>
              </button>
              <button
                type="button"
                style={{ borderRadius: '10px' }}
                className="h-9 px-4 text-xs font-semibold bg-[#FF385C] hover:bg-[#E00B41] text-white shadow-xs flex items-center gap-1.5 transition-all cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Generate AI Report</span>
              </button>
            </div>
          </div>

          {/* 4 KPI Metrics Grid (Reusable Component Standard) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-3.5">
            <KpiCard 
              label="OCCUPANCY RATE"
              value="78.4%"
              icon={TrendingUp}
              iconBgColor="bg-emerald-500/10"
              iconColor="text-[#19B26B]"
              trendText="+4.2% vs target"
              subtext="94 out of 120 rooms occupied"
            />
            <KpiCard 
              label="TOTAL REVENUE MTD"
              value="Rp 184.2M"
              icon={TrendingUp}
              iconBgColor="bg-emerald-500/10"
              iconColor="text-[#19B26B]"
              trendText="+6.1% MoM"
              subtext="Attributed to direct site & OTA channels"
            />
            <KpiCard 
              label="ADR (AVG DAILY RATE)"
              value="Rp 1.12M"
              icon={DollarSign}
              iconBgColor="bg-[#387FF7]/10"
              iconColor="text-[#387FF7] dark:text-[#6099F9]"
              trendText="+1.5% rate lift"
              subtext="Average daily room rate"
            />
            <KpiCard 
              label="AVAILABLE ROOMS"
              value="26 Rooms"
              icon={Bed}
              iconBgColor="bg-emerald-500/10"
              iconColor="text-[#19B26B]"
              trendText="Ready for check-in"
              subtext="Inspected & clean inventory"
            />
          </div>

          {/* Row 1 Analytics: Booking Trend & Room Status */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Booking Trend Chart (2 Cols) */}
            <SectionCard
              className="lg:col-span-2"
              title="Booking trend"
              subtitle="Last 7 days vs. same week last year"
              headerAction={
                <div className="flex items-center gap-4 text-xs font-medium">
                  <div className="flex items-center gap-1.5">
                    <span style={{ borderRadius: '50%' }} className="w-2.5 h-2.5 bg-[#FF385C] shrink-0 inline-block" />
                    <span className="text-[var(--text-primary)]">This week</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[var(--text-tertiary)]">
                    <span style={{ borderRadius: '50%' }} className="w-2.5 h-2.5 border border-current border-dashed shrink-0 inline-block" />
                    <span>Last year</span>
                  </div>
                </div>
              }
            >
              <div>
                {/* Chart SVG Canvas */}
                <div className="mt-2 h-48 w-full relative">
                  <svg className="w-full h-full overflow-visible" viewBox="0 0 600 160" preserveAspectRatio="none">
                    {/* Grid Lines */}
                    <line x1="0" y1="0" x2="600" y2="0" stroke="currentColor" strokeOpacity="0.06" strokeDasharray="4 4" />
                    <line x1="0" y1="40" x2="600" y2="40" stroke="currentColor" strokeOpacity="0.06" strokeDasharray="4 4" />
                    <line x1="0" y1="80" x2="600" y2="80" stroke="currentColor" strokeOpacity="0.06" strokeDasharray="4 4" />
                    <line x1="0" y1="120" x2="600" y2="120" stroke="currentColor" strokeOpacity="0.06" strokeDasharray="4 4" />
                    
                    {/* Gradient Area Fill */}
                    <defs>
                      <linearGradient id="pinkGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#FF385C" stopOpacity="0.25" />
                        <stop offset="100%" stopColor="#FF385C" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>

                    {/* Last Year Line (Dashed Gray) */}
                    <path
                      d="M 0,100 Q 100,90 200,95 T 400,70 T 600,80"
                      fill="none"
                      stroke="#94969C"
                      strokeWidth="2"
                      strokeDasharray="5 5"
                    />

                    {/* This Week Area Fill */}
                    <path
                      d="M 0,110 Q 100,100 200,85 T 400,45 T 500,30 T 600,60 L 600,160 L 0,160 Z"
                      fill="url(#pinkGradient)"
                    />

                    {/* This Week Line (Solid Pink) */}
                    <path
                      d="M 0,110 Q 100,100 200,85 T 400,45 T 500,30 T 600,60"
                      fill="none"
                      stroke="#FF385C"
                      strokeWidth="3"
                    />

                    {/* Highlight Point */}
                    <circle cx="500" cy="30" r="5" fill="#FF385C" stroke="#FFFFFF" strokeWidth="2" />
                  </svg>
                </div>
              </div>

              {/* X Axis Labels */}
              <div className="flex justify-between text-xs font-semibold text-[var(--text-tertiary)] pt-4 border-t border-black/[0.04] dark:border-white/[0.06]">
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
                <span>Sun</span>
              </div>
            </SectionCard>

            {/* Room Status Donut Chart (1 Col) */}
            <SectionCard
              title="Room status"
              subtitle="Live · 120 rooms total"
            >

              {/* Donut Graphic & Legend Breakdown */}
              <div className="my-6 flex items-center justify-between gap-4">
                
                {/* SVG Donut */}
                <div className="relative w-36 h-36 shrink-0 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                    {/* Background Ring */}
                    <path
                      className="text-black/[0.05] dark:text-white/[0.08]"
                      strokeWidth="4"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    {/* Occupied Slice (Pink 65%) */}
                    <path
                      stroke="#FF385C"
                      strokeWidth="4.5"
                      strokeDasharray="65, 100"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    {/* Available Slice (Green 22%) */}
                    <path
                      stroke="#19B26B"
                      strokeWidth="4.5"
                      strokeDasharray="22, 100"
                      strokeDashoffset="-65"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    {/* Cleaning Slice (Amber 7%) */}
                    <path
                      stroke="#F79009"
                      strokeWidth="4.5"
                      strokeDasharray="7, 100"
                      strokeDashoffset="-87"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    {/* Dirty Slice (Blue 4%) */}
                    <path
                      stroke="#387FF7"
                      strokeWidth="4.5"
                      strokeDasharray="4, 100"
                      strokeDashoffset="-94"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                  </svg>
                  <div className="absolute text-center">
                    <div className="text-xl font-extrabold text-[var(--text-display)]">
                      120
                    </div>
                    <div className="text-[10px] text-[var(--text-tertiary)] uppercase tracking-wider">
                      rooms
                    </div>
                  </div>
                </div>

                {/* Legends */}
                <div className="space-y-2 text-xs flex-1">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span style={{ borderRadius: '50%' }} className="w-2.5 h-2.5 bg-[#FF385C] shrink-0" />
                      <span className="text-[var(--text-tertiary)]">Occupied</span>
                    </div>
                    <span className="font-bold text-[var(--text-primary)]">78</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span style={{ borderRadius: '50%' }} className="w-2.5 h-2.5 bg-[#19B26B] shrink-0" />
                      <span className="text-[var(--text-tertiary)]">Available</span>
                    </div>
                    <span className="font-bold text-[var(--text-primary)]">26</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span style={{ borderRadius: '50%' }} className="w-2.5 h-2.5 bg-[#F79009] shrink-0" />
                      <span className="text-[var(--text-tertiary)]">Cleaning</span>
                    </div>
                    <span className="font-bold text-[var(--text-primary)]">9</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span style={{ borderRadius: '50%' }} className="w-2.5 h-2.5 bg-[#387FF7] shrink-0" />
                      <span className="text-[var(--text-tertiary)]">Dirty</span>
                    </div>
                    <span className="font-bold text-[var(--text-primary)]">5</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span style={{ borderRadius: '50%' }} className="w-2.5 h-2.5 bg-[#9E35A7] shrink-0" />
                      <span className="text-[var(--text-tertiary)]">Maintenance</span>
                    </div>
                    <span className="font-bold text-[var(--text-primary)]">2</span>
                  </div>
                </div>

              </div>
            </SectionCard>

          </div>

          {/* Row 2 Analytics: Revenue Bar Chart & Revenue Sources */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Revenue Bar Chart (2 Cols) */}
            <SectionCard
              className="lg:col-span-2"
              title="Revenue"
              subtitle="Monthly revenue (millions IDR)"
              headerAction={
                <div className="flex items-center gap-4 text-xs font-medium">
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
              <div>
                {/* Bar Chart Canvas */}
                <div className="mt-2 flex items-end justify-between gap-4 h-44 px-2">
                  {[
                    { month: 'Jan', v2026: 60, v2025: 45 },
                    { month: 'Feb', v2026: 75, v2025: 55 },
                    { month: 'Mar', v2026: 82, v2025: 60 },
                    { month: 'Apr', v2026: 88, v2025: 70 },
                    { month: 'May', v2026: 95, v2025: 78 },
                    { month: 'Jun', v2026: 90, v2025: 80 },
                    { month: 'Jul', v2026: 110, v2025: 85 },
                  ].map((item, idx) => (
                    <div key={idx} className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
                      <div className="w-full flex items-end justify-center gap-1.5 h-full">
                        {/* 2025 Bar */}
                        <div
                          style={{ height: `${item.v2025}%`, borderTopLeftRadius: '6px', borderTopRightRadius: '6px' }}
                          className="w-1/2 bg-gray-300 dark:bg-gray-700 transition-all hover:opacity-80"
                        />
                        {/* 2026 Bar */}
                        <div
                          style={{ height: `${item.v2026}%`, borderTopLeftRadius: '6px', borderTopRightRadius: '6px' }}
                          className="w-1/2 bg-[#19B26B] transition-all hover:opacity-80"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Month X-Axis Labels */}
              <div className="flex justify-between text-xs font-semibold text-[var(--text-tertiary)] pt-4 border-t border-black/[0.04] dark:border-white/[0.06] px-2">
                <span>Jan</span>
                <span>Feb</span>
                <span>Mar</span>
                <span>Apr</span>
                <span>May</span>
                <span>Jun</span>
                <span>Jul</span>
              </div>
            </SectionCard>

            {/* Revenue Sources Progress Bars (1 Col) */}
            <SectionCard
              title="Revenue sources"
              subtitle="Share of bookings this month"
            >
              <div className="space-y-4">
                {/* Direct */}
                <div>
                  <div className="flex justify-between text-xs font-semibold mb-1.5">
                    <span className="text-[var(--text-primary)]">Direct</span>
                    <span className="text-[var(--text-primary)]">42%</span>
                  </div>
                  <div style={{ borderRadius: '9999px' }} className="w-full h-2.5 bg-black/[0.04] dark:bg-white/[0.06] overflow-hidden">
                    <div style={{ width: '42%', borderRadius: '9999px' }} className="h-full bg-[#FF385C]" />
                  </div>
                </div>

                {/* Booking.com */}
                <div>
                  <div className="flex justify-between text-xs font-semibold mb-1.5">
                    <span className="text-[var(--text-primary)]">Booking.com</span>
                    <span className="text-[var(--text-primary)]">28%</span>
                  </div>
                  <div style={{ borderRadius: '9999px' }} className="w-full h-2.5 bg-black/[0.04] dark:bg-white/[0.06] overflow-hidden">
                    <div style={{ width: '28%', borderRadius: '9999px' }} className="h-full bg-[#19B26B]" />
                  </div>
                </div>

                {/* Expedia */}
                <div>
                  <div className="flex justify-between text-xs font-semibold mb-1.5">
                    <span className="text-[var(--text-primary)]">Expedia</span>
                    <span className="text-[var(--text-primary)]">14%</span>
                  </div>
                  <div style={{ borderRadius: '9999px' }} className="w-full h-2.5 bg-black/[0.04] dark:bg-white/[0.06] overflow-hidden">
                    <div style={{ width: '14%', borderRadius: '9999px' }} className="h-full bg-[#DC6903]" />
                  </div>
                </div>

                {/* Corporate */}
                <div>
                  <div className="flex justify-between text-xs font-semibold mb-1.5">
                    <span className="text-[var(--text-primary)]">Corporate</span>
                    <span className="text-[var(--text-primary)]">10%</span>
                  </div>
                  <div style={{ borderRadius: '9999px' }} className="w-full h-2.5 bg-black/[0.04] dark:bg-white/[0.06] overflow-hidden">
                    <div style={{ width: '10%', borderRadius: '9999px' }} className="h-full bg-[#387FF7]" />
                  </div>
                </div>

                {/* Walk-in */}
                <div>
                  <div className="flex justify-between text-xs font-semibold mb-1.5">
                    <span className="text-[var(--text-primary)]">Walk-in</span>
                    <span className="text-[var(--text-primary)]">6%</span>
                  </div>
                  <div style={{ borderRadius: '9999px' }} className="w-full h-2.5 bg-black/[0.04] dark:bg-white/[0.06] overflow-hidden">
                    <div style={{ width: '6%', borderRadius: '9999px' }} className="h-full bg-[#9E35A7]" />
                  </div>
                </div>
              </div>
            </SectionCard>

          </div>

          {/* Occupancy Heatmap Section (Full Width Card) */}
          <SectionCard
            title="Occupancy heatmap"
            subtitle="Next 5 weeks · darker = higher occupancy"
            headerAction={
              <button 
                type="button" 
                className="text-xs font-semibold text-[#FF385C] hover:underline flex items-center gap-1 cursor-pointer"
              >
                <span>View full calendar</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            }
          >
            {/* Days Header */}
            <div className="grid grid-cols-7 gap-3 text-center text-xs font-bold text-[var(--text-tertiary)] uppercase tracking-wider">
              <span>MON</span>
              <span>TUE</span>
              <span>WED</span>
              <span>THU</span>
              <span>FRI</span>
              <span>SAT</span>
              <span>SUN</span>
            </div>

            {/* 5 Weeks Grid */}
            <div className="space-y-3">
              {[
                [
                  { day: '20', val: '80%', color: 'bg-rose-100 dark:bg-rose-950/40 text-rose-800 dark:text-rose-300' },
                  { day: '21', val: '87%', color: 'bg-rose-200 dark:bg-rose-900/50 text-rose-900 dark:text-rose-200' },
                  { day: '22', val: '89%', color: 'bg-rose-200 dark:bg-rose-900/50 text-rose-900 dark:text-rose-200' },
                  { day: '23', val: '68%', color: 'bg-emerald-100 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300' },
                  { day: '24', val: '79%', color: 'bg-emerald-200 dark:bg-emerald-900/50 text-emerald-900 dark:text-emerald-200' },
                  { day: '25', val: '91%', color: 'bg-rose-200 dark:bg-rose-900/50 text-rose-900 dark:text-rose-200' },
                  { day: '26', val: '84%', color: 'bg-rose-100 dark:bg-rose-950/40 text-rose-800 dark:text-rose-300' },
                ],
                [
                  { day: '27', val: '75%', color: 'bg-emerald-100 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300' },
                  { day: '28', val: '86%', color: 'bg-rose-200 dark:bg-rose-900/50 text-rose-900 dark:text-rose-200' },
                  { day: '29', val: '88%', color: 'bg-rose-200 dark:bg-rose-900/50 text-rose-900 dark:text-rose-200' },
                  { day: '30', val: '72%', color: 'bg-emerald-100 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300' },
                  { day: '31', val: '60%', color: 'bg-amber-100 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300' },
                  { day: '01', val: '93%', color: 'bg-rose-300 dark:bg-rose-900/70 text-rose-950 dark:text-rose-100' },
                  { day: '02', val: '90%', color: 'bg-rose-200 dark:bg-rose-900/50 text-rose-900 dark:text-rose-200' },
                ],
                [
                  { day: '03', val: '70%', color: 'bg-emerald-100 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300' },
                  { day: '04', val: '82%', color: 'bg-rose-100 dark:bg-rose-950/40 text-rose-800 dark:text-rose-300' },
                  { day: '05', val: '85%', color: 'bg-rose-200 dark:bg-rose-900/50 text-rose-900 dark:text-rose-200' },
                  { day: '06', val: '76%', color: 'bg-emerald-100 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300' },
                  { day: '07', val: '65%', color: 'bg-amber-100 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300' },
                  { day: '08', val: '89%', color: 'bg-rose-200 dark:bg-rose-900/50 text-rose-900 dark:text-rose-200' },
                  { day: '09', val: '86%', color: 'bg-rose-200 dark:bg-rose-900/50 text-rose-900 dark:text-rose-200' },
                ],
                [
                  { day: '10', val: '77%', color: 'bg-emerald-100 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300' },
                  { day: '11', val: '83%', color: 'bg-rose-100 dark:bg-rose-950/40 text-rose-800 dark:text-rose-300' },
                  { day: '12', val: '85%', color: 'bg-rose-200 dark:bg-rose-900/50 text-rose-900 dark:text-rose-200' },
                  { day: '13', val: '78%', color: 'bg-emerald-100 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300' },
                  { day: '14', val: '62%', color: 'bg-amber-100 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300' },
                  { day: '15', val: '95%', color: 'bg-rose-300 dark:bg-rose-900/70 text-rose-950 dark:text-rose-100' },
                  { day: '16', val: '92%', color: 'bg-rose-200 dark:bg-rose-900/50 text-rose-900 dark:text-rose-200' },
                ],
                [
                  { day: '17', val: '74%', color: 'bg-emerald-100 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300' },
                  { day: '18', val: '84%', color: 'bg-rose-100 dark:bg-rose-950/40 text-rose-800 dark:text-rose-300' },
                  { day: '19', val: '87%', color: 'bg-rose-200 dark:bg-rose-900/50 text-rose-900 dark:text-rose-200' },
                  { day: '20', val: '76%', color: 'bg-emerald-100 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300' },
                  { day: '21', val: '63%', color: 'bg-amber-100 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300' },
                  { day: '22', val: '88%', color: 'bg-rose-200 dark:bg-rose-900/50 text-rose-900 dark:text-rose-200' },
                  { day: '23', val: '87%', color: 'bg-rose-200 dark:bg-rose-900/50 text-rose-900 dark:text-rose-200' },
                ],
              ].map((week, wIdx) => (
                <div key={wIdx} className="grid grid-cols-7 gap-3">
                  {week.map((cell, cIdx) => (
                    <div
                      key={cIdx}
                      style={{ borderRadius: '16px' }}
                      className={`p-3 h-20 flex flex-col justify-between transition-all hover:scale-[1.02] cursor-pointer ${cell.color}`}
                    >
                      <div className="text-right text-xs font-bold opacity-90">
                        {cell.val}
                      </div>
                      <div className="text-xs font-bold">
                        {cell.day}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {/* Heatmap Footer Legend Bar */}
            <div className="pt-2 flex items-center justify-between text-xs text-[var(--text-tertiary)]">
              <span>Low</span>
              <div className="h-2 flex-1 mx-4 rounded-full bg-gradient-to-r from-emerald-200 via-amber-200 to-rose-300 opacity-80" />
              <span>High</span>
            </div>
          </SectionCard>

          {/* Bottom Row: AI Business Insights & Today's Arrivals */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* AI Business Insights (2 Cols) */}
            <SectionCard
              className="lg:col-span-2"
              title="AI business insights"
              subtitle="Refreshed 12 minutes ago"
              headerAction={
                <span 
                  style={{ borderRadius: '9999px' }}
                  className="px-2.5 py-0.5 bg-pink-500/10 text-[#FF385C] text-[10px] font-bold flex items-center gap-1"
                >
                  <Sparkles className="w-3 h-3" />
                  <span>AI Driven</span>
                </span>
              }
            >
              {/* Insight Cards */}
              <div className="space-y-4">
                
                {/* Insight 1: Revenue */}
                <div 
                  style={{ borderRadius: '16px' }}
                  className="p-4 bg-[var(--bg-left-panel)] border border-black/[0.04] dark:border-white/[0.06] space-y-2"
                >
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider">
                    <span 
                      style={{ borderRadius: '9999px' }}
                      className="px-2.5 py-0.5 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                    >
                      REVENUE
                    </span>
                    <span className="text-[var(--text-tertiary)]">• AI GENERATED</span>
                  </div>
                  <h4 className="text-sm font-bold text-[var(--text-display)]">
                    Weekend occupancy is trending 14% below last month
                  </h4>
                  <p className="text-xs text-[var(--text-tertiary)] leading-relaxed">
                    Consider a limited-time check-in booking promo of 8–12% for Fri-Sun stays over the next 2 weeks. Projected upside: ~Rp 12M.
                  </p>
                  <div className="pt-1 flex items-center gap-4 text-xs font-semibold">
                    <button type="button" className="text-[#FF385C] hover:underline flex items-center gap-1 cursor-pointer">
                      <span>Open Revenue Manager</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                    <button type="button" className="text-[var(--text-tertiary)] hover:text-[var(--text-primary)] cursor-pointer">
                      Dismiss
                    </button>
                  </div>
                </div>

                {/* Insight 2: Housekeeping */}
                <div 
                  style={{ borderRadius: '16px' }}
                  className="p-4 bg-[var(--bg-left-panel)] border border-black/[0.04] dark:border-white/[0.06] space-y-2"
                >
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider">
                    <span 
                      style={{ borderRadius: '9999px' }}
                      className="px-2.5 py-0.5 bg-amber-500/10 text-amber-600 dark:text-amber-400"
                    >
                      HOUSEKEEPING
                    </span>
                    <span className="text-[var(--text-tertiary)]">• AI GENERATED</span>
                  </div>
                  <h4 className="text-sm font-bold text-[var(--text-display)]">
                    Same-day check-ins concentrated between 15:00–17:00
                  </h4>
                  <p className="text-xs text-[var(--text-tertiary)] leading-relaxed">
                    6 rooms at Deluxe Twin for 17:00 are today. Reassign 2 staff from Floor 2 to accelerate turnover.
                  </p>
                  <div className="pt-1 flex items-center gap-4 text-xs font-semibold">
                    <button type="button" className="text-[#FF385C] hover:underline flex items-center gap-1 cursor-pointer">
                      <span>View Cleaning Queue</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                    <button type="button" className="text-[var(--text-tertiary)] hover:text-[var(--text-primary)] cursor-pointer">
                      Dismiss
                    </button>
                  </div>
                </div>

                {/* Insight 3: Reviews */}
                <div 
                  style={{ borderRadius: '16px' }}
                  className="p-4 bg-[var(--bg-left-panel)] border border-black/[0.04] dark:border-white/[0.06] space-y-2"
                >
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider">
                    <span 
                      style={{ borderRadius: '9999px' }}
                      className="px-2.5 py-0.5 bg-sky-500/10 text-sky-600 dark:text-sky-400"
                    >
                      REVIEWS
                    </span>
                    <span className="text-[var(--text-tertiary)]">• AI GENERATED</span>
                  </div>
                  <h4 className="text-sm font-bold text-[var(--text-display)]">
                    Cleanliness sentiment improved +18% this quarter
                  </h4>
                  <p className="text-xs text-[var(--text-tertiary)] leading-relaxed">
                    Highlight in your next marketing campaign — 11 of last 12 10-star reviews mentioned "spotless rooms" unprompted.
                  </p>
                  <div className="pt-1 flex items-center gap-4 text-xs font-semibold">
                    <button type="button" className="text-[#FF385C] hover:underline flex items-center gap-1 cursor-pointer">
                      <span>Open Sentiment Analysis</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                    <button type="button" className="text-[var(--text-tertiary)] hover:text-[var(--text-primary)] cursor-pointer">
                      Dismiss
                    </button>
                  </div>
                </div>

              </div>
            </SectionCard>

            {/* Today's Arrivals (1 Col) */}
            <SectionCard
              title="Today's arrivals"
              subtitle="4 guests · 2 VIP"
              headerAction={
                <button type="button" className="text-xs font-semibold text-[#FF385C] hover:underline cursor-pointer">
                  View all
                </button>
              }
            >

                {/* Arrivals List */}
                <div className="mt-6 space-y-3">
                  
                  {/* Guest 1 */}
                  <div 
                    style={{ borderRadius: '16px' }}
                    className="p-3.5 bg-[var(--bg-left-panel)] border border-black/[0.04] dark:border-white/[0.06] flex items-center justify-between gap-3"
                  >
                    <div className="flex items-center gap-3 overflow-hidden">
                      <div 
                        style={{ borderRadius: '50%' }}
                        className="w-9 h-9 bg-pink-600 text-white font-bold text-xs flex items-center justify-center shrink-0"
                      >
                        AP
                      </div>
                      <div className="truncate">
                        <div className="flex items-center gap-1.5">
                          <span className="text-xs font-bold text-[var(--text-primary)] truncate">
                            Ayu Prameswari
                          </span>
                          <span 
                            style={{ borderRadius: '9999px' }}
                            className="px-2 py-0.2 text-[9px] font-extrabold bg-[#FF385C] text-white"
                          >
                            VIP
                          </span>
                        </div>
                        <div className="text-[11px] text-[var(--text-tertiary)] truncate">
                          Deluxe 301 · Check-in 14:00
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      style={{ borderRadius: '10px' }}
                      className="px-4 py-1.5 bg-[#FF385C] hover:bg-[#E00B41] text-white text-xs font-semibold shrink-0 transition-all cursor-pointer shadow-xs"
                    >
                      Check-in
                    </button>
                  </div>

                  {/* Guest 2 */}
                  <div 
                    style={{ borderRadius: '16px' }}
                    className="p-3.5 bg-[var(--bg-left-panel)] border border-black/[0.04] dark:border-white/[0.06] flex items-center justify-between gap-3"
                  >
                    <div className="flex items-center gap-3 overflow-hidden">
                      <div 
                        style={{ borderRadius: '50%' }}
                        className="w-9 h-9 bg-gray-600 text-white font-bold text-xs flex items-center justify-center shrink-0"
                      >
                        DW
                      </div>
                      <div className="truncate">
                        <div className="text-xs font-bold text-[var(--text-primary)] truncate">
                          Daniel Whitmore
                        </div>
                        <div className="text-[11px] text-[var(--text-tertiary)] truncate">
                          Deluxe 205 · Check-in 15:30
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      style={{ borderRadius: '10px' }}
                      className="px-4 py-1.5 bg-black dark:bg-white text-white dark:text-black text-xs font-semibold shrink-0 transition-all cursor-pointer shadow-xs"
                    >
                      Check-in
                    </button>
                  </div>

                  {/* Guest 3 */}
                  <div 
                    style={{ borderRadius: '16px' }}
                    className="p-3.5 bg-[var(--bg-left-panel)] border border-black/[0.04] dark:border-white/[0.06] flex items-center justify-between gap-3"
                  >
                    <div className="flex items-center gap-3 overflow-hidden">
                      <div 
                        style={{ borderRadius: '50%' }}
                        className="w-9 h-9 bg-purple-600 text-white font-bold text-xs flex items-center justify-center shrink-0"
                      >
                        SA
                      </div>
                      <div className="truncate">
                        <div className="flex items-center gap-1.5">
                          <span className="text-xs font-bold text-[var(--text-primary)] truncate">
                            Sofia Alvarez
                          </span>
                          <span 
                            style={{ borderRadius: '9999px' }}
                            className="px-2 py-0.2 text-[9px] font-extrabold bg-[#FF385C] text-white"
                          >
                            VIP
                          </span>
                        </div>
                        <div className="text-[11px] text-[var(--text-tertiary)] truncate">
                          Suite 501 · Check-in 16:00
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      style={{ borderRadius: '10px' }}
                      className="px-4 py-1.5 bg-black dark:bg-white text-white dark:text-black text-xs font-semibold shrink-0 transition-all cursor-pointer shadow-xs"
                    >
                      Check-in
                    </button>
                  </div>

                  {/* Guest 4 */}
                  <div 
                    style={{ borderRadius: '16px' }}
                    className="p-3.5 bg-[var(--bg-left-panel)] border border-black/[0.04] dark:border-white/[0.06] flex items-center justify-between gap-3"
                  >
                    <div className="flex items-center gap-3 overflow-hidden">
                      <div 
                        style={{ borderRadius: '50%' }}
                        className="w-9 h-9 bg-emerald-600 text-white font-bold text-xs flex items-center justify-center shrink-0"
                      >
                        KT
                      </div>
                      <div className="truncate">
                        <div className="text-xs font-bold text-[var(--text-primary)] truncate">
                          Kenji Tanaka
                        </div>
                        <div className="text-[11px] text-[var(--text-tertiary)] truncate">
                          Standard 105 · Check-in 16:30
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      style={{ borderRadius: '10px' }}
                      className="px-4 py-1.5 bg-black dark:bg-white text-white dark:text-black text-xs font-semibold shrink-0 transition-all cursor-pointer shadow-xs"
                    >
                      Check-in
                    </button>
                  </div>

                </div>
            </SectionCard>

          </div>

    </div>
  );
}
