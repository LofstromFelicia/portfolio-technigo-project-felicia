import { Tag } from "./Tag"

export const ProjectCard = ({ project }) => {
  return (
    <article className="project-card">
      <div className="project-image-container">
        {project.image ? (
          <img src={project.image} alt={project.name} className="project-image" />
        ) : (
          <div className="project-image-placeholder">Kodprojekt</div>
        )}
      </div>

      <div className="project-info">
        <h3>{project.name}</h3>

        {/* Inner Map for all tags */}
        <div className="tags-container">
          {project.tags.map((tag, index) => (
            <Tag key={index} tagName={tag} />
          ))}
        </div>

        <div className="project-links">
          <a href={project.cloudflare} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            See Live
          </a>
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
            GitHub
          </a>
        </div>
      </div>
    </article >
  )
}