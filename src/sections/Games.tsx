import { siteContent } from '../data/content'

export const Games = () => {
  const { games } = siteContent

  return (
    <section className="section" id="games" aria-labelledby="games-title">
      <div className="shell">
        <div className="section-head">
          <span className="eyebrow">Games</span>
          <h2 id="games-title">On the Play Store</h2>
          <p>Every game I release goes here, newest first.</p>
        </div>

        {games.length === 0 ? (
          <div className="panel empty">
            <span className="tag tag-gold">First game in development</span>
            <p>
              Nothing released yet. When the first game is on the Play Store it appears
              here, and so does everything after it.
            </p>
          </div>
        ) : (
          <div className="game-grid">
            {games.map(game => (
              <article className="panel game" key={game.title}>
                {game.art ? (
                  <img className="game-art" src={game.art} alt={`${game.title} key art`} />
                ) : (
                  <div className="game-art" aria-hidden="true"></div>
                )}
                <div className="game-body">
                  <h3>{game.title}</h3>
                  <p>{game.blurb}</p>
                  {game.playStoreUrl ? (
                    <a className="btn" href={game.playStoreUrl}>Get it on Play</a>
                  ) : (
                    <span className="tag tag-gold">{game.status}</span>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
