import SectionHeader from "./ui/SectionHeader";
import Reveal from "./ui/Reveal";
import Container from "./ui/Container";

const ENTRIES = [
  {
    id: "umbc",
    year: "August 2024 - December 2026",
    org: "University of Maryland, Baltimore County",
    href: "https://www.umbc.edu/",
    loc: "B.S. Computer Science",
    bullets: [
      "B.S. Computer Science, expected December 2026",
      "GPA: 3.60",
      "Extra curricular: UMBC Racing Team",
    ],
    tags: "Software Engineering · Operating Systems · Computer Security · Data Structures · Algorithms",
  },
  {
    id: "carroll",
    year: "August 2022 - May 2024",
    org: "Carroll Community College",
    href: "https://www.carrollcc.edu/",
    loc: "Associate's Degree",
    bullets: [
      "Associate's Degree in Arts and Sciences",
      "GPA: 3.83 (Magna Cum Laude)",
      "Extra curricular: PTK Honor's Society",
    ],
    tags: "Python · C++",
  },
];

export default function Education() {
  return (
    <section id="education" className="border-t border-line py-24 md:py-[110px]">
      <Container>
        <SectionHeader number="05" label="Education" />

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
                <div className="mt-2 text-[13px] text-muted">{e.loc}</div>
              </div>
              <div>
                <h3 className="mb-[18px] font-serif text-[26px] font-normal leading-[1.15] tracking-[-0.015em] md:text-[31px]">
                  <a
                    href={e.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-text transition-colors duration-[450ms] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:text-accent"
                  >
                    {e.org}{" "}
                    <span className="inline-block align-super text-[20px] opacity-60 transition-transform duration-[450ms] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-x-1 group-hover:-translate-y-1">↗︎</span>
                  </a>
                </h3>
                <ul className="space-y-2">
                  {e.bullets.map((b) => (
                    <li key={b} className="relative max-w-[62ch] pl-4 text-base leading-[1.7] text-text-2 before:absolute before:left-0 before:text-accent before:content-['–']">
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
