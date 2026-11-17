export type Post = { id: string; title: string; body: string }

const posts: Post[] = [
  { id: 'my-first-post', title: 'My first post', body: 'Hello from the first post!' },
  { id: 'layouts-explained', title: 'Layouts explained', body: 'A route.tsx renders its children in an Outlet.' },
  { id: 'file-based-routing', title: 'File-based routing', body: 'Files in src/routes become routes.' },
]

// Fake network latency, so loading and preloading are visible
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

// Stand-ins for "a fetch returning a Promise"
export async function fetchPosts(): Promise<Post[]> {
  console.log('fetchPosts')
  await delay(500)
  return posts
}

export async function fetchPost(id: string): Promise<Post | null> {
  console.log('fetchPost', id)
  await delay(500)
  // TanStack Query does not allow `undefined` as data, so use null for "not found"
  return posts.find((post) => post.id === id) ?? null
}
