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
    id: 'mincoli',
    name: { es: 'Mincoli', en: 'Mincoli' },
    description: {
      es: 'E-commerce en producción con Laravel. Incluye catálogo con variaciones de color/talla, control de inventario, pedidos y reportes en un panel único para el equipo de ventas.',
      en: 'Production e-commerce built with Laravel. Catalog with color/size variants, inventory control, order tracking, and reporting in a single admin panel for the sales team.',
    },
    image: '/projects-images/mincoli.png',
    images: ['/projects-images/mincoli.png'],
    tags: ['Laravel', 'PHP', 'Blade', 'MySQL', 'Tailwind CSS'],
    liveUrl: 'http://mincoli.com/',
    longDescription: {
      es: 'Mincoli es una plataforma de e-commerce completa desarrollada para una marca de ropa infantil. El sistema maneja todo el ciclo de venta desde la visualización de productos hasta el seguimiento de pedidos, con un enfoque especial en la gestión de inventario y la experiencia del usuario.',
      en: "Mincoli is a complete e-commerce platform developed for a children's clothing brand. The system handles the entire sales cycle from product visualization to order tracking, with special focus on inventory management and user experience.",
    },
    challenges: {
      es: [
        'Implementar un sistema de variaciones de producto (color/talla) complejo',
        'Optimizar el rendimiento del catálogo con miles de productos',
        'Integrar múltiples pasarelas de pago',
        'Desarrollar un panel administrativo intuitivo para no-técnicos',
      ],
      en: [
        'Implement a complex product variation system (color/size)',
        'Optimize catalog performance with thousands of products',
        'Integrate multiple payment gateways',
        'Develop an intuitive admin panel for non-technical users',
      ],
    },
    features: {
      es: [
        'Catálogo de productos con filtros avanzados',
        'Sistema de inventario en tiempo real',
        'Gestión de pedidos y seguimiento',
        'Panel administrativo completo',
        'Integración con pasarelas de pago',
        'Sistema de calificaciones y reseñas',
        'Gestión de cupones y descuentos',
      ],
      en: [
        'Product catalog with advanced filters',
        'Real-time inventory system',
        'Order management and tracking',
        'Complete admin panel',
        'Payment gateway integration',
        'Rating and review system',
        'Coupon and discount management',
      ],
    },
    technologies: {
      frontend: ['Laravel Blade', 'Tailwind CSS', 'Alpine.js', 'jQuery'],
      backend: ['Laravel', 'PHP', 'MySQL'],
      devops: ['Docker', 'Nginx', 'SSL'],
      other: ['Stripe API', 'PayPal Integration', 'Google Analytics'],
    },
    duration: '2 meses',
    teamSize: '1 persona',
    role: {
      es: 'Desarrollador Full Stack líder',
      en: 'Lead Full Stack Developer',
    },
  },
  {
    id: 'academic-performance',
    name: {
      es: 'Sistema de Desempeño Académico',
      en: 'Academic Performance System',
    },
    description: {
      es: 'Plataforma para docentes que centraliza calificaciones, reportes y alertas. Permite exportar informes y enviar notificaciones automáticas por Telegram para seguimiento oportuno.',
      en: 'Faculty platform that centralizes grades, reports, and alerts. Exports detailed reports and triggers Telegram notifications for timely follow-ups.',
    },
    image: '/projects-images/desempeno-academico.png',
    images: ['/projects-images/desempeno-academico.png'],
    tags: [
      'Next.js',
      'Node.js',
      'TypeScript',
      'MySQL',
      'Prisma',
      'Telegram Bot API',
    ],
    liveUrl: 'https://calificaciones-cetmar.vercel.app/',
    longDescription: {
      es: 'Sistema académico integral diseñado para instituciones educativas que automatiza el proceso de calificación y genera reportes detallados. Incluye un sistema de alertas tempranas mediante notificaciones de Telegram para mantener a padres y estudiantes informados.',
      en: 'Comprehensive academic system designed for educational institutions that automates the grading process and generates detailed reports. Includes an early warning system through Telegram notifications to keep parents and students informed.',
    },
    challenges: {
      es: [
        'Diseñar una interfaz intuitiva para docentes con poca experiencia técnica',
        'Implementar algoritmos de cálculo de promedios complejos',
        'Integrar API de Telegram para notificaciones en tiempo real',
        'Garantizar la seguridad y confidencialidad de los datos académicos',
      ],
      en: [
        'Design an intuitive interface for teachers with limited technical experience',
        'Implement complex average calculation algorithms',
        'Integrate Telegram API for real-time notifications',
        'Ensure security and confidentiality of academic data',
      ],
    },
    features: {
      es: [
        'Gestión de calificaciones por asignatura',
        'Generación de reportes personalizados',
        'Sistema de alertas automáticas',
        'Panel para padres y estudiantes',
        'Exportación a múltiples formatos',
        'Análisis estadístico del desempeño',
        'Gestión de periodos académicos',
      ],
      en: [
        'Grade management by subject',
        'Customized report generation',
        'Automatic alert system',
        'Panel for parents and students',
        'Export to multiple formats',
        'Statistical performance analysis',
        'Academic period management',
      ],
    },
    technologies: {
      frontend: ['Next.js', 'React', 'Tailwind CSS', 'Chart.js'],
      backend: ['Node.js', 'TypeScript', 'Prisma ORM'],
      database: ['MySQL'],
      other: ['Telegram Bot API', 'JWT Authentication', 'PDF Generation'],
    },
    duration: '6 meses',
    teamSize: '1 persona',
    role: {
      es: 'Desarrollador Full Stack',
      en: 'Full Stack Developer',
    },
  },
  {
    id: 'comerza-pos',
    name: {
      es: 'Comerza - POS',
      en: 'Comerza - POS',
    },
    description: {
      es: 'POS full stack para restaurantes/tiendas con ventas en tiempo real, sincronización por RabbitMQ y dashboard de operaciones. Incluye catálogo, corte de caja y emisión de tickets.',
      en: 'Full-stack POS for restaurants/shops with real-time sales, RabbitMQ syncing, and an operations dashboard. Includes catalog, cash-out flow, and ticket generation.',
    },
    image: '/projects-images/ComerzaPOS.png',
    images: ['/projects-images/ComerzaPOS.png'],
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
    longDescription: {
      es: 'Sistema de punto de venta modular y escalable diseñado para restaurantes y comercios minoristas. Arquitectura basada en microservicios con comunicación asíncrona garantizando alta disponibilidad y sincronización en tiempo real entre múltiples terminales.',
      en: 'Modular and scalable point-of-sale system designed for restaurants and retail businesses. Microservice-based architecture with asynchronous communication ensuring high availability and real-time synchronization across multiple terminals.',
    },
    challenges: {
      es: [
        'Implementar comunicación en tiempo real entre terminales',
        'Manejar concurrencia en operaciones de venta',
        'Diseñar interfaz táctil optimizada para uso rápido',
        'Garantizar integridad de datos en desconexiones',
      ],
      en: [
        'Implement real-time communication between terminals',
        'Handle concurrency in sales operations',
        'Design touch-optimized interface for rapid use',
        'Ensure data integrity during disconnections',
      ],
    },
    features: {
      es: [
        'Ventas en tiempo real multi-terminal',
        'Gestión de inventario automática',
        'Sistema de cortes de caja',
        'Impresión de tickets y facturas',
        'Dashboard analítico de operaciones',
        'Gestión de mesas y comandas',
        'Integración con sistemas de pago',
      ],
      en: [
        'Multi-terminal real-time sales',
        'Automatic inventory management',
        'Cash-out system',
        'Ticket and invoice printing',
        'Analytical operations dashboard',
        'Table and order management',
        'Payment system integration',
      ],
    },
    technologies: {
      frontend: ['Next.js', 'React', 'Shadcn UI', 'Tailwind CSS'],
      backend: ['NestJS', 'TypeScript', 'RabbitMQ'],
      database: ['MySQL'],
      devops: ['Docker', 'Docker Compose', 'Nginx'],
      other: ['Socket.io', 'Thermal Printer API', 'Payment Gateway'],
    },
    duration: '13 meses',
    teamSize: '4 personas',
    role: {
      es: 'Arquitecto de software y desarrollador FullStack, Mentor de equipo ',
      en: 'Software Architect and FullStack Developer, Team Mentor',
    },
  },
  {
    id: 'colegio-cvt',
    name: { es: 'Colegio CVT', en: 'Colegio CVT' },
    description: {
      es: 'Sitio institucional con Laravel + Tailwind y CMS a medida para la administración escolar. Gestión de alumnos, profesores, pagos y reportes desde un panel seguro usado por el staff.',
      en: 'Institutional site with Laravel + Tailwind and a custom CMS for school operations. Staff manages students, teachers, payments, and reports from a secure admin panel.',
    },
    image: '/projects-images/ColegioCVT.png',
    images: ['/projects-images/ColegioCVT.png'],
    tags: ['Laravel', 'Blade', 'Tailwind CSS', 'MySQL'],
    liveUrl: 'https://colegiocvt.com.mx/',
    longDescription: {
      es: 'Plataforma web integral para institución educativa que combina sitio institucional con sistema de gestión escolar. CMS personalizado desarrollado específicamente para las necesidades administrativas del colegio, con enfoque en la usabilidad para personal no técnico.',
      en: "Comprehensive web platform for educational institution combining institutional website with school management system. Custom CMS developed specifically for the school's administrative needs, with focus on usability for non-technical staff.",
    },
    challenges: {
      es: [
        'Crear CMS intuitivo para usuarios sin experiencia técnica',
        'Integrar múltiples módulos administrativos',
        'Optimizar SEO para posicionamiento local',
        'Implementar sistema de pagos seguro',
      ],
      en: [
        'Create intuitive CMS for non-technical users',
        'Integrate multiple administrative modules',
        'Optimize SEO for local positioning',
        'Implement secure payment system',
      ],
    },
    features: {
      es: [
        'Gestión de alumnos y matrículas',
        'Control de pagos y colegiaturas',
        'Sistema de calificaciones',
        'Gestión de personal y profesores',
        'Generación de reportes y constancias',
        'Blog y noticias institucionales',
        'Galería de eventos y actividades',
      ],
      en: [
        'Student and enrollment management',
        'Payment and tuition control',
        'Grade system',
        'Staff and teacher management',
        'Report and certificate generation',
        'Institutional blog and news',
        'Events and activities gallery',
      ],
    },
    technologies: {
      frontend: ['Laravel Blade', 'Tailwind CSS', 'Alpine.js'],
      backend: ['Laravel', 'PHP'],
      database: ['MySQL'],
      other: ['Payment Gateway', 'Email Services', 'File Upload System'],
    },
    duration: '5 meses',
    teamSize: '1 persona',
    role: {
      es: 'Desarrollador Full Stack',
      en: 'Full Stack Developer',
    },
  },
  {
    id: 'serenta',
    name: { es: 'Se Renta', en: 'Se Renta' },
    description: {
      es: 'Marketplace de alquiler en Laravel con filtros por zona/amenidades. Panel administrativo para gestionar reservas, propiedades y leads, optimizado para posicionamiento local.',
      en: 'Laravel-powered rental marketplace with filters by area/amenities. Admin panel to manage bookings, properties, and leads, optimized for local search.',
    },
    image: '/projects-images/SeRenta.png',
    images: ['/projects-images/SeRenta.png'],
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
    longDescription: {
      es: 'Marketplace especializado en alquiler de propiedades con sistema de reservas integrado. Optimizado para SEO local con filtros avanzados de búsqueda, sistema de calificaciones y chat en vivo para mejorar la conversión de leads.',
      en: 'Specialized property rental marketplace with integrated booking system. Optimized for local SEO with advanced search filters, rating system, and live chat to improve lead conversion.',
    },
    challenges: {
      es: [
        'Implementar sistema de reservas con disponibilidad en tiempo real',
        'Optimizar SEO para múltiples ubicaciones',
        'Integrar mapa interactivo con filtros',
        'Manejar alto volumen de imágenes y propiedades',
      ],
      en: [
        'Implement booking system with real-time availability',
        'Optimize SEO for multiple locations',
        'Integrate interactive map with filters',
        'Handle high volume of images and properties',
      ],
    },
    features: {
      es: [
        'Búsqueda avanzada con filtros múltiples',
        'Sistema de reservas online',
        'Galería de imágenes con zoom',
        'Sistema de calificaciones y reseñas',
        'Panel para propietarios',
        'Chat en vivo integrado',
        'Notificaciones automáticas',
        'Gestión de leads y contactos',
      ],
      en: [
        'Advanced search with multiple filters',
        'Online booking system',
        'Image gallery with zoom',
        'Rating and review system',
        'Owner dashboard',
        'Integrated live chat',
        'Automatic notifications',
        'Lead and contact management',
      ],
    },
    technologies: {
      frontend: ['Laravel Blade', 'Tailwind CSS', 'Leaflet.js', 'Slick.js'],
      backend: ['Laravel', 'PHP'],
      database: ['MySQL'],
      other: ['Google Maps API', 'Tawk.to', 'Google Analytics', 'Email Queue'],
    },
    duration: '1 mes',
    teamSize: '1 persona',
    role: {
      es: 'Desarrollador Full Stack y especialista SEO',
      en: 'Full Stack Developer and SEO Specialist',
    },
  },
  {
    id: 'moodle-lms',
    name: { es: 'Moodle LMS', en: 'Moodle LMS' },
    description: {
      es: 'Plataforma Moodle personalizada para cursos y evaluaciones en línea. Integración de plugins, automatización de respaldos y soporte a más de 600 usuarios activos mensuales.',
      en: 'Online learning platform based on Moodle. Customization and integration of plugins to enhance the educational and administrative experience. More than 600 active monthly users.',
    },
    image: '/projects-images/MoodleCetmar18.png',
    images: ['/projects-images/MoodleCetmar18.png'],
    tags: ['Moodle 3.8', 'PHP', 'MySQL', 'CSS'],
    liveUrl: 'https://fulltech.com.mx/eduvirtual/',
    longDescription: {
      es: 'Plataforma de aprendizaje basada en Moodle altamente personalizada para institución educativa. Implementación de plugins personalizados, automatización de procesos administrativos y optimización del rendimiento para soportar más de 600 usuarios concurrentes.',
      en: 'Highly customized Moodle-based learning platform for educational institution. Implementation of custom plugins, administrative process automation, and performance optimization to support more than 600 concurrent users.',
    },
    challenges: {
      es: [
        'Personalizar interfaz de Moodle sin perder funcionalidad',
        'Optimizar rendimiento para alto volumen de usuarios',
        'Automatizar procesos de matrícula y evaluación',
        'Integrar sistemas externos de pago y comunicación',
      ],
      en: [
        'Customize Moodle interface without losing functionality',
        'Optimize performance for high user volume',
        'Automate enrollment and evaluation processes',
        'Integrate external payment and communication systems',
      ],
    },
    features: {
      es: [
        'Gestión de cursos y matrículas',
        'Sistema de evaluaciones en línea',
        'Foros y herramientas de colaboración',
        'Seguimiento de progreso estudiantil',
        'Generación de certificados',
        'Integración con sistemas de pago',
        'Panel de control administrativo',
        'Reportes y analíticas educativas',
      ],
      en: [
        'Course and enrollment management',
        'Online evaluation system',
        'Forums and collaboration tools',
        'Student progress tracking',
        'Certificate generation',
        'Payment system integration',
        'Administrative control panel',
        'Educational reports and analytics',
      ],
    },
    technologies: {
      frontend: ['Moodle Themes', 'CSS3', 'JavaScript'],
      backend: ['Moodle 3.8', 'PHP'],
      database: ['MySQL'],
      devops: ['Automated Backups', 'SSL', 'Performance Monitoring'],
      other: ['Custom Plugins', 'Payment Gateway', 'Email Integration'],
    },
    duration: '2 meses (implementación) + mantenimiento continuo',
    teamSize: '1 persona',
    role: {
      es: 'Administrador Moodle y desarrollador de plugins',
      en: 'Moodle Administrator and Plugin Developer',
    },
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
