export interface ExperienceItem {
  period: string;
  company: string;
  companyUrl: string;
  role: string;
  description: string;
  tags: string[];
}

export const experience: ExperienceItem[] = [
  {
    period: "2023 — Present",
    company: "Your Company",
    companyUrl: "https://example.com",
    role: "Full Stack Engineer",
    description:
      "Building and maintaining product features across the full stack. Collaborating with design and product to ship user-facing improvements.",
    tags: ["React", "TypeScript", "Node.js", "Tailwind"],
  },
];
