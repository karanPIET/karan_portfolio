import React from 'react';
import { Mail, Linkedin, Github, Phone, MapPin, Award, Briefcase, GraduationCap, Code, Rocket } from 'lucide-react';
import profilePic from '../images/Karan_LatestPhoto.jpg.jpg';

export default function Portfolio() {
  return (
    <div className="portfolio-container">

      {/* Header/Hero Section */}
      <header className="header">
        <div className="header-content">

          <div className="profile-section">

            <img
              src={profilePic}
              alt="Karan Goyal"
              className="profile-img"
            />

            <div className="profile-text">

              <h1 className="profile-name">
                Karan Goyal
              </h1>

              <p className="profile-title">
                FinTech Product Builder | Lending & Consumer Finance
              </p>

              <p className="profile-description">
                Building lending experiences by combining product thinking,
                engineering execution, and customer insights to solve real
                financial problems.
              </p>

              <p className="profile-description">
                SDET @ Paisabazaar | Building towards Product Management in FinTech
              </p>

            </div>

          </div>


          <div className="contact-links">

            <a
              href="https://kfinanc.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link product-link"
            >
              <Rocket size={18} />
              <span className="product-text">
                KFinance Lending Platform
              </span>
            </a>


            <a
              href="https://karnworld.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link product-link"
            >
              <Rocket size={18} />
              <span className="product-text">
                Product Experiments
              </span>
            </a>


            <a
              href="mailto:karangoyal2909@gmail.com"
              className="contact-link"
            >
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


            <a
              href="https://www.linkedin.com/in/karan-goyal-076a4b1bb/"
              className="contact-link"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>


            <a
              href="https://github.com/karangoyal"
              className="contact-link"
            >
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

          <h2 className="section-title">
            About Me
          </h2>


          <div className="text-content">

            <p>
              I'm a FinTech professional with an engineering foundation,
              currently working at Paisabazaar and building towards Product
              Management. I work at the intersection of lending products,
              technology, and customer experience.
            </p>


            <p>
              My engineering background gives me a unique advantage in
              understanding technical constraints while maintaining focus on
              user needs and business outcomes. I've driven initiatives that
              improved loan disbursals by ~20%, validated critical system
              migrations affecting the lead lifecycle, and collaborated with
              Product, Engineering, and Operations teams to ship impactful
              features.
            </p>


            <p>
              I'm passionate about solving real user problems, making
              data-informed decisions, and building products that create
              measurable business impact. My focus is on building scalable
              fintech products through strong product thinking, analytical
              problem solving, and technical execution.
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

            <h3 className="award-title">
              Constellation Award (Q3 2025)
            </h3>


            <p className="award-org">
              Paisabazaar Stellar Awards
            </p>


            <p className="text-content">
              Team recognition for critical system migration project.
              Identified key integration issue preventing data flow to a
              major partner, enabling improved operational efficiency and
              faster customer response times.
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

            <h3 className="job-title">
              Software Development Engineer in Test 1
            </h3>


            <p className="company-name">
              Paisabazaar
            </p>


            <p className="job-date">
              Dec 2025 – Present
            </p>


            <ul>

              <li>
                <strong>
                  Led end-to-end validation
                </strong>
                {' '}
                of critical system migration affecting the complete lead
                lifecycle. Identified appointment creation issues for partner
                integration, preventing revenue leakage and improving customer
                response time.
              </li>


              <li>
                <strong>
                  Owned quality validation
                </strong>
                {' '}
                for push notification feature targeting 10% disbursal
                improvement. Collaborated with PM and Engineering teams to
                define user journey validations and release readiness.
              </li>


              <li>
                <strong>
                  Led root cause analysis
                </strong>
                {' '}
                for marketplace partner lead corruption issues by tracing
                end-to-end data flows and identifying partner-specific failures.
              </li>


              <li>
                Implemented API validation suites for deployment checks,
                improving reliability of internal services before production
                releases.
              </li>


            </ul>

          </div>
                  {/* Paisabazaar SDE */}

            <div className="experience-item">

              <h3 className="job-title">
                Software Developer Level 1
              </h3>


              <p className="company-name">
                Paisabazaar
              </p>


              <p className="job-date">
                June 2025 – Nov 2025
              </p>


              <ul>

                <li>
                  <strong>
                    Drove lending funnel optimization initiative
                  </strong>
                  {' '}
                  with Product and Operations teams. Analyzed user
                  drop-offs across journey stages, prioritized high-impact
                  improvements, and contributed to ~20% increase in partner
                  loan disbursals.
                </li>


                <li>
                  <strong>
                    Partnered with bank stakeholders
                  </strong>
                  {' '}
                  and Product/Engineering teams to define and validate
                  requirements for 3 bank integrations, ensuring reliable API
                  workflows across the loan lifecycle.
                </li>


                <li>
                  <strong>
                    Built internal Jira reporting automation tool
                  </strong>
                  {' '}
                  that generated Excel summaries automatically, reducing
                  reporting effort by approximately 60%.
                </li>


                <li>
                  Collaborated with CRM and Operations teams to improve lead
                  qualification logic and enhance data quality for sales
                  workflows.
                </li>

              </ul>

            </div>




            {/* Grovvey Internship */}

            <div className="experience-item intern">

              <h3 className="job-title">
                Software Developer Intern
              </h3>


              <p className="company-name">
                Grovvey Software Consultancy LLP
              </p>


              <p className="job-date">
                Jan 2025 – June 2025 | Noida, UP
              </p>


              <ul>

                <li>
                  Contributed to website rebranding initiatives with founders
                  and design teams, improving consistency across key customer
                  journeys.
                </li>


                <li>
                  Owned implementation of Learn page in Next.js, improving
                  content structure and user navigation.
                </li>


                <li>
                  Improved Pricing page information hierarchy to help users
                  better understand plans and value proposition.
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

                <h3 className="skill-category-title">
                  Product Management & Strategy
                </h3>

                <p className="skill-list">
                  Product Roadmapping, PRD Writing, User Stories,
                  Funnel Analysis, Market Research, Agile/Scrum,
                  Stakeholder Management, Jira, Confluence
                </p>

              </div>



              <div className="skill-category">

                <h3 className="skill-category-title">
                  Product Metrics & Analytics
                </h3>

                <p className="skill-list">
                  Funnel Optimization, Metrics Definition,
                  Experimentation, Data Analysis, Business Impact Analysis
                </p>

              </div>



              <div className="skill-category">

                <h3 className="skill-category-title">
                  Technical Foundation
                </h3>

                <p className="skill-list">
                  JavaScript, React.js, Node.js, REST APIs,
                  Git, MySQL, MongoDB, HTML/CSS
                </p>

              </div>



              <div className="skill-category">

                <h3 className="skill-category-title">
                  Quality & Engineering
                </h3>

                <p className="skill-list">
                  API Testing, End-to-End Testing,
                  Root Cause Analysis, Automation Testing,
                  Test Strategy
                </p>

              </div>


            </div>

          </section>





          {/* Projects Section */}

          <section className="section">

            <h2 className="section-title">
              Projects
            </h2>




            {/* KFinance */}

            <div className="project-item">


              <h3 className="project-title">

                <a
                  href="https://kfinanc.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="company-name"
                  style={{
                    textDecoration: 'none',
                    cursor: 'pointer'
                  }}
                >
                  KFinance Lending Platform 🔗
                </a>

              </h3>



              <p className="project-tech">
                React.js, FinTech Product Design, Lending Journey
              </p>



              <p className="text-content">

                Designed an end-to-end digital lending platform prototype
                covering loan discovery, EMI calculation, loan comparison,
                eligibility flow, and application journey. Built to understand
                customer pain points and improve digital lending experiences.

              </p>


            </div>





            {/* News Platform */}

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



              <p className="project-tech">
                React.js, NEWSAPI
              </p>



              <p className="text-content">

                Built a responsive news platform with API integration to
                explore content discovery patterns and user engagement.
                Implemented modular components for category-based browsing
                and improved reading experience.

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


              <h3 className="degree-title">
                B.Tech in Computer Science & Engineering (AI & ML)
              </h3>


              <p className="company-name">
                Panipat Institute of Engineering & Technology
              </p>


              <p className="job-date">
                2020 – 2024 | CGPA: 8.73
              </p>


            </div>


          </section>





          {/* Contact CTA */}

          <section className="cta-section">


            <h2 className="cta-title">
              Let's Connect
            </h2>



            <p className="cta-description">

              Interested in discussing fintech products, lending
              experiences, or product opportunities? Let's connect.

            </p>



            <a
              href="mailto:karangoyal2909@gmail.com"
              className="cta-button"
            >
              Get In Touch
            </a>


          </section>


        </main>




        {/* Footer */}

        <footer className="footer">

          <p>
            © 2026 Karan Goyal. All rights reserved.
          </p>

        </footer>


      </div>

  );

}
