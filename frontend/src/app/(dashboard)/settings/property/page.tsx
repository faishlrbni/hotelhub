'use client';

import { useState } from 'react';
import {
  Users,
  Layers,
  Key,
  Crown,
  UserPlus,
  ArrowRight,
  ChevronRight,
  Building,
  Shield,
  CreditCard,
  Bell,
  Globe,
  CheckCircle2,
  Lock,
  Save,
  Plus,
  X,
} from 'lucide-react';
import { KpiCard } from '@/components/ui/kpi-card';
import { SectionCard } from '@/components/ui/section-card';
import { useHotelStore } from '@/lib/store';

interface SettingConfigItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'Property' | 'Security' | 'Channels' | 'Billing' | 'Notifications';
}

const CONFIG_ITEMS: SettingConfigItem[] = [
  {
    id: 'CFG-001',
    title: 'Property profile',
    subtitle: 'Aria Hotel Bali · 120 rooms · Seminyak',
    category: 'Property',
  },
  {
    id: 'CFG-002',
    title: 'Team & roles',
    subtitle: '24 members · SSO with Google Workspace',
    category: 'Security',
  },
  {
    id: 'CFG-003',
    title: 'Channel integrations',
    subtitle: 'Booking.com · Expedia · Agoda · direct',
    category: 'Channels',
  },
  {
    id: 'CFG-004',
    title: 'Payment providers',
    subtitle: 'Stripe · Midtrans · bank transfer',
    category: 'Billing',
  },
  {
    id: 'CFG-005',
    title: 'Notification preferences',
    subtitle: 'Email · in-app · WhatsApp digest',
    category: 'Notifications',
  },
];

