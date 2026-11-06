export interface Project {
  title: string;
  description: string;
  tech: "React" | "Next.js" | "JavaScript";
}

export async function getProjects(): Promise<Project[]> {
  await new Promise<Project[]>((resolve) => {
    setTimeout(() => {
      resolve([]);
    }, 1000);
  });
  return [
    { title: "Obelisk AI", description: "Clone chat GPT", tech: "Next.js" },
    {
      title: "currency-converter",
      description: "Displays current exchange rates",
      tech: "React",
    },
    {
      title: "elf-game",
      description: "JavaScript game-clicker",
      tech: "JavaScript",
    },
  ];
}
