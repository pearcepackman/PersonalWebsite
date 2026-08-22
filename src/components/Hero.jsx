import Reveal from "./ui/Reveal";
import SplitChars from "./ui/SplitChars";
import Container from "./ui/Container";

export default function Hero() {
  return (
    <header id="hero" className="pt-[90px] pb-[60px] md:pt-[150px] md:pb-[110px]">
      <Container>
        <Reveal onMount className="mb-9 flex items-center gap-[14px] font-mono text-xs tracking-[0.16em] text-accent md:mb-[52px]">
          <span>Software Engineer, Baltimore / DMV</span>
          <span className="h-px max-w-[70px] flex-1 bg-line-2" />
        </Reveal>

        <h1 className="font-serif text-[length:var(--text-hero)] font-normal leading-[0.9] tracking-[-0.038em]">
          <SplitChars onMount text="Pearce" delayStart={0.15} />
          <span className="block text-text-2">
            <SplitChars onMount text="Packman" delayStart={0.15 + 6 * 0.025 + 0.08} />
          </span>
        </h1>

        <Reveal onMount delay={0.2} as="p" className="mt-10 max-w-[40ch] text-lg leading-[1.5] text-text-2 md:mt-[72px] md:text-[23px]">
          Sole developer across four shipped production systems, spanning full-stack development, cloud infrastructure, and AI feature integration. CS student at UMBC, graduating December 2026. I worked as a <b className="font-semibold text-text">mechanic and in construction</b> before college, went to school for business and finance first, then switched to computer science after a year and never looked back.
        </Reveal>
      </Container>
    </header>
  );
}
