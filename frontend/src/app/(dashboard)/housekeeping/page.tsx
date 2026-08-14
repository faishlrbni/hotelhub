'use client';

import { useState } from 'react';
import {
  Sparkles,
  CheckCircle2,
  Clock,
  AlertTriangle,
  UserCheck,
  Plus,
  Search,
  Filter,
  Users,
  ChevronRight,
  Star,
  X,
  User,
  ShieldCheck,
  Building,
  CheckSquare,
  Wrench,
  Layers,
  ArrowUpRight,
} from 'lucide-react';
import { KpiCard } from '@/components/ui/kpi-card';
import { SectionCard } from '@/components/ui/section-card';

interface CleaningTask {
  id: string;
  room: string;
  category: string;
  vip: boolean;
  priority: 'High' | 'Medium' | 'Normal';
  status: 'Pending' | 'In Progress' | 'Inspected';
  assignedTo?: string;
  etaNote?: string;
  startedTime?: string;
  supervisor?: string;
  arrivalInfo?: string;
}

const CLEANING_TASKS: CleaningTask[] = [
  { id: 'HK-101', room: 'Suite 402', category: 'Grand Suite', vip: true, priority: 'High', status: 'Pending', assignedTo: 'Kadek', etaNote: 'Not started · assigned to Kadek', arrivalInfo: 'VIP arrival 14:00' },
  { id: 'HK-102', room: 'Ocean 511', category: 'Ocean View Suite', vip: true, priority: 'High', status: 'In Progress', assignedTo: 'Wayan', startedTime: 'started 13:45', etaNote: 'In progress · started 13:45', arrivalInfo: 'VIP arrival 16:00' },
  { id: 'HK-103', room: 'Deluxe 218', category: 'Deluxe Ocean View', vip: false, priority: 'Normal', status: 'In Progress', assignedTo: 'Maria', startedTime: 'started 14:05', etaNote: 'In progress · started 14:05', arrivalInfo: 'arrival 15:30' },
  { id: 'HK-104', room: 'Standard 108', category: 'Standard Twin', vip: false, priority: 'Normal', status: 'Pending', assignedTo: 'Unassigned', etaNote: 'Queued · 4th in list', arrivalInfo: 'arrival 18:20' },
  { id: 'HK-105', room: 'Garden 224', category: 'Garden Villa', vip: false, priority: 'High', status: 'Pending', assignedTo: 'Maintenance', etaNote: 'Blocked · reopens 16:00', arrivalInfo: 'Maintenance' },
  { id: 'HK-106', room: 'Room 204', category: 'Superior King', vip: false, priority: 'High', status: 'Pending', assignedTo: 'Unassigned', etaNote: 'Checkout turnover pending', arrivalInfo: 'arrival 14:30' },
  { id: 'HK-107', room: 'Room 312', category: 'Deluxe King', vip: false, priority: 'High', status: 'Pending', assignedTo: 'Unassigned', etaNote: 'Guest departed 11:30', arrivalInfo: 'arrival 15:00' },
  { id: 'HK-108', room: 'Suite 401', category: 'Executive Suite', vip: true, priority: 'High', status: 'Pending', assignedTo: 'Unassigned', etaNote: 'VIP arrival 14:30', arrivalInfo: 'VIP arrival 14:30' },
  { id: 'HK-109', room: 'Villa 101', category: 'Beach Villa', vip: true, priority: 'High', status: 'In Progress', assignedTo: 'Agus', startedTime: 'started 15m ago', etaNote: 'In progress · started 15m ago', arrivalInfo: 'VIP arrival 16:30' },
  { id: 'HK-110', room: 'Room 102', category: 'Ocean Suite', vip: false, priority: 'Normal', status: 'Inspected', supervisor: 'Ketut Supervisor', etaNote: 'Passed Inspection · Ready for Guest' },
  { id: 'HK-111', room: 'Room 105', category: 'Garden Villa', vip: false, priority: 'Normal', status: 'Inspected', supervisor: 'Komang Supervisor', etaNote: 'Passed Inspection · Ready for Guest' },
  { id: 'HK-112', room: 'Suite 502', category: 'Presidential Suite', vip: true, priority: 'High', status: 'Inspected', supervisor: 'Ketut Supervisor', etaNote: 'Passed Inspection · Ready for Guest' },
];

