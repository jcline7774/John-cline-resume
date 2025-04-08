import React from "react";
import "./styles.css";

const App = () => {
  return (
    <div className="resume-container">
      <header className="resume-header">
        <h1>John Cline</h1>
        <p>Nationality: USA / Italy</p>
        <p>Address: 2001 Bayview Drive, Fort Lauderdale 33305, United States</p>
        <p>Phone: 917-596-1859</p>
        <p>Email: john7774@icloud.com</p>
      </header>

      <section className="profile-section">
        <h2>Profile</h2>
        <p>
          With over a decade of professional experience, I have excelled in roles as a network administrator,
          web developer, and graphic designer. An avid agilest and project manager specializing in enhancing productivity,
          project delivery, and improving all aspects of project methodology, I have a proven track record of success.
          My expertise spans across a wide range of technologies such as MERN Stack, ExpressJS, NodeJS, MongoDB, MySQL, ReactJS,
          AWS/GCP/AZURE, and Adobe Creative Suite. Additionally, I possess strong networking and data communication skills,
          multilingual capabilities, and a deep understanding of various cultural business etiquettes.
        </p>
      </section>

      <section className="work-section">
        <h2>Work Experience</h2>
        
        <div className="work-item">
          <h3>Full Stack Developer / Engineer</h3>
          <p><strong>Company:</strong> White Cloud Technology Service Inc</p>
          <p><strong>Duration:</strong> 05/2022 - Present</p>
          <p><strong>Location:</strong> FORT LAUDERDALE, FLORIDA, UNITED STATES</p>
          <ul>
            <li>Developed and deployed backend server using NodeJS</li>
            <li>Implemented MongoDB database access through ExpressJS and mongoose</li>
            <li>Designed and tested database functions in MongoDB</li>
            <li>Updated React-based homepage and app features</li>
            <li>Built Jira dashboards for scrum team management</li>
          </ul>
        </div>

        <div className="work-item">
          <h3>Back End Developer / Database Admin</h3>
          <p><strong>Company:</strong> Travel Management Professionals LLC.</p>
          <p><strong>Duration:</strong> 11/2021 - 02/2023</p>
          <p><strong>Location:</strong> FORT LAUDERDALE, FLORIDA, UNITED STATES</p>
          <ul>
            <li>Developed, debugged, and deployed a company application to efficiently manage high-turnover staff scheduling</li>
            <li>Designed user interfaces and databases in MySQL for seamless work schedule and timesheet management</li>
            <li>Formulated and executed a product roadmap for seamless integration with ADP payroll services</li>
            </ul>
        </div>

        <div className="work-item">
          <h3>Owner - Senior Designer</h3>
          <p><strong>Company:</strong> Triniti Imports Inc.</p>
          <p><strong>Duration:</strong> 02/2008 - 11/2020</p>
          <p><strong>Location:</strong> FORT LAUDERDALE, FLORIDA, UNITED STATES</p>
          <ul>
            <li>Created 3D renderings to visualize customer concepts and layouts</li>
            <li>Digitized showroom for client review and oversaw production through tailored project applications</li>
            <li>Provided vendors with mass production-ready files, optimized for social media and marketing initiatives</li>
            <li>Engaged scrum training for all teams to help become more efficient.</li>
            <li>Successfully generated annual sales totaling $2.5-$2.8 million, with more than 50% sourced from new clientele</li>
          </ul>
        </div>

        <div className="work-item">
          <h3>Network Administrator - Web Designer</h3>
          <p><strong>Company:</strong> Sardell Imports Inc.</p>
          <p><strong>Duration:</strong> 07/2007 - 10/2013</p>
          <p><strong>Location:</strong> DANIA, FLORIDA, UNITED STATES</p>
          <ul>
            <li>Oversaw the relocation and installation of Windows Server 2003 network, enhancing office infrastructure</li>
            <li>Designed and implemented a new company website and corporate branding materials</li>
            <li>Revamped inventory, purchasing, and billing systems, resulting in a 40% reduction in expenses</li>
            <li>Led a project that boosted corporate sales and client cost savings, ultimately improving profit margins</li>
            <li>Streamlined cargo shipments, saving customers over $200k in air shipping costs and eliminating 50% of loose cargo</li>
          </ul>
        </div>

        <div className="work-item">
          <h3>Network And Database Administrator</h3>
          <p><strong>Company:</strong> Blue Chips Corp.</p>
          <p><strong>Duration:</strong> 09/2001 - 06/2007</p>
          <p><strong>Location:</strong> WESTON, FLORIDA, UNITED STATES</p>
          <ul>
            <li>Migrate network to a client/server model for enhanced security and scalability</li>
            <li>Configure network peripherals and maintained product and sales databases</li>
            <li>Integrate MS Access database with QuickBooks for streamlined accounting</li>
            <li>Implement and maintained Active Directory, improving network management</li>
          </ul>
        </div>

        <div className="work-item">
          <h3>Network Administrator</h3>
          <p><strong>Company:</strong> The Long-Term Credit Bank of Japan
          </p>
          <p><strong>Duration:</strong> 06/1996-08/2001</p>
          <p><strong>Location:</strong> NEW YORK, NEW YORK, UNITED STATES</p>
          <ul>
            <li>Maintain over 250 finance and data operational users in a Windows NT network connected to streaming market department of foreign exchange currency traders</li>
            <li>Deploy Windows NT across all user workstations in a commercial credit bank</li>
            <li>Maintain Active Directory and email accounts using Microsoft Exchange</li>
            <li>Conduct daily transaction reconciliations, reporting directly to department VPs</li>
            <li>Develop and deploy special projects upon request, enhancing operational efficiency</li>
          </ul>
        </div>

      </section>

      <section className="education-section">
        <h2>Education</h2>
        <h3>University of Texas at Austin - McCombs School of Business </h3>
        <p><strong>Degree:</strong> Computer Software and Media Applications</p>
        <p><strong>Program:</strong> Post Graduate Program in Data Science and Business Analytics</p>
        <p><strong>Term:</strong> 06/2023-07/2026(expected)</p>
        <h3>The Chubb Institute NYC Downtown </h3>
        <p><strong>Degree:</strong> Computer Networking & Data Communications</p>
        <p><strong>Program:</strong> Certificate Courses</p>
        <p><strong>Term:</strong> 01/1999-01/2000</p>
        <h3>State University of New York at Albany </h3>
        <p><strong>Degree:</strong> Economics, Sociology & Philosophy</p>
        <p><strong>Program:</strong> Bachelors Degree</p>
        <p><strong>Term:</strong> 09/1992 - 06/1996</p>
      </section>

      <section className="languages-section">
        <h2>Languages</h2>
        <ul>
          <li>English - Professional</li>
          <li>French - Limited</li>
          <li>Spanish - Elementary</li>
        </ul>
      </section>

      <section className="certificates-section">
        <h2>Certificates</h2>
        <ul>
          <li>MCSE - Microsoft</li>
          <li>Full Stack Software Development - Building Scalable Cloud Applications (Texas McCombs School of Business)</li>
        </ul>
      </section>
    </div>
  );
};

export default App;
