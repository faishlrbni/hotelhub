# Product Requirements Document: HotelHub — Smart Hotel Management Dashboard

**Version:** 1.0 | **Date:** July 20, 2026 | **Status:** Draft for Stakeholder Review
**Author:** Senior Product Manager, Hospitality Technology
**Audience:** Executive Sponsors, UX/UI Designers, Frontend Engineers, Backend Engineers, QA Engineers, Data/AI Team, Customer Success

---

## Table of Contents

1. Executive Summary
2. Product Vision
3. Business Objectives
4. User Personas
5. User Journey
6. Information Architecture
7. Sitemap
8. Functional Requirements
9. Non-Functional Requirements
10. Dashboard Layout Specification
11. Component Inventory
12. Feature Specifications
13. User Stories
14. Acceptance Criteria
15. API Requirements
16. Database Entities
17. Design System
18. Responsive Guidelines
19. Accessibility Requirements
20. Analytics & KPIs
21. Security Requirements
22. Risk Analysis
23. Future Roadmap
24. Success Metrics
25. Appendix

---

## 1. Executive Summary

HotelHub is a modern, AI-augmented hotel management dashboard designed for independent hotels, boutique properties, and small-to-mid-size hotel groups (10–500 rooms) that currently rely on fragmented, dated Property Management Systems (PMS), spreadsheets, and disconnected tools to run daily operations. HotelHub unifies reservations, guest management, room and housekeeping operations, revenue management, marketing performance, reviews, and analytics into a single, elegant, real-time workspace.

Where legacy hotel software (Opera, Protel, older cloud PMS dashboards) is dense, cluttered, and built around data-entry forms rather than decision-making, HotelHub borrows Airbnb's design philosophy — calm visual hierarchy, generous whitespace, large confident typography, soft shadows, rounded surfaces, and micro-interactions that make complex operational data feel approachable rather than overwhelming. The goal is not to imitate Airbnb's UI, but to bring its "effortless trust" feeling to a professional B2B operations tool.

HotelHub's differentiator is embedded AI: rather than presenting raw charts and expecting managers to interpret them, the product surfaces plain-language business insights, revenue forecasts, occupancy predictions, dynamic pricing recommendations, and automatically generated daily reports — turning data into decisions in seconds rather than hours.

**In one sentence:** HotelHub is the Airbnb-quality command center that lets hotel teams see, understand, and act on everything happening in their property — from a single soft-shadowed screen.

**Primary users:** Hotel Owners, General Managers, Front Office Staff, Revenue Managers, Housekeeping Supervisors, and Marketing Teams — six distinct personas sharing one system of record, each with a role-scoped view.

**Delivery scope of this PRD:** Full product surface across 10 modules (Dashboard Overview, Reservations, Guests, Rooms, Housekeeping, Revenue Management, Marketing, Reviews, Analytics, and AI Features), specified to a level suitable for direct design and engineering handoff.

---

## 2. Product Vision

### 2.1 Vision Statement

> "To make running a hotel feel as simple, calm, and confident as booking a stay on Airbnb — replacing operational chaos with clarity, and replacing guesswork with AI-guided decisions."

### 2.2 Why This Product Needs to Exist

Independent and mid-size hotels are chronically underserved by software design. Enterprise PMS platforms built in the 2000s–2010s (Opera, Protel, Fidelio-derived systems) prioritize data density and configurability over usability. Staff spend years learning keyboard shortcuts and dense grids because the tools were never redesigned for how modern SaaS products are used — quick glances on a tablet at the front desk, a dashboard check from a manager's phone, a housekeeping supervisor coordinating from a hallway.

