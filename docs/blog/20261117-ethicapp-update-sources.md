# Fuentes editoriales: novedades del segundo semestre de 2026

Revisión realizada el 17 de noviembre de 2026 para las entradas `src/content/blog/{es,en}/20261117-ethicapp-update.mdx`. El período considerado es julio–noviembre de 2026, hasta el día de revisión.

Se consultaron issues cerrados de EthicApp y AI Additions, distinguiendo cierres por implementación de cierres sin implementación, además de las versiones publicadas y los PR integrados de despliegue. El conector de GitHub permitió leer EthicApp; AI Additions y Deployment se consultaron mediante `gh api`. Deployment no devolvió issues cerrados para el período, por lo que sus PR de releases aportan la evidencia operativa.

## Funcionalidades y referencias

| Tema de la entrada | Fuentes principales |
| --- | --- |
| Organización de casos, diseños y actividades | [Casos #1008](https://github.com/EthicApp-Development/ethicapp-main/issues/1008), [Diseños #966](https://github.com/EthicApp-Development/ethicapp-main/issues/966), [Actividades #1046](https://github.com/EthicApp-Development/ethicapp-main/issues/1046) |
| Asistente de lanzamiento y desactivación de IA por actividad | [#965](https://github.com/EthicApp-Development/ethicapp-main/issues/965) |
| Videos y documentos complementarios | [YouTube #779](https://github.com/EthicApp-Development/ethicapp-main/issues/779), [Google Drive #789](https://github.com/EthicApp-Development/ethicapp-main/issues/789) |
| Case Analyst: evaluación, inventario de evidencias y temas | [#647](https://github.com/EthicApp-Development/ethicapp-main/issues/647), [#843](https://github.com/EthicApp-Development/ethicapp-main/issues/843) |
| Tipología de afirmaciones y modos del tutor | [#846](https://github.com/EthicApp-Development/ethicapp-main/issues/846), [#861](https://github.com/EthicApp-Development/ethicapp-main/issues/861), [AI Additions #209](https://github.com/EthicApp-Development/ethicapp-ai-additions/issues/209), [#211](https://github.com/EthicApp-Development/ethicapp-ai-additions/issues/211) |
| Panel docente y ocultación de nombres | [#892](https://github.com/EthicApp-Development/ethicapp-main/issues/892), completado el 31 de octubre |
| Duración de fases, modos de tiempo y extensión de un minuto | [#1105](https://github.com/EthicApp-Development/ethicapp-main/issues/1105), integrado en `main` el 12 de noviembre |
| Retroalimentación persistente e interfaz del estudiante | [#1123](https://github.com/EthicApp-Development/ethicapp-main/issues/1123), [#1124](https://github.com/EthicApp-Development/ethicapp-main/issues/1124) |
| Nueva rúbrica y evaluación independiente de revisiones | [AI Additions #267](https://github.com/EthicApp-Development/ethicapp-ai-additions/issues/267), completado el 15 de noviembre; [#272](https://github.com/EthicApp-Development/ethicapp-ai-additions/issues/272), [#273](https://github.com/EthicApp-Development/ethicapp-ai-additions/issues/273), [#275](https://github.com/EthicApp-Development/ethicapp-ai-additions/issues/275); integración en EthicApp [#1214](https://github.com/EthicApp-Development/ethicapp-main/issues/1214) |
| Agentes configurables y chat consultable al terminar | [#687](https://github.com/EthicApp-Development/ethicapp-main/issues/687), [#1168](https://github.com/EthicApp-Development/ethicapp-main/issues/1168) |
| Cobertura de contenidos | [AI Additions #294](https://github.com/EthicApp-Development/ethicapp-ai-additions/issues/294), [#295](https://github.com/EthicApp-Development/ethicapp-ai-additions/issues/295), [#296](https://github.com/EthicApp-Development/ethicapp-ai-additions/issues/296); integración y exportación en EthicApp [#1220](https://github.com/EthicApp-Development/ethicapp-main/issues/1220), [#1221](https://github.com/EthicApp-Development/ethicapp-main/issues/1221), [#1222](https://github.com/EthicApp-Development/ethicapp-main/issues/1222) |
| Reportes con aportes de servicios de IA | [#620](https://github.com/EthicApp-Development/ethicapp-main/issues/620) |
| Política institucional de IA | [#810](https://github.com/EthicApp-Development/ethicapp-main/issues/810), [#861](https://github.com/EthicApp-Development/ethicapp-main/issues/861) |
| Retiro del RUT y solicitudes de olvido | [#1067](https://github.com/EthicApp-Development/ethicapp-main/issues/1067), [#879](https://github.com/EthicApp-Development/ethicapp-main/issues/879), [AI Additions #213](https://github.com/EthicApp-Development/ethicapp-ai-additions/issues/213), [#214](https://github.com/EthicApp-Development/ethicapp-ai-additions/issues/214) |

## Publicación y despliegue

- Últimas versiones publicadas al revisar: [EthicApp v2026.11.16](https://github.com/EthicApp-Development/ethicapp-main/releases/tag/v2026.11.16) y [AI Additions v2026.11.16-ai-additions](https://github.com/EthicApp-Development/ethicapp-ai-additions/releases/tag/v2026.11.16-ai-additions).
- [Deployment #25](https://github.com/EthicApp-Development/ethicapp-deployment/pull/25) coordinó Case Analyst y los análisis de casos y diseños. [#26](https://github.com/EthicApp-Development/ethicapp-deployment/pull/26) coordinó los modos del tutor.
- [Deployment #43](https://github.com/EthicApp-Development/ethicapp-deployment/pull/43), integrado el 16 de noviembre, fija ambas versiones de esa fecha para staging e incluye cobertura de contenidos. Su descripción dice expresamente que fijar las versiones no ejecuta el despliegue.
- La entrada describe desarrollos incorporados y publicados; no afirma que todas las instalaciones, ni todos los entornos de producción, estén actualizados.

## Matices de investigación

- El issue AI Additions #267 registra mediciones preliminares de la nueva rúbrica sobre el mismo conjunto usado para ajustar sus reglas. Siguen pendientes validaciones con datos independientes y de la integración. No se trasladan esas cifras al post ni se afirman mejoras demostradas en aprendizaje.
- La nueva rúbrica se incorpora para sesiones en español. Según las decisiones del epic, la versión inglesa queda para trabajo posterior y las sesiones en inglés conservan sus prompts anteriores. La traducción del post lo explicita.
- Las solicitudes de olvido no implican borrar todos los materiales docentes: se conserva atribución según licencia y se aplican reglas de conservación y transferencia. El post evita prometer eliminación integral de datos o cumplimiento legal general.
- Los reportes se describen como CSV. No se ofrecen reportes PDF, exportación anónima ni una hoja de cálculo integrada.

## Capturas

Origen: `../ethicapp-presentations/202611-feature-showcase/`, especialmente `content-outline.md`, `screenshots.md` e `images/{es-CL,en-US}/`.

La demostración utiliza EthicApp `v2026.11.08` y AI Additions `v2026.11.07-ai-additions`. Las cuentas y respuestas son ficticias. Cada idioma del post utiliza las capturas de su propio idioma.

| Archivo publicado por idioma | PNG original |
| --- | --- |
| `launch-activity.webp` | `T18-launch-choose-design.png` |
| `launch-review.webp` | `T19-launch-description-ai.png` |
| `case-evidence.webp` | `T09-evidence-inventory.png` |
| `teacher-dashboard.webp` | `T21-dashboard-phase-responses.png` |
| `student-feedback.webp` | `S06-student-feedback.png` |
| `student-chat.webp` | `S08-student-group-chat.png` |
| `research-report.webp` | `T28-report-responses-csv.png` |

Se convirtieron a WebP sin pérdida conservando los 2880 × 1800 píxeles originales. Los catorce archivos, incluidos los dos pasos del lanzamiento en ambos idiomas, suman aproximadamente 2,31 MiB. Las imágenes se cargan de forma diferida y enlazan al archivo completo para ampliarlo.

Los pies de imagen distinguen las escalas anteriores del tutor, la ausencia del cronómetro en la captura del panel y el chat de ejemplo frente al nuevo modo de cobertura. T28 es una visualización del CSV preparada para la presentación, no una pantalla propia de EthicApp.

## Prueba de secuencia de lanzamiento

Las entradas utilizan MDX para incluir `ScreenshotSequence.astro`, sin cambiar sus URLs. La primera figura muestra los dos pasos con un fundido de 600 ms cada seis segundos. Incluye controles localizados de pausa y navegación, pausa al enfocar el componente con reanudación explícita y detención temporal fuera de la zona visible o con la pestaña oculta. Con movimiento reducido se ofrecen los pasos manualmente, sin transición ni reproducción automática. Sin JavaScript se muestran ambas capturas en secuencia. No se incorporaron dependencias nuevas.

La segunda captura añade aproximadamente 173 KiB al post en español; las imágenes conservan resolución completa y compresión sin pérdida.

Corrección de reproducción: el cursor sobre las capturas ya no detiene el avance. El foco pausa la secuencia hasta pulsar Reproducir, que funciona aunque el botón conserve el foco. Al entrar en la zona visible se solicita la carga de ambas imágenes para que la captura inactiva no dependa de la carga diferida del navegador.
