import { createFileRoute } from '@tanstack/react-router'

import Login from '@/features/auth/login'

export const Route = createFileRoute('/(unauthenticated)/(auth)/login')({
    component: Login,
});