import SectionHeader from "./ui/SectionHeader";
import Reveal from "./ui/Reveal";
import Container from "./ui/Container";

const ROWS = [
  { k: "Languages", v: "TypeScript · C++ · C · JavaScript · Python · SQL · Bash" },
  { k: "Frontend", v: "React · React Native · Qt · HTML · CSS · Tailwind CSS" },
  { k: "Backend", v: "Node.js · Express.js · REST APIs · PostgreSQL · Prisma · SQLite · Zod" },
  { k: "Cloud, DevOps & Testing", v: "Azure · Docker · GitHub Actions · CI/CD · ESLint · Neon · Jest · Supertest · Playwright" },
  { k: "AI Tools", v: "Claude API · Claude Code · Manus API" },
  { k: "Auth & Integrations", v: "Microsoft Graph API · Azure AD / SSO · JWT" },
  { k: "Embedded & Systems", v: "ESP32 · IoT · BLE · MQTT · Sensor I/O" },
  { k: "Tools & OS", v: "Git · GitHub · Jira · Linux · Windows" },
];

export default function Index() {
  return (
    <section id="stack" className="border-t border-line py-24 md:py-[110px]">
      <Container>
        <SectionHeader number="04" label="Index" />

        <div>
          {ROWS.map((row, i) => (
            <Reveal
              key={row.k}
              delay={i * 0.04}
              className={`group grid grid-cols-1 items-baseline gap-2 border-b border-line py-6 transition-transform duration-[450ms] ease-[cubic-bezier(0.19,1,0.22,1)] hover:translate-x-[14px] md:grid-cols-[200px_1fr] md:gap-7 ${
                i === 0 ? "border-t border-t-line-2" : ""
              }`}
            >
              <span className="font-serif text-[25px] font-normal transition-colors duration-[450ms] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:text-accent">
                {row.k}
              </span>
              <span className="text-[15px] text-text-2">{row.v}</span>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
