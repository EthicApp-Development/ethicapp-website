document.addEventListener("DOMContentLoaded", function() {
    var translations = {
        en: {
            nav: ["Home", "Blog", "Features", "Experiences", "Testimonials", "Documentation", "Research", "Team", "Development", "Language"],
            header: {
                title: "Improve the ethical training of future professionals in various fields of knowledge",
                description: "EthicApp: Social platform for the analysis and discussion of cases in academic, professional, and scientific ethics.",
                img: "screenshots/workbench.jpg"
            },
            characteristics: {
                title: "Features",
                easy2use: "Easy to use",
                teacherSupport: "Teacher support",
                sessions: "Highly participative case sessions",
                centurySkills: "Focused on 21st-century skills",
                teachingResearch: "Designed for teaching and research"
            },
            details: {
                easy2useImg: "screenshots/design-view.jpg",
                easy2useTitle: "Easy and Quick to Use",
                easy2useDescription: "Pre-designed ethics cases and activities available for use; usable from phones and laptops, from the classroom and home.",
                teacherSupportImg: "screenshots/dashboard.jpg",
                teacherSupportTitle: "Teacher Support",
                teacherSupportDescription: "Displays student responses and real-time statistics to the teacher, allowing for better feedback and personalized student tracking.",
                sessionImg: "screenshots/designs.jpg",
                sessionsTitle: "Highly Participative Case Sessions",
                sessionsDescription: "All students participate, with equal opportunities, and either anonymously or identified as required.",
                centurySkillsImg: "screenshots/student-chat.jpg",
                centurySkillsTitle: "Focused on Developing 21st Century Skills",
                centurySkillsDescription: "Ethics case analysis activities that stimulate critical thinking, the development and exchange of arguments and ideas, respectful observation and analysis of different points of view, written communication, and collaborative work.",
                teachingResearchImg: "screenshots/student-response.jpg",
                teachingResearchTitle: "Designed for Teaching and Research",
                teachingResearchDescription: "Designed to be used by ethics teachers as well as teachers from other disciplines. Data collected by EthicApp can be exported for research with student consent and in compliance with current data protection legislation."
            },
            experiences: {
                title: "Experiences"
            },
            investigations: {
                title: "Investigations",
                description: "The following chronological list of publications presents studies related to the use of EthicApp in the classroom as well as technical aspects related to its development:"
            },
            team: {
                title: "Team"
            },
            development: {
                title: "Get involved!",
                description: "We have an organization on Github where we carry out the development of EthicApp",
                githubTitle: "Visit us on Github",
                githubDescription: "Work on the development of EthicApp",
                mitTitle: "Open source software",
                mitDescription: "Distributed under the MIT license.",
                discordTitle: "Join the discussion",
                discordDescription: "We have a server on Discord."
            }
        },
        es: {
            nav: ["Inicio", "Novedades", "Características", "Experiencias", "Testimonios", "Documentación", "Investigación", "Equipo", "Desarrollo", "Idioma"],
            header: {
                title: "Mejora la formación ética de los futuros profesionales en distintas áreas del conocimiento",
                description: "EthicApp: Plataforma social para el análisis y discusión de casos en ética académica, profesional y científica.",
                img: "screenshots/workbench.jpg"
            },
            characteristics: {
                title: "Características",
                easy2use: "Fácil de usar",
                teacherSupport: "Un apoyo al profesor",
                sessions: "Sesiones de casos altamente participativas",
                centurySkills: "Enfocada en habilidades del siglo 21",
                teachingResearch: "Pensada para la docencia e investigación"
            },
            details: {
                easy2useImg: "screenshots/design-view.jpg",
                easy2useTitle: "De fácil y rápido uso",
                easy2useDescription: "Casos de ética y actividades prediseñadas disponibles para el uso; Utilizable desde teléfonos y computadores portátiles, desde la sala de clases y la casa.",
                teacherSupportImg: "screenshots/dashboard.jpg",
                teacherSupportTitle: "Un apoyo al profesor",
                teacherSupportDescription: "Presenta respuestas de los estudiantes y estadísticas en tiempo real al profesor, permitiéndole elaborar una mejor retroalimentación, y un seguimiento personalizado a los estudiantes.",
                sessionImg: "screenshots/designs.jpg",
                sessionsTitle: "Sesiones de casos altamente participativas",
                sessionsDescription: "Todos los estudiantes participan, con igualdad de oportunidades, y en forma anónima o identificada según se requiera.",
                centurySkillsImg: "screenshots/student-chat.jpg",
                centurySkillsTitle: "Enfocada en el desarrollo habilidades del siglo 21",
                centurySkillsDescription: "Actividades de análisis de casos de ética que estimulan el pensamiento crítico, la elaboración e intercambio de argumentos e ideas, la observación y análisis respetuoso de distintos puntos de vista, la comunicación escrita y trabajo colaborativo.",
                teachingResearchImg: "screenshots/student-response.jpg",
                teachingResearchTitle: "Pensada para la docencia y la investigación",
                teachingResearchDescription: "Diseñada para ser utilizada tanto por profesores de ética, como por profesores de otras disciplinas. Los datos recopilados por EthicApp pueden ser exportados para investigación bajo el consentimiento de los estudiantes, y respetando la legislación vigente en materia de protección de datos personales."
            },
            experiences: {
                title: "Experiencias"
            },
            investigations: {
                title: "Investigaciones",
                description: "Las siguiente lista cronológica de publicaciones presenta estudios que se relacionan tanto con el uso de EthicApp en aula como con aspectos técnicos relativos a su desarrollo:"
            },
            team: {
                title: "Equipo"
            },
            development: {
                title: "¡Intégrate!",
                description: "Contamos con una organización en Github donde llevamos a delante el desarrollo de EthicApp",
                githubTitle: "Visítanos en Github",
                githubDescription: "Trabaja en el desarrollo de EthicApp",
                mitTitle: "Software de código abierto",
                mitDescription: "Distribuido bajo licencia del MIT.",
                discordTitle: "Únete a la discusión",
                discordDescription: "Contamos con un servidor en Discord."
            }
        }
    };

    // Inicializa Polyglot con el idioma predeterminado
    var polyglot = new Polyglot({
        phrases: translations.es,
        locale: 'es'
    });

    function updateTranslations() {
        document.querySelectorAll('[data-i18n]').forEach(function(element) {
            var key = element.getAttribute('data-i18n');
            element.textContent = polyglot.t(key);
        });

        // Actualiza todas las imágenes
        document.querySelectorAll('[data-i18n-img]').forEach(function(imgElement) {
            var imgKey = imgElement.getAttribute('data-i18n-img');
            imgElement.src = "./assets/" + polyglot.t(imgKey);
        });
    }

    // Llama a updateTranslations al cargar la página
    updateTranslations();

    function loadBlogContent(locale) {
        var filePath = "./blog/novedades_" + locale + ".md";
        fetch(filePath)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(text => {
                document.getElementById('blog-content').innerHTML = marked.parse(text);
            })
            .catch(error => {
                console.error('There has been a problem with your fetch operation:', error);
                document.getElementById('blog-content').innerHTML = "<p>Error loading blog content.</p>";
            });
    }

    window.changeLocale = function(locale) {
        polyglot.locale(locale);
        polyglot.replace(translations[locale]);
        updateTranslations();
        loadBlogContent(locale);
    };

    // Llama a loadBlogContent al cargar la página con el idioma predeterminado
    loadBlogContent('es');

    // Agregar evento click a los items del menú de idiomas
    document.querySelectorAll('.dropdown-item').forEach(function(item) {
        item.addEventListener('click', function() {
            var language = item.getAttribute('data-lang');
            changeLocale(language);
        });
    });
});
