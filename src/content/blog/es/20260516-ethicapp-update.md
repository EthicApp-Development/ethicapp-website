---
title: "Avances recientes en el desarrollo de EthicApp"
description: "Durante el último mes, EthicApp avanzó en su modernización técnica, preparación para despliegues productivos, fortalecimiento de seguridad, mejoras para docentes y una nueva arquitectura para integrar servicios externos basados en IA."
pubDate: 2026-05-16 19:00 UTC-4
locale: es
---

# Avances recientes en el desarrollo de EthicApp
*16 de Mayo de 2026*

Durante el último mes, el equipo de desarrollo de EthicApp completó un conjunto importante de mejoras orientadas a fortalecer la plataforma, preparar despliegues productivos más robustos y habilitar nuevas capacidades pedagógicas basadas en servicios externos e inteligencia artificial.

Estos avances forman parte del proceso continuo de modernización de EthicApp. La plataforma mantiene compatibilidad con su funcionalidad histórica, al mismo tiempo que incorpora una arquitectura más segura, modular y preparada para nuevas formas de apoyo a la enseñanza de la ética en educación superior.

## Preparación de EthicApp para despliegues productivos

Una de las prioridades principales de este periodo ha sido preparar EthicApp para operar de manera más confiable en ambientes productivos. Se incorporó un contrato canónico de entorno que documenta explícitamente la configuración requerida por cada servicio, qué valores corresponden a secretos, qué variables se resuelven en tiempo de ejecución y cómo la configuración debe proyectarse en archivos específicos para cada ambiente.

También se incorporó un flujo de trabajo para publicar imágenes en GitHub Container Registry, con el objetivo de distribuir imágenes versionadas para los distintos servicios que componen la plataforma. Esto permite separar con mayor claridad el desarrollo de la aplicación respecto de los repositorios y configuraciones específicas de despliegue.

Además, la configuración pública de los frontends basados en Vite fue trasladada a archivos generados en tiempo de ejecución. Esto hace que las imágenes publicadas sean más neutrales respecto del ambiente, evitando tener que reconstruirlas cuando cambian ciertos parámetros públicos, como URLs de servicios o claves públicas de reCAPTCHA.

## Mayor robustez de infraestructura y sesiones

La gestión de sesiones fue migrada desde mecanismos locales o en memoria hacia Redis. Esto permite un manejo más confiable tanto de sesiones de autenticación como de sesiones de la aplicación heredada, usando cookies diferenciadas y parámetros configurables de seguridad, duración y almacenamiento.

También se avanzó en la separación de roles de Redis en producción, distinguiendo entre almacenamiento de sesiones y almacenamiento de caché para datos derivados de la base de datos. Esta separación favorece una administración más clara de políticas de memoria, reglas de expiración y estrategias de reemplazo de datos.

En paralelo, se realizaron ajustes relevantes en la configuración de Nginx para que la plataforma pueda operar correctamente detrás de proxies TLS, preservar el esquema HTTPS original, evitar redirecciones absolutas incorrectas y resolver dinámicamente servicios internos mediante DNS de Docker. Estos cambios buscan mejorar la resiliencia después de reinicios de contenedores y reducir problemas comunes relacionados con cookies seguras, redirecciones y rutas internas.

## Modernización del backend heredado

Otro hito importante fue la actualización del backend heredado de EthicApp a Express 5. Esto requirió adaptar rutas antiguas, eliminar patrones que ya no eran compatibles con el nuevo sistema de enrutamiento y revisar integraciones internas, especialmente aquellas relacionadas con la consola de administración y la suplantación de profesores.

El mecanismo anterior de carga de archivos basado en `express-busboy` fue reemplazado por middleware específico por ruta usando `multer`. La nueva implementación maneja cargas de PDF y avatares mediante rutas acotadas, utiliza un área temporal de preparación, valida tipos MIME para cada caso de uso y limpia archivos temporales cuando ocurren errores. Esto reduce la exposición a riesgos y hace más explícito el manejo de archivos subidos por usuarios.

