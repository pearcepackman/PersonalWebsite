import SectionHeader from "./ui/SectionHeader";
import Reveal from "./ui/Reveal";
import Container from "./ui/Container";

const ENTRIES = [
  {
    id: "occams",
    year: "May 2026 - Present",
    org: "Occams Group",
    href: "https://www.occamsgroup.com/",
    loc: "Software Engineer Intern",
    headline: "Sole developer on two live production systems.",
    bullets: [
      "Built and shipped OccamsRecruit, an AI-powered ATS that's live and in daily use, the team's evaluated it as better than the Zoho CRM we used before, at a fraction of the cost",
      "Built AI features like candidate scoring, resume parsing, and interview question generation with the Claude API, plus autonomous LinkedIn sourcing through a Manus AI agent",
      "Wrote 523 automated tests (Jest, Supertest, Playwright E2E) and set up a full CI/CD pipeline with branch protection",
      "Set up authentication with Microsoft SSO and Azure AD, wired in the Microsoft Graph API for email and calendar workflows, and built a homegrown observability and error-monitoring system",
      "Built OccamsEnrichment, a separate contact enrichment platform, processed 480+ bulk contact enrichments with it, and rebuilt the company website",
      "Worked with our CTO to bring those same testing and CI/CD practices to the rest of the team, and presented progress directly to C-suite throughout, all with full architectural autonomy from day one",
    ],
    tags: "React · Node.js · TypeScript · PostgreSQL · Prisma · Azure · Microsoft Graph API · Azure AD/SSO · Claude API · Manus API · Jest · Supertest · Playwright · GitHub Actions · CI/CD",
  },
  {
    id: "dams",
    year: "June 2025 - Present",
    org: "DAMS Lab",
    href: "https://damslabumbc.github.io/",
    loc: "UMBC · Research Assistant",
    headline: "Indoor navigation, built to respect privacy.",
    bullets: [
      "Built an indoor navigation app using Bluetooth beacons to provide real-time positioning and directions",
      "Implemented BLE beacon detection including signal processing and device ranging",
      "Designed and implemented the pathfinding algorithm for multiple floors",
      "Designed and developed frontend UI components for live user position, pathfinding, and directions",
      "Developing an IoT hardware curriculum for the SPACES course launching in 2027, including embedded systems guides and tutorials",
      "Presented at three UMBC research days, with live demos for faculty and stakeholders",
    ],
    tags: "React Native · BLE · JavaScript · Expo · Pathfinding · IoT",
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
