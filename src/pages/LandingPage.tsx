import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'
import { Reveal } from '../components/ui/Reveal'
import { Hero } from '../components/landing/Hero'
import { Benefits } from '../components/landing/Benefits'
import { HowItWorks } from '../components/landing/HowItWorks'
import { VideoSection } from '../components/landing/VideoSection'
import { Principles } from '../components/landing/Principles'
import { Calculator } from '../components/calculator/Calculator'
import { FAQ } from '../components/landing/FAQ'
import styles from './LandingPage.module.css'

export function LandingPage() {
  return (
    <>
      <Header />
      <main>
        <div className={styles.heroReveal}>
          <Hero />
        </div>

        <Reveal>
          <Benefits />
        </Reveal>

        <Reveal delay={40}>
          <HowItWorks />
        </Reveal>

        <Reveal delay={40}>
          <VideoSection />
        </Reveal>

        <Reveal delay={40}>
          <Principles />
        </Reveal>

        <Reveal delay={40}>
          <Calculator />
        </Reveal>

        <Reveal delay={40}>
          <FAQ />
        </Reveal>
      </main>
      <Reveal as="div" delay={20}>
        <Footer />
      </Reveal>
    </>
  )
}
