'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

// --- Auth & Session ---
export interface UserSession {
  name: string;
  email: string;
  role: string;
  avatar: string;
  property: string;
}

export interface PropertyItem {
  id: string;
  name: string;
  rooms: number;
  location: string;
}

// --- Entities ---
export interface Reservation {
  id: string;
  ref: string;
  guestName: string;
  avatar: string;
  vip?: boolean;
  email: string;
  phone: string;
  room: string;
  category: string;
  checkIn: string;
  checkOut: string;
  nights: number;
  totalPrice: string;
  status: 'Checked In' | 'Confirmed' | 'Checked Out' | 'Cancelled';
  channel: string;
  paymentStatus: 'Paid' | 'Pending' | 'Partial';
}

export interface Guest {
  id: string;
  name: string;
  avatar: string;
  tier: string;
  vip: boolean;
  email: string;
  phone: string;
  stays: number;
  spend: string;
  pref: string;
  dob: string;
  nationality: string;
  car: string;
}

export interface RoomItem {
  number: number;
  name: string;
  category: 'Ocean Suite' | 'Deluxe' | 'Standard' | 'Suite' | 'Garden Villa' | 'Executive';
  floor: number;
  status: 'Occupied' | 'Ready' | 'Dirty' | 'Maintenance';
  guestName?: string;
  vip?: boolean;
  etaNote?: string;
}

