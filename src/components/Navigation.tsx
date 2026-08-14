import { siteContent } from '../data/content'

export const Navigation = () => (
  <nav className="nav" aria-label="Main">
    <div className="shell nav-inner">
      <a className="brand" href="#top">
        <span className="brand-mark" aria-hidden="true"></span>
        {siteContent.studio.name}
      </a>
      <div className="nav-links">
        <a href="#games">Games</a>
        <a href="#tools">Tools</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  </nav>
)
