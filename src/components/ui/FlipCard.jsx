import { useState } from "react";
import { motion } from "framer-motion";

const EASE = [0.19, 1, 0.22, 1];

// Click-to-flip photo card: front is a duotone photo (grayscale + accent mix-blend-color
// wash that resolves to full color on hover), back is personal-story text. A real 3D CSS
// flip (perspective + rotateY + backface-hidden) rather than a crossfade, so it reads as
// turning the card over.
export default function FlipCard({ src, alt, tag, frontTitle, frontDesc, backGroups, delay = 0, className = "" }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2, margin: "0px 0px -15% 0px" }}
      transition={{ duration: 0.8, delay, ease: EASE }}
      className={className}
    >
      <div
        role="button"
        tabIndex={0}
        aria-pressed={flipped}
        aria-label={`${frontTitle}. Click to flip for more.`}
        onClick={() => setFlipped((f) => !f)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setFlipped((f) => !f);
          }
        }}
        className="group relative aspect-[4/5] cursor-pointer [-webkit-perspective:1400px] [perspective:1400px] transition-[translate,box-shadow] duration-[450ms] ease-[cubic-bezier(0.19,1,0.22,1)] hover:-translate-y-2 hover:shadow-[0_18px_34px_-14px_rgba(0,0,0,0.45)]"
      >
        <div
          className="relative h-full w-full [-webkit-transform-style:preserve-3d] [transform-style:preserve-3d] transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]"
          style={{ transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
        >
          {/* front — overflow lives on the inner wrapper, not the backface-hidden element
              itself: Safari breaks backface-visibility on an element that also has
              overflow: hidden/auto set directly on it, leaving both faces rendered. That fix
              still isn't fully reliable on iOS Safari, so opacity is also cross-faded in sync
              with the rotation below (transitionDelay), timed so both faces are already
              invisible at the ~90°/edge-on point regardless of whether backface-visibility
              actually works — a belt-and-suspenders fix for a genuinely stubborn Safari bug. */}
          <div
            className="absolute inset-0 transition-opacity duration-300 ease-out [-webkit-backface-visibility:hidden] [backface-visibility:hidden]"
            style={{ opacity: flipped ? 0 : 1, transitionDelay: flipped ? "0ms" : "300ms", pointerEvents: flipped ? "none" : "auto" }}
          >
            <div className="relative h-full w-full overflow-hidden">
              <img
                src={src}
                alt={alt}
                className="h-full w-full object-cover grayscale contrast-[0.92] brightness-[1.02] saturate-[1.1] transition-[filter] duration-700 ease-out group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100 group-hover:saturate-100"
              />
              <div className="pointer-events-none absolute inset-0 bg-accent opacity-55 mix-blend-color transition-opacity duration-700 ease-out group-hover:opacity-0" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/95 via-bg/15 to-transparent" />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute right-3 top-3 flex h-8 w-8 items-center justify-center border border-line bg-bg/70 text-text-2 backdrop-blur-sm transition-all duration-[450ms] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:rotate-180 group-hover:border-accent group-hover:text-accent"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 12a9 9 0 0 1 15-6.7" />
                  <path d="M21 12a9 9 0 0 1-15 6.7" />
                  <path d="M18 3v5h-5" />
                  <path d="M6 21v-5h5" />
                </svg>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5">
                <div className="font-mono text-[11px] tracking-[0.06em] text-accent">{tag}</div>
                <div className="mt-1 font-serif text-lg text-text">{frontTitle}</div>
                <p className="mt-1 text-[13px] text-text-2">{frontDesc}</p>
                <div className="mt-2 font-mono text-[10px] tracking-[0.04em] text-muted">Click to flip →︎</div>
              </div>
            </div>
          </div>

          {/* back — same overflow/backface split and opacity cross-fade as the front */}
          <div
            className="absolute inset-0 border border-line bg-bg-2 transition-opacity duration-300 ease-out [-webkit-backface-visibility:hidden] [backface-visibility:hidden]"
            style={{
              transform: "rotateY(180deg)",
              opacity: flipped ? 1 : 0,
              transitionDelay: flipped ? "300ms" : "0ms",
              pointerEvents: flipped ? "auto" : "none",
            }}
          >
            <div className="h-full w-full overflow-y-auto p-5">
              <div className="font-mono text-[11px] tracking-[0.06em] text-accent">{tag}</div>
              {backGroups.map((g) => (
                <div key={g.h} className="mt-4">
                  <div className="font-serif text-base text-text">{g.h}</div>
                  <p className="mt-1 text-[13px] leading-[1.6] text-text-2">{g.p}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
