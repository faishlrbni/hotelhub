// HotelHub API Client Wrapper (Axios / Fetch)
// Handles headers, Sanctum SPA auth cookies/tokens, error envelopes, and request logging.
// Awaiting Phase 2 implementation.

export async function apiClient<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> {
  // Stub implementation
  throw new Error('API Client not implemented in Phase 1');
}
