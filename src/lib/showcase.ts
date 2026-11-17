import type { Locale } from './i18n';

// Reuse the full-resolution blog assets where the showcase captures coincide.
export function teacherShowcase(locale: Locale) {
  const es = locale === 'es';
  const blog = `/images/blog/20261117-ethicapp-update/${locale}`;
  const home = `/images/showcase/${locale}`;
  return [
    {
      src: `${blog}/teacher-dashboard.webp`,
      title: es ? 'Sigue el avance de tu clase' : 'Follow your class in real time',
      alt: es ? 'Panel docente de EthicApp con las fases y las respuestas de los participantes.' : 'EthicApp teacher dashboard showing phases and participant responses.',
      caption: es ? 'Las respuestas y los controles de la actividad, en una misma vista.' : 'Responses and activity controls, together in one view.'
    },
    {
      src: `${blog}/case-evidence.webp`,
      title: es ? 'Prepara tus casos con apoyo de IA' : 'Prepare your cases with AI support',
      alt: es ? 'Inventario de evidencias de un caso, con hechos y citas para revisión docente.' : 'Case evidence inventory with facts and quotations for teacher review.',
      caption: es ? 'Revisa los hechos y las citas que servirán de contexto para argumentar.' : 'Review the facts and quotations that provide context for argumentation.'
    },
    {
      src: `${blog}/launch-review.webp`,
      title: es ? 'Decide cómo llevar el diseño al aula' : 'Choose how to bring your design to class',
      alt: es ? 'Asistente para identificar una actividad y revisar sus servicios de IA antes del lanzamiento.' : 'Wizard for identifying an activity and reviewing its AI services before launch.',
      caption: es ? 'Identifica la sesión y elige si utilizarás los apoyos de IA previstos.' : 'Identify the session and choose whether to use its planned AI support.'
    },
    {
      src: `${home}/teacher-chat.webp`,
      title: es ? 'Acompaña la discusión de cada grupo' : 'Guide each group’s discussion',
      alt: es ? 'Panel docente con las respuestas de un grupo y su conversación en un panel lateral.' : 'Teacher dashboard with a group’s responses and conversation in a side panel.',
      caption: es ? 'Consulta las conversaciones junto a las respuestas de los participantes.' : 'Read group conversations alongside participant responses.'
    }
  ];
}

export function homeHighlights(locale: Locale) {
  const es = locale === 'es';
  const home = `/images/showcase/${locale}`;
  return [
    {
      title: es ? 'Diseña una experiencia para tu clase' : 'Design an experience for your class',
      text: es ? 'Combina fases individuales y grupales, formula preguntas y pide justificaciones para explorar un dilema desde distintas perspectivas.' : 'Combine individual and group phases, write questions and ask for justifications to explore a dilemma from different perspectives.',
      image: `${home}/design-question.webp`,
      alt: es ? 'Editor docente con una pregunta de diferencial semántico, justificación escrita y opciones para una fase grupal.' : 'Teacher editor with a semantic differential question, written justification and group-phase settings.',
      label: es ? 'Diseño de actividades' : 'Activity design'
    },
    {
      title: es ? 'Da espacio a la discusión entre pares' : 'Make room for peer discussion',
      text: es ? 'Los estudiantes consultan el caso, expresan su posición y conversan con su grupo. Cuando el diseño lo contempla, un agente de IA puede acompañar el intercambio.' : 'Students read the case, express their position and discuss it with their group. When included in the design, an AI agent can support the exchange.',
      image: `/images/blog/20261117-ethicapp-update/${locale}/student-chat.webp`,
      alt: es ? 'Vista del estudiante con las instrucciones de una fase y el chat de grupo con un agente de IA.' : 'Student view with phase instructions and a group chat featuring an AI agent.',
      label: es ? 'Participación y diálogo' : 'Participation and dialogue'
    },
    {
      title: es ? 'Comprende las razones detrás de cada respuesta' : 'Understand the reasons behind each response',
      text: es ? 'Sigue la participación en tiempo real y abre una respuesta para leer su justificación sin perder la vista general de la clase.' : 'Follow participation in real time and open a response to read its justification while keeping the class overview in sight.',
      image: `${home}/response-detail.webp`,
      alt: es ? 'Panel docente con la tabla de participantes y la justificación de una respuesta en un panel lateral.' : 'Teacher dashboard with the participant table and a response’s written justification in a side panel.',
      label: es ? 'Seguimiento docente' : 'Teacher insight'
    }
  ];
}
