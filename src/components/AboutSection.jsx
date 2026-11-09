import profile from '../assets/data/profile-photo.jpg'
import resume from '../assets/data/resume.pdf'

const highlights = [
  { icon: '📍', text: 'Based in Karnataka, India' },
  { icon: '💼', text: 'Open to full-time & freelance work' },
  { icon: '🎓', text: 'B.E in Information Science' },
  { icon: '🗣️', text: 'Fluent in English, Kannada' },
]

export default function AboutSection() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-image-side">
            <div className="about-img-placeholder">
              <img
                src={profile}
                alt="About Chidanandagowda"
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'var(--radius-lg)' }}
              />
            </div>
            <div className="about-exp-badge">
              <div className="big">1+</div>
              <div className="small">
                Years of
                <br />
                Experience
              </div>
            </div>
          </div>

          <div className="about-text">
            <div className="section-label">About Me</div>
            <h2 className="section-title">Passionate about building great software</h2>

            <div style={{ marginTop: 24 }}>
              <p>
                Hi! I'm Chidanandagowda D P, a software engineer with experience in full-stack
                development, data automation, and AI-powered applications.
              </p>
              <p>
                I work primarily with JavaScript, Python, SQL, REST APIs, and the MERN stack. I have
                built automation pipelines that turned manual, error-prone processes into reliable
                systems — driving real gains in business efficiency.
              </p>
              <p>
                I bring strong problem-solving instincts and a builder's mindset to every engineering
                challenge, focusing on clean architecture and solutions that create measurable impact.
              </p>
            </div>

            <div className="about-highlights">
              {highlights.map((item) => (
                <div className="highlight-item" key={item.text}>
                  <div className="highlight-icon" style={{ fontSize: 16 }}>
                    {item.icon}
                  </div>
                  {item.text}
                </div>
              ))}
            </div>

            <div style={{ marginTop: 32 }}>
              <a className="btn-primary" href={resume} target="_blank" rel="noreferrer">
                ↓ Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
