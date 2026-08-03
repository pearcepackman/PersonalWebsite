import Reveal from "./Reveal";

export default function SectionHeader({ number, label }) {
  return (
    <Reveal className="mb-[72px] flex items-baseline gap-[22px]">
      <span className="font-mono text-xs text-accent">{number}</span>
      <h2 className="text-xs font-semibold tracking-[0.26em] text-text-2">{label}</h2>
      <span className="h-px flex-1 bg-line" />
    </Reveal>
  );
}
