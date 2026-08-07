#!/usr/bin/env node
// `vite build` (with vite-prerender-plugin active) reliably finishes writing dist/ output —
// verified repeatedly, both locally and on Netlify — but the process itself then hangs
// indefinitely instead of exiting, which would otherwise stall/timeout every deploy. Root
// cause wasn't pinned down (likely a lingering handle somewhere in Vite 8's SSR module
// runner or the prerender plugin, which pins a much older Vite as its own dev dependency),
// so this wrapper takes the pragmatic route: watch stdout for the actual success markers,
// then force-exit shortly after output goes idle. If the build fails, no success marker
// ever appears, so this wrapper does nothing and lets the real exit code/hang surface
// normally — it only intervenes on the known-good "finished but won't exit" case.
import { spawn } from "node:child_process";

const child = spawn("npx", ["vite", "build"], { stdio: ["inherit", "pipe", "pipe"] });

let sawSuccess = false;
let idleTimer = null;

function scheduleForceExit() {
  clearTimeout(idleTimer);
  idleTimer = setTimeout(() => {
    if (sawSuccess) {
      child.kill("SIGTERM");
      process.exit(0);
    }
  }, 3000);
}

function handleChunk(chunk, stream) {
  stream.write(chunk);
  const text = chunk.toString();
  if (/✓ built in|Prerendered \d+ page/.test(text)) {
    sawSuccess = true;
  }
  scheduleForceExit();
}

child.stdout.on("data", (c) => handleChunk(c, process.stdout));
child.stderr.on("data", (c) => handleChunk(c, process.stderr));

child.on("exit", (code) => {
  clearTimeout(idleTimer);
  process.exit(code ?? 0);
});
