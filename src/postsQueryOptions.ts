import { queryOptions } from "@tanstack/react-query";
import { fetchPost, fetchPosts } from "./posts";

// Query options are shared by the route loaders (which fill the cache)
// and the components (which read from it), so the key and fetcher live in one place.
export const postsQueryOptions = queryOptions({
  queryKey: ["posts"],
  queryFn: fetchPosts,
});

export const postQueryOptions = (postId: string) =>
  queryOptions({
    queryKey: ["posts", postId],
    queryFn: () => fetchPost(postId),
  });
