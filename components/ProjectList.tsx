import { getProjects } from "@/lib/projects";
import ProjectFilter from "@/components/ProjectFilter";
export default async function ProjectList() {
  const projects = await getProjects();
  return (
    <section>
      <ProjectFilter projects={projects} />
    </section>
  );
}
