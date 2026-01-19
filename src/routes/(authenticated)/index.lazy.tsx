import { createLazyFileRoute } from "@tanstack/react-router";

import Dashboard from "@/features/dashboard";

export const Route = createLazyFileRoute("/(authenticated)/")({
  component: Dashboard,
});
