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
      company: 'UCAMP - Tiempo parcial',
      position: 'Coach Instructor - Desarrollo Web JavaScript',
      start: '2021',
      end: 'Actualmente',
      tasks: [
        'Imparto cursos de Desarrollo Web, desde HTML y CSS hasta JavaScript avanzado. Asesoro a estudiantes y fomento habilidades prácticas en proyectos modernos.',
      ],
    },
    {
      company: 'Onikom',
      position: 'Consultor TI y Soporte',
      start: '2022',
      end: 'Septiembre 2025',
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
      company: 'UCAMP- Part Time',
      position: 'Coach Instructor - JavaScript Web Development',
      start: '2021',
      end: 'Present',
      tasks: [
        'I teach Web Development courses, from HTML and CSS to advanced JavaScript. I mentor students and foster practical skills in modern projects.',
      ],
    },
    {
      company: 'Onikom',
      position: 'IT Consultant and Support',
      start: '2022',
      end: 'September 2025',
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
      es: 'Mincoli',
      en: 'Mincoli',
    },
    description: {
      es: 'Tienda en línea desarrollada con Laravel, orientada a la venta de productos físicos, con administración de inventario, pedidos y usuarios desde un panel centralizado.',
      en: 'Online store developed with Laravel, focused on selling physical products, with inventory, orders, and user management from a centralized panel.',
    },
    image: '/projects-images/mincoli.png',
    tags: ['Laravel', 'PHP', 'Blade', 'MySQL', 'Tailwind CSS'],
    liveUrl: 'http://mincoli.com/',
  },
  {
    name: {
      es: 'Sistema de Desempeño Académico',
      en: 'Academic Performance System',
    },
    description: {
      es: 'Sistema que ofrece a los docentes llevar un control detallado del desempeño académico de sus estudiantes, facilitando la gestión de calificaciones y reportes.',
      en: "System that provides teachers with a detailed control of their students' academic performance, facilitating the management of grades and reports.",
    },
    image: '/projects-images/DesempeñoAcademicoCetmar18.png',
    tags: ['Next.js', 'Node.js', 'TypeScript', 'MySQL', 'Prisma'],
    liveUrl: 'https://enlace_a_tu_proyecto.com',
  },
  {
    name: {
      es: 'Comerza - POS',
      en: 'Comerza - POS',
    },
    description: {
      es: 'Sistema de punto de venta (POS) desarrollado para facilitar las operaciones comerciales diarias de restaurantes y tiendas. Desarrollo Full Stack.',
      en: 'Point of Sale (POS) system developed to facilitate the daily business operations of restaurants and stores.',
    },
    image: '/projects-images/ComerzaPOS.png',
    tags: [
      'NestJS',
      'Shadcn UI',
      'RabbitMQ',
      'Docker',
      'Swagger',
      'Next.js',
      'TypeScript',
      'MySQL',
    ],
    liveUrl: 'https://pos-frontend-pearl.vercel.app/',
  },
  {
    name: {
      es: 'Colegio CVT',
      en: 'Colegio CVT',
    },
    description: {
      es: 'Landing Page intitucional en línea. Desarrollada con Laravel y Tailwind CSS. En Backend se implementó un CMS personalizado para la gestión escolar.',
      en: 'Online institutional landing page. Developed with Laravel and Tailwind CSS. A custom CMS was implemented in the backend for school management.',
    },
    image: '/projects-images/ColegioCVT.png',
    tags: ['Laravel', 'Blade', 'Tawilwind CSS', 'MySQL'],
    liveUrl: 'https://colegiocvt.com.mx/',
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
