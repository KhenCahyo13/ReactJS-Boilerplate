# Library / Utilities

## Purpose

This folder contains **utility functions, helpers, and shared configurations** that are used across the application. These are framework-agnostic helper functions and third-party library configurations.

## Structure

```
lib/
├── utils.ts         # General utility functions (from shadcn/ui)
├── axios.ts         # Axios instance configuration with interceptors
├── datetime.ts      # Date/time formatting helpers
├── pagination.ts    # Pagination utility functions
└── ...
```

## What Goes Here?

### ✅ Should be in `lib/`:
- Pure utility functions (no side effects)
- Third-party library configurations (axios, date-fns wrappers)
- Helper functions used in multiple features
- Format/parse/transform utilities
- Constants and shared configurations

### ❌ Should NOT be in `lib/`:
- React components (→ use `components/`)
- React hooks (→ use `hooks/`)
- API calls (→ use `api/`)
- State management (→ use `stores/`)

## Example Files

### `utils.ts`
General utilities from shadcn/ui and custom helpers:
```typescript
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  }).format(amount);
}
```

### `axios.ts`
Configured axios instance with interceptors:
```typescript
import axios from 'axios';

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor (add auth token)
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// Response interceptor (handle errors)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized
    }
    return Promise.reject(error);
  }
);
```

### `datetime.ts`
Date/time formatting helpers:
```typescript
import { format, parseISO } from 'date-fns';
import { id } from 'date-fns/locale';

export function formatDate(date: string | Date): string {
  const parsed = typeof date === 'string' ? parseISO(date) : date;
  return format(parsed, 'dd MMM yyyy', { locale: id });
}

export function formatDateTime(date: string | Date): string {
  const parsed = typeof date === 'string' ? parseISO(date) : date;
  return format(parsed, 'dd MMM yyyy HH:mm', { locale: id });
}
```

## Best Practices

- **Keep functions pure**: No side effects, easy to test
- **Export named exports**: Better for tree-shaking
- **Add JSDoc comments**: Document parameters and return types
- **Use TypeScript**: Fully type your utility functions
- **One responsibility per file**: Don't create a "god util file"