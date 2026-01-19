# Features

## Purpose

This folder contains **feature-based modules** organized by domain. Each feature represents a major part of the application and encapsulates all related components, logic, types, and schemas.

## Structure

```
features/
├── auth/
│   └── login/
│       ├── index.tsx         # Container (data fetching, business logic)
│       ├── view.tsx          # Presentational component (UI only)
│       ├── schema.ts         # Form validation schema & default values
│       ├── types.d.ts        # Feature-specific types
│       └── components/
│           └── form.tsx      # Sub-components used only in this feature
├── posts/
│   ├── list/
│   │   ├── index.tsx
│   │   ├── view.tsx
│   │   ├── data.tsx          # Data fetching hooks/queries
│   │   ├── types.d.ts
│   │   └── components/
│   │       ├── datatable.tsx
│   │       └── skeleton.tsx
│   ├── create/
│   └── details/
└── dashboard/
    ├── index.tsx
    └── view.tsx
```

## Container-Presentational Pattern

This boilerplate uses the **Container-Presentational** pattern to separate concerns:

### Container (`index.tsx`)
- **Responsibilities**:
  - Fetch data (using TanStack Query or other hooks)
  - Manage state and side effects
  - Handle business logic
  - Pass data and handlers to the presentational component
- **Usage**: Import this file in your route definitions

### Presentational (`view.tsx`)
- **Responsibilities**:
  - Render UI based on props
  - No direct data fetching or side effects
  - Pure component focused on presentation
- **Benefits**: Easier to test and reuse

## File Conventions

- **`index.tsx`**: Container component (default export)
- **`view.tsx`**: Presentational component
- **`schema.ts`**: Zod schemas for form validation and default values
- **`types.d.ts`**: TypeScript types specific to the feature
- **`data.tsx`**: Data fetching hooks (TanStack Query hooks)
- **`components/`**: Sub-components used only within this feature

## Best Practices

- **One feature per folder**: Keep related CRUD operations together
- **Co-locate types and schemas**: Feature-specific types stay in the feature folder
- **Reusable components go to `components/`**: Only feature-specific components stay in `features/*/components/`
- **Use TanStack Query**: For data fetching, mutations, and cache management