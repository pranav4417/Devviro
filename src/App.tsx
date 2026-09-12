import { useEffect, useState } from 'react'
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Navigation from './components/Navigation'
import PageIntro from './components/PageIntro'
import Portfolio from './components/Portfolio'
import Process from './components/Process'
import Projects from './components/Projects'
import Services from './components/Services'

type Page = 'home' | 'services' | 'work' | 'process' | 'projects' | 'about' | 'contact'

const pages: Page[] = ['home', 'services', 'work', 'process', 'projects', 'about', 'contact']

const pageTitles: Record<Page, string> = {
  home: 'Devviro — Digital, done differently',
  services: 'Services — Devviro',
  work: 'Work — Devviro',
  process: 'Process — Devviro',
  projects: 'Projects — Devviro',
  about: 'About — Devviro',
  contact: 'Contact — Devviro',
}

function getPageFromHash(): Page {
  const hashPage = window.location.hash.replace(/^#/, '').split('/')[0]

  return pages.includes(hashPage as Page) ? (hashPage as Page) : 'home'
}

function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <Projects />
      <Process />
      <Contact />
    </>
  )
}

function App() {
  const [activePage, setActivePage] = useState<Page>(getPageFromHash)

  useEffect(() => {
    const handleHashChange = () => {
      setActivePage(getPageFromHash())
    }

    window.addEventListener('hashchange', handleHashChange)

    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  useEffect(() => {
    document.title = pageTitles[activePage]

    if (activePage !== 'home') {
      window.scrollTo({ top: 0, behavior: 'auto' })
    }
  }, [activePage])

  const renderPage = () => {
    switch (activePage) {
      case 'services':
        return (
          <>
            <PageIntro
              eyebrow="02 / Our services"
              title="Digital capabilities with real-world impact."
              description="Strategy, design, and engineering brought together to move your product forward."
            />
            <Services />
          </>
        )
      case 'work':
        return (
          <>
            <PageIntro
              eyebrow="03 / Selected work"
              title="Work that makes an impression."
              description="A selection of products, platforms, and brand experiences we're proud to put into the world."
            />
            <Portfolio />
          </>
        )
      case 'process':
        return (
          <>
            <PageIntro
              eyebrow="04 / Our process"
              title="A clear path from idea to launch."
              description="A collaborative process designed to keep momentum high and decisions easy to understand."
            />
            <Process />
          </>
        )
      case 'projects':
        return <Projects />
      case 'about':
        return <About />
      case 'contact':
        return <Contact />
      case 'home':
      default:
        return <HomePage />
    }
  }

  return (
    <div className="app">
      <Navigation activePage={activePage} />
      <main>{renderPage()}</main>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>Devviro</h3>
            <p>Digital, done differently.</p>
          </div>
          <div className="footer-links">
            <a href="#services">Services</a>
            <a href="#work">Work</a>
            <a href="#projects">Projects</a>
            <a href="#about">About</a>
            <a href="#process">Process</a>
            <a href="#contact">Contact</a>
          </div>
          <p className="footer-credit">© 2026 Devviro. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
