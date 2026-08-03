import { useEffect, useState } from "react";

function getSystemTheme() {
  if (typeof window === "undefined") return "dark";
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

// Defaults to the browser/OS color-scheme preference. Once the user explicitly toggles,
// that choice is persisted in localStorage and wins from then on. Until they do, the site
// keeps following the system preference live (e.g. if their OS auto-switches at sunset).
export function useTheme() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "dark";
    return localStorage.getItem("theme") || getSystemTheme();
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    if (localStorage.getItem("theme")) return; // user already made an explicit choice
    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    function onChange(e) {
      setTheme(e.matches ? "dark" : "light");
    }
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  function toggle() {
    setTheme((t) => {
      const next = t === "dark" ? "light" : "dark";
      localStorage.setItem("theme", next);
      return next;
    });
  }

  return { theme, toggle };
}
