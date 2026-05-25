export function Sidebar() {
  return (
    <aside className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-brand-text sm:text-5xl">
          Sarah Wang
        </h1>
        <h2 className="mt-3 text-xl font-medium text-brand-text">
          Full Stack Engineer
        </h2>
        <p className="mt-4 max-w-xs leading-normal text-brand-text-muted">
          I build warm, useful AI-powered personal tools.
        </p>
      </div>
    </aside>
  );
}
