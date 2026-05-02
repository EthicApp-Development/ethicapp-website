export const locales = ['es', 'en'] as const;

export type Locale = (typeof locales)[number];

type Publication = {
  title: string;
  citation: string;
  year: number;
  doi: string;
};

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
  publicationsTitle: string;
  teamTitle: string;
  developmentTitle: string;
  developmentBody: string;
  docs: string;
  blog: string;
  publications: Publication[];
};

const publications: Publication[] = [
  {
    title: 'Measurement of Teacher’s Orchestration Load: A Framework and a Case Study on Tool Flexibility',
    citation: 'Alvarez, C., Amarasinghe, I., Zurita, G., Hernandez-Leo, D., Hakami, L., & Rojas, L. (2025). IEEE Access, 13, 39035–39050.',
    year: 2025,
    doi: '10.1109/ACCESS.2025.3531241'
  },
  {
    title: 'Exploring Group Behavior and Discussion Productivity in Anonymous Chatrooms for Ethical Decision-Making',
    citation: 'Álvarez, C., Zurita, G., Farías, A., Yunga, M. (2024). CollabTech 2024, LNCS 14890. Springer.',
    year: 2024,
    doi: '10.1007/978-3-031-67998-8_5'
  },
  {
    title: 'Improving the Learning Experience in Ethics Education with Groupware: A Case Study',
    citation: 'Álvarez, C., Zurita, G., Rojas, L. A. (2024). HCII 2024, LNCS 14704. Springer.',
    year: 2024,
    doi: '10.1007/978-3-031-61305-0_1'
  },
  {
    title: 'Analyzing Peer Influence in Ethical Judgment: Collaborative Ranking in a Case-Based Scenario',
    citation: 'Álvarez, C., Zurita, G., Carvallo, A. (2023). CollabTech 2023, LNCS 14199. Springer.',
    year: 2023,
    doi: '10.1007/978-3-031-42141-9_2'
  },
  {
    title: 'Applying the concept of implicit HCI to a groupware environment for teaching ethics',
    citation: 'Alvarez, C., Zurita, G. & Baloian, N. (2022). Personal and Ubiquitous Computing, 26, 1373–1391.',
    year: 2022,
    doi: '10.1007/s00779-020-01495-z'
  },
  {
    title: 'Scaffolding of Intuitionist Ethical Reasoning with Groupware: Do Students’ Stances Change in Different Countries?',
    citation: 'Álvarez, C., Zurita, G., Farías, A., Collazos, C., González-Calleros, J. M., Yunga, M., & Pezoa, Á. (2022). CollabTech 2022, LNCS 13632. Springer.',
    year: 2022,
    doi: '10.1007/978-3-031-20218-6_18'
  },
  {
    title: 'Automatic Content Analysis of Student Moral Discourse in a Collaborative Learning Activity',
    citation: 'Alvarez, C., Zurita, G., Carvallo, A., Ramírez, P., Bravo, E., & Baloian, N. (2021). CollabTech 2021, LNCS 12856. Springer.',
    year: 2021,
    doi: '10.1007/978-3-030-85071-5_1'
  },
  {
    title: 'A Collaborative Pedagogical Activity Design for Teaching Ethics in a Business School',
    citation: 'Alvarez, C., Zurita, G., & Farias, A. (2021). EDULEARN21 Proceedings, 3612–3622.',
    year: 2021,
    doi: '10.21125/edulearn.2021.0761'
  },
  {
    title: 'A Social Platform for Fostering Ethical Education through Role-Playing',
    citation: 'Alvarez, C., Zurita, G., Hasbún, B., Peñafiel, S., & Pezoa, Á. (2021). IntechOpen.',
    year: 2021,
    doi: '10.5772/intechopen.96602'
  },
  {
    title: 'A CSCL script for supporting moral reasoning in the ethics classroom',
    citation: 'Alvarez, C., Zurita, G., Baloian, N., Jerez, O., & Peñafiel, S. (2019). LNCS 11677, 62–79.',
    year: 2019,
    doi: '10.1007/978-3-030-28011-6_5'
  }
];

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
    researchBody: 'Publicaciones seleccionadas sobre uso de EthicApp en aula y desarrollos técnicos asociados.',
    publicationsTitle: 'Publicaciones',
    teamTitle: 'Equipo',
    developmentTitle: 'Desarrollo',
    developmentBody: 'Proyecto open source. El desarrollo reciente ha sido automatizado en gran medida con Codex.',
    docs: 'Documentación',
    blog: 'Blog',
    publications
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
    researchBody: 'Selected publications on EthicApp classroom use and related technical developments.',
    publicationsTitle: 'Publications',
    teamTitle: 'Team',
    developmentTitle: 'Development',
    developmentBody: 'Open-source project. Recent development has been largely automated with Codex.',
    docs: 'Documentation',
    blog: 'Blog',
    publications
  }
};
