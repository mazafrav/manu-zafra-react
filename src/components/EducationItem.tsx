import type { Degree } from '../data/education'

interface EducationItemProps {
  degree: Degree
}

function EducationItem({ degree }: EducationItemProps) {
  return (
    <article>
      <h3>{degree.name}</h3>
      <p>
        {degree.institution} · {degree.year}
      </p>
      {degree.publications && (
        <ul>
          { degree.publications.map((publication) => (
            <li key={publication.title}>
              <a href={publication.url} target="_blank" rel="noreferrer">{publication.title}</a>
            </li>
          ))}
        </ul>
      )}
    </article>
  )
}

export default EducationItem
