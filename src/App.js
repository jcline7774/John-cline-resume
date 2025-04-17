import React, { useState, useEffect } from 'react';
import { Link, Element } from "react-scroll";
import { motion } from "framer-motion";
import './styles.css';
import Herosection from './components/Herosection';
import sl from './components/sl.png';
import sg from './components/sg.png';
import sx from './components/sx.png';
import ECS from './components/images/ECS.jpg';
import AH from './components/images/AH.jpg';
import TB from './components/images/TB.jpg';


function App() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
      setScrollPosition(window.scrollY);
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });

    return () => {
      window.removeEventListener('scroll', () => {});
    };
  }, []);
  console.log(scrollPosition);
  return (
    
    <div>
      <p>{scrollPosition}</p>
   
    <div className="resume-container">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          
        <nav class="navbar">
          
  <div class="navbar-brand"className='clickable'>
    
  
            <ul>
              
              <li>
                <Link to="profile" smooth={true} duration={500}>
                  Profile
                </Link>
              </li>
              <li>
                <Link to="skills" smooth={true} duration={500}>
                  Skills
                </Link>
              </li>
              <li>
                <Link to="experience" smooth={true} duration={500}>
                  Experience
                </Link>
              </li>
              <li>
                <Link to="education" smooth={true} duration={500}>
                  Education
                </Link>
              </li>
              <li>
                <Link to="projects" smooth={true} duration={500}>
                  Projects
                </Link>
              </li>
           <container className='social-media'>
    <li><a href="https://www.linkedin.com/in/jmcline1" target="jmcline1"><img src= {sl} alt='linkedin' width={20} /></a></li>
    <li><a href="https://www.github.com/jcline7774" target="jcline7774"><img src= {sg} alt='github'width={20}/></a></li>
    <li><a href="https://x.com/jcline777" target="@jcline777"><img src= {sx} alt='x' width={20} /></a></li>
  </container></ul>
          </div></nav>
        </div>
        
      </header><div>
      <Herosection /><div className="skills-container">
        
        </div>

      
      {/* Profile Section */}
      <Element name="profile" className="profile-item">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2><i>About me...</i></h2>
          <p>
            With over a decade of professional experience, I have excelled in roles as a network administrator,
            web developer, and graphic designer. An avid agilest and project manager specializing in enhancing productivity, project delivery, and improving all aspects of project methodology, I have a proven track record of success. 
 
          </p>
        </motion.div>
      </Element>

{/* Skills Section with Progress Bar */}
<Element name="skills" className="skills-item">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1><font color="#0da6ff">SKILLS </font>I HAVE EMBRACED OVER YEARS OF HARD WORK & PRACTICE </h1>
          <h2>I come to you with a toolbox full of skills that can only be aquired over time.  My expertise spans across a wide range of technologies such as MERN Stack, ExpressJS, Nodejs, MongoDB, MySQL, ReactJS, Cluster/Cloud computing, AWS/GCP/AZURE, and Adobe Creative Suite. Additionally, I possess strong networking and data communication skills, multilingual capabilities, and a deep understanding of various cultural business etiquettes. These skills enable me to work effectively as a software developer, application programmer, data analyst and team player.</h2>
          <ul>
          <h3>Frontend</h3>
          
          <div className="skills-container">
         <li> <div className="skill">
              <h4>Javascript(ES6+)</h4>
              <div className="progress-bar">
                <div className="progress-bar-inner" style={{ width: "97%" }}></div>
              </div>
            </div></li><li>
            <div className="skill">
              <h4>React.js</h4>
              <div className="progress-bar">
                <div className="progress-bar-inner" style={{ width: "93%" }}></div>
              </div>
            </div></li><li>
            <div className="skill">
              <h4>HTML/CSS</h4>
              <div className="progress-bar">
                <div className="progress-bar-inner" style={{ width: "99%" }}></div>
              </div>
            </div></li><li>
            <div className="skill">
              <h4>XML</h4>
              <div className="progress-bar">
                <div className="progress-bar-inner" style={{ width: "97%" }}></div>
              </div></div></li><li>
            <div className="skill">
              <h4>Redux</h4>
              <div className="progress-bar">
                <div className="progress-bar-inner" style={{ width: "89%" }}></div>
              </div>
            </div></li><li>
            <div className="skill">
              <h4>Mongoose</h4>
              <div className="progress-bar">
                <div className="progress-bar-inner" style={{ width: "91%" }}></div>
              </div>
            </div></li><li>
            <div className="skill">
              <h4>Typescript</h4>
              <div className="progress-bar">
                <div className="progress-bar-inner" style={{ width: "89%" }}></div>
              </div>
            </div></li><li>
            <div className="skill">
              <h4>jQuery</h4>
              <div className="progress-bar">
                <div className="progress-bar-inner" style={{ width: "90%" }}></div>
              </div>
            </div></li>
          </div></ul>

          <ul>
          <h3>Backend</h3>
          
          <div className="skills-container2">
         <li> <div className="skill">
              <h4>Python3</h4>
              <div className="progress-bar">
                <div className="progress-bar-inner" style={{ width: "90%" }}></div>
              </div>
            </div></li><li>
            <div className="skill">
              <h4>ExpressJS</h4>
              <div className="progress-bar">
                <div className="progress-bar-inner" style={{ width: "92%" }}></div>
              </div>
            </div></li><li>
            <div className="skill">
              <h4>MongoDB</h4>
              <div className="progress-bar">
                <div className="progress-bar-inner" style={{ width: "89%" }}></div>
              </div>
            </div></li><li>
            <div className="skill">
              <h4>Node.JS</h4>
              <div className="progress-bar">
                <div className="progress-bar-inner" style={{ width: "97%" }}></div>
              </div></div></li><li>
              <div className="skill">
              <h4>Java(basic)</h4>
              <div className="progress-bar">
                <div className="progress-bar-inner" style={{ width: "80%" }}></div>
              </div>
            </div></li><li>
            <div className="skill">
              <h4>JSON</h4>
              <div className="progress-bar">
                <div className="progress-bar-inner" style={{ width: "97%" }}></div>
              </div>
            </div></li><li>
            <div className="skill">
              <h4>MySQL / PostgreSQL</h4>
              <div className="progress-bar">
                <div className="progress-bar-inner" style={{ width: "92%" }}></div>
              </div>
            </div></li><li>
            <div className="skill">
              <h4>AWS - Cloud</h4>
              <div className="progress-bar">
                <div className="progress-bar-inner" style={{ width: "88%" }}></div>
              </div>
            </div></li><li>
            <div className="skill">
              <h4>Oracle(basic)</h4>
              <div className="progress-bar">
                <div className="progress-bar-inner" style={{ width: "83%" }}></div>
              </div>
            </div></li><li>
            <div className="skill">
              <h4>Docker</h4>
              <div className="progress-bar">
                <div className="progress-bar-inner" style={{ width: "85%" }}></div>
              </div>
            </div></li><li>
            <div className="skill">
              <h4>GitHub</h4>
              <div className="progress-bar">
                <div className="progress-bar-inner" style={{ width: "96%" }}></div>
              </div>
            </div></li><li>
            <div className="skill">
              <h4>Jira</h4>
              <div className="progress-bar">
                <div className="progress-bar-inner" style={{ width: "91%" }}></div>
              </div>
            </div></li>
          </div></ul>

          <ul>
          <h3>UI / Design</h3>
          
          <div className="skills-container2">
         <li> <div className="skill">
              <h4>CSS</h4>
              <div className="progress-bar">
                <div className="progress-bar-inner" style={{ width: "94%" }}></div>
              </div>
            </div></li><li>
            <div className="skill">
              <h4>Bootstrap</h4>
              <div className="progress-bar">
                <div className="progress-bar-inner" style={{ width: "82%" }}></div>
              </div>
            </div></li><li>
            <div className="skill">
              <h4>VS Code</h4>
              <div className="progress-bar">
                <div className="progress-bar-inner" style={{ width: "98%" }}></div>
              </div>
            </div></li><li>
            <div className="skill">
              <h4>Adobe CS</h4>
              <div className="progress-bar">
                <div className="progress-bar-inner" style={{ width: "98%" }}></div>
              </div>
            </div></li><li>
            <div className="skill">
              <h4>Marvel</h4>
              <div className="progress-bar">
                <div className="progress-bar-inner" style={{ width: "92%" }}></div>
              </div>
            </div></li><li>
            <div className="skill">
              <h4>Figma</h4>
              <div className="progress-bar">
                <div className="progress-bar-inner" style={{ width: "90%" }}></div>
              </div>
            </div></li>
          </div></ul>
        </motion.div>
      </Element>
      {/* Experience Section */}
      <Element name="experience" className="work-experience">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1>WORK EXPERIENCE</h1>
          <div class="experience-item">
            <h3>Full Stack Developer / Engineer</h3>
            <h4><i>White Cloud Technology Service Inc</i></h4>
            <h4> Fort Lauderdale, FL </h4>
            <p class='experience-itemD'>May 2022 - Present</p>
            </div><div class="experience-item">
            <ul>
              <li>Built and deployed backend services for mobile apps using Node.js and Express, integrating MongoDB via Mongoose and RESTful APIs</li><li>
Enhanced React-based UI features, debugged Redux states, and improved routing/navigation</li><li>
Managed database logic using MySQL for transactional data; authored complex SQL queries</li><li>
Led sprint planning with Jira dashboards to optimize Agile workflows and cross-team delivery</li><li>
Supported CI/CD operations using GitHub and Git workflows
</li>
            </ul>
          </div>
          <div className="experience-item">
          <h3>Back End Developer / Database Admin</h3>
          <h4><i> Travel Management Professionals LLC.</i></h4>
          <h4>Fort Lauderdale, FL</h4>
          <p> 11/2021 - 02/2023</p>
          </div>
          <div className="experience-item">
          <ul>
            <li>Engineered internal scheduling app for high-turnover staffing; integrated MySQL backend</li><li>
Developed web-based dashboards and data structures for HR and timesheet automation</li><li>
Planned product roadmap for seamless integration with ADP payroll APIs
</li>
            </ul>
        </div>

        <div className="experience-item">
          <h3>Owner - Senior Designer</h3>
          <h4> <i>Triniti Imports Inc.</i></h4>
          <h4>Fort Lauderdale, FL</h4>
          <p> 02/2008 - 11/2020</p>
          </div>
          <div className="experience-item">
            <ul>
            <li>Developed 3D design pipelines and digital showroom using Adobe Creative Suite</li><li>
Delivered project apps for vendors and oversaw digital transformation of client production</li><li>
Generated $2.5M+ annual revenue; led Agile team sprints and implemented scrum training
</li>
          </ul>
          </div>
          <div className="experience-item">
          <h3>Network Administrator - Web Designer</h3>
          <h4><i>Sardell Imports Inc.</i></h4>
          <h4>Dania, FL</h4>
          <p>07/2007 - 10/2013</p>
          
          </div>
          <div className="experience-item">
            <ul>
            <li>Migrated office to Windows Server 2003; redesigned network infrastructure</li><li>
Launched redesigned corporate website and digital billing system</li><li>
Reduced operational costs by 40% through automation and database optimization
</li>
          </ul>
          </div>
          <div className="experience-item">
          <h3>Network And Database Administrator</h3>
          <h4><i> Blue Chips Corp.</i></h4>
          <h4>Weston, FL</h4>
          <p> 09/2001 - 06/2007</p>
          </div>
          <div className="experience-item">
          <ul>
            <li>Implemented client-server network architecture and integrated MS Access with QuickBooks</li><li>
Deployed and maintained Active Directory across internal networks
</li>
          </ul>
          </div>
          <div className="experience-item">
          <h3>Network Administrator</h3>
          <h4><i> The Long-Term Credit Bank of Japan</i>
          </h4>
          <h4>New York, NY</h4>
          <p> 06/1996-08/2001</p>
          </div>
          <div className="experience-item">
            <ul>
            <li>Supported over 250 users in a trading environment using Windows NT and Exchange</li><li>
Executed daily reconciliations and managed department infrastructure</li><li>
Deploy Windows NT across all user workstations in a commercial credit bank</li><li>
Maintain Active Directory and email accounts using Microsoft Exchange 
</li>
          </ul>
        </div>

        </motion.div>
      </Element>

      
      {/* Education Section */}
      <Element name="education" className="section education">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="ed1">
          <h2>EDUCATION</h2>
          <h3>University of Texas at Austin - McCombs School of Business </h3></div>
        <p><strong>Degree:</strong> Computer Software and Media Applications</p>
        <p><strong>Program:</strong> Post Graduate Program in Data Science and Business Analytics</p>
        <p><strong>Term:</strong> 06/2023-07/2026(expected)</p>
        <div className="ed2">
        <h3>The Chubb Institute NYC Downtown </h3></div>
        <p><strong>Degree:</strong> Computer Networking & Data Communications</p>
        <p><strong>Program:</strong> Certificate Courses</p>
        <p><strong>Term:</strong> 01/1999-01/2000</p>
        <div className="ed3">
        <h3>State University of New York at Albany </h3></div>
        <p><strong>Degree:</strong> Economics, Sociology & Philosophy</p>
        <p><strong>Program:</strong> Bachelors Degree</p>
        <p><strong>Term:</strong> 09/1992 - 06/1996</p>
        </motion.div>
      </Element>

      {/* Project Section */}
      <Element name="projects" className="projects">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1><font color="#0da6ff">PROJECTS </font>FOR YOU TO VIEW </h1>
          <h2>After years of working on projects for others, I have had the opportunity to create some of my own. It's
            like when you forget to update your resume after so many years, you forget all that you've done.  Here are 
            just a few examples of the tools I prefer to work with.  Due to limitations, this only shows the front-end side but 
            there is a backend side as well that I am equally proficient with.
          </h2>
<ul>
  <li>
    <div className="project-container"><a href= "https://jcline7774.github.io/E-Commerce-Store/"> <img src= {ECS} alt="ECS" width= "80%" align="center" /></a>
    <h3>An E-Commerce kiosk made with Javascript, React, Node.js with Express, Stripe API and SQL Lite (Frontend only)</h3></div>  
    <div className="project-container"><a href= "https://jcline7774.github.io/VitePage/"><img src= {AH} alt="AH" width= "80%" align="center"/></a>
    <h3>A dynamic home page usinge Vite + React and Javascript</h3></div></li><li>
    <div className="project-container"><a href= "https://jcline7774.github.io/Color-Selector/"><img src= {TB} alt="TB"  width= "30%" align="center"/></a>
    <h3>A simple color selector for a retail site in Javascript</h3></div>
  </li>
</ul>
        </motion.div>
      </Element>
    </div> </div> </div>
  );
};

export default App;
