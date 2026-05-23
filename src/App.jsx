
import github from './assets/github-sign.png';
import linkedin from './assets/linkedin.png';
import resume from './assets/resume.png';
import grad from './assets/grad.jpg';
import cool from './assets/cool.jpg';
import snowboard from './assets/snowboard.jpg';

import React from "react";
import ParticlesBackground from "./ParticlesBackground";
import ScrollFadeIn from './ScrollFadeIn';

import './App.css';

function App() {
  return (
    <div className="App">
    <ParticlesBackground />
      <header className="App-header">
    
        <div className = "Nav">
             
          <div className = "navbar">
            <div className = "navbarleft">
              <a href = "#" className = "navhome">PearcePackman.com</a>
              
            </div>
            <div className = "navbaright">
              <a href = "#aboutme" className = "navbaroptions">About Me</a>
              <a href = "#skills" className = "navbaroptions">Skills</a>
              <a href = "#projects" className = "navbaroptions">Projects</a>
              <a href = "#experience" className = "navbaroptions">Experience</a>
              <a href = "#education" className = "navbaroptions">Education</a>
              
            </div>
            
            
          </div>
          <ScrollFadeIn>
            <div className="startsection">
              <div className = "introsection">
                <div className = "namebox">
                  <p className = "introtext">
                    Pearce Packman
                  </p>
                  <p className = "introdesc">
                    Building systems that bridge hardware and software.
                  </p>
                </div>
                <p className="introblurb">
                  From BLE indoor navigation to real-time hardware monitors and full-stack web apps, I build polished software that connects low-level systems with user-facing design.
                </p>
                <div className = "introbuttonbox">
                  <a href = "#aboutme" className = "workbutton">
                    Learn About Me ▼
                  </a>
                </div>
	  	        </div>
            </div>
          </ScrollFadeIn>
          <ScrollFadeIn>
            <div id = "aboutme" className="section">
              <h1>About Me</h1>
              <div className='aboutinside'>
                <div className='aboutleft'>
                  <div className='picbox'>
                    <img className='gradpic' src = {grad}></img>
                    <img className='coolpic' src = {cool}></img>
                    <img className='snowboardpic' src = {snowboard}></img>
                  </div>
                  <div className='aboutleftwords'>
                    <div className='aboutname'>
                      <h2>Hey, I'm Pearce!</h2>
                    </div>
                    <div className='aboutnameadds'>
                      <p>Full-Stack Developer</p>
                      <p>Research Assistant</p>
                      <p>Student At UMBC</p>
                    </div>
                  </div>
                </div>
                <div className='aboutright'>
                  <div className='aboutrighttitle'>
                    <p>So, Who Am I?</p>
                  </div>
                  <div className='aboutrightdesc'>
                    <p>
                      Hey, I'm Pearce — thanks for checking out my site!
                      I've gone from working in the trades to studying Computer Science at UMBC,
                      where I focus on full-stack development, embedded systems, and real-time projects.
                      Right now I'm building an indoor navigation app using Bluetooth beacons through
                      the DAMS Lab, and actively looking for a summer 2026 internship!
                    </p>

                  </div>
                  
                </div>
              </div>
              <div className='aboutmelinks'>
                <a href = "https://www.linkedin.com/in/pearce-packman/" target = "_blank" rel="noopener noreferrer" alt = "linkedin">
                <div className='aboutmebutton githubbutton'>
                  <img className='github' src = { linkedin }></img>
                  <p>LinkedIn Page</p>
                </div>
                </a>
                <a href = "https://github.com/pearcepackman" target = "_blank" rel="noopener noreferrer" alt = "github">
                <div className='aboutmebutton githubbutton'>
                  <img className='github' src = { github }></img>
                  <p>GitHub Page</p>
                </div>
                </a>
                <a href = "https://drive.google.com/file/d/151GyXMqMP7wq571OO6Mu-xP-C8lHL283/view" target = "_blank" rel="noopener noreferrer" alt = "github">
                <div className='aboutmebutton githubbutton'>
                  <img className='github' src = { resume }></img>
                  <p>My Resume</p>
                </div>
                </a>
              </div>
            </div>
          </ScrollFadeIn>
          <ScrollFadeIn>
            <div id = "skills" className = "section">
            <h1>Skills</h1>
            <div className = "skillarea">

              <div className = "skillcard skilllanguage">
                <div className = "skillcategoryname">Languages</div>
                <div className = "skillchips">
                  <span className="skillchip">C++</span>
                  <span className="skillchip">C</span>
                  <span className="skillchip">JavaScript</span>
                  <span className="skillchip">Python</span>
                  <span className="skillchip">SQL</span>
                  <span className="skillchip">Bash</span>
                </div>
              </div>

              <div className = "skillcard skillfrontend">
                <div className = "skillcategoryname">Frontend</div>
                <div className = "skillchips">
                  <span className="skillchip">React</span>
                  <span className="skillchip">React Native</span>
                  <span className="skillchip">Qt / C++</span>
                  <span className="skillchip">HTML</span>
                  <span className="skillchip">CSS</span>
                  <span className="skillchip">Chart.js</span>
                </div>
              </div>

              <div className = "skillcard skillbackend">
                <div className = "skillcategoryname">Backend</div>
                <div className = "skillchips">
                  <span className="skillchip">Node.js</span>
                  <span className="skillchip">Express.js</span>
                  <span className="skillchip">REST APIs</span>
                  <span className="skillchip">SQLite</span>
                  <span className="skillchip">JWT Auth</span>
                  <span className="skillchip">Docker</span>
                </div>
              </div>

              <div className = "skillcard skillembedded">
                <div className = "skillcategoryname">Embedded &amp; Systems</div>
                <div className = "skillchips">
                  <span className="skillchip">ESP32</span>
                  <span className="skillchip">MQTT</span>
                  <span className="skillchip">BLE</span>
                  <span className="skillchip">Sensor I/O</span>
                  <span className="skillchip">Serial Comm</span>
                  <span className="skillchip">LibreHardwareMonitor</span>
                </div>
              </div>

              <div className = "skillcard skilltools">
                <div className = "skillcategoryname">Dev Tools &amp; OS</div>
                <div className = "skillchips">
                  <span className="skillchip">Linux</span>
                  <span className="skillchip">Git</span>
                  <span className="skillchip">GitHub</span>
                  <span className="skillchip">Docker</span>
                  <span className="skillchip">VSCode</span>
                  <span className="skillchip">NeoVim</span>
                  <span className="skillchip">Expo Go</span>
                  <span className="skillchip">Windows</span>
                  <span className="skillchip">MacOS</span>
                </div>
              </div>

            </div>
            </div>
          </ScrollFadeIn>
            
          <ScrollFadeIn>
          <div id="projects" className="section">
            <h1>Projects</h1>
            <div className="projectarea">

              <a href="https://github.com/pearcepackman/CorePanel" target="_blank" rel="noopener noreferrer" className="projectrow projectcorepanel">
                <div className="projectrowleft">
                  <span className="projectrowname">CorePanel</span>
                </div>
                <div className="projectrowcontent">
                  <p className="projectrowdesc">Desktop system monitor built with Qt — visualizes live CPU, GPU, RAM, and disk metrics via real-time charts using LibreHardwareMonitor sensor data.</p>
                  <div className="projectrowchips">
                    <span className="projectchip">C++</span>
                    <span className="projectchip">C#</span>
                    <span className="projectchip">Qt</span>
                    <span className="projectchip">QtCharts</span>
                    <span className="projectchip">LibreHardwareMonitor</span>
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
                    <span className="projectchip">ESP32</span>
                    <span className="projectchip">MQTT</span>
                    <span className="projectchip">React Native</span>
                    <span className="projectchip">Node.js</span>
                    <span className="projectchip">TypeScript</span>
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
                    <span className="projectchip">React Native</span>
                    <span className="projectchip">TypeScript</span>
                    <span className="projectchip">Computer Vision</span>
                    <span className="projectchip">UI/UX</span>
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
                    <span className="projectchip">React</span>
                    <span className="projectchip">Node.js</span>
                    <span className="projectchip">Express.js</span>
                    <span className="projectchip">SQL</span>
                    <span className="projectchip">JWT</span>
                  </div>
                </div>
                <span className="projectrowarrow">&#8599;</span>
              </a>

            </div>
          </div>
          </ScrollFadeIn>
          
          <ScrollFadeIn> 
          <div id = 'experience' className="section">
            <h1>Experience</h1>
            <div className='educationarea'>
              
              <a href = "https://damslabumbc.github.io/" target = "_blank" rel="noopener noreferrer" alt = "DAMS Link">
              <div className='school'>
                <div className='schoolanddates'>
                  <h3>Undergraduate Research Assistant</h3>
                  <h5>June 2025 - Current</h5>
                </div>
                <div className = "schoolnotes">
                  <p>
                    - Built an indoor navigation app using Bluetooth beacons for real-time positioning and directions<br></br>
                    - Implemented BLE beacon detection including signal processing and device ranging<br></br>
                    - Designed and implemented a pathfinding algorithm supporting multiple floors<br></br>
                    - Designed and developed frontend UI components for live user position, pathfinding, and turn-by-turn directions
                  </p>
                  <br></br>
                </div>
              </div>
              </a>

              <a href = "https://devpost.com/software/d-kh8jf4" target = "_blank" rel="noopener noreferrer" alt = "DAMS Link">
              <div className='school'>
                <div className='schoolanddates'>
                  <h3>Hackathon Winner</h3>
                  <h5>April 2025</h5>
                </div>
                <div className = "schoolnotes">
                  <p>
                    - Awarded Best Computer Vision for developing a goal-tracking app using image recognition to monitor user progress<br></br>
                    - Designed a clean, user-friendly UI in React Native to enhance app usability and engagement<br></br>
                    - Learned React Native UI in 24 hours and collaborated with a team to meet tight deadlines<br></br>
                    
                  </p>
                  <br></br>
                </div>
              </div>
              </a>
            </div>
          </div>
          </ScrollFadeIn>
          <ScrollFadeIn>
          <div id = "education" className = "section">
            <h1>Education</h1>
            <div className = "educationarea">
              <div className = "school">
                <div className = "schoolanddates">
                  <h3>University of Maryland, Baltimore County (UMBC)</h3>
                  <h5>August 2024 - December 2026</h5>
                </div>
                <div className = "schoolnotes">
                  <p>
                    - Bachelor of Science in Computer Science — Expected December 2026<br></br>
                    - GPA: 3.62<br></br>
                    - Coursework: Software Engineering, Operating Systems, Computer Security, Data Structures, Algorithms, Malware Analysis, Computer Architecture, Assembly Language, Principles of Programming Languages<br></br>
                    - Extra Curricular Activities: UMBC Racing Team Member
                  </p>
                  <br></br>
                </div>
                
              </div>

              <div className = "school">
                <div className = "schoolanddates">
                  <h3>Carroll Community College</h3>
                  <h5>August 2022 - May 2024</h5>
                </div>
                <div className = "schoolnotes">
                  <p>
                    - Obtained Associate's Degree in Arts and Sciences<br></br>
                    
                    - GPA: 3.83 (Magna Cum Laude)<br></br>
                    - Coursework: Introduction to Python Programming, Introduction to C++ Programming<br></br>
                    - Extra Curricular Activities: PTK Honor's Society Member
                  </p>
                </div>
                
              </div>
            </div>
          </div>
          </ScrollFadeIn>
        </div>
      </header>
      
            <div className='footer'>
              <div className='footertop'>
                <div className='footersitelinks'>
                  <h5>Quick Links</h5>
                  <a href = '#aboutme' ><p>About Me</p></a>
                  <a href = '#skills' ><p>Skills</p></a>
                  <a href = '#projects' ><p>Projects</p></a>
                  <a href = '#experience' ><p>Experience</p></a>
                  <a href = '#education' ><p>Education</p></a>
                </div>
                <div className='footerresources'>
                  <h5>Resources</h5>
                  <a href = "https://github.com/pearcepackman" target = "_blank" rel="noopener noreferrer" alt = "linkedin">
                  <p>GitHub</p>
                  </a>
                  <a href = "https://www.linkedin.com/in/pearce-packman/" target = "_blank" rel="noopener noreferrer" alt = "linkedin">
                  <p>LinkedIn</p>
                  </a>
                  <a href = "https://drive.google.com/file/d/151GyXMqMP7wq571OO6Mu-xP-C8lHL283/view" target = "_blank" rel="noopener noreferrer" alt = "linkedin">
                  <p>Resume</p>
                  </a>

                </div>
              </div>
              <div className='footerbottom'>
                <p>Designed and Developed by Pearce Packman :)</p>
              </div>
            </div>
          
    </div>
  );
}

export default App;
