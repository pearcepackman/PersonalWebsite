import { Helmet } from 'react-helmet-async';
import BackgroundGradient from './components/ui/BackgroundGradient';
import ScrollbarTicks from './components/ui/ScrollbarTicks';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Profile from './components/Profile';
import Index from './components/Index';
import Projects from './components/Projects';
import Work from './components/Work';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Helmet>
        <title>Pearce Packman - Software Engineer</title>
        <meta
          name="description"
          content="CS student at UMBC and Software Engineer Intern at Occams Group. Full stack developer with experience in React, Node.js, Azure, and AI integration. Based in Maryland."
        />
      </Helmet>

      <ScrollbarTicks />
      <Nav />
      <div className="relative">
        <BackgroundGradient />
        <main>
          <Hero />
          <Profile />
          <Work />
          <Education />
          <Projects />
          <Index />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
