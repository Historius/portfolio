import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About me page",
  openGraph: {
    title: "About Serhii Stets",
    description: "Learn more about me and my journey as a developer.",
    type: "website",
  },
};

export default function About() {
  return (
    <main>
      <h1>About Me</h1>
      <p>This is the about page of my portfolio.</p>
    </main>
  );
}
