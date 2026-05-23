
import github from './assets/github-sign.png';
import linkedin from './assets/linkedin.png';
import resume from './assets/resume.png';
import grad from './assets/grad.jpg';
import cool from './assets/cool.jpg';
import snowboard from './assets/snowboard.jpg';

import React from "react";
import ScrollFadeIn from './ScrollFadeIn';
import './App.css';

function App() {
  return (
    <div className="w-full [font-family:'Geist']">

      {/* Fixed background layers */}
      <div className="bg-layers" aria-hidden="true">
        <div className="bg-glow-top" />
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full h-[50px] z-50 flex items-center justify-between px-[10%] max-md:px-[5%] bg-white/5 backdrop-blur border-b border-white/10">
        <a href="#" className="text-[#afafaf] hover:text-[#e0e0e0] font-medium text-base transition-colors">
          PearcePackman.com
        </a>
        <div className="flex gap-[30px] max-md:hidden">
          {[['About Me', '#aboutme'], ['Skills', '#skills'], ['Projects', '#projects'], ['Experience', '#experience'], ['Education', '#education']].map(([label, href]) => (
            <a key={href} href={href} className="nav-link">{label}</a>
          ))}
        </div>
      </nav>

      {/* Hero */}
      <ScrollFadeIn>
        <section className="w-full min-h-screen flex items-center justify-center">
          <div className="flex flex-col items-center text-center px-6 mt-16">
            <p
              className="font-black leading-none m-0 p-0 text-[85px] max-sm:text-[52px]"
              style={{
                background: 'linear-gradient(160deg, #ffffff 0%, #7ec8e3 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Pearce Packman
            </p>
            <p className="text-[#c8d8e0] font-medium text-[36px] max-sm:text-[22px] leading-tight italic mt-2 mb-2 max-w-[620px]">
              Building systems that bridge hardware and software.
            </p>
            <p className="text-[#8a9aaa] text-[15px] leading-relaxed font-medium italic mt-2 max-w-[480px] max-sm:max-w-[90%]">
              From BLE indoor navigation to real-time hardware monitors and full-stack web apps, I build polished software that connects low-level systems with user-facing design.
            </p>
            <div className="mt-6">
              <a href="#aboutme" className="workbutton">Learn About Me ▼</a>
            </div>
          </div>
        </section>
      </ScrollFadeIn>

      {/* About Me */}
      <ScrollFadeIn>
        <section id="aboutme" className="w-full flex justify-center mb-[150px] scroll-mt-[100px]">
          <div className="w-[70vw] min-w-[850px] max-md:w-[90vw] max-md:min-w-0">
            <h1 className="section-title">About Me</h1>
            <div className="flex flex-row justify-between max-md:flex-col">
              <div className="w-1/2 max-md:w-full mt-[70px]">
                <div className="picbox">
                  <img className="gradpic" src={grad} alt="graduation" />
                  <img className="coolpic" src={cool} alt="casual" />
                  <img className="snowboardpic" src={snowboard} alt="snowboarding" />
                </div>
                <div className="aboutleftwords">
                  <h2 className="[font-family:'Geist'] font-[850] text-[55px] p-0 m-0 mt-[-15px]">Hey, I'm Pearce!</h2>
                  <div className="mt-1">
                    <p className="m-0 italic text-sm font-semibold text-[#a3a3a3]">Full-Stack Developer</p>
                    <p className="m-0 italic text-sm font-semibold text-[#a3a3a3]">Research Assistant</p>
                    <p className="m-0 italic text-sm font-semibold text-[#a3a3a3]">Student At UMBC</p>
                  </div>
                </div>
              </div>
              <div className="w-[42%] max-md:w-full mt-[5px] max-md:mt-0 flex flex-col brightness-[0.8] transition-all duration-200 hover:brightness-[0.95] hover:scale-[1.03]">
                <p className="font-extrabold text-[45px] leading-none mt-[90px] mb-0 p-0">So, Who Am I?</p>
                <p className="font-semibold text-base text-[#a3a3a3] italic leading-relaxed px-2.5 mt-2">
                  Hey, I'm Pearce — thanks for checking out my site!
                  I've gone from working in the trades to studying Computer Science at UMBC,
                  where I focus on full-stack development, embedded systems, and real-time projects.
                  Right now I'm building an indoor navigation app using Bluetooth beacons through
                  the DAMS Lab, and actively looking for a summer 2026 internship!
                </p>
              </div>
            </div>
            <div className="flex justify-evenly w-full mt-[50px] max-sm:flex-col max-sm:items-center max-sm:gap-4">
              <a href="https://www.linkedin.com/in/pearce-packman/" target="_blank" rel="noopener noreferrer" className="flex h-[50px] items-center">
                <div className="aboutmebutton githubbutton">
                  <img className="github" src={linkedin} alt="linkedin" />
                  <p>LinkedIn Page</p>
                </div>
              </a>
              <a href="https://github.com/pearcepackman" target="_blank" rel="noopener noreferrer" className="flex h-[50px] items-center">
                <div className="aboutmebutton githubbutton">
                  <img className="github" src={github} alt="github" />
                  <p>GitHub Page</p>
                </div>
              </a>
              <a href="https://drive.google.com/file/d/151GyXMqMP7wq571OO6Mu-xP-C8lHL283/view" target="_blank" rel="noopener noreferrer" className="flex h-[50px] items-center">
                <div className="aboutmebutton githubbutton">
                  <img className="github" src={resume} alt="resume" />
                  <p>My Resume</p>
                </div>
              </a>
            </div>
          </div>
        </section>
      </ScrollFadeIn>

      {/* Skills */}
      <ScrollFadeIn>
        <section id="skills" className="w-full flex justify-center mb-[150px] scroll-mt-[100px]">
          <div className="w-[70vw] min-w-[850px] max-md:w-[90vw] max-md:min-w-0">
            <h1 className="section-title">Skills</h1>
            <div className="skillarea">
              <div className="skillcard skilllanguage">
                <div className="skillcategoryname">Languages</div>
                <div className="skillchips">
                  {['C++', 'C', 'JavaScript', 'Python', 'TypeScript', 'SQL', 'Bash'].map(s => (
                    <span key={s} className="skillchip">{s}</span>
                  ))}
                </div>
              </div>
              <div className="skillcard skillfrontend">
                <div className="skillcategoryname">Frontend</div>
                <div className="skillchips">
                  {['React', 'React Native', 'Qt / C++', 'HTML', 'CSS', 'Chart.js'].map(s => (
                    <span key={s} className="skillchip">{s}</span>
                  ))}
                </div>
              </div>
              <div className="skillcard skillbackend">
                <div className="skillcategoryname">Backend</div>
                <div className="skillchips">
                  {['Node.js', 'Express.js', 'REST APIs', 'SQLite', 'JWT Auth', 'Docker'].map(s => (
                    <span key={s} className="skillchip">{s}</span>
                  ))}
                </div>
              </div>
              <div className="skillcard skillembedded">
                <div className="skillcategoryname">Embedded &amp; Systems</div>
                <div className="skillchips">
                  {['ESP32', 'MQTT', 'BLE', 'Sensor I/O', 'Serial Comm', 'LibreHardwareMonitor'].map(s => (
                    <span key={s} className="skillchip">{s}</span>
                  ))}
                </div>
              </div>
              <div className="skillcard skilltools">
                <div className="skillcategoryname">Dev Tools &amp; OS</div>
                <div className="skillchips">
                  {['Linux', 'Git', 'GitHub', 'Docker', 'VSCode', 'NeoVim', 'Expo Go', 'Windows', 'MacOS'].map(s => (
                    <span key={s} className="skillchip">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollFadeIn>

      {/* Projects */}
      <ScrollFadeIn>
        <section id="projects" className="w-full flex justify-center mb-[150px] scroll-mt-[100px]">
          <div className="w-[70vw] min-w-[850px] max-md:w-[90vw] max-md:min-w-0">
            <h1 className="section-title">Projects</h1>
            <div className="projectarea">
              <a href="https://github.com/pearcepackman/CorePanel" target="_blank" rel="noopener noreferrer" className="projectrow projectcorepanel">
                <div className="projectrowleft">
                  <span className="projectrowname">CorePanel</span>
                </div>
                <div className="projectrowcontent">
                  <p className="projectrowdesc">Desktop system monitor built with Qt — visualizes live CPU, GPU, RAM, and disk metrics via real-time charts using LibreHardwareMonitor sensor data.</p>
                  <div className="projectrowchips">
                    {['C++', 'C#', 'Qt', 'QtCharts', 'LibreHardwareMonitor'].map(t => (
                      <span key={t} className="projectchip">{t}</span>
                    ))}
                  </div>
                </div>
                <span className="projectrowarrow">&#8599;</span>
              </a>
              <a href="https://github.com/pearcepackman/Smart-home-dashboard" target="_blank" rel="noopener noreferrer" className="projectrow projectsmarthome">
                <div className="projectrowleft">
                  <span className="projectrowname">Smart Home Dashboard</span>
                </div>
                <div className="projectrowcontent">
                  <p className="projectrowdesc">Full-stack IoT platform using ESP32, Node.js, and React Native to monitor real-time temperature, humidity, gas, and motion data over MQTT.</p>
                  <div className="projectrowchips">
                    {['ESP32', 'MQTT', 'React Native', 'Node.js', 'TypeScript'].map(t => (
                      <span key={t} className="projectchip">{t}</span>
                    ))}
                  </div>
                </div>
                <span className="projectrowarrow">&#8599;</span>
              </a>
              <a href="https://devpost.com/software/d-kh8jf4" target="_blank" rel="noopener noreferrer" className="projectrow projectsnapmotive">
                <div className="projectrowleft">
                  <span className="projectrowname">SnapMotive</span>
                  <span className="projectrowaward">HackHounds 2025 Winner</span>
                </div>
                <div className="projectrowcontent">
                  <p className="projectrowdesc">Gamified goal-tracking app using computer vision to verify task completion through photos — built in 24 hours at HackHounds 2025.</p>
                  <div className="projectrowchips">
                    {['React Native', 'TypeScript', 'Computer Vision', 'UI/UX'].map(t => (
                      <span key={t} className="projectchip">{t}</span>
                    ))}
                  </div>
                </div>
                <span className="projectrowarrow">&#8599;</span>
              </a>
              <a href="https://projectmgmtapplication-fd3214989d4c.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="projectrow projectprojectssimplified">
                <div className="projectrowleft">
                  <span className="projectrowname">Projects Simplified</span>
                </div>
                <div className="projectrowcontent">
                  <p className="projectrowdesc">Full-stack CRUD web app for task and project management with JWT-based auth, built on Node.js, Express, and SQL.</p>
                  <div className="projectrowchips">
                    {['React', 'Node.js', 'Express.js', 'SQL', 'JWT'].map(t => (
                      <span key={t} className="projectchip">{t}</span>
                    ))}
                  </div>
                </div>
                <span className="projectrowarrow">&#8599;</span>
              </a>
            </div>
          </div>
        </section>
      </ScrollFadeIn>

      {/* Experience */}
      <ScrollFadeIn>
        <section id="experience" className="w-full flex justify-center mb-[150px] scroll-mt-[100px]">
          <div className="w-[70vw] min-w-[850px] max-md:w-[90vw] max-md:min-w-0">
            <h1 className="section-title">Experience</h1>
            <div className="educationarea">
              <a href="https://damslabumbc.github.io/" target="_blank" rel="noopener noreferrer">
                <div className="school">
                  <div className="schoolanddates">
                    <h3>Undergraduate Research Assistant</h3>
                    <h5>June 2025 - Current</h5>
                  </div>
                  <div className="schoolnotes">
                    <p>
                      - Built an indoor navigation app using Bluetooth beacons for real-time positioning and directions<br />
                      - Implemented BLE beacon detection including signal processing and device ranging<br />
                      - Designed and implemented a pathfinding algorithm supporting multiple floors<br />
                      - Designed and developed frontend UI components for live user position, pathfinding, and turn-by-turn directions
                    </p>
                  </div>
                </div>
              </a>
              <a href="https://devpost.com/software/d-kh8jf4" target="_blank" rel="noopener noreferrer">
                <div className="school">
                  <div className="schoolanddates">
                    <h3>Hackathon Winner</h3>
                    <h5>April 2025</h5>
                  </div>
                  <div className="schoolnotes">
                    <p>
                      - Awarded Best Computer Vision for developing a goal-tracking app using image recognition to monitor user progress<br />
                      - Designed a clean, user-friendly UI in React Native to enhance app usability and engagement<br />
                      - Learned React Native UI in 24 hours and collaborated with a team to meet tight deadlines
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>
      </ScrollFadeIn>

      {/* Education */}
      <ScrollFadeIn>
        <section id="education" className="w-full flex justify-center mb-[150px] scroll-mt-[100px]">
          <div className="w-[70vw] min-w-[850px] max-md:w-[90vw] max-md:min-w-0">
            <h1 className="section-title">Education</h1>
            <div className="educationarea">
              <div className="school">
                <div className="schoolanddates">
                  <h3>University of Maryland, Baltimore County (UMBC)</h3>
                  <h5>August 2024 - December 2026</h5>
                </div>
                <div className="schoolnotes">
                  <p>
                    - Bachelor of Science in Computer Science — Expected December 2026<br />
                    - GPA: 3.62<br />
                    - Coursework: Software Engineering, Operating Systems, Computer Security, Data Structures, Algorithms, Malware Analysis, Computer Architecture, Assembly Language, Principles of Programming Languages<br />
                    - Extra Curricular Activities: UMBC Racing Team Member
                  </p>
                </div>
              </div>
              <div className="school">
                <div className="schoolanddates">
                  <h3>Carroll Community College</h3>
                  <h5>August 2022 - May 2024</h5>
                </div>
                <div className="schoolnotes">
                  <p>
                    - Obtained Associate's Degree in Arts and Sciences<br />
                    - GPA: 3.83 (Magna Cum Laude)<br />
                    - Coursework: Introduction to Python Programming, Introduction to C++ Programming<br />
                    - Extra Curricular Activities: PTK Honor's Society Member
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollFadeIn>

      {/* Footer */}
      <footer className="w-full border-t border-[#7b7b7b44] h-[170px] flex flex-col brightness-[0.7] hover:brightness-[0.9] hover:scale-[1.02] transition-all duration-200">
        <div className="h-[90%] flex justify-center gap-[5%]">
          <div className="w-[170px] flex flex-col text-center">
            <h5 className="text-[#dedede] font-extrabold text-lg mt-2.5 mb-0.5 leading-none mx-auto">Quick Links</h5>
            {[['About Me', '#aboutme'], ['Skills', '#skills'], ['Projects', '#projects'], ['Experience', '#experience'], ['Education', '#education']].map(([label, href]) => (
              <a key={href} href={href}>
                <p className="w-[100px] text-[#afafaf] m-0 leading-relaxed mx-auto text-sm font-semibold hover:scale-105 hover:text-white transition-all">{label}</p>
              </a>
            ))}
          </div>
          <div className="w-[170px] text-center">
            <h5 className="text-[#dedede] font-extrabold text-lg mt-2.5 mb-0.5 leading-none mx-auto">Resources</h5>
            <a href="https://github.com/pearcepackman" target="_blank" rel="noopener noreferrer">
              <p className="w-[100px] text-[#afafaf] m-0 leading-relaxed mx-auto text-sm font-semibold hover:scale-105 hover:text-white transition-all">GitHub</p>
            </a>
            <a href="https://www.linkedin.com/in/pearce-packman/" target="_blank" rel="noopener noreferrer">
              <p className="w-[100px] text-[#afafaf] m-0 leading-relaxed mx-auto text-sm font-semibold hover:scale-105 hover:text-white transition-all">LinkedIn</p>
            </a>
            <a href="https://drive.google.com/file/d/151GyXMqMP7wq571OO6Mu-xP-C8lHL283/view" target="_blank" rel="noopener noreferrer">
              <p className="w-[100px] text-[#afafaf] m-0 leading-relaxed mx-auto text-sm font-semibold hover:scale-105 hover:text-white transition-all">Resume</p>
            </a>
          </div>
        </div>
        <div className="flex ml-2.5">
          <p className="leading-none mx-auto my-0 text-[#c5c4c4] text-[10px] font-bold text-center">Designed and Developed by Pearce Packman :)</p>
        </div>
      </footer>

    </div>
  );
}

export default App;
