import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';

const rootEl = document.getElementById('root');
const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// The production build is prerendered (see src/prerender.jsx), so #root already has real
// markup baked in and needs hydrateRoot, not createRoot — otherwise React would throw away
// the prerendered content and do a full client render instead of attaching to it. In dev
// (`npm run start`), the prerender step never runs, so #root is empty and needs createRoot.
if (rootEl.hasChildNodes()) {
  ReactDOM.hydrateRoot(rootEl, app);
} else {
  ReactDOM.createRoot(rootEl).render(app);
}
