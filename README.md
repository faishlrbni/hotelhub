# 🏨 HotelHub — Next-Generation AI Hotel Property Management System (PMS)

[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Firebase](https://img.shields.io/badge/Firebase-v12.18-orange?style=flat-square&logo=firebase)](https://firebase.google.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

**HotelHub** is an all-in-one Autonomous Hotel Property Management System (PMS) and Revenue Operations Platform. Engineered for luxury resorts, boutique hotels, and serviced apartments, HotelHub simplifies front desk operations, housekeeping workflows, dynamic ADR rate optimization, and AI guest intelligence into a single unified workspace.

---

## 🌟 Key Features

### 🌐 1. Pre-Sign-In Marketing Landing Page
- **Hero Interactive UI Mockup**: Live glassmorphic preview of executive KPIs and room occupancy matrix.
- **Interactive ROI & Time Savings Calculator**: Slide hotel room count and average rate to estimate monthly revenue boost and saved front-desk hours.
- **Role-Based Experience Breakdown**: Tailored feature overview for General Managers, Operations Leads, Front Desk Staff, and Revenue Managers.
- **Brand Trust Bar & Ecosystem Grid**: Showcase integration readiness with 250+ luxury hotel brands and major channel managers.

### 🔐 2. Firebase & OAuth Authentication
- **Firebase Auth Integration**: Secure email/password authentication using Firebase SDK v12.
- **1-Click Google OAuth & Apple ID**: Seamless social sign-in powered by `signInWithPopup(auth, googleProvider)`.
- **Real-time Auth State Sync**: Automatic user session restoration using `onAuthStateChanged` listeners across app reloads.

### 🪄 3. 5-Step Property Setup Onboarding Wizard
- **Step 1: Property Identity & Location**: Official name, street address, city, country, contact phone/WhatsApp, operating currency (`IDR`, `USD`, `EUR`, `SGD`, `AUD`), and star rating tier.
- **Step 2: Property Classification & Inventory**: Select property type (*Luxury Resort & Villas*, *Boutique Hotel*, *City Business Hotel*, *Serviced Apartments*) and adjust room count slider (10 to 200 rooms).
- **Step 3: Operational Modules & Team Invites**: Enable front desk, housekeeping, revenue yielding, and AI signals. Send team invite emails.
- **Step 4: Channel Manager Setup**: Connect OTAs (*Booking.com*, *Expedia*, *Agoda*, *Stripe Payments*).
- **Step 5: Review & Workspace Generation**: Dynamically seeds room inventory matching user-configured room count and creates custom workspace.

### 📊 4. Executive Operations Dashboard
- **Live KPI Telemetry**: Real-time tracking of Occupancy %, RevPAR (Revenue Per Available Room), ADR (Average Daily Rate), and Net Daily Revenue.
- **Revenue Analytics & Charts**: Interactive revenue pacing and cancellation trend charts powered by `recharts`.
- **Room Status Matrix**: Live room grid highlighting clean, inspected, dirty, and maintenance rooms with quick status updates.
- **Automated CSV Data Export**: 1-click export of operational summary reports for management meetings.

### 🤖 5. AI Autonomous Signals & Operations Briefing
- **Executive AI Briefings**: Automated daily summaries of arrivals, VIP guests, and pending turnover queues.
- **VIP Guest Intelligence**: Automatic tagging of high-value guests with preference notes (e.g., late check-out, room preferences, dietary requirements).
- **Yield & Rate Recommendations**: AI-driven rate suggestions based on local event surges and seasonal demand.
- **Smart Review Assistant**: Automated draft replies to guest reviews with sentiment scoring.

### 🏬 6. Multi-Property Workspace Switcher
- **Multi-Property State Management**: Switch seamlessly between registered hotel properties (e.g. `Imperial Resort Jakarta`, `Aria Hotel Bali`, `Ubud Luxury Villas`).
- **Persistent State**: Full `localStorage` state persistence for property configurations, custom room lists, guest reservations, and user sessions.

---

## 🛠️ Tech Stack & Architecture

- **Frontend Framework**: [Next.js 14](https://nextjs.org/) (App Router, Server & Client Components)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Authentication & Backend Services**: [Firebase SDK v12](https://firebase.google.com/) (Auth, Firestore) & NextAuth.js
- **Styling**: Vanilla CSS Design Tokens + [Tailwind CSS](https://tailwindcss.com/)
- **Typography**: Plus Jakarta Sans (`Google Fonts`)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Charts & Visualizations**: [Recharts](https://recharts.org/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: `v18.17.0` or higher
- **npm**: `v9.0.0` or higher

### Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/faishlrbni/hotelhub.git
   cd HotelHub
   ```

2. **Install dependencies**:
   ```bash
   # Install root dependencies
   npm install

   # Install frontend dependencies
   cd frontend
   npm install
   ```

3. **Configure Environment Variables**:
   Create a `.env.local` file inside the `frontend` directory:
   ```env
   NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyDYj0EyV7cJvZtIKScyvWyVuhgXf6Zsu10
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=hotelhub-api.firebaseapp.com
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=hotelhub-api
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=hotelhub-api.firebasestorage.app
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=455065587472
   NEXT_PUBLIC_FIREBASE_APP_ID=1:455065587472:web:d0fd01b2814da837139f95
   NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=G-8M3LL4T100
   ```

4. **Run Development Server**:
   ```bash
   # From root or frontend directory
   npm run dev
   ```
   Open **[http://localhost:3000](http://localhost:3000)** in your browser to view the application.

5. **Build for Production**:
   ```bash
   npm run build
   ```

---

## 📂 Project Structure

```text
HotelHub/
├── package.json                   # Root package configuration & workspace scripts
└── frontend/
    ├── src/
    │   ├── app/                   # Next.js 14 App Router routes
    │   │   ├── (auth)/            # Auth routes (login, signup, onboarding)
    │   │   │   ├── login/         # Login Page with Firebase & OAuth
    │   │   │   ├── signup/        # Signup Page with Firebase & OAuth
    │   │   │   └── onboarding/    # 5-Step Property Setup Wizard
    │   │   ├── (dashboard)/       # Operational Dashboard routes
    │   │   │   ├── dashboard/     # Main KPI & Operational Overview
    │   │   │   ├── reservations/  # Reservations & Calendar Management
    │   │   │   ├── rooms/         # Room Inventory & Status Matrix
    │   │   │   ├── housekeeping/  # Staff Turnover & Cleaning Assignments
    │   │   │   ├── revenue/       # RevPAR Pacing & Pricing Recommendations
    │   │   │   ├── analytics/     # Detailed Reports & Demographic Breakdown
    │   │   │   ├── guests/        # Guest Directory & Loyalty Tier Tracking
    │   │   │   ├── reviews/       # Guest Reviews & AI Reply Assistant
    │   │   │   └── settings/      # Property & Integrations Settings
    │   │   ├── page.tsx           # Pre-Sign-In Marketing Landing Page
    │   │   └── globals.css        # Core Design Tokens, Animations & Micro-interactions
    │   ├── components/            # Reusable UI components
    │   │   ├── layout/            # Sidebar, TopBar, ThemeToggle, Modals
    │   │   └── ui/                # Buttons, Cards, Badges, Tabs
    │   ├── lib/                   # Core business logic & State Management
    │   │   ├── firebase.ts        # Firebase Client SDK Singleton initialization
    │   │   └── store.tsx          # Global Context Provider & Multi-Property State
    │   └── types/                 # TypeScript interfaces & type definitions
    ├── public/                    # Static assets & icons
    └── package.json               # Frontend package dependencies & Next.js scripts
```

---

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

---

<p align="center">
  Developed with ❤️ by <a href="https://github.com/faishlrbni">Faishal Ahmad Rabbani</a> · Powered by Next.js & Firebase
</p>
