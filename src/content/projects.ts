export interface Project {
  name: string;
  description: string;
  url?: string;
  repoUrl?: string;
  tags: string[];
  image?: string;
  status: "live" | "coming-soon";
}

export const projects: Project[] = [
  {
    name: "Love My Shelf",
    description:
      "Take a photo of a book cover and AI instantly recognizes the title, author, and genre — adding it to Notion in seconds. Built to replace the 5-minute \"scan + type\" workflow with a 5-second one. Uses Anthropic Claude for vision recognition and Tool Use on the backend, Next.js + Tailwind on the front, deployed on Vercel.",
    url: "https://love-my-shelf.vercel.app",
    repoUrl: "https://github.com/sarahwangy/love-my-shelf",
    tags: ["Next.js", "Anthropic", "Notion", "Tailwind", "Vercel"],
    image: "/images/projects/love-my-shelf.png",
    status: "live",
  },
  {
    name: "Love My Events",
    description:
      "Community event manager — snap a poster, paste an email, or speak aloud, and the app auto-extracts event details and categorizes them for you.",
    tags: ["Next.js", "AI", "TypeScript"],
    status: "coming-soon",
  },
  {
    name: "YouTube Sorter",
    description:
      "Import your subscriptions CSV and let AI automatically group channels by topic, helping you discover interest gaps.",
    tags: ["Next.js", "AI", "TypeScript"],
    status: "coming-soon",
  },
];
