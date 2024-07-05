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
    "nav.email": "Adangrx@gmail.com",
    "about.title": "About Me",
    "about.me":
      " +10 years of experience. <strong>Software Engineer and Passionate Programmer with Ruby, Python, and Javascript</strong> Born and raised in the Canary Islands 🇪🇸. Specialized in remote work. My passion is optimization and fixing impossible elements. Challenges are my passion.",
    "about.open": "Open to work",
    "about.hey": "Hey, I´m Adán",
    "about.contact": "Contact me",
    "about.linkedin": "Linkedin",
    "about.myself": `
        <p>
        Hi, I'm Adán. My programming journey began with Visual Basic when I was just over 20 years old. Over time, I have specialized in languages like <strong>Ruby, Python, and JavaScript</strong>.
        </p>
        <br>
        <p>
        Although my dream was always to be a video game programmer, I grew up in a small, almost uninhabited town in Tenerife, a beautiful island in Spain, where opportunities in that field were limited. Therefore, I focused on web programming, specializing in web and mobile application development.
        </p>
                <br>
  
        <p>
        Throughout my career, I have had the privilege of working in various companies, which has enriched my knowledge and allowed me to collaborate with major partners such as <strong>Microsoft, Shopify, Coca-Cola, Universal...</strong>. Currently, I am seeking new challenges and opportunities where I can apply and expand all my knowledge and ideas.
        </p>
                <br>
  
        <p>
        As a developer, I have worked with a wide range of technologies, including <strong>Rails, React, React Native (with Expo), Laravel, FastAPI, MongoDB, MySQL, PostgreSQL, Docker, Redis, and AWS SQS</strong>, among others.
        </p>
                <br>
  
        <p>
        Outside of work, I am passionate about surfing and music. I love programming and greatly enjoy spending time with my family. Additionally, I am a camper van enthusiast, which allows me to combine my love for nature and adventure.
        </p>`,
    "about.experience": [
      {
        date: "2024 (Temporary contract to cover absence)",
        title: "Senior Ruby on Rails Engineer",
        company: "Invoke",
        description:
          "My time at Invoke was brief but dynamic. From day one, I had the opportunity to improve GitLab pipelines, making them 70% faster. I also created new features like Proxies and APIs, and made improvements to SQS queues and the debugging system. Although it was a temporary role, I learned a lot and the team dynamics were exceptional.",
        link: "",
      },
      {
        date: "2021 - 2024",
        title: "Senior Ruby on Rails Engineer",
        company: "ClickDimensions",
        description:
          "At ClickDimensions, I delved into the fascinating world of big data as a Ruby Engineer. Working with technologies like Ruby on Rails, PostgreSQL, MySQL, and Docker, I learned under the guidance of my manager Eduardo and my colleagues 'Los Robertos'. From DATA and ETL to BLENDS Scripts and Pipelines, there was never a dull moment! I also took advantage of Microsoft courses, given ClickDimensions' partnership. Unfortunately, after a few years there, the company decided to migrate Rails to .NET, prompting me to seek new horizons.",
        link: "",
      },
      {
        date: "2019 - 2021",
        title: "Ruby on Rails Engineer",
        company: "Beruby Spain",
        description:
          "At Beruby, I tackled the challenge of developing a new application with high scalability and maintainability as it would be used by many users. After thorough analysis, we opted to migrate the application to React Native and integrate it with the existing Rails monolith. Over a two-month period, we successfully completed the migration to React Native and Rails, significantly enhancing the efficiency and usability of the development teams. The application is currently in production and continues to evolve, and I am very proud of it.",
        link: "",
      },
      {
        date: "2017 - 2019",
        title: "Ruby on Rails Developer",
        company: "2Bedigital",
        description:
          "At 2Bedigital, alongside my boss and now friend Pablo (CEO), I explored the world of Ruby on Rails. In a small yet highly competent team, we developed stores and templates for SOLIDUS, solidifying our dominance in e-commerce with Rails. We created numerous gems, marking the beginning of my exciting journey with Ruby on Rails, and since then, my commitment to this technology has only grown. I still visit their offices and am always warmly welcomed. I consider myself fortunate to have met such talented individuals throughout my professional career.",
        link: "",
      },
      {
        date: "2015 - 2017",
        title: "Software Developer",
        company: "Freelance",
        description: "",
        link: "",
      },
      {
        date: "2011 - 2015",
        title: "Junior Developer",
        company: "Fu International Academy",
        description: "",
        link: "",
      },
    ],
    "about.education": [
      {
        date: "2024 (Temporary)",
        title: "Senior Ruby on Rails Engineer",
        description: "",
      },
      {
        date: "2021 - 2024",
        title: "Senior Ruby on Rails Engineer",
        description: "",
      },
      {
        date: "2019 - 2021",
        title: "Ruby on Rails Engineer",
        description: "",
      },
      {
        date: "2016 - 2019",
        title: "Ruby on Rails Developer",
        description: "",
      },
    ],
    "exp.title": "My Experience as a Software Engineer",
    "projects.title": "My Projects and Key Contributions",
    "projects.preview": "Preview",
    "projects.code": "Code",
    projects: [
      {
        "title": "Un OCR en Rails, pues así lo hice",
        "description": "Pensativo por la necesidad de una empresa de optimizar el escaneo y análisis de documentos, desarrollé una aplicación en Ruby on Rails integrada con Tesseract OCR. Esta herramienta no solo gestiona la carga de documentos utilizando Active Storage, sino que también extrae texto de imágenes, convirtiendo una tarea abrumadora en una solución eficiente. Utilizando Tailwind CSS para el estilo del frontend, la aplicación permite un manejo fluido de archivos y capacidades de OCR, mejorando la productividad a través de la automatización.",
        "link": "",
        "github": "",
        "image": "/projects/svgl.webp",
        "tags": ["rails", "rspec", "ruby","tailwindcss"]
    }
,    
      {
        title: "Improvements in GitLab's CI/CD Pipelines",
        description:
          "My time at Invoke was brief but dynamic. From day one, I led significant improvements in GitLab's pipelines, achieving an impressive 70% speed increase, reducing pipeline times from 45 to 7-9 minutes each. I introduced new features like Proxies and APIs, while refining SQS queues and debugging systems. Despite being a temporary position, it was an intense and enriching learning experience within an exceptional team environment.",
        link: "",
        github: "",
        image: "/projects/svgl.webp",
        tags: ["gitlab", "rspec", "ruby"],
      },
      {
        title:
          "Dockerization of a Ruby on Rails Application for ARM64 Architectures and MySQL 5.7 without Support",
        description:
          "With the arrival of new teams at the company, there was a need to dockerize a Ruby on Rails application integrated with a MySQL database. However, MySQL 5.7 does not support ARM64 architectures, leading us to develop a MySQL 5.7 image tailored for ARM64. After exhaustive testing and adjustments, we successfully dockerized both the Ruby on Rails application and MySQL 5.7 database for ARM64 architectures, using service emulation. This enabled the new teams to work on the application seamlessly.",
        link: "",
        image: "/projects/adventjs.webp",
        tags: ["docker", "rails", "mysql"],
      },
      {
        title: "Migration of an Application to React Native and Rails",
        description:
          "At Beruby, I was tasked with creating a new application that would be easily maintainable and scalable. After thorough analysis, we decided to migrate the application to React Native, integrating it with the existing Rails monolith. Over a two-month period, we successfully completed the migration to React Native and Rails, enabling the development teams to work more efficiently and scaleably. Currently, the application is in production and continues to evolve.",
        link: "",
        image: "/projects/adventjs.webp",
        tags: ["react", "rails", "expo"],
      },
      {
        title: "Creation of an API Proxy in Python, Rails, and AWS SQS",
        description:
          "At my last company, there was a need to develop an API proxy that would connect to an external service to enhance the efficiency of development teams. After detailed analysis, we decided to implement the API proxy using Python, allowing communication with the Rails monolith through AWS SQS. Within a two-week period, we successfully developed and deployed the API proxy using Python, Rails, and AWS SQS. This solution enabled our clients not only to create their own frontend but also to separate functionalities from the existing application through their own API.",
        link: "",
        image: "/projects/adventjs.webp",
        tags: ["python", "rails", "sqs"],
      },
    ],
    view_more: "View more",
    "footer.copy":
      'Portfolio created thanks to the teachings<br> and contributions of <strong><a href="https://midu.dev/" class="hover:underline">Midudev</a></strong>',
  },
  es: {
    "nav.experience": "Experiencia",
    "nav.projects": "Proyectos",
    "nav.about": "Sobre mí",
    "nav.contact": "Contacto",
    "nav.email": "Adangrx@gmail.com",
    "about.title": "Sobre mí",
    "about.me":
      " Con más de 10 años de experiencia, soy Ingeniero de Software y apasionado por la programación con habilidades destacadas en Ruby, Python y JavaScript. Originario de las hermosas Islas Canarias 🇪🇸 🌴 🇮🇨, me especializo en trabajo remoto. Mi pasión radica en la optimización y en resolver desafíos.",
    "about.open": "Open to work",
    "about.hey": "Hey, I´m Adán",
    "about.contact": "Contacta conmigo",
    "about.linkedin": "Linkedin",
    "about.myself": `
        <p>
        Hola, soy Adán. Mi aventura en el mundo de la programación comenzó con Visual Basic cuando tenía poco más de 20 años. A lo largo del tiempo, me he especializado en lenguajes como <strong>Ruby, Python, y JavaScript</strong>.
        </p>
        <br>
        <p>
        Aunque mi sueño siempre fue ser programador de videojuegos, crecí en un pequeño pueblo casi deshabitado en Tenerife, una hermosa isla en España, donde las oportunidades en ese campo eran limitadas. Por lo tanto, me volqué en la programación web, especializándome en el desarrollo de aplicaciones web y móviles.
        </p>
                <br>

        <p>
        A lo largo de mi carrera, he tenido el privilegio de trabajar en diversas empresas, lo que ha enriquecido mi conocimiento y me ha permitido colaborar con grandes partners como <strong>Microsoft, Shopify, Coca-Cola, Universal...</strong>. Actualmente, estoy en busca de nuevos retos y oportunidades donde pueda aplicar y expandir todos mis conocimientos e ideas.
        </p>
                <br>

        <p>
        Como desarrollador, he trabajado con una amplia gama de tecnologías, incluyendo <strong>Rails, React, React Native (con Expo), Laravel, FastAPI, MongoDB, MySQL, PostgreSQL, Docker, Redis, y AWS SQS</strong>, entre otras.
        </p>
                <br>

        <p>
        Fuera del trabajo, soy un apasionado del surf y la música. Me encanta programar y disfruto enormemente de pasar tiempo con mi familia. Además, soy un entusiasta de los campings en furgoneta, lo cual me permite combinar mi amor por la naturaleza y la aventura.
        </p>`,
    "about.experience": [
      {
        date: "2024 (Contrato temporal para cubrir baja)",
        title: "Senior Ruby on Rails Engineer",
        company: "Invoke",
        description:
          "Mi paso por Invoke fue breve pero dinámico. Desde el primer día, tuve la oportunidad de mejorar los pipelines de GitLab hasta hacerlos un 70% más rápidos. También creé nuevas funcionalidades como Proxys y APIs, realicé mejoras en las colas SQS y en el sistema de depuración. Aunque fue un trabajo temporal, aprendí muchísimo y el equipo humano fue excepcional.",
        link: "",
      },
      {
        date: "2021 - 2024",
        title: "Senior Ruby on Rails Engineer",
        company: "ClickDimensions",
        description:
          "En ClickDimensions, exploré el fascinante mundo del big data como Ruby Engineer. Trabajando con tecnologías como Ruby on Rails, PostgreSQL, MySQL y Docker, aprendí de la mano de mi manager Eduardo y mis colegas 'Los Robertos'. Desde DATA y ETL, BLENDS Scripts hasta Pipelines y Queries, ¡no hubo aburrimiento! Además, aproveché cursos de Microsoft, siendo ClickDimensions partner. Lamentablemente tras unos años alli, la empresa decidió migrar Rails a .NET y me vi obligado a buscar nuevos horizontes.",
        link: "",
      },
      {
        date: "2019 - 2021",
        title: "Ruby on Rails Engineer",
        company: "Beruby España",
        description:
          "En Beruby, enfrenté el desafío de desarrollar una nueva aplicación con alta escalabilidad y mantenibilidad ya que muchos usuarios la utilizarían. Tras un análisis exhaustivo, se optó por migrar la aplicación a React Native e integrarla con el monolito existente de Rails. Durante un proceso de dos meses, completamos exitosamente la migración a React Native y Rails, lo cual mejoró significativamente la eficiencia y usabilidad de los equipos de desarrollo. Actualmente, la aplicación se encuentra en producción y continúa evolucionando, estoy muy orgulloso de ello.",
        link: "",
      },
      {
        date: "2017 - 2019",
        title: "Ruby on Rails Developer",
        company: "2Bedigital",
        description:
          "En 2Bedigital, junto a mi jefe y ahora amigo Pablo (CEO), exploré el mundo de Ruby on Rails. En un equipo pequeño pero altamente competente, desarrollamos tiendas y plantillas para SOLIDUS, consolidando nuestro dominio en el comercio electrónico con Rails. Creamos miles de gemas y así fue el inicio de mi apasionante travesía con Ruby on Rails y desde entonces, mi compromiso con esta tecnología no ha menguado. Aún mantengo contacto con sus oficinas y siempre recibo una cálida acogida. Me considero afortunado de haber conocido a personas tan talentosas a lo largo de mi carrera profesional.",
        link: "",
      },
      {
        date: "2015 - 2017",
        title: "Software Developer",
        company: "Freelance",
        description: "",
        link: "",
      },
      {
        date: "2011 - 2015",
        title: "Junior Developer",
        company: "Fu International Academy",
        description: "",
        link: "",
      },
    ],
    "about.education": [
      {
        date: "2024 (Temporal)",
        title: "Senior Ruby on Rails Engineer",
        description: "",
      },
      {
        date: "2021 - 2024",
        title: "Senior Ruby on Rails Engineer",
        description: "",
      },
      {
        date: "2019 - 2021",
        title: "Ruby on Rails Engineer",
        description: "",
      },
      {
        date: "2016 - 2019",
        title: "Ruby on Rails Developer",
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
          "Inspirado por la necesidad de un amigo de optimizar el escaneo y análisis de documentos, desarrollé una aplicación en Ruby on Rails integrada con Tesseract OCR. Esta herramienta no solo gestiona la carga de documentos utilizando Active Storage, sino que también extrae texto de imágenes, convirtiendo una tarea abrumadora en una solución eficiente. Utilizando Tailwind CSS para el estilo del frontend, la aplicación permite un manejo fluido de archivos y capacidades de OCR, mejorando la productividad a través de la automatización.",
        link: "",
        github: "",
        image: "/projects/svgl.webp",
        tags: ["rails", "rspec", "ruby","tailwindcss"]
      },
      {
        title: "Mejoras en los pipelines de CI/CD de la gitlab",
        description:
          "Mi paso por Invoke fue breve pero dinámico. Desde el primer día, lideré mejoras significativas en los pipelines de GitLab, logrando aumentar su velocidad en un impresionante 70% reduciendo desde 45 a 7-9 minutos cada pipeline. Introduje nuevas funcionalidades como Proxies y APIs, al mismo tiempo que refinaba las colas SQS y sistemas de depuración. A pesar de tratarse de una posición temporal, fue una experiencia de aprendizaje intensa y enriquecedora, dentro de un entorno de equipo excepcional.",
        link: "",
        github: "",
        image: "/projects/svgl.webp",
        tags: ["gitlab", "rspec", "ruby"]
      },
      {
        title:
          "Dockerización de una aplicación Ruby on Rails para arquitecturas ARM64 y mysql 5.7 sin soporte",
        description:
          "Con la llegada de nuevos equipos a la empresa, surgió la necesidad de dockerizar una aplicación Ruby on Rails que se integra con una base de datos MySQL. Sin embargo, MySQL 5.7 no es compatible con arquitecturas ARM64, lo que nos llevó a desarrollar una imagen de MySQL 5.7 adaptada para ARM64. Tras realizar exhaustivas pruebas y ajustes, conseguimos dockerizar con éxito tanto la aplicación Ruby on Rails como la base de datos MySQL 5.7 para arquitecturas ARM64, utilizando la emulación de servicios. Esto facilitó a los nuevos equipos trabajar en la aplicación sin ningún contratiempo.",
        link: "",
        image: "/projects/adventjs.webp",
        tags: ["docker", "rails", "mysql"]
      },
      {
        title: "Migración de una aplicacion a ReactNative y Rails",
        description:
          "En Beruby, se me planteó el desafío de crear una nueva aplicación que fuera fácilmente mantenible y escalable. Después de un análisis exhaustivo, se decidió migrar la aplicación a React Native, integrándola con el monolito existente de Rails. Durante un proceso de dos meses, logramos completar la migración a React Native y Rails, lo cual permitió a los equipos de desarrollo trabajar de manera más eficiente y escalable. Actualmente, la aplicación está en producción y sigue en continuo desarrollo.",
        link: "",
        image: "/projects/adventjs.webp",
        tags: ["react", "rails", "expo"]
      },
      {
        title: "Creación de un api Proxy en python, rails y AWS SQS",
        description:
          "En mi última empresa, surgió la necesidad de desarrollar un API proxy que se conectara a un servicio externo para mejorar la eficiencia de los equipos de desarrollo. Tras un análisis detallado, se decidió implementar el API proxy utilizando Python, permitiendo la comunicación con el monolito de Rails a través de AWS SQS. En un período de dos semanas, logramos desarrollar y desplegar el API proxy utilizando Python, Rails y AWS SQS. Con esta solución, permitiríamos a nuestros clientes, no solo crear su propio frontend, sin mezclar funcionalidades con la aplicación existentes desde su propia API",
        link: "",
        image: "/projects/adventjs.webp",
        tags: ["python", "rails", "sqs"]
      },
    ],
    "view_more": "Ver más",
    "footer.copy":
      'Portfolio realizado gracias a las enseñanzas<br> y aportaciones de <strong><a href="https://midu.dev/" class="hover:underline">Midudev</a></strong>',
  },
} as const;
