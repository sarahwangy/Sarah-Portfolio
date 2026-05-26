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
    name: "lovely-shelf",
    description:
      "Photograph a book cover and AI instantly recognizes title, author, and genre — catalogued to Notion in seconds. Includes a stats dashboard (genre breakdown, reading heatmap, author countries), a chat interface for asking questions about your shelf, and a quotes collection. Built for my own overflowing library; compresses a 5-minute workflow to 5 seconds.",
    url: "https://lovely-shelf.vercel.app",
    repoUrl: process.env.NEXT_PUBLIC_LOVELY_SHELF_REPO,
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
