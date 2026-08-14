// HotelHub Auth Types
import { UserRole } from './enums';
import { User } from './entities';

export interface AuthSession {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  role: UserRole | null;
}

export interface LoginCredentials {
  email: string;
  password?: string;
}
