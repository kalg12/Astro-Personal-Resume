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
        'Imparto cursos de Desarrollo Web de HTML/CSS a JavaScript avanzado con proyectos prácticos.',
        'Acompaño a estudiantes en la construcción de portafolios y resolución de bugs.',
        'Estandarizo guías y retos para acelerar su curva de aprendizaje.',
      ],
    },
    {
      company: 'Onikom',
      position: 'Consultor TI y Soporte',
      start: '2022',
      end: 'Septiembre 2025',
      tasks: [
        'Administración de Moodle: actualizaciones, plugins y respaldo de datos.',
        'Gestión de VPS en GCP y AWS (seguridad, monitoreo y recuperación).',
        'Automatización de despliegues y documentación para continuidad operativa.',
      ],
    },
    {
      company: 'Acarentals',
      position: 'Desarrollador Web y Administrador de Infraestructura IT',
      start: '2015',
      end: 'Oct 2022',
      tasks: [
        'Desarrollo y mantenimiento web con Laravel, integraciones de pago y APIs internas.',
        'Administración de servidores, respaldos y monitoreo de disponibilidad.',
        'Soporte técnico y coordinación de activos digitales (correo, dominios, RRSS).',
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
        'Teach Web Development courses from HTML/CSS to advanced JavaScript with hands-on projects.',
        'Mentor students through portfolio building and bug fixing.',
        'Standardize guides and challenges to speed up learning curves.',
      ],
    },
    {
      company: 'Onikom',
      position: 'IT Consultant and Support',
      start: '2022',
      end: 'September 2025',
      tasks: [
        'Moodle administration: upgrades, plugins, and data backups.',
        'VPS management on GCP and AWS (security, monitoring, and recovery).',
        'Deployment automation and documentation to ensure uptime.',
      ],
    },
    {
      company: 'Acarentals',
      position: 'Web Developer and IT Infrastructure Administrator',
      start: '2015',
      end: 'Oct 2022',
      tasks: [
        'Website development and maintenance with Laravel, payment integrations, and internal APIs.',
        'Server administration, backups, and availability monitoring.',
        'Technical support and coordination of digital assets (email, domains, social media).',
      ],
    },
  ],
}

export const PROJECTS_DATA: Project[] = [
  {
    name: { es: 'Mincoli', en: 'Mincoli' },
    description: {
      es: 'E-commerce en producción con Laravel. Incluye catálogo con variaciones de color/talla, control de inventario, pedidos y reportes en un panel único para el equipo de ventas.',
      en: 'Production e-commerce built with Laravel. Catalog with color/size variants, inventory control, order tracking, and reporting in a single admin panel for the sales team.',
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
      es: 'Plataforma para docentes que centraliza calificaciones, reportes y alertas. Permite exportar informes y enviar notificaciones automáticas por Telegram para seguimiento oportuno.',
      en: 'Faculty platform that centralizes grades, reports, and alerts. Exports detailed reports and triggers Telegram notifications for timely follow-ups.',
    },
    image: '/projects-images/desempeno-academico.png',
    tags: [
      'Next.js',
      'Node.js',
      'TypeScript',
      'MySQL',
      'Prisma',
      'Telegram Bot API',
    ],
    liveUrl: 'https://calificaciones-cetmar.vercel.app/',
  },
  {
    name: {
      es: 'Comerza - POS',
      en: 'Comerza - POS',
    },
    description: {
      es: 'POS full stack para restaurantes/tiendas con ventas en tiempo real, sincronización por RabbitMQ y dashboard de operaciones. Incluye catálogo, corte de caja y emisión de tickets.',
      en: 'Full-stack POS for restaurants/shops with real-time sales, RabbitMQ syncing, and an operations dashboard. Includes catalog, cash-out flow, and ticket generation.',
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
    name: { es: 'Colegio CVT', en: 'Colegio CVT' },
    description: {
      es: 'Sitio institucional con Laravel + Tailwind y CMS a medida para la administración escolar. Gestión de alumnos, profesores, pagos y reportes desde un panel seguro usado por el staff.',
      en: 'Institutional site with Laravel + Tailwind and a custom CMS for school operations. Staff manages students, teachers, payments, and reports from a secure admin panel.',
    },
    image: '/projects-images/ColegioCVT.png',
    tags: ['Laravel', 'Blade', 'Tailwind CSS', 'MySQL'],
    liveUrl: 'https://colegiocvt.com.mx/',
  },
  {
    name: { es: 'Se Renta', en: 'Se Renta' },
    description: {
      es: 'Marketplace de alquiler en Laravel con filtros por zona/amenidades. Panel administrativo para gestionar reservas, propiedades y leads, optimizado para posicionamiento local.',
      en: 'Laravel-powered rental marketplace with filters by area/amenities. Admin panel to manage bookings, properties, and leads, optimized for local search.',
    },
    image: '/projects-images/SeRenta.png',
    tags: [
      'Laravel',
      'Blade',
      'Tailwind CSS',
      'MySQL',
      'Google Analytics',
      'i18n',
      'SEO',
      'Tawk.to',
    ],
    liveUrl: 'https://serenta.com/',
  },
  {
    name: { es: 'Moodle LMS', en: 'Moodle LMS' },
    description: {
      es: 'Plataforma Moodle personalizada para cursos y evaluaciones en línea. Integración de plugins, automatización de respaldos y soporte a más de 600 usuarios activos mensuales.',
      en: 'Online learning platform based on Moodle. Customization and integration of plugins to enhance the educational and administrative experience. More than 600 active monthly users.',
    },
    image: '/projects-images/MoodleCetmar18.png',
    tags: ['Moodle 3.8', 'PHP', 'MySQL', 'CSS'],
    liveUrl: 'https://fulltech.com.mx/eduvirtual/',
  },
]

export const CV_HIGHLIGHTS = {
  es: [
    '6+ años construyendo sistemas en producción (POS, LMS, CMS, e-commerce).',
    'Stack principal: React, Next.js, Node.js, Laravel, Blade, Java, Spring Boot, Laravel, MySQL, Docker.',
    'End-to-end: backend, frontend, DevOps y acompañamiento a usuarios.',
  ],
  en: [
    '6+ years building production systems (POS, LMS, CMS, e-commerce).',
    'Core stack: React, Next.js, Node.js, Laravel, Blade, Java, Spring Boot, Laravel, MySQL, Docker.',
    'End-to-end: backend, frontend, DevOps, and user onboarding.',
  ],
}
