import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { qrcode } from 'vite-plugin-qrcode';
import { vitePrerenderPlugin } from 'vite-prerender-plugin';

export default defineConfig({
  // vitePrerenderPlugin only runs its prerender pass during `vite build` (not `vite dev`),
  // so `npm run start` is unaffected — see src/prerender.jsx for the render function and
  // frontend-standards.md for why this exists (the site is otherwise a client-only SPA that
  // serves an empty <div id="root"> to any crawler that doesn't execute JS).
  plugins: [react(), tailwindcss(), qrcode(), vitePrerenderPlugin({ renderTarget: '#root' })],
  publicDir: 'public',
});
