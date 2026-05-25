import { experience } from "@/content/experience";
import { ExperienceItem } from "./ExperienceItem";

export function Experience() {
  return (
    <div className="-mx-4 space-y-2">
      {experience.map((item) => (
        <ExperienceItem key={item.company} {...item} />
      ))}
    </div>
  );
}
