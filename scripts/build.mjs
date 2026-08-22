#!/usr/bin/env node
// Full production build: (1) build the client app normally via vite.config.js, (2) build
// src/prerender.jsx as a fully separate, throwaway SSR bundle in its own temp directory,
// (3) run that bundle in Node to get the rendered HTML, (4) splice it into dist/index.html's
// #root, (5) delete the temp SSR build.
//
// This replaces vite-prerender-plugin, which had two real, confirmed problems on this
// stack: the build process hung indefinitely after finishing (an explicit process.exit(0)
// at the end of this script, which we fully control, sidesteps that regardless of cause),
// and — worse — it leaked the entire react-dom/server bundle (327KB, bigger than the whole
// real app) into the CLIENT-facing output, shipped to and executed by every visitor's
// browser for zero benefit, even after following the plugin's own documented fix for
// exactly that problem (dynamic-importing react-dom/server instead of a static import).
// Two fully separate Vite builds with separate output directories can't leak into each
// other by construction — the client build never references the SSR build's output at all.
import { build } from "vite";
import { readFile, writeFile, rm } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const ssrOutDir = path.join(root, ".ssr-build");

async function run() {
  console.log("Building client...");
  await build({ root, logLevel: "info" });

  console.log("Building SSR prerender bundle...");
  await build({
    root,
    logLevel: "warn",
    publicDir: false,
    build: {
      ssr: path.join(root, "src/prerender.jsx"),
      outDir: ssrOutDir,
      emptyOutDir: true,
      minify: false,
    },
  });

  console.log("Prerendering...");
  const ssrEntry = path.join(ssrOutDir, "prerender.mjs");
  const { prerender } = await import(`file://${ssrEntry}`);
  const { html } = await prerender();

  const indexPath = path.join(root, "dist/index.html");
  let indexHtml = await readFile(indexPath, "utf-8");
  if (!indexHtml.includes('<div id="root"></div>')) {
    throw new Error('Expected an empty <div id="root"></div> in dist/index.html to inject prerendered HTML into.');
  }
  indexHtml = indexHtml.replace('<div id="root"></div>', `<div id="root">${html}</div>`);
  await writeFile(indexPath, indexHtml);

  await rm(ssrOutDir, { recursive: true, force: true });

  console.log("Prerendered 1 page:\n  /");
}

run()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
