"use client";

import { SectionNav } from "./SectionNav";
import { SocialLinks } from "./SocialLinks";
import { useLang } from "./LanguageProvider";

export function Sidebar() {
  const { t } = useLang();

  return (
    <header className="pt-16 pb-8 lg:sticky lg:top-0 lg:flex lg:h-screen lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-brand-text sm:text-5xl">
          Sarah Wang
        </h1>
        <h2 className="mt-3 text-xl font-medium text-brand-text">
          {t.sidebar.title}
        </h2>
        <p className="mt-4 max-w-xs leading-normal text-brand-text-muted">
          {t.sidebar.tagline}
        </p>
        <SectionNav />
      </div>
      <SocialLinks />
    </header>
  );
}
