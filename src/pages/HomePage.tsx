import { Hero } from '../sections/Hero'
import { Origin } from '../sections/Origin'
import { Principles } from '../sections/Principles'
import { Projects } from '../sections/Projects'
import { Gallery } from '../sections/Gallery'
import { Contact } from '../sections/Contact'

export const HomePage = () => {
  return (
    <>
      <Hero />
      <main id="main">
        <Origin />
        <Principles />
        <Projects />
        <Gallery />
        <Contact />
      </main>
    </>
  )
}
