import { Hero } from '../sections/Hero'
import { Games } from '../sections/Games'
import { Tools } from '../sections/Tools'
import { Contact } from '../sections/Contact'

export const HomePage = () => (
  <>
    <Hero />
    <main id="main">
      <Games />
      <Tools />
      <Contact />
    </main>
  </>
)
