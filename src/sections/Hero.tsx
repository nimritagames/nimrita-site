import { siteContent } from '../data/content'

export const Hero = () => {
  const { studio, games } = siteContent
  const released = games.filter(game => game.status === 'Released').length

  return (
    <header className="hero" id="top">
      <div className="shell">
        <div className="hero-inner">
        <span className="eyebrow">{studio.name}</span>
        <h1>Small games, shipped one after another.</h1>
        <p>{studio.statement}</p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#games">
            {released > 0 ? 'See the games' : 'What I’m building'}
          </a>
          <a className="btn" href="#tools">Tools &amp; writing</a>
          </div>
        </div>
      </div>
    </header>
  )
}
