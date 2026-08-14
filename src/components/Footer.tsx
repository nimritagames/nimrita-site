import { siteContent } from '../data/content'

export const Footer = () => (
  <footer className="footer">
    <div className="shell footer-inner">
      <small>© {new Date().getFullYear()} {siteContent.studio.name}</small>
      <div className="footer-links">
        <a href="/privacy/">Privacy</a>
        <a href="/support/">Support</a>
        <a href={`mailto:${siteContent.studio.email}`}>Email</a>
      </div>
    </div>
  </footer>
)
