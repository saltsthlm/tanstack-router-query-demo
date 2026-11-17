import { createFileRoute } from '@tanstack/react-router'

// The '/about' page
export const Route = createFileRoute('/about')({
  component: () => <h1>About</h1>,
})
