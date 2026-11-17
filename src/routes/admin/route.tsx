import { createFileRoute, Link, Outlet } from '@tanstack/react-router'

// Layout route: rendered for every route under /admin.
export const Route = createFileRoute('/admin')({
  component: () => (
    <div className="layout">
      <h2>Admin layout (admin/route.tsx)</h2>
      <div className="sub-nav">
        <Link to="/admin" activeOptions={{ exact: true }} activeProps={{ className: 'active' }}>
          Overview
        </Link>
        <Link to="/admin/users" activeProps={{ className: 'active' }}>
          Users
        </Link>
      </div>
      <Outlet />
    </div>
  ),
})
