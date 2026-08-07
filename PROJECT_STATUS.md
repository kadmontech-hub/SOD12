# SØD Ecosystem — Project Status

## Release

**Visual MVP V3.0.5 Light — Remote Visual System**

## Current state

- All V3 routes and product functions remain present.
- The panoramic Hub uses the clean background `https://i.imgur.com/nQ65b36.png` with four independent floating image portals.
- The 68 heavy local source images were removed.
- The founder's 24 curated Imgur images remain mapped to product roles, plus the clean Hub background and four dedicated floating portal images in `public/js/visual-assets.js`.
- Repetition is intentional where final art does not yet exist.
- Local visual payload is below 70 KB, excluding the small application icons and OG image.
- Startup recovery, runtime error recovery and the 2D Hub remain available.

## Functional systems preserved

- Onboarding and guest mode.
- Panoramic Hub navigation.
- Hablar con SØD scripted transformation flow.
- Canonical Semillas.
- Códigos SØD and consent flow.
- Observatorio.
- Elementos 33 with 165 structured pieces.
- Biblioteca, Journey, Bitácora, Identidad and Ajustes.
- PWA shell, offline page and Vercel Functions.

## Reliability boundary

External images are visual dependencies only. A remote image failure cannot delete state, break routing or stop the application from rendering.

## Known limitation

The build environment could not render the external Imgur images for visual screenshot comparison. The catalog, roles, CSP, imports, syntax, build, APIs and Vercel configuration were validated. Visual ordering can now be iterated by editing a single role map.

### Biblioteca — estado V3.0.4.6
La vista Libros adopta como canon la referencia visual 1672×941: buscador + selector flotante, categorías, recomendados compactos, autores esenciales y exploración temática. La infraestructura multimedia de PDF/YouTube continúa operativa y la solapa Videos queda preparada para la siguiente fase.
