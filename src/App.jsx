import logo from "./assets/ng-skill-uplift-logo.png";
import "./App.css";

function App() {
  return (
    <div className="app">

      {/* =====================================================
          HEADER
          ===================================================== */}

      <header className="header">

        <nav className="nav-links">
          <a href="#support">GROW</a>
          <a href="#learning">LEARNING</a>
          <a href="#expertise">EXPERTISE</a>
          <a href="#connect">CONNECT</a>
        </nav>

        <a
          href="https://wa.me/918197201901"
          target="_blank"
          rel="noopener noreferrer"
          className="connect-button"
        >
          WHATSAPP
        </a>

      </header>


      {/* =====================================================
          INTRO / HERO
          ===================================================== */}

      <section className="intro">

        <div className="intro-content">

          <div className="intro-logo-area">

            <img
              src={logo}
              alt="NG SkillUplift"
              className="intro-logo"
            />

          </div>


          <div className="intro-text">

            <p className="intro-eyebrow">
              NG SKILLUPLIFT
            </p>

            <h1 className="intro-tagline">
              Grow with clarity.
              <br />
              Find your direction.
              <br />
              <strong>Move forward.</strong>
            </h1>


            <div className="intro-highlight">

              <p>
                NG SkillUplift is a space for{" "}
                <strong>skills, careers and life</strong> —
                helping you build what you need,
                find clarity and move forward with confidence.
              </p>

            </div>

          </div>

        </div>


        <div className="section-divider">
          ✦
        </div>

      </section>


      {/* =====================================================
          GROW / SUPPORT AREAS
          ===================================================== */}

      <section className="support" id="support">

        <div className="support-content">

          <p className="section-label">
            GROW IN YOUR WAY
          </p>

          <h2>
            Where do you want to grow?
          </h2>

          <p className="section-intro">
            Growth looks different for everyone.
            Whether you want to build skills, shape your career
            or find greater clarity in life, the right direction
            can make the journey easier.
          </p>


          <div className="support-areas">

            <div className="support-area skills-area">

              <div className="support-icon">
                🌱
              </div>

              <h3>
                SKILLS
              </h3>

              <p>
                Learn what matters for your goal.
                <br />
                Build skills with direction.
              </p>

            </div>


            <div className="support-area careers-area">

              <div className="support-icon">
                💼
              </div>

              <h3>
                CAREERS
              </h3>

              <p>
                Explore your options.
                <br />
                Find direction and grow with confidence.
              </p>

            </div>


            <div className="support-area life-area">

              <div className="support-icon">
                🌿
              </div>

              <h3>
                LIFE
              </h3>

              <p>
                Pause. Reflect.
                <br />
                Find clarity, direction and move forward.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          LEARNING
          ===================================================== */}

      <section className="goal-section" id="learning">

        <div className="goal-content">

          <p className="goal-label">
            LEARNING, YOUR WAY
          </p>

          <h2>
            Learning designed around your goal.
          </h2>

          <p className="goal-intro">
            Not every learner needs the same path.
            We shape learning around what you want to achieve —
            with the right skills, practice and support.
          </p>


          <div className="goal-options">

            <div className="goal-card">

              <div className="goal-icon">
                ◈
              </div>

              <h3>
                TECHNOLOGY &amp; TOOLS
              </h3>

              <p>
                Learn what you actually need for your goal.
              </p>

            </div>


            <div className="goal-card">

              <div className="goal-icon">
                ⌘
              </div>

              <h3>
                LIVE LABS
              </h3>

              <p>
                Learn by doing through hands-on practice.
              </p>

            </div>


            <div className="goal-card">

              <div className="goal-icon">
                ◎
              </div>

              <h3>
                FOCUSED SESSIONS
              </h3>

              <p>
                Work on a specific skill,
                challenge or opportunity.
              </p>

            </div>


            <div className="goal-card">

              <div className="goal-icon">
                ▣
              </div>

              <h3>
                RESUME &amp; INTERVIEW
              </h3>

              <p>
                Present your experience clearly
                and prepare with confidence.
              </p>

            </div>


            <div className="goal-card">

              <div className="goal-icon">
                ♡
              </div>

              <h3>
                MOTIVATION &amp; SUPPORT
              </h3>

              <p>
                Get the right support to stay focused
                and keep moving.
              </p>

            </div>

          </div>


          <div className="goal-footer">

            <span className="footer-line"></span>

            <strong>
              Your goal. Your path. Your direction. Your growth.
            </strong>

            <span className="footer-line"></span>

          </div>

        </div>

      </section>


      {/* =====================================================
          EXPERIENCE & EXPERTISE
          ===================================================== */}

      <section className="expertise" id="expertise">

        <div className="expertise-content">

          <p className="expertise-label">
            EXPERIENCE &amp; EXPERTISE
          </p>

          <h2>
            Technology. Quality. Leadership. Real-world impact.
          </h2>

          <p className="expertise-intro">
            With <strong>16+ years in technology and quality engineering</strong>,
            including <strong>4 years of USA onsite experience</strong>,
            Neeharika brings practical expertise across{" "}
            <strong>
              digital identity, civil registration, BFSI, insurance,
              travel and enterprise technology.
            </strong>
          </p>


          {/* =================================================
              EXPERTISE CARDS
              ================================================= */}

          <div className="expertise-grid">

            <div className="expertise-card">

              <div className="expertise-icon">
                ⌘
              </div>

              <h3>
                TECHNOLOGY
              </h3>

              <p>
                Frontend • Backend • APIs • Integration
                <br />
                Databases • SQL • ETL • Data
              </p>

            </div>


            <div className="expertise-card">

              <div className="expertise-icon">
                ◈
              </div>

              <h3>
                QUALITY ENGINEERING
              </h3>

              <p>
                QA Strategy • E2E • Automation
                <br />
                API • SIT • UAT • Performance
              </p>

            </div>


            <div className="expertise-card">

              <div className="expertise-icon">
                ◎
              </div>

              <h3>
                ENGINEERING &amp; DELIVERY
              </h3>

              <p>
                CI/CD • DevOps • Agile
                <br />
                Release • Quality Governance
              </p>

            </div>


            <div className="expertise-card">

              <div className="expertise-icon">
                ✦
              </div>

              <h3>
                LEADERSHIP
              </h3>

              <p>
                Team Leadership • Mentoring
                <br />
                Stakeholders • Delivery
              </p>

            </div>


            <div className="expertise-card">

              <div className="expertise-icon">
                ◇
              </div>

              <h3>
                INDUSTRY DOMAINS
              </h3>

              <p>
                Digital Identity • BFSI • Insurance
                <br />
                Government • Travel &amp; Hospitality • Enterprise
              </p>

            </div>


            <div className="expertise-card">

              <div className="expertise-icon">
                ♡
              </div>

              <h3>
                ACADEMIC FOUNDATION
              </h3>

              <p>
                M.Tech in Computer Science
                <br />
                Teaching • AI &amp; Emerging Technology
              </p>

            </div>

          </div>


          {/* =================================================
              REAL-WORLD EXPERIENCE
              ================================================= */}

          <div className="real-world">

            <p className="real-world-label">
              REAL-WORLD EXPERIENCE
            </p>

            <div className="experience-domains">

              <div className="experience-domain">

                <span className="domain-icon">
                  🌍
                </span>

                <div>

                  <h3>
                    USA ONSITE
                  </h3>

                  <p>
                    LexisNexis • Great American Insurance
                  </p>

                  <small>
                    4 years onsite • QA Leadership • Automation
                    • Client Delivery
                  </small>

                </div>

              </div>


              <div className="experience-domain">

                <span className="domain-icon">
                  🆔
                </span>

                <div>

                  <h3>
                    IDENTITY &amp; CIVIL REGISTRATION
                  </h3>

                  <p>
                    MOSIP • OpenCRVS • Technoforte
                  </p>

                  <small>
                    Digital Identity • National ID • Birth &amp;
                    Death Registration • Production
                  </small>

                </div>

              </div>


              <div className="experience-domain">

                <span className="domain-icon">
                  🏦
                </span>

                <div>

                  <h3>
                    BFSI &amp; ENTERPRISE
                  </h3>

                  <p>
                    Allstate • Wells Fargo
                  </p>

                  <small>
                    Insurance • Banking • ETL • Enterprise Testing
                  </small>

                </div>

              </div>


              <div className="experience-domain">

                <span className="domain-icon">
                  ✈️
                </span>

                <div>

                  <h3>
                    TRAVEL &amp; HOSPITALITY
                  </h3>

                  <p>
                    SABRE
                  </p>

                  <small>
                    Travel Technology • QA • System Testing
                    • Enterprise Delivery
                  </small>

                </div>

              </div>


              <div className="experience-domain">

                <span className="domain-icon">
                  📦
                </span>

                <div>

                  <h3>
                    SUPPLY CHAIN
                  </h3>

                  <p>
                    PALMS
                  </p>

                  <small>
                    Warehousing • Performance Testing
                    • System Testing • Delivery
                  </small>

                </div>

              </div>

            </div>

          </div>


          {/* =================================================
              CORE EXPERTISE
              ================================================= */}

          <div className="core-expertise">

            <span>QA Leadership</span>
            <span>People Management</span>
            <span>Automation</span>
            <span>API Testing</span>
            <span>Performance Testing</span>
            <span>SIT / UAT</span>
            <span>CI/CD</span>
            <span>Quality Governance</span>
            <span>Client Delivery</span>

          </div>


          {/* =================================================
              ABOUT NEEHARIKA
              ================================================= */}

          <div className="neeha-profile">

            <p className="neeha-label">
              ABOUT NEEHARIKA
            </p>

            <h3>
              Industry experience. Practical learning. Meaningful growth.
            </h3>

            <p className="neeha-description">
              Neeharika brings together technology, quality engineering,
              leadership and teaching experience to create practical
              learning and meaningful guidance through NG SkillUplift.
            </p>


            <div className="neeha-highlights">

              <div>

                <strong>
                  16+
                </strong>

                <span>
                  YEARS IT
                  <br />
                  EXPERIENCE
                </span>

              </div>


              <div>

                <strong>
                  4
                </strong>

                <span>
                  YEARS USA
                  <br />
                  ONSITE
                </span>

              </div>


              <div>

                <strong>
                  2+
                </strong>

                <span>
                  YEARS
                  <br />
                  TEACHING
                </span>

              </div>

            </div>


            <p className="neeha-motto">
              NG SkillUplift brings experience and learning together
              to help people build skills, find clarity and grow.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          CONNECT
          ===================================================== */}

      <section className="connect" id="connect">

        <div className="connect-content">

          <p className="connect-label">
            A SPACE TO BEGIN
          </p>

          <h2>
            One conversation can change your perspective.
          </h2>

          <p>
            You don't need all the answers.
            Sometimes, you just need{" "}
            <strong>
              a place to begin.
            </strong>
          </p>

          <a
            href="https://wa.me/918197201901"
            target="_blank"
            rel="noopener noreferrer"
            className="connect-main-button"
          >
            LET'S CONNECT ON WHATSAPP
          </a>

        </div>

      </section>


      {/* =====================================================
          BRAND FOOTER
          ===================================================== */}

      <footer className="brand-footer">

        <div className="footer-decoration">

          <span className="footer-dot"></span>

          NG SKILLUPLIFT

          <span className="footer-dot"></span>

        </div>

        <p className="footer-creator">
          Created by{" "}
          <strong>
            Neeharika Garg
          </strong>
        </p>

        <p className="footer-experience">
          MTech | 16+ years of technology &amp; quality experience
        </p>

        <p className="footer-motto">
          Learn. Find clarity. Grow.
        </p>

      </footer>

    </div>
  );
}

export default App;
