export type Category = 'videogame' | 'gamejam' | 'post' | 'personal'

export interface Project {
  name: string
  role: string
  timeline: string
  summary: string
  url: string
  categories: Category[]
}

export const projects: Project[] = [
  {
    name: 'Aard & Wyzz',
    role: 'Game Designer',
    timeline: '2023 - Present',
    summary:
      'Local co-op adventure game where you play as two mages trying to regain their power in a humorous fantasy setting. Made at Curious Imp by a team of 17.',
    url: '#',
    categories: ['videogame'],
  },
  {
    name: 'Pathogenesis',
    role: 'Game Designer, Artist, Programmer',
    timeline: '2023 - 2025',
    summary:
      'A 2D platform puzzle game where you control a vulnerable virus striving to survive in a microscopic world.',
    url: '#',
    categories: ['videogame'],
  },
  {
    name: 'Our Home (WIP)',
    role: 'Developer',
    timeline: '2024',
    summary:
      'A personal project exploring interactive narrative. Through the game I try to convey the complex emotions of grief in an immersive, emotional journey.',
    url: '#',
    categories: ['videogame', 'personal'],
  },
  {
    name: 'DM Vault',
    role: 'Dungeon Master',
    timeline: 'Ongoing',
    summary: "Notes and encounters designed for the TTRPG campaigns I've run as a DM.",
    url: '#',
    categories: ['personal'],
  },
  {
    name: 'Matryoshka',
    role: 'Game Designer, Programmer',
    timeline: 'GMTK Jam 2024',
    summary:
      'A charming puzzle game where you go through the stages of life as a matryoshka doll. The jam theme was "Built to Scale", so we picked the ultimate built-to-scale toy.',
    url: 'https://finitto.itch.io/matryoshka',
    categories: ['gamejam', 'videogame'],
  },
  {
    name: 'FPS Level Design Study',
    role: 'Developer',
    timeline: '2024',
    summary:
      'Level blocking for a first-person horror game, exploring how to build tension and suspense through level design with limited resources.',
    url: '#',
    categories: ['personal', 'post'],
  },
  {
    name: 'Computer Vision Drone Automation (Scientific Paper)',
    role: 'Researcher',
    timeline: '2018',
    summary:
      'Research project in which I implemented an autonomous drone flight controller based on computer vision, plus its API and simulation environment.',
    url: 'https://drive.google.com/file/d/1NtAMG2wwmqto-QpQAHawyVhspLU-gyWr/view?usp=sharing',
    categories: ['personal'],
  },
  {
    name: 'Puzzle Design Study',
    role: 'Puzzle Designer',
    timeline: '2024',
    summary:
      "An analysis of some of the most significant puzzles I've designed and implemented, walking through the process and the design choices behind them.",
    url: '#',
    categories: ['personal', 'post'],
  },
  {
    name: "Joselito's Dreams",
    role: 'Developer',
    timeline: 'Global Game Jam 2024',
    summary:
      "A game made for the Global Game Jam 2024. We're not sure what our purpose was, but we had tons of fun making it.",
    url: 'https://acidgecko.itch.io/joselitos-dream',
    categories: ['gamejam', 'videogame'],
  },
]

export type CategoryFilter = Category | 'all'

export function filterProjects(list: Project[], category: CategoryFilter): Project[] {
  if (category === 'all') return list;
  return list.filter((project) => project.categories.includes(category))

}
