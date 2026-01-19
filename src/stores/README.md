# Stores

## Purpose

This folder contains **global state management** using **Zustand**. Each store represents a slice of global application state that needs to be shared across multiple components or features.

## Structure

```
stores/
├── auth-store.ts           # Authentication state (user, token)
├── datatable-store.ts      # DataTable UI state (filters, pagination)
├── alert-dialog-store.ts   # Global dialog/notification state
└── ...
```

## When to Use Zustand?

### ✅ Use Zustand for:
- **Authentication state**: User info, tokens, permissions
- **UI state shared across routes**: Modal state, sidebar open/closed
- **Feature-specific global state**: Shopping cart, notifications
- **State that survives route changes**

### ❌ Don't use Zustand for:
- **Server state**: Use TanStack Query instead
- **Form state**: Use TanStack Form or React Hook Form
- **Local component state**: Use `useState` or `useReducer`
- **URL state**: Use TanStack Router's search params

## Store Template

```typescript
import { create } from 'zustand';

// Define state interface
interface MyState {
  count: number;
  name: string;
}

// Define actions interface
interface MyActions {
  increment: () => void;
  decrement: () => void;
  setName: (name: string) => void;
  reset: () => void;
}

// Initial state
const initialState: MyState = {
  count: 0,
  name: '',
};

// Create store
export const useMyStore = create<MyState & MyActions>((set) => ({
  ...initialState,
  
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  setName: (name) => set({ name }),
  reset: () => set(initialState),
}));
```

## Usage in Components

### Full store subscription (re-renders on any change)
```typescript
const { count, name, increment } = useMyStore();
```

### Selective subscription (only re-renders when `count` changes)
```typescript
const count = useMyStore((state) => state.count);
const increment = useMyStore((state) => state.increment);
```

### Using actions without subscribing to state
```typescript
const increment = useMyStore((state) => state.increment);
```

## Example: Auth Store

```typescript
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { User } from '@/types/auth';

interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
}

interface AuthActions {
  setAuth: (user: User, token: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState & AuthActions>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      isAuthenticated: false,
      
      setAuth: (user, token) => set({ 
        user, 
        token, 
        isAuthenticated: true 
      }),
      
      logout: () => set({ 
        user: null, 
        token: null, 
        isAuthenticated: false 
      }),
    }),
    {
      name: 'auth-storage', // localStorage key
      partialize: (state) => ({ 
        token: state.token, 
        user: state.user 
      }),
    }
  )
);
```

## Middleware

Zustand supports middleware for advanced features:

### Persist (localStorage/sessionStorage)
```typescript
import { persist } from 'zustand/middleware';

export const useStore = create(
  persist(
    (set) => ({ /* state */ }),
    { name: 'my-storage-key' }
  )
);
```

### Immer (for immutable updates)
```typescript
import { immer } from 'zustand/middleware/immer';

export const useStore = create(
  immer((set) => ({
    nested: { count: 0 },
    increment: () => set((state) => {
      state.nested.count += 1; // mutate directly with Immer
    }),
  }))
);
```

## Best Practices

- **Separate state and actions**: Use TypeScript interfaces
- **Use selectors**: Subscribe only to needed state slices
- **Keep stores focused**: One store per domain (auth, ui, cart)
- **Use middleware wisely**: Persist only necessary data
- **Reset on logout**: Clear sensitive data from stores
- **TypeScript**: Always type your stores fully

## Resources

- [Zustand Documentation](https://github.com/pmndrs/zustand)
- [Zustand Best Practices](https://github.com/pmndrs/zustand#best-practices)