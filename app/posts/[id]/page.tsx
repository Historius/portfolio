import { getPost, getPosts } from "@/lib/posts";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: PageProps<"/posts/[id]">): Promise<Metadata> {
  const { id } = await params;
  const post = await getPost(id);
  return {
    title: post.title,
  };
}

export async function generateStaticParams() {
  const { posts } = await getPosts();
  return posts.map((post) => ({
    id: String(post.id),
  }));
}

export default async function PostPage({ params }: PageProps<"/posts/[id]">) {
  const { id } = await params;
  const post = await getPost(id);
  return (
    <main>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </main>
  );
}
