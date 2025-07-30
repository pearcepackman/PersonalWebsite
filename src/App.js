import pictureofme from './assets/pictureofme.png';
import github from './assets/github.png';
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
              <a href = "#skills" className = "navbaroptions">Skills</a>
              <a href = "#projects" className = "navbaroptions">Projects</a>
              <a href = "#projects" className = "navbaroptions">Projects</a>
              <a href = "#projects" className = "navbaroptions">Projects</a>
              <a href = "#projects" className = "navbaroptions">Projects</a>
              
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
                  <a href = "#skills" className = "workbutton">
                    Explore my work ▼
                  </a>
                </div>
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

              


              


              
              
              
                
                
          
            
            </div>
          </div>
          </ScrollFadeIn>
            
          <ScrollFadeIn>
          <div id="projects" className = "section">
            <h1>Projects</h1>
            <div className = "projectarea">
              <div className = "project">
                <a href = "https://github.com/pearcepackman/CorePanel" target = "_blank" rel="noopener noreferrer" alt = "CorePanel">
                <div className = "projectpic">
                  <img className = "iot" src = {iot}></img>
                </div>
                <h3>CorePanel</h3>
                <p>CorePanel is a C++/Qt desktop app with a C# backend that displays real-time CPU, GPU, RAM, and disk usage using live charts and system sensor data from LibreHardwareMonitor. 
                </p>
                
                </a>
              </div>
              <div className = "project">
                <a href = "https://github.com/pearcepackman/Smart-home-dashboard" target = "_blank" rel="noopener noreferrer" alt = "smart home sensor system">
                <div className = "projectpic">
                  <img className = "iot" src = {iot}></img>
                </div>
                <h3>Smart Home Sensor System</h3>
                <p>
                   ESP32 firmware sends sensor data to a REST API backend, visualized in a React Native mobile app with Docker-based deployment.               </p>
                
                </a>
              </div>
              
              <div className = "project">
                <a href = "https://devpost.com/software/d-kh8jf4" target = "_blank" rel="noopener noreferrer" alt = "projects simplified">
                <div className = "projectpic">
                  <img className = "iot" src = {app}></img>
                </div>
                <h3>SnapMotive</h3>
                <p>
                  Winning Best Computer Vision at Loyola HackHounds 2025, SnapMotive is a goal tracking app developed in React Native that uses computer vision to track your progress. Collaborated in a team to deploy the app within 24 hours
                </p>
                
                </a>
              </div>
              <div className = "project">
                <a href = "https://projectmgmtapplication-fd3214989d4c.herokuapp.com/" target = "_blank" rel="noopener noreferrer" alt = "projects simplified">
                <div className = "projectpic">
                  <img className = "pslogo" src = {pslogo}></img>
                </div>
                <h3>Projects Simplified</h3>
                <p>
                  
                  Full-stack CRUD application for project and task management with a secure JWT-based login system. Built with JavaScript, Node.js, Express, SQL, and styled with HTML/CSS, the app is deployed on Heroku to ensure 24/7 accessibility
                </p>
                
                </a>
              </div>
              <div className = "project">
              <a href = "https://github.com/pearcepackman/Pearces_CLI" target = "_blank" rel="noopener noreferrer" alt = "projects simplified">
                
                <div className = "projectpic">


                  <img className = "cli"src = {pcli}></img>
                                                  
                </div>
                <h3>PCLI: Pearce's CLI</h3>
                
                <p>
                  Python-based command-line interface (CLI) tool for intuitive file and directory management, supporting navigation, creation, editing, and deletion operations. Features a built-in help and error system for user-friendly interaction, utilizing Python's cmd and os libraries.
                </p>
                
                
                </a>
              </div>
              <div className = "project">
                <a href = "https://github.com/pearcepackman/Library_Management_System" target = "_blank" rel="noopener noreferrer" alt = "projects simplified">
                <div className = "projectpic">
                  <img className = "bookimg" src = {library}></img>
                </div>
                <h3>Library Management System</h3>
                <p>
                  C++ library management system using object-oriented programming to manage books and customer records. Utilizes a command-line interface for efficiently adding, deleting, searching, and checking out books, making it easy to use
                  
                </p>
                
                </a>
              </div>
              <div className = "project">
                <a href = "https://pearcescolognereview.netlify.app/" target = "_blank" rel="noopener noreferrer" alt = "pearce's cologne review">
                <div className = "projectpic">
                  <img className = "pcrlogo" src = {pcrlogo}></img>
                </div>
                <h3>Pearce's Cologne Review</h3>
                <p>
                  Responsive frontend application with React and Node.js to showcase a personal cologne collection, featuring smooth navigation across multiple pages. Created a clean, mobile-friendly UI and deployed the app on Netlify for stable public access
                  
                </p>
                
                </a>
              </div>

            </div>
            
          </div>
          </ScrollFadeIn>
          <div className = "section">
            <h1>Skills</h1>
            <div className = "projectarea">
              <div className = "skillcard">
                <div className = "skillcardtitle">
                  <h3>Full-Stack Development</h3>
                </div>
                <div className="skillcarddesc">
                  <p>
                    - Proficient in building responsive full-stack applications using React, React Native, Node.js, Express.js, JSON, SQL, HTML, and CSS<br></br>
                    - Experience designing RESTful APIs and integrating JWT-based authentication for secure login systems<br></br>
                    - Developed mobile and desktop UIs with intuitive navigation and live data visualizations <br></br>
                    - Deployed applications using Heroku and Netlify for stable, public access
                  </p>
                </div>
              </div>
              
                <div className = "skillcard">
                  <div className = "skillcardtitle">
                    <h3>Software Engineering and Programming</h3>
                  </div>
                  <div className="skillcarddesc">
                    <p>
                      - Write and maintain software in Python, C++, and JavaScript using object-oriented and modular principles<br></br>
                      - Backend development with SQL and SQLite for CRUD operations<br></br>
                      - Built CLI tools and embedded C++ firmware for ESP32 IoT devices with JSON serialization<br></br>
                      - Version control using Git & GitHub; worked in fast-paced team environments for Hackathon<br></br>
                      - Proficient with VSCode, Arduino IDE, and CLI tools
                    </p>
                  </div>
                  
                </div>
                <div className = "skillcard">
                <div className = "skillcardtitle">
                  <h3>Collaboration and Problem Solving</h3>
                </div>
                <div className="skillcarddesc">
                  <p>
                    - Strong problem-solving skills demonstrated through end-to-end personal projects and hackathon challenges<br></br>
                    - Thrive in collaborative settings like hackathons and engineering projects (UMBC Racing Team), contributing under pressure and tight deadlines<br></br>
                    - Comfortable communicating technical concepts through tutoring, group work, and documentation<br></br>
                    - Bring a strong work ethic and maturity from full-time experience in the trades prior to pursuing computer science<br></br>
                    
                  </p>
                </div>
              </div>
          
            
            </div>
          </div>
          <ScrollFadeIn> 
          <div className = "section">
            <h1>Projects</h1>
            <div className = "projectarea">
              <div className = "project">
                <a href = "https://github.com/pearcepackman/Smart-home-dashboard" target = "_blank" rel="noopener noreferrer" alt = "smart home sensor system">
                <div className = "projectpic">
                  <img className = "iot" src = {iot}></img>
                </div>
                <h3>Smart Home Sensor System</h3>
                <p>
                  Full-stack project with embedded C++ firmware for an ESP32 that transmits real-time sensor data as JSON to a Node.js + Express backend with a REST API and SQLite database. Designed a React Native mobile app using Expo to visualize live and historical data, ensuring a user-friendly experience
                </p>
                
                </a>
              </div>
              <div className = "project">
                <a href = "https://devpost.com/software/d-kh8jf4" target = "_blank" rel="noopener noreferrer" alt = "projects simplified">
                <div className = "projectpic">
                  <img className = "iot" src = {app}></img>
                </div>
                <h3>SnapMotive</h3>
                <p>
                  Winning Best Computer Vision at Loyola HackHounds 2025, SnapMotive is a goal tracking app developed in React Native that uses computer vision to track your progress. Collaborated in a team to deploy the app within 24 hours
                </p>
                
                </a>
              </div>
              <div className = "project">
                <a href = "https://projectmgmtapplication-fd3214989d4c.herokuapp.com/" target = "_blank" rel="noopener noreferrer" alt = "projects simplified">
                <div className = "projectpic">
                  <img className = "pslogo" src = {pslogo}></img>
                </div>
                <h3>Projects Simplified</h3>
                <p>
                  
                  Full-stack CRUD application for project and task management with a secure JWT-based login system. Built with JavaScript, Node.js, Express, SQL, and styled with HTML/CSS, the app is deployed on Heroku to ensure 24/7 accessibility
                </p>
                
                </a>
              </div>
              <div className = "project">
              <a href = "https://github.com/pearcepackman/Pearces_CLI" target = "_blank" rel="noopener noreferrer" alt = "projects simplified">
                
                <div className = "projectpic">


                  <img className = "cli"src = {pcli}></img>
                                                  
                </div>
                <h3>PCLI: Pearce's CLI</h3>
                
                <p>
                  Python-based command-line interface (CLI) tool for intuitive file and directory management, supporting navigation, creation, editing, and deletion operations. Features a built-in help and error system for user-friendly interaction, utilizing Python's cmd and os libraries.
                </p>
                
                
                </a>
              </div>
              <div className = "project">
                <a href = "https://github.com/pearcepackman/Library_Management_System" target = "_blank" rel="noopener noreferrer" alt = "projects simplified">
                <div className = "projectpic">
                  <img className = "bookimg" src = {library}></img>
                </div>
                <h3>Library Management System</h3>
                <p>
                  C++ library management system using object-oriented programming to manage books and customer records. Utilizes a command-line interface for efficiently adding, deleting, searching, and checking out books, making it easy to use
                  
                </p>
                
                </a>
              </div>
              <div className = "project">
                <a href = "https://pearcescolognereview.netlify.app/" target = "_blank" rel="noopener noreferrer" alt = "pearce's cologne review">
                <div className = "projectpic">
                  <img className = "pcrlogo" src = {pcrlogo}></img>
                </div>
                <h3>Pearce's Cologne Review</h3>
                <p>
                  Responsive frontend application with React and Node.js to showcase a personal cologne collection, featuring smooth navigation across multiple pages. Created a clean, mobile-friendly UI and deployed the app on Netlify for stable public access
                  
                </p>
                
                </a>
              </div>

            </div>
            
          </div>
          </ScrollFadeIn>
          <div className="section">
            <h1>Achievemenets</h1>
            <div className='acharea'>
              <div className='school'>
                <div className='schoolanddates'>
                  <h3>Hackathon Winner - HackHounds 2025 Loyola University, MD</h3>
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
          <div className = "section">
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
              <p className='footer'>Thank you for reading! If you're interested to know more about me,
                you can send me an email at pearcepackman@gmail.com.
              </p>
            </div>
          </div>
          
        </div>
      </header>
    </div>
  );
}

export default App;
