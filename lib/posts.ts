import { cacheLife } from "next/cache";

export interface Post {
  id: number;
  title: string;
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
  return { posts, loadedAt: new Date().toLocaleTimeString("ru-RU") };
}
