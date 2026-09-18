import logo from "./assets/ng-skill-uplift-logo.png";
import manualFlyer from "./assets/manual-to-automation-flyer.png";
import clarityFlyer from "./assets/clarity-guidance-flyer.png";
import programmingBasicsFlyer from "./assets/programming-basics-for-automation-flyer.png";
import "./App.css";

const WHATSAPP = "https://wa.me/918197201901";

const sessions = [
  {
    id: "manual-basics",
    number: "01",
    icon: "🌱",
    title: "Manual Testing Basics",
    subtitle:
      "Start from the fundamentals and build a strong QA foundation.",
    points: [
      "What is Software Testing?",
      "SDLC & STLC",
      "Testing Types & Levels",
      "Test Scenarios & Test Cases",
      "Severity & Priority",
      "Defect Lifecycle",
      "Jira Basics",
      "API Testing Concepts",
      "Database & SQL Basics",
  "Validating application data using SQL",
    ],
    cta: "Start Manual Testing Basics",
    tone: "green",
  },

  {
    id: "manual-practical",
    number: "02",
    icon: "🎯",
    title: "Practical Manual Testing",
    subtitle:
      "Practice real-world testing and build confidence before automation.",
    points: [
      "Test Case Design",
      "Functional Testing",
      "Regression & Retesting",
      "Integration & System Testing",
      "SIT / UAT",
      "Real-World QA Scenarios",
      "Defect Reporting",
      "QA Interview Basics",
    ],
    cta: "Start Practical Manual Testing",
    tone: "green",
    flyer: manualFlyer,
  },

  {
    id: "programming",
    number: "03",
    icon: "💻",
    title: "Programming Basics for Automation",
    subtitle:
      "Start or revise your Java, Python & SQL basics — and confidently jump into automation.",
    points: [
      "Java fundamentals for automation",
      "Python fundamentals for automation",
      "SQL & database basics",
      "Variables, conditions & loops",
      "Methods / functions & basic OOP",
      "Queries, filtering & joins",
      "Practical exercises",
    ],
    cta: "Start Programming Basics",
    tone: "blue",
    flyer: programmingBasicsFlyer,
  },

  {
    id: "api",
    number: "04",
    icon: "🔗",
    title: "API Automation with Rest Assured",
    subtitle:
      "Build practical API automation skills from fundamentals to framework-level testing.",
    points: [
      "REST API Fundamentals",
      "HTTP Methods & Status Codes",
      "Headers",
      "Query & Path Parameters",
      "Authentication",
      "Response Validation",
      "JSON & DTO",
      "API Chaining",
      "Data-Driven Testing",
      "Reporting & Jenkins",
    ],
    cta: "Start API Automation",
    tone: "blue",
  },

  {
    id: "playwright",
    number: "05",
    icon: "🎭",
    title: "Playwright Automation",
    subtitle:
      "Learn modern UI automation through a practical framework approach.",
    points: [
      "Playwright Fundamentals",
      "Locators",
      "UI Automation",
      "Assertions",
      "Page Object Model",
      "Test Data & Reports",
      "Parallel Execution",
      "CI/CD",
      "Real-Project Framework",
    ],
    cta: "Start Playwright",
    tone: "purple",
  },

  {
    id: "jmeter",
    number: "06",
    icon: "📈",
    title: "Performance Testing with JMeter",
    subtitle:
      "Understand performance testing and practice the concepts that matter in real projects.",
    points: [
      "Performance Testing Fundamentals",
      "JMeter Basics",
      "Thread Groups",
      "HTTP Requests",
      "Assertions",
      "Correlation",
      "Parameterization",
      "Load / Stress Testing Concepts",
      "Reports & Analysis",
    ],
    cta: "Start JMeter",
    tone: "gold",
  },

  {
    id: "interview",
    number: "07",
    icon: "🎯",
    title: "QA Automation Interview Accelerator",
    subtitle:
      "Focused preparation for QA, automation and scenario-based interviews.",
    points: [
      "QA Interview Questions",
      "Automation Coding",
      "API Questions",
      "Framework Questions",
      "Scenario-Based Questions",
      "Managerial QA Questions",
      "Resume Improvement",
      "Mock Interviews",
    ],
    cta: "Start Interview Preparation",
    tone: "rose",
  },
];

