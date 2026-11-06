import { Suspense } from "react";
import ProjectList from "@/components/ProjectList";

export default function Home() {
  return (
    <main>
      <h1>My Projects</h1>
      <Suspense fallback={<div>Loading projects...</div>}>
        <ProjectList />
      </Suspense>
    </main>
  );
}
