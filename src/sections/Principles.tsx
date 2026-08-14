
interface PrincipleProps {
  num: string
  title: string
  description: string
}

const Principle = ({ num, title, description }: PrincipleProps) => (
  <article className="step tilt" data-animate>
    <div className="num">{num}</div>
    <h3>{title}</h3>
    <p>{description}</p>
  </article>
)

const platforms = [
  'Steam', 'PlayStation', 'Xbox', 'Nintendo', 'iOS', 'Android', 'Epic', 'GOG'
]

export const Principles = () => {
  const principles = [
    {
      num: '01',
      title: 'Scope small, layer deep',
      description: 'We stack depth on tight cores: strong verbs, readable enemies, and a zero-mystery UI.'
    },
    {
      num: '02', 
      title: 'Automate the boring',
      description: 'Build pipelines once, reuse forever. Every sprint gets faster—and more fun.'
    },
    {
      num: '03',
      title: 'Multiplayer-native', 
      description: 'Lockstep where it matters, rollback where it shines. Cross-platform from day one.'
    },
    {
      num: '04',
      title: 'Polish like a film studio',
      description: 'Camera grammar, audio arcs, and VFX that sell impact without stealing frames.'
    },
    {
      num: '05',
      title: 'Playtest relentlessly',
      description: 'We prototype in the open. If it doesn\'t earn the next session, it ships never.'
    },
    {
      num: '06',
      title: 'Own technical debt',
      description: 'We refactor on schedule, not after launch. Future updates stay cheap.'
    }
  ]

  return (
    <section id="principles" aria-labelledby="principles-title">
      <div className="container">
        <span className="kicker">Chapter 02 — Principles</span>
        <h2 className="section-title" id="principles-title">How we keep games fun past day 100</h2>
        
        <div className="principles-grid">
          {principles.map((principle) => (
            <Principle key={principle.num} {...principle} />
          ))}
        </div>

        <div className="marquee" aria-label="Platforms & ecosystems we target">
          <div className="track">
            {[...platforms, ...platforms].map((platform, index) => (
              <span key={index} className="logo-badge">{platform}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}