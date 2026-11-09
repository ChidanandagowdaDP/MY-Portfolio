import resumePdf from "../assets/data/resume.pdf";

const stats = [
  { num: "1+", label: "Years Experience" },
  { num: "10+", label: "Projects Built" },
  { num: "10+", label: "Happy Clients" },
];

export default function HeroSection() {
  const scrollTo = (hash) =>
    document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="hero" id="home">
      <div className="hero-bg-shape"></div>
      <div className="container">
        <div className="hero-inner">
          <div className="hero-text">
            <div className="hero-badge fade-up delay-1">
              <span className="dot"></span>
              Available for work
            </div>

            <h1 className="hero-title fade-up delay-2">
              Crafting Digital
              <br />
              <em className="accent">Experiences</em>
              <br />
              &amp; That Matter
            </h1>

            <p className="hero-sub fade-up delay-3">
              Software Engineer based in Karnataka, India. I build full-stack
              apps and automation pipelines that turn manual, error-prone
              processes into reliable systems.
            </p>

            <div className="hero-btns fade-up delay-4">
              <button
                className="btn-primary"
                onClick={() => scrollTo("#projects")}
              >
                View My Work
              </button>
              <a
                className="btn-outline"
                href={resumePdf}
                target="_blank"
                rel="noreferrer"
              >
                ↓ Download CV
              </a>
            </div>

            <div className="hero-stats fade-up delay-5">
              {stats.map((stat) => (
                <div className="stat-item" key={stat.label}>
                  <div className="num">{stat.num}</div>
                  <div className="label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-image-wrap fade-up delay-3">
            <div className="hero-avatar">🧑‍💻</div>

            <div className="hero-floating-card card-1">
              <div className="fc-icon" style={{ background: "#e8f5e9" }}>
                🚀
              </div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 700 }}>
                  10+ Projects
                </div>
                <div
                  style={{
                    fontSize: 11,
                    color: "var(--clr-ink-muted)",
                    fontWeight: 400,
                  }}
                >
                  Built &amp; Shipped
                </div>
              </div>
            </div>

            <div className="hero-floating-card card-2">
              <div className="fc-icon" style={{ background: "#fff0f3" }}>
                🤖
              </div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 700 }}>AI-Powered</div>
                <div
                  style={{
                    fontSize: 11,
                    color: "var(--clr-ink-muted)",
                    fontWeight: 400,
                  }}
                >
                  Automation Solutions
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-dot"></div>
      </div>
    </section>
  );
}
