# React Boilerplate

A production-ready React boilerplate with TypeScript, Vite, TanStack Router, TanStack Query, Zustand, and shadcn/ui. Built with modern best practices and scalable architecture patterns.

## 🚀 Features

- ⚡️ **Vite** - Lightning-fast development with HMR
- ⚛️ **React 19** - Latest React with concurrent features
- 🎯 **TypeScript** - Full type safety across the stack
- 🗂 **File-based Routing** - Type-safe routing with TanStack Router
- 🔄 **Data Fetching** - TanStack Query for server state management
- 🎨 **shadcn/ui** - Beautiful, accessible component library
- 💅 **Tailwind CSS** - Utility-first styling with v4
- 📝 **TanStack Form** - Type-safe forms with validation
- 🗃 **Zustand** - Lightweight global state management
- 📚 **Storybook** - Component development and documentation
- 🧪 **Vitest** - Fast unit testing
- 🎭 **Playwright** - End-to-end testing
- 📏 **ESLint** - Code quality and consistency
- 💎 **Prettier** - Code formatting
- 🪝 **Husky** - Git hooks for quality gates

## 📦 Tech Stack

| Category | Technology |
|----------|------------|
| **Core** | React 19, TypeScript, Vite |
| **Routing** | TanStack Router (file-based) |
| **Data Fetching** | TanStack Query + Axios |
| **State Management** | Zustand |
| **Forms** | TanStack Form + Zod |
| **UI Components** | shadcn/ui + Radix UI |
| **Styling** | Tailwind CSS v4 |
| **Icons** | Tabler Icons + Lucide |
| **Dev Tools** | Storybook, Vitest, Playwright |

## 🏗 Project Structure

```
src/
├── api/              # API client functions
├── components/       # Reusable UI components
│   ├── ui/           # shadcn/ui base components
│   ├── core/         # App-level providers
│   ├── layouts/      # Layout components
│   ├── tanstack-form/# Form components
│   ├── datatable/    # DataTable components
│   └── fallback/     # Loading/error states
├── features/         # Feature-based modules
│   ├── auth/         # Authentication feature
│   ├── dashboard/    # Dashboard feature
│   └── posts/        # Posts feature
├── hooks/            # Custom React hooks
├── lib/              # Utility functions
├── routes/           # File-based routing
│   ├── __root.tsx    # Root layout
│   ├── (authenticated)/  # Protected routes
│   └── (unauthenticated)/ # Public routes
├── stores/           # Zustand stores
├── stories/          # Storybook stories
└── types/            # Global TypeScript types
```

**📖 For detailed folder explanations, see the README.md in each folder.**

## 🎯 Architecture Patterns

### Container-Presentational Pattern
Features use separation of concerns:
- **Container** (`index.tsx`): Data fetching, business logic
- **Presentational** (`view.tsx`): UI rendering, props-based

### Component Organization
- **Global components** → `src/components/`
- **Feature-specific** → `src/features/*/components/`
- **UI primitives** → `src/components/ui/`

### State Management Strategy
- **Server state** → TanStack Query
- **Global client state** → Zustand
- **Form state** → TanStack Form
- **URL state** → TanStack Router

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and pnpm

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd react-boilerplate

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

### Available Scripts

```bash
# Development
pnpm dev              # Start dev server (http://localhost:5173)
pnpm storybook        # Start Storybook (http://localhost:6006)

# Build
pnpm build            # Build for production
pnpm build-storybook  # Build Storybook

# Code Quality
pnpm lint             # Run ESLint
pnpm format           # Format with Prettier

# Preview
pnpm preview          # Preview production build
```

## 🧩 Key Concepts

### Adding a New Feature

1. **Create feature folder**:
   ```
   src/features/tickets/
   ├── list/
   │   ├── index.tsx      # Container
   │   ├── view.tsx       # Presentational
   │   ├── data.tsx       # TanStack Query hooks
   │   ├── types.d.ts     # Types
   │   └── components/    # Feature-specific components
   ├── create/
   └── details/
   ```

2. **Add API calls**:
   ```typescript
   // src/api/tickets.ts
   export const ticketApi = {
     getAll: () => api.get<Ticket[]>('/tickets'),
     create: (data) => api.post('/tickets', data),
   };
   ```

3. **Create route**:
   ```typescript
   // src/routes/(authenticated)/tickets/index.lazy.tsx
   import { createLazyFileRoute } from '@tanstack/react-router';
   import TicketsList from '@/features/tickets/list';
   
   export const Route = createLazyFileRoute('/(authenticated)/tickets/')({
     component: TicketsList,
   });
   ```

### Using Global State

```typescript
// src/stores/my-store.ts
import { create } from 'zustand';

export const useMyStore = create<State & Actions>((set) => ({
  count: 0,
  increment: () => set((s) => ({ count: s.count + 1 })),
}));

// In component
const count = useMyStore((s) => s.count);
```

### Form Validation

```typescript
// schema.ts
import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export const defaultValues = {
  email: '',
  password: '',
};
```

## 📚 Documentation

- **Folder Structure**: See README.md files in each `src/` subfolder
- **Component Stories**: Run `pnpm storybook` and check "Stories Overview"
- **API Reference**: Check inline JSDoc comments

## 🤝 Contributing

1. Follow the established folder structure
2. Use TypeScript for type safety
3. Write Storybook stories for new components
4. Keep features self-contained
5. Update relevant README files

## 📝 Code Style

- **TypeScript**: Strict mode enabled
- **Naming**: PascalCase for components, camelCase for functions
- **Imports**: Use `@/` alias for absolute imports
- **Components**: Prefer named exports
- **Formatting**: Prettier runs on commit via Husky

## 🔧 Configuration Files

- `vite.config.ts` - Vite configuration
- `eslint.config.js` - ESLint rules
- `tsconfig.json` - TypeScript compiler options
- `tailwind.config.js` - Tailwind customization
- `components.json` - shadcn/ui configuration

## 📄 License

MIT

## 🙏 Acknowledgments

Built with amazing tools from:
- [Vite](https://vitejs.dev/)
- [TanStack](https://tanstack.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Zustand](https://github.com/pmndrs/zustand)
- [Tailwind CSS](https://tailwindcss.com/)
