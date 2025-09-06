
interface MoodProps {
  src: string
  alt: string
  caption: string
}

const MoodImage = ({ src, alt, caption }: MoodProps) => (
  <figure className="mood tilt" data-animate>
    <img 
      alt={alt} 
      src={src} 
      loading="lazy" 
      decoding="async"
    />
    <figcaption className="overlay">
      <p>{caption}</p>
    </figcaption>
  </figure>
)

export const Worlds = () => {
  const moods = [
    {
      src: 'https://images.unsplash.com/photo-1496284427489-f59461d8a8e6?w=1200&q=80',
      alt: 'Neon alley, rainy night, cyberpunk mood',
      caption: 'Neon economies & social stealth.'
    },
    {
      src: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?w=1200&q=80',
      alt: 'Futuristic UI dashboard with holographic panels',
      caption: 'Readable HUDs with zero cruft.'
    },
    {
      src: 'https://images.unsplash.com/photo-1603354350317-6f7aaa5911c5?w=1200&q=80',
      alt: 'Procedural geometry and crystalline structures',
      caption: 'Rules you learn by playing.'
    },
    {
      src: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&q=80',
      alt: 'Desert planet with monolithic structures',
      caption: 'Lonely biomes, generous systems.'
    },
    {
      src: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?w=1200&q=80',
      alt: 'Geometric abstract neon shapes',
      caption: 'Impact VFX that don\'t steal frames.'
    },
    {
      src: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80',
      alt: 'Digital architecture tower',
      caption: 'Architecture as encounter design.'
    }
  ]

  return (
    <section id="worlds" className="worlds" aria-labelledby="worlds-title">
      <div className="container">
        <span className="kicker">Chapter 04 — Worlds</span>
        <h2 className="section-title" id="worlds-title">Atmosphere previews</h2>
        <p className="lead">
          Not announcements—just signals. The kinds of places we love to build.
        </p>

        <div className="mood-grid">
          {moods.map((mood, index) => (
            <MoodImage key={index} {...mood} />
          ))}
        </div>
      </div>
    </section>
  )
}
