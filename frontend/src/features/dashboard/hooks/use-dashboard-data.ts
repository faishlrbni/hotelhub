// useDashboardData Hook
// Data-fetching for Dashboard Overview (KPIs, trend charts, room status, revenue sources, occupancy heatmap).
// Awaiting Phase 2 implementation.

export function useDashboardData() {
  return {
    kpis: null,
    bookingTrend: null,
    revenueTrend: null,
    roomStatus: null,
    isLoading: true,
  };
}
