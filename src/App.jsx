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

          {/* LOGO */}

          <div className="intro-logo-area">

            <img
              src={logo}
              alt="NG SkillUplift"
              className="intro-logo"
            />

          </div>


          {/* HERO TEXT */}

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


        {/* DIVIDER */}

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

            {/* SKILLS */}

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


            {/* CAREERS */}

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


            {/* LIFE */}

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

            {/* TECHNOLOGY */}

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


            {/* LIVE LABS */}

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


            {/* FOCUSED SESSIONS */}

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


            {/* CUSTOMIZED COURSES */}

            <div className="goal-card">

              <div className="goal-icon">
                ✦
              </div>

              <h3>
                CUSTOMIZED COURSES
              </h3>

              <p>
                A learning path shaped around
                your needs and pace.
              </p>

            </div>


            {/* RESUME HELP */}

            <div className="goal-card">

              <div className="goal-icon">
                ▣
              </div>

              <h3>
                RESUME HELP
              </h3>

              <p>
                Build a resume that clearly presents
                your skills and experience.
              </p>

            </div>


            {/* INTERVIEW PREPARATION */}

            <div className="goal-card">

              <div className="goal-icon">
                ◉
              </div>

              <h3>
                INTERVIEW PREPARATION
              </h3>

              <p>
                Prepare with focused practice,
                guidance and confidence.
              </p>

            </div>


            {/* MOTIVATION */}

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


          {/* GOAL FOOTER */}

          <div className="goal-footer">

            <span className="footer-line"></span>

            <strong>
              Your goal. Your path. Your direction. Your growth.
            </strong>

            <span className="footer-line"></span>

          </div>

        </div>

      </section>


      {/* ================= EXPERIENCE & EXPERTISE ================= */}
      <section className="expertise" id="expertise">
        <div className="expertise-content">

          <p className="expertise-label">EXPERIENCE &amp; EXPERTISE</p>

          <h2>Experience that connects technology, quality and people.</h2>

          <p className="expertise-intro">
            <strong>16+ years</strong> of technology and quality engineering
            experience, including <strong>4 years of USA onsite experience</strong>,
            across enterprise technology, leadership and teaching.
          </p>

          <div className="expertise-grid">

            <div className="expertise-card">
              <div className="expertise-icon">⌘</div>
              <h3>TECHNOLOGY</h3>
              <p>
                Frontend • Backend • APIs • Integration
                <br />
                Databases &amp; SQL • ETL • Data Warehousing
              </p>
            </div>

            <div className="expertise-card">
              <div className="expertise-icon">◈</div>
              <h3>QUALITY ENGINEERING</h3>
              <p>
                QA Strategy • E2E Testing • Automation
                <br />
                API Testing • SIT • UAT • Performance
              </p>
            </div>

            <div className="expertise-card">
              <div className="expertise-icon">◎</div>
              <h3>ENGINEERING &amp; DELIVERY</h3>
              <p>
                CI/CD • DevOps • Agile
                <br />
                Release Management • Quality Governance
              </p>
            </div>

            <div className="expertise-card">
              <div className="expertise-icon">✦</div>
              <h3>LEADERSHIP</h3>
              <p>
                Team Leadership • Mentoring
                <br />
                Stakeholder Management • Delivery
              </p>
            </div>

            <div className="expertise-card">
              <div className="expertise-icon">◇</div>
              <h3>INDUSTRY EXPERIENCE</h3>
              <p>
                Government • BFSI • Insurance
                <br />
                Travel • Information Services
              </p>
            </div>

            <div className="expertise-card">
              <div className="expertise-icon">♡</div>
              <h3>ACADEMIC FOUNDATION</h3>
              <p>
                M.Tech in Computer Science
                <br />
                Academic Teaching • AI Foundation
              </p>
            </div>

          </div>

          <div className="expertise-footer">
            <span className="expertise-line"></span>
            <strong>Industry experience. Practical learning. Meaningful growth.</strong>
            <span className="expertise-line"></span>
          </div>

        </div>
      </section>

      {/* =====================================================
          ABOUT NEEHARIKA
          ===================================================== */}

      <section className="about" id="about">

        <div className="about-content">

          <p className="about-label">
            ABOUT NEEHARIKA
          </p>

          <h2>
            Experience that brings learning closer to reality.
          </h2>


          <div className="about-text">

            <p>
              With{" "}
              <strong>
                16+ years of corporate IT experience
              </strong>
              , Neeharika brings hands-on experience across
              technology, software quality, leadership and
              career growth.
            </p>

            <p>
              Alongside her corporate journey, she also brings{" "}
              <strong>
                2+ years of academic teaching experience
              </strong>
              , helping learners understand concepts,
              build practical skills and connect learning
              with real-world opportunities.
            </p>

            <p>
              NG SkillUplift brings these two experiences
              together —{" "}
              <strong>
                industry experience and teaching
              </strong>{" "}
              — to help people learn with clarity,
              confidence and purpose.
            </p>

          </div>


          {/* EXPERIENCE HIGHLIGHTS */}

          <div className="about-highlights">

            <div className="about-highlight">

              <span className="about-number">
                16+
              </span>

              <span className="about-title">
                YEARS
                <br />
                CORPORATE EXPERIENCE
              </span>

            </div>


            <div className="about-highlight">

              <span className="about-number">
                2+
              </span>

              <span className="about-title">
                YEARS
                <br />
                ACADEMIC TEACHING
              </span>

            </div>


            <div className="about-highlight">

              <span className="about-number">
                NG
              </span>

              <span className="about-title">
                SKILLS
                <br />
                CAREER &amp; LIFE
              </span>

            </div>

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