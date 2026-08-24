'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Building2, 
  Sparkles, 
  TrendingUp, 
  BedDouble, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  ChevronDown, 
  ChevronUp, 
  Moon, 
  Sun, 
  UserCheck, 
  BarChart3, 
  Layers, 
  Bot, 
  Zap,
  Clock,
  Users,
  Lock,
  ArrowUpRight,
  Check
} from 'lucide-react';

export default function LandingPage() {
  const [activeWorkspaceTab, setActiveWorkspaceTab] = useState<'occupancy' | 'ai' | 'housekeeping'>('occupancy');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };

  const faqList = [
    {
      q: 'Do I need to migrate my PMS?',
      a: 'No. HotelHub sits on top of the numbers your team already tracks and gives everyone one shared view without disrupting your current PMS setup.'
    },
    {
      q: 'Who can see what?',
      a: 'Access is scoped per property with separate, granular roles for front desk, housekeeping staff, revenue managers, and executive leadership.'
    },
    {
      q: 'How long does setup take?',
      a: 'Create an account, add your property details, and invite your team — most properties are fully live and operational the same morning.'
    }
  ];

  return (
    <div className="min-h-screen bg-[var(--bg-canvas)] text-[var(--text-primary)] transition-colors duration-200 selection:bg-[#FF385C]/20 selection:text-[#FF385C]">
      
      {/* 1. Sticky Navigation Bar */}
      <header className="sticky top-0 z-50 bg-[var(--bg-canvas)]/80 backdrop-blur-md border-b border-black/[0.06] dark:border-white/[0.08] transition-all">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-4">
          
          {/* Logo & Brand Title */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#FF385C] to-[#FF6B8B] flex items-center justify-center shadow-md shadow-[#FF385C]/30 group-hover:scale-105 transition-transform">
              <Building2 className="w-5 h-5 text-white" />
            </div>
            <span className="font-extrabold text-lg sm:text-xl text-[var(--text-display)] tracking-tight">
              HotelHub
            </span>
          </Link>

          {/* Desktop Anchor Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-semibold text-[var(--text-tertiary)]">
            <a href="#workspace" className="hover:text-[var(--text-primary)] transition-colors">Workspace</a>
            <a href="#modules" className="hover:text-[var(--text-primary)] transition-colors">Modules</a>
            <a href="#insights" className="hover:text-[var(--text-primary)] transition-colors">How it works</a>
            <a href="#faq" className="hover:text-[var(--text-primary)] transition-colors">FAQ</a>
          </nav>

          {/* Action Buttons & Theme Switcher */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <button
              type="button"
              onClick={toggleDarkMode}
              aria-label="Toggle Theme"
              className="w-9 h-9 rounded-xl bg-[var(--bg-card)] border border-black/[0.08] dark:border-white/[0.12] flex items-center justify-center text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-all cursor-pointer"
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
            </button>

            <Link href="/login" className="btn-secondary">
              Log in
            </Link>

            <Link href="/signup" className="btn-primary">
              Create account
            </Link>
          </div>
        </div>
      </header>

      {/* 2. Hero Section */}
      <section className="relative pt-12 sm:pt-20 pb-16 sm:pb-24 overflow-hidden border-b border-black/[0.04] dark:border-white/[0.06]">
        {/* Subtle Background Glow Elements */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-[#FF385C]/15 via-[#387FF7]/10 to-transparent blur-3xl pointer-events-none rounded-full" />

        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6 sm:space-y-8">
          
          {/* Protected Workspace Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--bg-card)] border border-black/[0.08] dark:border-white/[0.12] shadow-xs text-xs font-semibold text-[var(--text-tertiary)] animate-in fade-in slide-in-from-bottom-3 duration-500">
            <span className="w-2 h-2 rounded-full bg-[#19B26B] animate-pulse" />
            <span>Protected workspace — sign in with your HotelHub account</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[var(--text-display)] tracking-tight leading-[1.1] max-w-4xl mx-auto">
            Run your property with a <span className="bg-gradient-to-r from-[#FF385C] via-[#FF6B8B] to-[#387FF7] bg-clip-text text-transparent">calm, clear view.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-xl text-[var(--text-tertiary)] max-w-2xl mx-auto font-medium leading-relaxed">
            One workspace for reservations, housekeeping, revenue and the AI signals that keep your team a step ahead.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
            <Link href="/signup" className="btn-primary w-full sm:w-auto text-sm px-7 py-3 h-12 shadow-lg shadow-[#FF385C]/25">
              <span>Create an account</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
            <Link href="/login" className="btn-secondary w-full sm:w-auto text-sm px-6 py-3 h-12">
              <span>Log in to workspace</span>
            </Link>
          </div>

          {/* Micro Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-[var(--text-tertiary)] pt-2">
            <div className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-[#19B26B]" />
              <span>No card required</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-[#19B26B]" />
              <span>Roles per property</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-[#19B26B]" />
              <span>Live in a morning</span>
            </div>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto pt-8">
            <div className="p-4 rounded-2xl bg-[var(--bg-card)] border border-black/[0.06] dark:border-white/[0.08] text-center shadow-xs">
              <div className="text-xl sm:text-2xl font-extrabold text-[var(--text-display)]">1 screen</div>
              <div className="text-xs text-[var(--text-tertiary)] mt-0.5 font-medium">Front desk, housekeeping & revenue</div>
            </div>
            <div className="p-4 rounded-2xl bg-[var(--bg-card)] border border-black/[0.06] dark:border-white/[0.08] text-center shadow-xs">
              <div className="text-xl sm:text-2xl font-extrabold text-[var(--text-display)]">&lt; 5 min</div>
              <div className="text-xs text-[var(--text-tertiary)] mt-0.5 font-medium">Morning handover, start to finish</div>
            </div>
            <div className="p-4 rounded-2xl bg-[var(--bg-card)] border border-black/[0.06] dark:border-white/[0.08] text-center shadow-xs">
              <div className="text-xl sm:text-2xl font-extrabold text-[var(--text-display)]">24/7</div>
              <div className="text-xs text-[var(--text-tertiary)] mt-0.5 font-medium">Live pace & occupancy signals</div>
            </div>
            <div className="p-4 rounded-2xl bg-[var(--bg-card)] border border-black/[0.06] dark:border-white/[0.08] text-center shadow-xs">
              <div className="text-xl sm:text-2xl font-extrabold text-[var(--text-display)]">3 roles</div>
              <div className="text-xs text-[var(--text-tertiary)] mt-0.5 font-medium">Scoped access per property</div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. The Workspace Section (#workspace) */}
      <section id="workspace" className="py-16 sm:py-24 border-b border-black/[0.04] dark:border-white/[0.06]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FF385C] bg-[#FF385C]/10 px-3 py-1 rounded-full">
              The Workspace
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[var(--text-display)] tracking-tight">
              Everything the front desk, housekeeping and revenue teams need — on one screen.
            </h2>
          </div>

          {/* Interactive Workspace Live Demo Feature Switcher */}
          <div className="bg-[var(--bg-card)] border border-black/[0.08] dark:border-white/[0.12] rounded-3xl p-6 sm:p-8 shadow-2xl space-y-8">
            
            {/* Tab Controls */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-1.5 bg-[var(--bg-left-panel)] rounded-2xl border border-black/[0.06] dark:border-white/[0.08]">
              <button
                type="button"
                onClick={() => setActiveWorkspaceTab('occupancy')}
                className={`p-4 rounded-xl text-left transition-all cursor-pointer ${
                  activeWorkspaceTab === 'occupancy'
                    ? 'bg-[var(--bg-card)] text-[var(--text-display)] shadow-md border border-black/[0.06] dark:border-white/[0.08]'
                    : 'text-[var(--text-tertiary)] hover:text-[var(--text-primary)]'
                }`}
              >
                <div className="flex items-center gap-2 font-bold text-sm mb-1">
                  <TrendingUp className="w-4 h-4 text-[#19B26B]" />
                  <span>Live occupancy, ADR & RevPAR</span>
                </div>
                <p className="text-xs text-[var(--text-tertiary)] leading-relaxed">
                  Every number your team argues about, in one live view. No exports, no stale spreadsheets.
                </p>
              </button>

              <button
                type="button"
                onClick={() => setActiveWorkspaceTab('ai')}
                className={`p-4 rounded-xl text-left transition-all cursor-pointer ${
                  activeWorkspaceTab === 'ai'
                    ? 'bg-[var(--bg-card)] text-[var(--text-display)] shadow-md border border-black/[0.06] dark:border-white/[0.08]'
                    : 'text-[var(--text-tertiary)] hover:text-[var(--text-primary)]'
                }`}
              >
                <div className="flex items-center gap-2 font-bold text-sm mb-1">
                  <Sparkles className="w-4 h-4 text-[#FF385C]" />
                  <span>AI insights in plain language</span>
                </div>
                <p className="text-xs text-[var(--text-tertiary)] leading-relaxed">
                  Signals written the way a colleague would say them — what changed, why, and what to do next.
                </p>
              </button>

              <button
                type="button"
                onClick={() => setActiveWorkspaceTab('housekeeping')}
                className={`p-4 rounded-xl text-left transition-all cursor-pointer ${
                  activeWorkspaceTab === 'housekeeping'
                    ? 'bg-[var(--bg-card)] text-[var(--text-display)] shadow-md border border-black/[0.06] dark:border-white/[0.08]'
                    : 'text-[var(--text-tertiary)] hover:text-[var(--text-primary)]'
                }`}
              >
                <div className="flex items-center gap-2 font-bold text-sm mb-1">
                  <BedDouble className="w-4 h-4 text-[#387FF7]" />
                  <span>Housekeeping & arrivals together</span>
                </div>
                <p className="text-xs text-[var(--text-tertiary)] leading-relaxed">
                  Room status, turnovers and today's arrivals side by side, so nothing gets handed over twice.
                </p>
              </button>
            </div>

            {/* Interactive Live Screen Mockup Display */}
            <div className="p-6 sm:p-8 bg-[var(--bg-left-panel)] rounded-2xl border border-black/[0.06] dark:border-white/[0.08] min-h-[320px] flex flex-col justify-between">
              
              {activeWorkspaceTab === 'occupancy' && (
                <div className="space-y-6 animate-in fade-in duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-black/[0.06] dark:border-white/[0.08] pb-4">
                    <div>
                      <div className="text-xs text-[var(--text-tertiary)] font-bold uppercase tracking-wider">Aria Hotel Bali · Live Today</div>
                      <div className="text-xl sm:text-2xl font-extrabold text-[var(--text-display)] mt-0.5">Real-Time Performance Overview</div>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-[#19B26B]/10 text-[#19B26B] text-xs font-bold flex items-center gap-1.5 self-start sm:self-auto">
                      <span className="w-2 h-2 rounded-full bg-[#19B26B] animate-pulse" />
                      Live Data Sync
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="p-4 bg-[var(--bg-card)] rounded-xl border border-black/[0.06] dark:border-white/[0.08]">
                      <div className="text-xs text-[var(--text-tertiary)] font-semibold">Occupancy Rate</div>
                      <div className="text-2xl sm:text-3xl font-extrabold text-[var(--text-display)] mt-1">88.4%</div>
                      <div className="text-xs text-[#19B26B] font-bold mt-1">↑ +6.2% vs last week</div>
                    </div>
                    <div className="p-4 bg-[var(--bg-card)] rounded-xl border border-black/[0.06] dark:border-white/[0.08]">
                      <div className="text-xs text-[var(--text-tertiary)] font-semibold">Average Daily Rate (ADR)</div>
                      <div className="text-2xl sm:text-3xl font-extrabold text-[var(--text-display)] mt-1">Rp 1,420,000</div>
                      <div className="text-xs text-[#19B26B] font-bold mt-1">↑ +14.2% yield</div>
                    </div>
                    <div className="p-4 bg-[var(--bg-card)] rounded-xl border border-black/[0.06] dark:border-white/[0.08]">
                      <div className="text-xs text-[var(--text-tertiary)] font-semibold">RevPAR</div>
                      <div className="text-2xl sm:text-3xl font-extrabold text-[var(--text-display)] mt-1">Rp 1,255,280</div>
                      <div className="text-xs text-[#19B26B] font-bold mt-1">Target exceeded</div>
                    </div>
                  </div>
                </div>
              )}

              {activeWorkspaceTab === 'ai' && (
                <div className="space-y-4 animate-in fade-in duration-300">
                  <div className="flex items-center justify-between border-b border-black/[0.06] dark:border-white/[0.08] pb-4">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-[#FF385C]" />
                      <div className="text-lg font-bold text-[var(--text-display)]">AI Autonomous Signals Feed</div>
                    </div>
                    <span className="text-xs font-semibold text-[var(--text-tertiary)]">Updated 2m ago</span>
                  </div>

                  <div className="space-y-3">
                    <div className="p-4 bg-[var(--bg-card)] rounded-xl border border-black/[0.06] dark:border-white/[0.08] flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-[#FF385C]/10 text-[#FF385C] shrink-0">
                        <Sparkles className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[var(--text-display)]">VIP Arrival Signal — Alexander Wright</div>
                        <div className="text-xs text-[var(--text-tertiary)] mt-0.5">
                          "Platinum VIP Alexander Wright arrives at 14:30. Room #102 is inspected & ready with high-floor ocean preference pre-configured."
                        </div>
                      </div>
                    </div>

                    <div className="p-4 bg-[var(--bg-card)] rounded-xl border border-black/[0.06] dark:border-white/[0.08] flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-[#387FF7]/10 text-[#387FF7] shrink-0">
                        <TrendingUp className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[var(--text-display)]">Yield Rate Recommendation</div>
                        <div className="text-xs text-[var(--text-tertiary)] mt-0.5">
                          "Saturday occupancy reached 92%. Recommend raising Deluxe Ocean base rate from Rp 1.45M to Rp 1.68M to capture Rp 4.2M extra yield."
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeWorkspaceTab === 'housekeeping' && (
                <div className="space-y-4 animate-in fade-in duration-300">
                  <div className="flex items-center justify-between border-b border-black/[0.06] dark:border-white/[0.08] pb-4">
                    <div className="flex items-center gap-2">
                      <BedDouble className="w-5 h-5 text-[#387FF7]" />
                      <div className="text-lg font-bold text-[var(--text-display)]">Turnover Queue & Arrival Sync</div>
                    </div>
                    <span className="text-xs font-bold text-[#19B26B]">62 Inspected & Ready</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                    <div className="p-3.5 bg-amber-500/10 rounded-xl border border-amber-500/20">
                      <div className="font-bold text-amber-600 dark:text-amber-400">8 Rooms Dirty / Checkout</div>
                      <div className="text-[11px] text-[var(--text-tertiary)] mt-1">Turnover team dispatched (Dewi K. & Maria)</div>
                    </div>
                    <div className="p-3.5 bg-blue-500/10 rounded-xl border border-blue-500/20">
                      <div className="font-bold text-blue-600 dark:text-blue-400">12 Cleaning in Progress</div>
                      <div className="text-[11px] text-[var(--text-tertiary)] mt-1">ETA for all: before 14:00 guest arrivals</div>
                    </div>
                    <div className="p-3.5 bg-emerald-500/10 rounded-xl border border-emerald-500/20">
                      <div className="font-bold text-[#19B26B]">62 Inspected & Ready</div>
                      <div className="text-[11px] text-[var(--text-tertiary)] mt-1">Front desk keycards ready for check-in</div>
                    </div>
                  </div>
                </div>
              )}

              <div className="pt-6 flex justify-between items-center text-xs text-[var(--text-tertiary)] border-t border-black/[0.04] dark:border-white/[0.06]">
                <span>HotelHub Unified Property Management OS</span>
                <Link href="/dashboard" className="text-[#FF385C] font-bold hover:underline flex items-center gap-1">
                  <span>Explore full dashboard</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Four Modules Section (#modules) */}
      <section id="modules" className="py-16 sm:py-24 border-b border-black/[0.04] dark:border-white/[0.06]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#387FF7] bg-[#387FF7]/10 px-3 py-1 rounded-full">
              Core Modules
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[var(--text-display)] tracking-tight">
              Four modules, one shared source of truth.
            </h2>
            <p className="text-sm text-[var(--text-tertiary)] font-medium">
              Each team gets the view they need — and everyone sees the same numbers underneath.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Module 1: Reservations */}
            <div className="p-6 bg-[var(--bg-card)] border border-black/[0.08] dark:border-white/[0.12] rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 space-y-4 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-pink-500/10 text-[#FF385C] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <UserCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[var(--text-display)]">Reservations</h3>
                <p className="text-xs text-[var(--text-tertiary)] leading-relaxed">
                  Arrivals, departures and stay-overs for today, with pace against last week.
                </p>
              </div>
              <Link href="/reservations" className="text-xs font-bold text-[#FF385C] hover:underline flex items-center gap-1 pt-2">
                <span>View Reservations</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Module 2: Housekeeping */}
            <div className="p-6 bg-[var(--bg-card)] border border-black/[0.08] dark:border-white/[0.12] rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 space-y-4 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-[#387FF7] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <BedDouble className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[var(--text-display)]">Housekeeping</h3>
                <p className="text-xs text-[var(--text-tertiary)] leading-relaxed">
                  Clean, dirty, inspected — updated by the floor, visible at the desk instantly.
                </p>
              </div>
              <Link href="/housekeeping" className="text-xs font-bold text-[#387FF7] hover:underline flex items-center gap-1 pt-2">
                <span>View Housekeeping</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Module 3: Revenue */}
            <div className="p-6 bg-[var(--bg-card)] border border-black/[0.08] dark:border-white/[0.12] rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 space-y-4 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-[#19B26B] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[var(--text-display)]">Revenue</h3>
                <p className="text-xs text-[var(--text-tertiary)] leading-relaxed">
                  ADR and RevPAR tracked nightly so soft dates surface while you can still act.
                </p>
              </div>
              <Link href="/revenue" className="text-xs font-bold text-[#19B26B] hover:underline flex items-center gap-1 pt-2">
                <span>View Revenue</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Module 4: AI Signals */}
            <div className="p-6 bg-[var(--bg-card)] border border-black/[0.08] dark:border-white/[0.12] rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 space-y-4 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[var(--text-display)]">AI Signals</h3>
                <p className="text-xs text-[var(--text-tertiary)] leading-relaxed">
                  Plain-language notes on pace gaps, turnover risk and unusual cancellations.
                </p>
              </div>
              <Link href="/ai" className="text-xs font-bold text-amber-500 hover:underline flex items-center gap-1 pt-2">
                <span>View AI Center</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* 5. How It Works Section (#insights) */}
      <section id="insights" className="py-16 sm:py-24 border-b border-black/[0.04] dark:border-white/[0.06]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#19B26B] bg-[#19B26B]/10 px-3 py-1 rounded-full">
              How It Works
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[var(--text-display)] tracking-tight">
              A step ahead, every morning.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="p-8 bg-[var(--bg-card)] border border-black/[0.08] dark:border-white/[0.12] rounded-3xl shadow-sm space-y-4 relative">
              <div className="text-4xl font-black text-[#FF385C]/20 font-mono">01</div>
              <h3 className="text-lg font-bold text-[var(--text-display)]">Sign in to your property</h3>
              <p className="text-xs text-[var(--text-tertiary)] leading-relaxed font-medium">
                One workspace per property, with roles for front desk, housekeeping and management.
              </p>
            </div>

            <div className="p-8 bg-[var(--bg-card)] border border-black/[0.08] dark:border-white/[0.12] rounded-3xl shadow-sm space-y-4 relative">
              <div className="text-4xl font-black text-[#387FF7]/20 font-mono">02</div>
              <h3 className="text-lg font-bold text-[var(--text-display)]">Watch the live numbers</h3>
              <p className="text-xs text-[var(--text-tertiary)] leading-relaxed font-medium">
                Occupancy, ADR and RevPAR update as reservations and room status change.
              </p>
            </div>

            <div className="p-8 bg-[var(--bg-card)] border border-black/[0.08] dark:border-white/[0.12] rounded-3xl shadow-sm space-y-4 relative">
              <div className="text-4xl font-black text-amber-500/20 font-mono">03</div>
              <h3 className="text-lg font-bold text-[var(--text-display)]">Read the AI signals</h3>
              <p className="text-xs text-[var(--text-tertiary)] leading-relaxed font-medium">
                Plain-language insights flag soft nights, pace gaps and turnover risk before guests feel them.
              </p>
            </div>

          </div>

          {/* Testimonial Banner */}
          <div className="p-8 sm:p-12 bg-gradient-to-tr from-[var(--bg-card)] to-[var(--bg-left-panel)] border border-black/[0.08] dark:border-white/[0.12] rounded-3xl shadow-xl max-w-4xl mx-auto text-center space-y-4 relative overflow-hidden">
            <div className="text-3xl text-[#FF385C] font-serif">“</div>
            <p className="text-base sm:text-xl font-medium text-[var(--text-display)] italic leading-relaxed">
              "Our team stopped chasing numbers. Occupancy, housekeeping and arrivals all live in the same place now — mornings are genuinely calm."
            </p>
            <div>
              <div className="font-extrabold text-sm text-[var(--text-display)]">Julian A. Ross</div>
              <div className="text-xs text-[var(--text-tertiary)]">Managing Director, The Hearth Collection</div>
            </div>
          </div>

        </div>
      </section>

      {/* 6. FAQ Section (#faq) */}
      <section id="faq" className="py-16 sm:py-24 border-b border-black/[0.04] dark:border-white/[0.06]">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--text-tertiary)]">FAQ</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[var(--text-display)] tracking-tight">
              Questions, answered.
            </h2>
          </div>

          <div className="space-y-3">
            {faqList.map((item, idx) => (
              <div 
                key={idx}
                className="bg-[var(--bg-card)] border border-black/[0.08] dark:border-white/[0.12] rounded-2xl overflow-hidden shadow-xs transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                  className="w-full p-5 text-left font-bold text-sm sm:text-base text-[var(--text-display)] flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span>{item.q}</span>
                  {openFaqIndex === idx ? <ChevronUp className="w-4 h-4 text-[#FF385C]" /> : <ChevronDown className="w-4 h-4 text-[var(--text-tertiary)]" />}
                </button>
                {openFaqIndex === idx && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-[var(--text-tertiary)] leading-relaxed border-t border-black/[0.04] dark:border-white/[0.06] pt-3 animate-in fade-in duration-200">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. Bottom CTA Section */}
      <section className="py-16 sm:py-24 relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-16 rounded-3xl bg-gradient-to-tr from-[#FF385C] via-[#FF5274] to-[#387FF7] text-white shadow-2xl text-center space-y-6 relative overflow-hidden">
            
            <div className="max-w-2xl mx-auto space-y-3 relative z-10">
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
                Welcome back, anytime.
              </h2>
              <p className="text-sm sm:text-lg text-white/90 font-medium">
                Log in to your property workspace, or create an account and bring your team along.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 relative z-10 pt-2">
              <Link href="/signup" className="h-12 px-8 bg-white text-[#FF385C] hover:bg-white/90 text-sm font-bold rounded-xl shadow-lg flex items-center justify-center gap-2 transition-all cursor-pointer">
                <span>Create an account</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/login" className="h-12 px-7 bg-black/20 hover:bg-black/30 border border-white/30 text-white text-sm font-semibold rounded-xl flex items-center justify-center transition-all cursor-pointer">
                <span>Log in to workspace</span>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* 8. Footer */}
      <footer className="bg-[var(--bg-card)] border-t border-black/[0.06] dark:border-white/[0.08] py-12 sm:py-16">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-3 md:col-span-1">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#FF385C] to-[#FF6B8B] flex items-center justify-center shadow-md">
                  <Building2 className="w-4 h-4 text-white" />
                </div>
                <span className="font-extrabold text-lg text-[var(--text-display)] tracking-tight">HotelHub</span>
              </div>
              <p className="text-xs text-[var(--text-tertiary)] font-medium leading-relaxed">
                A calm, clear workspace for hotel teams.
              </p>
            </div>

            <div>
              <div className="text-xs font-bold text-[var(--text-display)] uppercase tracking-wider mb-3">Product</div>
              <ul className="space-y-2 text-xs text-[var(--text-tertiary)] font-medium">
                <li><a href="#workspace" className="hover:text-[var(--text-primary)]">Workspace</a></li>
                <li><a href="#modules" className="hover:text-[var(--text-primary)]">Modules</a></li>
                <li><a href="#insights" className="hover:text-[var(--text-primary)]">How it works</a></li>
              </ul>
            </div>

            <div>
              <div className="text-xs font-bold text-[var(--text-display)] uppercase tracking-wider mb-3">Account</div>
              <ul className="space-y-2 text-xs text-[var(--text-tertiary)] font-medium">
                <li><Link href="/login" className="hover:text-[var(--text-primary)]">Log in</Link></li>
                <li><Link href="/signup" className="hover:text-[var(--text-primary)]">Create account</Link></li>
                <li><a href="#faq" className="hover:text-[var(--text-primary)]">FAQ</a></li>
              </ul>
            </div>

            <div>
              <div className="text-xs font-bold text-[var(--text-display)] uppercase tracking-wider mb-3">Company</div>
              <ul className="space-y-2 text-xs text-[var(--text-tertiary)] font-medium">
                <li><span className="cursor-pointer hover:text-[var(--text-primary)]">Privacy</span></li>
                <li><span className="cursor-pointer hover:text-[var(--text-primary)]">Security</span></li>
                <li><span className="cursor-pointer hover:text-[var(--text-primary)]">Support</span></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-black/[0.04] dark:border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--text-tertiary)]">
            <div>© 2026 HotelHub · Demo environment</div>
            <div className="flex items-center gap-4 font-medium">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
