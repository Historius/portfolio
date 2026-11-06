export interface Project {
  title: string;
  description: string;
}

export async function getProjects(): Promise<Project[]> {
  await new Promise<Project[]>((resolve) => {
    setTimeout(() => {
      resolve([]);
    }, 1000);
  });
  return [
    { title: "Obelisk AI", description: "Clone chat GPT" },
    { title: "currency-converter", description: "" },
    { title: "elf-game", description: "javascript game-clicker" },
  ];
}
