# Guía de Videos en MDX

## Opciones disponibles para añadir videos

### 1. **YouTube** (ya implementado)
```mdx
::youtube{url="https://www.youtube.com/watch?v=VIDEO_ID"}
::youtube{id="VIDEO_ID"}
```

### 2. **Vimeo** (nuevo)
```mdx
::vimeo{url="https://vimeo.com/VIDEO_ID"}
::vimeo{id="VIDEO_ID"}
```

### 3. **Videos locales** (nuevo)
```mdx
::video{src="/videos/mi-video.mp4" caption="Descripción del video"}
::video{src="/videos/mi-video.mp4" poster="/images/thumbnail.jpg"}
```

### 4. **Componente Video personalizado**
```mdx
---
import Video from '@/components/ui/Video.astro'
---

<Video 
  src="/videos/mi-video.mp4" 
  poster="/images/thumbnail.jpg"
  caption="Descripción del video"
  width="100%"
  controls={true}
/>
```

### 5. **HTML directo**
```mdx
<video controls width="100%">
  <source src="/videos/mi-video.mp4" type="video/mp4" />
  <source src="/videos/mi-video.webm" type="video/webm" />
  Tu navegador no soporta el elemento video.
</video>
```

## Características

- **Responsive**: Todos los videos se adaptan automáticamente al tamaño de pantalla
- **Lazy loading**: Los videos embebidos se cargan solo cuando son visibles
- **Accesibilidad**: Incluye títulos y descripciones apropiadas
- **Múltiples formatos**: Soporte para MP4 y WebM
- **Posters**: Imágenes de vista previa para videos locales

## Estructura de archivos recomendada

```
public/
  videos/
    mi-video.mp4
    mi-video.webm
  images/
    video-thumbnails/
      mi-video-poster.jpg
```

## Ejemplo completo en un post

```mdx
---
title: 'Mi Post con Videos'
pubDate: '2025-01-15'
order: 3
---

## Introducción

Este post incluye varios tipos de videos.

## Video de YouTube

::youtube{url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"}

## Video de Vimeo

::vimeo{url="https://vimeo.com/123456789"}

## Video local

::video{src="/videos/demo.mp4" caption="Demostración de la funcionalidad"}

## Video con componente personalizado

---
import Video from '@/components/ui/Video.astro'
---

<Video 
  src="/videos/tutorial.mp4" 
  poster="/images/tutorial-thumb.jpg"
  caption="Tutorial paso a paso"
  width="100%"
  controls={true}
  preload="metadata"
/>
```
