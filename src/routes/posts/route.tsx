import { createFileRoute, Link, Outlet } from '@tanstack/react-router'
import { fetchPosts } from '../../posts'

// Layout route: rendered for every route under /posts.
// The list stays on the left; the matching child (index.tsx or $postId.tsx)
// is rendered in the <Outlet /> on the right.
export const Route = createFileRoute('/posts')({
  // The router calls the loader before rendering (and when a link is preloaded)
  loader: fetchPosts,
  component: PostsLayout,
})

function PostsLayout() {
  const posts = Route.useLoaderData()

  return (
    <div className="layout">
      <h2>Posts layout (posts/route.tsx)</h2>
      <div className="split">
        <ul className="post-list">
          {posts.map((post) => (
            <li key={post.id}>
              <Link
                to="/posts/$postId"
                params={{ postId: post.id }}
                activeProps={{ className: 'active' }}
              >
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
        <section className="post-detail">
          <Outlet />
        </section>
      </div>
    </div>
  )
}
