'use client'
import React from 'react'
import { ArrowUpRight, LucideIcon } from 'lucide-react'

export interface KpiCardProps {
  label: string
  value: string | number
  icon: LucideIcon
  iconBgColor?: string
  iconColor?: string
  trendText?: string
  trendIcon?: LucideIcon
  trendColor?: string
  subtext: string
  className?: string
}

export function KpiCard({
  label,
  value,
  icon: Icon,
  iconBgColor = 'bg-emerald-500/10',
  iconColor = 'text-[#19B26B]',
  trendText,
  trendIcon: TrendIcon = ArrowUpRight,
  trendColor = 'text-[#19B26B]',
  subtext,
  className = '',
}: KpiCardProps) {
  return (
    <div
      style={{ borderRadius: '16px' }}
      className={`p-4 sm:p-4.5 bg-[var(--bg-card)] border border-black/[0.04] dark:border-white/[0.08] shadow-[0_2px_10px_rgba(0,0,0,0.02)] flex flex-col justify-between space-y-3 hover:shadow-[0_6px_18px_rgba(0,0,0,0.04)] transition-all ${className}`}
    >
      {/* Header: Label & Squircle Icon Badge */}
      <div className="flex items-center justify-between gap-2">
        <span className="text-[11px] font-bold text-[var(--text-tertiary)] uppercase tracking-wider">
          {label}
        </span>
        <div
          style={{ borderRadius: '10px' }}
          className={`w-8.5 h-8.5 flex items-center justify-center shrink-0 ${iconBgColor} ${iconColor}`}
        >
          <Icon className="w-4 h-4" />
        </div>
      </div>

      {/* Middle: Big Value & Trend */}
      <div>
        <div className="text-2xl sm:text-3xl font-extrabold text-[var(--text-display)] tracking-tight">
          {value}
        </div>
        {trendText && (
          <div className={`flex items-center gap-1 mt-1 text-xs font-bold ${trendColor}`}>
            <TrendIcon className="w-3.5 h-3.5 shrink-0" />
            <span>{trendText}</span>
          </div>
        )}
      </div>

      {/* Footer: Subtext with Top Border */}
      <div className="pt-2.5 border-t border-black/[0.04] dark:border-white/[0.06] text-xs text-[var(--text-tertiary)] font-medium">
        {subtext}
      </div>
    </div>
  )
}
