'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { TrendingUp, Sparkles, ShieldCheck, Eye, EyeOff, BedDouble, ChevronDown, CheckCircle2, X } from 'lucide-react';
import { ThemeToggle } from '@/components/layout/theme-toggle';
import { useHotelStore } from '@/lib/store';

export default function SignupPage() {
  const router = useRouter();
  const store = useHotelStore() as any;
  const signup = store?.signup;
  const loginWithOAuth = store?.loginWithOAuth;

  const [fullName, setFullName] = useState('');
  const [propertyName, setPropertyName] = useState('');
  const [workEmail, setWorkEmail] = useState('');
  const [yourRole, setYourRole] = useState('General Manager');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [activeOAuthModal, setActiveOAuthModal] = useState<'google' | 'apple' | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreeTerms) return;
    setIsLoading(true);

    setTimeout(() => {
      if (signup) {
        signup({
          name: fullName || 'New Hotel Manager',
          email: workEmail,
          role: yourRole,
          property: propertyName || 'My Hotel Property',
          password: password,
        });
      } else {
        window.location.href = '/dashboard';
      }
    }, 400);
  };

  const handleOAuthSignup = (provider: 'google' | 'apple', accountDetails?: { name: string; email: string }) => {
    setIsLoading(true);
    setTimeout(() => {
      if (loginWithOAuth) {
        loginWithOAuth(provider, accountDetails);
      } else {
        window.location.href = '/dashboard';
      }
    }, 400);
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
          <div className="mt-12 lg:mt-16 max-w-lg">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--text-display)] leading-[1.15] tracking-tight">
              Start managing your property smarter today.
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[var(--text-tertiary)] leading-relaxed">
              Create your account to unlock live front desk operations, housekeeping workflows, and real-time revenue AI.
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
                  Instant property workspace setup
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
                  Free 14-day full access trial
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
                  Enterprise security & data isolation
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

      {/* RIGHT PANEL — Sign-Up Form & Social SSO */}
      <div className="lg:w-1/2 w-full p-6 sm:p-8 lg:p-12 flex flex-col justify-between items-center relative bg-[var(--bg-right-panel)] transition-colors duration-300">
        
        {/* Theme Toggle Top Right */}
        <div className="w-full flex justify-end mb-4">
          <ThemeToggle />
        </div>

        {/* Center Signup Card Container */}
        <div className="w-full max-w-md my-auto">
          <div 
            style={{ borderRadius: '28px' }}
            className="bg-[var(--bg-card)] border border-black/[0.04] dark:border-white/[0.08] p-7 sm:p-9 shadow-[0_20px_50px_rgba(0,0,0,0.06)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.6)] transition-all"
          >
            
            <h2 className="text-2xl font-extrabold text-[var(--text-display)] tracking-tight">
              Create your account
            </h2>
            <p className="text-sm text-[var(--text-tertiary)] mt-1 mb-6">
              Get started with HotelHub in under 2 minutes.
            </p>

            {/* Main Signup Form */}
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-semibold text-[var(--text-primary)] mb-1">
                  Full Name <span className="text-[#FF385C]">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Aris Setiawan"
                  style={{ borderRadius: '10px' }}
                  className="w-full px-4 py-2.5 bg-[var(--bg-input)] border border-black/[0.08] dark:border-white/[0.12] text-[var(--text-primary)] placeholder-[var(--text-tertiary)] text-xs focus:outline-none focus:ring-2 focus:ring-[#FF385C]/40 focus:border-[#FF385C] transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[var(--text-primary)] mb-1">
                  Property Name <span className="text-[#FF385C]">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={propertyName}
                  onChange={(e) => setPropertyName(e.target.value)}
                  placeholder="e.g. Aria Hotel Bali"
                  style={{ borderRadius: '10px' }}
                  className="w-full px-4 py-2.5 bg-[var(--bg-input)] border border-black/[0.08] dark:border-white/[0.12] text-[var(--text-primary)] placeholder-[var(--text-tertiary)] text-xs focus:outline-none focus:ring-2 focus:ring-[#FF385C]/40 focus:border-[#FF385C] transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[var(--text-primary)] mb-1">
                  Work Email <span className="text-[#FF385C]">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={workEmail}
                  onChange={(e) => setWorkEmail(e.target.value)}
                  placeholder="example@hotelhub.com"
                  style={{ borderRadius: '10px' }}
                  className="w-full px-4 py-2.5 bg-[var(--bg-input)] border border-black/[0.08] dark:border-white/[0.12] text-[var(--text-primary)] placeholder-[var(--text-tertiary)] text-xs focus:outline-none focus:ring-2 focus:ring-[#FF385C]/40 focus:border-[#FF385C] transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[var(--text-primary)] mb-1">
                  Your Role <span className="text-[#FF385C]">*</span>
                </label>
                <div className="relative">
                  <select
                    value={yourRole}
                    onChange={(e) => setYourRole(e.target.value)}
                    style={{ borderRadius: '10px' }}
                    className="w-full px-4 py-2.5 pr-9 bg-[var(--bg-input)] border border-black/[0.08] dark:border-white/[0.12] text-[var(--text-primary)] text-xs focus:outline-none focus:ring-2 focus:ring-[#FF385C]/40 focus:border-[#FF385C] transition-all appearance-none cursor-pointer"
                  >
                    <option value="General Manager">General Manager</option>
                    <option value="Operations Lead">Operations Lead</option>
                    <option value="Front Desk Manager">Front Desk Manager</option>
                    <option value="Revenue Manager">Revenue Manager</option>
                    <option value="Property Owner">Property Owner</option>
                  </select>
                  <ChevronDown className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-[var(--text-tertiary)] pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[var(--text-primary)] mb-1">
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

              <div className="flex items-center gap-2 pt-1">
                <input
                  type="checkbox"
                  id="agreeTerms"
                  checked={agreeTerms}
                  onChange={(e) => setAgreeTerms(e.target.checked)}
                  className="w-3.5 h-3.5 rounded border-gray-300 text-[#FF385C] focus:ring-[#FF385C]/40 accent-[#FF385C] cursor-pointer"
                />
                <label htmlFor="agreeTerms" className="text-[11px] font-medium text-[var(--text-tertiary)] cursor-pointer">
                  I agree to the Terms of Service & Privacy Policy
                </label>
              </div>

              <button
                type="submit"
                disabled={isLoading || !agreeTerms}
                style={{ borderRadius: '10px' }}
                className="w-full mt-2 py-3 px-5 bg-[#FF385C] hover:bg-[#E00B41] text-white font-semibold text-xs transition-all shadow-[0_4px_14px_rgba(255,56,92,0.35)] active:scale-[0.99] disabled:opacity-60 flex items-center justify-center gap-2 cursor-pointer"
              >
                {isLoading ? (
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <span>Create Account & Access Dashboard</span>
                )}
              </button>
            </form>

            <div className="relative my-5 text-center">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-black/[0.08] dark:border-white/[0.12]" />
              </div>
              <span className="relative px-3 text-[11px] font-semibold tracking-wider text-[var(--text-tertiary)] uppercase bg-[var(--bg-card)]">
                Or sign up with
              </span>
            </div>

            {/* Social SSO Buttons BELOW Form */}
            <div className="space-y-2.5">
              <button
                type="button"
                onClick={() => setActiveOAuthModal('google')}
                style={{ borderRadius: '12px' }}
                className="w-full py-3 px-4 bg-white dark:bg-zinc-900 border border-black/10 dark:border-white/15 text-[var(--text-primary)] font-semibold text-xs transition-all hover:bg-black/[0.02] dark:hover:bg-white/[0.04] shadow-xs flex items-center justify-center gap-3 cursor-pointer"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                </svg>
                <span>Sign up with Google</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveOAuthModal('apple')}
                style={{ borderRadius: '12px' }}
                className="w-full py-3 px-4 bg-black dark:bg-white text-white dark:text-black font-semibold text-xs transition-all hover:opacity-90 shadow-xs flex items-center justify-center gap-3 cursor-pointer"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.35c.67-.82 1.12-1.95.99-3.09-1 .04-2.2.67-2.9 1.49-.62.72-1.16 1.88-.99 3.01 1.11.09 2.23-.59 2.9-1.41z" />
                </svg>
                <span>Sign up with Apple</span>
              </button>
            </div>

          </div>

          <div className="text-center text-xs text-[var(--text-tertiary)] mt-4">
            Already have an account?{' '}
            <Link href="/login" className="font-semibold text-[#FF385C] hover:underline">
              Log in
            </Link>
          </div>
        </div>

        <div className="hidden lg:block h-4" />
      </div>

      {/* --- OAUTH AUTHORIZATION MODAL SIMULATOR --- */}
      {activeOAuthModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div 
            style={{ borderRadius: '24px' }}
            className="w-full max-w-md bg-[var(--bg-card)] border border-black/10 dark:border-white/15 p-6 sm:p-8 shadow-2xl space-y-6 relative"
          >
            <button
              onClick={() => setActiveOAuthModal(null)}
              className="absolute right-5 top-5 p-1 text-[var(--text-tertiary)] hover:text-[var(--text-primary)] rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {activeOAuthModal === 'google' ? (
              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <svg className="w-7 h-7" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                  </svg>
                  <div>
                    <h3 className="text-lg font-bold text-[var(--text-display)]">Sign up with Google</h3>
                    <p className="text-xs text-[var(--text-tertiary)]">Create your HotelHub account with Google</p>
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <button
                    onClick={() => handleOAuthSignup('google', { name: 'Aris Setiawan', email: 'aris.setiawan@gmail.com' })}
                    className="w-full p-3.5 rounded-xl border border-black/10 dark:border-white/10 flex items-center justify-between hover:bg-black/5 dark:hover:bg-white/5 transition-all text-left group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-[#4285F4] text-white flex items-center justify-center font-bold text-sm">
                        AS
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[var(--text-primary)]">Aris Setiawan</div>
                        <div className="text-[11px] text-[var(--text-tertiary)]">aris.setiawan@gmail.com</div>
                      </div>
                    </div>
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <svg className="w-7 h-7 fill-current text-[var(--text-primary)]" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.35c.67-.82 1.12-1.95.99-3.09-1 .04-2.2.67-2.9 1.49-.62.72-1.16 1.88-.99 3.01 1.11.09 2.23-.59 2.9-1.41z" />
                  </svg>
                  <div>
                    <h3 className="text-lg font-bold text-[var(--text-display)]">Sign up with Apple ID</h3>
                    <p className="text-xs text-[var(--text-tertiary)]">Create your HotelHub account with Apple ID</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-xs text-[var(--text-primary)] space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-[var(--text-tertiary)]">Apple ID</span>
                    <span className="font-bold">aris.setiawan@icloud.com</span>
                  </div>
                </div>

                <button
                  onClick={() => handleOAuthSignup('apple', { name: 'Aris Setiawan', email: 'aris.setiawan@icloud.com' })}
                  className="w-full py-3.5 bg-black dark:bg-white text-white dark:text-black font-bold text-xs rounded-xl shadow-md hover:opacity-90 transition-all cursor-pointer"
                >
                  Authorize Account Creation
                </button>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
