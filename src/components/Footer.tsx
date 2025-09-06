
export const Footer = () => {
  const socialLinks = [
    { name: 'Twitter', href: '#', label: 'Follow us on Twitter' },
    { name: 'Discord', href: '#', label: 'Join our Discord' },
    { name: 'YouTube', href: '#', label: 'Subscribe on YouTube' },
    { name: 'LinkedIn', href: '#', label: 'Connect on LinkedIn' }
  ]

  return (
    <footer>
      <div className="foot">
        <div>
          <div className="brand brand--lg">NIMRITA GAMES</div>
          <div className="copy">
            © 2025 Nimrita Games. Crafted with obsession. Photos via Unsplash.
          </div>
        </div>
        <div className="social" aria-label="Social links">
          {socialLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              rel="noopener"
              aria-label={link.label}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}