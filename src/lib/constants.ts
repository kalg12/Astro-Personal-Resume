import type { Site, Page } from './types'

export const loaderAnimation = [
  '.loader',
  { opacity: [1, 0], pointerEvents: 'none' },
  { easing: 'ease-out' },
]

export const LINKS = {
  github: 'https://github.com/kalg12',
  linkedin: 'https://www.linkedin.com/in/kalg12/',
  mail: 'mailto:luciano19940@hotmail.com',
  instagram: 'https://www.instagram.com/kalg12/',
}

// Global
export const SITE: Site = {
  TITLE: 'Kevin Luciano - Portafolio',
  DESCRIPTION:
    'Bienvenido al portafolio de Kevin Luciano, desarrollador full stack apasionado por la tecnología.',
  AUTHOR: 'Kevin Luciano',
}

// Work Page
export const WORK: Page = {
  TITLE: 'Trabajo',
  DESCRIPTION: 'Lugares donde he trabajado.',
}

// Blog Page
export const BLOG: Page = {
  TITLE: 'Blog',
  DESCRIPTION: 'Escritos sobre temas que me apasionan.',
}

// Projects Page
export const PROJECTS: Page = {
  TITLE: 'Proyectos',
  DESCRIPTION: 'Proyectos recientes en los que he trabajado.',
}

// Search Page
export const SEARCH: Page = {
  TITLE: 'Buscar',
  DESCRIPTION: 'Buscar todas las publicaciones y proyectos por palabra clave.',
}

// Study Page
export const STUDIES = [
  {
    title: 'Ingeniería en Sistemas Computacionales',
    institution: 'Universidad Central',
    link: 'https://www.ucentral.edu.co/',
    date: '2019 - 2027',
  },
  {
    title: '...',
    institution: 'Platzi',
    link: 'https://platzi.com/',
    date: '2018 - 2022',
  },
  {
    title: '...',
    institution: 'Udemy',
    link: 'https://www.udemy.com/',
    date: '2018 - 2022',
  },
  {
    title: '...',
    institution: 'Youtube',
    link: 'https://www.youtube.com/@midulive',
    date: '2018 - 2022',
  },
  {
    title: 'Artista Tatuador',
    institution: 'Tattoo Academy',
    link: 'https://www.instagram.com/tattoodcacademy/',
    date: '2024 - 2025',
  },
]

export const EXPERIENCE = [
  {
    company: 'UCAMP',
    position: 'Coach Instructor - Desarrollo Web JavaScript',
    start: '2021',
    end: 'Junio 2025',
    tasks: [
      'Impartí cursos de desarrollo web, desde HTML y CSS hasta JavaScript avanzado. Asesoré a estudiantes y fomenté habilidades prácticas en proyectos modernos.',
    ],
  },
  {
    company: 'Onikom',
    position: 'Consultor TI y Soporte',
    start: '2022',
    end: 'Jun 2025',
    tasks: [
      'Administración de la plataforma Moodle, soporte técnico y restauración de servicios. Gestión de VPS en GCP y AWS para asegurar la operatividad.',
    ],
  },
  {
    company: 'Acarentals',
    position: 'Desarrollador Web y Administrador de Infraestructura IT',
    start: '2015',
    end: 'Oct 2022',
    tasks: [
      'Desarrollo y mantenimiento del sitio web, creación de APIs internas y administración de servidores. Soporte técnico y gestión de respaldos y redes sociales.',
    ],
  },
]
