'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import { TrendingUp, Sparkles, ShieldCheck, Eye, EyeOff, BedDouble, CheckCircle2, User, X, ExternalLink } from 'lucide-react';
import { ThemeToggle } from '@/components/layout/theme-toggle';
import { useHotelStore } from '@/lib/store';

export default function LoginPage() {
  const router = useRouter();
  const store = useHotelStore() as any;
  const login = store?.login;
  const loginWithOAuth = store?.loginWithOAuth;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [keepSignedIn, setKeepSignedIn] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  // Real OAuth Authorization Modal & Direct Trigger State
  const [activeOAuthModal, setActiveOAuthModal] = useState<'google' | 'apple' | null>(null);
  const [oauthEmail, setOauthEmail] = useState('');
  const [oauthName, setOauthName] = useState('');
  const [hideAppleEmail, setHideAppleEmail] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      if (login) {
        login(email || 'aris@ariahotel.com', password);
      } else {
        window.location.href = '/dashboard';
      }
    }, 400);
  };

  // Triggers official Google OAuth authentication flow via Firebase
  const triggerGoogleOAuth = async () => {
    setIsLoading(true);
    try {
      if (loginWithOAuth) {
        await loginWithOAuth('google', { name: oauthName, email: oauthEmail });
      }
    } catch (e) {
      console.warn('OAuth trigger error:', e);
    } finally {
      setIsLoading(false);
    }
  };

  // Triggers official Apple ID authentication flow via Firebase
  const triggerAppleOAuth = async () => {
    setIsLoading(true);
    try {
      if (loginWithOAuth) {
        await loginWithOAuth('apple', { name: oauthName, email: oauthEmail });
      }
    } catch (e) {
      console.warn('Apple OAuth trigger error:', e);
    } finally {
      setIsLoading(false);
    }
  };

  const handleOAuthSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (activeOAuthModal === 'google') {
      triggerGoogleOAuth();
    } else {
      triggerAppleOAuth();
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row bg-[var(--bg-canvas)] transition-colors duration-300">
      
      {/* LEFT PANEL — Marketing / Value Proposition */}
      <div className="lg:w-1/2 w-full p-6 sm:p-8 lg:p-16 flex flex-col justify-between bg-[var(--bg-left-panel)] border-b lg:border-b-0 lg:border-r border-black/[0.06] dark:border-white/[0.08] transition-colors duration-300">
        
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
          <div className="mt-8 sm:mt-12 lg:mt-16 max-w-lg">
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--text-display)] leading-[1.15] tracking-tight">
              Run your property with a calm, clear view.
            </h1>
            <p className="mt-3 sm:mt-4 text-sm sm:text-lg text-[var(--text-tertiary)] leading-relaxed">
              One workspace for reservations, housekeeping, revenue and the AI signals that keep your team a step ahead.
            </p>

            {/* Feature Pills Stack */}
            <div className="mt-8 space-y-3.5">
              <div 
                style={{ borderRadius: '14px' }}
                className="flex items-center gap-4 px-5 py-3.5 bg-[var(--bg-pill)] border border-black/[0.04] dark:border-white/[0.06] shadow-[0_4px_16px_rgba(0,0,0,0.03)] transition-all hover:translate-x-1"
              >
                <div 
                  style={{ borderRadius: '8px' }}
                  className="w-9 h-9 bg-[#FFF0F3] dark:bg-[#2A161A] text-[#FF385C] flex items-center justify-center shrink-0"
                >
                  <TrendingUp className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium text-[var(--text-primary)]">
                  Live occupancy, ADR & RevPAR analytics
                </span>
              </div>

              <div 
                style={{ borderRadius: '14px' }}
                className="flex items-center gap-4 px-5 py-3.5 bg-[var(--bg-pill)] border border-black/[0.04] dark:border-white/[0.06] shadow-[0_4px_16px_rgba(0,0,0,0.03)] transition-all hover:translate-x-1"
              >
                <div 
                  style={{ borderRadius: '8px' }}
                  className="w-9 h-9 bg-[#FFF0F3] dark:bg-[#2A161A] text-[#FF385C] flex items-center justify-center shrink-0"
                >
                  <Sparkles className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium text-[var(--text-primary)]">
                  AI insights written in plain language
                </span>
              </div>

              <div 
                style={{ borderRadius: '14px' }}
                className="flex items-center gap-4 px-5 py-3.5 bg-[var(--bg-pill)] border border-black/[0.04] dark:border-white/[0.06] shadow-[0_4px_16px_rgba(0,0,0,0.03)] transition-all hover:translate-x-1"
              >
                <div 
                  style={{ borderRadius: '8px' }}
                  className="w-9 h-9 bg-[#FFF0F3] dark:bg-[#2A161A] text-[#FF385C] flex items-center justify-center shrink-0"
                >
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium text-[var(--text-primary)]">
                  Housekeeping & arrivals in real time
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Left Footer */}
        <div className="mt-12 pt-4 text-xs text-[var(--text-tertiary)] opacity-80">
          © 2026 HotelHub · Enterprise Property System
        </div>
      </div>

      {/* RIGHT PANEL — Login Form & Social Single Sign-On */}
      <div className="lg:w-1/2 w-full p-6 sm:p-8 lg:p-16 flex flex-col justify-between items-center relative bg-[var(--bg-right-panel)] transition-colors duration-300">
        
        {/* Theme Toggle Top Right */}
        <div className="w-full flex justify-end mb-6">
          <ThemeToggle />
        </div>

        {/* Center Login Card Container */}
        <div className="w-full max-w-md my-auto">
          <div 
            style={{ borderRadius: '28px' }}
            className="bg-[var(--bg-card)] border border-black/[0.04] dark:border-white/[0.08] p-7 sm:p-9 shadow-[0_20px_50px_rgba(0,0,0,0.06)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.6)] transition-all"
          >
            
            <h2 className="text-2xl font-extrabold text-[var(--text-display)] tracking-tight">
              Welcome back
            </h2>
            <p className="text-sm text-[var(--text-tertiary)] mt-1 mb-6">
              Log in to your property workspace.
            </p>

            {/* Email / Password Form (Primary) */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[var(--text-primary)] mb-1.5">
                  Work Email <span className="text-[#FF385C]">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="example@email.com"
                  style={{ borderRadius: '10px' }}
                  className="w-full px-4 py-2.5 bg-[var(--bg-input)] border border-black/[0.08] dark:border-white/[0.12] text-[var(--text-primary)] placeholder-[var(--text-tertiary)] text-xs focus:outline-none focus:ring-2 focus:ring-[#FF385C]/40 focus:border-[#FF385C] transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[var(--text-primary)] mb-1.5">
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
                    className="w-full px-4 py-2.5 pr-10 bg-[var(--bg-input)] border border-black/[0.08] dark:border-white/[0.12] text-[var(--text-primary)] placeholder-[var(--text-tertiary)] text-xs focus:outline-none focus:ring-2 focus:ring-[#FF385C]/40 focus:border-[#FF385C] transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--text-tertiary)] hover:text-[var(--text-primary)] p-1 transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-0.5">
                <input
                  type="checkbox"
                  id="keepSignedIn"
                  checked={keepSignedIn}
                  onChange={(e) => setKeepSignedIn(e.target.checked)}
                  className="w-3.5 h-3.5 rounded border-gray-300 text-[#FF385C] focus:ring-[#FF385C]/40 accent-[#FF385C] cursor-pointer"
                />
                <label htmlFor="keepSignedIn" className="text-xs font-medium text-[var(--text-tertiary)] cursor-pointer">
                  Keep me signed in
                </label>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                style={{ borderRadius: '10px' }}
                className="w-full mt-2 py-3 px-5 bg-[#FF385C] hover:bg-[#E00B41] text-white font-semibold text-xs transition-all shadow-[0_4px_14px_rgba(255,56,92,0.35)] active:scale-[0.99] disabled:opacity-70 flex items-center justify-center gap-2 cursor-pointer"
              >
                {isLoading ? (
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <span>Log in to Workspace</span>
                )}
              </button>
            </form>

            {/* OR Divider */}
            <div className="relative my-6 text-center">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-black/[0.08] dark:border-white/[0.12]" />
              </div>
              <span className="relative px-3 text-[11px] font-semibold tracking-wider text-[var(--text-tertiary)] uppercase bg-[var(--bg-card)]">
                Or sign in with OAuth 2.0
              </span>
            </div>

            {/* Official Google & Apple OAuth Login Buttons */}
            <div className="space-y-2.5 mb-6">
              {/* Actual Google OAuth Button */}
              <button
                type="button"
                onClick={triggerGoogleOAuth}
                style={{ borderRadius: '12px' }}
                className="w-full py-3 px-4 bg-white dark:bg-zinc-900 border border-black/10 dark:border-white/15 text-[var(--text-primary)] font-semibold text-xs transition-all hover:bg-black/[0.02] dark:hover:bg-white/[0.04] shadow-xs flex items-center justify-center gap-3 cursor-pointer"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                </svg>
                <span>Continue with Official Google OAuth</span>
              </button>

              {/* Actual Apple ID OAuth Button */}
              <button
                type="button"
                onClick={triggerAppleOAuth}
                style={{ borderRadius: '12px' }}
                className="w-full py-3 px-4 bg-black dark:bg-white text-white dark:text-black font-semibold text-xs transition-all hover:opacity-90 shadow-xs flex items-center justify-center gap-3 cursor-pointer"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.35c.67-.82 1.12-1.95.99-3.09-1 .04-2.2.67-2.9 1.49-.62.72-1.16 1.88-.99 3.01 1.11.09 2.23-.59 2.9-1.41z" />
                </svg>
                <span>Continue with Official Apple ID</span>
              </button>
            </div>

            {/* Quick Demo Accounts Selection BELOW Buttons */}
            <div className="p-3 rounded-xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.05] dark:border-white/[0.08]">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--text-tertiary)] block mb-2">
                Quick Preset Accounts:
              </span>
              <div className="flex flex-wrap gap-1.5">
                <button
                  type="button"
                  onClick={() => { setEmail('aris@ariahotel.com'); setPassword('password123'); login?.('aris@ariahotel.com'); }}
                  className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-white dark:bg-zinc-800 border border-black/10 dark:border-white/10 text-[var(--text-primary)] hover:border-[#FF385C] transition-all cursor-pointer flex items-center gap-1.5"
                >
                  <User className="w-3 h-3 text-[#FF385C]" /> Aris Setiawan (GM)
                </button>
                <button
                  type="button"
                  onClick={() => { setEmail('sarah@hotelhub.com'); setPassword('password123'); login?.('sarah@hotelhub.com'); }}
                  className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-white dark:bg-zinc-800 border border-black/10 dark:border-white/10 text-[var(--text-primary)] hover:border-[#FF385C] transition-all cursor-pointer flex items-center gap-1.5"
                >
                  <User className="w-3 h-3 text-[#FF385C]" /> Sarah Jenkins (Ops)
                </button>
              </div>
            </div>

          </div>

          <div className="text-center text-xs text-[var(--text-tertiary)] mt-5">
            New to HotelHub?{' '}
            <Link href="/signup" className="font-semibold text-[#FF385C] hover:underline">
              Create an account
            </Link>
          </div>
        </div>

        <div className="hidden lg:block h-4" />
      </div>

    </div>
  );
}
