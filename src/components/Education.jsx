import React from 'react'
import { education } from '../data.js'
import './Education.css'

export default function Education() {
  return (
    <section className="education" id="education">
      <h2>My Education</h2>

      {/* .map() turns each item in the array into a piece of JSX.
          The `key` prop just helps React tell entries apart —
          always give list items a unique key. */}
      {education.map((edu) => (
        <div className="education__card" key={edu.school}>
          <h3>{edu.degree}</h3>
          <p>{edu.school}</p>
          <p className="education__meta">{edu.location} · {edu.dates}</p>
        </div>
      ))}
    </section>
  )
}
