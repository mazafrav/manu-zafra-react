export interface Publication {
  title: string
  url: string
}

export interface Degree {
  name: string
  institution: string
  // Graduation year. The old site only had the year, so it stays a plain string.
  year: string
  // Not every degree has a related publication.
  publications?: Publication[]
}

// Most recent first.
export const education: Degree[] = [
  {
    name: "Master's Degree in Videogame Design",
    institution: 'Universidad Complutense de Madrid',
    year: '2024',
    publications: [
      {
        title: 'Aard & Wyzz: The Rise of Minions',
        url: 'https://store.steampowered.com/app/2984220/Aard_and_Wyzz_The_rise_of_minions/',
      },
    ],
  },
  {
    name: 'Telecommunications Engineering Degree',
    institution: 'Universidad Rey Juan Carlos',
    // The old site listed 2017 for both URJC degrees: confirm the real years.
    year: '2017',
    publications: [
      {
        title: 'Fine 3D Path Following of a Quadcopter',
        url: 'https://www.researchgate.net/publication/321019491_Fine_3D_Path_Following_of_a_Quadcopter',
      },
    ],
  },
  {
    name: 'Computer Science Degree',
    institution: 'Universidad Rey Juan Carlos',
    year: '2017',
  },
]
