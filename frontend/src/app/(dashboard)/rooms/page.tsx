'use client';

import { useState } from 'react';
import {
  Bed,
  Plus,
  SlidersHorizontal,
  Search,
  CheckCircle2,
  Clock,
  Wrench,
  Sparkles,
  ChevronRight,
  Filter,
  Star,
  X,
  Building,
  User,
  Calendar,
  AlertTriangle,
  RefreshCw,
  ArrowUpRight,
} from 'lucide-react';
import { KpiCard } from '@/components/ui/kpi-card';
import { SectionCard } from '@/components/ui/section-card';

interface RoomItem {
  number: number;
  name: string;
  category: 'Ocean Suite' | 'Deluxe' | 'Standard' | 'Suite' | 'Garden Villa' | 'Executive';
  floor: number;
  status: 'Occupied' | 'Ready' | 'Dirty' | 'Maintenance';
  guestName?: string;
  vip?: boolean;
  etaNote?: string;
}

const ROOMS_DATA: RoomItem[] = [
  { number: 101, name: 'Deluxe Ocean 101', category: 'Deluxe', floor: 1, status: 'Dirty', etaNote: 'Housekeeping requested at 10:00' },
  { number: 102, name: 'Ocean Suite 102', category: 'Ocean Suite', floor: 1, status: 'Occupied', guestName: 'Alexander Wright', vip: true, etaNote: 'Departure tomorrow 11:00' },
  { number: 103, name: 'Standard 103', category: 'Standard', floor: 1, status: 'Occupied', guestName: 'Siti Rahma', etaNote: 'Departure Aug 12' },
  { number: 104, name: 'Deluxe 104', category: 'Deluxe', floor: 1, status: 'Occupied', guestName: 'Michael Chen', vip: true, etaNote: 'Departure Aug 17' },
  { number: 105, name: 'Garden Villa 105', category: 'Garden Villa', floor: 1, status: 'Occupied', guestName: 'Elena Rostova', etaNote: 'Departure Aug 15' },
  { number: 106, name: 'Standard 106', category: 'Standard', floor: 1, status: 'Ready', etaNote: 'Ready to sell' },
  { number: 107, name: 'Executive 107', category: 'Executive', floor: 1, status: 'Occupied', guestName: 'Budi Santoso', etaNote: 'Departure Aug 13' },
  { number: 108, name: 'Standard 108', category: 'Standard', floor: 1, status: 'Dirty', etaNote: 'Cleaning in progress · ETA 15:20' },
  { number: 109, name: 'Deluxe 109', category: 'Deluxe', floor: 1, status: 'Occupied', guestName: 'Sofia Alvarez', vip: true, etaNote: 'Departure Aug 17' },
  { number: 110, name: 'Ocean Suite 110', category: 'Ocean Suite', floor: 1, status: 'Occupied', guestName: 'Ayu Prameswari', vip: true, etaNote: 'Departure Aug 19' },
  { number: 111, name: 'Standard 111', category: 'Standard', floor: 1, status: 'Ready', etaNote: 'Ready to sell' },
  { number: 112, name: 'Deluxe 112', category: 'Deluxe', floor: 1, status: 'Maintenance', etaNote: 'AC service until 16:00' },
  { number: 113, name: 'Deluxe 113', category: 'Deluxe', floor: 1, status: 'Occupied', guestName: 'David Miller', etaNote: 'Departure Aug 14' },
  { number: 114, name: 'Standard 114', category: 'Standard', floor: 1, status: 'Occupied', guestName: 'Jessica Taylor', etaNote: 'Departure Aug 15' },
  { number: 115, name: 'Executive 115', category: 'Executive', floor: 1, status: 'Dirty', etaNote: 'Deep cleaning required' },
  { number: 116, name: 'Standard 116', category: 'Standard', floor: 1, status: 'Ready', etaNote: 'Ready to sell' },
  { number: 117, name: 'Ocean Suite 117', category: 'Ocean Suite', floor: 1, status: 'Occupied', guestName: 'Robert Vance', vip: true, etaNote: 'Departure Aug 16' },
  { number: 118, name: 'Standard 118', category: 'Standard', floor: 1, status: 'Occupied', guestName: 'Linda Kim', etaNote: 'Departure Aug 14' },
  { number: 119, name: 'Deluxe 119', category: 'Deluxe', floor: 1, status: 'Occupied', guestName: 'James Wilson', etaNote: 'Departure Aug 18' },
  { number: 120, name: 'Suite 120', category: 'Suite', floor: 1, status: 'Occupied', guestName: 'Patricia Garcia', vip: true, etaNote: 'Departure Aug 15' },
  { number: 121, name: 'Standard 121', category: 'Standard', floor: 1, status: 'Ready', etaNote: 'Ready to sell' },
  { number: 122, name: 'Deluxe 122', category: 'Deluxe', floor: 1, status: 'Dirty', etaNote: 'Linens change pending' },
  { number: 123, name: 'Executive 123', category: 'Executive', floor: 1, status: 'Maintenance', etaNote: 'Plumbing inspection' },
  { number: 124, name: 'Ocean Suite 124', category: 'Ocean Suite', floor: 1, status: 'Occupied', guestName: 'Thomas Anderson', vip: true, etaNote: 'Departure Aug 16' },
  { number: 125, name: 'Deluxe 125', category: 'Deluxe', floor: 1, status: 'Occupied', guestName: 'Emily Clark', etaNote: 'Departure Aug 14' },
  { number: 126, name: 'Standard 126', category: 'Standard', floor: 1, status: 'Ready', etaNote: 'Ready to sell' },
  { number: 127, name: 'Suite 127', category: 'Suite', floor: 1, status: 'Occupied', guestName: 'Daniel Whitmore', etaNote: 'Departure Aug 15' },
  { number: 128, name: 'Ocean Suite 128', category: 'Ocean Suite', floor: 1, status: 'Occupied', guestName: 'Kenji Tanaka', etaNote: 'Departure Aug 13' },
  { number: 129, name: 'Standard 129', category: 'Standard', floor: 1, status: 'Dirty', etaNote: 'Turn down service' },
  { number: 130, name: 'Deluxe 130', category: 'Deluxe', floor: 1, status: 'Occupied', guestName: 'Priya Nair', etaNote: 'Departure Aug 17' },
  { number: 131, name: 'Standard 131', category: 'Standard', floor: 1, status: 'Ready', etaNote: 'Ready to sell' },
  { number: 132, name: 'Garden Villa 132', category: 'Garden Villa', floor: 1, status: 'Occupied', guestName: 'Oliver Smith', vip: true, etaNote: 'Departure Aug 18' },
  { number: 133, name: 'Deluxe 133', category: 'Deluxe', floor: 1, status: 'Occupied', guestName: 'Emma Watson', etaNote: 'Departure Aug 14' },
  { number: 134, name: 'Executive 134', category: 'Executive', floor: 1, status: 'Maintenance', etaNote: 'Door lock recalibration' },
  { number: 135, name: 'Standard 135', category: 'Standard', floor: 1, status: 'Occupied', guestName: 'Liam Johnson', etaNote: 'Departure Aug 16' },
  { number: 136, name: 'Deluxe 136', category: 'Deluxe', floor: 1, status: 'Dirty', etaNote: 'Housekeeping in queue' },
];

