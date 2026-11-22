import type { Metadata } from "next";
import { stack } from "@/lib/stack";

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
    <main className="animate-fade-up max-w-2xl">
      <p className="text-sm font-medium text-accent">About</p>
      <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
        Hi, I&apos;m Serhii
      </h1>

      <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted">
        <p>
          <span className="text-foreground">Fullstack developer</span> working
          with TypeScript, React, Next.js and Supabase.
        </p>
        <p>
          I built <span className="text-foreground">Obelisk AI</span> — a
          ChatGPT-like chat with several AI models. My own server route keeps
          the API key off the browser, answers stream in piece by piece, and
          chats are saved in Supabase.
        </p>
        <p>Looking for a full-time remote position in web development.</p>
      </div>

      <h2 className="mt-14 text-xl font-semibold tracking-tight">Stack</h2>
      <ul className="mt-4 flex flex-wrap gap-2">
        {stack.map((item) => (
          <li
            key={item}
            className="rounded-md border border-border bg-card px-2.5 py-1 font-mono text-xs text-muted"
          >
            {item}
          </li>
        ))}
      </ul>
    </main>
  );
}
