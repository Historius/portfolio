"use client";
import { useState } from "react";
import type { Project } from "@/lib/projects";

const filters = ["All", "React", "Next.js", "JavaScript"] as const;

export default function ProjectFilter({ projects }: { projects: Project[] }) {
  const [selected, setSelected] = useState<(typeof filters)[number]>("All");
  const filtered =
    selected === "All" ? projects : projects.filter((p) => p.tech === selected);

  return (
    <>
      <div className="mt-6 flex flex-wrap gap-2">
        {filters.map((filter) => {
          const isSelected = selected === filter;
          return (
            <button
              key={filter}
              type="button"
              aria-pressed={isSelected}
              onClick={() => setSelected(filter)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                isSelected
                  ? "bg-foreground text-background"
                  : "border border-border text-muted hover:text-foreground"
              }`}
            >
              {filter}
            </button>
          );
        })}
      </div>

      {filtered.length === 0 ? (
        <p className="mt-6 rounded-2xl border border-dashed border-border p-10 text-center text-muted">
          No {selected} projects here yet.
        </p>
      ) : (
        <ul className="mt-6 grid gap-4 sm:grid-cols-2">
          {filtered.map((project) => {
            const isDone = project.status === "Completed";
            return (
              <li
                key={project.title}
                className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-xl hover:shadow-accent/10"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent">
                    {project.tech}
                  </span>
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      isDone
                        ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                        : "bg-amber-500/10 text-amber-600 dark:text-amber-400"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                <h3 className="mt-4 text-xl font-semibold tracking-tight transition-colors group-hover:text-accent">
                  {project.title}
                </h3>
                <p className="mt-2 flex-1 leading-relaxed text-muted">
                  {project.description}
                </p>

                {(project.url || project.repo) && (
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-foreground px-4 py-1.5 text-sm font-medium text-background transition-opacity hover:opacity-85"
                      >
                        Live demo ↗
                      </a>
                    )}
                    {project.repo && (
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full border border-border px-4 py-1.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
                      >
                        Code ↗
                      </a>
                    )}
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}
