import SectionHeader from "./ui/SectionHeader";
import Reveal from "./ui/Reveal";
import SplitWords from "./ui/SplitWords";
import FlipCard from "./ui/FlipCard";
import InlineLink from "./ui/InlineLink";
import Container from "./ui/Container";
import garagePhoto from "../assets/IMG_2598.jpeg";
import snowboardPhoto from "../assets/snowboard.jpg";
import gradPhoto from "../assets/grad.jpg";

const STATEMENT = [
  { text: "From mechanic, to solar, to now software, my path hasn't exactly been conventional. But learning how and why things work, and " },
  { text: "building", emphasis: true },
  { text: " my own tools with it, is what I love to do." },
];

const CONNECT_LINKS = [
  { href: "mailto:pearcepackman@gmail.com", label: "Email" },
  { href: "https://www.linkedin.com/in/pearce-packman/", label: "LinkedIn ↗︎" },
  { href: "https://github.com/pearcepackman", label: "GitHub ↗︎" },
  { href: "/websiteResume.pdf", label: "Resume ↗︎", newTab: true },
];

const TILES = [
  {
    id: "mechanic",
    src: garagePhoto,
    alt: "Pearce working on a solar panel installation, before he wrote code",
    tag: "Before the code",
    frontTitle: "Mechanic & construction",
    frontDesc: "Where the work ethic came from.",
    backGroups: [
      {
        h: "Mechanic",
        p: "Honestly I just wanted to know how cars actually worked so I could fix my own someday. Skipped college right out of high school and became a mechanic for about a year instead. Nothing glamorous, mostly oil changes and brake jobs, but I learned a ton just from being under the hood every day.",
      },
      {
        h: "Solar & construction",
        p: "After that I got into solar. College still didn't feel right for me and this seemed like a good way to actually learn something with my hands. Ran wire, installed panels, spent a lot of time on roofs and job sites, even traveled for some of it. Solid experience, I just figured out pretty quick it wasn't going to be my long term thing.",
      },
    ],
  },
  {
    id: "snowboard",
    src: snowboardPhoto,
    alt: "Pearce snowboarding",
    tag: "Off the clock",
    frontTitle: "Snowboarding",
    frontDesc: "Usually outside when I'm not building something.",
    backGroups: [
      {
        h: "Snowboarding",
        p: "Genuinely one of my favorite things to do, and a good excuse to get outside and off a screen for a few hours.",
      },
      {
        h: "Also into",
        p: "I've been going to the gym for about 6 years now, it's just part of the routine at this point. Outside of that I like building PCs, gaming, playing guitar, and messing around with my cars whenever I get the free time.",
      },
    ],
  },
  {
    id: "grad",
    src: gradPhoto,
    alt: "Pearce at his college graduation",
    tag: "Where I'm at now",
    frontTitle: "Shipping software",
    frontDesc: "Building production software at Occams Group.",
    backGroups: [
      {
        h: "Occams Group",
        p: "Sole developer building production software at Occams Group, spanning architecture, cloud infrastructure, and AI feature development. I designed and shipped a full-stack platform now used daily across the company, backed by 680+ automated tests and a real CI/CD pipeline with an enforced code quality gate. I built 10+ AI-driven features through a governed API layer with cost tracking and security safeguards in place, and I provisioned and manage the Azure infrastructure it all runs on. My testing and CI/CD approach got picked up by the CTO as a model for how the rest of the team works. I also built a separate contact enrichment platform and worked on the company website. I've operated with full architectural autonomy from day one and present progress directly to C-suite leadership.",
      },
      {
        h: "DAMS Lab",
        p: "I'm also part of DAMS Lab at UMBC, working on two projects there. One's an indoor navigation app using BLE beacons, the other's an IoT curriculum we're putting together for a course launching in 2027. School's down in the Education section if you want the full rundown.",
      },
    ],
  },
];

export default function Profile() {
  return (
    <section id="about" className="border-t border-line py-24 md:py-[110px]">
      <Container>
        <SectionHeader number="01" label="Profile" />

        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-[1.5fr_1fr] md:gap-20">
          <SplitWords
            parts={STATEMENT}
            className="font-serif text-[length:var(--text-statement)] font-normal leading-[1.18] tracking-[-0.02em]"
          />

          <div>
            <Reveal delay={0.1} as="div" className="pt-2 text-base leading-[1.85] text-text-2 [&>p+p]:mt-4">
              <p>
                I'm a CS student at UMBC, graduating December 2026. Before I wrote code, I was a mechanic and did construction work. I bring that same work ethic and mentality to software.
              </p>
              <p>
                Most of my work has been full-stack development, with some embedded and IoT work through the DAMS Lab, and now I'm building production software at Occams Group. I love putting together end-to-end systems, and even implementing hardware into my projects as well.
              </p>
            </Reveal>

            <Reveal delay={0.2} className="mt-8 flex flex-wrap gap-x-6 gap-y-3 border-t border-line pt-6">
              {CONNECT_LINKS.map((l) => (
                <InlineLink key={l.href} {...l} />
              ))}
            </Reveal>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3 md:mt-24">
          {TILES.map((t, i) => (
            <FlipCard
              key={t.id}
              src={t.src}
              alt={t.alt}
              tag={t.tag}
              frontTitle={t.frontTitle}
              frontDesc={t.frontDesc}
              backGroups={t.backGroups}
              delay={i * 0.1}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
