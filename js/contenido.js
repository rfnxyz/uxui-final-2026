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
      rol: 'Caso académico · OpenArt',
      periodo: '2026',
      organizacion: 'Proyecto académico · Remoto',
      logros: [
        'Flujo de checkout para una tienda de NFTs reducido de 5 a 3 pasos, con prototipo de alta fidelidad en Figma.',
        'Ronda de pruebas con seis personas que compraban arte digital por primera vez, con cambios aplicados entre rondas.'
      ]
    },
    {
      rol: 'Lead Product Designer & Design Systems',
      periodo: '2023 – Presente',
      organizacion: 'Nexus Tech Global · Remoto',
      logros: [
        'Liderazgo de la arquitectura de interfaz para 4 plataformas SaaS B2B.',
        'Sistema de diseño Orbit: velocidad de diseño 3.5 veces mayor y 98 % de consistencia en 6 productos y 45 ingenieros.'
      ]
    },
    {
      rol: 'UI/UX Designer & Frontend Dev',
      periodo: '2021 – 2023',
      organizacion: 'Finflow Labs Europe · Remoto',
      logros: [
        'Diseño de la plataforma de pagos transfronterizos, con más de €20 M mensuales: tiempo de tarea -42 % y errores -80 %.',
        'Catálogo de componentes en React y Tailwind CSS con tokens sincronizados desde Figma, que llevó la adopción a +165 %.'
      ]
    }
  ],

  testimonios: [
    {
      texto: 'Facundo entendió antes que nadie qué necesitaba el tesorero de una pyme. Sus wireframes nos permitieron discutir el flujo de pagos con el negocio en una tarde, no en tres semanas.',      iniciales: 'EG',
      nombre: 'Gómez Torba, Élver',
      cargo: 'Product Manager · Finflow Labs Europe'
    },
    {
      texto: 'El sistema de diseño Orbit está pensado para quien lo implementa. Los tokens llegan al repositorio sin traducción manual, y eso eliminó buena parte de las idas y vueltas en las revisiones de interfaz.',
      iniciales: 'DJ',
      nombre: 'Doe, John',
      cargo: 'Engineering Manager · Nexus Tech Global'
    },
    {
      texto: 'Pedimos una app que nuestros pacientes pudieran entender sin ayuda. Nombre diseñó las alertas con texto e ícono además del color, y las pruebas con pacientes mayores mostraron la diferencia desde la primera ronda.',
      iniciales: 'LB',
      nombre: 'Lu Bu',
      cargo: 'Co-Founder & CEO · Pulse AI'
    }
  ],

  proyectos: [
    {
      id: 'openart',
      nombreCorto: 'OpenArt',
      titulo: 'OpenArt: E-commerce de NFTs',
      categoria: 'Caso académico · E-commerce NFT',
      año: 2026,
      resumen: 'Flujo de descubrimiento, carrito y pago multi-paso para una tienda de arte digital, pensado para compradores que compran un NFT por primera vez.',
      imagen: {
        src: 'src/img/openart.avif',
        alt: 'Pantalla de checkout de OpenArt con el resumen de compra de un NFT',
        width: 800,
        height: 500
      },
      metricas: [
        { etiqueta: 'App Store', valor: '4.9 ★' }
      ],
      herramientas: ['Figma', 'Flujos de tareas', 'Prototipo de alta fidelidad', 'Testing con usuarios'],
      caso: {
        problema: 'Quienes compraban arte digital dudaban al llegar al pago. No entendían qué incluía cada NFT, qué comisiones se sumaban ni qué cuenta usarían para operar, y abandonaban el carrito antes de confirmar.',
        proceso: [
          'Mapa de tareas desde la exploración del catálogo hasta la confirmación, con cinco escenarios de compra.',
          'Prototipo de alta fidelidad en Figma para mobile, con modo oscuro.',
          'Ronda de pruebas con seis personas que compraban arte digital por primera vez, con ajustes entre rondas.'
        ],
        solucion: 'Aplicación móvil en modo oscuro con catálogo filtrable y carrito integrado. El checkout tiene tres pasos: revisión de la obra y del precio, elección de la cuenta operadora con opciones de ahorro en comisiones, y una pantalla de confirmación con el estado de la transacción.',
        resultado: 'Prototipo navegable listo para validación. Las fichas de cada artista muestran su historial de transacciones y las reseñas de la comunidad, lo que reduce la duda antes de pagar y da motivos para volver al catálogo.',
        aprendizaje: 'En arte digital la duda de compra es de confianza, no de precio. Mostrar quién vende y cuántas transacciones tiene pesó más que destacar la oferta.'
      },
      enlace: { url: 'https://rfnxyz.github.io/uxui_2026/tp2/home.html', texto: 'Ver prototipo' }
    },
    {
      id: 'finflow',
      nombreCorto: 'Finflow',
      titulo: 'Finflow: Plataforma bancaria B2B',
      categoria: 'Fintech · Lead UX/UI Designer',
      año: 2024,
      resumen: 'Rediseño de la tesorería y los pagos internacionales para pymes europeas, con un flujo que muestra el costo final antes de confirmar.',
      imagen: {
        src: 'src/img/finflow.avif',
        alt: 'Vista previa de la plataforma bancaria B2B Finflow',
        width: 800,
        height: 500
      },
      metricas: [
        { etiqueta: 'Adopción', valor: '+165%' }
      ],
      herramientas: ['Figma', 'Investigación de usuarios', 'Design tokens', 'React'],
      caso: {
        problema: 'Las pymes europeas necesitaban enviar pagos a otros países sin conocer el costo final. El tipo de cambio y las comisiones aparecían al último, cuando el pago ya estaba en curso, y los errores llegaban tarde.',
        proceso: [
          'Entrevistas con ocho directores financieros para entender cómo preparaban y aprobaban pagos.',
          'Wireframes de baja fidelidad revisados con el equipo de producto y con dos clientes piloto.',
          'Pruebas de usabilidad con cinco personas, enfocadas en programar un pago recurrente.'
        ],
        solucion: 'Un flujo de pago en tres pasos que valida cada campo al completarlo y muestra un resumen con el costo total antes de confirmar. El sistema de componentes con design tokens permitió que el equipo de desarrollo reutilizara los mismos elementos en toda la plataforma.',
        resultado: 'Durante el primer trimestre, el tiempo promedio de cada pago bajó un 42 %, la adopción subió un 165 % y los errores se redujeron un 80 %.',
        aprendizaje: 'Lo que más inquietaba a los usuarios era el costo, no el formato del pago. Mostrar el total con anticipación resolvió más dudas que cualquier rediseño visual.'
      },
      enlace: { url: 'https://www.figma.com/', texto: 'Ver en Figma' }
    },
    {
      id: 'pulse-ai',
      nombreCorto: 'Pulse AI',
      titulo: 'Pulse AI: App móvil de salud',
      categoria: 'Mobile App · Product Designer',
      año: 2024,
      resumen: 'Aplicación para seguimiento biométrico continuo con alertas que el paciente entiende sin necesidad de un especialista al lado.',
      imagen: {
        src: 'src/img/pulseai.avif',
        alt: 'Pantallas de la app móvil de salud Pulse AI',
        width: 800,
        height: 500
      },
      metricas: [
        { etiqueta: 'App Store', valor: '4.8 ★' }
      ],
      herramientas: ['Figma', 'React Native', 'IA predictiva', 'WCAG 2.1 AA'],
      caso: {
        problema: 'Los pacientes que hacen seguimiento diario recibían muchas notificaciones sin contexto. Con el tiempo las dejaban de lado, y las alertas importantes se perdían entre las demás.',
        proceso: [
          'Entrevistas con pacientes en seguimiento y con cardiólogos que revisaban esos datos.',
          'Prototipo de alta fidelidad con tres niveles de alerta y un resumen diario.',
          'Pruebas con seis pacientes de entre 45 y 70 años para comprobar la lectura de cada pantalla.'
        ],
        solucion: 'Un resumen diario con la tendencia de cada indicador y tres niveles de alerta, cada uno con ícono, texto y color. El lenguaje evita tecnicismos, y los tamaños de texto y contraste cumplen WCAG AA.',
        resultado: 'La retención a 30 días llegó al 68 %, la calificación en la App Store es 4.8 y la app gestiona alrededor de 30 mil alertas.',
        aprendizaje: 'Una alerta solo sirve si el paciente sabe qué hacer con ella. El color por sí solo no transmitía la urgencia para todos, así que cada nivel necesitó también ícono y texto.'
      },
      enlace: { url: 'https://www.figma.com/', texto: 'Ver en Figma' }
    },
    {
      id: 'logicore',
      nombreCorto: 'LogiCore',
      titulo: 'LogiCore: Panel de control logístico',
      categoria: 'SaaS & Web · Senior UI/UX Designer',
      año: 2023,
      resumen: 'Panel operativo para despacho y supervisión de más de 2.000 vehículos en tiempo real, con mapa e incidentes en la misma vista.',
      imagen: {
        src: 'src/img/LOGIcore.avif',
        alt: 'Panel de control logístico LogiCore con mapa de vehículos',
        width: 800,
        height: 500
      },
      metricas: [
        { etiqueta: 'Satisfacción', valor: '9.4/10' }
      ],
      herramientas: ['Figma', 'React', 'Mapas geoespaciales', 'Tailwind CSS'],
      caso: {
        problema: 'Los operadores de despacho tenían el mapa en una pantalla y la lista de incidentes en otra. Para responder a un problema debían cambiar de vista y reconstruir la situación de memoria.',
        proceso: [
          'Observación en el centro de despacho durante tres turnos completos.',
          'Prototipos de panel con el mapa y la lista de incidentes en una sola vista.',
          'Pruebas de usabilidad con ocho operadores, con tareas de despacho reales.'
        ],
        solucion: 'Un panel donde el mapa y la lista de incidentes se sincronizan, las alertas se ordenan por severidad y cada acción frecuente cabe en un solo clic.',
        resultado: 'Los incidentes bajaron un 28 %, el tiempo de reacción quedó por debajo de 90 segundos y la satisfacción de los operadores llegó a 9.4 sobre 10.',
        aprendizaje: 'Al observar el trabajo real, la prioridad cambió: el operador no necesitaba más información en el mapa, sino ver primero la lista de incidentes urgentes.'
      },
      enlace: { url: 'https://www.figma.com/', texto: 'Ver en Figma' }
    }
  ]
};
    
