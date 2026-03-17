import type { Metadata } from "next";
import Image from "next/image";
import star from "../../../public/StarHeader.svg";
import {
  Globe,
  Linkedin,
  Github,
  GraduationCap,
  PenLine,
  Microscope,
  Mail,
  ChevronRight,
  type LucideIcon,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Gabriel Gutierrez | Links",
  description:
    "All of Gabriel Gutierrez's important links in one place — portfolio, research, social profiles, and more.",
};

const links: { label: string; href: string; icon: LucideIcon }[] = [
  {
    label: "Portfolio",
    href: "/",
    icon: Globe,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/gabrielbgutierrez/",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/GabrielBG0",
    icon: Github,
  },
  {
    label: "Google Scholar",
    href: "https://scholar.google.com/citations?user=g6yM01cAAAAJ",
    icon: GraduationCap,
  },
  {
    label: "Research Blog",
    href: "https://www.gabrielbg.dev/",
    icon: PenLine,
  },
  {
    label: "Minerva Framework",
    href: "https://github.com/discovery-unicamp/Minerva",
    icon: Microscope,
  },
  {
    label: "Email",
    href: "mailto:gabriel.gutierrez@ic.unicmap.br",
    icon: Mail,
  },
];

export default function LinksPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-5 sm:px-4 py-10 sm:py-12 relative overflow-hidden" style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>
      {/* Animated background orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[420px] h-[420px] rounded-full bg-purple-600/10 blur-[120px] animate-pulse" />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[140px] animate-pulse [animation-delay:2s]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-indigo-500/5 blur-[100px] animate-pulse [animation-delay:4s]" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-[90%] sm:max-w-md">
        {/* Avatar / Logo */}
        <div className="mb-6 relative">
          <div className="w-24 h-24 rounded-full border-2 border-white/20 bg-bg-secondary flex items-center justify-center shadow-[0_0_40px_rgba(139,92,246,0.15)]">
            <Image
              src={star}
              alt="logo"
              className="w-12 h-12"
              priority
            />
          </div>
          {/* Glow ring */}
          <div className="absolute inset-0 w-24 h-24 rounded-full border border-white/5 animate-ping [animation-duration:3s]" />
        </div>

        {/* Name */}
        <h1 className="font-header text-3xl sm:text-4xl tracking-wider text-center mb-2">
          Gabriel Gutierrez
        </h1>

        {/* Tagline */}
        <p className="font-titles text-sm sm:text-base text-white/50 tracking-widest uppercase text-center mb-10">
          Weakly Supervised Semantic Segmentation
        </p>

        {/* Links */}
        <div className="flex flex-col gap-4 w-full">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("/") ? "_self" : "_blank"}
              rel={link.href.startsWith("/") ? undefined : "noopener noreferrer"}
              id={`link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
              className="group relative flex items-center gap-3 sm:gap-4 w-full px-4 sm:px-6 py-3.5 sm:py-4 rounded-2xl
                         bg-white/[0.04] border border-white/[0.08]
                         backdrop-blur-md
                         transition-all duration-300 ease-out
                         hover:bg-white/[0.08] hover:border-white/[0.16]
                         hover:shadow-[0_0_30px_rgba(139,92,246,0.1)]
                         hover:scale-[1.02]
                         active:scale-[0.98]"
            >
              {/* Icon */}
              <link.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white/70 transition-transform duration-300 group-hover:scale-110 group-hover:text-white" strokeWidth={1.5} />

              {/* Label */}
              <span className="font-titles text-base sm:text-lg tracking-wide text-white/90 group-hover:text-white transition-colors duration-300">
                {link.label}
              </span>

              {/* Arrow */}
              <ChevronRight className="ml-auto w-4 h-4 text-white/30 group-hover:text-white/70 transition-all duration-300 group-hover:translate-x-1" strokeWidth={1.5} />

              {/* Hover shimmer */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-r from-transparent via-white/[0.03] to-transparent" />
            </a>
          ))}
        </div>

        {/* Footer */}
        <p className="mt-12 text-xs text-white/25 font-titles tracking-wider">
          © {new Date().getFullYear()} — Gabriel Gutierrez
        </p>
      </div>
    </main>
  );
}
