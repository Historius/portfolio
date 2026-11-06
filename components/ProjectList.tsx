import { getProjects } from "@/lib/projects";
import LikeButton from "@/components/LikeButton";
export default async function ProjectList() {
  const projects = await getProjects();
  return (
    <ul>
      {projects.map((project) => (
        <li key={project.title}>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <LikeButton title={project.title} />
        </li>
      ))}
    </ul>
  );
}
