'use client';

import { useState } from 'react';
import {
  Search,
  Bell,
  Plus,
  ChevronDown,
  X,
  CheckCircle2,
  Calendar,
  User as UserIcon,
  Bed,
  LogOut,
  Sparkles,
} from 'lucide-react';
import { ThemeToggle } from './theme-toggle';
import { useHotelStore } from '@/lib/store';

export function TopBar() {
  const {
    session,
    reservations,
    guests,
    rooms,
    notifications,
    markNotificationRead,
    markAllNotificationsRead,
    logout,
    addReservation,
  } = useHotelStore() as any;

  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [showNotifDrawer, setShowNotifDrawer] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showQuickResModal, setShowQuickResModal] = useState(false);

  // Quick Res Form State
  const [guestName, setGuestName] = useState('');
  const [category, setCategory] = useState('Deluxe King View');
  const [nights, setNights] = useState('2');
  const [phone, setPhone] = useState('+62 812 9900 1122');

  const unreadCount = notifications.filter((n: any) => !n.read).length;

  const filteredRes = reservations.filter((r: any) =>
    r.guestName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    r.ref.toLowerCase().includes(searchQuery.toLowerCase()) ||
    r.room.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCreateQuickRes = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName.trim()) return;

    addReservation({
      guestName,
      avatar: guestName.substring(0, 2).toUpperCase(),
      vip: false,
      email: `${guestName.toLowerCase().replace(/\s+/g, '.')}@gmail.com`,
      phone,
      room: `Room ${Math.floor(100 + Math.random() * 400)}`,
      category,
      checkIn: 'Today, 14:00',
      checkOut: `In ${nights} days`,
      nights: Number(nights),
      totalPrice: `Rp ${(Number(nights) * 1600000).toLocaleString('id-ID')}`,
      status: 'Confirmed',
      channel: 'Direct Front Desk',
      paymentStatus: 'Paid',
    });

    setShowQuickResModal(false);
    setGuestName('');
    alert(`Reservation created for ${guestName}!`);
  };

  return (
    <header className="h-16 border-b border-black/[0.06] dark:border-white/[0.08] bg-[var(--bg-card)] px-6 flex items-center justify-between sticky top-0 z-20 transition-colors">
      
      {/* Left: Search Bar with Live Popover Results */}
      <div className="relative w-72 sm:w-96">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setShowSearchModal(e.target.value.length > 0);
          }}
          placeholder="Search reservations, guests, rooms..."
          style={{ borderRadius: '9999px' }}
          className="w-full pl-4 pr-11 py-2 text-xs bg-[var(--bg-left-panel)] border border-black/[0.06] dark:border-white/[0.08] text-[var(--text-primary)] placeholder-[var(--text-tertiary)] focus:outline-none focus:ring-2 focus:ring-[#FF385C]/40 transition-all shadow-xs"
        />
        <button 
          type="button"
          onClick={() => setShowSearchModal(!showSearchModal)}
          style={{ borderRadius: '50%' }}
          className="w-7 h-7 absolute right-1.5 top-1/2 -translate-y-1/2 bg-[#FF385C] text-white flex items-center justify-center hover:bg-[#E00B41] transition-all cursor-pointer shadow-xs"
        >
          <Search className="w-3.5 h-3.5" />
        </button>

        {/* Live Search Results Overlay */}
        {showSearchModal && searchQuery.trim() !== '' && (
          <div 
            style={{ borderRadius: '16px' }}
            className="absolute top-12 left-0 right-0 bg-[var(--bg-card)] border border-black/[0.08] dark:border-white/[0.12] shadow-2xl p-4 space-y-3 z-50 animate-in fade-in duration-150"
          >
            <div className="flex items-center justify-between text-[11px] font-bold text-[var(--text-tertiary)] uppercase tracking-wider">
              <span>Matching Reservations ({filteredRes.length})</span>
              <button
                type="button"
                onClick={() => setShowSearchModal(false)}
                className="text-[var(--text-tertiary)] hover:text-[var(--text-primary)]"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="space-y-1.5 max-h-60 overflow-y-auto">
              {filteredRes.length === 0 ? (
                <div className="text-xs text-[var(--text-tertiary)] py-2 text-center">
                  No matching records found.
                </div>
              ) : (
                filteredRes.slice(0, 4).map((r: any) => (
                  <div
                    key={r.id}
                    onClick={() => {
                      setShowSearchModal(false);
                      window.location.href = '/reservations';
                    }}
                    style={{ borderRadius: '10px' }}
                    className="p-2.5 bg-[var(--bg-left-panel)] border border-black/[0.04] dark:border-white/[0.06] flex items-center justify-between hover:bg-black/[0.03] dark:hover:bg-white/[0.04] cursor-pointer transition-all"
                  >
                    <div>
                      <div className="font-bold text-xs text-[var(--text-primary)]">
                        {r.guestName} <span className="font-mono text-[10px] text-[var(--text-tertiary)]">({r.ref})</span>
                      </div>
                      <div className="text-[10px] text-[var(--text-tertiary)]">
                        {r.room} · {r.category}
                      </div>
                    </div>
                    <span 
                      style={{ borderRadius: '6px' }}
                      className="px-2 py-0.5 text-[9px] font-extrabold bg-[#19B26B]/15 text-[#19B26B]"
                    >
                      {r.status}
                    </span>
                  </div>
                ))
              )}
            </div>
          </div>
        )}
      </div>

      {/* Right Controls */}
      <div className="flex items-center gap-3">
        
        {/* New Reservation Action Button */}
        <button
          type="button"
          onClick={() => setShowQuickResModal(true)}
          style={{ borderRadius: '10px' }}
          className="hidden sm:flex items-center gap-1.5 h-9 px-4 py-2 bg-[var(--bg-card)] border border-black/[0.08] dark:border-white/[0.12] text-xs font-semibold text-[var(--text-primary)] hover:bg-black/[0.03] dark:hover:bg-white/[0.04] transition-all shadow-xs cursor-pointer shrink-0"
        >
          <Plus className="w-3.5 h-3.5 text-[#FF385C]" />
          <span>New reservation</span>
        </button>

        {/* Theme Toggle */}
        <ThemeToggle />

        {/* Notification Bell */}
        <div className="relative">
          <button
            type="button"
            onClick={() => setShowNotifDrawer(!showNotifDrawer)}
            style={{ borderRadius: '50%' }}
            className="relative w-9 h-9 flex items-center justify-center border border-black/[0.06] dark:border-white/[0.08] text-[var(--text-tertiary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-left-panel)] transition-all cursor-pointer"
          >
            <Bell className="w-4 h-4" />
            {unreadCount > 0 && (
              <span 
                style={{ borderRadius: '50%' }}
                className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-[#FF385C] text-white text-[9px] font-bold flex items-center justify-center overflow-hidden shrink-0 shadow-xs animate-pulse"
              >
                {unreadCount}
              </span>
            )}
          </button>

          {/* Notifications Slide-Out Popover */}
          {showNotifDrawer && (
            <div 
              style={{ borderRadius: '16px' }}
              className="absolute top-12 right-0 w-80 sm:w-96 bg-[var(--bg-card)] border border-black/[0.08] dark:border-white/[0.12] shadow-2xl p-4 space-y-3 z-50 animate-in fade-in duration-150"
            >
              <div className="flex items-center justify-between border-b border-black/[0.04] dark:border-white/[0.06] pb-3">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-xs text-[var(--text-display)]">
                    Notifications
                  </span>
                  {unreadCount > 0 && (
                    <span className="px-2 py-0.5 text-[9px] font-extrabold bg-[#FF385C]/15 text-[#FF385C] rounded-full">
                      {unreadCount} new
                    </span>
                  )}
                </div>
                <button
                  type="button"
                  onClick={markAllNotificationsRead}
                  className="text-[10px] font-semibold text-[#387FF7] hover:underline cursor-pointer"
                >
                  Mark all as read
                </button>
              </div>

              <div className="space-y-2 max-h-72 overflow-y-auto">
                {notifications.map((n: any) => (
                  <div
                    key={n.id}
                    onClick={() => markNotificationRead(n.id)}
                    style={{ borderRadius: '12px' }}
                    className={`p-3 border text-xs space-y-1 cursor-pointer transition-all ${
                      n.read
                        ? 'bg-[var(--bg-left-panel)] border-black/[0.04] dark:border-white/[0.06] opacity-75'
                        : 'bg-pink-500/5 border-[#FF385C]/30'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-[var(--text-primary)]">{n.title}</span>
                      <span className="text-[10px] text-[var(--text-tertiary)]">{n.time}</span>
                    </div>
                    <p className="text-[11px] text-[var(--text-tertiary)] leading-relaxed">
                      {n.message}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* User Profile Avatar Dropdown */}
        <div className="relative">
          <button
            type="button"
            onClick={() => setShowUserMenu(!showUserMenu)}
            style={{ borderRadius: '9999px' }}
            className="flex items-center gap-1.5 pl-1 pr-2 py-1 border border-black/[0.06] dark:border-white/[0.08] hover:bg-black/[0.03] dark:hover:bg-white/[0.04] transition-all cursor-pointer"
          >
            <div 
              style={{ borderRadius: '50%' }}
              className="w-7 h-7 bg-purple-600 text-white font-bold text-xs flex items-center justify-center shrink-0 shadow-xs"
            >
              {session.avatar || 'AS'}
            </div>
            <ChevronDown className="w-3.5 h-3.5 text-[var(--text-tertiary)]" />
          </button>

          {/* User Profile Menu */}
          {showUserMenu && (
            <div 
              style={{ borderRadius: '16px' }}
              className="absolute top-12 right-0 w-64 bg-[var(--bg-card)] border border-black/[0.08] dark:border-white/[0.12] shadow-2xl p-4 space-y-3 z-50 animate-in fade-in duration-150"
            >
              <div className="border-b border-black/[0.04] dark:border-white/[0.06] pb-3">
                <div className="font-bold text-xs text-[var(--text-primary)]">
                  {session.name || 'Aris Setiawan'}
                </div>
                <div className="text-[10px] text-[var(--text-tertiary)]">
                  {session.email || 'aris@ariahotel.com'}
                </div>
                <span 
                  style={{ borderRadius: '6px' }}
                  className="mt-1.5 inline-block px-2 py-0.5 text-[9px] font-extrabold uppercase bg-emerald-500/15 text-[#19B26B]"
                >
                  {session.role || 'General Manager'}
                </span>
              </div>

              <div className="space-y-1">
                <button
                  type="button"
                  onClick={() => {
                    setShowUserMenu(false);
                    window.location.href = '/settings/property';
                  }}
                  className="w-full text-left px-3 py-2 text-xs font-semibold text-[var(--text-primary)] hover:bg-black/[0.03] dark:hover:bg-white/[0.04] rounded-lg transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <UserIcon className="w-3.5 h-3.5 text-[var(--text-tertiary)]" />
                  <span>Workspace Settings</span>
                </button>
                <button
                  type="button"
                  onClick={logout}
                  className="w-full text-left px-3 py-2 text-xs font-semibold text-rose-500 hover:bg-rose-500/10 rounded-lg transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>Log Out</span>
                </button>
              </div>
            </div>
          )}
        </div>

      </div>

      {/* Quick Booking Modal */}
      {showQuickResModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4">
          <form
            onSubmit={handleCreateQuickRes}
            style={{ borderRadius: '24px' }}
            className="w-full max-w-md bg-[var(--bg-card)] border border-black/[0.08] dark:border-white/[0.12] p-6 shadow-2xl space-y-4 animate-in fade-in zoom-in-95 duration-200 relative"
          >
            <button
              type="button"
              onClick={() => setShowQuickResModal(false)}
              style={{ borderRadius: '50%' }}
              className="w-8 h-8 flex items-center justify-center bg-[var(--bg-left-panel)] text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors absolute top-6 right-6 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <h3 className="text-base font-bold text-[var(--text-display)]">
              Quick New Reservation
            </h3>

            <div className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-[var(--text-primary)] mb-1">
                  Guest Full Name
                </label>
                <input
                  type="text"
                  required
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  placeholder="e.g. Amanda Seyfried"
                  style={{ borderRadius: '10px' }}
                  className="w-full px-3.5 py-2 text-xs bg-[var(--bg-card)] border border-black/[0.08] dark:border-white/[0.12] text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[#FF385C]/40 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[var(--text-primary)] mb-1">
                  Room Category
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  style={{ borderRadius: '10px' }}
                  className="w-full px-3.5 py-2 text-xs bg-[var(--bg-card)] border border-black/[0.08] dark:border-white/[0.12] text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[#FF385C]/40 transition-all"
                >
                  <option value="Grand Ocean Suite">Grand Ocean Suite</option>
                  <option value="Deluxe King View">Deluxe King View</option>
                  <option value="Beachfront Pool Villa">Beachfront Pool Villa</option>
                  <option value="Standard Twin">Standard Twin</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[var(--text-primary)] mb-1">
                    Stay Duration
                  </label>
                  <select
                    value={nights}
                    onChange={(e) => setNights(e.target.value)}
                    style={{ borderRadius: '10px' }}
                    className="w-full px-3.5 py-2 text-xs bg-[var(--bg-card)] border border-black/[0.08] dark:border-white/[0.12] text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[#FF385C]/40 transition-all"
                  >
                    <option value="1">1 Night</option>
                    <option value="2">2 Nights</option>
                    <option value="3">3 Nights</option>
                    <option value="5">5 Nights</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-[var(--text-primary)] mb-1">
                    Phone Contact
                  </label>
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    style={{ borderRadius: '10px' }}
                    className="w-full px-3.5 py-2 text-xs bg-[var(--bg-card)] border border-black/[0.08] dark:border-white/[0.12] text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[#FF385C]/40 transition-all"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => setShowQuickResModal(false)}
                style={{ borderRadius: '10px' }}
                className="px-4 py-2 bg-[var(--bg-left-panel)] border border-black/[0.08] dark:border-white/[0.12] text-xs font-semibold text-[var(--text-primary)] hover:bg-black/[0.05] transition-all cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                style={{ borderRadius: '10px' }}
                className="px-4 py-2 bg-[#FF385C] text-white text-xs font-semibold shadow-xs hover:bg-[#E00B41] transition-all cursor-pointer"
              >
                Create Booking
              </button>
            </div>
          </form>
        </div>
      )}

    </header>
  );
}
