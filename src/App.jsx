import logo from "./assets/ng-skill-uplift-logo.png";
import "./App.css";

function App() {
  return (
    <div className="app">

      {/* ================= HEADER ================= */}
      <header className="header">
        <a href="#connect" className="connect-button">
          CONNECT
        </a>
      </header>


      {/* ================= HERO ================= */}
      <section className="hero">
        <img
          src={logo}
          alt="NG SkillUplift"
          className="hero-logo"
        />
      </section>


      {/* ================= STORY ================= */}
      <section className="story">
        <div className="story-content">

          <h1>Life doesn't always move in a straight line.</h1>

          <p>
            Sometimes you know you want to grow, but you're not sure
            <strong> where to begin.</strong>
          </p>

          <p>
            Sometimes you have the skills, but you're unsure about your
            <strong> career direction.</strong>
          </p>

          <p>
            Sometimes everything looks fine from the outside, yet you feel
            you need <strong>clarity about your next step.</strong>
          </p>

          <div className="story-highlight">
            <p>
              NG SkillUplift is a space to pause, connect and understand
              what comes next.
            </p>
          </div>
<p>
  Through personalized <strong>1-to-1 conversations</strong>,
  we explore <strong>where you are, what you need,</strong> and{" "}
  <strong>where you want to go.</strong>
</p>

        </div>
      </section>


{/* ================= SUPPORT AREAS ================= */}
<section className="support">
  <div className="support-content">

    <h2>Where are you looking for support?</h2>

    <div className="support-areas">

      {/* SKILLS */}
      <div className="support-area skills-area">
        <div className="support-icon">🌱</div>
        <h3>SKILLS</h3>
        <p>
          Build the right skills. Explore tools and technology.
          Learn with direction.
        </p>
      </div>

      {/* CAREERS */}
      <div className="support-area careers-area">
        <div className="support-icon">💼</div>
        <h3>CAREERS</h3>
        <p>
          Understand your options. Make informed decisions.
          Grow professionally.
        </p>
      </div>

      {/* LIFE */}
      <div className="support-area life-area">
        <div className="support-icon">🌿</div>
        <h3>LIFE</h3>
        <p>
          Pause. Reflect. Gain clarity. Move forward with
          greater understanding.
        </p>
      </div>

    </div>

  </div>
</section>

{/* ================= HOW IT WORKS ================= */}
<section className="how-it-works">
  <div className="how-content">

    <h2>Sometimes, clarity starts with a conversation.</h2>

    <p className="how-intro">
      You don't need to have everything figured out before you begin.
      We start with where you are and explore what comes next.
    </p>

    <div className="steps">

      {/* STEP 1 */}
      <div className="step">
        <div className="step-number">01</div>
        <h3>CONNECT</h3>
        <p>
          Share what's on your mind, your questions, or the
          change you're thinking about.
        </p>
      </div>

      {/* STEP 2 */}
      <div className="step">
        <div className="step-number">02</div>
        <h3>EXPLORE</h3>
        <p>
          We understand where you are, what you need,
          and what matters to you.
        </p>
      </div>

      {/* STEP 3 */}
      <div className="step">
        <div className="step-number">03</div>
        <h3>CLARIFY</h3>
        <p>
          Identify possible directions and practical
          next steps.
        </p>
      </div>

      {/* STEP 4 */}
      <div className="step">
        <div className="step-number">04</div>
        <h3>GROW</h3>
        <p>
          Move forward with greater confidence,
          understanding and purpose.
        </p>
      </div>

    </div>

  </div>
</section>


{/* ================= CONNECT ================= */}
<section className="connect" id="connect">
  <div className="connect-content">

    <h2>Ready to take the next step?</h2>

    <p>
      You don't need to know exactly where you're going.
      Sometimes, you just need a place to begin.
    </p>

    <p>
      Let's have a conversation and explore what
      <strong> growth means for you.</strong>
    </p>

    <a href="#connect" className="connect-main-button">
  LET'S CONNECT
</a>

  </div>
</section>

    </div>
  );
}

export default App;