import { createFileRoute } from "@tanstack/react-router";

// The '/admin' page
export const Route = createFileRoute("/admin/")({
  component: () => <h1>Admin overview</h1>,
});
