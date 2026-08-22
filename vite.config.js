import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { qrcode } from 'vite-plugin-qrcode';

// Prerendering is handled manually by scripts/build.mjs (two fully separate Vite builds,
// client then a throwaway SSR-only one), not by a plugin here — see that file for why:
// vite-prerender-plugin leaked the entire react-dom/server bundle (327KB, bigger than the
// whole real app) into this client build's output, shipped to and executed by every
// visitor's browser for zero benefit, even after following its own documented fix for
// exactly that problem. `npm run start` (plain `vite`) is unaffected either way — the site
// is otherwise a client-only SPA that would serve an empty <div id="root"> to any crawler
// that doesn't execute JS, hence prerendering existing at all (see frontend-standards.md).
export default defineConfig({
  plugins: [react(), tailwindcss(), qrcode()],
  publicDir: 'public',
});
