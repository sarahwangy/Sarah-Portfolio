import { Sidebar } from "@/components/Sidebar";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Blog } from "@/components/Blog";
import { FadeIn } from "@/components/FadeIn";

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-6 text-sm font-bold uppercase tracking-widest text-brand-accent">
      {children}
    </h2>
  );
}

export default function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-7xl px-6 md:px-12 lg:px-24">
      <div className="lg:flex lg:gap-4">
        <FadeIn delay={0.1} className="lg:w-1/2 lg:shrink-0"><Sidebar /></FadeIn>
        <main className="pb-24 lg:w-1/2 lg:py-24">
          <FadeIn delay={0.2}>
            <section id="about" className="mb-20 scroll-mt-16">
              <SectionHeading>About</SectionHeading>
              <About />
            </section>
          </FadeIn>

          <FadeIn delay={0.3}>
            <section id="experience" className="mb-20 scroll-mt-16">
              <SectionHeading>Experience</SectionHeading>
              <Experience />
            </section>
          </FadeIn>

          <FadeIn delay={0.4}>
            <section id="projects" className="mb-20 scroll-mt-16">
              <SectionHeading>Projects</SectionHeading>
              <Projects />
            </section>
          </FadeIn>

          <FadeIn delay={0.5}>
            <section id="blog" className="mb-20 scroll-mt-16">
              <SectionHeading>Blog</SectionHeading>
              <Blog />
            </section>
          </FadeIn>
        </main>
      </div>
    </div>
  );
}
