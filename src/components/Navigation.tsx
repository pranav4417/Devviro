import { useEffect, useState } from 'react'
import ThemeToggle from './ThemeToggle'
import '../styles/Navigation.css'

interface NavigationProps {
  activePage: string
}

const navigationItems = [
  { id: 'home', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'work', label: 'Work' },
  { id: 'process', label: 'Process' },
  { id: 'projects', label: 'Projects' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
]

export default function Navigation({ activePage }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a className="logo" href="#home" aria-label="Devviro home">
          <span className="logo-mark">◆</span>
          <span>devviro</span>
        </a>
        <ul className={`nav-links ${isOpen ? 'open' : ''}`} id="primary-navigation">
          {navigationItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={activePage === item.id ? 'active' : ''}
                aria-current={activePage === item.id ? 'page' : undefined}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <ThemeToggle />
        <button
          className="menu-toggle"
          aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  )
}