export interface HousekeepingTask {
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

export interface MarketingCampaign {
  id: string;
  title: string;
  name?: string;
  status: 'Active' | 'Scheduled' | 'Ended';
  type: string;
  channel?: string;
  discount?: string;
  spent: string;
  spend?: string;
  revenue: string;
  roi: string;
  conversions: number;
  redemptions?: number;
  code?: string;
  startDate?: string;
  endDate?: string;
  targetAudience?: string;
}

export interface CouponCode {
  id: string;
  code: string;
  discount: string;
  uses: number;
  maxUses: number;
  status: 'Active' | 'Expired';
}

export interface ReviewItem {
  id: string;
  author: string;
  avatar: string;
  rating: number;
  sentiment: 'POSITIVE' | 'NEUTRAL' | 'CRITICAL';
  channel: 'Google' | 'Booking.com' | 'TripAdvisor' | 'Expedia';
  platform?: string;
  headline?: string;
  text?: string;
  date: string;
  comment: string;
  tags: string[];
  reply?: string;
  needsReply?: boolean;
}

export interface NotificationItem {
  id: string;
  title: string;
  message: string;
  time: string;
  read: boolean;
  type: 'info' | 'warning' | 'success';
}

// --- Initial Seed Data ---
const DEFAULT_SESSION: UserSession = {
  name: 'Aris Setiawan',
  email: 'aris@ariahotel.com',
  role: 'General Manager',
  avatar: 'AS',
  property: 'Aria Hotel Bali',
};

const DEFAULT_PROPERTIES: PropertyItem[] = [
  { id: 'prop-1', name: 'Aria Hotel Bali', rooms: 120, location: 'Seminyak' },
  { id: 'prop-2', name: 'Ubud Luxury Villas', rooms: 45, location: 'Ubud' },
  { id: 'prop-3', name: 'Sanur Beach Resort', rooms: 80, location: 'Sanur' },
];

const INITIAL_RESERVATIONS: Reservation[] = [
  {
    id: 'res-101',
    ref: '#RES-9042',
    guestName: 'Alexander Wright',
    avatar: 'AW',
    vip: true,
    email: 'alexander.wright@gmail.com',
    phone: '+1 (555) 234-5678',
    room: 'Suite 402',
    category: 'Grand Ocean Suite',
    checkIn: 'Today, 14:00',
    checkOut: 'Aug 17, 11:00',
    nights: 3,
    totalPrice: 'Rp 8,450,000',
    status: 'Confirmed',
    channel: 'Direct Website',
    paymentStatus: 'Paid',
  },
  {
    id: 'res-102',
    ref: '#RES-9043',
    guestName: 'Siti Rahma',
    avatar: 'SR',
    vip: false,
    email: 'siti.rahma@yahoo.co.id',
    phone: '+62 812 3456 7890',
    room: 'Room 204',
    category: 'Deluxe King View',
    checkIn: 'Today, 14:30',
    checkOut: 'Aug 15, 12:00',
    nights: 2,
    totalPrice: 'Rp 3,200,000',
    status: 'Confirmed',
    channel: 'Booking.com',
    paymentStatus: 'Paid',
  },
  {
    id: 'res-103',
    ref: '#RES-9044',
    guestName: 'Michael Chen',
    avatar: 'MC',
    vip: true,
    email: 'm.chen@techcorp.com',
    phone: '+65 9123 4567',
    room: 'Villa 101',
    category: 'Beachfront Pool Villa',
    checkIn: 'Aug 10, 15:00',
    checkOut: 'Today, 12:00',
    nights: 4,
    totalPrice: 'Rp 14,800,000',
    status: 'Checked In',
    channel: 'Agoda',
    paymentStatus: 'Paid',
  },
  {
    id: 'res-104',
    ref: '#RES-9045',
    guestName: 'Elena Rostova',
    avatar: 'ER',
    vip: false,
    email: 'elena.rostova@yandex.com',
    phone: '+7 916 123 4567',
    room: 'Room 312',
    category: 'Standard Twin',
    checkIn: 'Aug 11, 14:00',
    checkOut: 'Aug 16, 11:00',
    nights: 5,
    totalPrice: 'Rp 5,500,000',
    status: 'Checked In',
    channel: 'Expedia',
    paymentStatus: 'Paid',
  },
];

const INITIAL_GUESTS: Guest[] = [
  {
    id: 'g-1',
    name: 'Alexander Wright',
    avatar: 'AW',
    tier: 'Platinum VIP',
    vip: true,
    email: 'alex.wright@gmail.com',
    phone: '+1 555-0192',
    stays: 12,
    spend: 'Rp 42.5M',
    pref: 'High floor, feather pillows, sparkling water on arrival',
    dob: '14 May 1984',
    nationality: 'United States',
    car: 'DK 1088 AB',
  },
  {
    id: 'g-2',
    name: 'Michael Chen',
    avatar: 'MC',
    tier: 'Gold VIP',
    vip: true,
    email: 'mchen@tech.io',
    phone: '+65 9123-4567',
    stays: 8,
    spend: 'Rp 28.0M',
    pref: 'Late check-out preferred, extra bath towels',
    dob: '22 Aug 1990',
    nationality: 'Singapore',
    car: 'DK 4412 XY',
  },
];

const INITIAL_ROOMS: RoomItem[] = [
  { number: 101, name: 'Deluxe Ocean 101', category: 'Deluxe', floor: 1, status: 'Dirty', etaNote: 'Housekeeping requested' },
  { number: 102, name: 'Ocean Suite 102', category: 'Ocean Suite', floor: 1, status: 'Occupied', guestName: 'Alexander Wright', vip: true, etaNote: 'Departure tomorrow 11:00' },
  { number: 103, name: 'Standard 103', category: 'Standard', floor: 1, status: 'Occupied', guestName: 'Siti Rahma', etaNote: 'Departure Aug 15' },
  { number: 104, name: 'Deluxe 104', category: 'Deluxe', floor: 1, status: 'Occupied', guestName: 'Michael Chen', vip: true, etaNote: 'Departure Aug 17' },
  { number: 105, name: 'Garden Villa 105', category: 'Garden Villa', floor: 1, status: 'Occupied', guestName: 'Elena Rostova', etaNote: 'Departure Aug 15' },
  { number: 106, name: 'Standard 106', category: 'Standard', floor: 1, status: 'Ready', etaNote: 'Ready to sell' },
  { number: 107, name: 'Executive 107', category: 'Executive', floor: 1, status: 'Occupied', guestName: 'Budi Santoso', etaNote: 'Departure Aug 13' },
  { number: 108, name: 'Standard 108', category: 'Standard', floor: 1, status: 'Dirty', etaNote: 'Cleaning in progress · ETA 15:20' },
];

const INITIAL_HOUSEKEEPING: HousekeepingTask[] = [
  { id: 'HK-101', room: 'Suite 402', category: 'Grand Suite', vip: true, priority: 'High', status: 'Pending', assignedTo: 'Kadek', etaNote: 'Not started · assigned to Kadek', arrivalInfo: 'VIP arrival 14:00' },
  { id: 'HK-102', room: 'Ocean 511', category: 'Ocean View Suite', vip: true, priority: 'High', status: 'In Progress', assignedTo: 'Wayan', startedTime: 'started 13:45', etaNote: 'In progress · started 13:45', arrivalInfo: 'VIP arrival 16:00' },
  { id: 'HK-103', room: 'Deluxe 218', category: 'Deluxe Ocean View', vip: false, priority: 'Normal', status: 'In Progress', assignedTo: 'Maria', startedTime: 'started 14:05', etaNote: 'In progress · started 14:05', arrivalInfo: 'arrival 15:30' },
  { id: 'HK-104', room: 'Standard 108', category: 'Standard Twin', vip: false, priority: 'Normal', status: 'Pending', assignedTo: 'Unassigned', etaNote: 'Queued · 4th in list', arrivalInfo: 'arrival 18:20' },
];

const INITIAL_CAMPAIGNS: MarketingCampaign[] = [
  { 
    id: 'CMP-001', 
    title: 'Summer Escape 2026', 
    name: 'Summer Escape 2026',
    status: 'Active', 
    type: 'Email & Meta Ads', 
    channel: 'Meta & Email Blast',
    discount: '20% OFF Room Rate',
    spent: 'Rp 12.5M', 
    spend: 'Rp 12.5M',
    revenue: 'Rp 88.4M', 
    roi: '+607%', 
    conversions: 42,
    redemptions: 42,
    code: 'SUMMER20',
    startDate: 'Jul 01, 2026',
    endDate: 'Aug 31, 2026',
    targetAudience: 'Leisure Guests & VIP Subscribers'
  },
  { 
    id: 'CMP-002', 
    title: 'Weekend Wellness Package', 
    name: 'Weekend Wellness Package',
    status: 'Active', 
    type: 'Google Search Ads', 
    channel: 'Google Search Ads',
    discount: 'Free Spa & Breakfast',
    spent: 'Rp 8.0M', 
    spend: 'Rp 8.0M',
    revenue: 'Rp 45.2M', 
    roi: '+465%', 
    conversions: 24,
    redemptions: 24,
    code: 'WELLNESS2026',
    startDate: 'Aug 01, 2026',
    endDate: 'Sep 15, 2026',
    targetAudience: 'Direct Search Visitors & Spa Enthusiasts'
  },
];

const INITIAL_COUPONS: CouponCode[] = [
  { id: 'CPN-01', code: 'SUMMER20', discount: '20% OFF', uses: 84, maxUses: 100, status: 'Active' },
  { id: 'CPN-02', code: 'VIPBALI', discount: 'Free Spa & Breakfast', uses: 19, maxUses: 50, status: 'Active' },
];

const INITIAL_REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Alexander Wright',
    avatar: 'AW',
    rating: 5,
    sentiment: 'POSITIVE',
    channel: 'Google',
    platform: 'Google Reviews',
    date: '2 hours ago',
    headline: 'Exceptional stay & breathtaking ocean views!',
    comment: 'Exceptional stay! The ocean suite views were breathtaking and the AI room service concierge was unbelievably fast.',
    text: 'Exceptional stay! The ocean suite views were breathtaking and the AI room service concierge was unbelievably fast.',
    tags: ['Ocean View', 'AI Concierge', 'Service'],
  },
  {
    id: 'rev-2',
    author: 'Michael Chen',
    avatar: 'MC',
    rating: 4,
    sentiment: 'POSITIVE',
    channel: 'Booking.com',
    platform: 'Booking.com',
    date: 'Yesterday',
    headline: 'Great property and smooth check-in process',
    comment: 'Great property and smooth check-in. Breakfast selection at the restaurant was world class.',
    text: 'Great property and smooth check-in. Breakfast selection at the restaurant was world class.',
    tags: ['Breakfast', 'Check-in'],
    reply: 'Thank you Michael! We are thrilled you enjoyed your stay and breakfast selection.',
  },
];

