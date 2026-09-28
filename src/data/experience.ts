export interface Position {
  title: string
  start: string
  // No `end` means it's the current position.
  end?: string
  responsibilities: string[]
}

export interface Company {
  name: string
  location: string
  url?: string
  // One string per paragraph: no HTML inside the data.
  overview: string[]
  positions: Position[]
}

export const experience: Company[] = [
  {
    name: 'Curious Imp',
    location: 'Madrid, Spain',
    overview: [
      'The studio is currently working on releasing the game Aard & Wyzz, with its demo available on Steam.',
      'Generalist designer with a special emphasis on Technical Design, Camera-Control-Character, and Level Design. As Lead Designer, I coordinate the design team and communicate with other departments.',
    ],
    positions: [
      {
        title: 'Lead Designer',
        start: 'Sep 2024',
        responsibilities: [
          'Design and prototype videogame mechanics and features.',
          'Project documentation: GDD, TDD and LDD. Definition of briefings for other departments.',
          'Work with the production team to ensure a correct roadmap definition from a design standpoint.',
          'Playtesting protocol definition and analysis.',
          'Design team lead and coordination with other departments.',
        ],
      },
    ],
  },
  {
    name: 'LogiRail',
    location: 'Madrid, Spain',
    url: 'https://logirail.com/',
    overview: [
      'LogiRail is a technology and services company within the Renfe Group, focused on providing digital solutions and operational support for the railway sector. I work at Renfe Viajeros, supporting public service operation applications.',
    ],
    positions: [
      {
        title: 'Senior Software Analyst',
        start: 'Jul 2025',
        responsibilities: [
          'Analysis and documentation of legacy systems.',
          'Design of modernization and system migration plans.',
          'Maintenance and development of applications.',
        ],
      },
    ],
  },
  {
    name: 'Expleo',
    location: 'Madrid, Spain · Berlin, Germany',
    url: 'https://expleo.com/global/en/',
    overview: [
      'Expleo is a global engineering, technology and consulting service provider. I worked as a software engineer on the design and development of critical software for commercial and industrial railway systems.',
      'My tasks included implementing systems in C++, Java and Python, requirements analysis, project documentation, communication with other departments, and defining the testing protocol. I worked on three projects, contributing at different stages of their life cycles and collaborating with teams from different countries.',
    ],
    positions: [
      {
        title: 'Software Engineer - RBC Developer',
        start: 'Apr 2021',
        end: 'Jul 2023',
        responsibilities: [
          'Requirements analysis and feature implementation in C++.',
          'Technical project documentation, including UML and security reports.',
          'SIL 2 (Safety Integrity Level) compliance.',
        ],
      },
      {
        title: 'Software Engineer - Tools',
        // The old site had start Apr 2021 / end May 2020 (impossible). Estimated from the
        // neighbouring positions: confirm the real dates.
        start: 'Jun 2020',
        end: 'Mar 2021',
        responsibilities: [
          'Tool development in Python for test automation of SIL 2 railway applications.',
          'Coordination between several departments for software requirements analysis.',
          'Upgrade and maintenance of tools for integration with new features.',
        ],
      },
      {
        title: 'Software Engineer - Control Centers',
        start: 'Jan 2018',
        end: 'Jun 2020',
        responsibilities: [
          'Requirements analysis and definition.',
          'Full-stack development in Java and Python.',
          'Test protocol definition and compliance.',
          'Project documentation, including UML, technical documentation, user manual and security reports.',
          'SIL 3 (Safety Integrity Level) compliance.',
        ],
      },
    ],
  },
  {
    name: 'JdeRobot - URJC Robotics Group',
    location: 'Madrid, Spain',
    overview: [
      "JdeRobot is an open toolkit for developing robotics applications, made by the URJC's Robotics Group.",
      'I worked on JdeRobot as a collaborator while developing my thesis, creating new features and maintaining and upgrading different aspects of the project.',
    ],
    positions: [
      {
        title: 'Collaborator',
        start: '2015',
        end: '2017',
        responsibilities: [],
      },
    ],
  },
]

export function formatPeriod(position: Position): string {
  const endText = position.end ?? 'Present'
  return `${position.start} - ${endText}`
}
