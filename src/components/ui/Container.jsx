export default function Container({ children, className = "" }) {
  return <div className={`mx-auto max-w-[1140px] px-6 md:px-12 ${className}`}>{children}</div>;
}
