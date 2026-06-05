const API_BASE = `${import.meta.env.VITE_API_URL || ''}/api`;

async function request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const token = localStorage.getItem('token');

  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    ...(options.headers as Record<string, string>),
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const res = await fetch(`${API_BASE}${endpoint}`, {
    ...options,
    headers,
  });

  if (!res.ok) {
    const error = await res.json().catch(() => ({ message: 'Network error' }));
    throw new Error(error.message || error.errors?.email?.[0] || 'Request failed');
  }

  return res.json();
}

export interface User {
  id: number;
  name: string;
  email: string;
  created_at: string;
}

export interface AuthResponse {
  user: User;
  token: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  discount_price: number | null;
  category: string;
  condition: string;
  description: string;
  image: string;
  featured: boolean;
}

export const api = {
  register: (data: { name: string; email: string; password: string }) =>
    request<AuthResponse>('/register', { method: 'POST', body: JSON.stringify(data) }),

  login: (data: { email: string; password: string }) =>
    request<AuthResponse>('/login', { method: 'POST', body: JSON.stringify(data) }),

  logout: () =>
    request<{ message: string }>('/logout', { method: 'POST' }),

  user: () =>
    request<User>('/user'),

  products: () =>
    request<Product[]>('/products'),

  product: (id: number) =>
    request<Product>(`/products/${id}`),
};
