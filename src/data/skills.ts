export type Category = 'language' | 'software' | 'soft' | 'design' | 'other'

export interface Skill {
  name: string
  summary: string
  category: Category
}

export const skills: Skill[] = [
  {
    name: 'C++',
    summary: 'Strong knowledge, applied to safety-critical railway software and to video games in Unreal Engine.',
    category: 'language',
  },
  {
    name: 'Python',
    summary: 'Advanced level, used to build automation tools and robotic controllers.',
    category: 'language',
  },
  {
    name: 'Java',
    summary: 'Used to develop railway control center applications, from the server side to the user interface.',
    category: 'language',
  },
  {
    name: 'C#',
    summary: 'Intermediate level, used to develop video games in Unity.',
    category: 'language',
  },
  {
    name: 'Unreal Engine 5',
    summary: 'Proficient, used to develop video games and build interactive environments.',
    category: 'software',
  },
  {
    name: 'Unity',
    summary: 'Used to develop 2D video games and to take part in game jams.',
    category: 'software',
  },
  {
    name: 'Git',
    summary: 'Git-based workflows, mostly on GitHub.',
    category: 'software',
  },
  {
    name: 'Perforce',
    summary: 'Version control on the development of Aard & Wyzz.',
    category: 'software',
  },
  {
    name: 'Linux',
    summary: 'Daily use through my studies and career; able to write bash/shell scripts.',
    category: 'software',
  },
  {
    name: 'Unreal Gameplay Ability System',
    summary: 'Basic knowledge, currently deepening it with a specialized course.',
    category: 'software',
  },
  {
    name: 'Illustrator',
    summary: 'Mainly used for documentation, schematics and general design work.',
    category: 'design',
  },
  {
    name: 'Scrum',
    summary: 'Extensive experience working with agile methodologies throughout my career.',
    category: 'soft',
  },
]
