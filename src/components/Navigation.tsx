import { useState, useEffect } from 'react'
import { useScrollProgress } from '../hooks/useScrollAnimation'

export const Navigation = () => {
  const scrollProgress = useScrollProgress()
  const [activeSection, setActiveSection] = useState('')
  const [isScrolled, setIsScrolled] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Track which section is currently active
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      const sections = ['origin', 'principles', 'services', 'worlds', 'contact']
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      setActiveSection(current || '')
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { id: 'origin', label: 'ORIGIN', sublabel: 'Our Story' },
    { id: 'principles', label: 'CORE', sublabel: 'Principles' },
    { id: 'services', label: 'GAMES', sublabel: 'Projects' },
    { id: 'worlds', label: 'GALLERY', sublabel: 'Visuals' },
    { id: 'contact', label: 'CONNECT', sublabel: 'Contact' }
  ]

  return (
    <nav className={`game-nav ${isScrolled ? 'scrolled' : ''}`} role="navigation" aria-label="Primary">
      <div className="game-nav-inner">
        <div className="nav-brand">
          <div className="brand-logo">
            <div className="logo-icon">◤</div>
            <div className="brand-text">
              <div className="brand-main">NIMRITA</div>
              <div className="brand-sub">GAMES</div>
            </div>
          </div>
        </div>

        <div className="nav-menu">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => scrollToSection(item.id)}
              title={`Navigate to ${item.sublabel}`}
            >
              <div className="nav-item-main">{item.label}</div>
              <div className="nav-item-sub">{item.sublabel}</div>
              <div className="nav-item-indicator"></div>
            </button>
          ))}
        </div>

        <div className="nav-actions">
          <button 
            className="cta-primary" 
            onClick={() => scrollToSection('contact')}
            title="Join our founders program"
          >
            <span className="cta-text">JOIN PROGRAM</span>
            <div className="cta-glow"></div>
          </button>
        </div>

        <div className="nav-progress-container">
          <div className="progress-label">MISSION PROGRESS</div>
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${scrollProgress}%` }}
            ></div>
            <div className="progress-text">{Math.round(scrollProgress)}%</div>
          </div>
        </div>
      </div>
    </nav>
  )
}