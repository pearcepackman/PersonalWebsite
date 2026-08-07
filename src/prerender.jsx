import React from "react";
import { renderToString } from "react-dom/server";
import App from "./App.jsx";

// Runs once in Node at `vite build` time (see vite-prerender-plugin in vite.config.js), not
// in the browser — its output gets baked directly into dist/index.html's #root so crawlers
// that don't execute JS (most AI crawlers, some SEO tools) see real content instead of an
// empty div. src/index.jsx then hydrates onto this markup on the client rather than
// re-rendering from scratch. index.html's <title>/meta tags are already static and correct,
// so there's no need to also return a `head` override here — just the rendered HTML.
export async function prerender() {
  const html = renderToString(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );

  return { html };
}
