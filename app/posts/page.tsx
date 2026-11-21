import { Suspense } from "react";
import LocalTime from "@/components/LocalTime";
import Link from "next/link";
import { getPosts } from "@/lib/posts";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Posts",
  description: "List of all blog posts",
};

export default async function PostsPage() {
  const { posts, loadedAt } = await getPosts();
  return (
    <main>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
      <p>
        Загруженно в:{" "}
        <Suspense fallback="…">
          <LocalTime iso={loadedAt} />
        </Suspense>
      </p>
    </main>
  );
}
