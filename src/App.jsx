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
      <BackgroundGradient />
      <ScrollbarTicks />
      <Nav />
      <main>
        <Hero />
        <Profile />
        <Work />
        <Projects />
        <Index />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
