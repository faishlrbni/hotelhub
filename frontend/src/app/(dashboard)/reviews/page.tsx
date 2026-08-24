'use client';

import { useState } from 'react';
import { 
  Star, 
  Sparkles, 
  MessageSquare, 
  ThumbsUp, 
  TrendingUp, 
  ArrowUpRight, 
  ChevronRight, 
  Filter, 
  CheckCircle2, 
  X, 
  Copy, 
  Send,
  ExternalLink,
  Search
} from 'lucide-react';
import { KpiCard } from '@/components/ui/kpi-card';
import { SectionCard } from '@/components/ui/section-card';

interface ReviewItem {
  id: string;
  headline: string;
  platform: string;
  author: string;
  rating: number;
  time: string;
  text: string;
  sentiment: 'POSITIVE' | 'NEUTRAL' | 'NEGATIVE';
  reply: string | null;
  categoryTags: string[];
}

const REVIEWS_DATA: ReviewItem[] = [
  {
    id: 'REV-101',
    headline: 'Spotless rooms and warm staff',
    platform: 'Booking.com',
    author: 'Ayu Prameswari',
    rating: 5.0,
    time: '2h ago',
    text: 'Amazing stay! The room turnover was exceptionally fast, the bedding felt luxurious, and the front desk staff was so welcoming.',
    sentiment: 'POSITIVE',
    reply: 'Thank you Ayu! We look forward to welcoming you back to Aris Hotel Bali on your next visit.',
    categoryTags: ['Cleanliness', 'Staff Service', 'Room Quality']
  },
  {
    id: 'REV-102',
    headline: 'Ocean suite was worth every rupiah',
    platform: 'Google',
    author: 'Sofia Alvarez',
    rating: 5.0,
    time: '6h ago',
    text: 'Breathtaking ocean views from the balcony. The dynamic room perks and complimentary breakfast exceeded our expectations.',
    sentiment: 'POSITIVE',
    reply: null,
    categoryTags: ['Ocean View', 'Value', 'Breakfast']
  },
  {
    id: 'REV-103',
    headline: 'Check-in took longer than expected',
    platform: 'Expedia',
    author: 'Kenji Tanaka',
    rating: 3.5,
    time: 'Yesterday',
    text: 'The suite itself was very clean and comfortable, but check-in at 15:00 took almost 25 minutes due to front desk queue.',
    sentiment: 'NEUTRAL',
    reply: null,
    categoryTags: ['Check-in Pace', 'Cleanliness']
  },
  {
    id: 'REV-104',
    headline: 'Perfect anniversary getaway',
    platform: 'TripAdvisor',
    author: 'Daniel Whitmore',
    rating: 5.0,
    time: '2 days ago',
    text: 'Staff arranged surprise swan towels and tropical fruit basket for our wedding anniversary. Impeccable hospitality!',
    sentiment: 'POSITIVE',
    reply: 'Happy Anniversary Daniel! It was our absolute pleasure celebrating this special milestone with you.',
    categoryTags: ['Special Occasion', 'Hospitality']
  },
  {
    id: 'REV-105',
    headline: 'Breakfast options could be broader',
    platform: 'Direct',
    author: 'Priya Nair',
    rating: 4.0,
    time: '3 days ago',
    text: 'Great pool view and comfortable beds. Would appreciate more vegan and gluten-free items on the breakfast buffet.',
    sentiment: 'NEUTRAL',
    reply: null,
    categoryTags: ['Breakfast', 'Amenities']
  }
];

import { useHotelStore } from '@/lib/store';

