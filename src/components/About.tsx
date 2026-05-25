"use client";

import { useLang } from "./LanguageProvider";

function InlineLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className="font-medium text-brand-text transition-colors hover:text-brand-accent"
    >
      {children}
    </a>
  );
}

export function About() {
  const { t } = useLang();
  const a = t.about;

  return (
    <div className="space-y-4 text-brand-text-muted">
      <p>
        {a.p1}{" "}
        <InlineLink href="https://anthropic.com">{a.p1Link}</InlineLink>{" "}
        {a.p1Rest}
      </p>
      <p>
        {a.p2}{" "}
        <InlineLink href="https://lovely-shelf.vercel.app">{a.p2Link}</InlineLink>
        {a.p2Rest}
      </p>
      <p>{a.p3}</p>
    </div>
  );
}
