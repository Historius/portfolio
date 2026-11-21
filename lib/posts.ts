import { cacheLife } from "next/cache";

export interface Post {
  id: number;
  title: string;
  body: string;
}

export async function getPosts(): Promise<{ posts: Post[]; loadedAt: string }> {
  "use cache";
  cacheLife("minutes");
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=5",
  );
  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  const posts: Post[] = await res.json();
  return { posts, loadedAt: new Date().toISOString() };
}
export async function getPost(id: string): Promise<Post> {
  "use cache";
  cacheLife("minutes");
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch post");
  }
  return res.json();
}