const INITIAL_NOTIFICATIONS: NotificationItem[] = [
  { id: 'notif-1', title: 'VIP Guest Arrival', message: 'Alexander Wright checked into Ocean Suite 102.', time: '10 mins ago', read: false, type: 'info' },
  { id: 'notif-[#2]', title: 'Rate Recommendation Accepted', message: 'AI Rate Optimizer adjusted weekend rate to Rp 1.25M.', time: '1 hour ago', read: false, type: 'success' },
];

// --- Context State Structure ---
export interface UserAccount {
  name: string;
  email: string;
  role: string;
  property: string;
  password?: string;
  avatar?: string;
  provider?: 'email' | 'google' | 'apple';
}

interface HotelContextType {
  session: UserSession;
  setSession: React.Dispatch<React.SetStateAction<UserSession>>;
  activeProperty: PropertyItem;
  properties: PropertyItem[];
  setActiveProperty: (prop: PropertyItem) => void;
  
  reservations: Reservation[];
  addReservation: (res: Omit<Reservation, 'id' | 'ref'>) => void;
  updateReservationStatus: (id: string, status: Reservation['status']) => void;
  
  guests: Guest[];
  
  rooms: RoomItem[];
  updateRoomStatus: (number: number, status: RoomItem['status']) => void;
  
