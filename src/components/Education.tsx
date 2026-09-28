import { education } from '../data/education'
import EducationItem from './EducationItem'

function Education() {
  return (
    <section id="education">
      <h2>Education</h2>
      {education.map((degree) => (
        <EducationItem key={degree.name} degree={degree} />
      ))}
    </section>
  )
}

export default Education
