import React from 'react';
import { Mail, Linkedin, Github, Phone, MapPin, Award, Briefcase, GraduationCap, Code } from 'lucide-react';
import profilePic from '../images/Karan_LatestPhoto.jpg.jpg';

export default function Portfolio() {
  return (
    <div className="portfolio-container">
      {/* Header/Hero Section */}
      <header className="header">
        <div className="header-content">
          <div className="profile-section">
            {/* Profile Picture - Replace the src with your image URL */}
            <img 
              src={profilePic}
              alt="Karan Goyal" 
              className="profile-img"
            />
            <div className="profile-text">
              <h1 className="profile-name">Karan Goyal</h1>
              <p className="profile-title">Engineer → Product Builder</p>
              <p className="profile-description">
                Building user-centric solutions and driving product impact at the intersection of engineering and business strategy
              </p>
            </div>
          </div>
          <div className="contact-links">
            <a href="mailto:karangoyal2909@gmail.com" className="contact-link">
              <Mail size={18} />
              karangoyal2909@gmail.com
            </a>
            <span className="contact-link">
              <Phone size={18} />
              +91-8307096180
            </span>
            <span className="contact-link">
              <MapPin size={18} />
              Gurugram, Haryana
            </span>
            <a href="https://www.linkedin.com/in/karan-goyal-076a4b1bb/" className="contact-link">
              <Linkedin size={18} />
              LinkedIn
            </a>
            <a href="https://github.com/karangoyal" className="contact-link">
              <Github size={18} />
              GitHub
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        
        {/* About Section */}
        <section className="section">
          <h2 className="section-title">About Me</h2>
          <div className="text-content">
            <p>
              I'm a Software Engineer transitioning into Product Management, currently working at Paisabazaar where I've driven meaningful business impact through cross-functional collaboration and data-driven decision making.
            </p>
            <p>
              My engineering background gives me a unique advantage in understanding technical constraints while maintaining focus on user needs and business outcomes. I've led initiatives that improved loan disbursals by ~20%, validated critical system migrations affecting the entire lead lifecycle, and collaborated closely with Product, Engineering, and Operations teams to ship features that matter.
            </p>
            <p>
              I'm passionate about solving real user problems, making data-informed decisions, and building products that create genuine value. I'm seeking Associate Product Manager roles where I can leverage my technical foundation and product thinking to drive impact.
            </p>
          </div>
        </section>

        {/* Awards Section */}
        <section className="section award-section">
          <h2 className="section-title">
            <Award className="section-icon" size={24} />
            Recognition
          </h2>
          <div>
            <h3 className="award-title">Constellation Award (Q3 2025)</h3>
            <p className="award-org">Paisabazaar Stellar Awards</p>
            <p className="text-content">
              Team recognition for critical system migration project. Identified key integration issue preventing data flow to a major partner, enabling improved operational efficiency and significantly faster customer response times.
            </p>
          </div>
        </section>

        {/* Experience Section */}
        <section className="section">
          <h2 className="section-title">
            <Briefcase className="section-icon" size={24} />
            Work Experience
          </h2>

          {/* Paisabazaar SDET */}
          <div className="experience-item">
            <h3 className="job-title">Software Development Engineer in Test 1</h3>
            <p className="company-name">Paisabazaar</p>
            <p className="job-date">Dec 2025– Present</p>
            <ul>
              <li>
                <strong>Led end-to-end validation</strong> of critical system migration affecting entire lead lifecycle. Identified appointment creation bug for key partner integration, preventing revenue leakage and enabling significantly faster customer response times.
              </li>
              <li>
                <strong>Owned quality validation</strong> for push notification feature targeting 10% disbursal improvement. Collaborated with PM and Engineering to define test scenarios covering lead generation, user journeys, and cross-platform functionality.
              </li>
              <li>
                <strong>Led root cause analysis</strong> on marketplace partner lead corruption issue by tracing end-to-end data flows and identifying partner-specific lead creation failures, enabling restoration of data integrity.
              </li>
              <li>
                Implemented automated API validation suites for daily deployment checks, ensuring system reliability and reducing manual verification overhead for internal services pre-launch.
              </li>
            </ul>
          </div>

          {/* Paisabazaar SDE */}
          <div className="experience-item">
            <h3 className="job-title">Software Developer Level 1</h3>
            <p className="company-name">Paisabazaar</p>
            <p className="job-date">June 2025 – Nov 2025</p>
            <ul>
              <li>
                <strong>Drove disbursal funnel optimization initiative</strong> with Product and Ops teams. Analyzed user drop-offs across journey stages, prioritized high-impact fixes, and delivered ~20% increase in partner loan disbursals.
              </li>
              <li>
                <strong>Partnered with bank stakeholders</strong> and cross-functional Product/Engineering teams to define, document, and validate requirements for 3 new bank integrations, ensuring API reliability and accurate data flow across the loan lifecycle.
              </li>
              <li>
                Identified sprint reporting bottleneck affecting team productivity. Scoped, designed, and shipped internal Jira tool that auto-generates Excel summaries, cutting reporting time by ~60%.
              </li>
              <li>
                Collaborated with CRM and Ops teams to refine lead qualification logic by removing rejected applications from active pipelines, improving data integrity and reducing noise for sales teams.
              </li>
            </ul>
          </div>

          {/* Grovvey Intern */}
          <div className="experience-item intern">
            <h3 className="job-title">Software Developer Intern</h3>
            <p className="company-name">Grovvey Software Consultancy LLP</p>
            <p className="job-date">Jan 2025 – June 2025 | Noida, UP</p>
            <ul>
              <li>
                Contributed to major website rebranding alongside founders and design team, updating core components to ensure consistent messaging and brand alignment across key user journeys.
              </li>
              <li>
                Owned end-to-end implementation of Learn page in Next.js 13, structuring content and navigation to improve new-user onboarding and feature discoverability.
              </li>
              <li>
                Iterated on Pricing page layout and information hierarchy in response to updated plans and positioning, helping users compare options and understand value proposition.
              </li>
            </ul>
          </div>
        </section>

        {/* Skills Section */}
        <section className="section">
          <h2 className="section-title">
            <Code className="section-icon" size={24} />
            Skills
          </h2>
          <div>
            <div className="skill-category">
              <h3 className="skill-category-title">Product & Strategy</h3>
              <p className="skill-list">Product Roadmapping, Market Research, PRD Writing, User Stories, Jira, Confluence, Agile/Scrum, Stakeholder Management</p>
            </div>
            <div className="skill-category">
              <h3 className="skill-category-title">Product Metrics & Analysis</h3>
              <p className="skill-list">Funnel Analysis, Metrics Definition, Experimentation Concepts, Data Analysis (Python)</p>
            </div>
            <div className="skill-category">
              <h3 className="skill-category-title">Technical & Development</h3>
              <p className="skill-list">JavaScript, React.js, Node.js, HTML/CSS, REST APIs, Git, MySQL</p>
            </div>
            <div className="skill-category">
              <h3 className="skill-category-title">Quality & Testing</h3>
              <p className="skill-list">End-to-End Testing, API Automation, Root Cause Analysis, Test Case Design</p>
            </div>
          </div>
        </section>

     {/* Projects Section */}
        <section className="section">
          <h2 className="section-title">Projects</h2>
          <div className="project-item">
            <h3 className="project-title">
              <a 
                href="https://karnworld.netlify.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="company-name"
                style={{ 
                  textDecoration: 'none',
                  cursor: 'pointer'
                }}
              >
                News Aggregation Platform 🔗
              </a>
            </h3>

                  
            
            <p className="project-tech">React.js, NEWSAPI</p>
            <p className="text-content">
              Built responsive news website with real-time API integration to explore content discovery patterns and user engagement. Implemented modular component architecture for different categories, focusing on clean UI and fast topic switching to optimize reading experience.
            </p>
          </div>
        </section>

        {/* Education Section */}
        <section className="section">
          <h2 className="section-title">
            <GraduationCap className="section-icon" size={24} />
            Education
          </h2>
          <div className="education-item">
            <h3 className="degree-title">B.Tech in Computer Science & Engineering (AI & ML)</h3>
            <p className="company-name">Panipat Institute of Engineering & Technology</p>
            <p className="job-date">2020 – 2024 | CGPA: 8.73</p>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="cta-section">
          <h2 className="cta-title">Let's Connect</h2>
          <p className="cta-description">Interested in discussing product opportunities or just want to chat? I'd love to hear from you.</p>
          <a href="mailto:karangoyal2909@gmail.com" className="cta-button">
            Get In Touch
          </a>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 Karan Goyal. All rights reserved.</p>
      </footer>
    </div>
  );
}

