import React, { useState } from 'react'
import './Navbar.css'

// This is a "functional component" — just a JS function that
// returns some JSX (HTML-looking code). React calls this function
// whenever it needs to draw the navbar on screen.
export default function Navbar() {
  // useState gives us a piece of memory that React watches.
  // `isOpen` is the current value, `setIsOpen` is the only way
  // to change it. When you call setIsOpen, React re-runs this
  // component and updates the screen automatically.
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { href: '#home', label: 'Home' },
    { href: '#education', label: 'Education' },
    { href: '#experience', label: 'Experience' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#links', label: 'Links' },
  ]

  return (
    <header className="nav">
      <a href="#home" className="nav__logo">
        Akshaya <span>S Bipin</span>
      </a>

      {/* The `nav__links--open` class only gets added when isOpen is true.
          This is how React handles conditional styling. */}
      <nav className={`nav__links ${isOpen ? 'nav__links--open' : ''}`}>
        {links.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setIsOpen(false)}>
            {link.label}
          </a>
        ))}
      </nav>

      <button
        className="nav__toggle"
        aria-label="Toggle menu"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? '✕' : '☰'}
      </button>
    </header>
  )
}