export default function SettingsPropertyPage() {
  const { activeProperty, setActiveProperty } = useHotelStore() as any;
  const [selectedConfig, setSelectedConfig] = useState<SettingConfigItem | null>(null);
  const [activeTab, setActiveTab] = useState<'profile' | 'team' | 'channels'>('profile');
  const [showInviteModal, setShowInviteModal] = useState(false);
  const [inviteEmail, setInviteEmail] = useState('');

  // Editable Form State
  const [hotelName, setHotelName] = useState(activeProperty?.name || 'Aria Hotel Bali');
  const [roomCount, setRoomCount] = useState(String(activeProperty?.rooms || 120));
  const [location, setLocation] = useState(activeProperty?.location || 'Seminyak, Bali');
  const [currency, setCurrency] = useState('IDR (Rp)');

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
            Workspace
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-display)] tracking-tight">
            Settings
          </h1>
          <p className="text-xs text-[var(--text-tertiary)] mt-1 font-medium">
            Everything that shapes how HotelHub works for your property and team.
          </p>
        </div>

        <div className="flex flex-wrap sm:flex-nowrap items-center gap-2.5 sm:gap-3 w-full sm:w-auto shrink-0">
          <button
            type="button"
            onClick={() => setShowInviteModal(true)}
            className="btn-primary w-full sm:w-auto flex-1 sm:flex-initial"
          >
            <UserPlus className="w-3.5 h-3.5" />
            <span>Invite teammate</span>
          </button>
        </div>
      </div>

      {/* 2. Top 4 KPI Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-3.5">
        <KpiCard
          label="TEAM MEMBERS"
          value="24"
          icon={Users}
          iconBgColor="bg-emerald-500/10"
          iconColor="text-[#19B26B]"
          trendText="4 admins"
          subtext="Active seat licenses"
        />
        <KpiCard
          label="INTEGRATIONS"
          value="9"
          icon={Layers}
          iconBgColor="bg-[#387FF7]/10"
          iconColor="text-[#387FF7] dark:text-[#6099F9]"
          trendText="All healthy"
          trendIcon={CheckCircle2}
          subtext="Connected PMS & OTA channels"
        />
        <KpiCard
          label="API KEYS"
          value="3"
          icon={Key}
          iconBgColor="bg-amber-500/10"
          iconColor="text-[#F79009]"
          trendText="Rotated 12 days ago"
          subtext="Secure webhook endpoints"
        />
        <KpiCard
          label="PLAN"
          value="Growth"
          icon={Crown}
          iconBgColor="bg-pink-500/10"
          iconColor="text-[#FF385C]"
          trendText="Renews 12 Aug 2026"
          subtext="Enterprise multi-property tier"
        />
      </div>

      {/* 3. Main Section Card: Configuration */}
      <SectionCard
        title="Configuration"
        headerAction={
          <button
            type="button"
            className="text-xs font-semibold text-[#387FF7] dark:text-[#6099F9] hover:underline flex items-center gap-1 cursor-pointer"
          >
            <span>View all</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        }
      >
        <div className="divide-y divide-black/[0.04] dark:divide-white/[0.06]">
          {CONFIG_ITEMS.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedConfig(item)}
              className="py-4 flex items-center justify-between gap-4 transition-all hover:bg-black/[0.01] dark:hover:bg-white/[0.01] px-3 rounded-xl cursor-pointer group"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <div 
                  style={{ borderRadius: '10px' }}
                  className="w-10 h-10 bg-emerald-500/10 text-[#19B26B] flex items-center justify-center shrink-0 font-bold text-xs"
                >
                  <Building className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-sm font-bold text-[var(--text-primary)] group-hover:text-[#FF385C] transition-colors truncate">
                    {item.title}
                  </div>
                  <div className="text-xs text-[var(--text-tertiary)] truncate mt-0.5">
                    {item.subtitle}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 shrink-0">
                <ChevronRight className="w-4 h-4 text-[var(--text-tertiary)] group-hover:text-[var(--text-primary)] transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </SectionCard>

      {/* 4. Interactive Configuration Panel Tabs */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left 2 Cols: Editable Property Details */}
        <div className="lg:col-span-2">
          <SectionCard
            title="Property Profile Settings"
            subtitle="Manage basic information, location & operational parameters"
            headerAction={
              <button
                type="button"
                onClick={() => {
                  if (activeProperty && setActiveProperty) {
                    setActiveProperty({
                      id: activeProperty.id,
                      name: hotelName,
                      rooms: Number(roomCount) || 120,
                      location,
                    });
                  }
                  setToastMessage(`✓ Property profile updated for "${hotelName}"!`);
                  setTimeout(() => setToastMessage(''), 4500);
                }}
                className="btn-primary"
              >
                <Save className="w-3.5 h-3.5" />
                <span>Save Changes</span>
              </button>
            }
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-[var(--text-primary)] mb-1">
                  Property Name
                </label>
                <input
                  type="text"
                  value={hotelName}
                  onChange={(e) => setHotelName(e.target.value)}
                  style={{ borderRadius: '10px' }}
                  className="w-full px-3.5 py-2 text-xs bg-[var(--bg-card)] border border-black/[0.08] dark:border-white/[0.12] text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[#FF385C]/40 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[var(--text-primary)] mb-1">
                  Total Room Inventory
                </label>
                <input
                  type="text"
                  value={roomCount}
                  onChange={(e) => setRoomCount(e.target.value)}
                  style={{ borderRadius: '10px' }}
                  className="w-full px-3.5 py-2 text-xs bg-[var(--bg-card)] border border-black/[0.08] dark:border-white/[0.12] text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[#FF385C]/40 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[var(--text-primary)] mb-1">
                  Location / Area
                </label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  style={{ borderRadius: '10px' }}
                  className="w-full px-3.5 py-2 text-xs bg-[var(--bg-card)] border border-black/[0.08] dark:border-white/[0.12] text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[#FF385C]/40 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[var(--text-primary)] mb-1">
                  Base Display Currency
                </label>
                <select
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                  style={{ borderRadius: '10px' }}
                  className="w-full px-3.5 py-2 text-xs bg-[var(--bg-card)] border border-black/[0.08] dark:border-white/[0.12] text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[#FF385C]/40 transition-all"
                >
                  <option value="IDR (Rp)">IDR (Rp) — Indonesian Rupiah</option>
                  <option value="USD ($)">USD ($) — US Dollar</option>
                  <option value="EUR (€)">EUR (€) — Euro</option>
                  <option value="AUD ($)">AUD ($) — Australian Dollar</option>
                </select>
              </div>
            </div>
          </SectionCard>
        </div>

        {/* Right Col: Active Team Roster Snapshot */}
        <div>
          <SectionCard
            title="Team & Access Control"
            subtitle="24 active workspace members"
          >
            <div className="space-y-3">
              {[
                { name: 'Aris Setiawan', role: 'General Manager', email: 'aris@ariahotel.com', admin: true },
                { name: 'Putu Kadek', role: 'Front Desk Lead', email: 'kadek@ariahotel.com', admin: false },
                { name: 'Maria Santos', role: 'Revenue Manager', email: 'maria@ariahotel.com', admin: true },
              ].map((member) => (
                <div
                  key={member.email}
                  style={{ borderRadius: '12px' }}
                  className="p-3 bg-[var(--bg-left-panel)] border border-black/[0.06] dark:border-white/[0.08] flex items-center justify-between gap-2"
                >
                  <div>
                    <div className="font-bold text-xs text-[var(--text-primary)]">
                      {member.name}
                    </div>
                    <div className="text-[10px] text-[var(--text-tertiary)]">
                      {member.role}
                    </div>
                  </div>
                  <span
                    style={{ borderRadius: '6px' }}
                    className={`px-2 py-0.5 text-[9px] font-extrabold uppercase ${
                      member.admin
                        ? 'bg-[#FF385C]/15 text-[#FF385C]'
                        : 'bg-[#387FF7]/15 text-[#387FF7] dark:text-[#6099F9]'
                    }`}
                  >
                    {member.admin ? 'Admin' : 'Staff'}
                  </span>
                </div>
              ))}
            </div>
          </SectionCard>
        </div>

      </div>

      {/* Invite Modal */}
      {showInviteModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4">
          <div 
            style={{ borderRadius: '24px' }}
            className="w-full max-w-md bg-[var(--bg-card)] border border-black/[0.08] dark:border-white/[0.12] p-6 shadow-2xl space-y-4 animate-in fade-in zoom-in-95 duration-200 relative"
          >
            <button
              type="button"
              onClick={() => setShowInviteModal(false)}
              style={{ borderRadius: '50%' }}
              className="w-8 h-8 flex items-center justify-center bg-[var(--bg-left-panel)] text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors absolute top-6 right-6 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <h3 className="text-base font-bold text-[var(--text-display)]">
              Invite Team Member
            </h3>
            <p className="text-xs text-[var(--text-tertiary)]">
              Send an email invitation to join Aria Hotel Bali workspace.
            </p>

            <div className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-[var(--text-primary)] mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  value={inviteEmail}
                  onChange={(e) => setInviteEmail(e.target.value)}
                  placeholder="colleague@ariahotel.com"
                  style={{ borderRadius: '10px' }}
                  className="w-full px-3.5 py-2 text-xs bg-[var(--bg-card)] border border-black/[0.08] dark:border-white/[0.12] text-[var(--text-primary)] placeholder-[var(--text-tertiary)] focus:outline-none focus:ring-2 focus:ring-[#FF385C]/40 transition-all"
                />
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => setShowInviteModal(false)}
                style={{ borderRadius: '10px' }}
                className="px-4 py-2 bg-[var(--bg-left-panel)] border border-black/[0.08] dark:border-white/[0.12] text-xs font-semibold text-[var(--text-primary)] hover:bg-black/[0.05] transition-all cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => {
                  const emailSent = inviteEmail || 'colleague@ariahotel.com';
                  setShowInviteModal(false);
                  setInviteEmail('');
                  setToastMessage(`✓ Invitation sent to ${emailSent}!`);
                  setTimeout(() => setToastMessage(''), 4500);
                }}
                style={{ borderRadius: '10px' }}
                className="px-4 py-2 bg-[#FF385C] text-white text-xs font-semibold shadow-xs hover:bg-[#E00B41] transition-all cursor-pointer"
              >
                Send Invite
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Config Item Detail Modal */}
      {selectedConfig && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4">
          <div 
            style={{ borderRadius: '24px' }}
            className="w-full max-w-lg bg-[var(--bg-card)] border border-black/[0.08] dark:border-white/[0.12] p-6 shadow-2xl space-y-6 animate-in fade-in zoom-in-95 duration-200 relative"
          >
            <button
              type="button"
              onClick={() => setSelectedConfig(null)}
              style={{ borderRadius: '50%' }}
              className="w-8 h-8 flex items-center justify-center bg-[var(--bg-left-panel)] text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors absolute top-6 right-6 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="border-b border-black/[0.04] dark:border-white/[0.06] pb-4 pr-8">
              <div className="font-mono font-bold text-xs text-[var(--text-tertiary)] mb-1">
                {selectedConfig.id}
              </div>
              <h3 className="text-lg font-bold text-[var(--text-display)]">
                {selectedConfig.title}
              </h3>
              <p className="text-xs text-[var(--text-tertiary)] mt-1">
                {selectedConfig.subtitle}
              </p>
            </div>

            <div className="p-3.5 bg-[var(--bg-left-panel)] rounded-xl border border-black/[0.04] dark:border-white/[0.06] text-xs space-y-2">
              <div className="flex justify-between">
                <span className="text-[var(--text-tertiary)]">Category</span>
                <span className="font-semibold text-[var(--text-primary)]">{selectedConfig.category}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[var(--text-tertiary)]">Status</span>
                <span className="font-semibold text-[#19B26B]">Active & Configured</span>
              </div>
            </div>

            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setSelectedConfig(null)}
                style={{ borderRadius: '10px' }}
                className="px-4 py-2 bg-[var(--bg-left-panel)] border border-black/[0.08] dark:border-white/[0.12] text-xs font-semibold text-[var(--text-primary)] hover:bg-black/[0.05] transition-all cursor-pointer"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => {
                  const cfgTitle = selectedConfig.title;
                  setSelectedConfig(null);
                  setToastMessage(`✓ ${cfgTitle} updated successfully!`);
                  setTimeout(() => setToastMessage(''), 4500);
                }}
                style={{ borderRadius: '10px' }}
                className="px-4 py-2 bg-[#FF385C] text-white text-xs font-semibold shadow-xs hover:bg-[#E00B41] transition-all cursor-pointer"
              >
                Update Configuration
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
