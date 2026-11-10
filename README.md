# Facundo Rotela · Portfolio Web Personal - Trabajo Final Diseño UX/UI - LSI 2026

Portfolio web personal desarrollado como trabajo final de la materia **Diseño UX-UI 2026**, LSI.

El sitio presenta mi perfil profesional de diseño de experiencia de usuario, sistemas de diseño y desarrollo frontend: propuesta de valor, casos de estudio, trayectoria, testimonios y contacto. Está construido con HTML, CSS y JavaScript vanilla, sin frameworks ni constructores visuales.

(inicio-claro.escritorio.jpg)

## Demostración

- **Sitio publicado:** https://rfnxyz.github.io/uxui-final-2026/
- **Repositorio:** https://github.com/rfnxyz/uxui-final-2026
- **Boceto y prototipo en Figma:** https://www.figma.com/make/dxqabH4PQ0b7XwLidB9nkS/Wireframe-de-portfolio-personal

(inicio-noche-escritorio.png)

## Auditoría de rendimiento y accesibilidad (Lighthouse)

Medición realizada sobre la URL publicada con Chrome DevTools.

| Categoría | Escritorio | Mobile |
|---|---|---|
| Performance | 🟢 100 | 🟢 100} |
| Accessibility | 🟢 100 | 🟢  100 |
| Best Practices | 🟢  96 | 🟢  98 |
| SEO | 🟢 100 | 🟢 100

(lighthouse-escritorio.png)

(lighthouse-mobile.png)

(inicio-claro-mobile.png)

(inicio-noche-mobile.png)

(figma.png)

## Tecnologías utilizadas

- **HTML5 semántico:** `header`, `nav`, `main`, `section`, `article`, `footer`, `dialog` y `template` (este último ya no se usa, reemplazado por datos en JavaScript).
- **CSS3:** variables CSS para temas claro y noche, Flexbox y Grid, `aspect-ratio`, `dvh`, media queries, `prefers-color-scheme`, `prefers-reduced-motion` y `:focus-visible`.
- **JavaScript vanilla:** renderizado de contenido desde un objeto de datos, menú hamburguesa con `aria-expanded`, diálogo nativo con `showModal()` y alternancia de tema con `localStorage`.
- **Tipografías:** Inter Tight (títulos) y Arimo (texto), desde Google Fonts con `font-display: swap`.
- **Control de versiones:** Git y GitHub.
- **Despliegue:** GitHub Pages con GitHub Actions.

## Estructura del proyecto

```text
uxui-final-2026/
├── index.html              # Página principal (one-page con navegación por anclas)
├── 404.html                # Página de error personalizada
├── robots.txt              # Indicaciones para buscadores
├── sitemap.xml             # Mapa del sitio para buscadores
├── .nojekyll               # Evita que GitHub Pages procese el sitio con Jekyll
├── .gitignore              # Archivos excluidos del repositorio
├── README.md               # Este documento
├── css/
│   ├── styles.css          # Estilos generales, temas y secciones
│   └── 404.css             # Estilos de la página 404
├── js/
│   ├── contenido.js        # Textos y datos de proyectos, servicios, experiencia y testimonios
│   └── render.js           # Dibuja el contenido en la página y gestiona el diálogo de casos
├── src/
│   └── img/
│       ├── hero-facundo-rotela.jpg   # Retrato del hero · PENDIENTE
│       ├── sobre-mi-taller.jpg       # Fotografía de la sección Sobre mí · PENDIENTE
│       ├── caso-finflow.jpg          # Miniatura del caso Finflow · PENDIENTE
│       ├── caso-pulse-ai.jpg         # Miniatura del caso Pulse AI · PENDIENTE
│       ├── caso-orbit.jpg            # Miniatura del caso Orbit · PENDIENTE
│       ├── caso-logicore.jpg         # Miniatura del caso LogiCore · PENDIENTE
│       ├── caso-openart.jpg          # Miniatura del caso OpenArt · PENDIENTE
│       └── og-image.jpg              # Imagen para vista previa en redes (1200 × 630) · PENDIENTE
├── docs/
│   └── capturas/           # Capturas usadas en este README
└── cv.pdf                  # Currículum descargable · PENDIENTE
```

## Uso de inteligencia artificial

Se utilizó un asistente de IA en las siguientes tareas:

- **Código:** generación de borradores de HTML, CSS y JavaScript, y ajustes de maquetación. Todo el código fue revisado, modificado y probado por el autor.
- **Textos:** borradores de descripciones de los casos de estudio ficticios y de los testimonios. Los datos son ficticios; el autor los revisó y ajustó.
- **Configuración:** redacción de archivos de configuración del repositorio (`robots.txt`, `sitemap.xml`, flujo de despliegue).

Las decisiones de diseño, la investigación de usuarios, el boceto en Figma y las pruebas de accesibilidad son trabajo del usuario

## Créditos

- **Autor y diseño:** Facundo Rotela.
- **Tipografías:** Inter Tight y Arimo, con licencia SIL Open Font License 1.1, disponibles en Google Fonts.

## Licencia

{CONFIRMAR · por ejemplo: el código se publica bajo licencia MIT y el contenido bajo CC BY 4.0.}
