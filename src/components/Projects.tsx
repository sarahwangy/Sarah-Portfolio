import { projects } from "@/content/projects";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  return (
    <div className="-mx-4 space-y-2">
      {projects.map((project) => (
        <ProjectCard key={project.name} {...project} />
      ))}
    </div>
  );
}