import { useHotelStore } from '@/lib/store';

export default function HousekeepingPage() {
  const { housekeeping, assignHousekeeper, updateHousekeepingStatus } = useHotelStore() as any;
  const [activeTab, setActiveTab] = useState<'kanban' | 'queue'>('kanban');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTask, setSelectedTask] = useState<any | null>(null);

  const filteredTasks = housekeeping.filter((task: any) =>
    task.room.toLowerCase().includes(searchQuery.toLowerCase()) ||
    task.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (task.assignedTo && task.assignedTo.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const pendingTasks = filteredTasks.filter((t: any) => t.status === 'Pending');
  const inProgressTasks = filteredTasks.filter((t: any) => t.status === 'In Progress');
  const inspectedTasks = filteredTasks.filter((t: any) => t.status === 'Inspected');

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6 max-w-[1600px] mx-auto min-h-screen">
          
          {/* Header Block (from Screenshot 1) */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-semibold text-[var(--text-tertiary)] uppercase tracking-wider block mb-1">
                Operations & Turnover Management
              </span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-display)] tracking-tight">
                Housekeeping
              </h1>
              <p className="text-xs text-[var(--text-tertiary)] mt-1 font-medium">
                Keep every arriving guest walking into a spotless room — on time, every time.
              </p>
            </div>

            {/* Top Action Buttons */}
            <div className="flex items-center gap-3 shrink-0">
              <button
                type="button"
                style={{ borderRadius: '10px' }}
                className="h-9 px-4 py-2 bg-[var(--bg-primary_solid, #181D27)] text-white text-xs font-semibold hover:opacity-90 transition-all shadow-xs cursor-pointer flex items-center gap-1.5"
              >
                <UserCheck className="w-3.5 h-3.5" />
                <span>Assign staff</span>
              </button>
              <button
                type="button"
                style={{ borderRadius: '10px' }}
                className="h-9 px-4 py-2 bg-[#FF385C] hover:bg-[#E00B41] text-white text-xs font-semibold shadow-[0_4px_14px_rgba(255,56,92,0.35)] hover:shadow-[0_6px_20px_rgba(255,56,92,0.45)] flex items-center gap-1.5 transition-all cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>New task</span>
              </button>
            </div>
          </div>
          
          {/* 4 Top KPI Metric Cards (Reusable Component Standard) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-3.5">
            <KpiCard 
              label="ROOMS CLEANED TODAY"
              value="62 Rooms"
              icon={CheckCircle2}
              iconBgColor="bg-emerald-500/10"
              iconColor="text-[#19B26B]"
              trendText="81.5% daily completion"
              subtext="Out of 76 planned turnarounds"
            />
            <KpiCard 
              label="TURNOVER IN PROGRESS"
              value="9 Rooms"
              icon={Clock}
              iconBgColor="bg-[#387FF7]/10"
              iconColor="text-[#387FF7] dark:text-[#6099F9]"
              trendText="Avg. 22 mins per room"
              trendIcon={Clock}
              trendColor="text-[#387FF7] dark:text-[#6099F9]"
              subtext="Active housekeepers cleaning"
            />
            <KpiCard 
              label="BLOCKING VIP ARRIVAL"
              value="6 Tasks"
              icon={AlertTriangle}
              iconBgColor="bg-[#F79009]/10"
              iconColor="text-[#F79009]"
              trendText="High priority queue"
              trendIcon={AlertTriangle}
              trendColor="text-[#F79009]"
              subtext="High priority room turnover"
            />
            <KpiCard 
              label="STAFF ON SHIFT"
              value="12 Staff"
              icon={UserCheck}
              iconBgColor="bg-emerald-500/10"
              iconColor="text-[#19B26B]"
              trendText="100% active shift"
              trendIcon={UserCheck}
              subtext="Floor 1, 2 & Villa teams on duty"
            />
          </div>

          {/* View Mode Switcher & Filter Controls Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-black/[0.06] dark:border-white/[0.08] pb-4">
            
            {/* View Tabs */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setActiveTab('kanban')}
                style={{ borderRadius: '10px' }}
                className={`h-9 px-4 text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'kanban'
                    ? 'bg-[#FF385C] text-white shadow-xs'
                    : 'bg-[var(--bg-card)] text-[var(--text-tertiary)] hover:text-[var(--text-primary)] border border-black/[0.06] dark:border-white/[0.08]'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Kanban Turnover Board</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('queue')}
                style={{ borderRadius: '10px' }}
                className={`h-9 px-4 text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'queue'
                    ? 'bg-[#FF385C] text-white shadow-xs'
                    : 'bg-[var(--bg-card)] text-[var(--text-tertiary)] hover:text-[var(--text-primary)] border border-black/[0.06] dark:border-white/[0.08]'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Priority Cleaning Queue</span>
              </button>
            </div>

            {/* Filter Input */}
            <div className="relative w-64">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-tertiary)]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Filter by room or staff..."
                style={{ borderRadius: '10px' }}
                className="w-full pl-8 pr-3 py-1.5 text-xs bg-[var(--bg-card)] border border-black/[0.08] dark:border-white/[0.12] text-[var(--text-primary)] placeholder-[var(--text-tertiary)] focus:outline-none focus:ring-2 focus:ring-[#FF385C]/40 transition-all"
              />
            </div>
          </div>

          {/* VIEW TAB 1: KANBAN TURNOVER BOARD (Screenshot 2 Fusion) */}
          {activeTab === 'kanban' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Column 1: Pending Cleaning (Amber) */}
              <div 
                style={{ borderRadius: '24px' }}
                className="p-6 bg-[var(--bg-card)] border border-black/[0.04] dark:border-white/[0.08] shadow-[0_4px_16px_rgba(0,0,0,0.02)] space-y-4"
              >
                <div className="flex items-center justify-between font-bold text-sm text-[#F79009]">
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4" /> Pending Cleaning ({pendingTasks.length})
                  </span>
                </div>

                <div className="space-y-3">
                  {pendingTasks.map((task: any) => (
                    <div
                      key={task.id}
                      onClick={() => setSelectedTask(task)}
                      style={{ borderRadius: '16px' }}
                      className="p-4 bg-[var(--bg-left-panel)] border border-black/[0.06] dark:border-white/[0.08] space-y-2 cursor-pointer transition-all hover:scale-[1.02] shadow-xs"
                    >
                      <div className="flex items-center justify-between">
                        <div className="font-bold text-xs text-[var(--text-display)]">
                          {task.room} {task.arrivalInfo ? `(${task.arrivalInfo})` : ''}
                        </div>
                        {task.vip && (
                          <span 
                            style={{ borderRadius: '6px' }}
                            className="px-2 py-0.5 text-[9px] font-extrabold uppercase bg-amber-500/10 text-amber-500 flex items-center gap-0.5"
                          >
                            <Star className="w-2.5 h-2.5 fill-amber-500" /> VIP
                          </span>
                        )}
                      </div>
                      <div className="flex justify-between items-center text-[10px] text-[var(--text-tertiary)]">
                        <span>Priority: {task.priority}</span>
                        <span className="text-[#F79009] font-bold">{task.assignedTo || 'Unassigned'}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Column 2: In Progress (Blue) */}
              <div 
                style={{ borderRadius: '24px' }}
                className="p-5 bg-[var(--bg-card)] border border-black/[0.04] dark:border-white/[0.08] shadow-[0_4px_16px_rgba(0,0,0,0.02)] space-y-4"
              >
                <div className="flex items-center justify-between font-bold text-sm text-[#387FF7]">
                  <span className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4" /> In Progress ({inProgressTasks.length})
                  </span>
                </div>

                <div className="space-y-3">
                  {inProgressTasks.map((task: any) => (
                    <div
                      key={task.id}
                      onClick={() => setSelectedTask(task)}
                      style={{ borderRadius: '16px' }}
                      className="p-4 bg-[var(--bg-left-panel)] border border-black/[0.06] dark:border-white/[0.08] space-y-2 cursor-pointer transition-all hover:scale-[1.02] shadow-xs"
                    >
                      <div className="flex items-center justify-between">
                        <div className="font-bold text-xs text-[var(--text-display)]">
                          {task.room} — Assigned to {task.assignedTo}
                        </div>
                        {task.vip && (
                          <span 
                            style={{ borderRadius: '6px' }}
                            className="px-2 py-0.5 text-[9px] font-extrabold uppercase bg-amber-500/10 text-amber-500 flex items-center gap-0.5"
                          >
                            <Star className="w-2.5 h-2.5 fill-amber-500" /> VIP
                          </span>
                        )}
                      </div>
                      <div className="flex justify-between items-center text-[10px] text-[var(--text-tertiary)]">
                        <span>{task.startedTime || 'Started 15m ago'}</span>
                        <span className="text-[#387FF7] font-bold">Cleaning...</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Column 3: Inspected & Ready (Green) */}
              <div 
                style={{ borderRadius: '24px' }}
                className="p-5 bg-[var(--bg-card)] border border-black/[0.04] dark:border-white/[0.08] shadow-[0_4px_16px_rgba(0,0,0,0.02)] space-y-4"
              >
                <div className="flex items-center justify-between font-bold text-sm text-[#19B26B]">
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" /> Inspected & Ready ({inspectedTasks.length})
                  </span>
                </div>

                <div className="space-y-3">
                  {inspectedTasks.map((task: any) => (
                    <div
                      key={task.id}
                      onClick={() => setSelectedTask(task)}
                      style={{ borderRadius: '16px' }}
                      className="p-4 bg-[var(--bg-left-panel)] border border-black/[0.06] dark:border-white/[0.08] space-y-2 cursor-pointer transition-all hover:scale-[1.02] shadow-xs"
                    >
                      <div className="flex items-center justify-between">
                        <div className="font-bold text-xs text-[var(--text-display)]">
                          {task.room} — Inspected by Supervisor
                        </div>
                        {task.vip && (
                          <span 
                            style={{ borderRadius: '6px' }}
                            className="px-2 py-0.5 text-[9px] font-extrabold uppercase bg-amber-500/10 text-amber-500 flex items-center gap-0.5"
                          >
                            <Star className="w-2.5 h-2.5 fill-amber-500" /> VIP
                          </span>
                        )}
                      </div>
                      <div className="flex justify-between items-center text-[10px] text-[var(--text-tertiary)]">
                        <span className="text-[#19B26B] font-semibold">Passed Inspection</span>
                        <span className="text-[#19B26B] font-bold">Ready for Guest</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* VIEW TAB 2: PRIORITY CLEANING QUEUE LIST (Screenshot 1 Fusion) */}
          {activeTab === 'queue' && (
            <SectionCard
              title="Cleaning queue"
              subtitle="Prioritized room turnover list based on VIP arrival ETAs"
            >

              <div className="divide-y divide-black/[0.04] dark:divide-white/[0.06]">
                {filteredTasks.map((task: any) => (
                  <div
                    key={task.id}
                    onClick={() => setSelectedTask(task)}
                    className="py-4 flex items-center justify-between gap-4 transition-all hover:bg-black/[0.01] dark:hover:bg-white/[0.01] px-3 rounded-xl cursor-pointer group"
                  >
                    <div className="truncate">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-[var(--text-primary)] truncate">
                          {task.room} · {task.arrivalInfo || task.category}
                        </span>
                        {task.priority === 'High' && (
                          <span 
                            style={{ borderRadius: '6px' }}
                            className="px-2 py-0.5 text-[9px] font-extrabold uppercase bg-rose-500/10 text-[#FF385C]"
                          >
                            PRIORITY
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-[var(--text-tertiary)] truncate mt-0.5">
                        {task.etaNote}
                      </div>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <span
                        style={{ borderRadius: '9999px' }}
                        className={`px-3 py-1 text-[11px] font-bold ${
                          task.status === 'Inspected'
                            ? 'bg-[#19B26B]/10 text-[#19B26B]'
                            : task.status === 'In Progress'
                            ? 'bg-[#387FF7]/10 text-[#387FF7] dark:text-[#6099F9]'
                            : 'bg-[#F79009]/10 text-[#F79009]'
                        }`}
                      >
                        {task.status}
                      </span>
                      <ChevronRight className="w-4 h-4 text-[var(--text-tertiary)] group-hover:text-[var(--text-primary)] transition-colors" />
                    </div>
                  </div>
                ))}
              </div>
            </SectionCard>
          )}

      {/* Selected Task Details & Staff Assignment Modal */}
      {selectedTask && (
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
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-[var(--text-tertiary)]">
                      {selectedTask.id}
                    </span>
                    <span 
                      style={{ borderRadius: '9999px' }}
                      className={`px-2.5 py-0.5 text-[10px] font-extrabold uppercase ${
                        selectedTask.status === 'Inspected'
                          ? 'bg-[#19B26B]/10 text-[#19B26B]'
                          : selectedTask.status === 'In Progress'
                          ? 'bg-[#387FF7]/10 text-[#387FF7]'
                          : 'bg-[#F79009]/10 text-[#F79009]'
                      }`}
                    >
                      {selectedTask.status}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-[var(--text-display)] tracking-tight">
                    {selectedTask.room}
                  </h3>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setSelectedTask(null)}
                style={{ borderRadius: '50%' }}
                className="w-8 h-8 flex items-center justify-center bg-[var(--bg-left-panel)] text-[var(--text-tertiary)] hover:text-[var(--text-primary)] hover:bg-black/[0.05] dark:hover:bg-white/[0.08] transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Task Details (16px rounded sub-card) */}
            <div className="space-y-4 text-xs">
              <div 
                style={{ borderRadius: '16px' }}
                className="p-5 bg-[var(--bg-left-panel)] border border-black/[0.06] dark:border-white/[0.08] space-y-3"
              >
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <div className="text-[10px] text-[var(--text-tertiary)]">Room Category</div>
                    <div className="font-bold text-[var(--text-primary)] mt-0.5">{selectedTask.category}</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-[var(--text-tertiary)]">Assigned Housekeeper</div>
                    <div className="font-bold text-[var(--text-primary)] mt-0.5">{selectedTask.assignedTo || 'Unassigned'}</div>
                  </div>
                </div>

                {selectedTask.arrivalInfo && (
                  <div className="pt-2 border-t border-black/[0.04] dark:border-white/[0.06]">
                    <div className="text-[10px] text-[var(--text-tertiary)]">Guest Arrival Schedule</div>
                    <div className="font-semibold text-[#FF385C] mt-0.5">
                      {selectedTask.arrivalInfo}
                    </div>
                  </div>
                )}
              </div>

              {/* Quick Actions */}
              <div className="space-y-2">
                <div className="text-xs font-bold text-[var(--text-display)]">
                  Update Cleaning Status
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      updateHousekeepingStatus(selectedTask.id, 'In Progress');
                      setSelectedTask(null);
                    }}
                    style={{ borderRadius: '10px' }}
                    className="py-2 px-3 bg-[#387FF7]/10 text-[#387FF7] hover:bg-[#387FF7] hover:text-white text-xs font-semibold transition-all cursor-pointer text-center"
                  >
                    Start Cleaning
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      updateHousekeepingStatus(selectedTask.id, 'Inspected');
                      setSelectedTask(null);
                    }}
                    style={{ borderRadius: '10px' }}
                    className="py-2 px-3 bg-[#19B26B]/10 text-[#19B26B] hover:bg-[#19B26B] hover:text-white text-xs font-semibold transition-all cursor-pointer text-center"
                  >
                    Mark Inspected & Ready
                  </button>
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex items-center justify-end gap-3 pt-4 border-t border-black/[0.04] dark:border-white/[0.06]">
              <button
                type="button"
                onClick={() => setSelectedTask(null)}
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
