import pictureofme from './assets/pictureofme.png';
import github from './assets/github.png';
import linkedin from './assets/linkedin.png';
import resume from './assets/resume.png';
import email from './assets/email.png';
import pslogo from './assets/pslogo.png';
import pcrlogo from './assets/pcrlogo.png';
import pcli from './assets/pcli.png';
import library from './assets/book.png';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className = "Nav">
          <div className = "navbar">
            <div className = "topnav">
              <div className = "lefthandnav">
                <img className = "picofme" src = {pictureofme} width="90" height="90" alt = "pictureofme"/>
                <div className = "nametext">
                  <h2>Pearce Packman</h2>
                  <p>Computer Science student at UMBC</p>
                </div>
              </div>
              <div className = "righthandnav">
                <a href = "https://github.com/pearcepackman" target = "_blank" rel="noopener noreferrer">
                  <img className = "picofme" src = {github} width="40" height="40" alt = "github"/>
                </a>
                <a href = "https://www.linkedin.com/in/pearce-packman/" target = "_blank" rel="noopener noreferrer">
                  <img className = "picofme" src = {linkedin} width="40" height="40" alt = "linkedin"/>
                </a>
                <a href = "mailto:pearcepackman@gmail.com" target = "_blank" rel="noopener noreferrer">
                  <img className = "picofme" src = {email} width="40" height="40" alt = "github"/>
                </a>
                
                <a href = "https://drive.google.com/file/d/151GyXMqMP7wq571OO6Mu-xP-C8lHL283/view" target = "_blank" rel="noopener noreferrer">
                  <img className = "picofme" src = {resume} width="40" height="40" alt = "github"/>
                </a>
              </div>
            </div>
            <div className = "navdesc">
              <p>Hello, my name is Pearce. I am a dedicated computer science student
                at UMBC with a strong academic record and will be graduating in December 2026. 
                Most of my experience has been in full-stack web development. I am passionate
                and excited to expand my knowledge and skills!
              </p>
              
            
            </div>
          </div>
          <div className = "section">
            <h1>Skills</h1>
            <div className = "projectarea">
              <div className = "skillcard">
                <div className = "skillcardtitle">
                  <h3>Full-Stack Web Development</h3>
                </div>
                <div className="skillcarddesc">
                  <p>
                    - Experience in building full-stack applications<br></br>
                    - Experience using Node.JS, Express.JS, React & React Native, HTML, CSS, and SQL<br></br>
                    - Create RESTful API for web applications <br></br>
                    - Implemented secure user login and authentication system<br></br>
                    - Ensure clean and stable mobile functionality 
                  </p>
                </div>
              </div>
              
                <div className = "skillcard">
                  <div className = "skillcardtitle">
                    <h3>Software Development and Programming</h3>
                  </div>
                  <div className="skillcarddesc">
                    <p>
                      - Write and create programs in Python, C++, and JavaScript<br></br>
                      - Backend development experience utilizing SQL to perform CRUD operations<br></br>
                      - Utilized Git and Github for easy version control <br></br>
                      - Developed software using industry standard tools like VSCode and Git
                    </p>
                  </div>
                  
                </div>
                <div className = "skillcard">
                <div className = "skillcardtitle">
                  <h3>Soft-Skills and Teamwork</h3>
                </div>
                <div className="skillcarddesc">
                  <p>
                    - Strong problem-solving and analytical skills developed building my own projects <br></br>
                    - Experience working collaboratively on team projects in education and the UMBC
                    Racing Team<br></br>
                    - Able to communicate and teach complex topics from tutoring experience<br></br>
                    
                  </p>
                </div>
              </div>
          
              
            </div>
          </div>
          <div className = "section">
            <h1>Projects</h1>
            <div className = "projectarea">
              <div className = "project">
                <a href = "https://projectmgmtapplication-fd3214989d4c.herokuapp.com/" target = "_blank" rel="noopener noreferrer" alt = "projects simplified">
                <div className = "projectpic">
                  <img className = "pslogo" src = {pslogo}></img>
                </div>
                <h3>Projects Simplified</h3>
                <p>
                  
                  - Full-Stack CRUD application to manage projects<br></br>
                  - Secure user authentication and login system<br></br>
                  - Utilizes SQL Database to create, read, update, and delete information<br></br>
                  - Deployed on Heroku for stable usage<br></br>
                  - Built using Node.JS, Express.JS, and SQL
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
                  - Command-line Interface (CLI) tool for file management <br></br>
                  - Simple directory navigation features<br></br>
                  - Functionality to create, read, update, and delete directories and text files<br></br>
                  - User-friendly help and error system for ease of use<br></br>
                  - Built using Python, CMD and OS libraries
                </p>
                
                
                </a>
              </div>
              <div className = "project">
                <a href = "https://github.com/pearcepackman/Library_Management_System" target = "_blank" rel="noopener noreferrer" alt = "projects simplified">
                <div className = "projectpic">
                  <img className = "bookimg" src = {library}></img>
                </div>
                <h3>C++ Library Management System</h3>
                <p>
                  - Library Management System that keeps track of books and customers<br></br>
                  - Utilizes object-oriented (OOP) programming principles<br></br>
                  - Simple commands to add, delete, and search customers, along with checking out books<br></br>
                  - User-friendly CLI for efficient book and customer management<br></br>
                  
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
                  - Built using Node.JS and React<br></br>
                  - Frontend application designed to showcase my cologne collection<br></br> 
                  - Designed full mobile functionality<br></br>
                  - Designed intuitive UI with navigation across multiple pages<br></br>
                  - Deployed on Netlify for stable usage<br></br>
                  
                </p>
                
                </a>
              </div>

            </div>
            
          </div>
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
                    - GPA: 4.0 (Dean's List)<br></br>
                    - Coursework: Principles of Programming Languages, Computer Organazation and Assembly Language<br></br>
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
