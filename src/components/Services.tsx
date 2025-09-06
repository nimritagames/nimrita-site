import { siteContent } from '../data/content'

interface ProjectProps {
  title: string
  status: string
  description: string
  features: string[]
}

const Project = ({ title, status, description, features }: ProjectProps) => {
  const getStatusColor = (status: string) => {
    if (status.includes('Development')) return '#00ff88'
    if (status.includes('Prototype')) return '#ff4db8'
    if (status.includes('Pre-Production')) return '#00e0ff'
    if (status.includes('Technology')) return '#ffd700'
    return '#9aa0a6'
  }

  return (
    <article className="service tilt hover-grow" data-animate style={{ cursor: 'pointer' }}>
      <div className="project-header">
        <h3>{title}</h3>
        <span className="status" style={{ color: getStatusColor(status), fontWeight: 'bold' }}>
          {status}
        </span>
      </div>
      <p>{description}</p>
      <ul className="bullets">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </article>
  )
}

const scrollToContact = () => {
  const element = document.getElementById('contact')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

export const Services = () => {
  return (
    <section id="services" aria-labelledby="projects-title" className="services">
      <div className="container">
        <span className="kicker">Chapter 03 — Projects</span>
        <h2 className="section-title" id="projects-title">What we're building</h2>
        <p className="lead" style={{ fontSize: '1.2rem' }}>
          Games built with our proprietary engine. Each project pushes multiplayer gaming forward.
        </p>

        <div className="service-grid">
          {siteContent.projects.map((project) => (
            <Project key={project.title} {...project} />
          ))}
        </div>

        <div className="cta-section" style={{ textAlign: 'center', marginTop: '32px', padding: '24px', background: 'rgba(0,255,136,0.08)', borderRadius: '16px' }}>
          <h3 style={{ margin: '0 0 12px', color: 'var(--primary)' }}>Want to play these games?</h3>
          <p style={{ margin: '0 0 16px', color: '#cfd4da' }}>
            Join our founders list for early access to playtests and development updates.
          </p>
          <button 
            className="btn pulse-button" 
            onClick={scrollToContact}
            style={{ fontSize: '1.1rem' }}
          >
            Join Founders List
          </button>
        </div>
      </div>
    </section>
  )
}