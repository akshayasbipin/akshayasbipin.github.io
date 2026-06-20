import React from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Education from './components/Education.jsx'
import Experience from './components/Experience.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Links from './components/Links.jsx'
import DelicateAsciiDots from './components/DelicateAsciiDots.jsx'

// App is the "root" component — it just lays out the page by
// stacking smaller components on top of each other. This is the
// core idea of React: build small pieces, then assemble them here.
export default function App() {
  return (
    <>
      {/* Rendered first, but `position: fixed` + `z-index: -1` in its
          own CSS means it doesn't matter where it sits in this list —
          it will always render as a backdrop, never push anything down. */}
      <DelicateAsciiDots backgroundColor="#0d0d0d" textColor="120, 120, 120" />

      <Navbar />
      <Hero />
      <Education />
      <Experience />
      <Skills />
      <Projects />
      <Links />
    </>
  )
}
