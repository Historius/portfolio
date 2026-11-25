import { getProjects } from "@/lib/projects";

export async function GET() {
  const projects = await getProjects();
  return Response.json(projects);
}
