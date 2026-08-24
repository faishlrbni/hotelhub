'use client';

import { useState } from 'react';
import {
  Users,
  Star,
  ShieldCheck,
  Mail,
  Phone,
  Plus,
  Search,
  ExternalLink,
  Calendar,
  DollarSign,
  Download,
  Coffee,
  Wine,
  Sparkles,
  CheckCircle2,
  ChevronRight,
  Filter,
  UserCheck,
  Bed,
  Utensils,
  Car,
  Globe,
  Tag,
  MessageSquare,
  ArrowRight,
  XCircle,
  X,
  ArrowUpRight
} from 'lucide-react';
import { KpiCard } from '@/components/ui/kpi-card';
import { SectionCard } from '@/components/ui/section-card';

interface GuestCardData {
  id: string;
  name: string;
  avatar: string;
  tier: string;
  vip: boolean;
  email: string;
  phone: string;
  stays: number;
  spend: string;
  pref: string;
  dob: string;
  nationality: string;
  car: string;
  resId: string;
  room: string;
  checkIn: string;
  checkOut: string;
  price: string;
}

const GUESTS_DATA: GuestCardData[] = [
  {
    id: '0567891325',
    name: 'Tomy Blotz',
    avatar: 'TB',
    tier: 'Platinum VIP',
    vip: true,
    email: 'tomy.blotz@gmail.com',
    phone: '+41-79-261-5278',
    stays: 12,
    spend: 'Rp 142,500,000',
    pref: 'prefers Suite · allergic to dairy products',
    dob: 'April 28, 1991',
    nationality: 'Switzerland',
    car: 'ZH 547598',
    resId: '0006789',
    room: 'St. Double Room #505',
    checkIn: 'Sep 1, 2026',
    checkOut: 'Sep 7, 2026',
    price: '$135.00',
  },
  {
    id: '0891234567',
    name: 'Michael Chen',
    avatar: 'MC',
    tier: 'Platinum VIP',
    vip: true,
    email: 'm.chen@techcorp.com',
    phone: '+62 812-3456-7890',
    stays: 14,
    spend: 'Rp 142,500,000',
    pref: 'prefers High Floor · extra pillows',
    dob: 'March 14, 1988',
    nationality: 'Singapore',
    car: 'B 1234 SK',
    resId: '0006790',
    room: 'Ocean Suite #602',
    checkIn: 'Jul 21, 2026',
    checkOut: 'Jul 28, 2026',
    price: '$210.00',
  },
  {
    id: '0456789012',
    name: 'Alexander Wright',
    avatar: 'AW',
    tier: 'Gold Loyalty',
    vip: true,
    email: 'alex.wright@global.co',
    phone: '+44 7700-900077',
    stays: 8,
    spend: 'Rp 64,200,000',
    pref: 'early check-in · quiet room',
    dob: 'November 05, 1985',
    nationality: 'United Kingdom',
    car: 'UK 9012 AA',
    resId: '0006791',
    room: 'Deluxe Twin #304',
    checkIn: 'Jul 22, 2026',
    checkOut: 'Jul 25, 2026',
    price: '$165.00',
  },
  {
    id: '0123456789',
    name: 'Siti Rahma',
    avatar: 'SR',
    tier: 'Silver Tier',
    vip: false,
    email: 'siti.rahma@gmail.com',
    phone: '+62 811-9876-5432',
    stays: 3,
    spend: 'Rp 18,900,000',
    pref: 'vegetarian breakfast · airport transfer',
    dob: 'August 19, 1994',
    nationality: 'Indonesia',
    car: 'DK 5678 AB',
    resId: '0006792',
    room: 'Superior King #201',
    checkIn: 'Jul 24, 2026',
    checkOut: 'Jul 26, 2026',
    price: '$110.00',
  },
];

