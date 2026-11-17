import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

// The root route: the entry point for all other routes.
// Every other route is rendered in its <Outlet />.
export const Route = createRootRoute({
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
