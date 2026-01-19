# API Layer

## Purpose

This folder contains all API client functions and HTTP request configurations. Each file represents a domain or resource and exports functions for interacting with backend endpoints.

## Structure

```
api/
├── auth.ts          # Authentication endpoints (login, logout, refresh)
├── tickets.ts       # Ticket management endpoints
├── users.ts         # User management endpoints
└── ...
```

## Best Practices

- **One file per resource**: Group related endpoints together (e.g., all ticket operations in `tickets.ts`)
- **Export typed functions**: Use TypeScript interfaces for request/response types
- **Use axios instance**: Import the configured axios instance from `lib/axios.ts` for consistent error handling and interceptors
- **Handle errors**: Return or throw standardized error objects