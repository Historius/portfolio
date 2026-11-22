export interface Project {
  status: string;
  title: string;
  description: string;
  tech: "React" | "Next.js" | "JavaScript";
  url?: string;
  repo?: string;
}

export async function getProjects(): Promise<Project[]> {
  return [
    {
      title: "Obelisk AI",
      description: "ChatGPT-like chat with several AI models",
      tech: "Next.js",
      status: "In progress: auth & deploy coming soon",
    },
    {
      title: "currency-converter",
      description: "Displays current exchange rates",
      tech: "JavaScript",
      status: "Completed",
      url: "https://historius.github.io/currency-converter/",
      repo: "https://github.com/Historius/currency-converter",
    },
    {
      title: "elf-game",
      description: "JavaScript game-clicker",
      tech: "JavaScript",
      status: "Completed",
      url: "https://historius.github.io/Game/",
      repo: "https://github.com/Historius/Game",
    },
  ];
}
