import { createFileRoute } from "@tanstack/react-router";

// The '/' page
export const Route = createFileRoute("/")({
  component: () => <h1>Home</h1>,
});
