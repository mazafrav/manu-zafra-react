import { formatPeriod } from '../data/experience'
import type { Company } from '../data/experience'

interface ExperienceItemProps {
  company: Company
}

function ExperienceItem({ company }: ExperienceItemProps) {
  return (
    <article>
      <h3>{company.url ? <a href={company.url}>{company.name}</a> : company.name}</h3>
      <p>{company.location}</p>
      {company.overview.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
      {company.positions.map((position) => (
        <div key={position.title} className="experience-position">
          <h4>{position.title}</h4>
          <p>{formatPeriod(position)}</p>
          {position.responsibilities.length > 0 && (
            <ul>
              {position.responsibilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </article>
  )
}

export default ExperienceItem
