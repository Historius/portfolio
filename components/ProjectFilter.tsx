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
      <div className="mb-6 flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={filter}
            className={`px-4 py-2 rounded-md ${
              selected === filter
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setSelected(filter)}
          >
            {filter}
          </button>
        ))}
      </div>
      <ul className="grid gap-4">
        {filtered.map((project) => (
          <li
            key={project.title}
            className="rounded-lg border border-foreground/20 p-4"
          >
            <h2 className="text-xl font-semibold">{project.title}</h2>
            <p className="mt-1 opacity-80">{project.description}</p>
            <p className="mt-3 text-sm opacity-60">Tech: {project.tech}</p>
            <p className="text-sm opacity-60">{project.status}</p>
            {project.url && (
              <a
                className="mr-4 mt-3 inline-block underline"
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live demo
              </a>
            )}
            {project.repo && (
              <a
                className="mr-4 mt-3 inline-block underline"
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
              >
                Code
              </a>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}
