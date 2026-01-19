# Types

## Purpose

This folder contains **global TypeScript type definitions** used across multiple features and components. These are shared interfaces, types, and type utilities that don't belong to a specific feature.

## Structure

```
types/
├── api.d.ts          # API response types, error types
├── auth.d.ts         # User, session, auth-related types
├── component.d.ts    # Common component prop types
├── post.d.ts         # Post/article entity types
└── ...
```

## What Goes Here?

### ✅ Should be in `types/`:
- **Shared entity types**: User, Post, Product, etc.
- **API contract types**: Request/response interfaces
- **Common prop types**: Shared across multiple components
- **Utility types**: Reusable type helpers
- **Third-party type augmentations**: Extend library types

### ❌ Should NOT be in `types/`:
- **Feature-specific types**: Keep them in `features/*/types.d.ts`
- **Component-specific types**: Define inline or in the component file
- **Types used in only one place**: Co-locate with usage

## File Naming Conventions

- Use `.d.ts` extension for pure type definitions (no runtime code)
- Use `.ts` extension if you need runtime enums or type guards
- Group related types by domain: `user.d.ts`, `api.d.ts`, etc.

## Example Files

### `api.d.ts`
Common API types used across all endpoints:
```typescript
export interface PaginatedResponse<T> {
  data: T[];
  current_page: number;
  per_page: number;
  total: number;
  last_page: number;
  from: number;
  to: number;
  first_page_url: string;
  last_page_url: string;
  next_page_url: string | null;
  prev_page_url: string | null;
  path: string;
}

export interface ApiError {
  message: string;
  errors?: Record<string, string[]>;
  status: number;
}

export interface ApiSuccessResponse<T = unknown> {
  data: T;
  message?: string;
}
```

### `auth.d.ts`
Authentication and user types:
```typescript
export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
  created_at: string;
}

export type UserRole = 'admin' | 'user' | 'guest';

export interface AuthResponse {
  user: User;
  token: string;
  expires_at: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}
```

### `component.d.ts`
Common component prop patterns:
```typescript
import type { ReactNode } from 'react';

export interface LayoutProps {
  children: ReactNode;
}

export interface PageProps {
  title?: string;
  description?: string;
}

export type Status = 'idle' | 'loading' | 'success' | 'error';

export interface AsyncState<T> {
  data: T | null;
  status: Status;
  error: Error | null;
}
```

## Advanced Patterns

### Utility Types
```typescript
// Make all properties optional recursively
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

// Extract keys with values of specific type
export type KeysOfType<T, U> = {
  [K in keyof T]: T[K] extends U ? K : never;
}[keyof T];
```

### Type Guards
```typescript
// types/guards.ts
import type { ApiError, ApiSuccessResponse } from './api';

export function isApiError(error: unknown): error is ApiError {
  return (
    typeof error === 'object' &&
    error !== null &&
    'message' in error &&
    'status' in error
  );
}

export function isSuccessResponse<T>(response: unknown): response is ApiSuccessResponse<T> {
  return typeof response === 'object' && response !== null && 'data' in response;
}
```

### Module Augmentation
```typescript
// types/tanstack-router.d.ts
import '@tanstack/react-router';

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
```

## Best Practices

- **Use `.d.ts` for pure types**: No runtime code in type files
- **Export everything**: All types should be exported
- **Avoid `any`**: Use `unknown` and type guards instead
- **Prefer interfaces for objects**: Better for extension
- **Use type for unions/intersections**: More flexible
- **Document complex types**: Add JSDoc comments
- **Keep types DRY**: Extract common patterns into utilities

## Integration with Features

Features can import global types:
```typescript
// features/posts/list/types.d.ts
import type { PaginatedResponse } from '@/types/api';
import type { Post } from '@/types/post';

export type PostListResponse = PaginatedResponse<Post>;

export interface PostFilters {
  status?: 'published' | 'draft';
  author?: string;
}
```

## Resources

- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/)
- [Type vs Interface](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces)