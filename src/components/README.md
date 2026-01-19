# Components

## Purpose

This folder contains all reusable UI components organized by purpose and context. Components are divided into logical groups for better maintainability and discoverability.

## Structure

```
components/
├── ui/                  # Base UI components from shadcn/ui
│   ├── button.tsx
│   ├── input.tsx
│   └── ...
├── core/               # Core app components (providers, wrappers)
│   └── app-provider.tsx
├── layouts/            # Layout components for page structure
│   ├── authenticated-layout.tsx
│   ├── content-layout.tsx
│   └── app-sidebar.tsx
├── tanstack-form/      # Form input components integrated with TanStack Form
│   ├── text-input.tsx
│   ├── select-input.tsx
│   └── ...
├── datatable/          # DataTable component parts
│   ├── wrapper.tsx
│   ├── header.tsx
│   └── body.tsx
└── fallback/           # Fallback/error state components
    ├── loader.tsx
    ├── image.tsx
    └── action.tsx
```

## Component Categories

### ui/
Base components from **shadcn/ui**. Do not modify these directly—customize via variants or wrapper components.

### core/
App-level components that provide context or wrap the entire application (e.g., providers, error boundaries).

### layouts/
Components that define page structure and navigation (headers, sidebars, content wrappers).

### tanstack-form/
Form field components integrated with `@tanstack/react-form`. Each component handles field state, validation display, and label rendering.

### datatable/
Modular parts of the DataTable component that integrate with TanStack Table and Zustand for state management.

### fallback/
Components for displaying loading, empty, and error states.

## Naming Conventions

- Use **KebabCase** naming format for component files: `my-component.tsx`
- Group related components in subfolders
- Prefix specialized components by context (e.g., `Tf` for TanStack Form: `TfTextInput`)

## Best Practices

- Keep components **small and focused** on a single responsibility
- **Export named exports** for better tree-shaking
- Use **TypeScript interfaces** for props
- Consider using **Storybook stories** for visual testing (see `src/stories/`)