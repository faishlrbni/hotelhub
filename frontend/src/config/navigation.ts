// HotelHub Navigation Config & Role Access Matrix (from PRD §6.1 & §6.2)
import { UserRole } from '@/types/enums';

export interface NavItem {
  id: string;
  label: string;
  href: string;
  icon?: string;
  badgeCount?: number;
  rolesAllowed: UserRole[];
  children?: NavItem[];
}

export const SIDEBAR_NAVIGATION: NavItem[] = [
  {
    id: 'dashboard',
    label: 'Dashboard Overview',
    href: '/dashboard',
    icon: 'LayoutDashboard',
    rolesAllowed: [
      UserRole.OWNER,
      UserRole.GM,
      UserRole.FRONT_OFFICE,
      UserRole.REVENUE_MANAGER,
      UserRole.HOUSEKEEPING_SUPERVISOR,
      UserRole.MARKETING,
    ],
  },
  {
    id: 'reservations',
    label: 'Reservations',
    href: '/reservations',
    icon: 'CalendarDays',
    rolesAllowed: [
      UserRole.OWNER,
      UserRole.GM,
      UserRole.FRONT_OFFICE,
      UserRole.REVENUE_MANAGER,
      UserRole.MARKETING,
    ],
    children: [
      {
        id: 'reservations-list',
        label: 'Reservation List',
        href: '/reservations',
        rolesAllowed: [
          UserRole.OWNER,
          UserRole.GM,
          UserRole.FRONT_OFFICE,
          UserRole.REVENUE_MANAGER,
          UserRole.MARKETING,
        ],
      },
      {
        id: 'reservations-calendar',
        label: 'Calendar View',
        href: '/reservations/calendar',
        rolesAllowed: [
          UserRole.OWNER,
          UserRole.GM,
          UserRole.FRONT_OFFICE,
          UserRole.REVENUE_MANAGER,
          UserRole.MARKETING,
        ],
      },
      {
        id: 'reservations-checkin-checkout',
        label: 'Check-in / Check-out',
        href: '/reservations/checkin-checkout',
        rolesAllowed: [
          UserRole.OWNER,
          UserRole.GM,
          UserRole.FRONT_OFFICE,
        ],
      },
    ],
  },
  {
    id: 'guests',
    label: 'Guests',
    href: '/guests',
    icon: 'Users',
    rolesAllowed: [
      UserRole.OWNER,
      UserRole.GM,
      UserRole.FRONT_OFFICE,
      UserRole.REVENUE_MANAGER,
      UserRole.MARKETING,
    ],
    children: [
      {
        id: 'guests-list',
        label: 'Guest List',
        href: '/guests',
        rolesAllowed: [
          UserRole.OWNER,
          UserRole.GM,
          UserRole.FRONT_OFFICE,
          UserRole.REVENUE_MANAGER,
          UserRole.MARKETING,
        ],
      },
      {
        id: 'guests-vip',
        label: 'VIP Guests',
        href: '/guests/vip',
        rolesAllowed: [
          UserRole.OWNER,
          UserRole.GM,
          UserRole.FRONT_OFFICE,
        ],
      },
      {
        id: 'guests-loyalty',
        label: 'Loyalty Program',
        href: '/guests/loyalty',
        rolesAllowed: [
          UserRole.OWNER,
          UserRole.GM,
          UserRole.FRONT_OFFICE,
          UserRole.MARKETING,
        ],
      },
    ],
  },
  {
    id: 'rooms',
    label: 'Rooms',
    href: '/rooms',
    icon: 'BedDouble',
    rolesAllowed: [
      UserRole.OWNER,
      UserRole.GM,
      UserRole.FRONT_OFFICE,
      UserRole.REVENUE_MANAGER,
      UserRole.HOUSEKEEPING_SUPERVISOR,
    ],
    children: [
      {
        id: 'rooms-availability',
        label: 'Room Availability',
        href: '/rooms',
        rolesAllowed: [
          UserRole.OWNER,
          UserRole.GM,
          UserRole.FRONT_OFFICE,
          UserRole.REVENUE_MANAGER,
          UserRole.HOUSEKEEPING_SUPERVISOR,
        ],
      },
      {
        id: 'rooms-types',
        label: 'Room Types',
        href: '/rooms/types',
        rolesAllowed: [
          UserRole.OWNER,
          UserRole.GM,
          UserRole.REVENUE_MANAGER,
        ],
      },
      {
        id: 'rooms-pricing',
        label: 'Dynamic Pricing',
        href: '/rooms/pricing',
        rolesAllowed: [
          UserRole.OWNER,
          UserRole.GM,
          UserRole.REVENUE_MANAGER,
        ],
      },
    ],
  },
  {
    id: 'housekeeping',
    label: 'Housekeeping',
    href: '/housekeeping',
    icon: 'Sparkles',
    rolesAllowed: [
      UserRole.OWNER,
      UserRole.GM,
      UserRole.FRONT_OFFICE,
      UserRole.HOUSEKEEPING_SUPERVISOR,
    ],
    children: [
      {
        id: 'housekeeping-queue',
        label: 'Cleaning Queue',
        href: '/housekeeping',
        rolesAllowed: [
          UserRole.OWNER,
          UserRole.GM,
          UserRole.FRONT_OFFICE,
          UserRole.HOUSEKEEPING_SUPERVISOR,
        ],
      },
      {
        id: 'housekeeping-assignments',
        label: 'Task Assignment',
        href: '/housekeeping/assignments',
        rolesAllowed: [
          UserRole.OWNER,
          UserRole.GM,
          UserRole.HOUSEKEEPING_SUPERVISOR,
        ],
      },
      {
        id: 'housekeeping-inspection',
        label: 'Room Inspection',
        href: '/housekeeping/inspection',
        rolesAllowed: [
          UserRole.OWNER,
          UserRole.GM,
          UserRole.HOUSEKEEPING_SUPERVISOR,
        ],
      },
    ],
  },
  {
    id: 'revenue',
    label: 'Revenue Management',
    href: '/revenue',
    icon: 'TrendingUp',
    rolesAllowed: [
      UserRole.OWNER,
      UserRole.GM,
      UserRole.REVENUE_MANAGER,
      UserRole.MARKETING,
    ],
    children: [
      {
        id: 'revenue-performance',
        label: 'Performance Overview',
        href: '/revenue',
        rolesAllowed: [
          UserRole.OWNER,
          UserRole.GM,
          UserRole.REVENUE_MANAGER,
          UserRole.MARKETING,
        ],
      },
      {
        id: 'revenue-forecast',
        label: 'Revenue Forecast',
        href: '/revenue/forecast',
        rolesAllowed: [
          UserRole.OWNER,
          UserRole.GM,
          UserRole.REVENUE_MANAGER,
        ],
      },
      {
        id: 'revenue-pricing-recommendations',
        label: 'Pricing Recommendations',
        href: '/revenue/pricing-recommendations',
        rolesAllowed: [
          UserRole.OWNER,
          UserRole.GM,
          UserRole.REVENUE_MANAGER,
        ],
      },
    ],
  },
  {
    id: 'marketing',
    label: 'Marketing',
    href: '/marketing',
    icon: 'Megaphone',
    rolesAllowed: [
      UserRole.OWNER,
      UserRole.GM,
      UserRole.MARKETING,
      UserRole.REVENUE_MANAGER,
    ],
    children: [
      {
        id: 'marketing-promotions',
        label: 'Promotions',
        href: '/marketing',
        rolesAllowed: [
          UserRole.OWNER,
          UserRole.GM,
          UserRole.MARKETING,
        ],
      },
      {
        id: 'marketing-campaigns',
        label: 'Campaign ROI',
        href: '/marketing/campaigns',
        rolesAllowed: [
          UserRole.OWNER,
          UserRole.GM,
          UserRole.MARKETING,
        ],
      },
      {
        id: 'marketing-sources',
        label: 'Booking Sources',
        href: '/marketing/sources',
        rolesAllowed: [
          UserRole.OWNER,
          UserRole.GM,
          UserRole.MARKETING,
          UserRole.REVENUE_MANAGER,
        ],
      },
    ],
  },
  {
    id: 'reviews',
    label: 'Reviews',
    href: '/reviews',
    icon: 'Star',
    rolesAllowed: [
      UserRole.OWNER,
      UserRole.GM,
      UserRole.FRONT_OFFICE,
      UserRole.MARKETING,
    ],
  },
  {
    id: 'analytics',
    label: 'Analytics',
    href: '/analytics',
    icon: 'BarChart3',
    rolesAllowed: [
      UserRole.OWNER,
      UserRole.GM,
      UserRole.REVENUE_MANAGER,
      UserRole.HOUSEKEEPING_SUPERVISOR,
      UserRole.MARKETING,
    ],
    children: [
      {
        id: 'analytics-trends',
        label: 'Revenue & Booking Trends',
        href: '/analytics',
        rolesAllowed: [
          UserRole.OWNER,
          UserRole.GM,
          UserRole.REVENUE_MANAGER,
          UserRole.MARKETING,
        ],
      },
      {
        id: 'analytics-demographics',
        label: 'Guest Demographics',
        href: '/analytics/demographics',
        rolesAllowed: [
          UserRole.OWNER,
          UserRole.GM,
          UserRole.MARKETING,
        ],
      },
      {
        id: 'analytics-cancellations',
        label: 'Cancellation & Seasonality',
        href: '/analytics/cancellations',
        rolesAllowed: [
          UserRole.OWNER,
          UserRole.GM,
          UserRole.REVENUE_MANAGER,
        ],
      },
    ],
  },
  {
    id: 'ai',
    label: 'AI Center',
    href: '/ai',
    icon: 'Brain',
    rolesAllowed: [
      UserRole.OWNER,
      UserRole.GM,
      UserRole.REVENUE_MANAGER,
      UserRole.HOUSEKEEPING_SUPERVISOR,
      UserRole.MARKETING,
    ],
    children: [
      {
        id: 'ai-forecasts',
        label: 'Forecasts & Predictions',
        href: '/ai',
        rolesAllowed: [
          UserRole.OWNER,
          UserRole.GM,
          UserRole.REVENUE_MANAGER,
        ],
      },
      {
        id: 'ai-reports',
        label: 'Daily Reports',
        href: '/ai/reports',
        rolesAllowed: [
          UserRole.OWNER,
          UserRole.GM,
        ],
      },
      {
        id: 'ai-alerts',
        label: 'Smart Alerts',
        href: '/ai/alerts',
        rolesAllowed: [
          UserRole.OWNER,
          UserRole.GM,
          UserRole.REVENUE_MANAGER,
          UserRole.HOUSEKEEPING_SUPERVISOR,
          UserRole.MARKETING,
        ],
      },
    ],
  },
  {
    id: 'settings',
    label: 'Settings',
    href: '/settings/property',
    icon: 'Settings',
    rolesAllowed: [
      UserRole.OWNER,
      UserRole.GM,
    ],
    children: [
      {
        id: 'settings-property',
        label: 'Property Profile',
        href: '/settings/property',
        rolesAllowed: [
          UserRole.OWNER,
          UserRole.GM,
        ],
      },
      {
        id: 'settings-users',
        label: 'Users & Roles',
        href: '/settings/users',
        rolesAllowed: [
          UserRole.OWNER,
          UserRole.GM,
        ],
      },
      {
        id: 'settings-integrations',
        label: 'Integrations',
        href: '/settings/integrations',
        rolesAllowed: [
          UserRole.OWNER,
          UserRole.GM,
        ],
      },
    ],
  },
];
