/* =========================================================
   Contenido del portfolio
   Edita aquí los textos repetitivos y los casos de estudio.
   Los títulos de sección, el hero y el contacto siguen en index.html.
   ========================================================= */
window.CONTENIDO = {

  principios: [
    {
      titulo: '[01] Descubrimiento & UX',
      descripcion: 'Entrevistas con usuarios y flujos de arquitectura de información.'
    },
    {
      titulo: '[02] Wireframing Low-Fi',
      descripcion: 'Validación estructural rápida antes de programar o detallar la UI.'
    },
    {
      titulo: '[03] Design System & UI',
      descripcion: 'Tokens semánticos y componentes accesibles WCAG AA.'
    }
  ],

  servicios: [
    {
      titulo: '[01] UX Research & Strategy',
      descripcion: 'Mapeo de jornadas de usuario, entrevistas estructuradas y wireframing de baja fidelidad para validar ideas antes de invertir código.',
      herramientas: ['User journeys', 'Low-fi wireframes']
    },
    {
      titulo: '[02] UI & Design Systems',
      descripcion: 'Construcción de librerías escalables en Figma con tokens semánticos sincronizados a repositorios Git.',
      herramientas: ['Figma tokens', 'Guías de estilo']
    },
    {
      titulo: '[03] Frontend React & Tailwind',
      descripcion: 'Transformación precisa de componentes de diseño a código limpio, modular, accesible y estrictamente tipado.',
      herramientas: ['React / TS', 'Tailwind CSS v4']
    },
    {
      titulo: '[04] Auditoría & Accesibilidad',
      descripcion: 'Revisión técnica heurística y optimización de flujos con cumplimiento estricto de WCAG 2.1 AA.',
      herramientas: ['Checklist AA', 'CRO audits']
    }
  ],

  experiencia: [
    {
      rol: 'Lead Product Designer & Design Systems',
      periodo: '2023 – Presente',
      organizacion: 'Nexus Tech Global · Remoto Global',
      logros: [
        'Liderazgo de la arquitectura de interfaz para 4 plataformas SaaS B2B.',
        'Estandarización del sistema de diseño Orbit, reduciendo el tiempo de diseño en un 40%.'
      ]
    },
    {
      rol: 'Senior UI/UX Designer & Frontend Dev',
      periodo: '2021 – 2023',
      organizacion: 'Finflow Labs Europe · Madrid, España',
      logros: [
        'Diseño de la plataforma de pagos transfronterizos, procesando +€20M mensuales.',
        'Construcción del catálogo de componentes en React y Tailwind CSS.'
      ]
    },
    {
      rol: 'Digital Product Designer',
      periodo: '2018 – 2021',
      organizacion: 'Studio Pixel Agencia · Barcelona, España',
      logros: [
        'Diseño y prototipado interactivo de webs y aplicaciones móviles para banca y retail.'
      ]
    }
  ],

  testimonios: [
    {
      texto: 'Nombre tiene la rara habilidad de entender el negocio tan bien como el diseño. Su capacidad para transformar requisitos confusos en wireframes claros aceleró nuestro lanzamiento 3 meses.',
      iniciales: 'EG',
      nombre: 'Elena Gómez',
      cargo: 'VP of Product · Finflow'
    },
    {
      texto: 'Trabajar con Nombre como diseñador que domina React y Design Systems fue un soplo de aire fresco. Sus especificaciones eran prácticamente código de producción listo para usar.',
      iniciales: 'MV',
      nombre: 'Marcus Vance',
      cargo: 'Head of Engineering · Nexus'
    },
    {
      texto: 'El diseño de nuestra app móvil superó cualquier expectativa. Nombre supo transmitir empatía y calidez en una herramienta médica rigurosa. Los inversores quedaron fascinados.',
      iniciales: 'SV',
      nombre: 'Sofía Valenzuela',
      cargo: 'Co-Founder & CEO · Pulse AI'
    }
  ],

  proyectos: [
    {
      id: 'finflow',
      nombreCorto: 'Finflow',
      titulo: 'Finflow: Plataforma bancaria B2B',
      categoria: 'Fintech · Lead UX/UI Designer',
      año: 2024,
      resumen: 'Rediseño integral de la experiencia de tesorería y pagos transfronterizos para directores financieros de pymes europeas.',
      imagen: {
        src: 'img/caso-finflow.jpg',
        alt: 'Vista previa de la plataforma bancaria B2B Finflow',
        width: 800,
        height: 500
      },
      metricas: [
        { etiqueta: 'Adopción', valor: '+165%' }
      ],
      herramientas: ['Figma', 'Investigación de usuarios', 'Design tokens', 'React'],
      caso: {
        problema: 'Los directores financieros de pymes europeas tardaban demasiado en preparar pagos internacionales. El flujo tenía demasiados pasos sin explicación, y los errores de tipo de cambio aparecían cuando el pago ya estaba enviado.',
        proceso: [
          'Entrevistas con ocho directores financieros y mapeo de sus jornadas de pago.',
          'Wireframes de baja fidelidad validados en dos rondas.',
          'Test de usabilidad con cinco personas, con tareas como "programar un pago recurrente".'
        ],
        solucion: 'Flujo de pago en tres pasos, con validación en cada campo y un resumen del costo final antes de confirmar. Los componentes se documentaron con design tokens para que el equipo de desarrollo los reutilizara.',
        resultado: 'El tiempo de tarea bajó un 42 %, la adopción subió un 165 % y los errores se redujeron un 80 % durante el primer trimestre tras el lanzamiento.',
        aprendizaje: 'Validar con usuarios reales antes de diseñar en alta fidelidad evitó rehacer la confirmación. Lo que más preocupaba a los usuarios era el costo, no el formato.'
      },
      enlace: { url: 'https://www.figma.com/', texto: 'Ver en Figma' }
    },
    {
      id: 'pulse-ai',
      nombreCorto: 'Pulse AI',
      titulo: 'Pulse AI: App móvil de salud',
      categoria: 'Mobile App · Product Designer',
      año: 2024,
      resumen: 'Monitoreo biométrico y análisis predictivo asistido por inteligencia artificial para pacientes que requieren seguimiento continuo.',
      imagen: {
        src: 'img/caso-pulse-ai.jpg',
        alt: 'Pantallas de la app móvil de salud Pulse AI',
        width: 800,
        height: 500
      },
      metricas: [
        { etiqueta: 'App Store', valor: '4.8 ★' }
      ],
      herramientas: ['Figma', 'React Native', 'IA predictiva', 'WCAG 2.1 AA'],
      caso: {
        problema: 'Los pacientes con seguimiento continuo recibían datos biométricos sin contexto y dejaban de usar la app a las pocas semanas.',
        proceso: [
          'Entrevistas con pacientes y con cardiólogos.',
          'Prototipo de alta fidelidad con alertas escalonadas.',
          'Test con seis pacientes de 45 a 70 años para evaluar la legibilidad.'
        ],
        solucion: 'Resumen diario con tendencia, alertas en tres niveles de urgencia y un lenguaje sin tecnicismos. Tamaños de texto y contraste ajustados a WCAG AA.',
        resultado: 'Retención a 30 días del 68 %, calificación 4.8 en la App Store y 30 mil alertas gestionadas.',
        aprendizaje: 'Las alertas funcionan cuando el paciente sabe qué hacer. El color no basta por sí solo, así que cada nivel tiene icono y texto.'
      },
      enlace: { url: 'https://www.figma.com/', texto: 'Ver en Figma' }
    },
    {
      id: 'orbit',
      nombreCorto: 'Orbit',
      titulo: 'Orbit: Sistema de diseño multiplataforma',
      categoria: 'Design System · Design System Architect',
      año: 2023,
      resumen: 'Infraestructura de componentes, variables de Figma y tokens semánticos sincronizados para 6 productos digitales y 45 ingenieros.',
      imagen: {
        src: 'img/caso-orbit.jpg',
        alt: 'Documentación del sistema de diseño multiplataforma Orbit',
        width: 800,
        height: 500
      },
      metricas: [
        { etiqueta: 'Consistencia', valor: '98%' }
      ],
      herramientas: ['Figma Variables', 'Design tokens', 'Storybook', 'Tailwind CSS'],
      caso: {
        problema: 'Seis productos tenían componentes duplicados y diseños que cambiaban de un equipo a otro.',
        proceso: [
          'Auditoría de los componentes existentes en los seis productos.',
          'Definición de tokens semánticos junto con 45 ingenieros y diseñadores.',
          'Migración por fases, empezando por los componentes más usados.'
        ],
        solucion: 'Librería de 65 componentes con variables de Figma sincronizadas con el repositorio, y documentación con ejemplos de uso y criterios de accesibilidad.',
        resultado: 'La velocidad de diseño aumentó 3.5 veces y la consistencia visual llegó al 98 % según la auditoría trimestral.',
        aprendizaje: 'Un sistema se adopta cuando resuelve un problema diario del equipo. Empezar por los componentes más usados fue clave.'
      },
      enlace: { url: 'https://www.figma.com/', texto: 'Ver en Figma' }
    },
    {
      id: 'logicore',
      nombreCorto: 'LogiCore',
      titulo: 'LogiCore: Panel de control logístico',
      categoria: 'SaaS & Web · Senior UI/UX Designer',
      año: 2023,
      resumen: 'Dashboard operativo para despacho y supervisión de más de 2.000 vehículos en tiempo real con analítica geoespacial.',
      imagen: {
        src: 'img/caso-logicore.jpg',
        alt: 'Panel de control logístico LogiCore con mapa de vehículos',
        width: 800,
        height: 500
      },
      metricas: [
        { etiqueta: 'Incidentes', valor: '-28%' },
        { etiqueta: 'Reacción', valor: '<90s' },
        { etiqueta: 'Satisfacción', valor: '9.4/10' }
      ],
      herramientas: ['Figma', 'React', 'Mapas geoespaciales', 'Tailwind CSS'],
      caso: {
        problema: 'Los operadores de despacho de más de 2.000 vehículos perdían tiempo buscando incidentes entre mapas y tablas separadas.',
        proceso: [
          'Observación en el centro de despacho durante tres turnos.',
          'Prototipos de panel con mapa y lista unificada.',
          'Test de usabilidad con ocho operadores.'
        ],
        solucion: 'Panel con mapa geoespacial y lista de incidentes sincronizados, alertas priorizadas por severidad y acciones de un solo clic.',
        resultado: 'Los incidentes bajaron un 28 %, el tiempo de reacción quedó por debajo de 90 segundos y la satisfacción llegó a 9.4 sobre 10.',
        aprendizaje: 'Observar el trabajo real cambió las prioridades: lo urgente no era el mapa, sino la lista de incidentes.'
      },
      enlace: { url: 'https://www.figma.com/', texto: 'Ver en Figma' }
    }
  ]
};