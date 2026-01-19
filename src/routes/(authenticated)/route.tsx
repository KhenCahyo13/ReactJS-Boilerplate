import { createFileRoute } from '@tanstack/react-router'

import AuthenticatedLayout from '@/components/layouts/authenticated-layout'

export const Route = createFileRoute('/(authenticated)')({
    component: AuthenticatedLayout,
})