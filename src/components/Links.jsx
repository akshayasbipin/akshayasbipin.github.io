import React from 'react'
import { socials } from '../data.js'
import './Links.css'

export default function Links() {
  return (
    <footer className="links" id="links">
      <p className="links__note">Find me elsewhere on the internet —</p>
      <div className="links__row">
        {socials.map((s) => (
          <a key={s.name} href={s.url} target="_blank" rel="noreferrer">
            {s.name}
          </a>
        ))}
      </div>
      <p className="links__copy">I am Groot — {new Date().getFullYear()}</p>
    </footer>
  )
}
