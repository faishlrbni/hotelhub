'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { 
  Building2, 
  BedDouble, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  Users, 
  Sparkles, 
  Sliders, 
  Check, 
  Plus, 
  Trash2,
  TrendingUp,
  ShieldCheck,
  Globe,
  Zap,
  Hotel
} from 'lucide-react';
import { useHotelStore } from '@/lib/store';
import { ThemeToggle } from '@/components/layout/theme-toggle';

export default function OnboardingPage() {
  const router = RouterHook();
  const store = useHotelStore() as any;
  const session = store?.session;

  const [step, setStep] = useState(1);
  const [propertyType, setPropertyType] = useState<'boutique' | 'resort' | 'city' | 'apartments'>('resort');
  const [roomCount, setRoomCount] = useState(48);
  const [selectedModules, setSelectedModules] = useState<string[]>([
    'reservations',
    'housekeeping',
    'revenue',
    'ai'
  ]);
  const [teamInviteEmail, setTeamInviteEmail] = useState('');
  const [invitedTeam, setInvitedTeam] = useState<string[]>([]);
  const [selectedChannels, setSelectedChannels] = useState<string[]>([
    'Booking.com',
    'Expedia'
  ]);

  const [isFinishing, setIsFinishing] = useState(false);
  const [progressPercent, setProgressPercent] = useState(25);

  useEffect(() => {
    setProgressPercent(step * 25);
  }, [step]);

  function RouterHook() {
    return useRouter();
  }

  const toggleModule = (id: string) => {
    if (selectedModules.includes(id)) {
      if (selectedModules.length === 1) return; // keep at least 1
      setSelectedModules(selectedModules.filter((m) => m !== id));
    } else {
      setSelectedModules([...selectedModules, id]);
    }
  };

  const toggleChannel = (name: string) => {
    if (selectedChannels.includes(name)) {
      setSelectedChannels(selectedChannels.filter((c) => c !== name));
    } else {
      setSelectedChannels([...selectedChannels, name]);
    }
  };

  const handleAddTeamMember = () => {
    if (!teamInviteEmail || !teamInviteEmail.includes('@')) return;
    if (!invitedTeam.includes(teamInviteEmail)) {
      setInvitedTeam([...invitedTeam, teamInviteEmail]);
    }
    setTeamInviteEmail('');
  };

  const handleRemoveTeamMember = (email: string) => {
    setInvitedTeam(invitedTeam.filter((e) => e !== email));
  };

  const handleFinishOnboarding = () => {
    setIsFinishing(true);
    setTimeout(() => {
      router.push('/dashboard');
    }, 1200);
  };

  const userName = session?.name || 'Hotel Manager';
  const propertyName = session?.property || 'Aria Hotel Bali';

  return (
    <div className="min-h-screen bg-[var(--bg-canvas)] text-[var(--text-primary)] flex flex-col justify-between transition-colors duration-300">
      
      {/* Top Header */}
      <header className="px-6 py-4 border-b border-black/[0.06] dark:border-white/[0.08] flex items-center justify-between bg-[var(--bg-card)]">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#FF385C] to-[#FF6B8B] flex items-center justify-center text-white shadow-md">
            <Building2 className="w-5 h-5" />
          </div>
          <span className="font-extrabold text-lg text-[var(--text-display)] tracking-tight">
            HotelHub Setup Wizard
          </span>
        </div>

        {/* Step Indicator Badges */}
        <div className="hidden sm:flex items-center gap-2 text-xs font-semibold text-[var(--text-tertiary)]">
          <span className={`px-3 py-1 rounded-full transition-all ${step >= 1 ? 'bg-[#FF385C]/10 text-[#FF385C] font-bold' : ''}`}>1. Property</span>
          <span>→</span>
          <span className={`px-3 py-1 rounded-full transition-all ${step >= 2 ? 'bg-[#FF385C]/10 text-[#FF385C] font-bold' : ''}`}>2. Modules</span>
          <span>→</span>
          <span className={`px-3 py-1 rounded-full transition-all ${step >= 3 ? 'bg-[#FF385C]/10 text-[#FF385C] font-bold' : ''}`}>3. Channels</span>
          <span>→</span>
          <span className={`px-3 py-1 rounded-full transition-all ${step >= 4 ? 'bg-[#FF385C]/10 text-[#FF385C] font-bold' : ''}`}>4. Launch</span>
        </div>

        <ThemeToggle />
      </header>

      {/* Progress Bar Header */}
      <div className="w-full bg-black/[0.04] dark:border-white/[0.06] h-1.5 overflow-hidden">
        <div 
          className="bg-gradient-to-r from-[#FF385C] to-[#387FF7] h-full transition-all duration-500 ease-out"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Main Form Content Container */}
      <main className="flex-1 max-w-3xl w-full mx-auto px-4 py-8 sm:py-12 flex flex-col justify-center">
        
        {/* STEP 1: PROPERTY TYPE & SIZE */}
        {step === 1 && (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-400">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#FF385C] bg-[#FF385C]/10 px-3 py-1 rounded-full">
                Step 1 of 4
              </span>
              <h1 className="text-2xl sm:text-4xl font-extrabold text-[var(--text-display)] tracking-tight">
                Welcome, {userName}! Let's set up {propertyName}.
              </h1>
              <p className="text-sm text-[var(--text-tertiary)]">
                Tell us a little about your property so we can configure your default workspace settings.
              </p>
            </div>

            {/* Property Type Grid */}
            <div className="space-y-3">
              <label className="text-xs font-bold text-[var(--text-display)] uppercase tracking-wider">
                Select Property Type
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setPropertyType('resort')}
                  className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex items-start gap-3.5 ${
                    propertyType === 'resort'
                      ? 'border-[#FF385C] bg-[#FF385C]/5 shadow-md text-[var(--text-display)]'
                      : 'border-black/[0.08] dark:border-white/[0.12] bg-[var(--bg-card)] text-[var(--text-tertiary)] hover:border-black/20'
                  }`}
                >
                  <div className={`p-2.5 rounded-xl shrink-0 ${propertyType === 'resort' ? 'bg-[#FF385C] text-white' : 'bg-black/5 dark:bg-white/5'}`}>
                    <Hotel className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-sm text-[var(--text-display)]">Luxury Resort & Villas</div>
                    <div className="text-xs text-[var(--text-tertiary)] mt-0.5">Private villas, pool suites & valet services</div>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setPropertyType('boutique')}
                  className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex items-start gap-3.5 ${
                    propertyType === 'boutique'
                      ? 'border-[#FF385C] bg-[#FF385C]/5 shadow-md text-[var(--text-display)]'
                      : 'border-black/[0.08] dark:border-white/[0.12] bg-[var(--bg-card)] text-[var(--text-tertiary)] hover:border-black/20'
                  }`}
                >
                  <div className={`p-2.5 rounded-xl shrink-0 ${propertyType === 'boutique' ? 'bg-[#FF385C] text-white' : 'bg-black/5 dark:bg-white/5'}`}>
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-sm text-[var(--text-display)]">Boutique Hotel</div>
                    <div className="text-xs text-[var(--text-tertiary)] mt-0.5">10 to 60 rooms with personalized guest care</div>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setPropertyType('city')}
                  className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex items-start gap-3.5 ${
                    propertyType === 'city'
                      ? 'border-[#FF385C] bg-[#FF385C]/5 shadow-md text-[var(--text-display)]'
                      : 'border-black/[0.08] dark:border-white/[0.12] bg-[var(--bg-card)] text-[var(--text-tertiary)] hover:border-black/20'
                  }`}
                >
                  <div className={`p-2.5 rounded-xl shrink-0 ${propertyType === 'city' ? 'bg-[#FF385C] text-white' : 'bg-black/5 dark:bg-white/5'}`}>
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-sm text-[var(--text-display)]">City Business Hotel</div>
                    <div className="text-xs text-[var(--text-tertiary)] mt-0.5">High occupancy, fast corporate check-ins</div>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setPropertyType('apartments')}
                  className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex items-start gap-3.5 ${
                    propertyType === 'apartments'
                      ? 'border-[#FF385C] bg-[#FF385C]/5 shadow-md text-[var(--text-display)]'
                      : 'border-black/[0.08] dark:border-white/[0.12] bg-[var(--bg-card)] text-[var(--text-tertiary)] hover:border-black/20'
                  }`}
                >
                  <div className={`p-2.5 rounded-xl shrink-0 ${propertyType === 'apartments' ? 'bg-[#FF385C] text-white' : 'bg-black/5 dark:bg-white/5'}`}>
                    <BedDouble className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-sm text-[var(--text-display)]">Serviced Apartments</div>
                    <div className="text-xs text-[var(--text-tertiary)] mt-0.5">Extended stays & self-service amenities</div>
                  </div>
                </button>
              </div>
            </div>

            {/* Room Count Slider */}
            <div className="p-6 bg-[var(--bg-card)] border border-black/[0.08] dark:border-white/[0.12] rounded-2xl space-y-4">
              <div className="flex items-center justify-between text-sm font-bold text-[var(--text-display)]">
                <span>Room Inventory Count</span>
                <span className="text-[#FF385C] text-lg font-extrabold">{roomCount} Rooms</span>
              </div>
              <input 
                type="range"
                min="10"
                max="200"
                step="2"
                value={roomCount}
                onChange={(e) => setRoomCount(Number(e.target.value))}
                className="w-full accent-[#FF385C] h-2 bg-[var(--bg-left-panel)] rounded-lg cursor-pointer"
              />
            </div>
          </div>
        )}

        {/* STEP 2: MODULE SELECTION & TEAM INVITES */}
        {step === 2 && (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-400">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#387FF7] bg-[#387FF7]/10 px-3 py-1 rounded-full">
                Step 2 of 4
              </span>
              <h1 className="text-2xl sm:text-4xl font-extrabold text-[var(--text-display)] tracking-tight">
                Configure your active modules & team.
              </h1>
              <p className="text-sm text-[var(--text-tertiary)]">
                Choose the features your staff will see on Day 1. You can always change this later.
              </p>
            </div>

            {/* Active Modules Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => toggleModule('reservations')}
                className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex items-start justify-between ${
                  selectedModules.includes('reservations')
                    ? 'border-[#19B26B] bg-[#19B26B]/5 shadow-sm'
                    : 'border-black/[0.08] dark:border-white/[0.12] bg-[var(--bg-card)]'
                }`}
              >
                <div>
                  <div className="font-bold text-sm text-[var(--text-display)]">Front Desk & Reservations</div>
                  <div className="text-xs text-[var(--text-tertiary)] mt-0.5">Arrivals, departures & guest search</div>
                </div>
                {selectedModules.includes('reservations') && <CheckCircle2 className="w-5 h-5 text-[#19B26B] shrink-0" />}
              </button>

              <button
                type="button"
                onClick={() => toggleModule('housekeeping')}
                className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex items-start justify-between ${
                  selectedModules.includes('housekeeping')
                    ? 'border-[#19B26B] bg-[#19B26B]/5 shadow-sm'
                    : 'border-black/[0.08] dark:border-white/[0.12] bg-[var(--bg-card)]'
                }`}
              >
                <div>
                  <div className="font-bold text-sm text-[var(--text-display)]">Housekeeping & Turnovers</div>
                  <div className="text-xs text-[var(--text-tertiary)] mt-0.5">Cleaning status & inspection queue</div>
                </div>
                {selectedModules.includes('housekeeping') && <CheckCircle2 className="w-5 h-5 text-[#19B26B] shrink-0" />}
              </button>

              <button
                type="button"
                onClick={() => toggleModule('revenue')}
                className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex items-start justify-between ${
                  selectedModules.includes('revenue')
                    ? 'border-[#19B26B] bg-[#19B26B]/5 shadow-sm'
                    : 'border-black/[0.08] dark:border-white/[0.12] bg-[var(--bg-card)]'
                }`}
              >
                <div>
                  <div className="font-bold text-sm text-[var(--text-display)]">Revenue & ADR Yielding</div>
                  <div className="text-xs text-[var(--text-tertiary)] mt-0.5">RevPAR pacing & rate benchmarks</div>
                </div>
                {selectedModules.includes('revenue') && <CheckCircle2 className="w-5 h-5 text-[#19B26B] shrink-0" />}
              </button>

              <button
                type="button"
                onClick={() => toggleModule('ai')}
                className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex items-start justify-between ${
                  selectedModules.includes('ai')
                    ? 'border-[#19B26B] bg-[#19B26B]/5 shadow-sm'
                    : 'border-black/[0.08] dark:border-white/[0.12] bg-[var(--bg-card)]'
                }`}
              >
                <div>
                  <div className="font-bold text-sm text-[var(--text-display)]">AI Autonomous Signals</div>
                  <div className="text-xs text-[var(--text-tertiary)] mt-0.5">Plain-language VIP & rate notes</div>
                </div>
                {selectedModules.includes('ai') && <CheckCircle2 className="w-5 h-5 text-[#19B26B] shrink-0" />}
              </button>
            </div>

            {/* Invite Team Members Box */}
            <div className="p-6 bg-[var(--bg-card)] border border-black/[0.08] dark:border-white/[0.12] rounded-2xl space-y-4">
              <label className="text-xs font-bold text-[var(--text-display)] uppercase tracking-wider flex items-center gap-2">
                <Users className="w-4 h-4 text-[#FF385C]" />
                <span>Invite Team Members (Optional)</span>
              </label>

              <div className="flex gap-2">
                <input 
                  type="email"
                  placeholder="frontdesk@ariahotel.com"
                  value={teamInviteEmail}
                  onChange={(e) => setTeamInviteEmail(e.target.value)}
                  className="flex-1 h-10 px-3.5 text-xs rounded-xl bg-[var(--bg-canvas)] border border-black/[0.08] dark:border-white/[0.12] text-[var(--text-primary)] focus:outline-none focus:border-[#FF385C]"
                />
                <button
                  type="button"
                  onClick={handleAddTeamMember}
                  className="btn-primary text-xs h-10 px-4"
                >
                  <Plus className="w-4 h-4" />
                  <span>Invite</span>
                </button>
              </div>

              {invitedTeam.length > 0 && (
                <div className="space-y-2 pt-2">
                  <div className="text-xs font-semibold text-[var(--text-tertiary)]">Pending Invites:</div>
                  <div className="flex flex-wrap gap-2">
                    {invitedTeam.map((email, idx) => (
                      <span key={idx} className="px-3 py-1 rounded-full bg-[#FF385C]/10 text-[#FF385C] text-xs font-bold flex items-center gap-2">
                        <span>{email}</span>
                        <button type="button" onClick={() => handleRemoveTeamMember(email)} className="hover:text-red-600">
                          <Trash2 className="w-3 h-3" />
                        </button>
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* STEP 3: CHANNEL CONNECTIONS */}
        {step === 3 && (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-400">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#19B26B] bg-[#19B26B]/10 px-3 py-1 rounded-full">
                Step 3 of 4
              </span>
              <h1 className="text-2xl sm:text-4xl font-extrabold text-[var(--text-display)] tracking-tight">
                Connect your booking channels.
              </h1>
              <p className="text-sm text-[var(--text-tertiary)]">
                Sync rates and reservations automatically. You can also skip this and start with sample data.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { name: 'Booking.com', desc: 'Direct Channel & Rate Sync', tag: 'Recommended' },
                { name: 'Expedia Group', desc: 'Real-time Calendar Sync', tag: 'Popular' },
                { name: 'Agoda API', desc: 'Instant Availability', tag: 'Direct' },
                { name: 'Stripe Payments', desc: 'Automated Guest Invoicing', tag: 'Payments' }
              ].map((channel, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => toggleChannel(channel.name)}
                  className={`p-5 rounded-2xl border text-left transition-all cursor-pointer flex items-start justify-between ${
                    selectedChannels.includes(channel.name)
                      ? 'border-[#FF385C] bg-[#FF385C]/5 shadow-sm'
                      : 'border-black/[0.08] dark:border-white/[0.12] bg-[var(--bg-card)]'
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-sm text-[var(--text-display)]">{channel.name}</span>
                      <span className="px-2 py-0.5 rounded-full bg-black/5 dark:bg-white/10 text-[10px] font-bold text-[var(--text-tertiary)]">{channel.tag}</span>
                    </div>
                    <div className="text-xs text-[var(--text-tertiary)]">{channel.desc}</div>
                  </div>
                  <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${selectedChannels.includes(channel.name) ? 'border-[#FF385C] bg-[#FF385C] text-white' : 'border-black/20'}`}>
                    {selectedChannels.includes(channel.name) && <Check className="w-3.5 h-3.5" />}
                  </div>
                </button>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-700 dark:text-amber-300 font-medium flex items-center gap-3">
              <Zap className="w-4 h-4 shrink-0 text-amber-500" />
              <span>Don't have your API keys handy? No worries — HotelHub starts pre-loaded with sample reservations so you can test right away.</span>
            </div>
          </div>
        )}

        {/* STEP 4: LAUNCH WORKSPACE */}
        {step === 4 && (
          <div className="space-y-8 text-center animate-in fade-in zoom-in-95 duration-400">
            <div className="w-16 h-16 rounded-full bg-[#19B26B]/15 text-[#19B26B] flex items-center justify-center mx-auto shadow-lg">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#19B26B] bg-[#19B26B]/10 px-3 py-1 rounded-full">
                Configuration Complete
              </span>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-[var(--text-display)] tracking-tight">
                Your workspace is ready!
              </h1>
              <p className="text-base text-[var(--text-tertiary)] max-w-md mx-auto">
                We've configured {propertyName} with {roomCount} rooms, active team roles, and live demo inventory.
              </p>
            </div>

            {/* Config Summary Card */}
            <div className="p-6 bg-[var(--bg-card)] border border-black/[0.08] dark:border-white/[0.12] rounded-2xl max-w-md mx-auto text-left space-y-3 text-xs">
              <div className="flex justify-between py-1 border-b border-black/[0.04] dark:border-white/[0.06]">
                <span className="text-[var(--text-tertiary)]">Property Name</span>
                <span className="font-bold text-[var(--text-display)]">{propertyName}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-black/[0.04] dark:border-white/[0.06]">
                <span className="text-[var(--text-tertiary)]">Room Inventory</span>
                <span className="font-bold text-[var(--text-display)]">{roomCount} Rooms</span>
              </div>
              <div className="flex justify-between py-1 border-b border-black/[0.04] dark:border-white/[0.06]">
                <span className="text-[var(--text-tertiary)]">Active Modules</span>
                <span className="font-bold text-[#19B26B]">{selectedModules.length} Modules Active</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-[var(--text-tertiary)]">Connected Channels</span>
                <span className="font-bold text-[#387FF7]">{selectedChannels.length} Channels Synced</span>
              </div>
            </div>

            <div className="pt-4">
              <button
                type="button"
                onClick={handleFinishOnboarding}
                disabled={isFinishing}
                className="btn-primary text-sm px-10 py-3.5 h-12 shadow-xl shadow-[#FF385C]/30 w-full sm:w-auto"
              >
                {isFinishing ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Launching Property Workspace...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <span>Enter My Property Dashboard</span>
                    <ArrowRight className="w-4 h-4" />
                  </span>
                )}
              </button>
            </div>
          </div>
        )}

        {/* BOTTOM NAVIGATION CONTROLS */}
        {step < 4 && (
          <div className="flex items-center justify-between pt-10 border-t border-black/[0.06] dark:border-white/[0.08] mt-8">
            {step > 1 ? (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="btn-secondary text-xs"
              >
                <ArrowLeft className="w-4 h-4 mr-1" />
                <span>Back</span>
              </button>
            ) : (
              <div />
            )}

            <button
              type="button"
              onClick={() => setStep(step + 1)}
              className="btn-primary text-xs px-6"
            >
              <span>{step === 3 ? 'Review & Launch' : 'Continue'}</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>
          </div>
        )}

      </main>

      {/* Footer */}
      <footer className="py-4 text-center text-xs text-[var(--text-tertiary)] border-t border-black/[0.04] dark:border-white/[0.06]">
        © 2026 HotelHub Setup Wizard · Powered by AI Property OS
      </footer>

    </div>
  );
}
