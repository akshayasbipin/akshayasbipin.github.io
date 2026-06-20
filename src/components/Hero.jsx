import React from 'react'
import { socials } from '../data.js'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__text">
        <p className="hero__hi">Hi, I'm</p>
        <h1 className="hero__name">Akshaya</h1>

        <p className="hero__bio">
          I like coding and exploring new technologies, especially in{' '}
          <strong>AI</strong> and <strong>ML</strong>. Outside of tech, I enjoy
          yoga, reading, drawing, and animating. Creativity and resilience keep
          me going, and I'm always excited to bring that energy into the
          dynamic world of technology.
        </p>

        <blockquote className="hero__quote">
          "Growth is growth, no matter how small."
          <cite>— Groot, Marvel Comics</cite>
        </blockquote>

        <div className="hero__socials">
          <p>Let's connect —</p>
          <div className="hero__social-links">
            {socials
              .filter((s) => s.name !== 'LeetCode')
              .map((s) => (
                <a key={s.name} href={s.url} target="_blank" rel="noreferrer">
                  {s.name}
                </a>
              ))}
          </div>
        </div>
      </div>

      <div className="hero__photo">
        {/* Swap this src for your own photo — put it in /public/images */}
        <img src="/images/image.jpg" alt="Akshaya" />
      </div>
    </section>
  )
}
