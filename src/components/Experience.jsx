import React from 'react'
import { experience } from '../data.js'
import './Experience.css'

export default function Experience() {
  return (
    <section className="experience" id="experience">
      <h2>My Experience</h2>

      <div className="experience__list">
        {experience.map((job) => (
          <div className="experience__card" key={job.role}>
            <h3>{job.role}</h3>
            <p className="experience__place">{job.place}</p>
            {job.description && <p>{job.description}</p>}

            <div className="experience__tags">
              {job.skills.map((skill) => (
                <span className="tag" key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
