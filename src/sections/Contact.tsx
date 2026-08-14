import { siteContent } from '../data/content'

export const Contact = () => {
  const { studio } = siteContent

  return (
    <section className="section" id="contact" aria-labelledby="contact-title">
      <div className="shell">
        <div className="section-head">
          <span className="eyebrow">Contact</span>
          <h2 id="contact-title">Get in touch</h2>
        </div>
        <div className="panel contact-card">
          <p>
            Bug in one of the games, or something you want to ask? Email is the fastest
            way to reach me — it comes straight to me, not a support queue.
          </p>
          <a className="btn btn-primary" href={`mailto:${studio.email}`}>
            {studio.email}
          </a>
        </div>
      </div>
    </section>
  )
}
