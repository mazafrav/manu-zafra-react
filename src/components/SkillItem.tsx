import type { Skill } from '../data/skills'

interface SkillItemProps {
  skill: Skill
}

function SkillItem({ skill }: SkillItemProps) {
  return (
    <li>
      <strong>{skill.name}</strong>: {skill.summary}
    </li>
  )
}

export default SkillItem
