'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  BedDouble,
  LayoutDashboard,
  CalendarDays,
  Users,
  Bed,
  Sparkles,
  TrendingUp,
  Megaphone,
  Star,
  BarChart3,
  Brain,
  Settings,
  ChevronLeft,
  ChevronRight,
  Building2,
  X,
  Check,
} from 'lucide-react';
import { useHotelStore } from '@/lib/store';

const NAV_ITEMS = [
  { label: 'Overview', href: '/dashboard', icon: LayoutDashboard },
  { label: 'Reservations', href: '/reservations', icon: CalendarDays },
  { label: 'Guests', href: '/guests', icon: Users },
  { label: 'Rooms', href: '/rooms', icon: Bed },
  { label: 'Housekeeping', href: '/housekeeping', icon: Sparkles },
  { label: 'Revenue', href: '/revenue', icon: TrendingUp },
  { label: 'Marketing', href: '/marketing', icon: Megaphone },
  { label: 'Reviews', href: '/reviews', icon: Star },
  { label: 'Analytics', href: '/analytics', icon: BarChart3 },
  { label: 'AI Center', href: '/ai', icon: Brain, badge: 'NEW' },
  { label: 'Settings', href: '/settings/property', icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);
  const [showPropModal, setShowPropModal] = useState(false);
  const { activeProperty, properties, setActiveProperty } = useHotelStore() as any;

  return (
    <aside
      className={`h-screen sticky top-0 bg-[var(--bg-card)] border-r border-black/[0.06] dark:border-white/[0.08] flex flex-col justify-between transition-all duration-300 z-30 relative ${
        collapsed ? 'w-20' : 'w-64'
      }`}
    >
      {/* Floating Border Edge Collapse/Expand Toggle Button */}
      <button
        type="button"
        onClick={() => setCollapsed(!collapsed)}
        style={{ borderRadius: '50%' }}
        className="absolute -right-3 top-5 z-40 w-6 h-6 bg-[var(--bg-card)] border border-black/[0.08] dark:border-white/[0.12] text-[var(--text-tertiary)] hover:text-[var(--text-primary)] hover:border-[#FF385C] shadow-md flex items-center justify-center transition-all cursor-pointer hover:scale-110"
        title={collapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
      >
        {collapsed ? (
          <ChevronRight className="w-3.5 h-3.5" />
        ) : (
          <ChevronLeft className="w-3.5 h-3.5" />
        )}
      </button>

      {/* Top Section */}
      <div>
        {/* Logo Header */}
        <div className={`h-16 flex items-center border-b border-black/[0.04] dark:border-white/[0.06] ${
          collapsed ? 'justify-center px-2' : 'px-5'
        }`}>
          <Link href="/dashboard" className="flex items-center gap-3 shrink-0" title="HotelHub Dashboard">
            <div 
              style={{ borderRadius: '50%' }}
              className="w-9 h-9 bg-[#FF385C] text-white flex items-center justify-center shrink-0 shadow-md overflow-hidden"
            >
              <BedDouble className="w-5 h-5" />
            </div>
            {!collapsed && (
              <span className="font-bold text-lg text-[var(--text-display)] tracking-tight whitespace-nowrap">
                HotelHub
              </span>
            )}
          </Link>
        </div>

        {/* Navigation List */}
        <nav className="p-3 space-y-1.5 overflow-y-auto max-h-[calc(100vh-210px)]">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href || (item.href !== '/dashboard' && pathname?.startsWith(item.href));

            return (
              <Link
                key={item.href}
                href={item.href}
                style={{ borderRadius: '10px' }}
                className={`flex items-center font-medium text-xs transition-all duration-200 group active:scale-[0.97] ${
                  collapsed ? 'justify-center w-10 h-10 mx-auto p-0 hover:scale-105' : 'gap-3 px-3.5 py-2.5 hover:translate-x-1'
                } ${
                  isActive
                    ? 'bg-[#FF385C] text-white font-bold shadow-[0_4px_14px_rgba(255,56,92,0.35)]'
                    : 'text-[var(--text-tertiary)] hover:text-[var(--text-primary)] hover:bg-black/[0.03] dark:hover:bg-white/[0.04]'
                }`}
                title={collapsed ? item.label : undefined}
              >
                <Icon className={`w-4 h-4 shrink-0 transition-transform duration-200 group-hover:scale-110 ${isActive ? 'text-white' : 'text-[var(--text-tertiary)] group-hover:text-[var(--text-primary)]'}`} />
                {!collapsed && (
                  <span className="truncate flex-1 flex items-center justify-between">
                    <span>{item.label}</span>
                    {item.badge && (
                      <span 
                        style={{ borderRadius: '9999px' }}
                        className="px-2 py-0.5 text-[9px] font-extrabold uppercase tracking-wider bg-[#FF385C] text-white"
                      >
                        {item.badge}
                      </span>
                    )}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Bottom Property Switcher Section */}
      <div className="p-3 border-t border-black/[0.04] dark:border-white/[0.06]">
        {!collapsed ? (
          <div 
            style={{ borderRadius: '20px' }}
            className="p-4 bg-[var(--bg-left-panel)] border border-black/[0.06] dark:border-white/[0.08] space-y-3"
          >
            <div>
              <div className="text-xs font-bold text-[var(--text-display)] truncate">
                {activeProperty.name}
              </div>
              <div className="text-[11px] text-[var(--text-tertiary)] mt-0.5">
                {activeProperty.rooms} rooms · {activeProperty.location}
              </div>
            </div>
            <button
              type="button"
              onClick={() => setShowPropModal(true)}
              style={{ borderRadius: '10px' }}
              className="w-full py-2 px-3 bg-[#FF385C] hover:bg-[#E00B41] text-white font-semibold text-xs transition-all shadow-xs flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Building2 className="w-3.5 h-3.5" />
              <span>Switch property</span>
            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => setShowPropModal(true)}
            title={`${activeProperty.name} — Click to switch`}
            style={{ borderRadius: '50%' }}
            className="w-10 h-10 mx-auto bg-[#FF385C] text-white flex items-center justify-center shadow-xs cursor-pointer hover:scale-105 transition-transform"
          >
            <Building2 className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Property Selector Modal */}
      {showPropModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4">
          <div 
            style={{ borderRadius: '24px' }}
            className="w-full max-w-sm bg-[var(--bg-card)] border border-black/[0.08] dark:border-white/[0.12] p-6 shadow-2xl space-y-4 animate-in fade-in zoom-in-95 duration-200 relative"
          >
            <button
              type="button"
              onClick={() => setShowPropModal(false)}
              style={{ borderRadius: '50%' }}
              className="w-8 h-8 flex items-center justify-center bg-[var(--bg-left-panel)] text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors absolute top-6 right-6 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <h3 className="text-base font-bold text-[var(--text-display)]">
              Select Workspace Property
            </h3>

            <div className="space-y-2">
              {properties.map((prop: any) => {
                const isSelected = prop.id === activeProperty.id;
                return (
                  <div
                    key={prop.id}
                    onClick={() => {
                      setActiveProperty(prop);
                      setShowPropModal(false);
                    }}
                    style={{ borderRadius: '12px' }}
                    className={`p-3 border flex items-center justify-between cursor-pointer transition-all ${
                      isSelected
                        ? 'bg-pink-500/10 border-[#FF385C]'
                        : 'bg-[var(--bg-left-panel)] border-black/[0.04] dark:border-white/[0.06] hover:bg-black/[0.03]'
                    }`}
                  >
                    <div>
                      <div className="font-bold text-xs text-[var(--text-primary)]">
                        {prop.name}
                      </div>
                      <div className="text-[10px] text-[var(--text-tertiary)]">
                        {prop.rooms} rooms · {prop.location}
                      </div>
                    </div>
                    {isSelected && <Check className="w-4 h-4 text-[#FF385C]" />}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

    </aside>
  );
}
