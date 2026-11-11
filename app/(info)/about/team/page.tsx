import { Suspense } from "react";
import ProjectList from "@/components/ProjectList";

export default function Team() {
  return (
    <main>
      <h1>Our Team</h1>
      <p>This is the team page of my portfolio.</p>
      <Suspense fallback={<div>Loading projects...</div>}>
        <ProjectList />
      </Suspense>
    </main>
  );
}
