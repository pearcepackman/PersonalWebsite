import React from "react";
import App from "./App.jsx";

// Runs once in Node at `vite build` time (see vite-prerender-plugin in vite.config.js), not
// in the browser — its output gets baked directly into dist/index.html's #root so crawlers
// that don't execute JS (most AI crawlers, some SEO tools) see real content instead of an
// empty div. src/index.jsx then hydrates onto this markup on the client rather than
// re-rendering from scratch. index.html's <title>/meta tags are already static and correct,
// so there's no need to also return a `head` override here — just the rendered HTML.
//
// react-dom/server is dynamically imported here, not statically at the top of the file —
// per vite-prerender-plugin's own documented guidance, a static import of anything
// server-only causes Vite's bundler to pull it into the client-facing bundle too, since it
// can't tell "shared code both entries need" from "code only the prerender pass needs".
// Confirmed via Lighthouse this exact mistake resulted in a 327KB chunk (react-dom/server's
// full renderToString engine, bigger than the entire real app bundle) being shipped to and
// executed by every visitor's browser for zero benefit — the dominant cause of the site-wide
// load-time lag this was chasing, not the animation code.
export async function prerender() {
  const { renderToString } = await import("react-dom/server");
  const html = renderToString(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );

  return { html };
}
