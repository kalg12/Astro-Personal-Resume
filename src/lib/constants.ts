import type { Project } from './types'

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

// Study Page
export const STUDIES = {
  es: [
    {
      title: 'Ingeniería en Sistemas de la Información y la Comunicación',
      institution: 'UNID Campus Acapulco',
      link: 'https://www.unid.talisis.com/campus/acapulco',
      date: '2013 - 2016',
    },
  ],
  en: [
    {
      title: 'Bachelor in Information Systems Engineering',
      institution: 'UNID Campus Acapulco',
      link: 'https://www.unid.talisis.com/campus/acapulco',
      date: '2013 - 2016',
    },
  ],
}

export const EXPERIENCE = {
  es: [
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
  ],
  en: [
    {
      company: 'UCAMP',
      position: 'Coach Instructor - JavaScript Web Development',
      start: '2021',
      end: 'June 2025',
      tasks: [
        'I taught web development courses, from HTML and CSS to advanced JavaScript. I advised students and fostered practical skills in modern projects.',
      ],
    },
    {
      company: 'Onikom',
      position: 'IT Consultant and Support',
      start: '2022',
      end: 'June 2025',
      tasks: [
        'Moodle platform administration, technical support, and service restoration. Management of VPS on GCP and AWS to ensure operability.',
      ],
    },
    {
      company: 'Acarentals',
      position: 'Web Developer and IT Infrastructure Administrator',
      start: '2015',
      end: 'Oct 2022',
      tasks: [
        'Development and maintenance of the website, creation of internal APIs, and server administration. Technical support and management of backups and social networks.',
      ],
    },
  ],
}

export const PROJECTS_DATA: Project[] = [
  {
    name: {
      es: 'Nombre del Proyecto 1',
      en: 'Project Name 1',
    },
    description: {
      es: 'Esta es una breve descripción de mi proyecto. Destaca lo que hace y por qué es interesante para un reclutador.',
      en: 'This is a short description of my project. It highlights what it does and why it is interesting for a recruiter.',
    },
    image: '/me_cv.png',
    tags: ['Astro', 'TypeScript', 'Tailwind CSS', 'React'],
    githubUrl: 'https://github.com/tu_usuario/tu_repo',
    liveUrl: 'https://enlace_a_tu_proyecto.com',
  },
  {
    name: {
      es: 'Nombre del Proyecto 2',
      en: 'Project Name 2',
    },
    description: {
      es: 'Este proyecto soluciona un problema real. Aquí explico cómo y qué tecnologías usé.',
      en: 'This project solves a real problem. Here I explain how and what technologies I used.',
    },
    image: '/me_cv.png',
    tags: ['Next.js', 'Node.js', 'PostgreSQL', 'Prisma'],
    githubUrl: 'https://github.com/tu_usuario/tu_repo',
    liveUrl: 'https://enlace_a_tu_proyecto.com',
  },
  {
    name: {
      es: 'Nombre del Proyecto 3',
      en: 'Project Name 3',
    },
    description: {
      es: 'Aquí demuestro mis habilidades en el desarrollo de APIs. Este proyecto es un backend robusto y escalable.',
      en: 'Here I demonstrate my skills in API development. This project is a robust and scalable backend.',
    },
    image: '/me_cv.png',
    tags: ['NestJS', 'TypeScript', 'MongoDB', 'GraphQL'],
    githubUrl: 'https://github.com/tu_usuario/tu_repo',
    liveUrl: 'https://enlace_a_tu_proyecto.com',
  },
  {
    name: {
      es: 'Nombre del Proyecto 4',
      en: 'Project Name 4',
    },
    description: {
      es: 'Un proyecto personal que me apasiona. Muestra mi creatividad y mi capacidad para aprender nuevas tecnologías.',
      en: 'A personal project that I am passionate about. It shows my creativity and my ability to learn new technologies.',
    },
    image: '/me_cv.png',
    tags: ['SvelteKit', 'Firebase', 'Vite'],
    githubUrl: 'https://github.com/tu_usuario/tu_repo',
    liveUrl: 'https://enlace_a_tu_proyecto.com',
  },
  {
    name: {
      es: 'Nombre del Proyecto 5',
      en: 'Project Name 5',
    },
    description: {
      es: 'Colaboración en un proyecto de código abierto. Demuestra mi capacidad para trabajar en equipo y contribuir a la comunidad.',
      en: 'Collaboration in an open source project. It demonstrates my ability to work in a team and contribute to the community.',
    },
    image: '/me_cv.png',
    tags: ['Python', 'Django', 'React', 'Docker'],
    githubUrl: 'https://github.com/tu_usuario/tu_repo',
    liveUrl: 'https://enlace_a_tu_proyecto.com',
  },
  {
    name: {
      es: 'Nombre del Proyecto 6',
      en: 'Project Name 6',
    },
    description: {
      es: 'Un clon de una aplicación popular para practicar y demostrar mis habilidades. Aquí explico los retos que superé.',
      en: 'A clone of a popular application to practice and demonstrate my skills. Here I explain the challenges I overcame.',
    },
    image: '/me_cv.png',
    tags: ['Vue.js', 'Nuxt.js', 'Supabase'],
    githubUrl: 'https://github.com/tu_usuario/tu_repo',
    liveUrl: 'https://enlace_a_tu_proyecto.com',
  },
]
