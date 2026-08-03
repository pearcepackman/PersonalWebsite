// Shared underline-wipe link treatment used anywhere a plain outbound/contact link
// shows up (Profile, Footer). `newTab` forces target=_blank for same-origin links
// (e.g. the resume PDF) that still need to open in a new tab.
export default function InlineLink({ href, label, small, newTab }) {
  const openInNewTab = newTab || href.startsWith("http");
  return (
    <a
      href={href}
      target={openInNewTab ? "_blank" : undefined}
      rel={openInNewTab ? "noopener noreferrer" : undefined}
      className={`group relative ${small ? "text-[13px] text-text-2" : "text-[15px] text-text"}`}
    >
      {label}
      <span className="absolute -bottom-[3px] left-0 right-full h-px bg-accent transition-[right] duration-[350ms] ease-out group-hover:right-0" />
    </a>
  );
}