Meanwhile, consumer travel products (Airbnb, Booking.com's partner tools) have trained an entire generation of hospitality staff to expect: clarity in three seconds, mobile-first responsiveness, and interfaces that reduce cognitive load instead of adding to it. HotelHub closes this gap — bringing consumer-grade UX discipline to a B2B operations tool, while still delivering the depth (rate management, housekeeping workflows, forecasting) that hotel operators actually need.

### 2.3 Product Principles

| Principle | What It Means in Practice |
|---|---|
| Clarity over density | Every screen leads with 3–5 key facts before any deep table or grid. |
| One glance, one decision | KPI cards and AI insights are written so a GM can act without opening a second screen. |
| Calm by default | Muted surfaces, soft shadows, and restrained color use — color is reserved for status and meaning, not decoration. |
| Mobile-first operations | Front office and housekeeping tasks are designed for phones and tablets first, desktop second. |
| AI as a co-pilot, not a black box | Every AI recommendation shows its reasoning (e.g., "based on 12% higher demand vs. last year") and can be accepted, edited, or dismissed. |
| Role-aware, not one-size-fits-all | Each persona sees a dashboard tuned to their job, not a generic admin panel. |

### 2.4 Product Positioning

HotelHub sits between two extremes: (1) legacy enterprise PMS suites that are powerful but unusable, and (2) lightweight booking-engine tools that are pretty but operationally shallow. HotelHub aims to be operationally complete **and** beautifully simple — a dashboard-first layer that can sit on top of or alongside a hotel's existing PMS/channel manager, with an eventual path to becoming a full PMS replacement.

---

## 3. Business Objectives

| # | Objective | Key Metric | Target (12 months post-launch) |
|---|---|---|---|
| 1 | Increase hotel occupancy through better visibility and pricing decisions | Average occupancy rate across customer portfolio | +6–10 percentage points |
| 2 | Increase RevPAR (Revenue per Available Room) | RevPAR uplift vs. pre-HotelHub baseline | +12% |
| 3 | Reduce time staff spend on manual reservation & reporting tasks | Avg. minutes/day on manual admin tasks | -40% |
| 4 | Improve guest satisfaction via faster response & service | Avg. review rating; response time to reviews | +0.3 stars; <24h response time |
| 5 | Reduce housekeeping turnaround time | Avg. minutes from checkout to room "Clean & Ready" | -25% |
| 6 | Drive adoption of AI-powered decisions | % of pricing/forecast recommendations accepted | >50% acceptance rate |
| 7 | Achieve strong product-market fit with independent hotel segment | Net Promoter Score (NPS) | >45 |
| 8 | Build a scalable SaaS revenue base | Monthly Recurring Revenue (MRR), logo retention | 90%+ annual logo retention |

### 3.1 Success Definition for V1 Launch

V1 is considered successful if, within 90 days of onboarding, a pilot hotel can: (a) fully replace its daily manual reporting routine with the Dashboard Overview and AI Daily Report, (b) manage 100% of reservations and check-in/check-out through HotelHub, (c) run housekeeping entirely through the Housekeeping module (no paper checklists), and (d) act on at least one AI pricing recommendation per week.


---

## 4. User Personas

### 4.1 Persona Summary Table

| Persona | Primary Goal | Device | Frequency | Technical Level |
|---|---|---|---|---|
| Hotel Owner | Understand financial health at a glance | Mobile + Desktop | Weekly / on-demand | Low–Medium |
| General Manager (GM) | Run daily operations, resolve exceptions | Desktop + Tablet | Multiple times/day | Medium |
| Front Office Staff | Process check-ins/outs, manage reservations | Desktop + Tablet | Continuous, all shift | Low–Medium |
| Revenue Manager | Optimize pricing and forecast demand | Desktop | Daily, deep sessions | Medium–High |
| Housekeeping Supervisor | Coordinate room cleaning and inspections | Mobile/Tablet | Continuous, all shift | Low |
| Marketing Team | Track campaign ROI and booking sources | Desktop | Weekly | Medium |

### 4.2 Persona Deep Dives

#### Persona 1 — Amira, Hotel Owner
- **Age/Context:** 48, owns a 60-room boutique property, also owns 2 other businesses; not on-site daily.
- **Goals:** Know at a glance whether the hotel is profitable this month; catch problems (falling occupancy, bad reviews) early.
- **Pain points:** Currently waits for the GM to send a manual PDF report once a week; no real-time visibility; discovers revenue dips too late to act.
- **Needs from HotelHub:** Mobile-friendly Dashboard Overview, AI Business Insights in plain language, weekly AI-generated report pushed to her.
- **Quote:** *"I don't need fifty charts. I need to know: are we doing okay, and if not, why."*

#### Persona 2 — David, General Manager
- **Age/Context:** 39, runs day-to-day operations for a 120-room hotel, manages 5 department heads.
- **Goals:** Keep occupancy and guest satisfaction high; resolve operational bottlenecks (housekeeping delays, overbooking) fast.
- **Pain points:** Switches between 4 different tools (PMS, spreadsheet for housekeeping, email for reviews, separate revenue tool); no single source of truth.
- **Needs from HotelHub:** Full cross-module visibility, Smart Alerts for exceptions, ability to drill from KPI into root cause in 1–2 clicks.

#### Persona 3 — Nadia, Front Office Staff
- **Age/Context:** 25, works front desk shifts, handles 30–60 guest interactions/day.
- **Goals:** Check guests in/out quickly, resolve booking issues without long holds, keep the line moving.
- **Pain points:** Legacy PMS requires many clicks and keyboard shortcuts for simple tasks; slow lookup of guest history.
- **Needs from HotelHub:** Fast search, one-click check-in/out, clear booking status badges, guest history visible instantly.

#### Persona 4 — Farah, Revenue Manager
- **Age/Context:** 34, manages pricing across room types and channels for a hotel group.
- **Goals:** Maximize RevPAR; adjust pricing ahead of demand shifts; avoid both under- and over-pricing.
- **Pain points:** Currently uses spreadsheets and gut feel; discovers demand spikes/dips after the fact.
- **Needs from HotelHub:** Revenue Management module with forecasts, Dynamic Pricing Suggestions with clear rationale, ability to approve/adjust/reject AI pricing in bulk.

#### Persona 5 — Joko, Housekeeping Supervisor
- **Age/Context:** 42, manages a team of 8 housekeepers across all floors.
- **Goals:** Get rooms cleaned and inspected on time for check-in; balance workload fairly; flag maintenance issues.
- **Pain points:** Paper checklists get lost; no visibility into which rooms are priority (early check-in, VIP); double-assigns rooms by mistake.
- **Needs from HotelHub:** Mobile-first Cleaning Queue, drag-and-drop Task Assignment, real-time Progress Tracking, Priority Levels tied to reservation data.

#### Persona 6 — Sasha, Marketing Team Lead
- **Age/Context:** 30, manages OTA listings, direct-booking promotions, and social campaigns.
- **Goals:** Prove ROI of marketing spend; understand which channels bring profitable guests, not just bookings.
- **Pain points:** Booking source data lives in the PMS, spend data lives in ad platforms — never reconciled.
- **Needs from HotelHub:** Marketing Dashboard with Campaign ROI, Booking Sources, Coupon Analytics unified with reservation and revenue data.

---

## 5. User Journey

### 5.1 Journey Map — Daily Operations (General Manager)

| Stage | Touchpoint | Actions | Emotion | Opportunity |
|---|---|---|---|---|
| Morning check-in | Mobile app, 7:30 AM | Opens Dashboard Overview, scans KPI cards and AI Insights | Curious, slightly anxious | Surface overnight anomalies immediately via Smart Alerts |
| Shift briefing | Desktop, 8:00 AM | Reviews Room Status, Housekeeping progress, today's arrivals/departures | Focused | One-screen briefing view reduces meeting time |
| Midday exceptions | Tablet, 12:00 PM | Investigates a Smart Alert (e.g., overbooking risk) | Concerned → relieved | Drill-down from alert to reservation in 2 clicks |
| Revenue review | Desktop, 3:00 PM | Reviews Revenue Management, approves 2 pricing suggestions | Analytical | Bulk-approve UI to save time |
| Evening wrap-up | Mobile, 8:00 PM | Reads AI-generated Daily Report, checks new reviews | Reassured | Push notification when the daily report is ready |

### 5.2 Journey Map — Guest Check-In (Front Office)

1. Guest arrives → Nadia searches guest name or booking reference in Reservation Management.
2. System surfaces reservation with Booking Status badge and any Guest Notes (allergies, VIP status, prior complaints).
3. Nadia confirms ID, taps **Check-In**; Room Status updates from "Reserved" to "Occupied" in real time.
4. Housekeeping module automatically removes the room from the available-to-clean queue.
5. Guest profile updates Booking History; loyalty points accrue if applicable.

### 5.3 Journey Map — Housekeeping Turnaround

1. Guest checks out → Front Office marks checkout → Room Status changes to "Dirty."
2. Room appears in Joko's Cleaning Queue, auto-prioritized if a same-day check-in is booked for that room.
3. Joko assigns the room to a housekeeper via Task Assignment (drag-and-drop or auto-assign).
4. Housekeeper updates Progress Tracking from mobile ("In Progress" → "Awaiting Inspection").
5. Joko performs Room Inspection, marks "Clean & Ready" or flags a Maintenance issue.
6. Room becomes available in Room Availability and Front Office queues instantly.

### 5.4 Journey Map — Revenue Decision (Revenue Manager)

1. Farah opens Revenue Management, sees a Smart Alert: "Compression detected for Aug 14–16 — 3 comparable hotels raised rates 15%."
2. She reviews the Dynamic Pricing Recommendation panel showing suggested new ADR per room type with forecasted revenue impact.
3. She adjusts one room type's suggested price manually, accepts the rest in bulk.
4. Updated rates sync to the booking engine/channel manager (V2 integration).
5. AI Revenue Forecast chart updates to reflect the new projected RevPAR.

---

## 6. Information Architecture

### 6.1 Top-Level Navigation (Global Sidebar)

```
HotelHub
├── Dashboard Overview            (all roles, role-scoped widgets)
├── Reservations
│   ├── Reservation List
│   ├── Calendar View
│   └── Check-in / Check-out
├── Guests
│   ├── Guest Profiles
│   ├── Loyalty Program
│   └── VIP Guests
├── Rooms
│   ├── Room Availability
│   ├── Room Types
│   └── Dynamic Pricing
├── Housekeeping
│   ├── Cleaning Queue
│   ├── Task Assignment
│   └── Room Inspection
├── Revenue Management
│   ├── Performance (ADR / RevPAR / Occupancy)
│   ├── Forecast
│   └── Pricing Recommendations
├── Marketing
│   ├── Promotions
│   ├── Campaign ROI
│   └── Booking Sources
├── Reviews
│   ├── Rating Overview
│   ├── Review Feed
│   └── Sentiment Analysis
├── Analytics
│   ├── Revenue & Booking Trends
│   ├── Guest Demographics
│   └── Cancellation & Seasonality
├── AI Center
│   ├── Forecasts & Predictions
│   ├── Daily Reports
│   └── Smart Alerts
└── Settings
    ├── Property Profile
    ├── Users & Roles
    └── Integrations
```

### 6.2 Role-Based Access Matrix

| Module | Owner | GM | Front Office | Revenue Mgr | Housekeeping Sup. | Marketing |
|---|---|---|---|---|---|---|
| Dashboard Overview | View (summary) | Full | View (ops widgets) | View (revenue widgets) | View (housekeeping widgets) | View (marketing widgets) |
| Reservations | View | Full | Full | View | — | View |
| Guests | View | Full | Full (edit) | View | — | View (analytics only) |
| Rooms | View | Full | View | Full (pricing) | View (status only) | — |
| Housekeeping | View (summary) | Full | View | — | Full | — |
| Revenue Management | View | Full | — | Full | — | View |
| Marketing | View (summary) | Full | — | View | — | Full |
| Reviews | View | Full | View | — | — | Full |
| Analytics | Full | Full | — | Full | View (housekeeping-related) | Full (marketing-related) |
| AI Center | View | Full | — | Full (revenue AI) | View (housekeeping alerts) | View (marketing AI) |
| Settings | Full (billing/property) | Full (users) | — | — | — | — |

---

## 7. Sitemap

| # | Page / Route | Module | Notes |
|---|---|---|---|
| 1 | `/dashboard` | Dashboard Overview | Default landing page after login |
| 2 | `/reservations` | Reservations | Reservation List (table view) |
| 3 | `/reservations/calendar` | Reservations | Calendar / timeline view |
| 4 | `/reservations/:id` | Reservations | Reservation detail / edit |
| 5 | `/reservations/checkin-checkout` | Reservations | Daily arrivals/departures board |
| 6 | `/guests` | Guests | Guest list |
| 7 | `/guests/:id` | Guests | Guest profile detail |
| 8 | `/guests/vip` | Guests | VIP guest list |
| 9 | `/guests/loyalty` | Guests | Loyalty program management |
| 10 | `/rooms` | Rooms | Room availability grid |
| 11 | `/rooms/types` | Rooms | Room type management |
| 12 | `/rooms/pricing` | Rooms | Dynamic pricing per room type |
| 13 | `/housekeeping` | Housekeeping | Cleaning queue board |
| 14 | `/housekeeping/assignments` | Housekeeping | Task assignment view |
| 15 | `/housekeeping/inspection` | Housekeeping | Room inspection checklist |
| 16 | `/revenue` | Revenue Management | ADR / RevPAR / Occupancy overview |
| 17 | `/revenue/forecast` | Revenue Management | Forecast charts |
| 18 | `/revenue/pricing-recommendations` | Revenue Management | AI pricing suggestions |
| 19 | `/marketing` | Marketing | Promotion performance overview |
| 20 | `/marketing/campaigns` | Marketing | Campaign ROI detail |
| 21 | `/marketing/sources` | Marketing | Booking source breakdown |
| 22 | `/reviews` | Reviews | Rating overview + review feed |
| 23 | `/reviews/:id` | Reviews | Single review + response |
| 24 | `/analytics` | Analytics | Revenue & booking trend charts |
| 25 | `/analytics/demographics` | Analytics | Guest demographics + country map |
| 26 | `/analytics/cancellations` | Analytics | Cancellation analysis |
| 27 | `/ai` | AI Center | Forecasts, predictions, recommendations hub |
| 28 | `/ai/reports` | AI Center | AI-generated daily reports archive |
| 29 | `/ai/alerts` | AI Center | Smart alerts feed |
| 30 | `/settings/property` | Settings | Property profile |
| 31 | `/settings/users` | Settings | Users & role management |
| 32 | `/settings/integrations` | Settings | PMS/channel manager/OTA integrations |
| 33 | `/login`, `/forgot-password` | Auth | Authentication flows |

---

## 8. Functional Requirements

### 8.1 Dashboard Overview
- FR-1.1: System displays a personalized Welcome Hero with the user's name, role, property name, and current date.
- FR-1.2: System displays 4 primary KPI cards: Occupancy Rate, Total Revenue (period-selectable), ADR, Available Rooms — each with a trend indicator (▲/▼ vs. prior period).
- FR-1.3: System renders a Booking Trend Chart (line/area) with selectable date ranges (7D, 30D, 90D, YTD).
- FR-1.4: System renders a Revenue Trend chart, comparable against the same period last year.
- FR-1.5: System displays a Room Status summary (Available, Occupied, Dirty, Cleaning, Maintenance, Out of Order) as a donut chart with counts.
- FR-1.6: System displays Revenue Sources breakdown (Direct, OTA, Corporate, Walk-in, Travel Agent) as a horizontal bar or donut chart.
- FR-1.7: System displays an Occupancy Heatmap (calendar-style grid, color intensity = occupancy %) for the current and next month.
- FR-1.8: System displays an AI Business Insights panel with 2–5 plain-language, auto-generated insights, refreshed at least daily.
- FR-1.9: All Dashboard Overview widgets are role-scoped per the Role-Based Access Matrix (Section 6.2).
- FR-1.10: Dashboard supports a global date-range filter that updates all applicable widgets simultaneously.

### 8.2 Reservation Management
- FR-2.1: System displays a searchable, sortable, filterable Reservation List with columns: Guest Name, Room, Check-in, Check-out, Status, Source, Amount, Payment Status.
- FR-2.2: System provides a Calendar View (timeline/Gantt-style) showing room occupancy across a date range, color-coded by Booking Status.
- FR-2.3: Users can create a new reservation via a guided form (guest, room type, dates, rate, add-ons).
- FR-2.4: Users can perform Check-in and Check-out actions from the list, calendar, or a dedicated daily arrivals/departures board.
- FR-2.5: Booking Status values: Confirmed, Pending, Checked-in, Checked-out, Cancelled, No-show.
- FR-2.6: Search supports guest name, booking reference, phone, and email.
- FR-2.7: Filters include: date range, status, room type, source, payment status.
- FR-2.8: Bulk Actions supported: bulk cancel, bulk status update, bulk export (CSV/PDF), bulk email/notification.
- FR-2.9: System prevents double-booking; if a room/date conflict is detected, the system blocks save and surfaces the conflicting reservation.
- FR-2.10: System supports split/partial payments and deposit tracking per reservation.

### 8.3 Guest Management
- FR-3.1: Each guest has a Guest Profile with contact info, ID/passport, preferences, and tags (VIP, Corporate, Repeat).
- FR-3.2: Guest Profile displays full Booking History (past & upcoming stays) with linked reservation records.
- FR-3.3: Loyalty Program module tracks points balance, tier (e.g., Silver/Gold/Platinum), and redemption history.
- FR-3.4: VIP Guests view lists guests flagged VIP with quick filters (by tier, by upcoming stay).
- FR-3.5: Staff can add free-text Guest Notes (e.g., allergies, preferences) visible at check-in.
- FR-3.6: Spending Analytics shows lifetime value, average spend per stay, and category breakdown (room, F&B, add-ons) per guest.
- FR-3.7: Guest data supports merge/de-duplication when the same guest is detected across multiple bookings (matched by email/phone).

### 8.4 Room Management
- FR-4.1: Room Availability view shows real-time status per room across a selectable date range.
- FR-4.2: Room Types module defines type name, capacity, amenities, base rate, and photos.
- FR-4.3: Housekeeping Status is visible per room (Clean, Dirty, Cleaning in Progress, Inspected, Out of Order) and syncs bi-directionally with the Housekeeping module.
- FR-4.4: Maintenance Scheduling allows creating maintenance tickets per room with priority, assignee, and status, and can block a room from bookings.
- FR-4.5: Dynamic Pricing at the room-type level allows manual rate overrides per date, with AI-suggested rates shown alongside.

### 8.5 Housekeeping Module
- FR-5.1: Cleaning Queue lists all rooms needing cleaning, sorted by priority by default.
- FR-5.2: Task Assignment supports drag-and-drop or one-click assignment of rooms to housekeeping staff, with workload balancing indicators.
- FR-5.3: Progress Tracking shows real-time status per room (Not Started, In Progress, Awaiting Inspection, Complete).
- FR-5.4: Priority Levels (Urgent, High, Normal) are auto-calculated from same-day check-in time, VIP status, and manual overrides.
- FR-5.5: Room Inspection provides a checklist (configurable per property) that supervisors complete to mark a room "Clean & Ready" or flag issues back to Maintenance.

### 8.6 Revenue Management
- FR-6.1: System calculates and displays ADR (Average Daily Rate), RevPAR, and Occupancy Rate for selectable periods, with YoY and MoM comparisons.
- FR-6.2: Revenue Forecast projects revenue 30/60/90 days out using historical booking pace and seasonality.
- FR-6.3: Dynamic Pricing Recommendations suggest rate changes per room type per date, with a stated rationale (demand signal, competitor signal, event signal) and projected revenue impact.
- FR-6.4: Users can accept, modify, or reject pricing recommendations individually or in bulk.
- FR-6.5: System logs a full audit trail of rate changes (who, when, old value, new value, AI-suggested or manual).

### 8.7 Marketing Dashboard
- FR-7.1: Promotion Performance tracks active/past promotions with bookings generated, revenue generated, and redemption rate.
- FR-7.2: Coupon Analytics shows usage count, discount value given, and net revenue impact per coupon code.
- FR-7.3: Booking Sources breaks down reservations by channel (Direct, OTA-specific, Metasearch, Corporate, Referral) with revenue and volume.
- FR-7.4: Campaign ROI links marketing spend (manually entered or integrated) to bookings/revenue attributed to that campaign, calculating ROI %.

### 8.8 Customer Reviews
- FR-8.1: Rating Overview aggregates average rating and review count across connected platforms (Google, Booking.com, TripAdvisor — via integration in V2; manual entry in V1).
- FR-8.2: Review Feed lists individual reviews chronologically with platform source, rating, and full text.
- FR-8.3: Sentiment Analysis auto-tags each review as Positive/Neutral/Negative and extracts key themes (e.g., "cleanliness," "staff friendliness," "noise").
- FR-8.4: Response Management allows staff to draft and (where API-supported) publish responses directly, with an AI-suggested response draft.

### 8.9 Analytics
- FR-9.1: Revenue Charts provide multi-dimensional breakdowns (by room type, by channel, by month) with export capability.
- FR-9.2: Booking Trends chart shows booking volume and lead time distribution over time.
- FR-9.3: Guest Demographics shows breakdown by age bracket, purpose of stay (business/leisure), and party size, where data is available.
- FR-9.4: Country Map visualizes guest origin by country (choropleth map) using booking address/nationality data.
- FR-9.5: Cancellation Analysis shows cancellation rate over time, top cancellation reasons, and revenue impact.
- FR-9.6: Seasonal Insights highlights historical high/low demand periods and recommends planning actions.

### 8.10 AI Features
- FR-10.1: Revenue Forecast (AI) — see FR-6.2, extended with confidence interval display.
- FR-10.2: Occupancy Prediction forecasts expected occupancy by date, factoring in pace, seasonality, and local events.
- FR-10.3: Dynamic Pricing Suggestions — see FR-6.3.
- FR-10.4: AI-Generated Daily Reports compile a plain-language summary (yesterday's performance, today's outlook, flagged issues) delivered in-app and optionally via email at a configurable time.
- FR-10.5: Business Recommendations surface actionable suggestions (e.g., "Consider a 2-night minimum stay for the upcoming holiday weekend based on high demand").
- FR-10.6: Smart Alerts proactively notify users of anomalies (occupancy drop, negative review spike, overbooking risk, housekeeping backlog) via in-app notification and optional email/push.

---

## 9. Non-Functional Requirements

| Category | Requirement |
|---|---|
| Performance | Dashboard initial load < 2s (P75) on broadband; subsequent navigations < 500ms via client-side caching. |
| Scalability | Backend supports properties from 10 to 1,000+ rooms and multi-property portfolios without architecture change. |
| Availability | 99.9% uptime SLA for production environment; documented maintenance windows communicated in advance. |
| Real-time updates | Room status, reservation status, and housekeeping status changes reflect across all connected clients within 3 seconds (via WebSocket/pusher-style channel). |
| Data freshness | KPI and analytics data refresh at minimum every 5 minutes; AI insights refresh at least daily, with on-demand refresh option. |
| Localization | UI supports multi-language (English at launch; Bahasa Indonesia, Spanish planned) and multi-currency display. |
| Browser support | Latest 2 versions of Chrome, Safari, Edge, Firefox; iOS Safari and Android Chrome for mobile web. |
| Offline resilience | Critical front-desk actions (check-in/out) queue locally and sync when connectivity resumes (tablet use case). |
| Auditability | All create/update/delete actions on reservations, rates, and guest data are logged with actor, timestamp, and diff. |
| Data retention | Guest and reservation data retained per configurable policy (default 7 years) in compliance with local regulation. |
| Accessibility | WCAG 2.1 AA compliance across all core flows (see Section 19). |
| Maintainability | Component-driven architecture (shadcn/ui + Tailwind design tokens) to ensure consistent, low-effort UI changes. |

---

## 10. Dashboard Layout Specification

### 10.1 Global Layout Grid (Desktop, ≥1280px)

```
┌───────────────────────────────────────────────────────────────────┐
│ Top Bar: Logo | Search | Notifications | Date Range | Profile Menu │
├───────────┬───────────────────────────────────────────────────────┤
│           │  Welcome Hero (greeting, property snapshot)            │
│  Sidebar  ├───────────────────────────────────────────────────────┤
│  Nav      │  KPI Card Row (4 cards, 24px gap, equal width)         │
│  (240px,  ├───────────────────────────┬───────────────────────────┤
│  collaps- │  Booking Trend Chart (60%) │ Room Status Donut (40%)   │
│  ible to  ├───────────────────────────┼───────────────────────────┤
│  72px)    │  Revenue Trend Chart (60%) │ Revenue Sources (40%)     │
│           ├───────────────────────────┴───────────────────────────┤
│           │  Occupancy Heatmap (full width, horizontally scrollable)│
│           ├───────────────────────────────────────────────────────┤
│           │  AI Business Insights (full width, card stack)         │
└───────────┴───────────────────────────────────────────────────────┘
```

### 10.2 Layout Rules

| Element | Specification |
|---|---|
| Base grid | 12-column responsive grid, 24px gutter, 32px page margin (desktop) |
| Card corner radius | 20px (range 16–24px per module — 16px for dense data tables, 24px for hero/insight cards) |
| Card padding | 24px (desktop), 16px (mobile) |
| Card elevation | `shadow-sm` at rest, `shadow-md` on hover, transition 150ms ease-out |
| Sidebar | Fixed 240px expanded / 72px icon-only collapsed; collapses automatically <1024px |
| Top bar height | 72px, sticky, `bg-surface` with 1px bottom border `#ECECEC` |
| Section spacing | 32px vertical gap between major sections, 24px between cards within a section |
| Max content width | 1440px centered, with fluid margins beyond that |

### 10.3 Module Layout Patterns

| Pattern | Used In | Description |
|---|---|---|
| Hero + KPI Row + Charts | Dashboard Overview | Narrative-first layout: greet, summarize, then detail. |
| Split List/Detail | Reservations, Guests, Reviews | Left: list/table (40%); Right: detail drawer or panel (60%), collapsible to full-width list on mobile. |
| Kanban Board | Housekeeping (Cleaning Queue) | Columns: Not Started / In Progress / Awaiting Inspection / Complete, drag-and-drop cards. |
| Calendar/Timeline | Reservations Calendar, Occupancy Heatmap | Horizontal date axis, rooms/room-types as rows. |
| Tabbed Analytics | Revenue Management, Analytics, Marketing | Top tab bar switches between chart sets within a shared date-range filter. |
| Insight Feed | AI Center, Reviews (sentiment) | Vertical stack of card-based insights, most important/urgent first. |

---

## 11. Component Inventory

### 11.1 Core Design System Components (shadcn/ui-based)

| Component | Variants / States | Used In |
|---|---|---|
| Button | primary, secondary, ghost, destructive, icon-only; states: default, hover, active, disabled, loading | Global |
| KPI Card | default, with-trend-arrow, with-sparkline, loading skeleton, empty | Dashboard Overview, Revenue Management |
| Data Table | sortable, filterable, paginated, row-selectable, sticky header, loading skeleton, empty state | Reservations, Guests, Rooms |
| Badge / Status Pill | success, warning, danger, neutral, info (mapped to Booking/Room/Task status) | Reservations, Rooms, Housekeeping |
| Calendar/Timeline Grid | day/week/month view, drag-to-select, color-coded cells | Reservations, Occupancy Heatmap |
| Kanban Card | draggable, priority-flagged, avatar-assigned | Housekeeping |
| Chart (Line/Area) | single-series, comparative (YoY), with tooltip, with date brush | Booking Trend, Revenue Trend, Forecast |
| Chart (Donut/Pie) | with center label, legend, hover isolate | Room Status, Revenue Sources |
| Chart (Bar) | horizontal, vertical, stacked | Revenue Sources, Analytics |
| Heatmap Grid | color-intensity scale, tooltip on hover | Occupancy Heatmap |
| Map (Choropleth) | country-level shading, hover tooltip | Guest Demographics |
| AI Insight Card | icon + headline + supporting detail + action button, dismissible | AI Business Insights, Smart Alerts |
| Modal / Drawer | side-drawer (detail views), center-modal (confirmations, forms) | Global |
| Toast Notification | success, error, info; auto-dismiss 4s | Global |
| Search Bar | with autocomplete, recent searches, keyboard shortcut (⌘K) | Global top bar |
| Filter Bar | multi-select chips, date range picker, saved filters | Reservations, Guests, Analytics |
| Avatar / Guest Chip | with VIP indicator, initials fallback | Guests, Housekeeping assignment |
| Progress Bar / Stepper | linear (task progress), stepped (check-in flow) | Housekeeping, Reservations |
| Empty State | illustration + message + primary CTA | All list/table views |
| Skeleton Loader | card skeleton, table row skeleton, chart skeleton | Global |
| Tabs | underline style, pill style | Revenue Management, Analytics |
| Sidebar Nav Item | default, active, with badge count | Global sidebar |
| Toggle / Switch | for settings, bulk-select "select all" | Settings, Bulk Actions |
| Date Range Picker | presets (7D/30D/90D/YTD/Custom) | Global filters |
| Rating Stars | display-only, interactive (response drafting context) | Reviews |
| Sentiment Tag | positive/neutral/negative pill with icon | Reviews |

### 11.2 Component-to-Module Mapping (Summary)

| Module | Primary Components Used |
|---|---|
| Dashboard Overview | KPI Card, Line/Area Chart, Donut Chart, Heatmap Grid, AI Insight Card |
| Reservations | Data Table, Calendar/Timeline Grid, Badge, Filter Bar, Drawer |
| Guests | Data Table, Avatar/Guest Chip, Badge, Spending chart (Bar) |
| Rooms | Data Table, Badge, Kanban-lite status board, Dynamic Pricing inline editor |
| Housekeeping | Kanban Card/Board, Progress Bar, Avatar Chip, Checklist component |
| Revenue Management | KPI Card, Line Chart (forecast w/ confidence band), Recommendation Card |
| Marketing | KPI Card, Bar Chart, Table (campaign list), ROI Card |
| Reviews | Rating Stars, Sentiment Tag, Review Feed Card, Response composer |
| Analytics | Line/Bar/Donut charts, Choropleth Map, Data Table (export) |
| AI Center | AI Insight Card, Alert Card, Report document viewer |

---

## 12. Feature Specifications

### 12.1 AI Business Insights (Dashboard Overview)
- **Input data:** occupancy, revenue, booking pace, reviews, housekeeping SLA — rolling 7/30-day windows.
- **Output:** 2–5 natural-language cards, e.g., *"Weekend occupancy is trending 14% below last month — consider a limited-time direct-booking discount."*
- **Interaction:** each card has "View Details" (deep-links to relevant module) and "Dismiss."
- **Refresh cadence:** recalculated every 24h, plus real-time trigger on anomaly detection (Smart Alerts overlap).

### 12.2 Dynamic Pricing Recommendations
- **Input data:** historical ADR/occupancy, booking pace vs. same point last cycle, day-of-week seasonality, (V2) competitor rate feed, (V2) local event calendar.
- **Output:** per room-type, per-date suggested rate, delta vs. current rate, confidence label (Low/Medium/High), one-line rationale.
- **Interaction:** Accept / Modify / Reject per row; "Accept All High-Confidence" bulk action.
- **Guardrails:** suggested rate is capped within a configurable min/max band set by the Revenue Manager to prevent runaway pricing.

### 12.3 Cleaning Queue & Priority Engine
- **Priority calculation inputs:** scheduled check-in time for the room today, VIP flag, manual supervisor override, time since checkout.
- **Priority tiers:** Urgent (check-in <2h and room dirty), High (check-in today), Normal (no same-day check-in).
- **Auto-reassignment:** if a housekeeper is inactive >20 minutes on an in-progress task, supervisor receives a Smart Alert.

### 12.4 AI-Generated Daily Report
- **Delivery:** generated daily at a configurable time (default 7:00 AM property-local time); accessible in AI Center and optionally emailed.
- **Content sections:** Yesterday's performance snapshot, today's arrivals/departures/occupancy outlook, flagged operational issues, one revenue recommendation, one marketing/reviews highlight.
- **Format:** in-app card-based report + downloadable PDF export.

### 12.5 Sentiment Analysis (Reviews)
- **Processing:** each incoming review is classified Positive/Neutral/Negative and tagged with up to 3 themes from a controlled vocabulary (cleanliness, staff, location, value, amenities, noise, food).
- **Aggregation:** Rating Overview surfaces theme-level sentiment trend over time (e.g., "cleanliness mentions have improved 18% this quarter").
- **Response assist:** AI drafts a suggested reply matching tone (apologetic for negative, appreciative for positive) which staff can edit before sending.

---

## 13. User Stories & 14. Acceptance Criteria

Each story is grouped by module. Acceptance criteria are written to be directly testable by QA.

### 13.1 Dashboard Overview

**US-1.** As a Hotel Owner, I want to see a snapshot of occupancy, revenue, ADR, and available rooms as soon as I log in, so that I know how the business is doing without digging through reports.
- [ ] KPI cards for Occupancy, Revenue, ADR, and Available Rooms are visible above the fold on load.
- [ ] Each KPI card shows current value and % change vs. the prior comparable period.
- [ ] Values update within 5 minutes of an underlying data change (new booking, cancellation, checkout).
- [ ] Loading state shows skeleton cards, not blank space or layout shift.

**US-2.** As a GM, I want AI-generated insights on my dashboard, so that I don't have to interpret raw charts myself.
- [ ] At least 1 and up to 5 AI Insight cards render on the Dashboard Overview.
- [ ] Each insight is a complete, plain-language sentence referencing a specific metric and timeframe.
- [ ] Tapping "View Details" navigates to the relevant module pre-filtered to the relevant date range.
- [ ] If no notable insight exists, system shows a neutral "Everything's on track" state rather than a forced/generic insight.

### 13.2 Reservation Management

**US-3.** As Front Office Staff, I want to search for a guest's reservation by name or reference number, so that I can check them in quickly.
- [ ] Search returns matching results within 300ms for datasets up to 50,000 reservations.
- [ ] Search matches partial guest name, exact booking reference, phone, and email.
- [ ] Zero results shows an explicit empty state with a "Create New Reservation" shortcut.

**US-4.** As Front Office Staff, I want to check a guest in with one action, so that the front desk line keeps moving.
- [ ] Check-In button is visible and enabled only for reservations with status "Confirmed" and check-in date = today or earlier.
- [ ] On click, Booking Status updates to "Checked-in" and Room Status updates to "Occupied" within 3 seconds, visible to all connected clients.
- [ ] If the room is not yet "Clean & Ready," system shows a warning but allows override with confirmation.

**US-5.** As a GM, I want to bulk-cancel reservations tied to a cancelled group booking, so that I don't have to update each one manually.
- [ ] User can multi-select rows in the Reservation List via checkboxes.
- [ ] Bulk Actions bar appears when ≥1 row is selected, showing count of selected items.
- [ ] Confirmation modal lists the number of reservations to be affected before executing.
- [ ] Action is reversible within 24 hours via an "Undo" link in the confirmation toast.

### 13.3 Guest Management

**US-6.** As Front Office Staff, I want to see a guest's notes and VIP status during check-in, so that I can personalize their stay.
- [ ] Guest Notes and VIP badge are visible in the check-in confirmation panel without an extra click.
- [ ] Notes support at least 500 characters and display full text on hover/expand.

**US-7.** As a Revenue Manager, I want to see a guest's lifetime spend, so that I can identify high-value repeat guests.
- [ ] Guest Profile displays lifetime value, number of stays, and average spend per stay.
- [ ] Spending Analytics breaks down spend by category (room, F&B, other) when data is available.

### 13.4 Room & Housekeeping Management

**US-8.** As a Housekeeping Supervisor, I want rooms automatically prioritized by same-day check-in urgency, so that my team cleans the right rooms first.
- [ ] Cleaning Queue is sorted by Priority (Urgent > High > Normal) by default.
- [ ] Priority recalculates automatically if a same-day check-in is added/cancelled after initial queue generation.
- [ ] Supervisor can manually override priority on any room, with the override flagged visually (e.g., pin icon).

**US-9.** As a Housekeeping Supervisor, I want to assign rooms to specific staff via drag-and-drop, so that I can balance workload quickly.
- [ ] Dragging a room card onto a staff column assigns that room and updates in real time for the assignee's device.
- [ ] Each staff column shows current task count to support visual load-balancing.
- [ ] Reassignment is possible by dragging a card between staff columns.

**US-10.** As a GM, I want to flag a room for maintenance, so that it's excluded from bookings until resolved.
- [ ] Creating a Maintenance ticket on a room sets Room Status to "Out of Order."
- [ ] Room does not appear as bookable in Reservations or Room Availability while status is "Out of Order."
- [ ] Resolving the ticket returns the room to its prior status (Clean/Dirty as applicable), not automatically to "Available."

### 13.5 Revenue Management

**US-11.** As a Revenue Manager, I want AI-suggested pricing with a clear rationale, so that I can make fast, confident pricing decisions.
- [ ] Each suggestion row displays: room type, date, current rate, suggested rate, % delta, one-line rationale, confidence level.
- [ ] "Accept All High-Confidence" applies only to rows labeled High confidence and shows a summary count before confirming.
- [ ] Accepted suggestions update the live rate and log an audit entry with actor = "AI (approved by [user])."

**US-12.** As a Revenue Manager, I want to compare ADR and RevPAR against the same period last year, so that I can gauge real growth.
- [ ] Revenue Management overview supports toggling a YoY comparison overlay on all trend charts.
- [ ] Comparison period auto-adjusts correctly across leap years and month-length differences.

### 13.6 Marketing

**US-13.** As a Marketing Lead, I want to see ROI per campaign, so that I can reallocate budget to what works.
- [ ] Campaign ROI table shows spend, bookings attributed, revenue attributed, and ROI % per campaign.
- [ ] Campaigns are sortable by ROI % descending by default.
- [ ] Campaigns with no attributed bookings show "No data yet" rather than 0% ROI (to avoid misleading negative framing).

### 13.7 Reviews

**US-14.** As a GM, I want negative reviews flagged and easy to respond to, so that I can protect the hotel's reputation quickly.
- [ ] Reviews with Negative sentiment are visually distinguished (e.g., red-tinted badge) and sortable to the top.
- [ ] AI-suggested response draft appears alongside each review, editable before sending.
- [ ] Unresponded reviews older than 48 hours trigger a Smart Alert.

### 13.8 Analytics

**US-15.** As a GM, I want to see where my guests come from geographically, so that I can target marketing better.
- [ ] Country Map shades countries by guest volume using a consistent intensity scale with a visible legend.
- [ ] Hovering a country shows exact guest count and % of total.
- [ ] Map gracefully handles missing nationality data (shown as "Unknown" aggregate, excluded from the map itself).

### 13.9 AI Features

**US-16.** As a Hotel Owner, I want a daily report I can read in under a minute, so that I stay informed without logging in every day.
- [ ] Daily Report contains no more than 6 content blocks, each ≤3 sentences.
- [ ] Report is available by the configured delivery time with ≥99% reliability.
- [ ] Report is downloadable as PDF and archived for at least 12 months.

**US-17.** As a GM, I want to be alerted proactively about operational risks, so that I can act before they become guest-facing problems.
- [ ] Smart Alerts trigger for: overbooking risk, occupancy drop >X% week-over-week, housekeeping SLA breach, negative review spike.
- [ ] Each alert includes severity (Info/Warning/Critical), affected entity link, and a suggested next action.
- [ ] Alerts are deduplicated — the same underlying issue does not generate repeat alerts within a 4-hour window.

---

## 15. API Requirements

HotelHub's backend exposes a REST API (Laravel) consumed by the Next.js frontend, with WebSocket channels (via Laravel Reverb/Pusher-compatible broadcasting) for real-time updates on reservations, room status, and housekeeping tasks.

### 15.1 API Design Principles
- RESTful resource-based routing, versioned under `/api/v1/`.
- JSON:API-inspired response envelope: `{ data, meta, links }` for list endpoints; `{ data }` for single-resource endpoints.
- Authentication via Laravel Sanctum (SPA token-based session) with role claims embedded in the token payload.
- All list endpoints support `?page`, `?per_page`, `?sort`, `?filter[field]=value`, and `?include=` for relationship eager-loading.
- Rate limiting: 120 requests/minute per authenticated user (configurable per plan tier).

### 15.2 Core Endpoint Groups

| Resource | Endpoints | Notes |
|---|---|---|
| Auth | `POST /login`, `POST /logout`, `POST /forgot-password`, `GET /me` | Sanctum session + role/permissions in `/me` |
| Dashboard | `GET /dashboard/kpis`, `GET /dashboard/booking-trend`, `GET /dashboard/revenue-trend`, `GET /dashboard/room-status`, `GET /dashboard/revenue-sources`, `GET /dashboard/occupancy-heatmap` | All accept `?date_from&date_to`; role-scoped server-side |
| Reservations | `GET/POST /reservations`, `GET/PUT/DELETE /reservations/{id}`, `POST /reservations/{id}/check-in`, `POST /reservations/{id}/check-out`, `POST /reservations/bulk` | `bulk` accepts an array of IDs + action |
| Guests | `GET/POST /guests`, `GET/PUT /guests/{id}`, `GET /guests/{id}/bookings`, `GET /guests/{id}/spending`, `POST /guests/{id}/notes` | |
| Rooms | `GET/POST /rooms`, `GET/PUT /rooms/{id}`, `GET/POST /room-types`, `PUT /rooms/{id}/status`, `POST /rooms/{id}/maintenance` | |
| Housekeeping | `GET /housekeeping/queue`, `POST /housekeeping/tasks/{id}/assign`, `PUT /housekeeping/tasks/{id}/progress`, `POST /housekeeping/tasks/{id}/inspect` | |
| Revenue | `GET /revenue/metrics`, `GET /revenue/forecast`, `GET /revenue/pricing-suggestions`, `POST /revenue/pricing-suggestions/{id}/accept`, `POST /revenue/pricing-suggestions/bulk-accept` | |
| Marketing | `GET/POST /promotions`, `GET /coupons/{code}/analytics`, `GET /marketing/booking-sources`, `GET/POST /campaigns`, `GET /campaigns/{id}/roi` | |
| Reviews | `GET /reviews`, `GET /reviews/{id}`, `POST /reviews/{id}/respond`, `GET /reviews/sentiment-summary` | |
| Analytics | `GET /analytics/revenue`, `GET /analytics/bookings`, `GET /analytics/demographics`, `GET /analytics/countries`, `GET /analytics/cancellations`, `GET /analytics/seasonality` | |
| AI | `GET /ai/insights`, `GET /ai/forecast/occupancy`, `GET /ai/reports/daily`, `GET /ai/reports/{id}`, `GET /ai/alerts`, `POST /ai/alerts/{id}/dismiss` | |
| Settings | `GET/PUT /settings/property`, `GET/POST/PUT/DELETE /settings/users`, `GET/POST /settings/integrations` | |

### 15.3 Real-Time Channels (WebSocket)

| Channel | Event | Payload | Consumed By |
|---|---|---|---|
| `property.{id}.reservations` | `ReservationStatusChanged` | reservation id, new status, room id | Reservations, Dashboard |
| `property.{id}.rooms` | `RoomStatusChanged` | room id, new status, updated_by | Rooms, Housekeeping, Front Office |
| `property.{id}.housekeeping` | `TaskAssigned`, `TaskProgressUpdated` | task id, room id, staff id, status | Housekeeping |
| `property.{id}.alerts` | `SmartAlertRaised` | alert id, severity, message, entity link | AI Center, global notification bell |

### 15.4 Example Response — `GET /dashboard/kpis`

```json
{
  "data": {
    "occupancy_rate": { "value": 78.4, "unit": "%", "change_pct": 4.2 },
    "revenue": { "value": 184250000, "currency": "IDR", "change_pct": 8.1 },
    "adr": { "value": 1120000, "currency": "IDR", "change_pct": -1.3 },
    "available_rooms": { "value": 26, "total_rooms": 120 }
  },
  "meta": { "period": "2026-07-01_2026-07-20", "compared_to": "2026-06-01_2026-06-20" }
}
```

---

## 16. Database Entities

### 16.1 Entity-Relationship Overview

```
Property (1) ──< Room Type (1) ──< Room (1) ──< Reservation (M) >── (1) Guest
Property (1) ──< User (staff, roles)
Reservation (1) ──< Payment (M)
Room (1) ──< HousekeepingTask (M)
Room Type (1) ──< RateEntry (M, per date)
Reservation (1) ──< PricingSuggestion (M, applied history)
Guest (1) ──< LoyaltyAccount (1)
Property (1) ──< Review (M)
Property (1) ──< Campaign (M) ──< CouponCode (M)
Property (1) ──< AIReport (M)
Property (1) ──< Alert (M)
```

### 16.2 Core Entities & Fields

**Property**
| Field | Type | Notes |
|---|---|---|
| id | uuid | PK |
| name | string | |
| address, city, country | string | |
| timezone | string | IANA format |
| currency | string | ISO 4217 |
| total_rooms | integer | derived, cached |

**User** (staff account)
| Field | Type | Notes |
|---|---|---|
| id | uuid | PK |
| property_id | uuid | FK, nullable for multi-property owner |
| name, email | string | |
| role | enum | owner, gm, front_office, revenue_manager, housekeeping_supervisor, marketing |
| password_hash | string | |
| last_login_at | timestamp | |

**RoomType**
| Field | Type | Notes |
|---|---|---|
| id | uuid | PK |
| property_id | uuid | FK |
| name | string | e.g., Deluxe King |
| capacity | integer | |
| base_rate | decimal | |
| amenities | json | array of strings |

**Room**
| Field | Type | Notes |
|---|---|---|
| id | uuid | PK |
| room_type_id | uuid | FK |
| room_number | string | |
| status | enum | available, occupied, dirty, cleaning, inspected, maintenance |
| floor | integer | |

**Guest**
| Field | Type | Notes |
|---|---|---|
| id | uuid | PK |
| name, email, phone | string | |
| nationality | string | ISO country code |
| id_document_number | string | encrypted at rest |
| vip | boolean | |
| tags | json | array |

**Reservation**
| Field | Type | Notes |
|---|---|---|
| id | uuid | PK |
| guest_id, room_id | uuid | FK |
| check_in_date, check_out_date | date | |
| status | enum | confirmed, pending, checked_in, checked_out, cancelled, no_show |
| source | enum | direct, ota_booking, ota_agoda, corporate, walk_in, travel_agent |
| rate_applied | decimal | |
| total_amount | decimal | |
| created_at, updated_at | timestamp | |

**Payment**
| Field | Type | Notes |
|---|---|---|
| id | uuid | PK |
| reservation_id | uuid | FK |
| amount | decimal | |
| method | enum | card, cash, bank_transfer, ota_prepaid |
| status | enum | pending, paid, refunded, partial |
| paid_at | timestamp | |

**HousekeepingTask**
| Field | Type | Notes |
|---|---|---|
| id | uuid | PK |
| room_id | uuid | FK |
| assigned_to | uuid | FK → User |
| priority | enum | urgent, high, normal |
| status | enum | not_started, in_progress, awaiting_inspection, complete |
| inspected_by | uuid | FK → User, nullable |
| inspected_at | timestamp | nullable |

**RateEntry**
| Field | Type | Notes |
|---|---|---|
| id | uuid | PK |
| room_type_id | uuid | FK |
| date | date | |
| rate | decimal | current live rate |
| ai_suggested_rate | decimal | nullable |
| suggestion_status | enum | pending, accepted, modified, rejected |

**LoyaltyAccount**
| Field | Type | Notes |
|---|---|---|
| id | uuid | PK |
| guest_id | uuid | FK, unique |
| points_balance | integer | |
| tier | enum | silver, gold, platinum |

**Review**
| Field | Type | Notes |
|---|---|---|
| id | uuid | PK |
| property_id | uuid | FK |
| platform | enum | google, booking_com, tripadvisor, direct |
| rating | decimal | 1.0–5.0 |
| text | text | |
| sentiment | enum | positive, neutral, negative |
| themes | json | array |
| response_text | text | nullable |
| responded_at | timestamp | nullable |

**Campaign / CouponCode**
| Field | Type | Notes |
|---|---|---|
| id | uuid | PK |
| property_id | uuid | FK |
| name | string | |
| spend | decimal | |
| start_date, end_date | date | |
| coupon_code | string | nullable, linked table for redemptions |

**AIReport**
| Field | Type | Notes |
|---|---|---|
| id | uuid | PK |
| property_id | uuid | FK |
| type | enum | daily, weekly |
| content | json | structured report blocks |
| generated_at | timestamp | |

**Alert**
| Field | Type | Notes |
|---|---|---|
| id | uuid | PK |
| property_id | uuid | FK |
| severity | enum | info, warning, critical |
| category | enum | overbooking, occupancy_drop, housekeeping_sla, review_sentiment |
| message | string | |
| entity_type, entity_id | string, uuid | polymorphic link |
| dismissed_at | timestamp | nullable |

---

## 17. Design System

### 17.1 Color Palette & Usage

| Token | Hex | Usage |
|---|---|---|
| `--color-primary` | #FF5A5F | Primary actions, active nav item, key CTAs — used sparingly |
| `--color-secondary` | #00A699 | Secondary actions, positive trend accents, secondary charts |
| `--color-background` | #FAFAFA | App background |
| `--color-surface` | #FFFFFF | Cards, modals, top bar |
| `--color-text` | #222222 | Primary text |
| `--color-border` | #ECECEC | Dividers, card borders, table row separators |
| `--color-success` | #34C759 | Positive trend, "Clean & Ready," "Paid" status |
| `--color-warning` | #FFB400 | "Pending," "Awaiting Inspection," medium-priority alerts |
| `--color-danger` | #FF4D4F | "Cancelled," "Out of Order," critical alerts |

**Usage rule:** color communicates *meaning* (status, trend, priority), never decoration. No more than one primary-colored CTA visible per screen section to preserve visual hierarchy.

### 17.2 Typography

| Style | Font Size / Weight | Usage |
|---|---|---|
| Display | 32–40px / 700 | Welcome Hero greeting, KPI headline numbers |
| H1 | 28px / 600 | Page titles |
| H2 | 20px / 600 | Section/card titles |
| Body | 15px / 400 | Table cells, descriptions |
| Small / Caption | 13px / 400–500 | Metadata, timestamps, helper text |
| Font family | Inter (or system-ui fallback) | All UI text |

### 17.3 Spacing & Radius Scale

| Token | Value |
|---|---|
| `--radius-sm` | 12px (inputs, badges) |
| `--radius-md` | 16px (dense cards, tables) |
| `--radius-lg` | 20px (standard cards) |
| `--radius-xl` | 24px (hero cards, modals) |
| `--space-1..8` | 4 / 8 / 12 / 16 / 20 / 24 / 32 / 48px |

### 17.4 Elevation

| Level | Tailwind Class | Usage |
|---|---|---|
| Resting | `shadow-sm` | Default card state |
| Hover | `shadow-md` | Card hover, interactive rows |
| Overlay | `shadow-lg` | Dropdowns, popovers |
| Modal | `shadow-xl` | Modals, drawers |

### 17.5 Motion (Framer Motion)

| Interaction | Motion Spec |
|---|---|
| Card hover | scale 1.0 → 1.01, shadow-sm → shadow-md, 150ms ease-out |
| Page/section transition | fade + 8px slide-up, 200ms ease-out |
| Modal/drawer open | slide-in 250ms ease-in-out + backdrop fade 150ms |
| Toast notification | slide-in from top-right, auto-dismiss fade after 4s |
| Kanban card drag | scale 1.03 + shadow-lg while dragging, spring return on drop |
| Number count-up (KPI cards) | animate from 0 to value over 600ms on first render |

### 17.6 Tech Implementation Notes

- Design tokens defined as CSS variables and mapped into `tailwind.config.ts` under `theme.extend.colors` / `borderRadius`.
- All components built on shadcn/ui primitives (Radix UI underneath) for accessibility-correct behavior (focus trap, ARIA) out of the box.
- Charts via Recharts, styled to consume the same design tokens (no hard-coded hex values in chart components).
- Tables via TanStack Table for sorting/filtering/pagination logic, styled with Tailwind to match the Data Table component spec.

---

## 18. Responsive Guidelines

| Breakpoint | Width | Layout Behavior |
|---|---|---|
| Mobile | <640px | Single column; sidebar becomes bottom nav (5 primary icons) or hamburger drawer; KPI cards stack vertically; tables convert to card-list view |
| Tablet | 640–1023px | Sidebar collapses to icon-only (72px); KPI cards in 2x2 grid; charts stack; calendar/Kanban views scroll horizontally |
| Desktop | 1024–1439px | Full sidebar (240px); KPI cards in a row of 4; standard module layouts as specified in Section 10 |
| Large Desktop | ≥1440px | Content max-width 1440px, centered; extra whitespace on margins, no additional columns added |

### 18.1 Mobile-First Priority Screens
Per the persona needs (Front Office and Housekeeping work primarily on tablets/phones), the following are designed mobile-first before desktop:
- Check-in/Check-out board
- Cleaning Queue & Task Assignment
- Room Inspection checklist
- Smart Alerts feed
- AI Daily Report

### 18.2 Touch Targets
- Minimum touch target 44x44px for all interactive elements on mobile/tablet.
- Drag-and-drop interactions (Housekeeping Kanban) include a tap-based fallback ("Assign to..." menu) for accessibility and small-screen use.

---

## 19. Accessibility Requirements (WCAG 2.1 AA)

| Requirement | Implementation |
|---|---|
| Color contrast | Text meets 4.5:1 contrast minimum against background; status colors paired with icons/text labels, not color alone |
| Keyboard navigation | All interactive elements reachable and operable via Tab/Shift+Tab/Enter/Space; visible focus ring using `--color-primary` outline |
| Screen reader support | Semantic HTML + ARIA labels on all icon-only buttons, charts include text-alternative summaries |
| Drag-and-drop alternative | Housekeeping assignment and Kanban actions available via keyboard/menu, not drag-only |
| Form errors | Inline, associated via `aria-describedby`, not color-only indication |
| Motion sensitivity | Respects `prefers-reduced-motion`; disables non-essential animation (count-up, hover scale) when set |
| Text resize | UI remains usable at 200% browser zoom without horizontal scroll on core flows |
| Skip links | "Skip to main content" link on every page for keyboard users |

---

## 20. Analytics & KPIs (Product Instrumentation)

This section defines what HotelHub itself tracks about product usage (distinct from the hotel-performance KPIs shown to users in-app).

| Event | Properties | Purpose |
|---|---|---|
| `dashboard_viewed` | user_role, property_id, load_time_ms | Measure engagement & performance |
| `ai_insight_viewed` / `ai_insight_dismissed` | insight_id, category | Measure AI insight relevance |
| `pricing_suggestion_accepted` / `_modified` / `_rejected` | suggestion_id, delta_pct | Measure AI pricing trust & accuracy |
| `reservation_created` / `checked_in` / `checked_out` | source, duration_ms | Operational funnel health |
| `housekeeping_task_completed` | duration_minutes, priority | Turnaround efficiency |
| `alert_acted_on` | alert_id, category, time_to_action_s | Alert usefulness |
| `daily_report_opened` | delivery_channel (in-app/email) | Report engagement |
| `bulk_action_performed` | action_type, item_count | Efficiency-feature adoption |

### 20.1 Product Health Dashboard (Internal)

| Metric | Target |
|---|---|
| Weekly Active Users / Licensed Users | >80% |
| Time-to-first-value (first meaningful action post-onboarding) | <15 minutes |
| AI suggestion acceptance rate | >50% |
| Average session length (GM/Owner) | 5–10 minutes (efficient, not sticky-for-its-own-sake) |
| Feature adoption: Housekeeping module | >90% of daily-active properties |
| Support ticket rate | <5% of WAU/month |

---

## 21. Security Requirements

| Domain | Requirement |
|---|---|
| Authentication | Laravel Sanctum session tokens; mandatory strong password policy; optional 2FA (TOTP) for Owner/GM/Revenue Manager roles |
| Authorization | Role-based access control enforced server-side on every endpoint (not just UI-hidden); tested via automated policy tests |
| Data encryption | TLS 1.2+ in transit; AES-256 at rest for PII fields (ID/passport numbers, payment references) |
| PII handling | Guest ID documents and payment details encrypted at the field level; access logged separately from general audit log |
| PCI compliance | No raw card data stored in HotelHub DB; payments processed via PCI-DSS-compliant gateway (tokenization only) |
| Session management | Idle session timeout after 30 minutes of inactivity for front-desk/shared devices (configurable per property) |
| Audit logging | Immutable audit trail for reservation, rate, and guest-data changes; retained minimum 2 years |
| Multi-tenancy isolation | Property-scoped row-level security in PostgreSQL to prevent cross-property data leakage in multi-property accounts |
| API security | Rate limiting, request signing for webhook integrations, CORS restricted to known frontend origins |
| Vulnerability management | Quarterly penetration testing; dependency scanning (Dependabot/Snyk) in CI pipeline |
| Backup & recovery | Automated daily PostgreSQL backups, 30-day retention, documented RTO <4h / RPO <1h |
| Compliance | GDPR-aligned data subject rights (export/delete guest data) for EU guests; local hospitality data regulations per market |

---

## 22. Risk Analysis

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| Staff resistance to switching from familiar legacy PMS | Medium | High | Phased rollout, mirror critical legacy workflows initially, in-app guided onboarding, dedicated migration support |
| AI pricing recommendations are wrong/mistrusted early on | Medium | High | Start with "suggestion only" mode (no auto-apply), show rationale, track and display suggestion accuracy over time to build trust |
| Real-time sync failures cause double-booking or stale room status | Low–Medium | High | WebSocket fallback to polling, optimistic UI with conflict resolution, server-side booking lock on save |
| Data migration errors from legacy PMS during onboarding | Medium | High | Structured import tooling with validation/preview step before committing; dedicated onboarding specialist for first 5–10 customers |
| Multi-property data leakage (wrong property sees another's data) | Low | Critical | Row-level security enforced at DB layer, not just application layer; automated cross-tenant test suite in CI |
| Scope creep beyond MVP (10 modules is large) | High | Medium | Strict MVP module sequencing (Section 23), feature flags per module for phased release |
| Dependence on third-party OTA/review platform APIs for V2 integrations | Medium | Medium | Design integrations as pluggable adapters; manual-entry fallback always available |
| Small hotel teams lack dedicated "Revenue Manager" role to use AI pricing fully | Medium | Medium | Ensure GM role has full access to Revenue Management; simplify recommendation UI for non-specialist users |
| Over-reliance on AI reduces staff situational awareness | Low | Medium | AI always shows reasoning and source data; never fully hides underlying raw metrics |

---

## 23. Future Roadmap

### Phase 1 — MVP (Months 1–4)
Dashboard Overview, Reservation Management, Guest Management (core), Room Management, Housekeeping, basic Revenue Management (ADR/RevPAR/Occupancy), manual review entry. Single-property support.

### Phase 2 — Intelligence Layer (Months 5–7)
Full AI Center (forecasts, dynamic pricing recommendations, daily reports, smart alerts), Sentiment Analysis, Marketing Dashboard, Analytics module (demographics, country map, cancellations, seasonality).

### Phase 3 — Integrations & Scale (Months 8–11)
Channel manager integration (rate/inventory push), OTA review API integrations (Google, Booking.com, TripAdvisor), payment gateway integrations, multi-property/portfolio view for Owners managing several hotels.

### Phase 4 — Expansion (Months 12+)
Native mobile apps (iOS/Android) for Housekeeping and Front Office, guest-facing features (digital check-in, upsell offers), advanced revenue AI (competitor rate scraping, event-based demand signals), white-label/multi-brand support for hotel groups.

---

## 24. Success Metrics

| Metric | Baseline (Pre-HotelHub) | 6-Month Target | 12-Month Target |
|---|---|---|---|
| Average occupancy rate | Property-dependent | +4–6 pts | +6–10 pts |
| RevPAR | Property-dependent | +6% | +12% |
| Time spent on manual reporting | ~5 hrs/week (GM) | -25% | -40% |
| Housekeeping turnaround (checkout → ready) | Property-dependent | -15% | -25% |
| Average review rating | Property-dependent | +0.15 | +0.3 |
| AI recommendation acceptance rate | N/A | 35% | >50% |
| Customer NPS | N/A | 30 | >45 |
| Logo retention (annual) | N/A | — | 90%+ |

---

## 25. Appendix

### 25.1 Glossary

| Term | Definition |
|---|---|
| ADR | Average Daily Rate — total room revenue ÷ rooms sold |
| RevPAR | Revenue per Available Room — total room revenue ÷ total available rooms |
| OTA | Online Travel Agency (e.g., Booking.com, Agoda, Expedia) |
| Occupancy Rate | Rooms sold ÷ total available rooms, expressed as % |
| Compression | Period of unusually high area-wide demand affecting pricing |
| SLA | Service Level Agreement (used here for housekeeping turnaround targets) |
| Booking Pace | Rate at which future dates are being booked relative to historical norms |

### 25.2 Open Questions for Stakeholder Validation
- Should Front Office staff have permission to override AI-suggested rates directly, or is that restricted to Revenue Manager/GM only?
- What is the minimum viable set of OTA integrations for Phase 3 (Booking.com + Google only, or broader)?
- Should multi-property portfolio view be pulled into Phase 1 for hotel-group pilot customers, or held for Phase 3 as planned?
- What housekeeping inspection checklist fields are legally/operationally required per target market (varies by country)?
- Confirm whether payment processing is in scope for V1 or whether HotelHub only reflects payment status from an external PMS/POS in Phase 1.

### 25.3 Reference Design Direction
Airbnb-inspired, not Airbnb-copied: soft neutral backgrounds (#FAFAFA), confident large numerals for KPIs, generous 24px+ whitespace between cards, 16–24px rounded corners throughout, restrained accent color usage (#FF5A5F / #00A699) reserved for meaning rather than branding flourish, and micro-interactions (Framer Motion) that make the interface feel calm and responsive rather than corporate and static.

### 25.4 Technology Stack Summary

| Layer | Technology |
|---|---|
| Frontend framework | Next.js, React, TypeScript |
| Styling | Tailwind CSS, shadcn/ui |
| Animation | Framer Motion |
| Charts | Recharts |
| Tables | TanStack Table |
| Backend framework | Laravel |
| Database | PostgreSQL |
| Caching / Queues | Redis |
| API | REST (versioned `/api/v1/`), WebSocket for real-time channels |
| Auth | Laravel Sanctum |

---

*End of Document — HotelHub PRD v1.0. This document is intended as a working reference for design and engineering handoff; sections 15 (API Requirements) and 16 (Database Entities) should be treated as a starting contract to be refined jointly with the engineering team during technical design review.*
