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
      description:
        "ChatGPT-like chat with several AI models. A server route keeps the API key private, answers stream in real time, chats are stored in Supabase. Auth and public deploy are next.",
      tech: "Next.js",
      status: "In progress",
    },
    {
      title: "Currency Converter",
      description: "Displays current exchange rates.",
      tech: "JavaScript",
      status: "Completed",
      url: "https://historius.github.io/currency-converter/",
      repo: "https://github.com/Historius/currency-converter",
    },
    {
      title: "Elf Game",
      description: "Clicker game in plain JavaScript.",
      tech: "JavaScript",
      status: "Completed",
      url: "https://historius.github.io/Game/",
      repo: "https://github.com/Historius/Game",
    },
  ];
}
