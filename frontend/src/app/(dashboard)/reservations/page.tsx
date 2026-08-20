'use client';

import { useState } from 'react';
import { 
  CalendarDays, 
  Filter, 
  Plus, 
  Search, 
  CheckCircle2, 
  Clock, 
  ArrowUpRight, 
  Star, 
  X, 
  ChevronRight,
  User,
  Building2,
  Calendar,
  CreditCard,
  Phone,
  Mail,
  SlidersHorizontal,
  DollarSign,
  AlertCircle,
  Bed
} from 'lucide-react';
import { KpiCard } from '@/components/ui/kpi-card';
import { SectionCard } from '@/components/ui/section-card';

interface ReservationItem {
  ref: string;
  guest: string;
  vip: boolean;
  channel: 'Direct' | 'Booking.com' | 'Expedia' | 'Corporate' | 'Agoda';
  room: string;
  roomType: string;
  checkIn: string;
  checkOut: string;
  nights: number;
  arrivalTime?: string;
  status: 'Checked In' | 'Confirmed' | 'Pending' | 'Checked Out';
  payment: string;
  amountVal: number;
}

const RESERVATIONS_DATA: ReservationItem[] = [
  {
    ref: 'RES-8902',
    guest: 'Alexander Wright',
    vip: true,
    channel: 'Direct',
    room: 'Executive Suite 401',
    roomType: 'Executive Suite',
    checkIn: 'Aug 10',
    checkOut: 'Aug 14',
    nights: 4,
    arrivalTime: '14:30',
    status: 'Checked In',
    payment: 'Rp 6,800,000',
    amountVal: 6800000,
  },
  {
    ref: 'RES-8903',
    guest: 'Siti Rahma',
    vip: false,
    channel: 'Booking.com',
    room: 'Deluxe Ocean 302',
    roomType: 'Deluxe Ocean View',
    checkIn: 'Aug 10',
    checkOut: 'Aug 12',
    nights: 2,
    arrivalTime: '15:00',
    status: 'Confirmed',
    payment: 'Rp 3,200,000',
    amountVal: 3200000,
  },
  {
    ref: 'RES-8904',
    guest: 'Michael Chen (VIP)',
    vip: true,
    channel: 'Direct',
    room: 'Presidential Suite 601',
    roomType: 'Presidential Suite',
    checkIn: 'Aug 10',
    checkOut: 'Aug 17',
    nights: 7,
    arrivalTime: '12:00',
    status: 'Checked In',
    payment: 'Rp 18,500,000',
    amountVal: 18500000,
  },
  {
    ref: 'RES-8905',
    guest: 'Elena Rostova',
    vip: false,
    channel: 'Expedia',
    room: 'Beach Villa 105',
    roomType: 'Beach Villa',
    checkIn: 'Aug 11',
    checkOut: 'Aug 15',
    nights: 4,
    arrivalTime: '16:00',
    status: 'Pending',
    payment: 'Rp 9,400,000',
    amountVal: 9400000,
  },
  {
    ref: 'RES-8906',
    guest: 'Budi Santoso',
    vip: false,
    channel: 'Corporate',
    room: 'Superior Twin 204',
    roomType: 'Superior Twin',
    checkIn: 'Aug 12',
    checkOut: 'Aug 13',
    nights: 1,
    arrivalTime: '11:00',
    status: 'Confirmed',
    payment: 'Rp 1,450,000',
    amountVal: 1450000,
  },
  {
    ref: 'RES-8907',
    guest: 'Sarah Jenkins',
    vip: true,
    channel: 'Direct',
    room: 'Ocean Suite 502',
    roomType: 'Ocean Suite',
    checkIn: 'Aug 12',
    checkOut: 'Aug 16',
    nights: 4,
    arrivalTime: '14:00',
    status: 'Confirmed',
    payment: 'Rp 8,200,000',
    amountVal: 8200000,
  },
  {
    ref: 'RES-8908',
    guest: 'David Miller',
    vip: false,
    channel: 'Booking.com',
    room: 'Deluxe King 305',
    roomType: 'Deluxe',
    checkIn: 'Aug 08',
    checkOut: 'Aug 10',
    nights: 2,
    arrivalTime: '13:00',
    status: 'Checked Out',
    payment: 'Rp 2,800,000',
    amountVal: 2800000,
  },
];

import { useHotelStore } from '@/lib/store';

