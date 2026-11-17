import { createFileRoute, Link, Outlet } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { postsQueryOptions } from "../../postsQueryOptions";

// Layout route: rendered for every route under /posts.
// The list stays on the left; the matching child (index.tsx or $postId.tsx)
// is rendered in the <Outlet /> on the right.
export const Route = createFileRoute("/posts")({
  // Fill the Query cache before rendering (and when a link is preloaded).
  // staleTime 'static' means: use cached data if there is any, only fetch if there is none.
  loader: ({ context: { queryClient } }) =>
    queryClient.query({ ...postsQueryOptions, staleTime: "static" }),
  component: PostsLayout,
});

function PostsLayout() {
  // Already cached by the loader, so this never suspends on first render
  const { data: posts } = useSuspenseQuery(postsQueryOptions);

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
                activeProps={{ className: "active" }}
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
  );
}
