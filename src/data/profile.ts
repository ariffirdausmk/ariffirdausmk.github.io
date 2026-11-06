// All site content lives here. Edit this file to update the portfolio —
// components read from it and never hard-code copy.

export type Link = { label: string; href: string }

export type Experience = {
  role: string
  org: string
  period: string
  location?: string
  summary: string
  highlights: string[]
  tech?: string[]
}

export type Project = {
  title: string
  year: string
  summary: string
  tech: string[]
  links?: Link[]
}

export type Education = {
  school: string
  credential: string
  period: string
  grade: string
  logo: string
  details?: string
}

export type Achievement = { title: string; year: string; summary: string }

export const profile = {
  name: 'Arif Firdaus',
  fullName: 'Muhammad Arif Firdaus bin Mohd Khaidzir',
  role: 'Software Engineer',
  location: 'Malaysia',
  tagline:
    'I build reliable software with a soft spot for databases, backend systems and data at scale.',
  about: [
    'I’m a Software Engineer at PETRONAS Digital and a Computer Science graduate of The Pennsylvania State University (B.S., 2023).',
    'My interests sit where software meets data: designing sound database schemas, writing systems-level code in C and C++, and processing large datasets with PySpark. I pick up new environments quickly and care about shipping work that is well documented and easy to maintain.',
  ],
  // Optional contact links: leave a field empty to hide it.
  email: '',
  links: {
    github: 'https://github.com/ariffirdausmk',
    linkedin: '',
    resume: '',
  },
}

export const experience: Experience[] = [
  {
    role: 'Software Engineer',
    org: 'PETRONAS Digital',
    period: '2023 — Present',
    location: 'Kuala Lumpur, Malaysia',
    summary: 'Building software for PETRONAS’s digital and data initiatives.',
    // TODO: add 2–4 concrete, outcome-focused highlights (what you built, scale, impact).
    highlights: [],
    tech: [],
  },
]

export const projects: Project[] = [
  {
    title: 'Memory Allocator in C',
    year: '2022',
    summary:
      'Reimplemented the C standard library allocator — malloc, free and realloc — on top of a linked-list free list, reaching 86% memory utilisation, with full documentation and defensive error handling.',
    tech: ['C', 'Systems programming', 'Linked lists'],
  },
  {
    title: 'Hospital Database Management System',
    year: '2022',
    summary:
      'A web app backed by a normalised multi-table MySQL schema with proper keys and indexes. Staff can insert, update, query and delete patient and doctor records directly from the site.',
    tech: ['PHP', 'MySQL', 'SQL', 'HTML/CSS'],
  },
  {
    title: 'Indoor Navigation — HackPSU',
    year: '2022',
    summary:
      'Built in a 24-hour hackathon: a Python mapping tool that gives step-by-step directions inside a Penn State building. I owned the user interface, including the main menu and navigation options.',
    tech: ['Python', 'Hackathon', 'Team of 4'],
  },
  {
    title: 'Insurance Customer Database',
    year: '2019 — 2021',
    summary:
      'Group project to design and manage a customer database for an insurance company, earning the highest distinction grade. A related team project produced a database design and risk-management calculations for a company.',
    tech: ['Java', 'MySQL', 'Database design'],
  },
]

export const skills: { group: string; items: string[] }[] = [
  { group: 'Languages', items: ['C', 'C++', 'Python', 'Java', 'PHP', 'SQL'] },
  { group: 'Data', items: ['MySQL', 'PySpark', 'Schema design', 'Indexing & query tuning'] },
  {
    group: 'Foundations',
    items: ['Data structures & algorithms', 'Operating systems', 'Computer organisation', 'OOP'],
  },
]

export const education: Education[] = [
  {
    school: 'The Pennsylvania State University',
    credential: 'B.S. Computer Science (Engineering)',
    period: 'Aug 2019 — May 2023',
    grade: 'CGPA 3.71',
    logo: '/images/pennstate.png',
    details:
      'Coursework: Object-oriented Programming, Computer Organization & Design, Operating Systems, Data Structures & Algorithms, Database Management Systems, Programming Models for Big Data.',
  },
  {
    school: 'Taylor’s University',
    credential: 'American Degree Program',
    period: 'Aug 2018 — May 2019',
    grade: 'CGPA 3.86',
    logo: '/images/taylors.jpg',
  },
  {
    school: 'SM Sains Sultan Mahmud',
    credential: 'Sijil Pelajaran Malaysia (SPM)',
    period: '2013 — 2017',
    grade: '8A+ 1A',
    logo: '/images/sesma.png',
  },
]

export const achievements: Achievement[] = [
  {
    title: 'Research Assistant, Universiti Malaysia Terengganu',
    year: '2016 — 2017',
    summary:
      'Collected data for a herbal wound-healing gel that won a distinction award at an innovation competition in Japan.',
  },
  {
    title: 'National Science Challenge — Finalist',
    year: '2016',
    summary:
      'Represented Terengganu and reached the four-team final at UKM after a week of Biology, Chemistry and Physics challenges.',
  },
]
