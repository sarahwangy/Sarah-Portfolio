import { GitFork, Mail, Briefcase, X } from "lucide-react";

const links = [
  { href: process.env.NEXT_PUBLIC_GITHUB_URL!, label: "GitHub", Icon: GitFork },
  { href: process.env.NEXT_PUBLIC_LINKEDIN_URL!, label: "LinkedIn", Icon: Briefcase },
  { href: `mailto:${process.env.NEXT_PUBLIC_EMAIL}`, label: "Email", Icon: Mail },
  { href: process.env.NEXT_PUBLIC_TWITTER_URL!, label: "X / Twitter", Icon: X },
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
