'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { TrendingUp, Sparkles, ShieldCheck, Eye, EyeOff, BedDouble } from 'lucide-react';
import { ThemeToggle } from '@/components/layout/theme-toggle';
import { useHotelStore } from '@/lib/store';

export default function LoginPage() {
  const router = useRouter();
  const { login } = useHotelStore() as any;
  const [email, setEmail] = useState('aris@ariahotel.com');
  const [password, setPassword] = useState('password123');
  const [showPassword, setShowPassword] = useState(false);
  const [keepSignedIn, setKeepSignedIn] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      login(email);
    }, 500);
  };

  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row bg-[var(--bg-canvas)] transition-colors duration-300">
      
      {/* LEFT PANEL — Marketing / Value Proposition */}
      <div className="lg:w-1/2 w-full p-8 lg:p-16 flex flex-col justify-between bg-[var(--bg-left-panel)] border-b lg:border-b-0 lg:border-r border-black/[0.06] dark:border-white/[0.08] transition-colors duration-300">
        
        {/* Top Header: Logo */}
        <div>
          <div className="flex items-center gap-3">
            <div 
              style={{ borderRadius: '50%' }}
              className="w-10 h-10 bg-[#FF385C] flex items-center justify-center text-white shadow-md shrink-0 overflow-hidden"
            >
              <BedDouble className="w-5 h-5" />
            </div>
            <span className="text-xl font-bold tracking-tight text-[var(--text-display)]">
              HotelHub
            </span>
          </div>

          {/* Main Headline & Description */}
          <div className="mt-16 max-w-lg">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--text-display)] leading-[1.15] tracking-tight">
              Run your property with a calm, clear view.
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[var(--text-tertiary)] leading-relaxed">
              One workspace for reservations, housekeeping, revenue and the AI signals that keep your team a step ahead.
            </p>

            {/* Feature Pills Stack */}
            <div className="mt-10 space-y-4">
              
              {/* Feature 1 */}
              <div 
                style={{ borderRadius: '14px' }}
                className="flex items-center gap-4 px-5 py-4 bg-[var(--bg-pill)] border border-black/[0.04] dark:border-white/[0.06] shadow-[0_4px_16px_rgba(0,0,0,0.03)] transition-all hover:translate-x-1"
              >
                <div 
                  style={{ borderRadius: '8px' }}
                  className="w-10 h-10 bg-[#FFF0F3] dark:bg-[#2A161A] text-[#FF385C] flex items-center justify-center shrink-0"
                >
                  <TrendingUp className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium text-[var(--text-primary)]">
                  Live occupancy, ADR & RevPAR
                </span>
              </div>

              {/* Feature 2 */}
              <div 
                style={{ borderRadius: '14px' }}
                className="flex items-center gap-4 px-5 py-4 bg-[var(--bg-pill)] border border-black/[0.04] dark:border-white/[0.06] shadow-[0_4px_16px_rgba(0,0,0,0.03)] transition-all hover:translate-x-1"
              >
                <div 
                  style={{ borderRadius: '8px' }}
                  className="w-10 h-10 bg-[#FFF0F3] dark:bg-[#2A161A] text-[#FF385C] flex items-center justify-center shrink-0"
                >
                  <Sparkles className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium text-[var(--text-primary)]">
                  AI insights written in plain language
                </span>
              </div>

              {/* Feature 3 */}
              <div 
                style={{ borderRadius: '14px' }}
                className="flex items-center gap-4 px-5 py-4 bg-[var(--bg-pill)] border border-black/[0.04] dark:border-white/[0.06] shadow-[0_4px_16px_rgba(0,0,0,0.03)] transition-all hover:translate-x-1"
              >
                <div 
                  style={{ borderRadius: '8px' }}
                  className="w-10 h-10 bg-[#FFF0F3] dark:bg-[#2A161A] text-[#FF385C] flex items-center justify-center shrink-0"
                >
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium text-[var(--text-primary)]">
                  Housekeeping & arrivals in one place
                </span>
              </div>

            </div>
          </div>
        </div>

        {/* Left Footer */}
        <div className="mt-16 pt-4 text-xs text-[var(--text-tertiary)] opacity-80">
          © 2026 HotelHub · Demo environment
        </div>
      </div>

      {/* RIGHT PANEL — Login Form & Theme Toggle */}
      <div className="lg:w-1/2 w-full p-8 lg:p-16 flex flex-col justify-between items-center relative bg-[var(--bg-right-panel)] transition-colors duration-300">
        
        {/* Theme Toggle Top Right */}
        <div className="w-full flex justify-end mb-8">
          <ThemeToggle />
        </div>

        {/* Center Login Card Container */}
        <div className="w-full max-w-md my-auto">
          <div 
            style={{ borderRadius: '28px' }}
            className="bg-[var(--bg-card)] border border-black/[0.04] dark:border-white/[0.08] p-8 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.02)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.6)] transition-all hover:shadow-[0_25px_60px_rgba(0,0,0,0.09)]"
          >
            
            <h2 className="text-2xl font-bold text-[var(--text-display)] tracking-tight">
              Welcome back
            </h2>
            <p className="text-sm text-[var(--text-tertiary)] mt-1.5 mb-8">
              Log in to your property workspace.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Email Input Field */}
              <div>
                <label className="block text-xs font-semibold text-[var(--text-primary)] mb-2">
                  Email <span className="text-[#FF385C]">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="example@email.com"
                  style={{ borderRadius: '10px' }}
                  className="w-full px-4 py-3 bg-[var(--bg-input)] border border-black/[0.08] dark:border-white/[0.12] text-[var(--text-primary)] placeholder-[var(--text-tertiary)] text-sm focus:outline-none focus:ring-2 focus:ring-[#FF385C]/40 focus:border-[#FF385C] transition-all shadow-xs"
                />
              </div>

              {/* Password Input Field */}
              <div>
                <label className="block text-xs font-semibold text-[var(--text-primary)] mb-2">
                  Password <span className="text-[#FF385C]">*</span>
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    style={{ borderRadius: '10px' }}
                    className="w-full px-4 py-3 pr-11 bg-[var(--bg-input)] border border-black/[0.08] dark:border-white/[0.12] text-[var(--text-primary)] placeholder-[var(--text-tertiary)] text-sm focus:outline-none focus:ring-2 focus:ring-[#FF385C]/40 focus:border-[#FF385C] transition-all shadow-xs"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--text-tertiary)] hover:text-[var(--text-primary)] p-1 transition-colors"
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Checkbox */}
              <div className="flex items-center gap-2.5 pt-1">
                <input
                  type="checkbox"
                  id="keepSignedIn"
                  checked={keepSignedIn}
                  onChange={(e) => setKeepSignedIn(e.target.checked)}
                  style={{ borderRadius: '4px' }}
                  className="w-4 h-4 border-gray-300 text-[#FF385C] focus:ring-[#FF385C]/40 accent-[#FF385C] cursor-pointer"
                />
                <label
                  htmlFor="keepSignedIn"
                  className="text-xs font-medium text-[var(--text-tertiary)] cursor-pointer select-none"
                >
                  Keep me signed in
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                style={{ borderRadius: '10px' }}
                className="w-full mt-4 py-3.5 px-6 bg-[#FF385C] hover:bg-[#E00B41] text-white font-semibold text-sm transition-all shadow-[0_4px_14px_rgba(255,56,92,0.35)] hover:shadow-[0_6px_20px_rgba(255,56,92,0.45)] active:scale-[0.99] disabled:opacity-70 flex items-center justify-center gap-2 cursor-pointer"
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <span>Log in</span>
                )}
              </button>
            </form>
          </div>

          {/* Create Account Link Footer */}
          <div className="text-center text-xs text-[var(--text-tertiary)] mt-6">
            New to HotelHub?{' '}
            <Link
              href="/signup"
              className="font-semibold text-[#FF385C] hover:underline"
            >
              Create an account
            </Link>
          </div>
        </div>

        {/* Empty bottom spacer for balance */}
        <div className="hidden lg:block h-6" />
      </div>

    </div>
  );
}
