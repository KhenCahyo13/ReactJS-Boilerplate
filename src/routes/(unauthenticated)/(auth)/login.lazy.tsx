import { createLazyFileRoute } from '@tanstack/react-router'

import Login from '@/features/auth/login'

export const Route = createLazyFileRoute('/(unauthenticated)/(auth)/login')({
    component: Login,
});