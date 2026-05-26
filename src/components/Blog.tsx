"use client";

import { ArrowUpRight } from "lucide-react";
import { useLang } from "./LanguageProvider";
import { posts } from "@/content/posts";

export function Blog() {
  const { t, lang } = useLang();

  return (
    <div className="space-y-6">
      <p className="text-brand-text-muted">{t.blog.description}</p>

      <div className="-mx-4 space-y-2">
        {posts.map((post) => (
          <a
            key={post.title}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-2 rounded-md p-4 transition-all duration-200 hover:-translate-x-0.5 hover:bg-brand-bg-alt"
          >
            <h3 className="flex items-center gap-1 font-semibold text-brand-text group-hover:text-brand-accent">
              {lang === "zh" && post.titleZh ? post.titleZh : post.title}
              <ArrowUpRight
                size={14}
                className="shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </h3>
            <p className="text-sm leading-relaxed text-brand-text-muted">
              {lang === "zh" && post.summaryZh ? post.summaryZh : post.summary}
            </p>
            <ul className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full bg-brand-accent/10 px-3 py-1 font-mono text-xs font-medium text-brand-accent"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </a>
        ))}
      </div>

      <a
        href={process.env.NEXT_PUBLIC_MEDIUM_URL!}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm font-medium text-brand-accent transition-colors hover:text-brand-text"
      >
        {t.blog.cta}
      </a>
    </div>
  );
}