Al mismo tiempo, las pruebas automatizadas fueron modernizadas usando el ejecutor nativo de pruebas de Node.js. Se agregaron nuevas pruebas para carga de archivos, suplantación en la consola de administración y sincronización de sesiones heredadas. Las compilaciones Docker de servicios críticos ahora también incluyen etapas de prueba, de modo que las imágenes no pueden construirse correctamente si no pasan las verificaciones automatizadas correspondientes.

## Fortalecimiento de la seguridad de la plataforma

Durante este ciclo se agregó protección CSRF a los servicios modernos de autenticación y administración, y el flujo de cierre de sesión heredado fue migrado a un flujo protegido mediante `POST`. Esto reduce riesgos asociados a acciones sensibles que podrían activarse mediante enlaces o solicitudes no autorizadas.

También se eliminaron superficies obsoletas de autenticación del backend heredado. Vistas y controladores antiguos de inicio de sesión, registro, recuperación de contraseña, autenticación local y OAuth con Google fueron removidos una vez que dejaron de ser necesarios, consolidando estos flujos en el backend moderno de autenticación. Esta limpieza reduce duplicación, elimina dependencias antiguas y ayuda a mantener un modelo de seguridad más coherente.

Otras mejoras incluyeron correcciones a la configuración SMTP para producción, asumiendo TLS implícito para el envío seguro de correos, junto con refinamientos en el manejo de reCAPTCHA en la consola de administración y en los flujos de recuperación de contraseña.

## Mejoras para la experiencia docente

Se realizaron varias mejoras en la interfaz docente para hacer más fluida la creación, selección y reutilización de materiales. Se mejoraron la selección de diseños, el comportamiento de actualización del catálogo docente y los campos de búsqueda. Los diseños compartidos ahora también muestran sus autores o creadores, junto con ajustes de presentación que hacen más clara la navegación.

Otra línea importante de trabajo fue la relación entre casos y diseños. La plataforma ahora soporta enlaces a casos asociados en actividades docentes, tarjetas de casos en vistas docentes y la importación de diseños compartidos junto con sus casos correspondientes. Esto facilita que las y los docentes reutilicen materiales completos, preservando la conexión entre la estructura instruccional y los dilemas éticos que la sustentan.

También se incorporaron refinamientos de identidad visual, incluyendo la fuente Nunito, favicons y logos servidos como activos compartidos desde Nginx. Estos cambios contribuyen a una experiencia más consistente entre los distintos módulos de la plataforma.

## Hacia una arquitectura de servicios externos

Además de los cambios ya integrados en la rama principal, ha continuado el trabajo en la rama `external-services-architecture`, orientado a habilitar la integración de servicios externos con EthicApp. Esta línea de desarrollo busca permitir que capacidades futuras, como agentes conversacionales, tutores de argumentación o servicios de retroalimentación automatizada, se conecten mediante contratos explícitos y configuraciones asociadas a diseños pedagógicos.

Esta arquitectura introduce un catálogo de servicios externos, un manifiesto de configuración, adaptadores simulados, endpoints de backend y componentes de interfaz para mostrar resultados a estudiantes. También extiende el esquema de diseño para que fases específicas de una actividad puedan activar servicios seleccionados.

Como prueba de concepto inicial, se incluyeron adaptadores simulados para revisión de respuestas basada en IA y agentes de chat, junto con un servicio externo simulado y dockerizado. Estos componentes permiten validar la arquitectura sin depender todavía de un proveedor específico de inteligencia artificial, manteniendo una separación clara entre EthicApp y los servicios que eventualmente podrían extenderla.

## Un paso hacia una plataforma más modular

En conjunto, estos avances fortalecen la base técnica de EthicApp en varias dimensiones: despliegue, seguridad, mantenibilidad, experiencia docente e integración futura con servicios inteligentes. El trabajo reciente no se limita a nuevas funcionalidades visibles; también involucra una reorganización más profunda de la plataforma para hacerla más confiable, auditable y extensible.

Este proceso es especialmente relevante para los objetivos de IntelligentEthicApp, que busca incorporar inteligencia artificial generativa de manera pedagógicamente fundamentada, manteniendo a docentes en control del diseño instruccional y de las decisiones educativas. La nueva arquitectura de servicios externos abre el camino para experimentar con agentes y tutores especializados, sin comprometer la estabilidad del núcleo de EthicApp ni acoplar la plataforma a un único proveedor tecnológico.
