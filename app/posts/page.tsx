import { getPosts } from "@/lib/posts";

export default async function PostsPage() {
  const { posts, loadedAt } = await getPosts();
  return (
    <main>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <p>Загружено в: {loadedAt}</p>
    </main>
  );
}
