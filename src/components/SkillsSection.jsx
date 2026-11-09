import { useMemo, useState } from 'react'

const categories = ['All', 'Frontend', 'Backend', 'Tools & Infrastructure']

const skills = [
  { name: 'HTML5', emoji: '🧱', bg: '#fff3e0', level: 90, category: 'Frontend', tag: 'Advanced' },
  { name: 'CSS3', emoji: '🎨', bg: '#e3f2fd', level: 88, category: 'Frontend', tag: 'Advanced' },
  { name: 'React.js', emoji: '⚛️', bg: '#e0f7fa', level: 87, category: 'Frontend', tag: 'Advanced' },
  { name: 'Tailwind CSS', emoji: '💨', bg: '#e0f7fa', level: 86, category: 'Frontend', tag: 'Advanced' },
  { name: 'JavaScript', emoji: '✨', bg: '#fffde7', level: 88, category: 'Frontend', tag: 'Advanced' },

  { name: 'Node.js', emoji: '🟢', bg: '#e8f5e9', level: 85, category: 'Backend', tag: 'Advanced' },
  { name: 'Express.js', emoji: '🚂', bg: '#eceff1', level: 85, category: 'Backend', tag: 'Advanced' },
  { name: 'Python', emoji: '🐍', bg: '#fff8e1', level: 85, category: 'Backend', tag: 'Advanced' },
  { name: 'SQL', emoji: '🗄️', bg: '#e8eaf6', level: 85, category: 'Backend', tag: 'Advanced' },
  { name: 'REST APIs', emoji: '🔗', bg: '#e1f5fe', level: 88, category: 'Backend', tag: 'Advanced' },
  { name: 'JWT', emoji: '🔐', bg: '#fce4ec', level: 82, category: 'Backend', tag: 'Advanced' },
  { name: 'DBMS', emoji: '💾', bg: '#ede7f6', level: 82, category: 'Backend', tag: 'Advanced' },

  { name: 'Git', emoji: '🌿', bg: '#f3e5f5', level: 90, category: 'Tools & Infrastructure', tag: 'Advanced' },
  { name: 'GitHub', emoji: '🐙', bg: '#f3e5f5', level: 90, category: 'Tools & Infrastructure', tag: 'Advanced' },
  { name: 'Linux', emoji: '🐧', bg: '#fff8e1', level: 80, category: 'Tools & Infrastructure', tag: 'Intermediate' },
  { name: 'AWS', emoji: '☁️', bg: '#fff8e1', level: 75, category: 'Tools & Infrastructure', tag: 'Intermediate' },
]

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredSkills = useMemo(
    () =>
      activeCategory === 'All'
        ? skills
        : skills.filter((skill) => skill.category === activeCategory),
    [activeCategory],
  )

  return (
    <section className="section skills-section" id="skills">
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: 560, margin: '0 auto' }}>
          <div className="section-label">My Skills</div>
          <h2 className="section-title">Technologies I Work With</h2>
          <p style={{ color: 'var(--clr-ink-muted)', marginTop: 12 }}>
            A curated set of tools and technologies I use to build modern, scalable applications.
          </p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: 10, marginTop: 36, flexWrap: 'wrap' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              className={activeCategory === cat ? 'btn-primary' : 'btn-outline'}
              onClick={() => setActiveCategory(cat)}
              style={{ fontSize: 13, padding: '8px 18px' }}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="skills-grid">
          {filteredSkills.map((skill) => (
            <div className="skill-card" key={skill.name}>
              <div className="skill-icon" style={{ background: skill.bg }}>
                <span style={{ fontSize: 22 }}>{skill.emoji}</span>
              </div>
              <div className="skill-name">{skill.name}</div>
              <div className="progress-track">
                <div
                  className="progress-fill"
                  style={{ width: `${skill.level}%`, background: 'var(--clr-accent)' }}
                ></div>
              </div>
              <div className="skill-meta">
                <span>{skill.tag}</span>
                <strong>{skill.level}%</strong>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
