import Reveal from "./ui/Reveal";
import Container from "./ui/Container";
import InlineLink from "./ui/InlineLink";

const CONTACT_LINKS = [
  { href: "mailto:pearcepackman@gmail.com", label: "pearcepackman@gmail.com" },
  { href: "https://github.com/pearcepackman", label: "GitHub ↗" },
  { href: "https://www.linkedin.com/in/pearce-packman/", label: "LinkedIn ↗" },
  { href: "/websiteResume.pdf", label: "Resume ↗", newTab: true },
];

const QUICK_LINKS = [
  { href: "#about", label: "Profile" },
  { href: "#work", label: "Work" },
  { href: "#education", label: "Education" },
  { href: "#projects", label: "Projects" },
  { href: "#stack", label: "Index" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="pb-16 md:pb-24">
      <Container>
        <Reveal className="border-t border-line-2 pt-[26px]">
          <div className="font-serif text-lg text-text">Pearce Packman</div>
          <p className="mt-1 text-[14px] text-text-2">Building systems that bridge hardware and software.</p>

          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
            {QUICK_LINKS.map((l) => (
              <InlineLink key={l.href} {...l} small />
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-baseline justify-between gap-[18px] border-t border-line pt-6">
            <div className="flex flex-wrap gap-x-8 gap-y-3">
              {CONTACT_LINKS.map((l) => (
                <InlineLink key={l.href} {...l} />
              ))}
            </div>
            <span className="font-mono text-[11px] tracking-[0.06em] text-muted">
              © 2026 Pearce Packman · Built with React, Vite &amp; Framer Motion
            </span>
          </div>
        </Reveal>
      </Container>
    </footer>
  );
}
