import { createFileRoute } from "@tanstack/react-router";

// The '/admin/users' page.
// This route always fails, to show error handling: an error thrown in the
// loader (or the component) is caught by the closest error boundary.
export const Route = createFileRoute("/admin/users")({
  loader: () => {
    throw new Error("The users service is down");
  },
  errorComponent: ({ error }) => (
    <>
      <h1>Something went wrong</h1>
      <p style={{ color: "crimson" }}>
        {error instanceof Error ? error.message : String(error)}
      </p>
    </>
  ),
  component: () => <h1>Users</h1>,
});
