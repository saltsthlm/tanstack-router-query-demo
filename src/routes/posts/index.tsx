import { createFileRoute } from '@tanstack/react-router'

// The '/posts' page: shown on the right until a post is selected
export const Route = createFileRoute('/posts/')({
  component: () => <p>Select a post from the list.</p>,
})
