// HotelHub Enums Definition (from PRD §6.2 & §16)

export enum UserRole {
  OWNER = 'owner',
  GM = 'gm',
  FRONT_OFFICE = 'front_office',
  REVENUE_MANAGER = 'revenue_manager',
  HOUSEKEEPING_SUPERVISOR = 'housekeeping_supervisor',
  MARKETING = 'marketing',
}

export enum BookingStatus {
  CONFIRMED = 'confirmed',
  PENDING = 'pending',
  CHECKED_IN = 'checked_in',
  CHECKED_OUT = 'checked_out',
  CANCELLED = 'cancelled',
  NO_SHOW = 'no_show',
}

export enum BookingSource {
  DIRECT = 'direct',
  OTA_BOOKING = 'ota_booking',
  OTA_AGODA = 'ota_agoda',
  CORPORATE = 'corporate',
  WALK_IN = 'walk_in',
  TRAVEL_AGENT = 'travel_agent',
}

export enum RoomStatus {
  AVAILABLE = 'available',
  OCCUPIED = 'occupied',
  DIRTY = 'dirty',
  CLEANING = 'cleaning',
  INSPECTED = 'inspected',
  MAINTENANCE = 'maintenance',
}

export enum HousekeepingPriority {
  URGENT = 'urgent',
  HIGH = 'high',
  NORMAL = 'normal',
}

export enum HousekeepingTaskStatus {
  NOT_STARTED = 'not_started',
  IN_PROGRESS = 'in_progress',
  AWAITING_INSPECTION = 'awaiting_inspection',
  COMPLETE = 'complete',
}

export enum PaymentMethod {
  CARD = 'card',
  CASH = 'cash',
  BANK_TRANSFER = 'bank_transfer',
  OTA_PREPAID = 'ota_prepaid',
}

export enum PaymentStatus {
  PENDING = 'pending',
  PAID = 'paid',
  REFUNDED = 'refunded',
  PARTIAL = 'partial',
}

export enum SuggestionStatus {
  PENDING = 'pending',
  ACCEPTED = 'accepted',
  MODIFIED = 'modified',
  REJECTED = 'rejected',
}

export enum LoyaltyTier {
  SILVER = 'silver',
  GOLD = 'gold',
  PLATINUM = 'platinum',
}

export enum ReviewPlatform {
  GOOGLE = 'google',
  BOOKING_COM = 'booking_com',
  TRIPADVISOR = 'tripadvisor',
  DIRECT = 'direct',
}

export enum ReviewSentiment {
  POSITIVE = 'positive',
  NEUTRAL = 'neutral',
  NEGATIVE = 'negative',
}

export enum AlertSeverity {
  INFO = 'info',
  WARNING = 'warning',
  CRITICAL = 'critical',
}

export enum AlertCategory {
  OVERBOOKING = 'overbooking',
  OCCUPANCY_DROP = 'occupancy_drop',
  HOUSEKEEPING_SLA = 'housekeeping_sla',
  REVIEW_SENTIMENT = 'review_sentiment',
}
