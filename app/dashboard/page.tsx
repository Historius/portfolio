import { Suspense } from "react";
import type { Metadata } from "next";
import Welcome from "@/components/Welcome";
import ServerTime from "@/components/ServerTime";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "User dashboard",
};

export default function DashboardPage() {
  return (
    <main>
      <h1>Dashboard</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <Welcome />
        <ServerTime />
      </Suspense>
    </main>
  );
}
