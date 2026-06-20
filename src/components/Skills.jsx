import React from 'react'
import { skillGroups } from '../data.js'
import './Skills.css'

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <h2>Skills</h2>

      <div className="skills__grid">
        {skillGroups.map((group) => (
          <div className="skills__card" key={group.title}>
            <h3>{group.title}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