function App() {
  return (
    <div className="app">

      {/* ================= HEADER ================= */}

      <header className="header">
        <a className="brand" href="#top" aria-label="NG SkillUplift home">
          <img src={logo} alt="NG SkillUplift" />
        </a>

        <nav className="nav-links">
          <a href="#support">GROW</a>
          <a href="#learning">LEARNING</a>
          <a className="active" href="#sessions">
            SESSIONS
          </a>
          <a href="#expertise">EXPERTISE</a>
          <a href="#connect">CONNECT</a>
        </nav>

        <a
          className="connect-button"
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>◉</span> WHATSAPP
        </a>
      </header>


      <main id="top">

        {/* ================= HERO ================= */}

        <section className="hero">
          <div className="hero-content">

            <div className="hero-copy">
              <span className="eyebrow">NG SKILLUPLIFT</span>

              <h1>
                Learn. Find clarity. <span>Grow.</span>
              </h1>

              <p className="hero-lead">
                Practical online sessions designed around{" "}
                <strong>where you are</strong> and where you want to go.
              </p>

              <p className="hero-text">
                Build the skills you need, get focused guidance and move
                forward with a learning path shaped around your goal.
              </p>

              <div className="hero-actions">
                <a className="primary-button" href="#sessions">
                  Explore Sessions <span>→</span>
                </a>

                <a
                  className="secondary-button"
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Connect on WhatsApp
                </a>
              </div>
            </div>


            <div className="hero-visual">
              <div className="hero-sun">
                Small steps.
                <br />
                <strong>Big growth.</strong>
              </div>

              <div className="hero-landscape">
                <div className="hill hill-one"></div>
                <div className="hill hill-two"></div>
                <div className="hero-person">🌱</div>
              </div>

              <div className="hero-note">
                Your goal.
                <br />
                Your path.
                <br />
                <strong>Your growth.</strong>
              </div>
            </div>

          </div>
        </section>


        {/* ================= SUPPORT ================= */}

        <section className="support" id="support">

          <div className="section-heading">
            <span className="section-kicker">START WHERE YOU ARE</span>

            <h2>Growth can start with one clear step.</h2>

            <p>
              Whether you are building skills, facing a job-search challenge
              or figuring out your next direction, start with what you need
              today.
            </p>
          </div>


          <div className="support-grid">

            <article className="support-card blue-card">
              <div className="support-icon">🎯</div>

              <h3>You might be...</h3>

              <ul>
                <li>Starting your QA journey</li>
                <li>Exploring the Manual → Automation path</li>
                <li>Looking to build practical technical skills</li>
              </ul>
            </article>


            <article className="support-card cream-card">
              <div className="support-icon">💻</div>

              <h3>Then let's start with customised sessions.</h3>

              <ul>
                <li>Based on your current level</li>
                <li>Based on your need and scope</li>
                <li>With practical examples and focused guidance</li>
              </ul>
            </article>


            <article className="support-card lilac-card">
              <div className="support-icon">🧭</div>

              <h3>Or you might be...</h3>

              <ul>
                <li>Facing challenges in your job search</li>
                <li>Unsure about your next step or career direction</li>
              </ul>
            </article>

          </div>
        </section>


        {/* ================= LEARNING ================= */}

        <section className="learning" id="learning">

          <div className="section-heading">
            <span className="section-kicker">HOW WE LEARN</span>

            <h2>Understand → Practice → Build → Apply → Grow</h2>

            <p>
              Don't just learn another tool. Understand why you are learning
              it, where it fits and how to use it in the real world.
            </p>
          </div>


          <div className="learning-steps">

            {[
              ["💡", "Understand", "Your current level & goal"],
              ["⚙️", "Practice", "Hands-on with real examples"],
              ["🧩", "Build", "Your skills step by step"],
              ["📝", "Apply", "In real-world scenarios"],
              ["📈", "Grow", "With confidence"],
            ].map(([icon, title, text], index) => (

              <div className="learning-step" key={title}>

                <div className="step-icon">{icon}</div>

                <strong>{title}</strong>

                <span>{text}</span>

                {index < 4 && <b>→</b>}

              </div>

            ))}

          </div>
        </section>
{/* ================= LEARNING JOURNEY ================= */}

<section className="journey" id="journey">

  <div className="section-heading">

    <span className="section-kicker">
      YOUR LEARNING JOURNEY
    </span>

    <h2>
      Learn step by step. Grow at your own pace.
    </h2>

    <p>
      You don't need to learn everything at once.
      Start where you are and move forward when you're ready.
    </p>

  </div>


  <div className="journey-grid">

    {[
      ["01", "Manual Testing", "Build your QA foundation"],
      ["02", "Programming Basics", "Java • Python • SQL"],
      ["03", "API Automation", "REST Assured"],
      ["04", "UI Automation", "Selenium • Playwright"],
      ["05", "Performance Testing", "JMeter"],
      ["06", "Advanced Automation", "Frameworks • CI/CD • Real-world practices"],
      ["07", "Interview Preparation", "Resume • Scenarios • Mock Interviews"],
    ].map(([number, title, text], index) => (

      <div
        className={`journey-step ${
          number === "02" ? "highlight" : ""
        }`}
        key={number}
      >

        <div className="journey-number">
          {number}
        </div>

        <div className="journey-content">

          <strong>{title}</strong>

          <small>{text}</small>

        </div>

        {index < 6 && (
          <div className="journey-arrow">→</div>
        )}

      </div>

    ))}

  </div>


  <div className="journey-note">

    <span className="journey-note-icon">🌱</span>

    <div>
      <strong>Not sure where to start?</strong>

      <p>
        That's okay. We'll identify a practical starting point
        based on your current skills and your goal.
      </p>
    </div>

  </div>

</section>


        {/* ================= SESSIONS ================= */}

        <section className="sessions" id="sessions">

          <div className="section-heading session-heading">

            <span className="section-kicker">
              SESSION-BASED LEARNING
            </span>

            <h2>Choose the session that matches your goal.</h2>

            <p>
              Each path is broken into focused online sessions. Start with
              what you need instead of committing to everything at once.
            </p>

            <div className="session-note">
              Online sessions only • Flexible timing • Charges per session
            </div>

          </div>


          <div className="session-grid">

            {sessions.map((session) => (

              <article
                className={`session-card ${session.tone}`}
                id={session.id}
                key={session.id}
              >

                <div className="session-top">

                  <span className="session-number">
                    {session.number}
                  </span>

                  <span className="session-icon">
                    {session.icon}
                  </span>

                </div>


                <h3>{session.title}</h3>

                <p className="session-subtitle">
                  {session.subtitle}
                </p>


                <ul>
                  {session.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>


                <a
                  className="session-button"
                  href={`${WHATSAPP}?text=${encodeURIComponent(
                    `Hi Neeharika, I am interested in ${session.title}. I would like to understand the sessions and next steps.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {session.cta} <span>→</span>
                </a>

              </article>

            ))}

          </div>

        </section>




        {/* ================= WHY LEARN ================= */}

        <section className="why" id="expertise">

          <div className="why-grid">

            <div className="why-card why-main">

              <span className="section-kicker">
                WHY LEARN WITH ME?
              </span>

              <h2>
                Real experience. Practical learning. Personalised sessions.
              </h2>


              <div className="why-points">

                <div>
                  <span>🎯</span>
                  <p>
                    <strong>Practical</strong>
                    <br />
                    Learning with real examples
                  </p>
                </div>

                <div>
                  <span>👤</span>
                  <p>
                    <strong>Personalized</strong>
                    <br />
                    Based on your level & goals
                  </p>
                </div>

                <div>
                  <span>💼</span>
                  <p>
                    <strong>Career support</strong>
                    <br />
                    Resume & interview guidance
                  </p>
                </div>

                <div>
                  <span>🕒</span>
                  <p>
                    <strong>Flexible</strong>
                    <br />
                    Online sessions around your time
                  </p>
                </div>

              </div>

            </div>


            <div className="why-card experience-card">

              <span className="section-kicker">
                REAL-WORLD EXPERIENCE
              </span>

              <h3>16+ years in Technology & Quality</h3>

              <ul>
                <li>4 years USA onsite experience</li>
                <li>QA, Automation & API testing</li>
                <li>Performance testing & SIT / UAT</li>
                <li>CI/CD & quality governance</li>
                <li>Leadership, mentoring & delivery</li>
              </ul>

            </div>


            <div className="why-card profile-card">

              <span className="section-kicker">
                ABOUT THE FOUNDER
              </span>

              <h3>Neeharika Garg</h3>

              <p>
                <strong>MTech</strong>
                <br />
                Technology & Quality Professional
              </p>

              <p className="profile-experience">
                <strong>16+ Years of IT Experience</strong>
              </p>

              <p className="profile-companies">
                Experience across
                <br />
                <strong>
                  Infosys • Allstate • Wells Fargo • LexisNexis
                </strong>
                <br />
                <strong>
                  Great American • Sabre • Datamatics • Technoforte
                </strong>
              </p>

              <p className="profile-motto">
                “Let's build your next chapter.”
              </p>

            </div>

          </div>

        </section>


        {/* ================= CONNECT ================= */}

        <section className="connect" id="connect">

          <div className="connect-copy">

            <span className="section-kicker">
              NOT SURE WHERE TO START?
            </span>

            <h2>
              Let's understand where you are before choosing what to learn.
            </h2>

            <p>
              Tell me what you are trying to achieve. We'll identify a
              practical starting point based on your need and scope.
            </p>

          </div>


          <div className="connect-action">

            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-large"
            >

              <span className="wa-icon">◉</span>

               <span>Book Your Slot</span>
  <small>Connect with us on WhatsApp</small>

              <b>→</b>

            </a>

            <p>
              Online sessions only • Scheduled based on your time
            </p>

          </div>

        </section>

      </main>


      {/* ================= FOOTER ================= */}

      <footer className="footer">

        <div className="footer-brand">

          <img src={logo} alt="NG SkillUplift" />

          <div>
            <strong>NG SkillUplift</strong>
            <span>Learn. Find clarity. Grow.</span>
          </div>

        </div>


        <div className="footer-item">
          <strong>Customized Sessions</strong>
          <span>Based on your needs</span>
        </div>

        <div className="footer-item">
          <strong>Practical Guidance</strong>
          <span>Hands-on practice</span>
        </div>

        <div className="footer-item">
          <strong>Resume & Interview</strong>
          <span>Support when you need it</span>
        </div>

        <div className="footer-item">
          <strong>Your Goal. Your Path.</strong>
          <span>Your growth.</span>
        </div>

        <div className="footer-bottom">
          © 2026 NG SkillUplift Learn. Find clarity. Grow.
        </div>

      </footer>

    </div>
  );
}

export default App;