import { useState, useEffect } from 'react'

interface MetricProps {
  target: number
  suffix?: string
  label: string
  sublabel: string
}

const AnimatedMetric = ({ target, suffix = '', label, sublabel }: MetricProps) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 2000
    const increment = target / (duration / 16)
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [target])

  return (
    <div className="metric tilt" data-animate role="listitem">
      <div className="metric-num">
        <span className="count">{count}</span>
        <span className="suffix">{suffix}</span>
      </div>
      <div className="metric-label">{label}</div>
      <p className="metric-sub">{sublabel}</p>
    </div>
  )
}

export const Origin = () => {
  return (
    <section id="origin" aria-labelledby="origin-title">
      <div className="container">
        <span className="kicker">Chapter 01 — Origin</span>
        <h2 className="section-title" id="origin-title">Built by toolmakers &amp; designers</h2>

        <div className="split">
          <div>
            <p className="lead">
              We started Nimrita to prove a point: <strong>small teams can out-deliver big studios</strong> with the right tools and production discipline. We prototype fast, kill mercilessly, and only scale ideas that still feel fresh on the 100th run.
            </p>

            <div className="origin-board">
              <div className="panel panel--promises">
                <h3 className="panel-title">Three promises</h3>
                <ul className="promise-list" role="list">
                  <li role="listitem">
                    <span className="dot"></span> No crunch. Craft wins over hours.
                  </li>
                  <li role="listitem">
                    <span className="dot"></span> Multiplayer by default. Stability first.
                  </li>
                  <li role="listitem">
                    <span className="dot"></span> Playtest painfully early. Iterate honestly.
                  </li>
                </ul>
              </div>

              <div className="panel panel--metrics">
                <h3 className="panel-title">Numbers that matter</h3>
                <div className="metrics">
                  <AnimatedMetric 
                    target={15} 
                    suffix="+" 
                    label="tools" 
                    sublabel="Internal dev acceleration" 
                  />
                  <AnimatedMetric 
                    target={12} 
                    label="platforms" 
                    sublabel="From mobile to console" 
                  />
                  <AnimatedMetric 
                    target={0} 
                    suffix="%" 
                    label="crunch policy" 
                    sublabel="Forever" 
                  />
                </div>
              </div>
            </div>
          </div>

          <figure className="origin-photo tilt" data-animate>
            <img 
              alt="Game development workstation with neon lighting, controllers, and code" 
              src="https://images.unsplash.com/photo-1542751110-97427bbecf20?w=1600&q=80" 
              loading="lazy" 
              decoding="async"
            />
            <figcaption>Our desk when we ship builds.</figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}