export default function ReservationsPage() {
  const { reservations, updateReservationStatus } = useHotelStore() as any;
  const [activeTab, setActiveTab] = useState<'table' | 'upcoming'>('table');
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [channelFilter, setChannelFilter] = useState('All');
  const [selectedRes, setSelectedRes] = useState<any | null>(null);
  const [showNewModal, setShowNewModal] = useState(false);

  const filteredReservations = reservations.filter((res: any) => {
    const guestName = (res.guestName || res.guest || '').toLowerCase();
    const ref = (res.ref || '').toLowerCase();
    const room = (res.room || '').toLowerCase();
    const category = (res.category || '').toLowerCase();
    const query = searchQuery.toLowerCase();

    const matchesSearch =
      guestName.includes(query) ||
      ref.includes(query) ||
      room.includes(query) ||
      category.includes(query);

    const matchesStatus = statusFilter === 'All' || res.status === statusFilter;
    const matchesChannel = channelFilter === 'All' || res.channel === channelFilter;
    return matchesSearch && matchesStatus && matchesChannel;
  });

  const handleStatusChange = (id: string, newStatus: 'Checked In' | 'Checked Out' | 'Confirmed') => {
    updateReservationStatus(id, newStatus);
    if (selectedRes && selectedRes.id === id) {
      setSelectedRes({ ...selectedRes, status: newStatus });
    }
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6 max-w-[1600px] mx-auto min-h-screen">
      
      {/* 1. Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-semibold text-[var(--text-tertiary)] uppercase tracking-wider block mb-1">
            Bookings & Front Desk Operations
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-display)] tracking-tight">
            Reservations
          </h1>
          <p className="text-xs text-[var(--text-tertiary)] mt-1 font-medium">
            Manage check-ins, reservations, and guest stay details.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setShowNewModal(true)}
          style={{ borderRadius: '10px' }}
          className="h-9 px-4 text-xs font-semibold bg-[#FF385C] hover:bg-[#E00B41] text-white shadow-xs transition-all cursor-pointer flex items-center gap-1.5 shrink-0"
        >
          <Plus className="w-4 h-4" />
          <span>New Reservation</span>
        </button>
      </div>

      {/* 2. Top KPI Cards (4 Grid - Reusable Component Standard) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-3.5">
        <KpiCard 
          label="TOTAL RESERVATIONS MTD"
          value="148 Bookings"
          icon={CalendarDays}
          iconBgColor="bg-emerald-500/10"
          iconColor="text-[#19B26B]"
          trendText="+12.5% vs last month"
          subtext="42% direct website bookings"
        />
        <KpiCard 
          label="TODAY'S CHECK-INS"
          value="12 Arrivals"
          icon={CheckCircle2}
          iconBgColor="bg-[#387FF7]/10"
          iconColor="text-[#387FF7] dark:text-[#6099F9]"
          trendText="8 guests arrived today"
          subtext="4 remaining for afternoon arrival"
        />
        <KpiCard 
          label="OCCUPANCY RATE"
          value="86% Occupied"
          icon={Bed}
          iconBgColor="bg-emerald-500/10"
          iconColor="text-[#19B26B]"
          trendText="103 / 120 rooms occupied"
          subtext="8 completed check-outs today"
        />
        <KpiCard 
          label="PENDING CONFIRMATIONS"
          value="5 Pending"
          icon={Clock}
          iconBgColor="bg-[#F79009]/10"
          iconColor="text-[#F79009]"
          trendText="Awaiting deposit receipt"
          trendColor="text-[#F79009]"
          subtext="Requires front office follow-up"
        />
      </div>

      {/* 3. View Switcher Tabs & Filter Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-black/[0.06] dark:border-white/[0.08] pb-4">
        
        {/* Workspace View Tabs */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setActiveTab('table')}
            style={{ borderRadius: '10px' }}
            className={`h-9 px-4 text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'table'
                ? 'bg-[#FF385C] text-white shadow-xs'
                : 'bg-[var(--bg-card)] text-[var(--text-tertiary)] hover:text-[var(--text-primary)] border border-black/[0.06] dark:border-white/[0.08]'
            }`}
          >
            <CalendarDays className="w-3.5 h-3.5" />
            <span>All Active Bookings Table</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('upcoming')}
            style={{ borderRadius: '10px' }}
            className={`h-9 px-4 text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'upcoming'
                ? 'bg-[#FF385C] text-white shadow-xs'
                : 'bg-[var(--bg-card)] text-[var(--text-tertiary)] hover:text-[var(--text-primary)] border border-black/[0.06] dark:border-white/[0.08]'
            }`}
          >
            <Clock className="w-3.5 h-3.5" />
            <span>Upcoming & Arrivals</span>
          </button>
        </div>

        {/* Filter Controls */}
        <div className="flex items-center gap-3">
          <div className="relative w-48 sm:w-64">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-tertiary)]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter by guest name, room # or ID..."
              style={{ borderRadius: '10px' }}
              className="w-full pl-9 pr-3 h-9 text-xs bg-[var(--bg-card)] border border-black/[0.08] dark:border-white/[0.12] text-[var(--text-primary)] placeholder-[var(--text-tertiary)] focus:outline-hidden focus:border-[#FF385C] transition-all"
            />
          </div>

          {/* Status Filter */}
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            style={{ borderRadius: '10px' }}
            className="h-9 px-3 bg-[var(--bg-card)] border border-black/[0.08] dark:border-white/[0.12] text-xs font-semibold text-[var(--text-primary)] cursor-pointer focus:outline-hidden"
          >
            <option value="All">All Statuses</option>
            <option value="Checked In">Checked In</option>
            <option value="Confirmed">Confirmed</option>
            <option value="Pending">Pending</option>
            <option value="Checked Out">Checked Out</option>
          </select>

          {/* Channel Filter */}
          <select
            value={channelFilter}
            onChange={(e) => setChannelFilter(e.target.value)}
            style={{ borderRadius: '10px' }}
            className="h-9 px-3 bg-[var(--bg-card)] border border-black/[0.08] dark:border-white/[0.12] text-xs font-semibold text-[var(--text-primary)] cursor-pointer focus:outline-hidden"
          >
            <option value="All">All Channels</option>
            <option value="Direct">Direct</option>
            <option value="Booking.com">Booking.com</option>
            <option value="Expedia">Expedia</option>
            <option value="Corporate">Corporate</option>
          </select>
        </div>

      </div>

      {/* 4. Tab Content 1: ALL ACTIVE BOOKINGS MASTER TABLE */}
      {activeTab === 'table' && (
        <SectionCard
          title="Active Bookings & Guest Stays"
          subtitle="Manage check-ins, reservations, and stay details"
          headerAction={
            <span className="text-xs font-semibold text-[var(--text-tertiary)]">
              Showing {filteredReservations.length} bookings
            </span>
          }
        >

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-black/[0.06] dark:border-white/[0.08] text-[var(--text-tertiary)] font-bold text-xs whitespace-nowrap">
                  <th className="py-3 px-4 font-semibold whitespace-nowrap">Booking Ref</th>
                  <th className="py-3 px-4 font-semibold whitespace-nowrap">Guest</th>
                  <th className="py-3 px-4 font-semibold whitespace-nowrap">Channel</th>
                  <th className="py-3 px-4 font-semibold whitespace-nowrap">Room Type & #</th>
                  <th className="py-3 px-4 font-semibold whitespace-nowrap">Check-In</th>
                  <th className="py-3 px-4 font-semibold whitespace-nowrap">Check-Out</th>
                  <th className="py-3 px-4 font-semibold whitespace-nowrap">Status</th>
                  <th className="py-3 px-4 font-semibold text-right whitespace-nowrap">Total Payment</th>
                  <th className="py-3 px-4 font-semibold text-right whitespace-nowrap">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/[0.04] dark:divide-white/[0.06]">
                {filteredReservations.map((res: any) => (
                  <tr 
                    key={res.ref}
                    className="hover:bg-black/[0.01] dark:hover:bg-white/[0.01] transition-colors group"
                  >
                    <td className="py-4 px-4 font-mono font-semibold text-[var(--text-tertiary)] text-xs">
                      {res.ref}
                    </td>
                    <td className="py-4 px-4 font-bold text-xs text-[var(--text-primary)]">
                      <div className="flex items-center gap-2">
                        <span>{res.guestName || res.guest}</span>
                        {res.vip && (
                          <span 
                            style={{ borderRadius: '9999px' }}
                            className="px-2 py-0.2 text-[9px] font-extrabold bg-amber-500/10 text-amber-500 flex items-center gap-0.5"
                          >
                            <Star className="w-2.5 h-2.5 fill-amber-500" /> VIP
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="py-4 px-4 text-xs text-[var(--text-tertiary)] font-medium">
                      {res.channel}
                    </td>
                    <td className="py-4 px-4 text-xs font-semibold text-[var(--text-primary)]">
                      {res.room}
                    </td>
                    <td className="py-4 px-4 text-xs font-medium text-[var(--text-primary)]">
                      {res.checkIn}
                    </td>
                    <td className="py-4 px-4 text-xs font-medium text-[var(--text-primary)]">
                      {res.checkOut}
                    </td>
                    <td className="py-4 px-4 whitespace-nowrap">
                      <span
                        style={{ borderRadius: '9999px' }}
                        className={`px-3 py-1 text-[11px] font-bold inline-flex items-center gap-1 whitespace-nowrap ${
                          res.status === 'Checked In'
                            ? 'bg-[#19B26B]/15 text-[#19B26B]'
                            : res.status === 'Confirmed'
                            ? 'bg-[#387FF7]/15 text-[#387FF7] dark:text-[#6099F9]'
                            : res.status === 'Pending'
                            ? 'bg-[#F79009]/15 text-[#F79009]'
                            : 'bg-gray-500/15 text-gray-500'
                        }`}
                      >
                        {res.status}
                      </span>
                    </td>
                    <td className="py-4 px-4 font-bold text-xs text-[var(--text-primary)] text-right whitespace-nowrap">
                      {res.totalPrice || res.payment || 'Rp 3,200,000'}
                    </td>
                    <td className="py-4 px-4 text-right whitespace-nowrap">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          if (res.status === 'Confirmed') {
                            handleStatusChange(res.id || res.ref, 'Checked In');
                          } else if (res.status === 'Checked In') {
                            handleStatusChange(res.id || res.ref, 'Checked Out');
                          } else {
                            setSelectedRes(res);
                          }
                        }}
                        style={{ borderRadius: '10px' }}
                        className={`h-8 px-3.5 text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                          res.status === 'Checked In'
                            ? 'bg-[var(--bg-left-panel)] border border-black/[0.08] dark:border-white/[0.12] text-[var(--text-primary)] hover:bg-[#F79009] hover:text-white'
                            : res.status === 'Confirmed'
                            ? 'bg-[#FF385C] hover:bg-[#E00B41] text-white shadow-xs'
                            : 'bg-[var(--bg-left-panel)] border border-black/[0.08] dark:border-white/[0.12] text-[var(--text-primary)] hover:bg-[#FF385C] hover:text-white'
                        }`}
                      >
                        {res.status === 'Checked In' ? 'Check-out' : res.status === 'Confirmed' ? 'Check-in' : 'Details'}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </SectionCard>
      )}

      {/* 5. Tab Content 2: UPCOMING & TODAY'S SCHEDULE QUEUE */}
      {activeTab === 'upcoming' && (
        <SectionCard
          title="Upcoming Reservations & Today's Schedule"
          subtitle="Real-time front desk queue for arrivals and guest check-ins"
        >

          <div className="divide-y divide-black/[0.04] dark:divide-white/[0.06]">
            {filteredReservations.filter((r: any) => r.status !== 'Checked Out').map((res: any) => (
              <div
                key={res.ref || res.id}
                onClick={() => setSelectedRes(res)}
                className="py-4 flex items-center justify-between gap-4 transition-all hover:bg-black/[0.01] dark:hover:bg-white/[0.01] px-3 rounded-xl cursor-pointer group"
              >
                <div className="truncate">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-[var(--text-primary)] truncate">
                      {res.guestName || res.guest || 'Guest Name'}
                    </span>
                    {res.vip && (
                      <span 
                        style={{ borderRadius: '9999px' }}
                        className="px-2 py-0.2 text-[9px] font-extrabold bg-amber-500/10 text-amber-500 flex items-center gap-0.5"
                      >
                        <Star className="w-2.5 h-2.5 fill-amber-500" /> VIP
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-[var(--text-tertiary)] mt-0.5 font-medium">
                    {res.room} · ETA: {res.arrivalTime || '14:00'} · {res.nights} Nights Stay ({res.checkIn} – {res.checkOut})
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <span
                    style={{ borderRadius: '9999px' }}
                    className={`px-3 py-1 text-[11px] font-bold ${
                      res.status === 'Checked In'
                        ? 'bg-[#19B26B]/15 text-[#19B26B]'
                        : res.status === 'Confirmed'
                        ? 'bg-[#387FF7]/15 text-[#387FF7]'
                        : 'bg-[#F79009]/15 text-[#F79009]'
                    }`}
                  >
                    {res.status}
                  </span>
                  <button
                    type="button"
                    style={{ borderRadius: '10px' }}
                    className="h-8 px-3 text-xs font-semibold bg-[var(--bg-left-panel)] border border-black/[0.08] dark:border-white/[0.12] text-[var(--text-primary)] group-hover:bg-[#FF385C] group-hover:text-white transition-all cursor-pointer"
                  >
                    Manage
                  </button>
                </div>
              </div>
            ))}
          </div>
        </SectionCard>
      )}

      {/* 6. Reservation Details Modal */}
      {selectedRes && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200">
          <div 
            style={{ borderRadius: '24px' }}
            className="w-full max-w-lg bg-[var(--bg-card)] border border-black/[0.08] dark:border-white/[0.12] shadow-2xl p-6 sm:p-8 space-y-6 relative"
          >
            <button
              type="button"
              onClick={() => setSelectedRes(null)}
              style={{ borderRadius: '50%' }}
              className="w-8 h-8 flex items-center justify-center bg-[var(--bg-left-panel)] text-[var(--text-tertiary)] hover:text-[var(--text-primary)] hover:bg-black/[0.05] dark:hover:bg-white/[0.08] transition-colors cursor-pointer absolute top-6 right-6"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="border-b border-black/[0.04] dark:border-white/[0.06] pb-4 pr-8">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-mono font-bold text-xs text-[var(--text-tertiary)]">
                  {selectedRes.ref}
                </span>
                <span 
                  style={{ borderRadius: '9999px' }}
                  className={`px-2.5 py-0.5 text-[10px] font-bold ${
                    selectedRes.status === 'Checked In'
                      ? 'bg-[#19B26B]/15 text-[#19B26B]'
                      : selectedRes.status === 'Confirmed'
                      ? 'bg-[#387FF7]/15 text-[#387FF7]'
                      : 'bg-[#F79009]/15 text-[#F79009]'
                  }`}
                >
                  {selectedRes.status}
                </span>
              </div>
              <h3 className="text-base font-bold text-[var(--text-display)] tracking-tight">
                {selectedRes.guestName || selectedRes.guest || 'Guest Name'}
              </h3>
              <p className="text-xs text-[var(--text-tertiary)] mt-0.5">
                Channel: {selectedRes.channel} · {selectedRes.room}
              </p>
            </div>

            <div className="space-y-3 text-xs text-[var(--text-tertiary)]">
              <div className="flex justify-between py-2 border-b border-black/[0.04] dark:border-white/[0.06]">
                <span className="font-semibold text-[var(--text-primary)]">Check-In Date:</span>
                <span className="font-bold text-[var(--text-display)]">{selectedRes.checkIn} (ETA: {selectedRes.arrivalTime || '14:00'})</span>
              </div>
              <div className="flex justify-between py-2 border-b border-black/[0.04] dark:border-white/[0.06]">
                <span className="font-semibold text-[var(--text-primary)]">Check-Out Date:</span>
                <span className="font-bold text-[var(--text-display)]">{selectedRes.checkOut} ({selectedRes.nights} Nights)</span>
              </div>
              <div className="flex justify-between py-2 border-b border-black/[0.04] dark:border-white/[0.06]">
                <span className="font-semibold text-[var(--text-primary)]">Room & Type:</span>
                <span className="font-medium text-[var(--text-primary)]">{selectedRes.room}</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="font-semibold text-[var(--text-primary)]">Total Payment:</span>
                <span className="font-extrabold text-[#FF385C] text-sm">{selectedRes.totalPrice || selectedRes.payment || 'Rp 3,200,000'}</span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-black/[0.04] dark:border-white/[0.06]">
              {selectedRes.status === 'Confirmed' ? (
                <button
                  type="button"
                  onClick={() => handleStatusChange(selectedRes.ref, 'Checked In')}
                  style={{ borderRadius: '10px' }}
                  className="h-9 px-4 text-xs font-semibold bg-[#19B26B] hover:bg-[#15965A] text-white transition-all cursor-pointer shadow-xs"
                >
                  Process Check-In
                </button>
              ) : selectedRes.status === 'Checked In' ? (
                <button
                  type="button"
                  onClick={() => handleStatusChange(selectedRes.ref, 'Checked Out')}
                  style={{ borderRadius: '10px' }}
                  className="h-9 px-4 text-xs font-semibold bg-[#F79009] hover:bg-[#D87D07] text-white transition-all cursor-pointer shadow-xs"
                >
                  Process Check-Out
                </button>
              ) : (
                <div />
              )}

              <button
                type="button"
                onClick={() => setSelectedRes(null)}
                style={{ borderRadius: '10px' }}
                className="h-9 px-4 text-xs font-semibold bg-[var(--bg-left-panel)] border border-black/[0.08] dark:border-white/[0.12] text-[var(--text-primary)] hover:bg-black/[0.05] dark:hover:bg-white/[0.08] transition-all cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 7. New Reservation Modal */}
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
                Create New Guest Reservation
              </h3>
              <p className="text-xs text-[var(--text-tertiary)] mt-0.5">
                Enter booking details and assign room
              </p>
            </div>

            <div className="space-y-4 text-xs">
              <div>
                <label className="block font-semibold text-[var(--text-primary)] mb-1">Guest Full Name</label>
                <input 
                  type="text"
                  placeholder="e.g. Alexander Wright"
                  style={{ borderRadius: '10px' }}
                  className="w-full h-9 px-3 bg-[var(--bg-left-panel)] border border-black/[0.08] dark:border-white/[0.12] text-[var(--text-primary)] focus:outline-hidden focus:border-[#FF385C]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-[var(--text-primary)] mb-1">Room Category</label>
                  <select 
                    style={{ borderRadius: '10px' }}
                    className="w-full h-9 px-3 bg-[var(--bg-left-panel)] border border-black/[0.08] dark:border-white/[0.12] text-[var(--text-primary)] focus:outline-hidden cursor-pointer"
                  >
                    <option>Executive Suite 401</option>
                    <option>Deluxe Ocean 302</option>
                    <option>Presidential Suite 601</option>
                    <option>Beach Villa 105</option>
                    <option>Superior Twin 204</option>
                  </select>
                </div>
                <div>
                  <label className="block font-semibold text-[var(--text-primary)] mb-1">Booking Channel</label>
                  <select 
                    style={{ borderRadius: '10px' }}
                    className="w-full h-9 px-3 bg-[var(--bg-left-panel)] border border-black/[0.08] dark:border-white/[0.12] text-[var(--text-primary)] focus:outline-hidden cursor-pointer"
                  >
                    <option>Direct Website</option>
                    <option>Booking.com</option>
                    <option>Expedia</option>
                    <option>Corporate</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-[var(--text-primary)] mb-1">Check-In Date</label>
                  <input 
                    type="text"
                    placeholder="Aug 10"
                    style={{ borderRadius: '10px' }}
                    className="w-full h-9 px-3 bg-[var(--bg-left-panel)] border border-black/[0.08] dark:border-white/[0.12] text-[var(--text-primary)] focus:outline-hidden focus:border-[#FF385C]"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-[var(--text-primary)] mb-1">Check-Out Date</label>
                  <input 
                    type="text"
                    placeholder="Aug 14"
                    style={{ borderRadius: '10px' }}
                    className="w-full h-9 px-3 bg-[var(--bg-left-panel)] border border-black/[0.08] dark:border-white/[0.12] text-[var(--text-primary)] focus:outline-hidden focus:border-[#FF385C]"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-[var(--text-primary)] mb-1">Total Payment Amount (IDR)</label>
                <input 
                  type="text"
                  placeholder="Rp 6,800,000"
                  style={{ borderRadius: '10px' }}
                  className="w-full h-9 px-3 bg-[var(--bg-left-panel)] border border-black/[0.08] dark:border-white/[0.12] text-[var(--text-primary)] focus:outline-hidden focus:border-[#FF385C]"
                />
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
                onClick={() => setShowNewModal(false)}
                style={{ borderRadius: '10px' }}
                className="h-9 px-4 text-xs font-semibold bg-[#FF385C] hover:bg-[#E00B41] text-white shadow-xs transition-all cursor-pointer"
              >
                Save Reservation
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
