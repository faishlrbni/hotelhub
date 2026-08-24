'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Sparkles,
  Bot,
  Lightbulb,
  Clock,
  Cpu,
  Plus,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Zap,
  MessageSquare,
  TrendingUp,
  FileText,
  Sliders,
  Send,
  X,
  Play,
} from 'lucide-react';
import { KpiCard } from '@/components/ui/kpi-card';
import { SectionCard } from '@/components/ui/section-card';

interface CopilotItem {
  id: string;
  name: string;
  badge?: string;
  description: string;
  acceptedStats: string;
  approvalRate?: string;
  category: string;
}

const COPILOTS_DATA: CopilotItem[] = [
  {
    id: 'COP-101',
    name: 'Rate optimizer',
    badge: 'LIVE',
    description: 'Recommends daily rate moves · 12 accepted this week',
    acceptedStats: '12 accepted this week',
    category: 'Revenue',
  },
  {
    id: 'COP-102',
    name: 'Review responder',
    badge: 'LIVE',
    description: 'Drafts replies in your tone · 94% approval rate',
    acceptedStats: '94% approval rate',
    approvalRate: '94%',
    category: 'Guest Relations',
  },
  {
    id: 'COP-103',
    name: 'Marketing writer',
    description: 'Generates emails and captions per segment',
    acceptedStats: '28 drafts generated',
    category: 'Marketing',
  },
  {
    id: 'COP-104',
    name: 'Operations analyst',
    description: 'Weekly summary + anomaly detection',
    acceptedStats: 'Running 24/7 background sync',
    category: 'Operations',
  },
  {
    id: 'COP-105',
    name: 'Guest concierge (chat)',
    badge: 'BETA',
    description: 'In-app messaging · Beta',
    acceptedStats: 'Active in-room tablet testing',
    category: 'Guest Experience',
  },
];

