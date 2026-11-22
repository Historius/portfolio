import { Suspense } from "react";
import ProjectList from "@/components/ProjectList";
import { stack } from "@/lib/stack";

export default function Home() {
  return (
    <main>
      {/* Первый экран: кто ты и что умеешь */}
      <section className="animate-fade-up pb-20 sm:pt-8">
        <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          Open to remote work
        </p>

        <h1 className="mt-6 text-5xl font-bold tracking-tight sm:text-7xl">
          Serhii Stets
          <span className="block bg-linear-to-r from-accent to-accent-2 bg-clip-text pb-2 text-transparent">
            Fullstack Developer
          </span>
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
          I build web apps with TypeScript, React and Next.js — from the
          interface to server routes and the database.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-85"
          >
            View projects
          </a>
          <a
            href="https://t.me/SerGrey2033"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
          >
            Contact me
          </a>
        </div>

        <ul className="mt-10 flex flex-wrap gap-2">
          {stack.map((item) => (
            <li
              key={item}
              className="rounded-md border border-border bg-card px-2.5 py-1 font-mono text-xs text-muted"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Проекты */}
      <section id="projects" className="scroll-mt-24">
        <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
        <p className="mt-2 text-muted">Selected work with live demos and code.</p>
        <Suspense
          fallback={
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="h-56 animate-pulse rounded-2xl border border-border bg-card" />
              <div className="h-56 animate-pulse rounded-2xl border border-border bg-card" />
            </div>
          }
        >
          <ProjectList />
        </Suspense>
      </section>
    </main>
  );
}
