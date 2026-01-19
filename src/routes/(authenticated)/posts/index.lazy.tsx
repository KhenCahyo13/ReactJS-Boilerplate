import { createLazyFileRoute } from "@tanstack/react-router";

import Posts from "@/features/posts/list";

export const Route = createLazyFileRoute("/(authenticated)/posts/")({
  component: Posts,
});
