import React from 'react'
import { projects } from '../data.js'
import ProjectCard from './ProjectCard.jsx'
import './Projects.css'

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>
      <p className="projects__sub">A few things I've built (more coming soon!)</p>

      <div className="projects__grid">
        {/* For each project object in the array, render one ProjectCard.
            When you add a new project to src/data.js, a new card
            shows up here automatically — no extra code needed. */}
        {projects.map((project) => (
          <ProjectCard project={project} key={project.title} />
        ))}
      </div>
    </section>
  )
}
