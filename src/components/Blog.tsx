"use client";

import { useLang } from "./LanguageProvider";

export function Blog() {
  const { t } = useLang();

  return (
    <div className="space-y-4">
      <p className="text-brand-text-muted">{t.blog.description}</p>
      <a
        href="https://medium.com/@sarahwang9"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm font-medium text-brand-accent transition-colors hover:text-brand-text"
      >
        {t.blog.cta}
      </a>
    </div>
  );
}