export default function GuestsPage() {
  const [activeTab, setActiveTab] = useState<'cards' | 'activity' | 'profile'>('cards');
  const [selectedGuest, setSelectedGuest] = useState<GuestCardData>(GUESTS_DATA[0]);
  const [searchQuery, setSearchQuery] = useState('');
  const [guestStatusMap, setGuestStatusMap] = useState<Record<string, 'Confirmed' | 'Checked In' | 'Cancelled'>>({
    '0567891325': 'Confirmed',
    '0891234567': 'Confirmed',
    '0123456789': 'Checked In',
  });
  const [toastMessage, setToastMessage] = useState('');
  const [notes, setNotes] = useState<string[]>([
    'The guest is allergic to dairy products. Don\'t forget to inform the restaurant staff for breakfast prep.'
  ]);
  const [newNote, setNewNote] = useState('');

  // Modals & Filters state
  const [showAddGuestModal, setShowAddGuestModal] = useState(false);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [tierFilter, setTierFilter] = useState<string>('All');
  
  // New Guest Form state
  const [newGuestName, setNewGuestName] = useState('');
  const [newGuestEmail, setNewGuestEmail] = useState('');
  const [newGuestPhone, setNewGuestPhone] = useState('');
  const [newGuestTier, setNewGuestTier] = useState('Silver Member');
  const [newGuestCountry, setNewGuestCountry] = useState('Indonesia');

  const handleCreateGuest = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newGuestName.trim()) return;
    const newGuest: GuestCardData = {
      id: Math.floor(1000000000 + Math.random() * 9000000000).toString(),
      name: newGuestName.trim(),
      avatar: newGuestName.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase() || 'GS',
      tier: newGuestTier,
      vip: newGuestTier.includes('VIP') || newGuestTier.includes('Platinum'),
      email: newGuestEmail.trim() || 'guest@example.com',
      phone: newGuestPhone.trim() || '+62 812-3456-7890',
      stays: 1,
      spend: '$180.00',
      pref: 'King bed, Quiet room',
      dob: 'Jan 15, 1992',
      nationality: newGuestCountry,
      car: 'B 1234 XYZ',
      resId: 'RES-' + Math.floor(1000 + Math.random() * 9000),
      room: 'Deluxe Suite #302',
      checkIn: 'Today',
      checkOut: 'Tomorrow',
      price: '$180.00',
    };
    GUESTS_DATA.unshift(newGuest);
    setSelectedGuest(newGuest);
    setShowAddGuestModal(false);
    setNewGuestName('');
    setNewGuestEmail('');
    setNewGuestPhone('');
    setToastMessage(`Guest profile for "${newGuest.name}" created successfully!`);
    setTimeout(() => setToastMessage(''), 3000);
  };

  const handleAddNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newNote.trim()) return;
    setNotes([newNote.trim(), ...notes]);
    setNewNote('');
  };

  const filteredGuests = GUESTS_DATA.filter((g) => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return true;
    return (
      g.name.toLowerCase().includes(q) ||
      g.email.toLowerCase().includes(q) ||
      g.phone.toLowerCase().includes(q) ||
      g.tier.toLowerCase().includes(q) ||
      g.room.toLowerCase().includes(q) ||
      g.id.toLowerCase().includes(q) ||
      g.nationality.toLowerCase().includes(q) ||
      g.pref.toLowerCase().includes(q) ||
      (g.car && g.car.toLowerCase().includes(q))
    );
  });

  const currentGuestStatus = guestStatusMap[selectedGuest.id] || 'Confirmed';

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6 max-w-[1600px] mx-auto min-h-screen relative">
      
      {toastMessage && (
        <div className="fixed top-5 right-5 z-50 bg-emerald-600 text-white px-5 py-3 rounded-xl shadow-2xl text-xs font-bold flex items-center gap-2.5 animate-in fade-in duration-300">
          <CheckCircle2 className="w-4 h-4 text-white" />
          <span>{toastMessage}</span>
        </div>
      )}
          
          {/* Header Block */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-semibold text-[var(--text-tertiary)] uppercase tracking-wider block mb-1">
                CRM Directory & Guest Intelligence
              </span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-display)] tracking-tight">
                Guests
              </h1>
              <p className="text-xs text-[var(--text-tertiary)] mt-1 font-medium">
                Recognize returning guests, honor preferences, and build lasting relationships across your property.
              </p>
            </div>

            {/* Top Action Buttons */}
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-2.5 sm:gap-3 w-full sm:w-auto shrink-0">
              <button
                type="button"
                onClick={() => setShowFilterModal(true)}
                className="btn-secondary w-full sm:w-auto flex-1 sm:flex-initial"
              >
                <Filter className="w-3.5 h-3.5 text-[var(--text-tertiary)]" />
                <span>Filters</span>
              </button>
              <button
                type="button"
                onClick={() => setShowAddGuestModal(true)}
                className="btn-primary w-full sm:w-auto flex-1 sm:flex-initial"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Guest Profile</span>
              </button>
            </div>
          </div>

          {/* 4 Top KPI Cards (Reusable Component Standard) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-3.5">
            <KpiCard 
              label="ACTIVE PROFILES"
              value="4,218"
              icon={Users}
              iconBgColor="bg-emerald-500/10"
              iconColor="text-[#19B26B]"
              trendText="+128 new this month"
              subtext="Verified guest profiles"
            />
            <KpiCard 
              label="RETURNING GUESTS"
              value="34%"
              icon={Users}
              iconBgColor="bg-[#387FF7]/10"
              iconColor="text-[#387FF7] dark:text-[#6099F9]"
              trendText="+4.1% repeat lift (90 days)"
              subtext="Repeat booking conversion rate"
            />
            <KpiCard 
              label="VIP MEMBERS"
              value="182"
              icon={Star}
              iconBgColor="bg-amber-500/10"
              iconColor="text-amber-500"
              trendText="Platinum & Gold Tiers"
              trendIcon={Star}
              trendColor="text-amber-500"
              subtext="High lifetime value clientele"
            />
            <KpiCard 
              label="AVG SATISFACTION"
              value="4.7"
              icon={ShieldCheck}
              iconBgColor="bg-emerald-500/10"
              iconColor="text-[#19B26B]"
              trendText="Based on 840 reviews"
              subtext="Post-stay survey rating score"
            />
          </div>

          {/* View Mode Navigation Tabs */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-black/[0.06] dark:border-white/[0.08] pb-4">
            <div className="p-1 bg-[var(--bg-card)] border border-black/[0.06] dark:border-white/[0.08] rounded-xl flex items-center gap-1 w-full md:w-auto shrink-0">
              <button
                type="button"
                onClick={() => setActiveTab('cards')}
                className={`h-9 px-3 sm:px-4 text-xs font-semibold whitespace-nowrap flex-1 md:flex-initial justify-center transition-all cursor-pointer flex items-center gap-1.5 rounded-lg ${
                  activeTab === 'cards'
                    ? 'bg-[#FF385C] text-white shadow-xs'
                    : 'text-[var(--text-tertiary)] hover:text-[var(--text-primary)] hover:bg-black/[0.03] dark:hover:bg-white/[0.05]'
                }`}
              >
                <Users className="w-3.5 h-3.5 shrink-0" />
                <span className="whitespace-nowrap inline-block">Directory</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('activity')}
                className={`h-9 px-3 sm:px-4 text-xs font-semibold whitespace-nowrap flex-1 md:flex-initial justify-center transition-all cursor-pointer flex items-center gap-1.5 rounded-lg ${
                  activeTab === 'activity'
                    ? 'bg-[#FF385C] text-white shadow-xs'
                    : 'text-[var(--text-tertiary)] hover:text-[var(--text-primary)] hover:bg-black/[0.03] dark:hover:bg-white/[0.05]'
                }`}
              >
                <Tag className="w-3.5 h-3.5 shrink-0" />
                <span className="whitespace-nowrap inline-block">Activity</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('profile')}
                className={`h-9 px-3 sm:px-4 text-xs font-semibold whitespace-nowrap flex-1 md:flex-initial justify-center transition-all cursor-pointer flex items-center gap-1.5 rounded-lg ${
                  activeTab === 'profile'
                    ? 'bg-[#FF385C] text-white shadow-xs'
                    : 'text-[var(--text-tertiary)] hover:text-[var(--text-primary)] hover:bg-black/[0.03] dark:hover:bg-white/[0.05]'
                }`}
              >
                <UserCheck className="w-3.5 h-3.5 shrink-0" />
                <span className="whitespace-nowrap inline-block">Profile Info</span>
              </button>
            </div>

            {/* Quick Search Bar */}
            <div className="relative w-full sm:w-64 shrink-0">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-tertiary)]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Filter guests by name, email, phone..."
                style={{ borderRadius: '10px' }}
                className="w-full pl-8 pr-8 h-9 text-xs bg-[var(--bg-card)] border border-black/[0.08] dark:border-white/[0.12] text-[var(--text-primary)] placeholder-[var(--text-tertiary)] focus:outline-none focus:ring-2 focus:ring-[#FF385C]/40 transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[var(--text-tertiary)] hover:text-[var(--text-primary)] cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* VIEW TAB 1: GUEST DIRECTORY CARDS (Screenshot 1 Grid Fusion) */}
          {activeTab === 'cards' && (
            <>
              {filteredGuests.length === 0 ? (
                <div 
                  style={{ borderRadius: '24px' }}
                  className="p-12 text-center bg-[var(--bg-card)] border border-black/[0.06] dark:border-white/[0.08] space-y-3"
                >
                  <Search className="w-8 h-8 text-[var(--text-tertiary)] mx-auto opacity-50" />
                  <h3 className="text-base font-bold text-[var(--text-display)]">
                    No guest profiles found matching "{searchQuery}"
                  </h3>
                  <p className="text-xs text-[var(--text-tertiary)] max-w-sm mx-auto">
                    Try searching by guest name, room number, tier, phone, or email address.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    style={{ borderRadius: '10px' }}
                    className="px-4 py-2 bg-[#FF385C] text-white text-xs font-semibold shadow-xs cursor-pointer hover:bg-[#E00B41] transition-all"
                  >
                    Clear Search Filter
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredGuests.map((guest) => (
                    <div
                      key={guest.id}
                      style={{ borderRadius: '24px' }}
                      className="p-6 bg-[var(--bg-card)] border border-black/[0.04] dark:border-white/[0.08] shadow-[0_4px_16px_rgba(0,0,0,0.02)] space-y-5 transition-all hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)]"
                    >
                      {/* Card Header: Avatar & VIP Badge */}
                      <div className="flex items-center justify-between">
                        <div 
                          style={{ borderRadius: '50%' }}
                          className="w-12 h-12 bg-rose-500/10 text-[#FF385C] font-extrabold text-sm flex items-center justify-center shrink-0 border border-[#FF385C]/20"
                        >
                          {guest.avatar}
                        </div>
                        {guest.vip && (
                          <span 
                            style={{ borderRadius: '9999px' }}
                            className="px-3 py-1 bg-amber-500/10 text-amber-500 text-xs font-bold flex items-center gap-1 border border-amber-500/20"
                          >
                            <Star className="w-3.5 h-3.5 fill-amber-500" />
                            <span>VIP</span>
                          </span>
                        )}
                      </div>

                      {/* Name & Tier */}
                      <div>
                        <h3 className="text-base font-bold text-[var(--text-display)] tracking-tight">
                          {guest.name}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          <span 
                            style={{ borderRadius: '6px' }}
                            className="px-2 py-0.5 text-[10px] font-extrabold uppercase bg-pink-500/10 text-[#FF385C]"
                          >
                            {guest.tier}
                          </span>
                          <span className="text-xs text-[var(--text-tertiary)]">
                            {guest.room}
                          </span>
                        </div>
                      </div>

                      {/* Contact Info */}
                      <div className="space-y-1.5 text-xs text-[var(--text-tertiary)]">
                        <div className="flex items-center gap-2">
                          <Mail className="w-3.5 h-3.5 text-[var(--text-tertiary)] shrink-0" />
                          <span className="truncate">{guest.email}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="w-3.5 h-3.5 text-[var(--text-tertiary)] shrink-0" />
                          <span>{guest.phone}</span>
                        </div>
                      </div>

                      {/* Special Preference Tag */}
                      <div className="p-2.5 rounded-xl bg-[var(--bg-left-panel)] border border-black/[0.04] dark:border-white/[0.06] text-xs text-[var(--text-primary)] font-medium flex items-center gap-2">
                        <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                        <span className="line-clamp-2">{guest.pref}</span>
                      </div>

                      {/* Bottom Stats Row & Profile Action */}
                      <div className="pt-3 border-t border-black/[0.04] dark:border-white/[0.06] flex items-center justify-between">
                        <div>
                          <div className="text-[10px] text-[var(--text-tertiary)] uppercase tracking-wider">
                            Total Stays
                          </div>
                          <div className="text-sm font-extrabold text-[var(--text-display)]">
                            {guest.stays} Stays
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-[10px] text-[var(--text-tertiary)] uppercase tracking-wider">
                            Lifetime Spend
                          </div>
                          <div className="text-sm font-extrabold text-[#FF385C]">
                            {guest.spend}
                          </div>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => {
                          setSelectedGuest(guest);
                          setActiveTab('profile');
                        }}
                        style={{ borderRadius: '10px' }}
                        className="w-full py-2.5 bg-black/[0.03] dark:bg-white/[0.04] hover:bg-[#FF385C] hover:text-white text-[var(--text-primary)] text-xs font-semibold transition-all flex items-center justify-center gap-1.5 cursor-pointer mt-2"
                      >
                        <span>View full profile</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>

                    </div>
                  ))}
                </div>
              )}
            </>
          )}

          {/* VIEW TAB 2: RECENT ACTIVITY LIST (Screenshot 2 Table Fusion) */}
          {activeTab === 'activity' && (
            <SectionCard
              title="Recent Guests & Loyalty Log"
              headerAction={
                <span className="text-xs text-[var(--text-tertiary)]">
                  Showing {filteredGuests.length} profiles
                </span>
              }
            >

              <div className="divide-y divide-black/[0.04] dark:divide-white/[0.06]">
                {filteredGuests.map((guest) => (
                  <div
                    key={guest.id}
                    className="py-4 flex items-center justify-between gap-4 transition-all hover:bg-black/[0.01] dark:hover:bg-white/[0.01] px-2 rounded-xl"
                  >
                    <div className="flex items-center gap-3 overflow-hidden">
                      <div 
                        style={{ borderRadius: '50%' }}
                        className="w-10 h-10 bg-rose-500/10 text-[#FF385C] font-bold text-xs flex items-center justify-center shrink-0"
                      >
                        {guest.avatar}
                      </div>
                      <div className="truncate">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-bold text-[var(--text-primary)] truncate">
                            {guest.name}
                          </span>
                          <span 
                            style={{ borderRadius: '6px' }}
                            className="px-2 py-0.5 text-[9px] font-extrabold uppercase bg-pink-500/10 text-[#FF385C]"
                          >
                            {guest.tier}
                          </span>
                        </div>
                        <div className="text-xs text-[var(--text-tertiary)] truncate mt-0.5">
                          {guest.stays} stays · {guest.pref}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 shrink-0">
                      <div className="text-right hidden sm:block">
                        <div className="text-xs font-bold text-[var(--text-display)]">
                          {guest.spend}
                        </div>
                        <div className="text-[10px] text-[var(--text-tertiary)]">
                          ID: {guest.id}
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => {
                          setSelectedGuest(guest);
                          setActiveTab('profile');
                        }}
                        style={{ borderRadius: '10px' }}
                        className="h-8 px-3 bg-[var(--bg-left-panel)] border border-black/[0.08] dark:border-white/[0.12] text-xs font-semibold text-[var(--text-primary)] hover:bg-[#FF385C] hover:text-white transition-all cursor-pointer flex items-center gap-1"
                      >
                        <span>Details</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </SectionCard>
          )}

          {/* VIEW TAB 3: FULL GUEST PROFILE & BOOKING DETAILS (Screenshot 3 Fusion) */}
          {activeTab === 'profile' && (
            <div className="space-y-6">
              
              {/* Profile Top Bar & Guest Selector */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl bg-[var(--bg-card)] border border-black/[0.04] dark:border-white/[0.08]">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-semibold text-[var(--text-tertiary)] uppercase tracking-wider">
                    Select Profile:
                  </span>
                  <select
                    value={selectedGuest.id}
                    onChange={(e) => {
                      const found = GUESTS_DATA.find(g => g.id === e.target.value);
                      if (found) setSelectedGuest(found);
                    }}
                    style={{ borderRadius: '10px' }}
                    className="px-3 py-1.5 bg-[var(--bg-left-panel)] border border-black/[0.08] dark:border-white/[0.12] text-xs font-bold text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[#FF385C]/40 cursor-pointer"
                  >
                    {GUESTS_DATA.map(g => (
                      <option key={g.id} value={g.id}>{g.name} ({g.tier})</option>
                    ))}
                  </select>
                </div>

                <div className="flex items-center gap-3">
                  <span
                    style={{ borderRadius: '9999px' }}
                    className={`px-3 py-1 text-xs font-bold transition-all ${
                      currentGuestStatus === 'Checked In'
                        ? 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30'
                        : currentGuestStatus === 'Cancelled'
                        ? 'bg-rose-500/15 text-rose-600 dark:text-rose-400 border border-rose-500/30'
                        : 'bg-[#387FF7]/15 text-[#387FF7] dark:text-[#6099F9] border border-[#387FF7]/30'
                    }`}
                  >
                    Status: {currentGuestStatus}
                  </span>

                  <button
                    type="button"
                    onClick={() => {
                      setGuestStatusMap(prev => ({ ...prev, [selectedGuest.id]: 'Cancelled' }));
                      setToastMessage(`✓ Booking cancelled for ${selectedGuest.name}. Room inventory released.`);
                      setTimeout(() => setToastMessage(''), 4500);
                    }}
                    style={{ borderRadius: '10px' }}
                    className="h-9 px-4 bg-rose-500/10 text-rose-600 dark:text-rose-400 text-xs font-semibold hover:bg-rose-500/20 active:scale-95 transition-all cursor-pointer flex items-center gap-1.5"
                  >
                    <XCircle className="w-3.5 h-3.5" />
                    <span>Cancel Booking</span>
                  </button>
                  
                  <button
                    type="button"
                    onClick={() => {
                      setGuestStatusMap(prev => ({ ...prev, [selectedGuest.id]: 'Checked In' }));
                      setToastMessage(`✓ Guest Check-In processed successfully for ${selectedGuest.name}! Assigned to ${selectedGuest.room}.`);
                      setTimeout(() => setToastMessage(''), 4500);
                    }}
                    style={{ borderRadius: '10px' }}
                    className="h-9 px-4 bg-[#FF385C] hover:bg-[#E00B41] active:scale-95 text-white text-xs font-semibold shadow-xs transition-all cursor-pointer flex items-center gap-1.5"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Guest Check-In</span>
                  </button>
                </div>
              </div>

              {/* Profile & Booking Info Cards Row */}
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                
                {/* Left (2 Cols): Profile Details Card */}
                <div 
                  style={{ borderRadius: '24px' }}
                  className="lg:col-span-2 p-6 bg-[var(--bg-card)] border border-black/[0.04] dark:border-white/[0.08] shadow-[0_4px_16px_rgba(0,0,0,0.02)] space-y-6"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div 
                        style={{ borderRadius: '50%' }}
                        className="w-12 h-12 bg-[#FF385C] text-white font-extrabold text-sm flex items-center justify-center shrink-0 shadow-md"
                      >
                        {selectedGuest.avatar}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-base font-bold text-[var(--text-display)] tracking-tight">
                            {selectedGuest.name}
                          </h3>
                          {selectedGuest.vip && (
                            <span 
                              style={{ borderRadius: '9999px' }}
                              className="px-2 py-0.5 bg-amber-500/10 text-amber-500 text-[10px] font-bold flex items-center gap-1"
                            >
                              <Star className="w-3 h-3 fill-amber-500" />
                              <span>VIP Guest</span>
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-[var(--text-tertiary)] mt-0.5">
                          ID: {selectedGuest.id}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="space-y-3 pt-3 border-t border-black/[0.04] dark:border-white/[0.06]">
                    <div className="text-xs font-bold text-[var(--text-display)] uppercase tracking-wider">
                      Contact information
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      <div style={{ borderRadius: '16px' }} className="p-3 bg-[var(--bg-left-panel)] flex items-center gap-2 text-[var(--text-primary)]">
                        <Phone className="w-3.5 h-3.5 text-[#FF385C]" />
                        <span className="truncate">{selectedGuest.phone}</span>
                      </div>
                      <div style={{ borderRadius: '16px' }} className="p-3 bg-[var(--bg-left-panel)] flex items-center gap-2 text-[var(--text-primary)]">
                        <Mail className="w-3.5 h-3.5 text-[#FF385C]" />
                        <span className="truncate">{selectedGuest.email}</span>
                      </div>
                    </div>
                  </div>

                  {/* Personal Info */}
                  <div className="space-y-3 pt-3 border-t border-black/[0.04] dark:border-white/[0.06]">
                    <div className="text-xs font-bold text-[var(--text-display)] uppercase tracking-wider">
                      Personal information
                    </div>
                    <div className="grid grid-cols-3 gap-3 text-xs">
                      <div style={{ borderRadius: '16px' }} className="p-3 bg-[var(--bg-left-panel)]">
                        <div className="text-[10px] text-[var(--text-tertiary)]">Date of Birth</div>
                        <div className="font-bold text-[var(--text-primary)] mt-1 truncate">{selectedGuest.dob}</div>
                      </div>
                      <div style={{ borderRadius: '16px' }} className="p-3 bg-[var(--bg-left-panel)]">
                        <div className="text-[10px] text-[var(--text-tertiary)]">Nationality</div>
                        <div className="font-bold text-[var(--text-primary)] mt-1 truncate">{selectedGuest.nationality}</div>
                      </div>
                      <div style={{ borderRadius: '16px' }} className="p-3 bg-[var(--bg-left-panel)]">
                        <div className="text-[10px] text-[var(--text-tertiary)]">Car / Vehicle</div>
                        <div className="font-bold text-[var(--text-primary)] mt-1 truncate">{selectedGuest.car}</div>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Right (3 Cols): Booking Info Card */}
                <div 
                  style={{ borderRadius: '24px' }}
                  className="lg:col-span-3 p-6 bg-[var(--bg-card)] border border-black/[0.04] dark:border-white/[0.08] shadow-[0_4px_16px_rgba(0,0,0,0.02)] space-y-6 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-base font-bold text-[var(--text-display)] tracking-tight">
                          Booking Info
                        </h3>
                        <p className="text-xs text-[var(--text-tertiary)] mt-0.5">
                          Reservation id: {selectedGuest.resId}
                        </p>
                      </div>
                      <span 
                        style={{ borderRadius: '9999px' }}
                        className="px-3 py-1 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold flex items-center gap-1"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Confirmed</span>
                      </span>
                    </div>

                    {/* Dates & Duration Summary */}
                    <div 
                      style={{ borderRadius: '16px' }}
                      className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4 p-4 bg-[var(--bg-left-panel)] border border-black/[0.04] dark:border-white/[0.06] text-xs"
                    >
                      <div>
                        <div className="text-[10px] text-[var(--text-tertiary)] font-medium">Check-in</div>
                        <div className="font-bold text-[var(--text-primary)] mt-0.5">{selectedGuest.checkIn}</div>
                      </div>
                      <div>
                        <div className="text-[10px] text-[var(--text-tertiary)] font-medium">Check-out</div>
                        <div className="font-bold text-[var(--text-primary)] mt-0.5">{selectedGuest.checkOut}</div>
                      </div>
                      <div>
                        <div className="text-[10px] text-[var(--text-tertiary)] font-medium">Duration</div>
                        <div className="font-bold text-[var(--text-primary)] mt-0.5">6 nights</div>
                      </div>
                      <div>
                        <div className="text-[10px] text-[var(--text-tertiary)] font-medium">Guests</div>
                        <div className="font-bold text-[var(--text-primary)] mt-0.5">2 adults</div>
                      </div>
                    </div>

                    {/* Amenities Badges Stack */}
                    <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
                      <span 
                        style={{ borderRadius: '8px' }}
                        className="px-3 py-1.5 bg-black/[0.03] dark:bg-white/[0.04] text-[var(--text-primary)] font-medium flex items-center gap-1.5"
                      >
                        <Utensils className="w-3.5 h-3.5 text-[#FF385C]" />
                        <span>Breakfast included</span>
                      </span>

                      <span 
                        style={{ borderRadius: '8px' }}
                        className="px-3 py-1.5 bg-black/[0.03] dark:bg-white/[0.04] text-[var(--text-primary)] font-medium flex items-center gap-1.5"
                      >
                        <Globe className="w-3.5 h-3.5 text-[#FF385C]" />
                        <span>Sea View</span>
                      </span>

                      <span 
                        style={{ borderRadius: '8px' }}
                        className="px-3 py-1.5 bg-black/[0.03] dark:bg-white/[0.04] text-[var(--text-primary)] font-medium flex items-center gap-1.5"
                      >
                        <Bed className="w-3.5 h-3.5 text-[#FF385C]" />
                        <span>35 sq m Area · 1 King Bed</span>
                      </span>
                    </div>
                  </div>

                  {/* Room & Price Breakdown */}
                  <div className="pt-4 border-t border-black/[0.04] dark:border-white/[0.06] flex items-center justify-between">
                    <div>
                      <div className="text-xs text-[var(--text-tertiary)] font-medium">
                        Reserved Accommodation
                      </div>
                      <div className="text-base font-extrabold text-[var(--text-display)] mt-0.5">
                        {selectedGuest.room}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-[var(--text-tertiary)] font-medium">
                        Total Price
                      </div>
                      <div className="text-xl font-extrabold text-[#FF385C]">
                        {selectedGuest.price}
                      </div>
                    </div>
                  </div>

                </div>

              </div>

              {/* Bottom Row: Payments Table & Staff Notes */}
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                
                {/* Payments Table (3 Cols) */}
                <div 
                  style={{ borderRadius: '24px' }}
                  className="lg:col-span-3 p-6 bg-[var(--bg-card)] border border-black/[0.04] dark:border-white/[0.08] shadow-[0_4px_16px_rgba(0,0,0,0.02)] space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-base font-bold text-[var(--text-display)] tracking-tight">
                        Payments & Ledger
                      </h3>
                      <p className="text-xs text-[var(--text-tertiary)] mt-0.5">
                        All guest charges & folio transactions for current stay
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        style={{ borderRadius: '10px' }}
                        className="h-8 px-3 bg-[var(--bg-left-panel)] border border-black/[0.08] dark:border-white/[0.12] text-xs font-semibold text-[var(--text-primary)] hover:bg-black/[0.03] dark:hover:bg-white/[0.04] flex items-center gap-1 cursor-pointer transition-all active:scale-95"
                      >
                        <Filter className="w-3 h-3 text-[var(--text-tertiary)]" />
                        <span>Filter</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          const csvRows = [
                            ['HOTELHUB GUEST FOLIO LEDGER'],
                            ['Guest Name', selectedGuest?.name || 'Guest'],
                            ['Generated Date', new Date().toLocaleDateString('en-US', { dateStyle: 'full' })],
                            [''],
                            ['Transaction Item', 'Reference Code', 'Posting Date', 'Category', 'Amount'],
                            ['Breakfast', 'REF-1227673', '06 Sep 2026', 'Restaurant', '$270.00'],
                            ['Cocktails', 'REF-1227589', '05 Sep 2026', 'Bar', '$120.00'],
                            ['Sauna & Spa', 'REF-1226793', '05 Sep 2026', 'Spa', '$70.00'],
                            ['Ironing & Laundry', 'REF-1226479', '04 Sep 2026', 'Laundry', '$56.00']
                          ];
                          const csvContent = 'data:text/csv;charset=utf-8,' + csvRows.map((e) => e.join(',')).join('\n');
                          const encodedUri = encodeURI(csvContent);
                          const link = document.createElement('a');
                          link.setAttribute('href', encodedUri);
                          link.setAttribute('download', `Folio-Ledger-${(selectedGuest?.name || 'Guest').replace(/\s+/g, '-')}.csv`);
                          document.body.appendChild(link);
                          link.click();
                          document.body.removeChild(link);
                        }}
                        style={{ borderRadius: '10px' }}
                        className="h-8 px-3 bg-[#FF385C] hover:bg-[#E00B41] text-white text-xs font-semibold shadow-xs flex items-center gap-1 cursor-pointer transition-all active:scale-95"
                      >
                        <Download className="w-3 h-3" />
                        <span>Export</span>
                      </button>
                    </div>
                  </div>

                  {/* Clean Column Headers */}
                  <div className="grid grid-cols-12 gap-2 text-[10px] font-extrabold text-[var(--text-tertiary)] uppercase tracking-wider px-3 py-2 bg-[var(--bg-left-panel)] rounded-xl border border-black/[0.04] dark:border-white/[0.06]">
                    <div className="col-span-1 text-center">Select</div>
                    <div className="col-span-4">Transaction Item</div>
                    <div className="col-span-3 text-center">Posting Date</div>
                    <div className="col-span-2 text-center">Category</div>
                    <div className="col-span-2 text-right">Amount</div>
                  </div>

                  {/* Charges List */}
                  <div className="divide-y divide-black/[0.04] dark:divide-white/[0.06] text-xs">
                    {[
                      { item: 'Breakfast', id: 'REF-1227673', date: '06 Sep 2026', cat: 'Restaurant', catColor: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20', amount: '$270.00' },
                      { item: 'Cocktails', id: 'REF-1227589', date: '05 Sep 2026', cat: 'Bar', catColor: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20', amount: '$120.00' },
                      { item: 'Sauna & Spa', id: 'REF-1226793', date: '05 Sep 2026', cat: 'Spa', catColor: 'bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20', amount: '$70.00' },
                      { item: 'Ironing & Laundry', id: 'REF-1226479', date: '04 Sep 2026', cat: 'Laundry', catColor: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20', amount: '$56.00' },
                    ].map((charge, idx) => (
                      <div 
                        key={idx} 
                        className="py-3 px-3 grid grid-cols-12 gap-2 items-center hover:bg-black/[0.02] dark:hover:bg-white/[0.02] transition-colors rounded-xl modal-item-hover cursor-pointer"
                      >
                        <div className="col-span-1 flex justify-center">
                          <input 
                            type="checkbox" 
                            defaultChecked 
                            className="w-4 h-4 accent-[#FF385C] rounded-md cursor-pointer transition-transform hover:scale-110" 
                          />
                        </div>
                        <div className="col-span-4 min-w-0">
                          <div className="font-bold text-[var(--text-primary)] text-xs truncate">{charge.item}</div>
                          <div className="text-[10px] font-mono text-[var(--text-tertiary)] truncate">{charge.id}</div>
                        </div>
                        <div className="col-span-3 text-center text-xs font-medium text-[var(--text-tertiary)]">
                          {charge.date}
                        </div>
                        <div className="col-span-2 flex justify-center">
                          <span 
                            style={{ borderRadius: '8px' }}
                            className={`px-2.5 py-0.5 text-[10px] font-extrabold ${charge.catColor}`}
                          >
                            {charge.cat}
                          </span>
                        </div>
                        <div className="col-span-2 text-right font-extrabold text-[var(--text-display)] text-xs font-mono">
                          {charge.amount}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Folio Total Summary Footer */}
                  <div className="pt-3 border-t border-black/[0.06] dark:border-white/[0.08] flex items-center justify-between text-xs">
                    <span className="text-[var(--text-tertiary)] font-medium">
                      Total Charges (4 items): <span className="font-extrabold text-[var(--text-display)]">$516.00</span>
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 font-extrabold text-[10px]">
                      ✓ Folio Settled & Verified
                    </span>
                  </div>
                </div>

                {/* Staff Notes & Preferences (2 Cols) */}
                <div 
                  style={{ borderRadius: '24px' }}
                  className="lg:col-span-2 p-6 bg-[var(--bg-card)] border border-black/[0.04] dark:border-white/[0.08] shadow-[0_4px_16px_rgba(0,0,0,0.02)] space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-base font-bold text-[var(--text-display)] tracking-tight">
                          Staff Notes
                        </h3>
                        <p className="text-xs text-[var(--text-tertiary)] mt-0.5">
                          Important details for team reference
                        </p>
                      </div>
                    </div>

                    {/* Form to Add Note */}
                    <form onSubmit={handleAddNote} className="space-y-2">
                      <textarea
                        rows={2}
                        value={newNote}
                        onChange={(e) => setNewNote(e.target.value)}
                        placeholder="Write a new staff note..."
                        style={{ borderRadius: '10px' }}
                        className="w-full p-3 bg-[var(--bg-left-panel)] border border-black/[0.08] dark:border-white/[0.12] text-xs text-[var(--text-primary)] placeholder-[var(--text-tertiary)] focus:outline-none focus:ring-2 focus:ring-[#FF385C]/40"
                      />
                      <div className="flex justify-end">
                        <button
                          type="submit"
                          style={{ borderRadius: '10px' }}
                          className="h-8 px-4 bg-[#FF385C] text-white text-xs font-semibold hover:bg-[#E00B41] transition-all cursor-pointer shadow-xs"
                        >
                          Add Note
                        </button>
                      </div>
                    </form>

                    {/* Notes List */}
                    <div className="space-y-3">
                      {notes.map((noteText, idx) => (
                        <div key={idx} className="p-3.5 rounded-xl bg-[var(--bg-left-panel)] border border-black/[0.04] dark:border-white/[0.06] space-y-1.5 text-xs">
                          <div className="flex items-center justify-between text-[11px] text-[var(--text-tertiary)]">
                            <span className="font-bold text-[var(--text-primary)]">Ariana Davis <span className="text-[9px] px-1.5 py-0.2 rounded bg-emerald-500/10 text-emerald-600 font-bold">Admin</span></span>
                            <span>Sep 1, 2026</span>
                          </div>
                          <p className="text-[var(--text-tertiary)] leading-relaxed">{noteText}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>

            </div>
          )}

      {/* Add Guest Profile Modal */}
      {showAddGuestModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4">
          <form
            onSubmit={handleCreateGuest}
            style={{ borderRadius: '24px' }}
            className="w-full max-w-md bg-[var(--bg-card)] border border-black/[0.08] dark:border-white/[0.12] p-6 shadow-2xl space-y-4 animate-in fade-in zoom-in-95 duration-200 relative max-h-[90vh] overflow-y-auto"
          >
            <button
              type="button"
              onClick={() => setShowAddGuestModal(false)}
              style={{ borderRadius: '50%' }}
              className="w-8 h-8 flex items-center justify-center bg-[var(--bg-left-panel)] text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors absolute top-6 right-6 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <h3 className="text-base font-bold text-[var(--text-display)]">
              Add New Guest Profile
            </h3>

            <div className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-[var(--text-primary)] mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={newGuestName}
                  onChange={(e) => setNewGuestName(e.target.value)}
                  placeholder="e.g. Jessica Alba"
                  style={{ borderRadius: '10px' }}
                  className="w-full px-3.5 py-2 text-xs bg-[var(--bg-card)] border border-black/[0.08] dark:border-white/[0.12] text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[#FF385C]/40 transition-all"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[var(--text-primary)] mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={newGuestEmail}
                    onChange={(e) => setNewGuestEmail(e.target.value)}
                    placeholder="jessica@example.com"
                    style={{ borderRadius: '10px' }}
                    className="w-full px-3.5 py-2 text-xs bg-[var(--bg-card)] border border-black/[0.08] dark:border-white/[0.12] text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[#FF385C]/40 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[var(--text-primary)] mb-1">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    value={newGuestPhone}
                    onChange={(e) => setNewGuestPhone(e.target.value)}
                    placeholder="+62 812-9988-7766"
                    style={{ borderRadius: '10px' }}
                    className="w-full px-3.5 py-2 text-xs bg-[var(--bg-card)] border border-black/[0.08] dark:border-white/[0.12] text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[#FF385C]/40 transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[var(--text-primary)] mb-1">
                    Loyalty Tier
                  </label>
                  <select
                    value={newGuestTier}
                    onChange={(e) => setNewGuestTier(e.target.value)}
                    style={{ borderRadius: '10px' }}
                    className="w-full px-3.5 py-2 text-xs bg-[var(--bg-card)] border border-black/[0.08] dark:border-white/[0.12] text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[#FF385C]/40 transition-all"
                  >
                    <option value="Silver Member">Silver Member</option>
                    <option value="Gold Member">Gold Member</option>
                    <option value="Platinum VIP">Platinum VIP</option>
                    <option value="Black Card VIP">Black Card VIP</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-[var(--text-primary)] mb-1">
                    Country
                  </label>
                  <input
                    type="text"
                    value={newGuestCountry}
                    onChange={(e) => setNewGuestCountry(e.target.value)}
                    placeholder="Indonesia, Australia..."
                    style={{ borderRadius: '10px' }}
                    className="w-full px-3.5 py-2 text-xs bg-[var(--bg-card)] border border-black/[0.08] dark:border-white/[0.12] text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[#FF385C]/40 transition-all"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-3 border-t border-black/[0.06] dark:border-white/[0.08]">
              <button
                type="button"
                onClick={() => setShowAddGuestModal(false)}
                className="btn-secondary"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn-primary"
              >
                Save Guest Profile
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Filter Guests Modal */}
      {showFilterModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4">
          <div
            style={{ borderRadius: '24px' }}
            className="w-full max-w-sm bg-[var(--bg-card)] border border-black/[0.08] dark:border-white/[0.12] p-6 shadow-2xl space-y-4 animate-in fade-in zoom-in-95 duration-200 relative"
          >
            <button
              type="button"
              onClick={() => setShowFilterModal(false)}
              style={{ borderRadius: '50%' }}
              className="w-8 h-8 flex items-center justify-center bg-[var(--bg-left-panel)] text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors absolute top-6 right-6 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <h3 className="text-base font-bold text-[var(--text-display)] flex items-center gap-2">
              <Filter className="w-4 h-4 text-[#FF385C]" />
              Filter Guest Directory
            </h3>

            <div className="space-y-2">
              <label className="block text-xs font-bold text-[var(--text-primary)] mb-2">
                Loyalty & Membership Tier
              </label>
              {['All', 'VIP', 'Platinum', 'Gold', 'Silver'].map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => {
                    setTierFilter(t);
                    setShowFilterModal(false);
                    setToastMessage(`Filtered directory by tier: ${t}`);
                    setTimeout(() => setToastMessage(''), 2500);
                  }}
                  className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-semibold flex items-center justify-between transition-all cursor-pointer ${
                    tierFilter === t
                      ? 'bg-[#FF385C] text-white shadow-xs'
                      : 'bg-[var(--bg-left-panel)] border border-black/[0.04] dark:border-white/[0.06] text-[var(--text-primary)] hover:bg-black/[0.03] dark:hover:bg-white/[0.04]'
                  }`}
                >
                  <span>{t === 'All' ? 'All Membership Tiers' : `${t} Members`}</span>
                  {tierFilter === t && <CheckCircle2 className="w-4 h-4 text-white" />}
                </button>
              ))}
            </div>

            <div className="pt-2 flex justify-end">
              <button
                type="button"
                onClick={() => setShowFilterModal(false)}
                className="btn-secondary w-full"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
