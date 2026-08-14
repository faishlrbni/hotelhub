// useSettings Hook
// Managing property profile, users & role assignments, and third-party integrations.
// Awaiting Phase 2 implementation.

export function useSettings() {
  return {
    property: null,
    users: [],
    integrations: [],
    isLoading: true,
  };
}
