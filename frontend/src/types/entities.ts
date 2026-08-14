// HotelHub Data Entities Definition (from PRD §16)
import {
  UserRole,
  BookingStatus,
  BookingSource,
  RoomStatus,
  HousekeepingPriority,
  HousekeepingTaskStatus,
  PaymentMethod,
  PaymentStatus,
  SuggestionStatus,
  LoyaltyTier,
  ReviewPlatform,
  ReviewSentiment,
  AlertSeverity,
  AlertCategory,
} from './enums';

export interface Property {
  id: string;
  name: string;
  address: string;
  city: string;
  country: string;
  timezone: string;
  currency: string;
  total_rooms: number;
  created_at?: string;
  updated_at?: string;
}

export interface User {
  id: string;
  property_id?: string | null;
  name: string;
  email: string;
  role: UserRole;
  last_login_at?: string | null;
  created_at?: string;
  updated_at?: string;
}

export interface RoomType {
  id: string;
  property_id: string;
  name: string;
  capacity: number;
  base_rate: number;
  amenities: string[];
  photos?: string[];
  created_at?: string;
  updated_at?: string;
}

export interface Room {
  id: string;
  room_type_id: string;
  room_number: string;
  status: RoomStatus;
  floor: number;
  created_at?: string;
  updated_at?: string;
}

export interface Guest {
  id: string;
  name: string;
  email: string;
  phone: string;
  nationality: string;
  id_document_number?: string;
  vip: boolean;
  tags: string[];
  notes?: string;
  created_at?: string;
  updated_at?: string;
}

export interface Reservation {
  id: string;
  guest_id: string;
  room_id: string;
  check_in_date: string;
  check_out_date: string;
  status: BookingStatus;
  source: BookingSource;
  rate_applied: number;
  total_amount: number;
  guest?: Guest;
  room?: Room;
  created_at?: string;
  updated_at?: string;
}

export interface Payment {
  id: string;
  reservation_id: string;
  amount: number;
  method: PaymentMethod;
  status: PaymentStatus;
  paid_at?: string | null;
  created_at?: string;
  updated_at?: string;
}

export interface HousekeepingTask {
  id: string;
  room_id: string;
  assigned_to?: string | null;
  priority: HousekeepingPriority;
  status: HousekeepingTaskStatus;
  inspected_by?: string | null;
  inspected_at?: string | null;
  room?: Room;
  assignee?: User;
  inspector?: User;
  created_at?: string;
  updated_at?: string;
}

export interface RateEntry {
  id: string;
  room_type_id: string;
  date: string;
  rate: number;
  ai_suggested_rate?: number | null;
  suggestion_status?: SuggestionStatus;
  created_at?: string;
  updated_at?: string;
}

export interface LoyaltyAccount {
  id: string;
  guest_id: string;
  points_balance: number;
  tier: LoyaltyTier;
  created_at?: string;
  updated_at?: string;
}

export interface Review {
  id: string;
  property_id: string;
  platform: ReviewPlatform;
  rating: number;
  text: string;
  sentiment: ReviewSentiment;
  themes: string[];
  response_text?: string | null;
  responded_at?: string | null;
  created_at?: string;
  updated_at?: string;
}

export interface Campaign {
  id: string;
  property_id: string;
  name: string;
  spend: number;
  start_date: string;
  end_date: string;
  coupon_code?: string | null;
  created_at?: string;
  updated_at?: string;
}

export interface CouponCode {
  id: string;
  campaign_id: string;
  code: string;
  discount_percentage?: number;
  discount_flat?: number;
  usage_count: number;
}

export interface AIReport {
  id: string;
  property_id: string;
  type: 'daily' | 'weekly';
  content: Record<string, unknown>;
  generated_at: string;
}

export interface Alert {
  id: string;
  property_id: string;
  severity: AlertSeverity;
  category: AlertCategory;
  message: string;
  entity_type?: string;
  entity_id?: string;
  dismissed_at?: string | null;
  created_at?: string;
}
