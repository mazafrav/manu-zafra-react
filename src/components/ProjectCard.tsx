import type { Project } from '../data/projects'

interface ProjectCardProps {
  project: Project
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card">
      <h3>{project.name}</h3>
      <p>
        {project.role} · {project.timeline}
      </p>
      <p>{project.summary}</p>
      <a href={project.url}>View project</a>
    </article>
  )
}

export default ProjectCard
