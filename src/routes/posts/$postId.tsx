import { createFileRoute } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { postQueryOptions } from "../../postsQueryOptions";

// The '/posts/{postId}' page, rendered in the posts layout's <Outlet />
export const Route = createFileRoute("/posts/$postId")({
  // Loaders receive the route params and the context from createRouter
  loader: ({ context: { queryClient }, params }) =>
    queryClient.query({
      ...postQueryOptions(params.postId),
      staleTime: "static",
    }),
  component: Post,
});

function Post() {
  const { postId } = Route.useParams();
  const { data: post } = useSuspenseQuery(postQueryOptions(postId));

  if (!post) return <p>No post with id "{postId}".</p>;

  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </>
  );
}
