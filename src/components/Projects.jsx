import { useEffect, useRef } from "react";
import SectionHeader from "./ui/SectionHeader";
import Reveal from "./ui/Reveal";
import Container from "./ui/Container";
import { useScrollReveal } from "../hooks/useScrollReveal";
import corepanelDemo from "../assets/projects/corepanel-demo.mp4";
import smarthomeDemo from "../assets/projects/smarthome-demo.mp4";

const PROJECTS = [
  {
    id: "corepanel",
    title: "CorePanel",
    href: "https://github.com/pearcepackman/CorePanel",
    badge: null,
    demo: corepanelDemo,
    desc: "Desktop system monitor built with Qt, visualizing live CPU, GPU, RAM, and disk metrics via real-time charts using LibreHardwareMonitor sensor data.",
    tags: "C++ · C# · Qt · QtCharts · LibreHardwareMonitor",
  },
  {
    id: "smarthome",
    title: "Smart Home Dashboard",
    href: "https://github.com/pearcepackman/Smart-home-dashboard",
    badge: null,
    demo: smarthomeDemo,
    desc: "Full-stack IoT platform using ESP32, Node.js, and React Native to monitor real-time temperature, humidity, gas, and motion data over MQTT.",
    tags: "ESP32 · MQTT · React Native · Node.js · TypeScript",
  },
];

// Autoplay video only once actually scrolled into view, and pauses again once scrolled
// away — not just `autoPlay` on mount. Video decode is real, ongoing CPU/GPU work even
// while muted and even while off-screen; `autoPlay` also makes the browser start fetching
// immediately on page load, competing with the actual critical-path resources (JS, fonts)
// for bandwidth right when it matters most. `preload="none"` means nothing loads at all
// until this component decides to actually play it.
function ProjectVideo({ src }) {
  const videoRef = useRef(null);
  const [observedRef, isHidden] = useScrollReveal({ amount: 0.2, margin: "0px 0px -10% 0px" });

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (isHidden) video.pause();
    else video.play().catch(() => {});
  }, [isHidden]);

  return (
    <div ref={observedRef} className="aspect-[4/3] overflow-hidden border-b border-line bg-bg-2">
      <video
        ref={videoRef}
        src={src}
        loop
        muted
        playsInline
        preload="none"
        aria-hidden="true"
        className="h-full w-full object-contain"
      />
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="border-t border-line py-24 md:py-[110px]">
      <Container>
        <SectionHeader number="03" label="Projects" />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.06} as="a" href={p.href} target="_blank" rel="noopener noreferrer" className="block h-full">
              <div className="group h-full border border-line bg-bg transition-[translate,border-color,background-color,box-shadow] duration-[450ms] ease-[cubic-bezier(0.19,1,0.22,1)] hover:-translate-y-2 hover:border-accent hover:shadow-[0_18px_34px_-16px_rgba(0,0,0,0.4)]">
                {p.demo && <ProjectVideo src={p.demo} />}
                <div className="p-7 transition-colors duration-[450ms] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:bg-bg-2">
                  {p.badge && (
                    <div className="mb-3 font-mono text-[11px] tracking-[0.05em] text-accent">{p.badge}</div>
                  )}
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-serif text-[24px] font-normal leading-[1.1] text-text transition-colors duration-[450ms] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:text-accent">
                      {p.title}
                    </h3>
                    <span className="shrink-0 text-[16px] text-muted transition-transform duration-[450ms] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent">↗︎</span>
                  </div>
                  <p className="mt-3 text-[15px] leading-[1.7] text-text-2">{p.desc}</p>
                  <div className="mt-5 font-mono text-[11px] tracking-[0.05em] text-muted">{p.tags}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
