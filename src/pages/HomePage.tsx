import { Hero } from '../components/Hero'
import { Origin } from '../components/Origin'
import { Principles } from '../components/Principles'
import { Services } from '../components/Services'
import { Worlds } from '../components/Worlds'
import { Contact } from '../components/Contact'

export const HomePage = () => {
  return (
    <>
      <Hero />
      <main id="main">
        <Origin />
        <Principles />
        <Services />
        <Worlds />
        <Contact />
      </main>
    </>
  )
}