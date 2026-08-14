'use client'
import React from 'react'

export interface SectionCardProps {
  title?: string
  subtitle?: string
  headerAction?: React.ReactNode
  children: React.ReactNode
  className?: string
  headerClassName?: string
}

export function SectionCard({
  title,
  subtitle,
  headerAction,
  children,
  className = '',
  headerClassName = '',
}: SectionCardProps) {
  return (
    <div
      style={{ borderRadius: '24px' }}
      className={`p-6 sm:p-8 space-y-6 bg-[var(--bg-card)] border border-black/[0.04] dark:border-white/[0.08] shadow-[0_4px_20px_rgba(0,0,0,0.02)] ${className}`}
    >
      {(title || headerAction) && (
        <div className={`flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-black/[0.04] dark:border-white/[0.06] pb-4 ${headerClassName}`}>
          <div>
            {title && (
              <h2 className="text-base font-bold text-[var(--text-display)] tracking-tight">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-xs text-[var(--text-tertiary)] font-normal mt-0.5">
                {subtitle}
              </p>
            )}
          </div>
          {headerAction && <div className="flex items-center gap-2 shrink-0">{headerAction}</div>}
        </div>
      )}
      {children}
    </div>
  )
}
