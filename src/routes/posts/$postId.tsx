import { createFileRoute } from '@tanstack/react-router'
import { fetchPost } from '../../posts'

// The '/posts/{postId}' page, rendered in the posts layout's <Outlet />
export const Route = createFileRoute('/posts/$postId')({
  // Loaders receive the route params
  loader: ({ params }) => fetchPost(params.postId),
  component: Post,
})

function Post() {
  const post = Route.useLoaderData()
  const { postId } = Route.useParams()

  if (!post) return <p>No post with id "{postId}".</p>

  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </>
  )
}
