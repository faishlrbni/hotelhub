// HotelHub API Response Envelopes & Types

export interface ApiResponse<T> {
  data: T;
  meta?: ApiMeta;
  links?: ApiLinks;
}

export interface ApiListResponse<T> {
  data: T[];
  meta?: ApiMeta;
  links?: ApiLinks;
}

export interface ApiMeta {
  current_page?: number;
  last_page?: number;
  per_page?: number;
  total?: number;
  period?: string;
  compared_to?: string;
  [key: string]: unknown;
}

export interface ApiLinks {
  first?: string;
  last?: string;
  prev?: string | null;
  next?: string | null;
}

export interface ApiFilterParams {
  page?: number;
  per_page?: number;
  sort?: string;
  filter?: Record<string, string | number | boolean>;
  include?: string[];
  date_from?: string;
  date_to?: string;
}
