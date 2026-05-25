import { Sidebar } from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-7xl px-6 md:px-12 lg:px-24">
      <div className="lg:flex lg:gap-4">
        <Sidebar />
        <main className="pt-24 lg:w-1/2 lg:py-24">
          <section id="about" className="mb-16 scroll-mt-16">
            <h2 className="mb-4 text-sm font-bold uppercase tracking-widest text-brand-accent">
              About
            </h2>
            <p className="text-brand-text-muted">About content coming soon…</p>
          </section>

          <section id="experience" className="mb-16 scroll-mt-16">
            <h2 className="mb-4 text-sm font-bold uppercase tracking-widest text-brand-accent">
              Experience
            </h2>
            <p className="text-brand-text-muted">Experience content coming soon…</p>
          </section>

          <section id="projects" className="mb-16 scroll-mt-16">
            <h2 className="mb-4 text-sm font-bold uppercase tracking-widest text-brand-accent">
              Projects
            </h2>
            <p className="text-brand-text-muted">Projects content coming soon…</p>
          </section>

          <section id="blog" className="mb-16 scroll-mt-16">
            <h2 className="mb-4 text-sm font-bold uppercase tracking-widest text-brand-accent">
              Blog
            </h2>
            <p className="text-brand-text-muted">Coming soon ✍️</p>
          </section>
        </main>
      </div>
    </div>
  );
}
