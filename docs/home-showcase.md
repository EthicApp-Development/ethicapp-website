# Capturas del showcase en el home

Las páginas `/es/` y `/en/` utilizan capturas de `../ethicapp-presentations/202611-feature-showcase/images/{es-CL,en-US}/`. Se conservan los 2880 × 1800 píxeles originales con WebP sin pérdida. Los participantes y respuestas de la demostración son ficticios.

## Hero

La secuencia muestra únicamente las capturas con fundidos automáticos, sin títulos, contador, marco adicional ni barra de navegación visible. Los controles permanecen disponibles para lectores de pantalla y se muestran al recibir foco por teclado.

La secuencia recorre cuatro vistas docentes:

1. `T21-dashboard-phase-responses.png`: fases y respuestas.
2. `T09-evidence-inventory.png`: análisis del caso.
3. `T19-launch-description-ai.png`: revisión del lanzamiento.
4. `T23-dashboard-group-chat.png`: seguimiento de la conversación grupal.

Reutiliza `ScreenshotSequence.astro` con diapositivas y etiqueta configurables. El blog mantiene sus dos pasos de lanzamiento. Cada seis segundos se realiza un fundido de 600 ms, con pausa y navegación manual. El cursor no pausa la secuencia. Se mantienen el comportamiento de foco, la preferencia de movimiento reducido y la detención temporal fuera de pantalla o con la pestaña oculta.

La primera imagen del hero tiene carga prioritaria. Las otras capturas del carrusel se solicitan al entrar en la zona visible. Sin JavaScript, los pasos se muestran consecutivamente.

## Highlights

- `T14-design-question.png`: diseño de preguntas y fases.
- `S08-student-group-chat.png`: discusión desde la interfaz del estudiante.
- `T22-dashboard-response-detail.png`: justificaciones desde el panel docente.

Se muestran en bloques amplios con texto e imagen, alternados en escritorio y apilados en pantallas pequeñas. Las capturas conservan su proporción completa y permiten abrir el archivo original para ampliarlo.

Los archivos ya publicados con el blog se comparten entre ambas páginas. Solo se añadieron tres capturas por idioma en `public/images/showcase/`. Las siete capturas utilizadas por cada home suman aproximadamente 1,24 MiB en español y 1,21 MiB en inglés, con carga diferida en los highlights.

La selección de capturas y sus textos localizados se mantiene en `src/lib/showcase.ts`. No se añadieron dependencias.
