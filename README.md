<p align="left">
  <img src="https://img.shields.io/badge/React_19-20232A?style=flat&logo=react&logoColor=61DAFB" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/Tailwind_CSS_v4-06B6D4?style=flat&logo=tailwindcss&logoColor=white" />
  <img src="https://img.shields.io/badge/Framer_Motion-EF0082?style=flat&logo=framer&logoColor=white" />
  <img src="https://img.shields.io/badge/EmailJS-EA4335?style=flat" />
  <img src="https://img.shields.io/badge/Netlify-00C7B7?style=flat&logo=netlify&logoColor=white" />
</p>

# Personal Portfolio Website
Hi, I'm Pearce, this is my personal portfolio site, designed and built by me with React, Vite, Tailwind CSS, and Framer Motion.

## Live Site
[pearcepackman.com](https://pearcepackman.com/)

## Tech Stack
- **React 19 + Vite** — component-based structure, fast dev/build tooling
- **Tailwind CSS v4** — utility-first styling, CSS-based config
- **Framer Motion** — scroll-triggered animations throughout, respects reduced-motion
- **EmailJS** — serverless contact form with honeypot protection and rate limiting
- **Prerendered at build time** (`vite-prerender-plugin`) — the production build ships real, readable HTML, not just an empty div for JS to fill in, so search engines and AI crawlers can actually read the page
- **Netlify** — hosting with continuous deployment on push to `main`

## Running Locally
```bash
npm install
npm run start
```
Runs on `http://localhost:5173` by default.

The contact form needs EmailJS credentials to send mail. Copy `.env.example` to `.env.local` and fill in `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, and `VITE_EMAILJS_PUBLIC_KEY` (set the same three in Netlify's dashboard for the live site).

### Scripts
- `npm run start` — dev server
- `npm run build` — production build
- `npm run preview` — preview the production build locally

## Features
- Fully responsive layout for desktop, tablet, and mobile
- Dark/light theme, defaults to system preference
- Click-to-flip photo cards
- Scroll-triggered animations, respects reduced-motion
- Custom scrollbar with tick marks at each section
- Contact form powered by EmailJS — no backend required
- SEO optimized with meta tags, Open Graph, Twitter Card, JSON-LD structured data, sitemap, robots.txt, and `llms.txt`
- Prerendered HTML, so the page's actual content (not just meta tags) is crawlable without JS
- Custom styled 404 page
- Resume self-hosted as a static PDF

## Project Structure
```
src/
  App.jsx           composition root
  prerender.jsx     build-time prerender entry (vite-prerender-plugin)
  components/       Hero, Profile, Work, Education, Projects, Index, Contact, Footer, Nav
  components/ui/    shared primitives (Reveal, FlipCard, Container, etc.)
  hooks/            useTheme.js
docs/               design standards + pre-push checklist
```

## Contact
<p align="center">
  If you like this project and want to chat, here are my links!<br><br>
  <a href="https://pearcepackman.com/" target="_blank">🌐 Portfolio Website</a> |
  <a href="https://www.linkedin.com/in/pearce-packman/" target="_blank">🔗 LinkedIn</a> |
  <a href="mailto:pearcepackman@gmail.com">📧 Email</a>
</p>
