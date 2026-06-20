import React, { useState } from 'react'

// Notice this component takes a `project` object as a "prop" —
// a value passed down from the parent (Projects.jsx). This is how
// data flows in React: parent -> child via props.
export default function ProjectCard({ project }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="project-card">
      <h3>{project.title}</h3>
      <p className="project-card__blurb">{project.blurb}</p>

      <div className="project-card__tags">
        {project.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>

      <a href={project.link} target="_blank" rel="noreferrer" className="project-card__btn">
        View on GitHub
      </a>

      <button
        className="project-card__toggle"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? 'Hide details ▲' : 'More details ▼'}
      </button>

      {/* Only render the details list when `expanded` is true.
          `expanded && (...)` is a common React shortcut for
          "show this only if the condition is true". */}
      {expanded && (
        <ul className="project-card__details">
          {project.details.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      )}
    </div>
  )
}
