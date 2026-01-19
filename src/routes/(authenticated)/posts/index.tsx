import { createFileRoute } from "@tanstack/react-router";

import Posts from "@/features/posts/list";

export const Route = createFileRoute("/(authenticated)/posts/")({
  component: Posts,
});
