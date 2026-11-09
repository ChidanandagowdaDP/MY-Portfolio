const experiences = [
  {
    role: 'Associate Software Engineer',
    company: 'Carture India Pvt Ltd',
    location: 'Bangalore, India',
    period: 'Jan 2026 – Jul 2026',
    emoji: '🚀',
    desc: "Managed and validated data flowing through the company's POS platform, collaborating cross-functionally with technical support and development teams to translate business requirements into data-driven solutions. Automated the indent processing workflow using Python, converting a manual process into a repeatable pipeline that contributed to a reported 80% increase in company sales. Built and maintained a ticketing system with structured data models and validation logic, and used Python and AI-assisted tools to automate internal data processing and reporting.",
    techs: ['Python', 'React.js', 'Node.js', 'Express.js', 'Data Automation', 'AI Tools'],
  },
  {
    role: 'Full Stack Web Developer Intern',
    company: 'Rooman Technologies',
    location: 'India',
    period: 'Sep 2024 – Feb 2025',
    emoji: '💻',
    desc: 'Structured application data using MongoDB/Mongoose and designed RESTful APIs for chat history, user authentication, and notifications. Implemented JWT-based authentication and access controls to secure user data, and built a real-time chat application on the MERN stack with Socket.io for reliable bidirectional communication and a fully responsive UI.',
    techs: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Socket.io', 'JWT', 'REST API'],
  },
]

export default function ExperienceSection() {
  return (
    <section className="section experience-section" id="experience">
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: 560, margin: '0 auto 48px' }}>
          <div className="section-label">Career Path</div>
          <h2 className="section-title">Work Experience</h2>
        </div>

        <div className="exp-timeline">
          {experiences.map((exp, i) => (
            <div className={`exp-item ${i === 0 ? 'current' : ''}`} key={exp.role}>
              <div className="exp-dot">{exp.emoji}</div>
              <div className="exp-content">
                <div className="exp-header">
                  <div className="exp-role">{exp.role}</div>
                  <span className="exp-period">{exp.period}</span>
                </div>
                <div className="exp-company">
                  {exp.company} · {exp.location}
                  {i === 0 && <span className="current-badge">Current</span>}
                </div>
                <p className="exp-desc">{exp.desc}</p>
                <div className="tag-list">
                  {exp.techs.map((tech) => (
                    <span className="tech-pill" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
