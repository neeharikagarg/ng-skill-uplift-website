import logo from "./assets/ng-skill-uplift-logo.png";
import "./App.css";

function App() {
  return (
    <div className="app">
{/* ================= HEADER ================= */}
<header className="header">

  <nav className="nav-links">
    <a href="#support">GROW</a>
    <a href="#learning">LEARNING</a>
    <a href="#connect">CONNECTion</a>
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


{/* ================= INTRO ================= */}
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

      <h1 className="intro-tagline">
        <strong>Grow with clarity. Find your direction. Move forward.</strong>
      </h1>

      <div className="intro-highlight">
        <p>
          NG SkillUplift is a space for{" "}
          <strong>skills, careers and life</strong> —
          helping you find clarity, build the right skills
          and choose your next step with direction.
        </p>
      </div>

    </div>

  </div>

</section>

      {/* ================= SUPPORT AREAS ================= */}
      <section className="support" id="support">
        <div className="support-content">

          <h2>Where do you want to grow?</h2>

          <div className="support-areas">

            {/* SKILLS */}
            <div className="support-area skills-area">
              <div className="support-icon">🌱</div>

              <h3>SKILLS</h3>

              <p>
                Learn what matters for your goal.
                <br />
                Build skills with direction.
              </p>
            </div>


            {/* CAREERS */}
            <div className="support-area careers-area">
              <div className="support-icon">💼</div>

              <h3>CAREERS</h3>

              <p>
                Explore your options.
                <br />
                Find direction and grow with confidence.
              </p>
            </div>


            {/* LIFE */}
            <div className="support-area life-area">
              <div className="support-icon">🌿</div>

              <h3>LIFE</h3>

              <p>
                Pause. Reflect.
                <br />
                Find clarity, direction and move forward.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* ================= LEARNING AROUND YOUR GOAL ================= */}
      <section className="goal-section" id="learning">
        <div className="goal-content">

          <p className="goal-label">
          <strong> LEARNING, YOUR WAY </strong> 
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
              <div className="goal-icon">◈</div>

              <h3>TECHNOLOGY & TOOLS</h3>

              <p>
                Learn what you actually need for your goal.
              </p>
            </div>


            {/* LIVE LABS */}
            <div className="goal-card">
              <div className="goal-icon">⌘</div>

              <h3>LIVE LABS</h3>

              <p>
                Learn by doing through hands-on practice.
              </p>
            </div>


            {/* FOCUSED SESSIONS */}
            <div className="goal-card">
              <div className="goal-icon">◎</div>

              <h3>FOCUSED SESSIONS</h3>

              <p>
                Work on a specific skill, challenge
                or opportunity.
              </p>
            </div>


            {/* CUSTOMIZED COURSES */}
            <div className="goal-card">
              <div className="goal-icon">✦</div>

              <h3>CUSTOMIZED COURSES</h3>

              <p>
                A learning path shaped around
                your needs and pace.
              </p>
            </div>


            {/* RESUME HELP */}
            <div className="goal-card">
              <div className="goal-icon">▣</div>

              <h3>RESUME HELP</h3>

              <p>
                Build a resume that clearly presents
                your skills and experience.
              </p>
            </div>


            {/* INTERVIEW PREPARATION */}
            <div className="goal-card">
              <div className="goal-icon">◉</div>

              <h3>INTERVIEW PREPARATION</h3>

              <p>
                Prepare with focused practice,
                guidance and confidence.
              </p>
            </div>


            {/* MOTIVATION & SUPPORT */}
            <div className="goal-card">
              <div className="goal-icon">♡</div>

              <h3>MOTIVATION & SUPPORT</h3>

              <p>
                Get the right support to stay focused
                and keep moving.
              </p>
            </div>

          </div>


          <div className="goal-footer">
            <strong>
              Your goal. Your path. Your direction. Your growth.
            </strong>
          </div>

        </div>
      </section>


      {/* ================= CONNECT ================= */}
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
            <strong>a place to begin.</strong>
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

    </div>
  );
}

export default App;