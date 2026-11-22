import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About me page",
  openGraph: {
    title: "About Serhii Stets",
    description: "Learn more about me and my journey as a developer.",
    type: "website",
  },
};

export default function About() {
  return (
    <main>
      <h1>About Me</h1>
      <p>Fullstack developer: TypeScript, React, Next.js, Supabase.</p>
      <p>
        I built Obelisk AI — a ChatGPT-like chat with several AI models. My own
        server route keeps the API key off the browser, answers stream in piece
        by piece, and chats are saved in Supabase.
      </p>
      <p>Looking for a full-time remote position in web development.</p>
    </main>
  );
}
