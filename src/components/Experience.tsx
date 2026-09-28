import { experience } from '../data/experience'
import ExperienceItem from './ExperienceItem'

function Experience() {
  return (
    <section id="experience">
      <h2>Experience</h2>
      {experience.map((company) => (
        <ExperienceItem key={company.name} company={company} />
      ))}
    </section>
  )
}

export default Experience
