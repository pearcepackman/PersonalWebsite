import SectionHeader from "./ui/SectionHeader";
import Reveal from "./ui/Reveal";
import Container from "./ui/Container";

const ENTRIES = [
  {
    id: "occams",
    year: "May 2026 - Present",
    org: "Occams Group",
    href: "https://www.occamsgroup.com/",
    loc: "Software Engineer",
    headline: "Sole developer on four live production systems.",
    bullets: [
      "Designed and built a full-stack AI-powered platform, on Azure infrastructure I provisioned and manage end to end",
      "Built 10+ AI-driven features (candidate scoring, resume parsing, autonomous LinkedIn sourcing via an AI agent) through a governed Claude API layer with cost tracking, rate limiting, and prompt-injection defenses",
      "Implemented 680+ automated tests (Jest, Supertest, Playwright E2E) behind a trunk-based CI/CD pipeline with an enforced pre-push quality gate",
      "Testing and CI/CD approach recognized by the CTO as a model for engineering practices, sparking discussion of adopting it more broadly",
      "Set up Microsoft SSO (Azure AD) and Graph API integration for email/calendar workflows, plus a homegrown observability system and an in-app feedback and help center the team uses daily",
      "Sole developer across four shipped full-stack production systems, including a contact enrichment platform and the company's public website, presenting progress directly to C-suite",
      "Independently built a separate contact enrichment platform (TypeScript, PostgreSQL, Prisma), processing hundreds of bulk contact enrichments rated by the team as far more accurate than their prior tooling",
    ],
    tags: "React · Node.js · TypeScript · PostgreSQL · Azure · Docker · GitHub Actions · Claude API · Claude Code · Jest · Supertest · Playwright · Microsoft Graph API · Azure AD/SSO",
  },
  {
    id: "dams",
    year: "June 2025 - Present",
    org: "DAMS Lab",
    href: "https://damslabumbc.github.io/",
    loc: "UMBC · Research Assistant",
    headline: "Indoor navigation, built to respect privacy.",
    bullets: [
      "Built a real-time indoor navigation system using 20+ Bluetooth beacons across 3 floors of a UMBC building, deployed via TestFlight",
      "Owned the hardware layer end to end (beacon installation, signal processing, device ranging) and implemented an A* pathfinding algorithm for real-time multi-floor navigation",
      "Presented at three UMBC research days, including a live demo for the CSEE department chair and research faculty",
      "Developing IoT hardware/firmware curriculum for SPACES, a new UMBC course launching 2027",
    ],
    tags: "React Native · Bluetooth Low Energy · Signal Processing · Pathfinding Algorithms (A*) · ESP32 · IoT",
  },
  {
    id: "hackhounds",
    year: "April 2025",
    org: "HackHounds 2025",
    href: "https://devpost.com/software/d-kh8jf4",
    loc: "Hackathon Winner",
    headline: "Best Computer Vision, built in 24 hours.",
    bullets: [
      "Awarded Best Computer Vision for developing a goal-tracking app using image recognition to monitor user progress",
      "Designed a clean, user-friendly UI in React Native",
      "Learned React Native UI in 24 hours and collaborated with a team under tight deadlines",
    ],
    tags: "React Native · TypeScript · Computer Vision · Expo",
  },
];

export default function Work() {
  return (
    <section id="work" className="border-t border-line py-24 md:py-[110px]">
      <Container>
        <SectionHeader number="02" label="Work" />

        <div>
          {ENTRIES.map((e, i) => (
            <Reveal
              key={e.id}
              delay={i * 0.05}
              className={`group grid grid-cols-1 gap-8 py-10 transition-transform duration-[450ms] ease-[cubic-bezier(0.19,1,0.22,1)] hover:translate-x-3 md:grid-cols-[220px_1fr] md:gap-[60px] md:py-14 ${
                i < ENTRIES.length - 1 ? "border-b border-line" : ""
              }`}
            >
              <div>
                <div className="mb-3 font-mono text-xs text-accent">{e.year}</div>
                <a
                  href={e.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block font-serif text-[27px] font-normal leading-[1.05] text-text transition-colors duration-[450ms] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:text-accent"
                >
                  {e.org}{" "}
                  <span className="inline-block align-super text-[18px] opacity-60 transition-transform duration-[450ms] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-x-1 group-hover:-translate-y-1">↗︎</span>
                </a>
                <div className="mt-2 text-[13px] text-muted">{e.loc}</div>
              </div>
              <div>
                <h3 className="mb-[18px] font-serif text-[26px] font-normal leading-[1.15] tracking-[-0.015em] md:text-[31px]">
                  {e.headline}
                </h3>
                <ul className="space-y-2">
                  {e.bullets.map((b) => (
                    <li key={b} className="max-w-[62ch] pl-4 text-base leading-[1.7] text-text-2 relative before:absolute before:left-0 before:content-['–'] before:text-accent">
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="mt-[22px] font-mono text-[11px] tracking-[0.05em] text-muted">{e.tags}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
