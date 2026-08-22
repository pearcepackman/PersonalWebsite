import { useEffect, useState } from "react";
import { useTheme } from "../hooks/useTheme";
import Container from "./ui/Container";

const LINKS = [
  { href: "#about", label: "Profile" },
  { href: "#work", label: "Work" },
  { href: "#projects", label: "Projects" },
  { href: "#stack", label: "Index" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

function SunIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" {...props}>
      <circle cx="12" cy="12" r="4.2" />
      <path d="M12 2.5v2.4M12 19.1v2.4M4.6 4.6l1.7 1.7M17.7 17.7l1.7 1.7M2.5 12h2.4M19.1 12h2.4M4.6 19.4l1.7-1.7M17.7 6.3l1.7-1.7" />
    </svg>
  );
}

function MoonIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M20.2 14.6A8.5 8.5 0 1 1 9.4 3.8a6.8 6.8 0 0 0 10.8 10.8Z" />
    </svg>
  );
}

export default function Nav() {
  const { theme, toggle } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  // useTheme defaults to "dark" during prerendering (no window on the server), then
  // immediately resolves the real system/localStorage preference on the client. If this
  // icon renders off `theme` from the very first client render, anyone whose actual
  // preference isn't dark gets a different icon than what was server-rendered — a real
  // hydration mismatch (React error #418), caught via a Lighthouse console-error audit.
  // Staying on the SSR default (Sun, matching the "dark" default) until after mount avoids
  // it: the mismatch only shows up in a normal post-hydration update, never during hydration
  // itself.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <nav className="sticky top-0 z-50 border-b border-line bg-bg/85 backdrop-blur-[14px]">
      <Container className="flex h-[74px] items-center justify-between">
        <a href="#hero" className="flex items-center gap-[11px] text-[15px] font-semibold" onClick={closeMenu}>
          <i className="block h-2 w-2 rounded-full bg-accent" />
          Pearce Packman
        </a>

        <div className="flex items-center gap-10">
          <div className="hidden items-center gap-[28px] lg:flex">
            {LINKS.map((l) => (
              <a key={l.href} href={l.href} className="text-[13px] text-text-2 transition-colors duration-200 hover:text-accent">
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-5">
            <button
              onClick={toggle}
              aria-label={!mounted || theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full text-text-2 transition-[color,background-color,rotate] duration-[450ms] ease-[cubic-bezier(0.19,1,0.22,1)] hover:rotate-12 hover:bg-line/50 hover:text-accent"
            >
              {!mounted || theme === "dark" ? <SunIcon /> : <MoonIcon />}
            </button>

            <button
              className="flex cursor-pointer flex-col gap-[5px] p-1 lg:hidden"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((o) => !o)}
            >
              <span className={`block h-px w-5 bg-text transition-transform duration-200 ${menuOpen ? "translate-y-[6px] rotate-45" : ""}`} />
              <span className={`block h-px w-5 bg-text transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block h-px w-5 bg-text transition-transform duration-200 ${menuOpen ? "-translate-y-[6px] -rotate-45" : ""}`} />
            </button>
          </div>
        </div>
      </Container>

      <div
        className={`overflow-hidden border-t border-line bg-bg transition-[max-height] duration-300 ease-out lg:hidden ${
          menuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        {LINKS.map((l) => (
          <a
            key={l.href}
            href={l.href}
            onClick={closeMenu}
            className="block border-b border-line px-6 py-4 text-sm text-text-2"
          >
            {l.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
