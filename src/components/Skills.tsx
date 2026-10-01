import { skills } from '../data/skills'
import type { Category } from '../data/skills'
import SkillItem from './SkillItem'

// Display order and heading of each group. `Record<Category, …>` makes TS
// complain if a category is added to the type and not listed here.
const groupTitles: Record<Category, string> = {
  language: 'Languages',
  software: 'Tools & engines',
  design: 'Design',
  soft: 'Methodologies',
  other: 'Other',
}

const categories = Object.keys(groupTitles) as Category[]

function Skills() {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="skills-groups">
        {categories.map((category) => {
          const group = skills.filter((skill) => skill.category === category)
          // An empty group would render a heading with nothing under it.
          if (group.length === 0) return null
          return (
            <div key={category} className="skill-group">
              <h3>{groupTitles[category]}</h3>
              <ul>
                {group.map((skill) => (
                  <SkillItem key={skill.name} skill={skill} />
                ))}
              </ul>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Skills
