import { Suspense } from "react";
import Welcome from "@/components/Welcome";

export default function DashboardPage() {
  return (
    <main>
      <h1>Dashboard</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <Welcome />
      </Suspense>
    </main>
  );
}
