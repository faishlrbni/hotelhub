// HotelHub Auth Helper Utilities
// Sanctum session handling & role check helpers.
// Awaiting Phase 2 implementation.

export function hasPermission(userRole: string, allowedRoles: string[]): boolean {
  return allowedRoles.includes(userRole);
}