export default function AiCenterPage() {
  const [selectedCopilot, setSelectedCopilot] = useState<CopilotItem | null>(null);
  const [promptText, setPromptText] = useState('');
  const [aiResponse, setAiResponse] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const handleTestPrompt = () => {
    if (!promptText.trim()) return;
    setIsGenerating(true);
    setTimeout(() => {
      setAiResponse(
        `[Aurora-3 Hotel Concierge Agent]: "Thank you for your request regarding '${promptText}'. At Aria Hotel Bali, our AI guest experience engine has pre-configured room preferences, automated complimentary room upgrade eligibility check, and notified front desk staff. We're standing by to assist you 24/7."`
      );
      setIsGenerating(false);
    }, 450);
  };

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
            Copilots
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-display)] tracking-tight">
            AI Center
          </h1>
          <p className="text-xs text-[var(--text-tertiary)] mt-1 font-medium">
            Tune the assistants that draft, forecast, and recommend — always in your voice.
          </p>
        </div>

        <div className="flex flex-wrap sm:flex-nowrap items-center gap-2.5 sm:gap-3 w-full sm:w-auto shrink-0">
          <button
            type="button"
            className="btn-primary w-full sm:w-auto flex-1 sm:flex-initial"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>New copilot</span>
          </button>
        </div>
      </div>

      {/* 2. Top 4 KPI Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-3.5">
        <KpiCard
          label="ACTIVE COPILOTS"
          value="7"
          icon={Bot}
          iconBgColor="bg-pink-500/10"
          iconColor="text-[#FF385C]"
          trendText="3 always-on"
          trendIcon={Sparkles}
          subtext="Automated agentic workflows"
        />
        <KpiCard
          label="SUGGESTIONS TODAY"
          value="42"
          icon={Lightbulb}
          iconBgColor="bg-emerald-500/10"
          iconColor="text-[#19B26B]"
          trendText="18 accepted"
          trendIcon={CheckCircle2}
          subtext="High precision recommendations"
        />
        <KpiCard
          label="TIME SAVED (EST.)"
          value="6.4h"
          icon={Clock}
          iconBgColor="bg-amber-500/10"
          iconColor="text-[#F79009]"
          trendText="This week"
          trendIcon={Zap}
          trendColor="text-[#F79009]"
          subtext="Staff productivity gain"
        />
        <KpiCard
          label="MODEL"
          value="Aurora-3"
          icon={Cpu}
          iconBgColor="bg-[#387FF7]/10"
          iconColor="text-[#387FF7] dark:text-[#6099F9]"
          trendText="Fine-tuned on your data"
          subtext="Private hotel-tuned model"
        />
      </div>

      {/* 3. Main Section Card: Copilots List */}
      <SectionCard
        title="Copilots"
        headerAction={
          <Link
            href="/ai/alerts"
            className="text-xs font-semibold text-[#387FF7] dark:text-[#6099F9] hover:underline flex items-center gap-1 cursor-pointer transition-all hover:translate-x-0.5 active:scale-95 group"
          >
            <span>View all</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        }
      >
        <div className="divide-y divide-black/[0.04] dark:divide-white/[0.06]">
          {COPILOTS_DATA.map((copilot) => (
            <div
              key={copilot.id}
              onClick={() => setSelectedCopilot(copilot)}
              className="py-4 flex items-center justify-between gap-4 transition-all hover:bg-black/[0.01] dark:hover:bg-white/[0.01] px-3 rounded-xl cursor-pointer group"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <div 
                  style={{ borderRadius: '10px' }}
                  className="w-10 h-10 bg-[#387FF7]/10 text-[#387FF7] dark:text-[#6099F9] flex items-center justify-center shrink-0 font-bold text-xs"
                >
                  <Bot className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-[var(--text-primary)] group-hover:text-[#FF385C] transition-colors truncate">
                      {copilot.name}
                    </span>
                    {copilot.badge && (
                      <span
                        style={{ borderRadius: '6px' }}
                        className={`px-2 py-0.5 text-[9px] font-extrabold uppercase ${
                          copilot.badge === 'LIVE'
                            ? 'bg-[#19B26B]/15 text-[#19B26B]'
                            : 'bg-amber-500/15 text-amber-500'
                        }`}
                      >
                        {copilot.badge}
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-[var(--text-tertiary)] truncate mt-0.5">
                    {copilot.description}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 shrink-0">
                <div className="text-right hidden sm:block">
                  <div className="text-xs font-semibold text-[var(--text-primary)]">
                    {copilot.category}
                  </div>
                  <div className="text-[10px] text-[var(--text-tertiary)]">
                    {copilot.acceptedStats}
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-[var(--text-tertiary)] group-hover:text-[var(--text-primary)] transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </SectionCard>

      {/* 4. Interactive Copilot Testing Sandbox & Tone Calibration */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left 2 Cols: Copilot Playground */}
        <div className="lg:col-span-2">
          <SectionCard
            title="Copilot Playground"
            subtitle="Test brand voice generation in real-time"
          >
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[var(--text-primary)] mb-1">
                  Sample Prompt or Guest Message
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={promptText}
                    onChange={(e) => setPromptText(e.target.value)}
                    placeholder="e.g. Draft a warm thank-you message for VIP guest Alexander Wright..."
                    style={{ borderRadius: '10px' }}
                    className="flex-1 px-3.5 py-2 text-xs bg-[var(--bg-card)] border border-black/[0.08] dark:border-white/[0.12] text-[var(--text-primary)] placeholder-[var(--text-tertiary)] focus:outline-none focus:ring-2 focus:ring-[#FF385C]/40 transition-all"
                  />
                  <button
                    type="button"
                    onClick={handleTestPrompt}
                    disabled={isGenerating}
                    style={{ borderRadius: '10px' }}
                    className="px-4 py-2 bg-[#FF385C] hover:bg-[#E00B41] text-white text-xs font-semibold shadow-xs flex items-center gap-1.5 transition-all cursor-pointer disabled:opacity-50 shrink-0"
                  >
                    {isGenerating ? <Sparkles className="w-3.5 h-3.5 animate-spin" /> : <Send className="w-3.5 h-3.5" />}
                    <span>Generate</span>
                  </button>
                </div>
              </div>

              {aiResponse && (
                <div className="p-4 bg-[var(--bg-left-panel)] border border-black/[0.06] dark:border-white/[0.08] rounded-xl space-y-2 animate-in fade-in duration-200">
                  <div className="flex items-center justify-between text-xs font-bold text-[var(--text-display)]">
                    <span className="flex items-center gap-1.5 text-[#387FF7] dark:text-[#6099F9]">
                      <Sparkles className="w-4 h-4" /> Aurora-3 Generated Output
                    </span>
                    <span className="text-[10px] text-[var(--text-tertiary)] font-normal">Confidence: 98%</span>
                  </div>
                  <p className="text-xs text-[var(--text-primary)] leading-relaxed italic">
                    {aiResponse}
                  </p>
                </div>
              )}
            </div>
          </SectionCard>
        </div>

        {/* Right Col: Brand Voice Calibration */}
        <div>
          <SectionCard
            title="Voice & Tone Tuning"
            subtitle="Hotel identity presets"
          >
            <div className="space-y-4 text-xs">
              <div>
                <div className="flex justify-between font-bold text-[var(--text-primary)] mb-1">
                  <span>Warmth & Hospitality</span>
                  <span className="text-[#FF385C]">High (85%)</span>
                </div>
                <div className="w-full h-1.5 bg-black/[0.04] dark:bg-white/[0.06] rounded-full overflow-hidden">
                  <div className="h-full bg-[#FF385C] rounded-full w-[85%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between font-bold text-[var(--text-primary)] mb-1">
                  <span>Formality</span>
                  <span className="text-[#387FF7]">Balanced (60%)</span>
                </div>
                <div className="w-full h-1.5 bg-black/[0.04] dark:bg-white/[0.06] rounded-full overflow-hidden">
                  <div className="h-full bg-[#387FF7] rounded-full w-[60%]" />
                </div>
              </div>

              <div className="pt-2 border-t border-black/[0.04] dark:border-white/[0.06] space-y-2">
                <div className="font-bold text-[var(--text-display)]">Language Support</div>
                <div className="flex flex-wrap gap-1.5">
                  {['English (US/UK)', 'Indonesian', 'Mandarin', 'Japanese', 'French'].map((lang) => (
                    <span
                      key={lang}
                      style={{ borderRadius: '6px' }}
                      className="px-2 py-1 bg-[var(--bg-left-panel)] border border-black/[0.06] dark:border-white/[0.08] text-[10px] font-semibold text-[var(--text-primary)]"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </SectionCard>
        </div>

      </div>

      {/* Copilot Config Modal */}
      {selectedCopilot && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4">
          <div 
            style={{ borderRadius: '24px' }}
            className="w-full max-w-lg bg-[var(--bg-card)] border border-black/[0.08] dark:border-white/[0.12] p-6 shadow-2xl space-y-6 animate-in fade-in zoom-in-95 duration-200 relative"
          >
            <button
              type="button"
              onClick={() => setSelectedCopilot(null)}
              style={{ borderRadius: '50%' }}
              className="w-8 h-8 flex items-center justify-center bg-[var(--bg-left-panel)] text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors absolute top-6 right-6 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="border-b border-black/[0.04] dark:border-white/[0.06] pb-4 pr-8">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-mono font-bold text-xs text-[var(--text-tertiary)]">
                  {selectedCopilot.id}
                </span>
                {selectedCopilot.badge && (
                  <span className="px-2 py-0.5 text-[9px] font-extrabold uppercase bg-[#19B26B]/15 text-[#19B26B] rounded-md">
                    {selectedCopilot.badge}
                  </span>
                )}
              </div>
              <h3 className="text-lg font-bold text-[var(--text-display)]">
                {selectedCopilot.name}
              </h3>
              <p className="text-xs text-[var(--text-tertiary)] mt-1">
                {selectedCopilot.description}
              </p>
            </div>

            <div className="space-y-3">
              <div className="p-3.5 bg-[var(--bg-left-panel)] rounded-xl border border-black/[0.04] dark:border-white/[0.06] text-xs space-y-2">
                <div className="flex justify-between">
                  <span className="text-[var(--text-tertiary)]">Category</span>
                  <span className="font-semibold text-[var(--text-primary)]">{selectedCopilot.category}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--text-tertiary)]">Activity & Status</span>
                  <span className="font-semibold text-[var(--text-primary)]">{selectedCopilot.acceptedStats}</span>
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setSelectedCopilot(null)}
                style={{ borderRadius: '10px' }}
                className="px-4 py-2 bg-[var(--bg-left-panel)] border border-black/[0.08] dark:border-white/[0.12] text-xs font-semibold text-[var(--text-primary)] hover:bg-black/[0.05] transition-all cursor-pointer"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => {
                  const name = selectedCopilot.name;
                  setSelectedCopilot(null);
                  setToastMessage(`✓ ${name} configuration saved successfully.`);
                  setTimeout(() => setToastMessage(''), 4500);
                }}
                style={{ borderRadius: '10px' }}
                className="px-4 py-2 bg-[#FF385C] text-white text-xs font-semibold shadow-xs hover:bg-[#E00B41] transition-all cursor-pointer"
              >
                Save Settings
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
