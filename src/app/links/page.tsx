import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gabriel Gutierrez | Links",
  description:
    "All of Gabriel Gutierrez's links: portfolio, research, social profiles, and more.",
};

const StarSVG = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 74 86"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M36.0384 1.36948C36.3145 0.402057 37.6855 0.402061 37.9616 1.36949L45.3286 27.1834C45.4767 27.7024 46.0098 28.0102 46.5333 27.879L72.5723 21.352C73.5481 21.1074 74.2337 22.2947 73.5339 23.0175L54.8619 42.3044C54.4865 42.6922 54.4865 43.3078 54.8619 43.6956L73.5339 62.9825C74.2337 63.7053 73.5481 64.8926 72.5723 64.648L46.5333 58.121C46.0098 57.9898 45.4767 58.2976 45.3286 58.8166L37.9616 84.6305C37.6855 85.5979 36.3145 85.5979 36.0384 84.6305L28.6714 58.8166C28.5233 58.2976 27.9902 57.9898 27.4667 58.121L1.42772 64.648C0.451859 64.8926 -0.233654 63.7053 0.466117 62.9825L19.1381 43.6956C19.5135 43.3078 19.5135 42.6922 19.1381 42.3044L0.466114 23.0175C-0.233657 22.2947 0.451862 21.1074 1.42772 21.352L27.4667 27.879C27.9902 28.0102 28.5233 27.7024 28.6714 27.1834L36.0384 1.36948Z"
      fill="currentColor"
    />
  </svg>
);

const links: { label: string; value: string; href: string }[] = [
  {
    label: "Email",
    value: "gabriel.gutierrez@ic.unicamp.br",
    href: "mailto:gabriel.gutierrez@ic.unicamp.br",
  },
  {
    label: "Portfolio",
    value: "gabrielbg.dev",
    href: "/",
  },
  {
    label: "LinkedIn",
    value: "gabrielbgutierrez",
    href: "https://www.linkedin.com/in/gabrielbgutierrez/",
  },
  {
    label: "GitHub",
    value: "GabrielBG0",
    href: "https://github.com/GabrielBG0",
  },
  {
    label: "Scholar",
    value: "Google Scholar Profile",
    href: "https://scholar.google.com/citations?user=g6yM01cAAAAJ",
  },
  {
    label: "Blog",
    value: "gabrielbg.dev",
    href: "https://www.gabrielbg.dev/",
  },
  {
    label: "Minerva",
    value: "discovery-unicamp/Minerva",
    href: "https://github.com/discovery-unicamp/Minerva",
  },
];

export default function LinksPage() {
  return (
    <main className="links-page">
      <div className="links-card">

        <div className="links-header">
          <div className="links-eyebrow">DWG-002 / Links</div>
          <StarSVG className="links-star" />
          <div>
            <span className="links-name-first">Gabriel</span>
            <span className="links-name-last">Gutierrez</span>
          </div>
        </div>

        <div className="links-subtitle">
          <span>PhD Candidate in Computer Science</span>
          <span>Unicamp · Campinas, BR</span>
        </div>

        <div className="links-rows">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("/") || link.href.startsWith("mailto") ? "_self" : "_blank"}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="contact-link-row"
            >
              <span className="cl-label">{link.label}</span>
              <span className="cl-value">{link.value}</span>
              <span className="cl-arrow">→</span>
            </a>
          ))}
        </div>

        <div className="links-footer-bar">
          <StarSVG className="links-footer-star" />
          <span>gabrielbg.dev · {new Date().getFullYear()}</span>
        </div>

      </div>
    </main>
  );
}
