import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import type { Project } from "@/content/projects";

export function ProjectCard({
  name,
  description,
  url,
  tags,
  image,
  status,
}: Project) {
  const isLive = status === "live";
  const href = url ?? "#";

  return (
    <a
      href={href}
      target={isLive ? "_blank" : undefined}
      rel="noopener noreferrer"
      className="group relative flex flex-col gap-4 rounded-md p-4 transition-all duration-200 hover:-translate-x-0.5 hover:bg-brand-bg-alt sm:flex-row"
    >
      {/* Thumbnail */}
      <div className="relative h-28 w-full shrink-0 overflow-hidden rounded border border-white/10 sm:h-20 sm:w-36">
        {image ? (
          <Image src={image} alt={name} fill className="object-cover" />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-brand-bg-alt text-xs text-brand-text-muted">
            {isLive ? name : "Coming Soon"}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1">
        <h3 className="flex items-center gap-1 font-semibold text-brand-text group-hover:text-brand-accent">
          {name}
          {isLive && (
            <ArrowUpRight
              size={14}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          )}
          {!isLive && (
            <span className="ml-2 rounded-full bg-brand-text-muted/20 px-2 py-0.5 font-mono text-xs text-brand-text-muted">
              Coming Soon
            </span>
          )}
        </h3>
        <p className="mt-1.5 text-sm leading-relaxed text-brand-text-muted">
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
