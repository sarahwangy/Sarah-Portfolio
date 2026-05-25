import { GitFork, Mail, Briefcase, X } from "lucide-react";

const links = [
  { href: "https://github.com/sarahwangy", label: "GitHub", Icon: GitFork },
  { href: "https://linkedin.com/in/sarahwangy", label: "LinkedIn", Icon: Briefcase },
  { href: "mailto:sarahwangdk@gmail.com", label: "Email", Icon: Mail },
  { href: "https://x.com/sarahwangy", label: "X / Twitter", Icon: X },
];

export function SocialLinks() {
  return (
    <ul className="mt-8 flex items-center gap-5 lg:mt-0">
      {links.map(({ href, label, Icon }) => (
        <li key={label}>
          <a
            href={href}
            target={href.startsWith("mailto") ? undefined : "_blank"}
            rel="noopener noreferrer"
            aria-label={label}
            className="text-brand-text-muted transition-colors duration-200 hover:text-brand-accent"
          >
            <Icon size={20} />
          </a>
        </li>
      ))}
    </ul>
  );
}
