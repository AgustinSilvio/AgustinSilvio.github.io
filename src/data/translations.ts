// src/data/translations.ts

export const languages = {
    es: "Español",
    en: "English"
};

export const ui = {
    es: {
        nav: {
            home: "Inicio",
            projects: "Proyectos",
            blog: "Artículos",
            about: "Sobre mí",
            contact: "Contacto"
        },
        sections: {
            servicesTitle: "Servicios & Consultoría",
            servicesDesc: "Soluciones cuantitativas, actuariales y tecnológicas diseñadas para transformar datos complejos en decisiones estratégicas y procesos eficientes.",
            recommendationsTitle: "Recomendaciones & Endosos",
            recommendationsDesc: "Testimonios de directivos, gerentes y colegas técnicos con quienes he compartido proyectos y equipos de trabajo.",
            verified: "Verificado",
            impact: "Impacto"
        },
        services: [
            {
                icon: "🛡️",
                title: "Consultoría Actuarial & Tarificación",
                subtitle: "Actuarial & Quantitative Consulting",
                description: "Diseño y evaluación económica-financiera de contratos contingentes. Desarrollo de modelos de tarificación y estimación de reservas.",
                tags: ["Tarificación", "Contratos Contingentes", "Seguros"],
                benefit: "Protección de la rentabilidad y gestión adecuada del riesgo operativo."
            },
            {
                icon: "📈",
                title: "Gestión de Riesgos & Estrategia Financiera",
                subtitle: "Risk Management & Financial Strategy",
                description: "Modelos actuariales y estadísticos para reportes, proyecciones financieras y asesoramiento en estrategias de inversión, ahorro y análisis de portafolios.",
                tags: ["Modelos Estadísticos", "Capital", "Proyecciones"],
                benefit: "Optimización de la solvencia y mitigación de pérdidas no planificadas."
            },
            {
                icon: "📊",
                title: "Business Intelligence & Tableros de Control",
                subtitle: "Business Intelligence & Executive Dashboards",
                description: "Diseño de paneles de control interactivos y reportes ejecutivos automatizados para el monitoreo en tiempo real de indicadores clave.",
                tags: ["Indicadores Clave", "Reportes Ejecutivos", "BI"],
                benefit: "Toma de decisiones estratégicas basada en análisis cuantitativo riguroso."
            },
            {
                icon: "⚙️",
                title: "Automatización & Arquitectura de Datos",
                subtitle: "Process Automation & Data Architecture",
                description: "Conversión de procesos manuales y planillas frágiles en sistemas automatizados, auditables y estructurados sobre bases de datos relacionales.",
                tags: ["ETL / Pipelines", "Bases de Datos", "Optimización"],
                benefit: "Eficiencia operativa, eliminación de errores humanos y escalabilidad."
            }
        ],
        benefits: [
            { title: "Gestión Financiera & de Riesgos", desc: "Optimización continua respaldada en evidencia matemática." },
            { title: "Decisiones Basadas en Datos", desc: "Reducción de la incertidumbre en operaciones complejas." },
            { title: "Eficiencia Operativa", desc: "Automatización de procesos repetitivos y reportes masivos." }
        ],
        recommendations: [
            {
                name: "Guillermo D. Coccoz",
                role: "Dir. Ejecutivo de Control de Gestión y Administración",
                image: "/Guillermo_coccoz.png",
                highlight: "Un profesional al cual recomiendo sin reparo alguno. Alcanzó los mayores niveles de desempeño esperables.",
                text: "Agustín es un profesional al cual recomiendo sin reparo alguno. Ha cumplido con éxito todas las etapas del plan de capacitación y entrenamiento previsto en nuestro Programa de Jóvenes Profesionales alcanzando los mayores niveles de desempeño esperables. También ha adquirido una invalorable experiencia trabajando en una organización compleja, poniendo a prueba sus capacidades de gestión y su inteligencia emocional."
            },
            {
                name: "Verónica Martino",
                role: "Gerente en Gestión del Talento",
                image: "/Veronica_martino.png",
                highlight: "Enorme disposición por aprender y aportar valor desde una mirada curiosa y fresca.",
                text: "Tuve la oportunidad de acompañar a Agustín durante su paso por el Programa de Jóvenes Profesionales de GrupoST, donde demostró una enorme disposición por aprender y aportar valor desde una mirada curiosa y fresca. Siempre con ganas de crecer e ir por más, lo cual será sin dudas el motor clave en su crecimiento profesional."
            },
            {
                name: "Jessica Viola",
                role: "Pricing Actuary",
                image: "/Jessica_viola.png",
                highlight: "Aportó ideas y su motivación generaba un muy buen clima de trabajo en equipo.",
                text: "En el tiempo que trabajé con Agustín, demostró proactividad, muchas ganas de aprender y predisposición para colaborar. Siempre mostró curiosidad por entender los temas, aportó ideas y su motivación generaba un muy buen clima de trabajo en equipo."
            }
        ]
    },
    en: {
        nav: {
            home: "Home",
            projects: "Projects",
            blog: "Writing",
            about: "About",
            contact: "Contact"
        },
        sections: {
            servicesTitle: "Services & Consulting",
            servicesDesc: "Quantitative, actuarial, and data-driven solutions designed to transform complex data into strategic decisions and automated workflows.",
            recommendationsTitle: "Recommendations & Endorsements",
            recommendationsDesc: "Endorsements from executives, managers, and technical peers with whom I have collaborated on key initiatives.",
            verified: "Verified",
            impact: "Impact"
        },
        services: [
            {
                icon: "🛡️",
                title: "Actuarial Consulting & Pricing",
                subtitle: "Actuarial & Quantitative Consulting",
                description: "Economic and financial design of contingent contracts. Development of pricing models and loss reserve estimations.",
                tags: ["Pricing", "Contingent Contracts", "Insurance"],
                benefit: "Profitability protection and effective management of operational risk."
            },
            {
                icon: "📈",
                title: "Risk Management & Financial Strategy",
                subtitle: "Risk Management & Financial Strategy",
                description: "Actuarial and statistical modeling for executive reporting, financial projections, and portfolio analysis.",
                tags: ["Statistical Models", "Capital", "Projections"],
                benefit: "Solvency optimization and mitigation of unplanned capital losses."
            },
            {
                icon: "📊",
                title: "Business Intelligence & Executive Dashboards",
                subtitle: "Business Intelligence & Executive Dashboards",
                description: "Interactive dashboard engineering and automated executive reporting for real-time tracking of core performance indicators.",
                tags: ["Key Indicators", "Executive Reports", "BI"],
                benefit: "Evidence-based strategic decision-making powered by rigorous analytics."
            },
            {
                icon: "⚙️",
                title: "Process Automation & Data Architecture",
                subtitle: "Process Automation & Data Architecture",
                description: "Conversion of manual, spreadsheet-heavy workflows into automated, fully auditable data systems on relational databases.",
                tags: ["ETL / Pipelines", "Databases", "Optimization"],
                benefit: "Operational efficiency, elimination of human errors, and scalable data flow."
            }
        ],
        benefits: [
            { title: "Financial & Risk Management", desc: "Continuous optimization backed by mathematical evidence." },
            { title: "Data-Driven Decisions", desc: "Uncertainty reduction across high-stakes business operations." },
            { title: "Operational Efficiency", desc: "Elimination of repetitive manual reporting tasks." }
        ],
        recommendations: [
            {
                name: "Guillermo D. Coccoz",
                role: "Executive Director of Management Control & Administration",
                image: "/Guillermo_coccoz.png",
                highlight: "A professional whom I recommend without reservation. He achieved the highest expected performance levels.",
                text: "Agustín is a professional whom I recommend without reservation. He successfully fulfilled all milestones in our Young Professionals Program, achieving the highest performance levels while proving his management and emotional intelligence skills in a complex corporate structure."
            },
            {
                name: "Verónica Martino",
                role: "Talent Management Leader",
                image: "/Veronica_martino.png",
                highlight: "Outstanding eagerness to learn and deliver high value from a fresh, curious perspective.",
                text: "I had the pleasure of mentoring Agustín during his journey through our Young Professionals Program, where he demonstrated remarkable drive to learn and contribute value through a curious and innovative mindset. His ambition to continually improve will undoubtedly drive his professional career."
            },
            {
                name: "Jessica Viola",
                role: "Pricing Actuary",
                image: "/Jessica_viola.png",
                highlight: "Contributed valuable insights and his drive fostered an exceptional team atmosphere.",
                text: "Throughout our collaborative work, Agustín demonstrated great proactivity, strong analytical curiosity, and willingness to assist. He consistently contributed actionable ideas and positive energy to the team."
            }
        ]
    }
};