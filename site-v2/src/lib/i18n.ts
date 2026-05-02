export const locales = ['es', 'en'] as const;

export type Locale = (typeof locales)[number];

type Section = {
  nav: string[];
  heroTitle: string;
  heroBody: string;
  featuresTitle: string;
  features: { title: string; description: string }[];
  experiencesTitle: string;
  experiencesBody: string;
  researchTitle: string;
  researchBody: string;
  teamTitle: string;
  developmentTitle: string;
  developmentBody: string;
  docs: string;
  blog: string;
};

export const copy: Record<Locale, Section> = {
  es: {
    nav: ['Inicio', 'Características', 'Experiencias', 'Documentación', 'Investigación', 'Equipo', 'Desarrollo', 'Blog'],
    heroTitle: 'Mejora la formación ética de los futuros profesionales',
    heroBody: 'EthicApp es una plataforma social para el análisis y discusión de casos en ética académica, profesional y científica.',
    featuresTitle: 'Características',
    features: [
      { title: 'Fácil de usar', description: 'Actividades prediseñadas y uso simple desde celular o computador.' },
      { title: 'Apoyo docente', description: 'Paneles con respuestas y estadísticas para retroalimentación oportuna.' },
      { title: 'Participación activa', description: 'Sesiones de casos con participación amplia y segura.' }
    ],
    experiencesTitle: 'Experiencias',
    experiencesBody: 'Universidades y equipos docentes han utilizado EthicApp para facilitar discusiones éticas en cursos de distintas disciplinas.',
    researchTitle: 'Investigación',
    researchBody: 'EthicApp apoya docencia e investigación sobre aprendizaje ético, argumentación y colaboración en educación superior.',
    teamTitle: 'Equipo',
    developmentTitle: 'Desarrollo',
    developmentBody: 'Proyecto open source. El desarrollo reciente ha sido automatizado en gran medida con Codex.',
    docs: 'Documentación',
    blog: 'Blog'
  },
  en: {
    nav: ['Home', 'Features', 'Experiences', 'Documentation', 'Research', 'Team', 'Development', 'Blog'],
    heroTitle: 'Improve ethics education for future professionals',
    heroBody: 'EthicApp is a social platform for analyzing and discussing academic, professional, and scientific ethics cases.',
    featuresTitle: 'Features',
    features: [
      { title: 'Easy to use', description: 'Ready-to-run activities usable from phones and laptops.' },
      { title: 'Teacher support', description: 'Real-time responses and stats for better feedback.' },
      { title: 'Active participation', description: 'Case sessions designed for broad and inclusive participation.' }
    ],
    experiencesTitle: 'Experiences',
    experiencesBody: 'Universities and teaching teams use EthicApp to support ethics discussions across disciplines.',
    researchTitle: 'Research',
    researchBody: 'EthicApp supports teaching and research on ethical learning, argumentation, and collaboration.',
    teamTitle: 'Team',
    developmentTitle: 'Development',
    developmentBody: 'Open-source project. Recent development has been largely automated with Codex.',
    docs: 'Documentation',
    blog: 'Blog'
  }
};
