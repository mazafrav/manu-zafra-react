import { filterProjects, projects } from '../data/projects'
import type { CategoryFilter } from '../data/projects'
import ProjectCard from './ProjectCard'

// Temporary: a fixed value to test the filter. Phase 5 replaces it with state driven by buttons.
const activeCategory: CategoryFilter = 'gamejam'

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      {filterProjects(projects, activeCategory).map((project) => (
        <ProjectCard key={project.name} project={project}/>
      ))}
    </section>
  )
}

export default Projects