import { useHotelStore } from '@/lib/store';

export default function RoomsPage() {
  const { rooms, updateRoomStatus } = useHotelStore() as any;
  const [activeTab, setActiveTab] = useState<'matrix' | 'roster'>('matrix');
  const [statusFilter, setStatusFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRoom, setSelectedRoom] = useState<any | null>(null);

  const filteredRooms = rooms.filter((room: any) => {
    const matchesSearch =
      room.number.toString().includes(searchQuery) ||
      room.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (room.guestName && room.guestName.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesStatus = statusFilter === 'All' || room.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6 max-w-[1600px] mx-auto min-h-screen">
          
          {/* Header Block (from Screenshot 1) */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-semibold text-[var(--text-tertiary)] uppercase tracking-wider block mb-1">
                Inventory & Room Operations
              </span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-display)] tracking-tight">
                Rooms
              </h1>
              <p className="text-xs text-[var(--text-tertiary)] mt-1 font-medium">
                Live status for every room, from occupancy to maintenance queue.
              </p>
            </div>

            {/* Top Action Buttons */}
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-2.5 sm:gap-3 w-full sm:w-auto shrink-0">
              <button
                type="button"
                className="btn-secondary w-full sm:w-auto flex-1 sm:flex-initial"
              >
                <SlidersHorizontal className="w-3.5 h-3.5 text-[var(--text-tertiary)]" />
                <span>Adjust availability</span>
              </button>
              <button
                type="button"
                className="btn-primary w-full sm:w-auto flex-1 sm:flex-initial"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>New reservation</span>
              </button>
            </div>
          </div>
          {/* 4 Top KPI Cards (Reusable Component Standard) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-3.5">
            <KpiCard 
              label="OCCUPIED ROOMS"
              value="78 Rooms"
              icon={Bed}
              iconBgColor="bg-emerald-500/10"
              iconColor="text-[#19B26B]"
              trendText="65% of inventory"
              subtext="Active guest stays"
            />
            <KpiCard 
              label="AVAILABLE ROOMS"
              value="26 Rooms"
              icon={CheckCircle2}
              iconBgColor="bg-[#387FF7]/10"
              iconColor="text-[#387FF7] dark:text-[#6099F9]"
              trendText="Ready to sell"
              trendIcon={CheckCircle2}
              trendColor="text-[#387FF7] dark:text-[#6099F9]"
              subtext="Inspected & vacant"
            />
            <KpiCard 
              label="OUT OF ORDER"
              value="2 Rooms"
              icon={Wrench}
              iconBgColor="bg-rose-500/10"
              iconColor="text-rose-500"
              trendText="Under maintenance"
              trendIcon={Wrench}
              trendColor="text-rose-500"
              subtext="Under active repair or service"
            />
            <KpiCard 
              label="CLEANING QUEUE"
              value="14 Rooms"
              icon={Clock}
              iconBgColor="bg-amber-500/10"
              iconColor="text-amber-500"
              trendText="Cleaning in progress"
              trendIcon={Clock}
              trendColor="text-amber-500"
              subtext="Turnover service queued"
            />
          </div>

          {/* View Mode Switcher & Filter Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-black/[0.06] dark:border-white/[0.08] pb-4">
            
            {/* View Tabs */}
            <div className="p-1 bg-[var(--bg-card)] border border-black/[0.06] dark:border-white/[0.08] rounded-xl flex items-center gap-1 w-full md:w-auto shrink-0">
              <button
                type="button"
                onClick={() => setActiveTab('matrix')}
                className={`h-9 px-3 sm:px-4 text-xs font-semibold whitespace-nowrap flex-1 md:flex-initial justify-center transition-all cursor-pointer flex items-center gap-1.5 rounded-lg ${
                  activeTab === 'matrix'
                    ? 'bg-[#FF385C] text-white shadow-xs'
                    : 'text-[var(--text-tertiary)] hover:text-[var(--text-primary)] hover:bg-black/[0.03] dark:hover:bg-white/[0.05]'
                }`}
              >
                <Building className="w-3.5 h-3.5 shrink-0" />
                <span className="sm:hidden">Availability Matrix</span>
                <span className="hidden sm:inline">Live Room Availability Matrix</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('roster')}
                className={`h-9 px-3 sm:px-4 text-xs font-semibold whitespace-nowrap flex-1 md:flex-initial justify-center transition-all cursor-pointer flex items-center gap-1.5 rounded-lg ${
                  activeTab === 'roster'
                    ? 'bg-[#FF385C] text-white shadow-xs'
                    : 'text-[var(--text-tertiary)] hover:text-[var(--text-primary)] hover:bg-black/[0.03] dark:hover:bg-white/[0.05]'
                }`}
              >
                <Bed className="w-3.5 h-3.5 shrink-0" />
                <span className="sm:hidden">Room Roster</span>
                <span className="hidden sm:inline">Room Roster List</span>
              </button>
            </div>

            {/* Filters */}
            <div className="flex items-center gap-2 sm:gap-3 w-full md:w-auto">
              <div className="relative flex-1 md:w-64 min-w-[160px]">
                <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-tertiary)]" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Filter by room # or guest..."
                  style={{ borderRadius: '10px' }}
                  className="w-full pl-8 pr-3 h-9 text-xs bg-[var(--bg-card)] border border-black/[0.08] dark:border-white/[0.12] text-[var(--text-primary)] placeholder-[var(--text-tertiary)] focus:outline-none focus:ring-2 focus:ring-[#FF385C]/40 transition-all"
                />
              </div>

              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                style={{ borderRadius: '10px' }}
                className="h-9 px-3 bg-[var(--bg-card)] border border-black/[0.08] dark:border-white/[0.12] text-xs font-semibold text-[var(--text-primary)] cursor-pointer focus:outline-none flex-1 md:flex-initial"
              >
                <option value="All">All Statuses</option>
                <option value="Occupied">Occupied</option>
                <option value="Ready">Ready</option>
                <option value="Dirty">Dirty</option>
                <option value="Maintenance">Maintenance</option>
              </select>
            </div>
          </div>

          {/* VIEW TAB 1: LIVE ROOM AVAILABILITY MATRIX (Screenshot 2 Fusion) */}
          {activeTab === 'matrix' && (
            <SectionCard
              title="Room Availability Matrix"
              subtitle="Click any room cell to manage live housekeeping status or view guest details"
              headerAction={
                <div className="flex items-center gap-3 text-[11px] font-semibold flex-wrap">
                  <div className="flex items-center gap-1.5">
                    <span style={{ borderRadius: '50%' }} className="w-2.5 h-2.5 bg-[#19B26B] shrink-0" />
                    <span className="text-[var(--text-primary)]">Occupied</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span style={{ borderRadius: '50%' }} className="w-2.5 h-2.5 bg-[#387FF7] shrink-0" />
                    <span className="text-[var(--text-primary)]">Ready</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span style={{ borderRadius: '50%' }} className="w-2.5 h-2.5 bg-[#F79009] shrink-0" />
                    <span className="text-[var(--text-primary)]">Dirty</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span style={{ borderRadius: '50%' }} className="w-2.5 h-2.5 bg-[#DE2031] shrink-0" />
                    <span className="text-[var(--text-primary)]">Maintenance</span>
                  </div>
                </div>
              }
            >
              {/* Room Grid Cells (Screenshot 2 Matrix Layout) */}
              <div className="grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-12 gap-3">
                {filteredRooms.map((room: any) => {
                  const isOccupied = room.status === 'Occupied';
                  const isReady = room.status === 'Ready';
                  const isDirty = room.status === 'Dirty';

                  const badgeStyle = isOccupied
                    ? 'bg-[#19B26B]/15 border-[#19B26B]/30 text-[#19B26B]'
                    : isReady
                    ? 'bg-[#387FF7]/15 border-[#387FF7]/30 text-[#387FF7] dark:text-[#6099F9]'
                    : isDirty
                    ? 'bg-[#F79009]/15 border-[#F79009]/30 text-[#F79009]'
                    : 'bg-[#DE2031]/15 border-[#DE2031]/30 text-[#DE2031]';

                  return (
                    <div
                      key={room.number}
                      onClick={() => setSelectedRoom(room)}
                      style={{ borderRadius: '14px' }}
                      className={`p-3.5 border ${badgeStyle} flex flex-col items-center justify-center text-center cursor-pointer transition-all hover:scale-105 shadow-xs`}
                    >
                      <div className="font-extrabold text-base tracking-tight">
                        {room.number}
                      </div>
                      <div className="text-[9px] font-extrabold uppercase tracking-wider mt-1">
                        {room.status}
                      </div>
                    </div>
                  );
                })}
              </div>
            </SectionCard>
          )}

          {/* VIEW TAB 2: ROOM ROSTER LIST (Screenshot 1 Fusion) */}
          {activeTab === 'roster' && (
            <SectionCard
              title="Room roster"
              subtitle="Comprehensive room inventory status list"
            >

              <div className="divide-y divide-black/[0.04] dark:divide-white/[0.06]">
                {filteredRooms.map((room: any) => (
                  <div
                    key={room.number}
                    onClick={() => setSelectedRoom(room)}
                    className="py-4 flex items-center justify-between gap-4 transition-all hover:bg-black/[0.01] dark:hover:bg-white/[0.01] px-3 rounded-xl cursor-pointer group"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-[var(--text-primary)]">
                          {room.name}
                        </span>
                        {room.vip && (
                          <span 
                            style={{ borderRadius: '6px' }}
                            className="px-2 py-0.5 text-[9px] font-extrabold uppercase bg-amber-500/10 text-amber-500"
                          >
                            VIP
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-[var(--text-tertiary)] mt-0.5">
                        {room.status} {room.guestName ? `· Guest: ${room.guestName}` : ''} {room.etaNote ? `· ${room.etaNote}` : ''}
                      </div>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <span
                        style={{ borderRadius: '9999px' }}
                        className={`px-3 py-1 text-[11px] font-bold ${
                          room.status === 'Occupied'
                            ? 'bg-[#19B26B]/10 text-[#19B26B]'
                            : room.status === 'Ready'
                            ? 'bg-[#387FF7]/10 text-[#387FF7] dark:text-[#6099F9]'
                            : room.status === 'Dirty'
                            ? 'bg-[#F79009]/10 text-[#F79009]'
                            : 'bg-[#DE2031]/10 text-[#DE2031]'
                        }`}
                      >
                        {room.status}
                      </span>
                      <ChevronRight className="w-4 h-4 text-[var(--text-tertiary)] group-hover:text-[var(--text-primary)] transition-colors" />
                    </div>
                  </div>
                ))}
              </div>
            </SectionCard>
          )}

      {/* Selected Room Status & Action Modal */}
      {selectedRoom && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4">
          <div 
            style={{ borderRadius: '24px' }}
            className="w-full max-w-lg bg-[var(--bg-card)] border border-black/[0.08] dark:border-white/[0.12] p-6 shadow-2xl space-y-6 animate-in fade-in zoom-in-95 duration-200"
          >
            <div className="flex items-center justify-between border-b border-black/[0.04] dark:border-white/[0.06] pb-4">
              <div className="flex items-center gap-3">
                <div 
                  style={{ borderRadius: '50%' }}
                  className="w-11 h-11 bg-rose-500/10 text-[#FF385C] font-bold text-sm flex items-center justify-center shrink-0 shadow-xs"
                >
                  <Bed className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-[var(--text-tertiary)]">
                      Room #{selectedRoom.number}
                    </span>
                    <span 
                      style={{ borderRadius: '9999px' }}
                      className={`px-2.5 py-0.5 text-[10px] font-extrabold uppercase ${
                        selectedRoom.status === 'Occupied'
                          ? 'bg-[#19B26B]/10 text-[#19B26B]'
                          : selectedRoom.status === 'Ready'
                          ? 'bg-[#387FF7]/10 text-[#387FF7]'
                          : selectedRoom.status === 'Dirty'
                          ? 'bg-[#F79009]/10 text-[#F79009]'
                          : 'bg-[#DE2031]/10 text-[#DE2031]'
                      }`}
                    >
                      {selectedRoom.status}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-[var(--text-display)] tracking-tight">
                    {selectedRoom.name}
                  </h3>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setSelectedRoom(null)}
                style={{ borderRadius: '50%' }}
                className="w-8 h-8 flex items-center justify-center bg-[var(--bg-left-panel)] text-[var(--text-tertiary)] hover:text-[var(--text-primary)] hover:bg-black/[0.05] dark:hover:bg-white/[0.08] transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Room Details Grid (16px rounded sub-card) */}
            <div className="space-y-4 text-xs">
              <div 
                style={{ borderRadius: '16px' }}
                className="p-5 bg-[var(--bg-left-panel)] border border-black/[0.06] dark:border-white/[0.08] space-y-3"
              >
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <div className="text-[10px] text-[var(--text-tertiary)]">Category</div>
                    <div className="font-bold text-[var(--text-primary)] mt-0.5">{selectedRoom.category}</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-[var(--text-tertiary)]">Floor Level</div>
                    <div className="font-bold text-[var(--text-primary)] mt-0.5">Floor {selectedRoom.floor}</div>
                  </div>
                </div>

                {selectedRoom.guestName && (
                  <div className="pt-2 border-t border-black/[0.04] dark:border-white/[0.06]">
                    <div className="text-[10px] text-[var(--text-tertiary)]">Current Guest Occupant</div>
                    <div className="font-bold text-[var(--text-primary)] text-sm mt-0.5 flex items-center gap-2">
                      <User className="w-3.5 h-3.5 text-[#FF385C]" />
                      <span>{selectedRoom.guestName}</span>
                    </div>
                  </div>
                )}

                {selectedRoom.etaNote && (
                  <div className="pt-2 border-t border-black/[0.04] dark:border-white/[0.06]">
                    <div className="text-[10px] text-[var(--text-tertiary)]">Notes / ETA Schedule</div>
                    <div className="font-semibold text-[var(--text-secondary)] mt-0.5">
                      {selectedRoom.etaNote}
                    </div>
                  </div>
                )}
              </div>

              {/* Status Management Bar */}
              <div className="space-y-2">
                <div className="text-xs font-bold text-[var(--text-display)]">
                  Update Housekeeping / Live Status
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      updateRoomStatus(selectedRoom.number, 'Ready');
                      setSelectedRoom(null);
                    }}
                    style={{ borderRadius: '10px' }}
                    className="py-2 px-3 bg-[#387FF7]/10 text-[#387FF7] hover:bg-[#387FF7] hover:text-white text-xs font-semibold transition-all cursor-pointer text-center"
                  >
                    Set as Ready
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      updateRoomStatus(selectedRoom.number, 'Dirty');
                      setSelectedRoom(null);
                    }}
                    style={{ borderRadius: '10px' }}
                    className="py-2 px-3 bg-[#F79009]/10 text-[#F79009] hover:bg-[#F79009] hover:text-white text-xs font-semibold transition-all cursor-pointer text-center"
                  >
                    Set as Dirty
                  </button>
                </div>
              </div>
            </div>

            {/* Modal Footer Actions */}
            <div className="flex items-center justify-end gap-3 pt-4 border-t border-black/[0.04] dark:border-white/[0.06]">
              <button
                type="button"
                onClick={() => setSelectedRoom(null)}
                style={{ borderRadius: '10px' }}
                className="h-9 px-4 bg-[var(--bg-left-panel)] border border-black/[0.08] dark:border-white/[0.12] text-xs font-semibold text-[var(--text-primary)] hover:bg-black/[0.04] dark:hover:bg-white/[0.06] transition-all cursor-pointer"
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
