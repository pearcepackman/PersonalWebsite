import pictureofme from './assets/pictureofme.png';
import github from './assets/github-sign.png';
import linkedin from './assets/linkedin.png';
import resume from './assets/resume.png';
import email from './assets/email.png';
import pslogo from './assets/pslogo.png';
import pcrlogo from './assets/pcrlogo.png';
import pcli from './assets/pcli.png';
import library from './assets/book.png';
import iot from './assets/iot.png';
import app from './assets/app-store.png';
import terminal from './assets/terminal.png';
import backend from './assets/coding.png';
import frontend from './assets/front-development.png';
import embedded from './assets/integrated-system.png';
import tools from './assets/tools.png';
import softskills from './assets/interpersonal-skills.png';
import corepanel from './assets/monitor.png';
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
                  From embedded IoT systems to full-stack apps and real-time hardware monitoring tools, I enjoy building polished software that bridges low-level systems and user-facing design. 
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
                    <p>Who Am I?</p>
                  </div>
                  <div className='aboutrightdesc'>
                    <p>
                      Hey, I'm Pearce — thanks for checking out my site!
                      I’ve gone from working in the trades to studying Computer Science at UMBC,
                      where I’ve been diving deep into full-stack development, embedded systems,
                      and real-time projects. I love building things that blend software and hardware,
                      and I'm currently contributing to an IoT research project through the DAMS Lab.
                      Right now, I’m focused on refining my skills and landing a summer internship for 2026!
                    </p>

                  </div>
                  
                </div>
              </div>
              <div className='aboutmelinks'>
                <a href = "https://www.linkedin.com/in/pearce-packman/" target = "_blank" rel="noopener noreferrer" alt = "linkedin">
                <div className='aboutmebutton linkedinbutton'>
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
              </div>
            </div>
          </ScrollFadeIn>
          <ScrollFadeIn>
            <div id = "skills" className = "section">
            <h1>Skills</h1>
            <div className = "projectarea">
              <div className = "skillcard skilllanguage">
                  <div className = "skilltag">
                    Languages
                  </div>
                  <div className="skillcardimg">
                    <img className = "languageimg" src = {terminal}></img>
                  </div>
                  <div className = "skillpointslayout">
                    <ul className = "skillpoints">
                      <li>C++</li>
                      <li>JavaScript</li>
                    </ul>
                    <ul className = "skillpoints">
                      <li>Bash/Shell</li>
                      <li>Python</li>
                    </ul>
                  </div>
                
              </div>

              <div className = "skillcard skillbackend">
                  <div className = "skilltag">
                    Backend
                  </div>
                  <div className="skillcardimg">
                    <img className = "backendimg" src = {backend}></img>
                  </div>
                  <div className = "skillpointslayout">
                    <ul className = "skillpoints">
                      <li>Node.js</li>
                      <li>Docker</li>
                      <li>JWT</li>
                    </ul>
                    <ul className = "skillpoints">
                      <li>Express.js</li>
                      <li>REST APIs</li>
                      <li>SQLite</li>
                    </ul>
                  </div>
                
              </div>

              <div className = "skillcard skillfrontend">
                  <div className = "skilltag">
                    Frontend
                  </div>
                  <div className="skillcardimg">
                    <img className = "frontendimg" src = {frontend}></img>
                  </div>
                  <div className = "skillpointslayout">
                    <ul className = "skillpoints">
                      <li>React</li>
                      <li>Qt</li>
                      <li>CSS</li>
                    </ul>
                    <ul className = "skillpoints">
                      <li>React Native</li>
                      <li>HTML</li>
                      <li>Chart.js</li>
                    </ul>
                  </div>
                
              </div>

              <div className = "skillcard skillembedded">
                  <div className = "skilltag">
                    Embedded
                  </div>
                  <div className="skillcardimg">
                    <img className = "frontendimg" src = {embedded}></img>
                  </div>
                  <div className = "skillpointslayout">
                    <ul className = "skillpoints">
                      <li>ESP32</li>
                      <li>Serial</li>
                      
                    </ul>
                    <ul className = "skillpoints">
                      <li>ArduinoIDE</li>
                      <li>JSON Data</li>
                      
                    </ul>
                  </div>
                
              </div>

              <div className = "skillcard skilltools">
                  <div className = "skilltag">
                    Dev Tools
                  </div>
                  <div className="skillcardimg">
                    <img className = "frontendimg" src = {tools}></img>
                  </div>
                  <div className = "skillpointslayout">
                    <ul className = "skillpoints">
                      <li>Linux</li>
                      <li>Git</li>
                      <li>VSCode</li>
                    </ul>
                    <ul className = "skillpoints">
                      <li>Windows</li>
                      <li>GitHub</li>
                      <li>NeoVim</li>
                      
                    </ul>
                  </div>
                
              </div>

              <div className = "skillcard skillsoft">
                  <div className = "skilltag">
                    Soft Skills
                  </div>
                  <div className="skillcardimg">
                    <img className = "frontendimg" src = {softskills}></img>
                  </div>
                  <div className = "skillpointslayout">
                    <ul className = "skillpoints">
                      <li>Adaptability</li>
                      <li>Discipline</li>
                      <li>Leadership</li>
                    </ul>
                    <ul className = "skillpoints">
                      <li>Accountability</li>
                      <li>Initiative</li>
                      <li>Collaboration</li>
                      
                    </ul>
                  </div>
                
              </div>
          
            </div>
            </div>
          </ScrollFadeIn>
            
          <ScrollFadeIn>
          <div id="projects" className = "section">
            <h1>Projects</h1>
            <div className = "projectarea">

              <div className= "projectcard projectcorepanel">
                <a href = "https://github.com/pearcepackman/CorePanel" target = "_blank" rel="noopener noreferrer" alt = "CorePanel">
                <div className = "projecttagarea">
                  <div className = "projecttag">
                    Backend
                  </div>
                  <div className = "projecttag">
                    C++
                  </div>
                  <div className = "projecttag">
                    C#
                  </div>
                  <div className = "projecttag">
                    Qt
                  </div>
                </div>
                <div className="projectcardimg">
                    <img className = "corepanelimg" src = {corepanel}></img>
                </div>
                <div className = "projectdesclayout">
                  <p><span className='projectname'>CorePanel</span> is a C++/Qt desktop app with a C# backend that displays real-time CPU, GPU, RAM, and disk usage using live charts and system sensor data from LibreHardwareMonitor.</p>
                </div>
                </a>  
              </div>


              <div className= "projectcard projectsmarthome">
                <a href = "https://github.com/pearcepackman/Smart-home-dashboard" target = "_blank" rel="noopener noreferrer" alt = "Smart Home Dashboard">
                <div className = "projecttagarea">
                  <div className = "projecttag">
                    Full-Stack
                  </div>
                  <div className = "projecttag">
                    ESP32
                  </div>
                  <div className = "projecttag">
                    React Native
                  </div>
                  <div className = "projecttag">
                    TypeScript
                  </div>
                </div>
                <div className="projectcardimg">
                    <img className = "iotimg" src = {iot}></img>
                </div>
                <div className = "projectdesclayout">
                  <p><span className='projectname'>Smart Home Dashboard</span> is a full-stack IoT platform using ESP32, Node.js, and React Native to monitor real-time temperature, humidity, gas, and motion data.</p>
                </div>
                </a>  
              </div>

              <div className= "projectcard projectsnapmotive">
                <a href = "https://devpost.com/software/d-kh8jf4" target = "_blank" rel="noopener noreferrer" alt = "Smart Home Dashboard">
                <div className = "projecttagarea">
                  <div className = "projecttag">
                    Hackathon Winner
                  </div>
                  <div className = "projecttag">
                    React Native
                  </div>
                  <div className = "projecttag">
                    UI/UX
                  </div>
                  <div className = "projecttag">
                    TypeScript
                  </div>
                </div>
                <div className="projectcardimg">
                    <img className = "iotimg" src = {app}></img>
                </div>
                <div className = "projectdesclayout">
                  <p><span className='projectname'>SnapMotive</span> is a gamified goal-tracking app built at HackHounds 2025 that uses computer vision to verify task completion through photos, letting users set daily goals and track progress.</p>
                </div>
                </a>  
              </div>

              <div className= "projectcard projectprojectssimplified">
                <a href = "https://projectmgmtapplication-fd3214989d4c.herokuapp.com/" target = "_blank" rel="noopener noreferrer" alt = "Smart Home Dashboard">
                <div className = "projecttagarea">
                  <div className = "projecttag">
                    Full-Stack
                  </div>
                  <div className = "projecttag">
                    JavaScript
                  </div>
                  <div className = "projecttag">
                    Express.JS
                  </div>
                  <div className = "projecttag">
                    React
                  </div>
                </div>
                <div className="projectcardimg">
                    <img className = "psimg" src = {pslogo}></img>
                </div>
                <div className = "projectdesclayout">
                  <p><span className='projectname'>Projects Simplified</span> is a full‑stack CRUD web app built with Node.js, Express, JavaScript, and SQL, featuring JWT‑based secure login and intuitive task & project organization.</p>
                </div>
                </a>  
              </div>



              

            </div>
            
          </div>
          </ScrollFadeIn>
          
          <ScrollFadeIn> 
          <div id = 'experience' className="section">
            <h1>Experience</h1>
            <div className='educationarea'>
              
              <div className='school'>
                <div className='schoolanddates'>
                  <h3>Undergraduate Research Assistant</h3>
                  <h5>June 2025 - Current</h5>
                </div>
                <div className = "schoolnotes">
                  <p>
                    - Contributed to the DAMS Lab’s IoT-based Smart Library project focused on scalable environmental sensor deployment<br></br>
                    - Created a comprehensive Amazon-based buy sheet with cost analysis, redundancy planning, and sensor comparison<br></br>
                    - Researched and selected embedded hardware based on capabilities: ESP32 boards, BME680, SDS011, LDR, and LM393 sensors<br></br>
                    - Proposed a clean, minimal frontend UI mockup for a multi-room dashboard
                  </p>
                  <br></br>
                </div>
              </div>
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
                  <h5>August 2024 - Current</h5>
                </div>
                <div className = "schoolnotes">
                  <p>
                    - Obtaining Bachelor's of Science in Computer Science<br></br>
                    - Graduating in December of 2026<br></br>
                    - GPA: 3.79<br></br>
                    - Coursework: Data Structures, Principles of Programming Languages, Computer Organazation and Assembly Language<br></br>
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
        <p className='footer'>Thank you for reading! If you're interested to know more about me,
                you can send me an email at pearcepackman@gmail.com.
              </p>
      </header>
    </div>
  );
}

export default App;
