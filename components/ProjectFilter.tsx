"use client";
import { useState } from "react";
import type { Project } from "@/lib/projects";
import LikeButton from "@/components/LikeButton";

const filters = ["All", "React", "Next.js", "JavaScript"] as const;

export default function ProjectFilter({ projects }: { projects: Project[] }) {
  const [selected, setSelected] = useState<(typeof filters)[number]>("All");
  const filtered =
    selected === "All" ? projects : projects.filter((p) => p.tech === selected);

  return (
    <>
      <div className="flex gap-2">
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
      <ul>
        {filtered.map((project) => (
          <li key={project.title}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <p>Tech: {project.tech}</p>
            <LikeButton title={project.title} />
          </li>
        ))}
      </ul>
    </>
  );
}
