import { ArrowUpRight } from "lucide-react";
import type { ExperienceItem as ExperienceItemType } from "@/content/experience";

export function ExperienceItem({
  period,
  company,
  companyUrl,
  role,
  description,
  tags,
}: ExperienceItemType) {
  return (
    <a
      href={companyUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col gap-1 rounded-md p-4 transition-all duration-200 hover:-translate-x-0.5 hover:bg-brand-bg-alt sm:flex-row sm:gap-8"
    >
      <span className="mt-1 min-w-[120px] text-xs font-semibold uppercase tracking-widest text-brand-text-muted">
        {period}
      </span>
      <div className="flex-1">
        <h3 className="flex items-center gap-1 font-semibold text-brand-text group-hover:text-brand-accent">
          {company}
          <ArrowUpRight
            size={14}
            className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </h3>
        <p className="text-sm font-medium text-brand-text-muted">{role}</p>
        <p className="mt-2 text-sm leading-relaxed text-brand-text-muted">
          {description}
        </p>
        <ul className="mt-3 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full bg-brand-accent/10 px-3 py-1 font-mono text-xs font-medium text-brand-accent"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </a>
  );
}
