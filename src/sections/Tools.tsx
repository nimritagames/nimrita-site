import { siteContent } from '../data/content'

export const Tools = () => {
  const { tools } = siteContent

  return (
    <section className="section" id="tools" aria-labelledby="tools-title">
      <div className="shell">
        <div className="section-head">
          <span className="eyebrow">Tools &amp; writing</span>
          <h2 id="tools-title">Things you can actually use</h2>
          <p>Built while making games. Free, and yours to take.</p>
        </div>

        <div className="tool-grid">
          {tools.map(tool => (
            <article className="panel tool" key={tool.title}>
              <h3>{tool.title}</h3>
              <p>{tool.blurb}</p>
              {tool.install && <div className="tool-cmd">{tool.install}</div>}
              <div className="tool-meta">
                <a className="btn" href={tool.href}>Open</a>
                <span className="eyebrow">{tool.meta}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