export default function ReviewsPage() {
  const { reviews, replyToReview } = useHotelStore() as any;
  const [selectedReview, setSelectedReview] = useState<any | null>(null);
  const [activeTab, setActiveTab] = useState<'All' | 'POSITIVE' | 'NEUTRAL' | 'Needs Reply'>('All');
  const [aiTone, setAiTone] = useState<'Warm' | 'Formal' | 'Concise'>('Warm');
  const [aiDraftText, setAiDraftText] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const filteredReviews = reviews.filter((r: any) => {
    if (activeTab === 'All') return true;
    if (activeTab === 'Needs Reply') return !r.reply;
    return r.sentiment === activeTab;
  });

  const handleOpenAiComposer = (review: any) => {
    setSelectedReview(review);
    setIsGenerating(true);
    setTimeout(() => {
      setAiDraftText(
        `Dear ${review.author},\n\nThank you so much for taking the time to share your feedback! We are thrilled to hear your thoughts regarding your stay at Aria Hotel Bali.\n\nWe hope to welcome you back again very soon!\n\nWarm regards,\nHotel Management Team`
      );
      setIsGenerating(false);
    }, 400);
  };

  const handleSendReply = () => {
    if (!selectedReview) return;
    replyToReview(selectedReview.id, aiDraftText);
    setSelectedReview(null);
    setAiDraftText('');
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6 max-w-[1600px] mx-auto min-h-screen">
      
      {/* 1. Page Header (from Screenshot 1) */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-semibold text-[var(--text-tertiary)] uppercase tracking-wider block mb-1">
            Reputation
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-display)] tracking-tight">
            Reviews
          </h1>
          <p className="text-xs text-[var(--text-tertiary)] mt-1 font-medium">
            Read what guests are saying, spot themes early, and reply with confidence.
          </p>
        </div>

        <div className="flex flex-wrap sm:flex-nowrap items-center gap-2.5 sm:gap-3 w-full sm:w-auto shrink-0">
          <button
            type="button"
            onClick={() => handleOpenAiComposer(reviews.find((r: any) => !r.reply) || reviews[0])}
            className="btn-primary w-full sm:w-auto flex-1 sm:flex-initial"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Draft reply with AI</span>
          </button>
        </div>
      </div>

      {/* 2. Top KPI Cards (4 Grid - Reusable Component Standard) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-3.5">
        <KpiCard 
          label="OVERALL RATING"
          value="4.7"
          icon={Star}
          iconBgColor="bg-rose-500/10"
          iconColor="text-rose-500"
          trendText="+0.3 vs last month"
          subtext="Across 5 digital channels"
        />
        <KpiCard 
          label="REVIEWS THIS WEEK"
          value="23"
          icon={MessageSquare}
          iconBgColor="bg-emerald-500/10"
          iconColor="text-[#19B26B]"
          trendText="+5 vs last week"
          subtext="100% verified guest feedback"
        />
        <KpiCard 
          label="CLEANLINESS SENTIMENT"
          value="+18%"
          icon={ThumbsUp}
          iconBgColor="bg-amber-500/10"
          iconColor="text-amber-500"
          trendText="+18% QoQ improvement"
          subtext="Housekeeping turnover score"
        />
        <KpiCard 
          label="RESPONSE RATE"
          value="94%"
          icon={CheckCircle2}
          iconBgColor="bg-sky-500/10"
          iconColor="text-sky-600 dark:text-sky-400"
          trendText="+4% vs target"
          subtext="Average reply time < 6h"
        />
      </div>

      {/* 3. Main Section: Latest Reviews Master Card (Reusable Component Standard) */}
      <SectionCard
        title="Latest reviews"
        subtitle="Live feedback feed across Google, Booking.com, TripAdvisor & Expedia"
        headerAction={
          <div className="flex items-center gap-2 flex-wrap">
            {(['All', 'Needs Reply', 'POSITIVE', 'NEUTRAL'] as const).map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                style={{ borderRadius: '9999px' }}
                className={`px-3 py-1.5 text-xs font-semibold transition-all cursor-pointer ${
                  activeTab === tab
                    ? 'bg-[#181D27] dark:bg-white text-white dark:text-[#181D27] shadow-xs'
                    : 'bg-black/[0.03] dark:bg-white/[0.04] text-[var(--text-tertiary)] hover:bg-black/[0.06] dark:hover:bg-white/[0.08]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        }
      >
        {/* Reviews Feed List */}
        <div className="divide-y divide-black/[0.04] dark:divide-white/[0.06]">
          {filteredReviews.map((review: any) => (
            <div 
              key={review.id}
              className="py-5 space-y-3 transition-colors hover:bg-black/[0.005] dark:hover:bg-white/[0.005] px-2 rounded-xl"
            >
              {/* Row Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-bold text-sm text-[var(--text-primary)]">
                    {review.headline ? `"${review.headline}" — ${review.platform || review.channel || 'Verified Review'}` : `${review.author} · ${review.channel || review.platform || 'Verified Review'}`}
                  </span>
                  <span 
                    style={{ borderRadius: '6px' }}
                    className={`px-2 py-0.5 text-[9px] font-extrabold uppercase tracking-wider ${
                      review.sentiment === 'POSITIVE'
                        ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                        : 'bg-amber-500/10 text-amber-600 dark:text-amber-400'
                    }`}
                  >
                    {review.sentiment}
                  </span>
                </div>

                <div className="flex items-center gap-1.5 shrink-0">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-3.5 h-3.5 ${
                        i < Math.floor(review.rating)
                          ? 'fill-amber-400 text-amber-400'
                          : 'text-gray-300 dark:text-gray-700'
                      }`} 
                    />
                  ))}
                  <span className="text-xs font-bold text-[var(--text-primary)] ml-1">{review.rating.toFixed(1)}</span>
                </div>
              </div>

              {/* Review Text */}
              <p className="text-xs text-[var(--text-primary)] leading-relaxed font-medium">
                {review.comment || review.text}
              </p>

              {/* Sub-line Metadata & Actions */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
                <div className="text-[11px] text-[var(--text-tertiary)] font-medium">
                  {review.author} · {review.date || review.time} · Tags: {(review.tags || review.categoryTags || []).join(', ')}
                </div>

                {review.reply ? (
                  <div 
                    style={{ borderRadius: '12px' }}
                    className="p-3 bg-[var(--bg-left-panel)] border border-black/[0.06] dark:border-white/[0.08] text-xs text-[var(--text-tertiary)] flex-1 max-w-xl"
                  >
                    <span className="font-bold text-[#FF385C]">Response Sent: </span>
                    <span>{review.reply}</span>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => handleOpenAiComposer(review)}
                    style={{ borderRadius: '10px' }}
                    className="px-3.5 py-1.5 bg-[#FF385C]/10 text-[#FF385C] hover:bg-[#FF385C] hover:text-white text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-xs"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>AI Generate Response</span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

      </SectionCard>

      {/* 4. AI Response Composer Modal (Screenshot 2 Fusion) */}
      {selectedReview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200">
          <div 
            style={{ borderRadius: '24px' }}
            className="w-full max-w-xl bg-[var(--bg-card)] border border-black/[0.08] dark:border-white/[0.12] shadow-2xl p-6 sm:p-8 space-y-6 relative"
          >
            <button
              type="button"
              onClick={() => setSelectedReview(null)}
              style={{ borderRadius: '50%' }}
              className="w-8 h-8 flex items-center justify-center bg-[var(--bg-left-panel)] text-[var(--text-tertiary)] hover:text-[var(--text-primary)] hover:bg-black/[0.05] dark:hover:bg-white/[0.08] transition-colors cursor-pointer absolute top-6 right-6"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Modal Header */}
            <div className="border-b border-black/[0.04] dark:border-white/[0.06] pb-4 pr-8">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-bold text-[var(--text-tertiary)]">
                  {selectedReview.platform}
                </span>
                <span className="text-xs font-bold text-amber-500 flex items-center gap-0.5">
                  ★ {selectedReview.rating.toFixed(1)}
                </span>
              </div>
              <h3 className="text-base font-bold text-[var(--text-display)] tracking-tight">
                Draft Response for {selectedReview.author}
              </h3>
              <p className="text-xs text-[var(--text-tertiary)] mt-0.5 italic">
                "{selectedReview.headline}"
              </p>
            </div>

            {/* Tone Selector */}
            <div className="space-y-2">
              <label className="block text-xs font-semibold text-[var(--text-primary)]">AI Tone Style</label>
              <div className="flex items-center gap-2">
                {(['Warm', 'Formal', 'Concise'] as const).map((tone) => (
                  <button
                    key={tone}
                    type="button"
                    onClick={() => {
                      setAiTone(tone);
                      handleOpenAiComposer(selectedReview);
                    }}
                    style={{ borderRadius: '8px' }}
                    className={`px-3 py-1.5 text-xs font-semibold transition-all cursor-pointer ${
                      aiTone === tone
                        ? 'bg-[#FF385C] text-white'
                        : 'bg-[var(--bg-left-panel)] border border-black/[0.06] dark:border-white/[0.08] text-[var(--text-tertiary)] hover:text-[var(--text-primary)]'
                    }`}
                  >
                    {tone}
                  </button>
                ))}
              </div>
            </div>

            {/* Response Textarea */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-[var(--text-primary)]">AI Drafted Reply</span>
                {isGenerating && <span className="text-[#FF385C] font-bold flex items-center gap-1"><Sparkles className="w-3 h-3 animate-spin" /> Generating...</span>}
              </div>
              <textarea
                rows={5}
                value={aiDraftText}
                onChange={(e) => setAiDraftText(e.target.value)}
                style={{ borderRadius: '14px' }}
                className="w-full p-3.5 text-xs bg-[var(--bg-left-panel)] border border-black/[0.08] dark:border-white/[0.12] text-[var(--text-primary)] focus:outline-hidden focus:border-[#FF385C] leading-relaxed"
              />
            </div>

            {/* Modal Actions */}
            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setSelectedReview(null)}
                style={{ borderRadius: '10px' }}
                className="h-9 px-4 text-xs font-semibold bg-[var(--bg-left-panel)] border border-black/[0.08] dark:border-white/[0.12] text-[var(--text-primary)] hover:bg-black/[0.05] dark:hover:bg-white/[0.08] transition-all cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSendReply}
                style={{ borderRadius: '10px' }}
                className="h-9 px-4 text-xs font-semibold bg-[#FF385C] hover:bg-[#E00B41] text-white shadow-xs transition-all cursor-pointer flex items-center gap-1.5"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Publish Response</span>
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
