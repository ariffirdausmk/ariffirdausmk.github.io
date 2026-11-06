import { useEffect } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About, Education, Experience, Projects, Skills } from './components/Sections'
import { Socials } from './components/Socials'
import { profile } from './data/profile'
import { useReveal, useTheme } from './hooks'

export default function App() {
  const { theme, toggle } = useTheme()
  useReveal()

  // Content renders after load, so honour a deep link like /#projects manually.
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1))
    if (!id) return
    const frame = requestAnimationFrame(() =>
      document.getElementById(id)?.scrollIntoView({ behavior: 'instant' }),
    )
    return () => cancelAnimationFrame(frame)
  }, [])

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Header theme={theme} onToggleTheme={toggle} />
      <main id="main">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
      </main>
      <footer className="footer">
        <div className="container footer__inner">
          <p className="muted small">
            © {new Date().getFullYear()} {profile.fullName}
          </p>
          <Socials />
        </div>
      </footer>
    </>
  )
}
