export const languages = {
  es: "🇪🇸",
  en: "🇺🇸",
};

export const defaultLang = "es";

export const ui = {
  en: {
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.about": "About Me",
    "nav.contact": "Contact",
    "nav.email": "adangrx@gmail.com",
    "about.title": "About Me",
    "about.me":
      "Senior Ruby on Rails engineer with <strong>10+ years of experience</strong> building scalable, maintainable products. After stepping into an Engineering Manager role, I realised my passion lies in hands-on engineering — writing great code, solving hard problems, and working with modern technology stacks. Currently completing a <strong>Master's in Artificial Intelligence</strong>.",
    "about.open": "Open to work",
    "about.hey": "Hey, I'm Adán",
    "about.contact": "Contact me",
    "about.linkedin": "Linkedin",
    "about.myself": `
        <p>
        Hi, I'm Adán. My programming journey began with Visual Basic when I was just over 12 years old. Over time, I have specialized in languages like <strong>Ruby, Python, and JavaScript</strong>.
        </p>
        <br>
        <p>
        Although my dream was always to be a video game programmer, I grew up in a small,
almost uninhabited town in Tenerife, a beautiful island in Spain, where opportunities
in that field were limited. Therefore, I focused on web programming, specializing in the
development of web and mobile applications.
        </p>
        <br>
        <p>
        Throughout my career, I have had the privilege of working in various companies, which
has enriched my knowledge and allowed me to collaborate with great partners such
as <strong>Microsoft, Shopify, Coca-Cola, Universal</strong>... I am particularly excited about
opportunities where strong software engineering foundations meet AI-driven development practices.
        </p>
        <br>
        <p>
        I am currently completing a <strong>Master's in Artificial Intelligence</strong>, deepening my knowledge in
machine learning, agent-based architectures, sub-agents, skills orchestration and parallelisation strategies.
        </p>
        <br>
        <p>
        As a developer, I have worked with a wide range of technologies, including Rails,
React, React Native (with Expo), FastAPI, MongoDB, MySQL, PostgreSQL,
Docker, Kubernetes, Ansible, Terraform, Redis, and AWS (EC2, Lambda, S3, SQS, DynamoDB), among others.
        </p>
        <br>
        <p>
        Outside of work, I am passionate about surfing and van life, music, AI & agent systems,
game development, and spending time with my family.
        </p>`,
    "about.experience": [
      {
        date: "Jan 2025 – Present",
        title: "Engineering Manager (Technical)",
        company: "Libnova",
        description:
          "<p>Dockerized the entire legacy platform from scratch and orchestrated production deployments across all clients, each running highly customized environments, achieving consistent, zero-downtime rollouts at scale for the first time in the company's history.</p><br><p>Designed and owned the cloud-native infrastructure stack: Docker, Kubernetes, Ansible, and Terraform; delivered measurable improvements in platform stability, scalability, and release confidence.</p><br><p>Standardized engineering practices across the team: Git branching strategy, PR review workflows, CI/CD pipelines, and coding standards, reducing integration friction and onboarding time for new engineers.</p><br><p>Mentored a team of junior engineers through structured code reviews, pair-programming, and technical workshops, noticeably accelerating individual growth and team velocity.</p>",
        link: "",
      },
      {
        date: "2024 (Two contracts)",
        title: "Solutions Architect → Senior Ruby on Rails Engineer",
        company: "Invoke (Temporal)",
        description:
          "<p>Designed a production document-processing pipeline on AWS Lambda, integrating GPT-4o, Ollama, and Claude LLMs with a custom business-rule engine (BRE) for automated document classification — implementing AI in a real production workflow, not a demo.</p><br><p>Reduced GitLab CI/CD pipeline execution time from 45 minutes to 8–9 minutes (~70% faster) through stage parallelization and smarter test ordering. Zero regressions post-deployment.</p><br><p>Built a high-throughput API proxy combining Ruby on Rails, Python, MongoDB, and AWS SQS, plus serverless pipelines connecting Lambda → S3 → DynamoDB with LocalStack for full local development parity.</p>",
        link: "",
      },
      {
        date: "2021 – 2024",
        title: "Senior Ruby on Rails Engineer",
        company: "ClickDimensions",
        description:
          "<p>Maintained and extended a multi-tenant SaaS marketing platform serving thousands of customers, working on data pipelines, ETL/BLEND scripts, and complex Postgres/MySQL queries in a high-throughput environment; collaborated directly with Microsoft as a technology partner.</p><br><p>Solved a critical cross-platform compatibility issue by building a custom Docker image for ARM64/MySQL 5.7, unblocking the entire engineering team on Apple Silicon.</p><br><p>Led the Rails 3 → 4 → 5 migration applying SOLID principles throughout; drove the transition from Resque to Sidekiq; performed deep RSpec refactoring that significantly reduced test suite execution time.</p>",
        link: "",
      },
      {
        date: "2019 – 2021",
        title: "Ruby on Rails Engineer",
        company: "Beruby España",
        description:
          "<p>Led a two-month full migration of a high-traffic cashback application to React Native + Expo, integrated with the existing Rails monolith — delivered on schedule, launched to production, still running today.</p><br><p>Integrated 20+ third-party REST API clients (Lidl, Booking.com, AliExpress, Fnac, Groupon, and more), significantly expanding the merchant catalogue and revenue surface.</p><br><p>Overhauled a hard-to-maintain legacy codebase applying SOLID and DRY principles, reducing bug rate and improving developer onboarding speed.</p>",
        link: "",
      },
      {
        date: "2017 – 2019",
        title: "Junior Ruby on Rails Developer",
        company: "2Bedigital",
        description:
          "<p>Built production e-commerce stores and templates for multiple clients using Ruby on Rails and Solidus — first real exposure to clean architecture and SOLID principles that shaped the engineer I am today.</p>",
        link: "",
      },
      {
        date: "2015 – 2017",
        title: "Freelance Developer",
        company: "Freelance – Bytefy",
        description:
          "Delivered full-stack web projects for multiple clients independently using Ruby on Rails and PHP — early experience managing technical decisions, client expectations and delivery pressure simultaneously.",
        link: "",
      },
      {
        date: "2011 – 2015",
        title: "Junior Developer",
        company: "Fu International / Sitel",
        description:
          "Developed PHP and WordPress applications while simultaneously working as a technical instructor — built the communication and teaching skills that still make me effective as a mentor and technical lead today.",
        link: "",
      },
    ],
    "about.link": "/CV_Adan.pdf",
    "about.cv": "CV",
    "about.education": [
      {
        date: "In progress",
        title: "AI Master – The Big School Academy / Universidad Isabel I",
        description: "",
      },
      {
        date: "Completed",
        title: "Bachelor Computer Engineer – UNED",
        description: "",
      },
      {
        date: "Completed",
        title: "Higher Tech. – DAM (Official Education)",
        description: "",
      },
    ],
    "exp.title": "My Experience as a Software Engineer",
    "projects.title": "My Projects and Key Contributions",
    "projects.preview": "Preview",
    "projects.code": "Code",
    projects: [
      {
        title: "An OCR in Rails — here's how I did it",
        description:
          "Inspired by the need to optimize document scanning and analysis, I developed an application in Ruby on Rails integrated with Tesseract OCR. This tool not only manages the upload of documents using Active Storage, but also extracts text from images, turning a complex task into an efficient solution. By using Tailwind CSS for frontend styling, the application allows for seamless file handling and advanced OCR capabilities, improving productivity through automation.",
        link: "",
        github: "",
        image: "/projects/svgl.webp",
        tags: ["rails", "rspec", "ruby", "tailwindcss"],
      },
      {
        title: "Improvements in GitLab's CI/CD Pipelines",
        description:
          "At Invoke, I led significant improvements in GitLab's pipelines, achieving an impressive ~70% speed increase, reducing pipeline times from 45 to 8–9 minutes through stage parallelization and smarter test ordering, with zero regressions post-deployment. I introduced new features such as proxies and APIs, while also refining SQS queues and debugging systems.",
        link: "",
        github: "",
        image: "/projects/svgl.webp",
        tags: ["gitlab", "rspec", "ruby"],
      },
      {
        title: "Dockerization of a Ruby on Rails Application for ARM64 Architectures and MySQL 5.7",
        description:
          "Solved a critical cross-platform compatibility issue by building a custom Docker image for ARM64/MySQL 5.7, unblocking the entire engineering team on Apple Silicon. After exhaustive testing and adjustments, we successfully dockerized both the Ruby on Rails application and the MySQL 5.7 database for ARM64 architectures, using service emulation.",
        link: "",
        image: "/projects/adventjs.webp",
        tags: ["docker", "rails", "mysql"],
      },
      {
        title: "Migration of an Application to React Native and Rails",
        description:
          "At Beruby, led a two-month full migration of a high-traffic cashback application to React Native + Expo, integrated with the existing Rails monolith — delivered on schedule, launched to production, still running today. The migration allowed development teams to work more efficiently and scalably.",
        link: "",
        image: "/projects/adventjs.webp",
        tags: ["react", "rails", "expo"],
      },
      {
        title: "Creation of an API Proxy in Python, Rails, and AWS SQS",
        description:
          "Built a high-throughput API proxy combining Ruby on Rails, Python, MongoDB, and AWS SQS, plus serverless pipelines connecting Lambda → S3 → DynamoDB with LocalStack for full local development parity. Within a two-week period, we managed to develop and deploy the solution.",
        link: "",
        image: "/projects/adventjs.webp",
        tags: ["python", "rails", "sqs"],
      },
    ],
    view_more: "View more",
    "footer.copy":
      'Portfolio created thanks to the teachings<br> and contributions of <strong><a href="https://midu.dev/" class="hover:underline">Midudev</a></strong>',
    "about.find":
      "<p>I am particularly excited about opportunities where strong software engineering foundations meet AI-driven development practices. I am looking for a place where I can settle my foundations, learn and grow as an engineer.</p><br><p>I am committed to finding a company that values long-term growth, provides me with professional development opportunities and allows me to contribute meaningfully to the success of its projects.</p>",
  },
  es: {
    "nav.experience": "Experiencia",
    "nav.projects": "Proyectos",
    "nav.about": "Sobre mí",
    "nav.contact": "Contacto",
    "nav.email": "adangrx@gmail.com",
    "about.title": "Sobre mí",
    "about.find":
      "<p>Me entusiasman especialmente las oportunidades donde una sólida base de ingeniería de software se encuentra con prácticas de desarrollo impulsadas por IA. Busco un lugar donde asentar mis bases, aprender y crecer como ingeniero.</p><br><p>Estoy comprometido con encontrar una empresa que valore el crecimiento a largo plazo, me brinde oportunidades de desarrollo profesional y me permita contribuir de manera significativa al éxito de sus proyectos.</p>",
    "about.me":
      "Ingeniero Senior de Ruby on Rails con <strong>más de 10 años de experiencia</strong> construyendo productos escalables y mantenibles. Tras asumir un rol de Engineering Manager, descubrí que mi pasión está en la ingeniería práctica — escribir buen código, resolver problemas complejos y trabajar con stacks tecnológicos modernos. Actualmente cursando un <strong>Máster en Inteligencia Artificial</strong>.",
    "about.open": "Open to work",
    "about.hey": "Hey, soy Adán",
    "about.contact": "Contacta conmigo",
    "about.linkedin": "Linkedin",
    "about.link": "/CV_Adan.pdf",
    "about.cv": "CV",
    "about.myself": `
        <p>
        Hola, soy Adán. Mi aventura en el mundo de la programación comenzó con Visual Basic cuando tenía poco más de 12 años. A lo largo del tiempo, me he especializado en lenguajes como <strong>Ruby, Python, y JavaScript</strong>.
        </p>
        <br>
        <p>
        Aunque mi sueño siempre fue ser programador de videojuegos, crecí en un pequeño pueblo casi deshabitado en Tenerife, una hermosa isla en España, donde las oportunidades en ese campo eran limitadas. Por lo tanto, me volqué en la programación web, especializándome en el desarrollo de aplicaciones web y móviles.
        </p>
        <br>
        <p>
        A lo largo de mi carrera, he tenido el privilegio de trabajar en diversas empresas, lo que ha enriquecido mi conocimiento y me ha permitido colaborar con grandes partners como <strong>Microsoft, Shopify, Coca-Cola, Universal...</strong>. Me entusiasman especialmente las oportunidades donde una sólida base de ingeniería de software se encuentra con prácticas de desarrollo impulsadas por IA.
        </p>
        <br>
        <p>
        Actualmente estoy cursando un <strong>Máster en Inteligencia Artificial</strong>, profundizando mis conocimientos en
machine learning, arquitecturas basadas en agentes, sub-agentes, orquestación de habilidades y estrategias de paralelización.
        </p>
        <br>
        <p>
        Como desarrollador, he trabajado con una amplia gama de tecnologías, incluyendo <strong>Rails, React, React Native (con Expo), FastAPI, MongoDB, MySQL, PostgreSQL, Docker, Kubernetes, Ansible, Terraform, Redis, y AWS (EC2, Lambda, S3, SQS, DynamoDB)</strong>, entre otras.
        </p>
        <br>
        <p>
        Fuera del trabajo, soy un apasionado del surf y la vida en furgoneta, la música, la IA y los sistemas de agentes,
el desarrollo de videojuegos, y pasar tiempo con mi familia.
        </p>`,
    "about.experience": [
      {
        date: "Ene 2025 – Presente",
        title: "Engineering Manager (Técnico)",
        company: "Libnova",
        description:
          "<p>Dockericé toda la plataforma legacy desde cero y orquesté los despliegues en producción en todos los clientes, cada uno con entornos altamente personalizados, logrando rollouts consistentes y sin downtime a escala por primera vez en la historia de la empresa.</p><br><p>Diseñé y lideré el stack de infraestructura cloud-native: Docker, Kubernetes, Ansible y Terraform; entregando mejoras medibles en estabilidad de plataforma, escalabilidad y confianza en los releases.</p><br><p>Estandaricé las prácticas de ingeniería en todo el equipo: estrategia de branching en Git, flujos de revisión de PRs, pipelines CI/CD y estándares de código, reduciendo la fricción en integraciones y el tiempo de onboarding para nuevos ingenieros.</p><br><p>Mentoricé a un equipo de ingenieros junior mediante code reviews estructurados, pair-programming y workshops técnicos, acelerando notablemente el crecimiento individual y la velocidad del equipo.</p>",
        link: "",
      },
      {
        date: "2024 (Dos contratos)",
        title: "Solutions Architect → Senior Ruby on Rails Engineer",
        company: "Invoke (Temporal)",
        description:
          "<p>Diseñé un pipeline de procesamiento de documentos en producción sobre AWS Lambda, integrando LLMs GPT-4o, Ollama y Claude con un motor de reglas de negocio (BRE) personalizado para clasificación automatizada de documentos — implementando IA en un flujo de trabajo real de producción, no una demo.</p><br><p>Reduje el tiempo de ejecución de pipelines CI/CD en GitLab de 45 minutos a 8-9 minutos (~70% más rápido) mediante paralelización de stages y ordenamiento inteligente de tests. Cero regresiones post-despliegue.</p><br><p>Construí un proxy API de alto rendimiento combinando Ruby on Rails, Python, MongoDB y AWS SQS, más pipelines serverless conectando Lambda → S3 → DynamoDB con LocalStack para paridad completa en desarrollo local.</p>",
        link: "",
      },
      {
        date: "2021 – 2024",
        title: "Senior Ruby on Rails Engineer",
        company: "ClickDimensions",
        description:
          "<p>Mantuve y extendí una plataforma SaaS de marketing multi-tenant sirviendo a miles de clientes, trabajando en data pipelines, scripts ETL/BLEND y consultas complejas Postgres/MySQL en un entorno de alto rendimiento; colaboré directamente con Microsoft como partner tecnológico.</p><br><p>Resolví un problema crítico de compatibilidad cross-platform construyendo una imagen Docker personalizada para ARM64/MySQL 5.7, desbloqueando a todo el equipo de ingeniería en Apple Silicon.</p><br><p>Lideré la migración de Rails 3 → 4 → 5 aplicando principios SOLID; impulsé la transición de Resque a Sidekiq; realicé refactoring profundo de RSpec que redujo significativamente el tiempo de ejecución de la suite de tests.</p>",
        link: "",
      },
      {
        date: "2019 – 2021",
        title: "Ruby on Rails Engineer",
        company: "Beruby España",
        description:
          "<p>Lideré una migración completa de dos meses de una aplicación de cashback de alto tráfico a React Native + Expo, integrada con el monolito Rails existente — entregada a tiempo, lanzada en producción, sigue funcionando hoy.</p><br><p>Integré más de 20 clientes de APIs REST de terceros (Lidl, Booking.com, AliExpress, Fnac, Groupon y más), expandiendo significativamente el catálogo de comercios y la superficie de ingresos.</p><br><p>Renové un codebase legacy difícil de mantener aplicando principios SOLID y DRY, reduciendo la tasa de bugs y mejorando la velocidad de onboarding de desarrolladores.</p>",
        link: "",
      },
      {
        date: "2017 – 2019",
        title: "Junior Ruby on Rails Developer",
        company: "2Bedigital",
        description:
          "<p>Construí tiendas e-commerce de producción y plantillas para múltiples clientes usando Ruby on Rails y Solidus — primera exposición real a arquitectura limpia y principios SOLID que moldearon al ingeniero que soy hoy.</p>",
        link: "",
      },
      {
        date: "2015 – 2017",
        title: "Freelance Developer",
        company: "Freelance – Bytefy",
        description:
          "Entregué proyectos web full-stack para múltiples clientes de forma independiente usando Ruby on Rails y PHP — experiencia temprana gestionando decisiones técnicas, expectativas de clientes y presión de entrega simultáneamente.",
        link: "",
      },
      {
        date: "2011 – 2015",
        title: "Junior Developer",
        company: "Fu International / Sitel",
        description:
          "Desarrollé aplicaciones PHP y WordPress mientras trabajaba simultáneamente como instructor técnico — construí las habilidades de comunicación y enseñanza que aún hoy me hacen efectivo como mentor y líder técnico.",
        link: "",
      },
    ],
    "about.education": [
      {
        date: "En curso",
        title: "Máster en IA – The Big School Academy / Universidad Isabel I",
        description: "",
      },
      {
        date: "Completado",
        title: "Grado en Ingeniería Informática – UNED",
        description: "",
      },
      {
        date: "Completado",
        title: "Técnico Superior – DAM (Educación Oficial)",
        description: "",
      },
    ],
    "exp.title": "Mi Experiencia como Ingeniero de Software",
    "projects.title": "Mis proyectos y algunas aportaciones",
    "projects.preview": "Preview",
    "projects.code": "Code",
    projects: [
      {
        title: "Un OCR en Rails, pues así lo hice",
        description:
          "Inspirado por la necesidad de optimizar el escaneo y análisis de documentos, desarrollé una aplicación en Ruby on Rails integrada con Tesseract OCR. Esta herramienta no solo gestiona la carga de documentos utilizando Active Storage, sino que también extrae texto de imágenes, convirtiendo una tarea compleja en una solución eficiente. Utilizando Tailwind CSS para el estilo del frontend, la aplicación permite un manejo fluido de archivos y capacidades avanzadas de OCR, mejorando la productividad a través de la automatización.",
        link: "",
        github: "",
        image: "/projects/svgl.webp",
        tags: ["rails", "rspec", "ruby", "tailwindcss"],
      },
      {
        title: "Mejoras en los pipelines de CI/CD de GitLab",
        description:
          "En Invoke, lideré mejoras significativas en los pipelines de GitLab, logrando un aumento de velocidad del ~70%, reduciendo de 45 a 8-9 minutos mediante paralelización de stages y ordenamiento inteligente de tests, con cero regresiones post-despliegue. Introduje nuevas funcionalidades como Proxies y APIs, al mismo tiempo que refinaba las colas SQS y sistemas de depuración.",
        link: "",
        github: "",
        image: "/projects/svgl.webp",
        tags: ["gitlab", "rspec", "ruby"],
      },
      {
        title: "Dockerización de una aplicación Ruby on Rails para arquitecturas ARM64 y MySQL 5.7",
        description:
          "Resolví un problema crítico de compatibilidad cross-platform construyendo una imagen Docker personalizada para ARM64/MySQL 5.7, desbloqueando a todo el equipo de ingeniería en Apple Silicon. Tras exhaustivas pruebas y ajustes, conseguimos dockerizar con éxito tanto la aplicación Ruby on Rails como la base de datos MySQL 5.7 para arquitecturas ARM64.",
        link: "",
        image: "/projects/adventjs.webp",
        tags: ["docker", "rails", "mysql"],
      },
      {
        title: "Migración de una aplicación a React Native y Rails",
        description:
          "En Beruby, lideré una migración completa de dos meses de una aplicación de cashback de alto tráfico a React Native + Expo, integrada con el monolito Rails existente — entregada a tiempo, lanzada en producción, sigue funcionando hoy. La migración permitió a los equipos de desarrollo trabajar de manera más eficiente y escalable.",
        link: "",
        image: "/projects/adventjs.webp",
        tags: ["react", "rails", "expo"],
      },
      {
        title: "Creación de un API Proxy en Python, Rails y AWS SQS",
        description:
          "Construí un proxy API de alto rendimiento combinando Ruby on Rails, Python, MongoDB y AWS SQS, más pipelines serverless conectando Lambda → S3 → DynamoDB con LocalStack para paridad completa en desarrollo local. En un período de dos semanas, logramos desarrollar y desplegar la solución.",
        link: "",
        image: "/projects/adventjs.webp",
        tags: ["python", "rails", "sqs"],
      },
    ],
    view_more: "Ver más",
    "footer.copy":
      'Portfolio realizado gracias a las enseñanzas<br> y aportaciones de <strong><a href="https://midu.dev/" class="hover:underline">Midudev</a></strong>',
  },
} as const;
