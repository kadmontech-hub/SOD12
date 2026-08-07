# SØD V3.0.4.2 — Safe Access Hotfix

- Eliminada la pantalla MVP que solicitaba email y contraseña.
- Identidad local sin credenciales y con almacenamiento en el dispositivo.
- Avisos visibles de prototipo y privacidad.
- Cache del service worker renovada.
- Hub, universos y ciclo de transformación intactos.

# SØD Visual MVP v3.0.5 Light

## Lightweight remote visual system

- Removed the complete 142 MB local visual source library.
- Removed the local 3 MB panoramic Hub image.
- Preserved the approved Hub through its canonical Imgur URL.
- Added all 24 unique images supplied by the founder.
- Centralized every image URL and product role in `public/js/visual-assets.js`.
- Reused images intentionally where final art is still missing.
- Preserved all routes, state, PWA behavior, APIs and functional product flows.
- Added Imgur to the production Content Security Policy.
- Added browser preconnect and DNS prefetch for faster visual startup.
- Added graceful visual fallbacks for unavailable remote images.
- Updated service-worker cache to `sod-shell-v3.0.5-light`.
- Updated automated tests for the remote catalog and local payload budget.

## Weight reduction

- Previous visual source set: approximately 145 MB.
- Current complete working tree before build: under 1 MB.
- Current local asset payload: approximately 64 KB.

## Editing

Future visual replacements only require changing URLs in `public/js/visual-assets.js`.


## v3.0.5 — Clean Hub + floating portal images

- Replaced the Hub background with `https://i.imgur.com/nQ65b36.png`.
- Added independent floating image portals for Hablar con SØD, Biblioteca, Semillas and Observatorio.
- Kept all routes, state, controls, fallbacks and transformation flows unchanged.
- Added graceful icon fallback so remote image failure cannot break Hub navigation.
- Updated the service-worker cache namespace.

## Library V5 spatial shelves
- Biblioteca sin sidebar propia; conserva el shell global y usa navegación flotante Libros / Videos / Hub.
- Estanterías horizontales compactas, pensadas para evolucionar a lomos físicos.
- Hover: el libro sobresale del estante y muestra preview rápida.
- Click: ficha completa con metadata editorial.
- PDFs: selector Leer acá / Descargar cuando exista `pdfUrl`.
- Resumen: YouTube embebido cuando exista `summaryUrl`.
- Audiolibro: YouTube embebido cuando exista `audioUrl`.
- Biblioteca desacoplada de Semillas.
- Nueva curaduría centralizada en `public/js/library-data.js`.
- Solapa Videos con carruseles por sección; los links faltantes se muestran como Próximamente, no como contenido disponible.

## V3.0.4.6 — Biblioteca exact-reference
- Biblioteca reconstruida a partir de la composición canónica 1672×941 aprobada por el usuario.
- Sin sidebar interna: conserva únicamente el shell global de SØD.
- Buscador superior centrado + selector segmentado Libros / Videos / Hub.
- Chips de categorías en una única línea escaneable.
- Fila "Más recomendados" con 9 libros visibles en desktop cinematográfico.
- Portadas compactas, título, autor y barra de relevancia visual.
- Hover físico: el libro sobresale del estante sin abrir paneles invasivos.
- Fila "Autores esenciales" con nueve retratos extraídos de la referencia visual aprobada.
- Fila "Explorar por tema" con seis accesos visuales alineados a la referencia.
- Flechas de carrusel para categorías, libros, autores y temas.
- Click de libro conserva ficha completa, visor PDF, descarga, resumen embebido y audiolibro YouTube.
- Solapa Videos preservada para la siguiente iteración.
- Hub, Semillas, Códigos, Observatorio, Elementos 33 y ciclo de transformación sin cambios funcionales.
