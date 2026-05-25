export function Blog() {
  return (
    <div className="space-y-4">
      <p className="text-brand-text-muted">
        I write about AI, building personal tools, and things I find interesting.
      </p>
      <a
        href="https://medium.com/@sarahwang9"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm font-medium text-brand-accent transition-colors hover:text-brand-text"
      >
        Read on Medium →
      </a>
    </div>
  );
}
