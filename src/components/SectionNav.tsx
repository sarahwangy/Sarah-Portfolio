"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "blog", label: "Blog" },
];

export function SectionNav() {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    document.querySelectorAll("section[id]").forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="mt-16 hidden lg:block">
      <ul className="space-y-1">
        {sections.map(({ id, label }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
              }}
              className={`group flex items-center py-3 text-xs font-bold uppercase tracking-widest transition-colors duration-300 ${
                active === id
                  ? "text-brand-text"
                  : "text-brand-text-muted hover:text-brand-text"
              }`}
            >
              <span
                className={`mr-4 h-px bg-current transition-all duration-300 ${
                  active === id
                    ? "w-16"
                    : "w-8 group-hover:w-16"
                }`}
              />
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
