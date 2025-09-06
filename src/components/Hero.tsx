import { useEffect, useRef } from 'react'

export const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const stars: { x: number; y: number; size: number; opacity: number }[] = []

    const createStars = () => {
      stars.length = 0
      for (let i = 0; i < 150; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2,
          opacity: Math.random() * 0.8 + 0.2
        })
      }
    }

    const animateStars = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      stars.forEach(star => {
        ctx.globalAlpha = star.opacity
        ctx.fillStyle = '#00ff88'
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
        ctx.fill()
        
        star.opacity += (Math.random() - 0.5) * 0.02
        star.opacity = Math.max(0.1, Math.min(0.8, star.opacity))
      })
      
      requestAnimationFrame(animateStars)
    }

    resizeCanvas()
    createStars()
    animateStars()

    window.addEventListener('resize', () => {
      resizeCanvas()
      createStars()
    })

    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return (
    <header className="hero" id="top" aria-label="Hero">
      <canvas ref={canvasRef} id="stars" aria-hidden="true"></canvas>
      <div className="hero-bg" data-kenburns></div>
      <div className="grid" aria-hidden="true"></div>
      <div className="vignette" aria-hidden="true"></div>

      <div className="hero-inner">
        <div className="mission-brief">
          <div className="brief-header">
            <span className="mission-tag">CLASSIFIED • MULTIPLAYER-NATIVE</span>
            <div className="mission-id">[MISSION ID: NMR-001]</div>
          </div>
          
          <h1 className="mission-title" data-animate>
            Ship smaller.<br/>Hit harder.
          </h1>
          
          <div className="mission-desc" data-animate>
            <div className="desc-line">
              <span className="line-prefix">{'>'}</span>
              We build <strong>systems-driven</strong> games with <strong>cinematic surface</strong>
            </div>
            <div className="desc-line">
              <span className="line-prefix">{'>'}</span>
              and <strong>tournament-grade netcode</strong>. We don't chase trends—
            </div>
            <div className="desc-line">
              <span className="line-prefix">{'>'}</span>
              we design for <em>forever fun</em>.
            </div>
          </div>
          
          <div className="mission-params" data-animate>
            <div className="param-group">
              <span className="param-label">SCOPE:</span>
              <span className="param-value">TIGHT</span>
            </div>
            <div className="param-group">
              <span className="param-label">POLISH:</span>
              <span className="param-value">DEEP</span>
            </div>
            <div className="param-group">
              <span className="param-label">AUTOMATION:</span>
              <span className="param-value">MAXIMUM</span>
            </div>
          </div>

          <div className="mission-actions" data-animate>
            <button 
              className="action-primary" 
              type="button" 
              onClick={() => scrollToSection('contact')}
              aria-label="Join founders program"
              title="Join founders program for early access"
            >
              <div className="action-text">JOIN PROGRAM</div>
              <div className="action-subtitle">Founders Access</div>
            </button>
            <button 
              className="action-secondary" 
              type="button" 
              onClick={() => scrollToSection('origin')}
              title="Learn about our development approach"
            >
              <div className="action-text">VIEW INTEL</div>
              <div className="action-subtitle">Development Data</div>
            </button>
          </div>
        </div>
        
        <div className="mission-nav bounce-arrow" aria-hidden="true">
          <div className="nav-prompt">SCROLL TO CONTINUE BRIEFING</div>
          <div className="nav-indicator">↓</div>
        </div>
      </div>
    </header>
  )
}