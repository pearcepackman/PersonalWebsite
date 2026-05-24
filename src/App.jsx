import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';

emailjs.init({ publicKey: '5jpaSVQ7knciM-etS', limitRate: { throttle: 10000 } });
import './App.css';
import ScrollFadeIn from './ScrollFadeIn';
import grad from './assets/grad.jpg';
import cool from './assets/cool.jpg';
import snowboard from './assets/snowboard.jpg';
import github from './assets/github-sign.png';
import linkedin from './assets/linkedin.png';
import resume from './assets/resume.png';

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, scale: 0.97 },
  whileInView: { opacity: 1, scale: 1 },
  transition: { duration: 0.4, ease: "easeOut", delay },
  viewport: { once: false, amount: 0.2 },
});

function App() {
  const formRef = useRef(null);
  const [formState, setFormState] = useState('idle');
  const [menuOpen, setMenuOpen] = useState(false); // idle | sending | success | error

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = formRef.current;
    if (form.website.value) return; // honeypot — bot filled the hidden field
    const name = form.from_name.value.trim();
    const email = form.from_email.value.trim();
    const message = form.message.value.trim().slice(0, 2000);
    if (!name || !email || !message) return;
    setFormState('sending');
    emailjs.send('service_9cyo26p', 'template_y8t85ei', { from_name: name, from_email: email, message })
      .then(() => {
        setFormState('success');
        form.reset();
        setTimeout(() => setFormState('idle'), 60000);
      })
      .catch((err) => { console.error('EmailJS error:', err); setFormState('error'); });
  };

  return (
    <>
      {/* Background effects */}
      <div className="bg-glow" aria-hidden="true" />
      <div className="bg-glow-2" aria-hidden="true" />
      <div className="bg-dots" aria-hidden="true" />
      <div className="bg-grain" aria-hidden="true" />

      {/* All page content sits above background */}
      <div style={{ position: 'relative', zIndex: 1 }}>

        {/* Navbar */}
        <nav className="navbar">
          <a href="#" className="navbar-logo">PearcePackman.com</a>
          <div className="navbar-links">
            {[['About Me', '#aboutme'], ['Skills', '#skills'], ['Projects', '#projects'], ['Experience', '#experience'], ['Education', '#education'], ['Contact', '#contact']].map(([label, href]) => (
              <a key={href} href={href} className="nav-link">{label}</a>
            ))}
          </div>
          <button className="navbar-hamburger" onClick={() => setMenuOpen(o => !o)} aria-label="Toggle menu">
            <span className={`hamburger-bar ${menuOpen ? 'open-1' : ''}`} />
            <span className={`hamburger-bar ${menuOpen ? 'open-2' : ''}`} />
            <span className={`hamburger-bar ${menuOpen ? 'open-3' : ''}`} />
          </button>
        </nav>
        {menuOpen && (
          <div className="mobile-menu">
            {[['About Me', '#aboutme'], ['Skills', '#skills'], ['Projects', '#projects'], ['Experience', '#experience'], ['Education', '#education'], ['Contact', '#contact']].map(([label, href]) => (
              <a key={href} href={href} className="mobile-menu-link" onClick={() => setMenuOpen(false)}>{label}</a>
            ))}
          </div>
        )}

        {/* Hero */}
        <section style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '0 24px', marginTop: 50 }}>
            <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: "easeOut", delay: 0 }} className="hero-title">
              Pearce Packman
            </motion.p>
            <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }} style={{ color: '#c8d8e0', fontWeight: 500, fontSize: 'clamp(18px, 3vw, 36px)', fontStyle: 'italic', marginTop: 12, marginBottom: 8, maxWidth: 620 }}>
              Building systems that matter.
            </motion.p>
            <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }} style={{ color: '#8a9aaa', fontSize: 15, lineHeight: 1.7, fontWeight: 500, fontStyle: 'italic', marginTop: 8, maxWidth: 480 }}>
              Full-stack dev, embedded tinkerer, CS student at UMBC.
              Currently shipping production software at Occams Group.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }} style={{ marginTop: 28 }}>
              <a href="#aboutme" style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                height: 50, padding: '0 28px',
                background: 'linear-gradient(103deg, rgba(45,134,181,1) 0%, rgba(102,45,107,1) 100%)',
                borderRadius: 10, color: 'white', fontWeight: 700, fontSize: 15,
                fontFamily: 'Geist, sans-serif',
                transition: 'transform 0.15s ease, box-shadow 0.15s ease',
              }}>
                Learn About Me ▼
              </a>
            </motion.div>
          </div>
        </section>

        {/* About Me */}
        <ScrollFadeIn>
          <section id="aboutme" style={{ display: 'flex', justifyContent: 'center', marginBottom: 150, scrollMarginTop: 100 }}>
            <div className="section-inner">
              <h1 className="section-title">About Me</h1>

              <div className="aboutme-grid">
                {/* Left — photos only */}
                <div className="aboutme-left">
                  <div className="picbox">
                    <img className="gradpic" src={grad} alt="graduation" />
                    <img className="coolpic" src={cool} alt="casual" />
                    <img className="snowboardpic" src={snowboard} alt="snowboarding" />
                  </div>
                </div>

                {/* Right — name block + bio card */}
                <div className="aboutme-right">
                  <div className="aboutme-nameblock">
                    <h2>Hey, I'm Pearce!</h2>
                    <p>Software Engineer Intern</p>
                    <p>Research Assistant</p>
                    <p>Student at UMBC</p>
                  </div>
                  <div className="aboutme-biocard">
                    <h3>So, Who Am I?</h3>
                    <p>
                      I'm a CS student at UMBC graduating December 2026. Before I wrote code I was a mechanic
                      and did construction work. I love to bring that same work ethic and mentality to software. Most of my
                      work has been full-stack development, with some embedded and IoT work through the DAMS Lab,
                      and now building production software at Occams Group. I love putting together end-to-end
                      systems, and even implementing hardware into my projects as well!
                    </p>
                  </div>
                </div>
              </div>

              {/* Link buttons */}
              <div className="aboutme-buttons">
                <a href="https://www.linkedin.com/in/pearce-packman/" target="_blank" rel="noopener noreferrer" className="aboutme-link">
                  <div className="aboutmebutton">
                    <img src={linkedin} alt="linkedin" />
                    <p>LinkedIn</p>
                  </div>
                </a>
                <a href="https://github.com/pearcepackman" target="_blank" rel="noopener noreferrer" className="aboutme-link">
                  <div className="aboutmebutton">
                    <img src={github} alt="github" />
                    <p>GitHub</p>
                  </div>
                </a>
                <a href="https://drive.google.com/file/d/151GyXMqMP7wq571OO6Mu-xP-C8lHL283/view" target="_blank" rel="noopener noreferrer" className="aboutme-link">
                  <div className="aboutmebutton">
                    <img src={resume} alt="resume" />
                    <p>Resume</p>
                  </div>
                </a>
              </div>

            </div>
          </section>
        </ScrollFadeIn>

        {/* Skills */}
        <ScrollFadeIn>
          <section id="skills" style={{ display: 'flex', justifyContent: 'center', marginBottom: 150, scrollMarginTop: 100 }}>
            <div className="section-inner">
              <h1 className="section-title">Skills</h1>
              <div className="skillarea">
                {[
                  { cls: 'skilllanguage', label: 'Languages',        chips: ['C++','C','JavaScript','TypeScript','Python','SQL','Bash'] },
                  { cls: 'skillfrontend', label: 'Frontend',         chips: ['React','React Native','Qt / C++','HTML','CSS','Tailwind CSS'] },
                  { cls: 'skillbackend',  label: 'Backend',          chips: ['Node.js','Express.js','REST APIs','PostgreSQL','Prisma','SQLite'] },
                  { cls: 'skillcloud',    label: 'Cloud & DevOps',   chips: ['Azure','Docker','GitHub Actions','CI/CD','Neon'] },
                  { cls: 'skillauthapi', label: 'AI & Auth',         chips: ['Claude API','Clerk','JWT'] },
                  { cls: 'skillembedded', label: 'Embedded & Systems',chips: ['ESP32','MQTT','BLE','IoT','Sensor I/O','LibreHardwareMonitor'] },
                  { cls: 'skilltools',    label: 'Tools & OS',       chips: ['Git','GitHub','Jira','VSCode','NeoVim','Linux','Windows','macOS'] },
                ].map(({ cls, label, chips }, i) => (
                  <motion.div key={label} {...fadeIn(i * 0.07)} className={`skillcard ${cls}`}>
                    <div className="skillcategoryname">{label}</div>
                    <div className="skillchips">
                      {chips.map(s => <span key={s} className="skillchip">{s}</span>)}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </ScrollFadeIn>

        {/* Projects */}
        <ScrollFadeIn>
          <section id="projects" style={{ display: 'flex', justifyContent: 'center', marginBottom: 150, scrollMarginTop: 100 }}>
            <div className="section-inner">
              <h1 className="section-title">Projects</h1>
              <div className="projectarea">
                <motion.a {...fadeIn(0)} href="https://github.com/pearcepackman/CorePanel" target="_blank" rel="noopener noreferrer" className="projectrow projectcorepanel">
                  <div className="projectrowleft">
                    <span className="projectrowname">CorePanel</span>
                  </div>
                  <div className="projectrowcontent">
                    <p className="projectrowdesc">Desktop system monitor built with Qt — visualizes live CPU, GPU, RAM, and disk metrics via real-time charts using LibreHardwareMonitor sensor data.</p>
                    <div className="projectrowchips">
                      {['C++','C#','Qt','QtCharts','LibreHardwareMonitor'].map(t => <span key={t} className="projectchip">{t}</span>)}
                    </div>
                  </div>
                  <span className="projectrowarrow">&#8599;</span>
                </motion.a>
                <motion.a {...fadeIn(0.07)} href="https://github.com/pearcepackman/Smart-home-dashboard" target="_blank" rel="noopener noreferrer" className="projectrow projectsmarthome">
                  <div className="projectrowleft">
                    <span className="projectrowname">Smart Home Dashboard</span>
                  </div>
                  <div className="projectrowcontent">
                    <p className="projectrowdesc">Full-stack IoT platform using ESP32, Node.js, and React Native to monitor real-time temperature, humidity, gas, and motion data over MQTT.</p>
                    <div className="projectrowchips">
                      {['ESP32','MQTT','React Native','Node.js','TypeScript'].map(t => <span key={t} className="projectchip">{t}</span>)}
                    </div>
                  </div>
                  <span className="projectrowarrow">&#8599;</span>
                </motion.a>
                <motion.a {...fadeIn(0.14)} href="https://devpost.com/software/d-kh8jf4" target="_blank" rel="noopener noreferrer" className="projectrow projectsnapmotive">
                  <div className="projectrowleft">
                    <span className="projectrowname">SnapMotive</span>
                    <span className="projectrowaward">HackHounds 2025 Winner</span>
                  </div>
                  <div className="projectrowcontent">
                    <p className="projectrowdesc">Gamified goal-tracking app using computer vision to verify task completion through photos — built in 24 hours at HackHounds 2025.</p>
                    <div className="projectrowchips">
                      {['React Native','TypeScript','Computer Vision','UI/UX'].map(t => <span key={t} className="projectchip">{t}</span>)}
                    </div>
                  </div>
                  <span className="projectrowarrow">&#8599;</span>
                </motion.a>
                <motion.a {...fadeIn(0.21)} href="https://projectmgmtapplication-fd3214989d4c.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="projectrow projectprojectssimplified">
                  <div className="projectrowleft">
                    <span className="projectrowname">Projects Simplified</span>
                  </div>
                  <div className="projectrowcontent">
                    <p className="projectrowdesc">Full-stack CRUD web app for task and project management with JWT-based auth, built on Node.js, Express, and SQL.</p>
                    <div className="projectrowchips">
                      {['React','Node.js','Express.js','SQL','JWT'].map(t => <span key={t} className="projectchip">{t}</span>)}
                    </div>
                  </div>
                  <span className="projectrowarrow">&#8599;</span>
                </motion.a>
              </div>
            </div>
          </section>
        </ScrollFadeIn>

        {/* Experience */}
        <ScrollFadeIn>
          <section id="experience" style={{ display: 'flex', justifyContent: 'center', marginBottom: 150, scrollMarginTop: 100 }}>
            <div className="section-inner">
              <h1 className="section-title">Experience</h1>
              <div className="educationarea">
                <motion.a {...fadeIn(0)} href="https://www.occamsgroup.com/" target="_blank" rel="noopener noreferrer">
                  <div className="school">
                    <div className="schoolanddates">
                      <h3>Software Engineer Intern — Occams Group</h3>
                      <h5>May 2026 – Present</h5>
                    </div>
                    <div className="schoolnotes">
                      <ul>
                        <li>Sole developer building internal automation tools at a technology consultancy serving Fortune 100–500 clients</li>
                        <li>Full-stack development with React, Node.js, PostgreSQL, Prisma, and Azure</li>
                        <li>Integrated AI capabilities using the Claude API for intelligent data processing and automation</li>
                        <li>Built and deployed production systems to Azure with CI/CD pipelines via GitHub Actions</li>
                        <li>Worked with full autonomy; presented work directly to C-suite</li>
                      </ul>
                      <div className="schoolchips">
                        {['React','Node.js','PostgreSQL','Prisma','Azure','Claude API','Clerk','GitHub Actions','Chrome Extension','CI/CD'].map(t => <span key={t} className="projectchip">{t}</span>)}
                      </div>
                    </div>
                  </div>
                </motion.a>
                <motion.a {...fadeIn(0.07)} href="https://damslabumbc.github.io/" target="_blank" rel="noopener noreferrer">
                  <div className="school">
                    <div className="schoolanddates">
                      <h3>Undergraduate Research Assistant — DAMS Lab</h3>
                      <h5>June 2025 – Present</h5>
                    </div>
                    <div className="schoolnotes">
                      <ul>
                        <li>Built an indoor navigation app using Bluetooth beacons to provide real-time positioning and directions</li>
                        <li>Implemented BLE beacon detection including signal processing and device ranging</li>
                        <li>Designed and implemented the pathfinding algorithm for multiple floors</li>
                        <li>Designed and developed frontend UI components for live user position, pathfinding, and directions</li>
                        <li>Developing an IoT hardware curriculum for the SPACES course launching in 2027, including embedded systems guides and tutorials</li>
                      </ul>
                      <div className="schoolchips">
                        {['React Native','BLE','JavaScript','Expo','Pathfinding','IoT'].map(t => <span key={t} className="projectchip">{t}</span>)}
                      </div>
                    </div>
                  </div>
                </motion.a>
                <motion.a {...fadeIn(0.14)} href="https://devpost.com/software/d-kh8jf4" target="_blank" rel="noopener noreferrer">
                  <div className="school">
                    <div className="schoolanddates">
                      <h3>Hackathon Winner — HackHounds 2025</h3>
                      <h5>April 2025</h5>
                    </div>
                    <div className="schoolnotes">
                      <ul>
                        <li>Awarded Best Computer Vision for developing a goal-tracking app using image recognition to monitor user progress</li>
                        <li>Designed a clean, user-friendly UI in React Native</li>
                        <li>Learned React Native UI in 24 hours and collaborated with a team under tight deadlines</li>
                      </ul>
                      <div className="schoolchips">
                        {['React Native','TypeScript','Computer Vision','Expo'].map(t => <span key={t} className="projectchip">{t}</span>)}
                      </div>
                    </div>
                  </div>
                </motion.a>
              </div>
            </div>
          </section>
        </ScrollFadeIn>

        {/* Education */}
        <ScrollFadeIn>
          <section id="education" style={{ display: 'flex', justifyContent: 'center', marginBottom: 150, scrollMarginTop: 100 }}>
            <div className="section-inner">
              <h1 className="section-title">Education</h1>
              <div className="educationarea">
                <motion.div {...fadeIn(0)} className="school">
                  <div className="schoolanddates">
                    <h3>University of Maryland, Baltimore County (UMBC)</h3>
                    <h5>August 2024 – December 2026</h5>
                  </div>
                  <div className="schoolnotes">
                    <ul>
                      <li>B.S. Computer Science — Expected December 2026</li>
                      <li>GPA: 3.62</li>
                      <li>Coursework: Software Engineering, Operating Systems, Computer Security, Data Structures, Algorithms, Malware Analysis, Computer Architecture, Assembly Language, Principles of Programming Languages</li>
                      <li>Extra Curricular: UMBC Racing Team</li>
                    </ul>
                  </div>
                </motion.div>
                <motion.div {...fadeIn(0.07)} className="school">
                  <div className="schoolanddates">
                    <h3>Carroll Community College</h3>
                    <h5>August 2022 – May 2024</h5>
                  </div>
                  <div className="schoolnotes">
                    <ul>
                      <li>Associate's Degree in Arts and Sciences</li>
                      <li>GPA: 3.83 (Magna Cum Laude)</li>
                      <li>Coursework: Introduction to Python, Introduction to C++</li>
                      <li>Extra Curricular: PTK Honor's Society</li>
                    </ul>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        </ScrollFadeIn>

        {/* Contact */}
        <ScrollFadeIn>
          <section id="contact" style={{ display: 'flex', justifyContent: 'center', marginBottom: 150, scrollMarginTop: 100 }}>
            <div className="section-inner">
              <h1 className="section-title">Contact</h1>
              <div className="contact-card">
                <p className="contact-intro">Have a question or want to work together? Send me a message and I'll get back to you.</p>
                <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
                  <input type="text" name="website" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
                  <div className="contact-row">
                    <div className="contact-field">
                      <label className="contact-label">Name</label>
                      <input className="contact-input" type="text" name="from_name" required placeholder="Your name" maxLength={100} />
                    </div>
                    <div className="contact-field">
                      <label className="contact-label">Email</label>
                      <input className="contact-input" type="email" name="from_email" required placeholder="your@email.com" maxLength={200} />
                    </div>
                  </div>
                  <div className="contact-field">
                    <label className="contact-label">Message</label>
                    <textarea className="contact-input contact-textarea" name="message" required placeholder="What's on your mind?" rows={5} maxLength={2000} />
                  </div>
                  <button type="submit" className="contact-submit" disabled={formState === 'sending' || formState === 'success'}>
                    {formState === 'idle' && 'Send Message'}
                    {formState === 'sending' && 'Sending...'}
                    {formState === 'success' && 'Message Sent!'}
                    {formState === 'error' && 'Try Again'}
                  </button>
                  {formState === 'error' && (
                    <p className="contact-error">Something went wrong. Please try again or email me directly.</p>
                  )}
                </form>
              </div>
            </div>
          </section>
        </ScrollFadeIn>

        {/* Footer */}
        <footer className="site-footer">
          <div className="site-footer-inner">
            <div className="footer-left">
              <p className="footer-brand">PearcePackman.com</p>
              <p className="footer-tagline">Building systems that bridge hardware and software.</p>
              <div className="footer-socials">
                <a href="https://github.com/pearcepackman" target="_blank" rel="noopener noreferrer" className="footer-social-link">GitHub</a>
                <a href="https://www.linkedin.com/in/pearce-packman/" target="_blank" rel="noopener noreferrer" className="footer-social-link">LinkedIn</a>
                <a href="https://drive.google.com/file/d/151GyXMqMP7wq571OO6Mu-xP-C8lHL283/view" target="_blank" rel="noopener noreferrer" className="footer-social-link">Resume</a>
              </div>
            </div>
            <div className="footer-right">
              <p className="footer-col-heading">Quick Links</p>
              {[['About Me','#aboutme'],['Skills','#skills'],['Projects','#projects'],['Experience','#experience'],['Education','#education'],['Contact','#contact']].map(([label, href]) => (
                <a key={href} href={href} className="footer-nav-link">{label}</a>
              ))}
            </div>
          </div>
          <div className="footer-bottom">
            <p>Designed and developed by Pearce Packman</p>
          </div>
        </footer>

      </div>
    </>
  );
}

export default App;
