import {
  createRootRouteWithContext,
  Link,
  Outlet,
} from "@tanstack/react-router";
import type { QueryClient } from "@tanstack/react-query";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

// The root route: the entry point for all other routes.
// Every other route is rendered in its <Outlet />.
// `createRootRouteWithContext` types the `context` given to createRouter in main.tsx
export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  component: () => (
    <>
      <nav>
        <Link
          to="/"
          activeOptions={{ exact: true }}
          activeProps={{ className: "active" }}
        >
          Home
        </Link>
        <Link to="/about" activeProps={{ className: "active" }}>
          About
        </Link>
        <Link to="/posts" activeProps={{ className: "active" }}>
          Posts
        </Link>
        <Link to="/admin" activeProps={{ className: "active" }}>
          Admin
        </Link>
      </nav>
      <main>
        <Outlet />
      </main>
      <TanStackRouterDevtools />
    </>
  ),
});
