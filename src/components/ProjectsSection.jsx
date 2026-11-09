import { useMemo, useState } from "react";

const filters = ["All", "Web App", "AI/ML", "Internship", "Work Experience"];

const projects = [
  {
    title: "Forever — E-Commerce Website",
    emoji: "🛍️",
    bg: "linear-gradient(135deg, #fce4ec, #f8bbd0)",
    context: "Personal Project · MERN Stack",
    desc: "Full-stack MERN e-commerce website with product listings, cart, checkout, and secure authentication.",
    longDesc:
      'Built "Forever", a full-stack e-commerce website using the MERN stack (MongoDB, Express.js, React.js, Node.js). Implemented product listings, category browsing, cart and checkout flows, secure user authentication, and RESTful APIs for products, users, and orders. Designed MongoDB/Mongoose schemas and built a responsive React UI for a smooth shopping experience.',
    tags: [
      "MERN Stack",
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "REST API",
    ],
    category: "Web App",
  },
  {
    title: "Skill Barter System",
    emoji: "🔄",
    bg: "linear-gradient(135deg, #e8f5e9, #c8e6c9)",
    context: "Freelancing Project · MERN Stack",
    desc: "Full-stack MERN platform where users exchange skills without money, with matching logic for complementary needs.",
    longDesc:
      "Built and deployed on Render a full-stack platform using the MERN stack, where users exchange skills without money — listing skills they offer and skills they want, with matching logic that pairs users with complementary needs. Designed MongoDB/Mongoose schemas and RESTful APIs for user profiles, skill listings, and barter requests (pending, accepted, completed), with validation to block duplicate or invalid requests.",
    tags: [
      "MERN Stack",
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "REST API",
      "Render",
    ],
    category: "Web App",
  },
  {
    title: "Smart AI Resume Analyzer",
    emoji: "🤖",
    bg: "linear-gradient(135deg, #e3f2fd, #bbdefb)",
    context: "Personal Project",
    desc: "AI-powered app that extracts, parses, and validates resume data against job descriptions using NLP.",
    longDesc:
      "Built an AI-powered application to extract, parse, and validate resume data against job descriptions using NLP and text-mining techniques (spaCy, PDFMiner, docx2txt). Implemented keyword extraction and cosine similarity scoring, with a Streamlit interface supporting PDF/DOCX uploads and real-time validation feedback. Surfaced skill-gap insights by comparing extracted resume data against job description requirements, helping users identify improvement areas.",
    tags: ["Python", "spaCy", "Streamlit", "NLP", "PDFMiner", "docx2txt"],
    category: "AI/ML",
  },
  {
    title: "AI Chatbot",
    emoji: "🧠",
    bg: "linear-gradient(135deg, #f3e5f5, #e1bee7)",
    context: "Personal Project · Generative AI",
    desc: "Conversational AI chatbot built with LangChain, the Gemini API, and a Streamlit chat interface.",
    longDesc:
      "Built an AI chatbot using LangChain and the Google Gemini API (LLM API), with a Streamlit chat interface for real-time conversations. Implemented prompt templates, conversation memory, and chain-based orchestration to maintain context across turns, and integrated the LLM API for accurate, context-aware responses.",
    tags: ["Python", "LangChain", "Gemini API", "Streamlit", "LLM API"],
    category: "AI/ML",
  },
  {
    title: "Real-Time Chat Application",
    emoji: "💬",
    bg: "linear-gradient(135deg, #e0f7fa, #b2ebf2)",
    context: "Internship · Rooman Technologies",
    desc: "Real-time MERN chat app with JWT authentication, Socket.io messaging, and a responsive UI.",
    longDesc:
      "Built during my Full Stack Web Developer internship at Rooman Technologies. Developed a real-time chat application on the MERN stack, structuring application data with MongoDB/Mongoose and designing RESTful APIs for chat history, user authentication, and notifications. Implemented JWT-based authentication and access controls to secure user data, and integrated Socket.io for reliable bidirectional communication with a fully responsive UI across devices.",
    tags: [
      "MERN Stack",
      "Socket.io",
      "JWT",
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
    ],
    category: "Internship",
  },
  {
    title: "Ticketing System",
    emoji: "🎫",
    bg: "linear-gradient(135deg, #fff3e0, #ffe0b2)",
    context: "Work · Carture India Pvt Ltd",
    desc: "Internal ticketing system built with React, Node.js, and Express.js with structured data models and validation.",
    longDesc:
      "Built and maintained a ticketing system at Carture India using React, Node.js, and Express.js, with structured data models and validation logic to ensure data integrity across the application. Worked cross-functionally with technical support and development teams to translate business requirements into reliable, data-driven solutions.",
    tags: ["React.js", "Node.js", "Express.js", "REST API", "Data Validation"],
    category: "Work Experience",
  },
  {
    title: "Indent Processing Automation",
    emoji: "⚙️",
    bg: "linear-gradient(135deg, #ede7f6, #d1c4e9)",
    context: "Work · Carture India Pvt Ltd",
    desc: "Python automation pipeline that replaced a manual indent workflow and contributed to an 80% sales increase.",
    longDesc:
      "Automated the indent processing workflow using Python at Carture India, converting a manual, error-prone process into a repeatable pipeline that contributed to a reported 80% increase in company sales. Also used Python and AI-assisted tools to automate internal data processing and reporting, reducing manual entry errors and improving team productivity.",
    tags: ["Python", "Automation", "Data Processing", "Reporting", "AI Tools"],
    category: "Work Experience",
  },
];

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = useMemo(
    () =>
      activeFilter === "All"
        ? projects
        : projects.filter((p) => p.category === activeFilter),
    [activeFilter],
  );

  return (
    <section className="section" id="projects">
      <div className="container">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexWrap: "wrap",
            gap: 20,
            marginBottom: 48,
          }}
        >
          <div>
            <div className="section-label">My Work</div>
            <h2 className="section-title">Featured Projects</h2>
            <div className="projects-highlight">
              <span className="projects-highlight-num">5+</span>
              <span className="projects-highlight-text">
                Business projects delivered across internships &amp; full-time
                roles
              </span>
            </div>
          </div>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            {filters.map((filter) => (
              <button
                key={filter}
                className={
                  activeFilter === filter ? "btn-primary" : "btn-outline"
                }
                onClick={() => setActiveFilter(filter)}
                style={{ fontSize: 13, padding: "8px 18px" }}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div
              className="project-card"
              key={project.title}
              onClick={() => setSelectedProject(project)}
            >
              <div className="project-thumb" style={{ background: project.bg }}>
                <span>{project.emoji}</span>
                <div className="overlay">
                  <span className="thumb-icon">🐙</span>
                  <span className="thumb-icon">↗</span>
                </div>
              </div>
              <div className="project-body">
                {project.context && (
                  <div className="project-context">{project.context}</div>
                )}
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="project-name">{project.title}</div>
                <p className="project-desc">{project.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 48 }}>
          <a
            className="btn-outline"
            href="https://github.com/chidanandagowda"
            target="_blank"
            rel="noreferrer"
          >
            🐙 View All Projects on GitHub
          </a>
        </div>
      </div>

      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <div
              className="modal-thumb"
              style={{ background: selectedProject.bg }}
            >
              {selectedProject.emoji}
            </div>
            <div className="modal-body">
              {selectedProject.context && (
                <div className="project-context" style={{ marginBottom: 10 }}>
                  {selectedProject.context}
                </div>
              )}
              <div className="project-tags" style={{ marginBottom: 12 }}>
                {selectedProject.tags.map((tag) => (
                  <span key={tag} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="modal-title">{selectedProject.title}</h3>
              <p className="modal-desc">{selectedProject.longDesc}</p>
              <div className="project-actions">
                <button className="btn-primary">Live Demo</button>
                <button className="btn-outline">View Code</button>
                <button
                  className="modal-close"
                  onClick={() => setSelectedProject(null)}
                >
                  ✕
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