  housekeeping: HousekeepingTask[];
  assignHousekeeper: (id: string, staffName: string) => void;
  updateHousekeepingStatus: (id: string, status: HousekeepingTask['status']) => void;
  
  campaigns: MarketingCampaign[];
  addCampaign: (camp: Omit<MarketingCampaign, 'id' | 'spent' | 'revenue' | 'roi' | 'conversions'>) => void;
  coupons: CouponCode[];
  addCoupon: (coup: Omit<CouponCode, 'id' | 'uses' | 'status'>) => void;
  
  reviews: ReviewItem[];
  replyToReview: (id: string, replyText: string) => void;
  
  notifications: NotificationItem[];
  markNotificationRead: (id: string) => void;
  markAllNotificationsRead: () => void;
  
  logout: () => void;
  login: (email: string, password?: string, customUser?: Partial<UserSession>) => void;
  signup: (userData: { name: string; email: string; role?: string; property?: string; password?: string }) => void;
  loginWithOAuth: (provider: 'google' | 'apple', accountDetails?: { name?: string; email?: string }) => void;
  registeredUsers: UserAccount[];
}

const HotelContext = createContext<HotelContextType | undefined>(undefined);

export function HotelProvider({ children }: { children: React.ReactNode }) {
  // 1. Session & Property
  const [session, setSession] = useState<UserSession>(DEFAULT_SESSION);
  const [activeProperty, setActiveProperty] = useState<PropertyItem>(DEFAULT_PROPERTIES[0]);

  // 2. Data Lists
  const [reservations, setReservations] = useState<Reservation[]>(INITIAL_RESERVATIONS);
  const [guests, setGuests] = useState<Guest[]>(INITIAL_GUESTS);
  const [rooms, setRooms] = useState<RoomItem[]>(INITIAL_ROOMS);
  const [housekeeping, setHousekeeping] = useState<HousekeepingTask[]>(INITIAL_HOUSEKEEPING);
  const [campaigns, setCampaigns] = useState<MarketingCampaign[]>(INITIAL_CAMPAIGNS);
  const [coupons, setCoupons] = useState<CouponCode[]>(INITIAL_COUPONS);
  const [reviews, setReviews] = useState<ReviewItem[]>(INITIAL_REVIEWS);
  const [notifications, setNotifications] = useState<NotificationItem[]>(INITIAL_NOTIFICATIONS);
  const [registeredUsers, setRegisteredUsers] = useState<UserAccount[]>([]);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const savedRes = localStorage.getItem('hotelhub_reservations');
      if (savedRes) setReservations(JSON.parse(savedRes));

      const savedRooms = localStorage.getItem('hotelhub_rooms');
      if (savedRooms) setRooms(JSON.parse(savedRooms));

      const savedHK = localStorage.getItem('hotelhub_housekeeping');
      if (savedHK) setHousekeeping(JSON.parse(savedHK));

      const savedReviews = localStorage.getItem('hotelhub_reviews');
      if (savedReviews) setReviews(JSON.parse(savedReviews));

      const savedCampaigns = localStorage.getItem('hotelhub_campaigns');
      if (savedCampaigns) setCampaigns(JSON.parse(savedCampaigns));

      const savedUsers = localStorage.getItem('hotelhub_users');
      if (savedUsers) setRegisteredUsers(JSON.parse(savedUsers));

      const savedSession = localStorage.getItem('hotelhub_session');
      if (savedSession) setSession(JSON.parse(savedSession));
    } catch (e) {
      console.error('LocalStorage load error:', e);
    }
  }, []);

  // Save changes to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('hotelhub_reservations', JSON.stringify(reservations));
      localStorage.setItem('hotelhub_rooms', JSON.stringify(rooms));
      localStorage.setItem('hotelhub_housekeeping', JSON.stringify(housekeeping));
      localStorage.setItem('hotelhub_reviews', JSON.stringify(reviews));
      localStorage.setItem('hotelhub_campaigns', JSON.stringify(campaigns));
      localStorage.setItem('hotelhub_users', JSON.stringify(registeredUsers));
      localStorage.setItem('hotelhub_session', JSON.stringify(session));
    } catch (e) {
      console.error('LocalStorage save error:', e);
    }
  }, [reservations, rooms, housekeeping, reviews, campaigns, registeredUsers, session]);

  // Action Helpers
  const addReservation = (res: Omit<Reservation, 'id' | 'ref'>) => {
    const newRes: Reservation = {
      ...res,
      id: `res-${Date.now()}`,
      ref: `#RES-${Math.floor(1000 + Math.random() * 9000)}`,
    };
    setReservations((prev) => [newRes, ...prev]);

    // Add notification
    setNotifications((prev) => [
      {
        id: `notif-${Date.now()}`,
        title: 'New Reservation Created',
        message: `${res.guestName} booked ${res.category} for ${res.nights} night(s).`,
        time: 'Just now',
        read: false,
        type: 'info',
      },
      ...prev,
    ]);
  };

  const updateReservationStatus = (id: string, status: Reservation['status']) => {
    setReservations((prev) =>
      prev.map((r) => (r.id === id ? { ...r, status } : r))
    );
  };

  const updateRoomStatus = (number: number, status: RoomItem['status']) => {
    setRooms((prev) =>
      prev.map((r) => (r.number === number ? { ...r, status } : r))
    );
  };

  const assignHousekeeper = (id: string, staffName: string) => {
    setHousekeeping((prev) =>
      prev.map((hk) =>
        hk.id === id ? { ...hk, assignedTo: staffName, etaNote: `Assigned to ${staffName}` } : hk
      )
    );
  };

  const updateHousekeepingStatus = (id: string, status: HousekeepingTask['status']) => {
    setHousekeeping((prev) =>
      prev.map((hk) => (hk.id === id ? { ...hk, status } : hk))
    );
  };

  const addCampaign = (camp: Omit<MarketingCampaign, 'id' | 'spent' | 'revenue' | 'roi' | 'conversions'>) => {
    const newCamp: MarketingCampaign = {
      ...camp,
      id: `CMP-${Math.floor(100 + Math.random() * 900)}`,
      spent: 'Rp 0M',
      revenue: 'Rp 0M',
      roi: '0%',
      conversions: 0,
    };
    setCampaigns((prev) => [newCamp, ...prev]);
  };

  const addCoupon = (coup: Omit<CouponCode, 'id' | 'uses' | 'status'>) => {
    const newCoup: CouponCode = {
      ...coup,
      id: `CPN-${Math.floor(10 + Math.random() * 90)}`,
      uses: 0,
      status: 'Active',
    };
    setCoupons((prev) => [newCoup, ...prev]);
  };

  const replyToReview = (id: string, replyText: string) => {
    setReviews((prev) =>
      prev.map((r) =>
        r.id === id ? { ...r, reply: replyText, needsReply: false } : r
      )
    );
  };

  const markNotificationRead = (id: string) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const markAllNotificationsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  const logout = () => {
    const emptySession = {
      name: '',
      email: '',
      role: '',
      avatar: '',
      property: '',
    };
    setSession(emptySession);
    try {
      localStorage.removeItem('hotelhub_session');
    } catch (e) {}
    window.location.href = '/login';
  };

  const login = (email: string, password?: string, customUser?: Partial<UserSession>) => {
    const foundUser = registeredUsers.find((u) => u.email.toLowerCase() === email.toLowerCase());
    
    let newSession: UserSession;
    if (customUser) {
      newSession = {
        name: customUser.name || 'Aris Setiawan',
        email: customUser.email || email,
        role: customUser.role || 'General Manager',
        avatar: customUser.avatar || 'AS',
        property: customUser.property || activeProperty.name,
      };
    } else if (foundUser) {
      newSession = {
        name: foundUser.name,
        email: foundUser.email,
        role: foundUser.role || 'General Manager',
        avatar: foundUser.avatar || foundUser.name.split(' ').map((n) => n[0]).join('').toUpperCase().slice(0, 2),
        property: foundUser.property || activeProperty.name,
      };
    } else if (email.toLowerCase().includes('sarah')) {
      newSession = {
        name: 'Sarah Jenkins',
        email: 'sarah@hotelhub.com',
        role: 'Operations Lead',
        avatar: 'SJ',
        property: 'Aria Hotel Bali',
      };
    } else if (email.toLowerCase().includes('budi')) {
      newSession = {
        name: 'Budi Santoso',
        email: 'budi@hotelhub.com',
        role: 'Front Desk Manager',
        avatar: 'BS',
        property: 'Ubud Luxury Villas',
      };
    } else {
      const cleanName = email.split('@')[0] || 'User';
      const capitalized = cleanName.charAt(0).toUpperCase() + cleanName.slice(1);
      newSession = {
        name: capitalized.includes('.') ? capitalized.replace('.', ' ') : capitalized,
        email: email,
        role: 'General Manager',
        avatar: email.substring(0, 2).toUpperCase(),
        property: activeProperty.name,
      };
    }

    setSession(newSession);
    try {
      localStorage.setItem('hotelhub_session', JSON.stringify(newSession));
    } catch (e) {}
    window.location.href = '/dashboard';
  };

  const signup = (userData: { name: string; email: string; role?: string; property?: string; password?: string }) => {
    const newUser: UserAccount = {
      name: userData.name,
      email: userData.email,
      role: userData.role || 'General Manager',
      property: userData.property || activeProperty.name,
      password: userData.password,
      avatar: userData.name.split(' ').map((n) => n[0]).join('').toUpperCase().slice(0, 2),
      provider: 'email',
    };

    setRegisteredUsers((prev) => [newUser, ...prev]);
    
    const newSession: UserSession = {
      name: userData.name,
      email: userData.email,
      role: userData.role || 'General Manager',
      avatar: newUser.avatar || 'HM',
      property: userData.property || activeProperty.name,
    };

    setSession(newSession);
    try {
      localStorage.setItem('hotelhub_session', JSON.stringify(newSession));
    } catch (e) {}

    window.location.href = '/onboarding';
  };

  const loginWithOAuth = (provider: 'google' | 'apple', accountDetails?: { name?: string; email?: string }) => {
    let oauthSession: UserSession;
    if (provider === 'google') {
      oauthSession = {
        name: accountDetails?.name || 'Aris Setiawan',
        email: accountDetails?.email || 'aris.setiawan@gmail.com',
        role: 'General Manager',
        avatar: 'G',
        property: activeProperty.name,
      };
    } else {
      oauthSession = {
        name: accountDetails?.name || 'Aris Setiawan',
        email: accountDetails?.email || 'aris.setiawan@icloud.com',
        role: 'General Manager',
        avatar: '',
        property: activeProperty.name,
      };
    }

    setSession(oauthSession);
    try {
      localStorage.setItem('hotelhub_session', JSON.stringify(oauthSession));
    } catch (e) {}
    window.location.href = '/dashboard';
  };

  return (
    <HotelContext.Provider
      value={{
        session,
        setSession,
        activeProperty,
        properties: DEFAULT_PROPERTIES,
        setActiveProperty,
        reservations,
        addReservation,
        updateReservationStatus,
        guests,
        rooms,
        updateRoomStatus,
        housekeeping,
        assignHousekeeper,
        updateHousekeepingStatus,
        campaigns,
        addCampaign,
        coupons,
        addCoupon,
        reviews,
        replyToReview,
        notifications,
        markNotificationRead,
        markAllNotificationsRead,
        logout,
        login,
        signup,
        loginWithOAuth,
        registeredUsers,
      }}
    >
      {children}
    </HotelContext.Provider>
  );
}

export function useHotelStore() {
  const context = useContext(HotelContext);
  if (!context) {
    throw new Error('useHotelStore must be used within a HotelProvider');
  }
  return context;
}
