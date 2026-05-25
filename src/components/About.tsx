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
  return (
    <div className="space-y-4 text-brand-text-muted">
      <p>
        I&apos;m a full stack engineer who loves building tools that make
        everyday life a little smoother. My focus is on{" "}
        <InlineLink href="https://anthropic.com">AI-powered products</InlineLink>{" "}
        — the kind that feel genuinely useful rather than just technically
        impressive.
      </p>
      <p>
        Right now I&apos;m building{" "}
        <InlineLink href="https://lovely-shelf.vercel.app">
          Love My Shelf
        </InlineLink>
        , a personal tool that lets you photograph a book cover and have it
        instantly catalogued in Notion via Claude&apos;s vision API. It started
        as a weekend project for my own overflowing library and turned into
        something I use every week.
      </p>
      <p>
        I care about clean interfaces, fast iteration, and writing code that
        future-me won&apos;t dread opening. Outside of work you&apos;ll find me
        at a local bookshop, hunting for good coffee, or sketching out the next
        tool I wish existed.
      </p>
    </div>
  );
}
