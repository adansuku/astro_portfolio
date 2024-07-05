
import TAGS from "../components/Tags.astro";


export const languages = {
  es: '🇪🇸',
  en: '🇺🇸',
};

export const defaultLang = 'es';

export const ui = {
  en: {
    "nav.experience": "assa",
    "nav.projects": "About",
    "nav.about": "Twitter",
    "nav.contact": "Twitter",
    "nav.email": "Adangrx@gmail.com",
    "about.title": "Sobre mí",
    "about.me":
      "+15 años de experiencia. <strong>Ingeniero de Software y Apasionado por la Programación con Ruby, Python y Javascript</strong> Nacido y criado en Canarias 🇪🇸. Especializado en trabajo en remoto. Mi pasión es la optimización y reparar elementos imposibles. Los retos son mi pasión",
    "about.open": "Open to work",
    "about.hey": "Hey, I´m Adán",
    "about.contact": "Contact me",
    "about.linkedin": "Linkedin",
    "about.myself": `
    <p>
    Hello, soy Adán. Mi aventura en el mundo de la programación comenzó con Visual Basic cuando tenía poco más de 20 años. A lo largo del tiempo, me he especializado en lenguajes como <strong>Ruby, Python, y JavaScript</strong>.
    </p>
    <p>
        Aunque mi sueño siempre fue ser programador de videojuegos, crecí en un pequeño pueblo casi deshabitado en Tenerife, una hermosa isla en España, donde las oportunidades en ese campo eran limitadas. Por lo tanto, me volqué en la programación web, especializándome en el desarrollo de aplicaciones web y móviles.
    </p>
    <p>
        A lo largo de mi carrera, he tenido el privilegio de trabajar en diversas empresas, lo que ha enriquecido mi conocimiento y me ha permitido colaborar con grandes partners como <strong>Microsoft, Apple, Coca-Cola, Airbnb, UiPath, y Blueprism</strong>. Actualmente, estoy en busca de nuevos retos y oportunidades donde pueda aplicar y expandir todos mis conocimientos e ideas.
    </p>
    <p>
        Como desarrollador, he trabajado con una amplia gama de tecnologías, incluyendo <strong>Rails, React, React Native (con Expo), Laravel, FastAPI, MongoDB, MySQL, PostgreSQL, Docker, Redis, y AWS SQS</strong>, entre otras.
    </p>
    <p>
        Fuera del trabajo, soy un apasionado del surf y la música. Me encanta programar y disfruto enormemente de pasar tiempo con mi familia. Además, soy un entusiasta de los campings en furgoneta, lo cual me permite combinar mi amor por la naturaleza y la aventura.
    </p>`,
    "footer.copy":
      ' Portfolio realizado gracias a las aportaciones de <a href="https://midu.dev/" class="hover:underline">Midudev</a>',
    "about.experience": [
      {
        date: "2024",
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
          "En Beruby España, trabajé muchisimo en el frontend de una plataforma de Cashback junto a Noel, Ángel y el CEO Miguel. Me sumergí en integraciones de APIs para tiendas, mejorando vistas ERB y componentes backend. ¡Incluso migré la app a React Native y Ruby, llevándola a la era moderna!, Actualmente estoy orgulloso de que sigan con esta aplicación, mejorandola día a día. ¡Gracias Beruby!",
        link: "",
      },
      {
        date: "2016 - 2019",
        title: "Ruby on Rails Developer",
        company: "2Bedigital",
        description:
          "En 2Bedigital, junto a mi jefe y ahora amigo Pablo (CEO), exploré el mundo de RubyonRails. En un pequeño pero poderoso equipo, creamos tiendas y plantillas para SOLIDUS, dominando el arte del ecommerce con Rails. Aquí comenzó mi épica aventura con Ruby on Rails y desde entonces, ya no he podido parar. Aún me paso por sus oficinas y siempre soy bien recibido. Tengo mucha suerte de siempre encontrar a buena gente a lo largo de mi carrera profesional.",
        link: "",
      },
    ],
    'view_more': 'Ver más'
  },
  es: {
    "nav.experience": "Experiencia",
    "nav.projects": "Proyectos",
    "nav.about": "Sobre mí",
    "nav.contact": "Contacto",
    "nav.email": "Adangrx@gmail.com",
    "about.title": "Sobre mí",
    "about.me":
      " +15 años de experiencia. <strong>Ingeniero de Software y Apasionado por la Programación con Ruby, Python y Javascript</strong> Nacido y criado en Canarias 🇪🇸. Especializado en trabajo en remoto. Mi pasión es la optimización y reparar elementos imposibles. Los retos son mi pasión",
    "about.open": "Open to work",
    "about.hey": "Hey, I´m Adán",
    "about.contact": "Contact me",
    "about.linkedin": "Linkedin",
    "about.myself": `
        <p>
            Hola, soy Adán. Mi aventura en el mundo de la programación comenzó con Visual Basic cuando tenía poco más de 20 años. A lo largo del tiempo, me he especializado en lenguajes como <strong>Ruby, Python, y JavaScript</strong>.
        </p>
        <p>
            Aunque mi sueño siempre fue ser programador de videojuegos, crecí en un pequeño pueblo casi deshabitado en Tenerife, una hermosa isla en España, donde las oportunidades en ese campo eran limitadas. Por lo tanto, me volqué en la programación web, especializándome en el desarrollo de aplicaciones web y móviles.
        </p>
        <p>
            A lo largo de mi carrera, he tenido el privilegio de trabajar en diversas empresas, lo que ha enriquecido mi conocimiento y me ha permitido colaborar con grandes partners como <strong>Microsoft, Apple, Coca-Cola, Airbnb, UiPath, y Blueprism</strong>. Actualmente, estoy en busca de nuevos retos y oportunidades donde pueda aplicar y expandir todos mis conocimientos e ideas.
        </p>
        <p>
            Como desarrollador, he trabajado con una amplia gama de tecnologías, incluyendo <strong>Rails, React, React Native (con Expo), Laravel, FastAPI, MongoDB, MySQL, PostgreSQL, Docker, Redis, y AWS SQS</strong>, entre otras.
        </p>
        <p>
            Fuera del trabajo, soy un apasionado del surf y la música. Me encanta programar y disfruto enormemente de pasar tiempo con mi familia. Además, soy un entusiasta de los campings en furgoneta, lo cual me permite combinar mi amor por la naturaleza y la aventura.
        </p>`,
    "footer.copy": 'Portfolio realizado gracias a las aportaciones de <a href="https://midu.dev/" class="hover:underline">Midudev</a>',
    "exp.title": "Mi Experiencia como Ingeniero de Software",
    "about.experience": [
      {
        date: "2024",
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
          "En Beruby España, trabajé muchisimo en el frontend de una plataforma de Cashback junto a Noel, Ángel y el CEO Miguel. Me sumergí en integraciones de APIs para tiendas, mejorando vistas ERB y componentes backend. ¡Incluso migré la app a React Native y Ruby, llevándola a la era moderna!, Actualmente estoy orgulloso de que sigan con esta aplicación, mejorandola día a día. ¡Gracias Beruby!",
        link: "",
      },
      {
        date: "2016 - 2019",
        title: "Ruby on Rails Developer",
        company: "2Bedigital",
        description:
          "En 2Bedigital, junto a mi jefe y ahora amigo Pablo (CEO), exploré el mundo de RubyonRails. En un pequeño pero poderoso equipo, creamos tiendas y plantillas para SOLIDUS, dominando el arte del ecommerce con Rails. Aquí comenzó mi épica aventura con Ruby on Rails y desde entonces, ya no he podido parar. Aún me paso por sus oficinas y siempre soy bien recibido. Tengo mucha suerte de siempre encontrar a buena gente a lo largo de mi carrera profesional.",
        link: "",
      }
    ],
    "projects.title": "Mis proyectos y mejores aportaciones",
    "projects.preview": "Preview",
    "projects.code": "Code",
    "projects" : [
        {
            title: "Mejoras en los pipelines de CI/CD de la gitlab",
            description:
              "Tras llegar a una nueva empresa, empiezo a detectar como los pipelines de gitlab, que se encargan de desplegar las aplicaciones, no están optimizados. Tras un análisis, propongo una serie de mejoras que permiten reducir el tiempo de despliegue de 45 minutos a 7-8 minutos. El problema residia en la manera que se gestionaba la base de datos, que se truncaba despues de cada test de rspec y volvia a crear despues de cada test. Tras cambiar la estrategia de despliegue y el database cleaner junto con rspec, conseguí reducir el tiempo de despliegue a 7-8 minutos.",
            link: "",
            github: "",
            image: "/projects/svgl.webp",
            tags: ["gitlab", "rspec", "ruby"]
          },
          {
            title: "Dockerización de una aplicación Ruby on Rails para arquitecturas ARM64 y mysql 5.8 sin soporte para ARM64",
            description:
              "Tras la llegada de nuevos equipos a la empresa, se plantea la necesidad de dockerizar una aplicación Ruby on Rails que se conecta a una base de datos mysql 5.8. El problema es que mysql 5.8 no tiene soporte para arquitecturas ARM64, por lo que se plantea la necesidad de crear una imagen de mysql 5.8 para ARM64. Tras una serie de pruebas, se consigue dockerizar la aplicación Ruby on Rails y la base de datos mysql 5.8 para arquitecturas ARM64 emulando servicios, lo que permite a los nuevos equipos trabajar en la aplicación sin problemas.",
            link: "",
            image: "/projects/adventjs.webp",
            tags: ["docker", "rails", "mysql"]
          },
          {
            title: "Migración de una aplicacion a ReactNative y Rails",
            description:
              "En Beruby me dieron un reto, crear una nueva aplicación que fuera facilmente mantenible y escalable. Tras un análisis, se decidió migrar la aplicación a ReactNative que se conectaba al monolito existente de Rails. Tras un proceso de 2 meses, se consiguió migrar la aplicación a ReactNative y Rails, lo que permitió a los equipos de desarrollo trabajar de manera más eficiente y escalable. Actualmente, la aplicación se encuentra en producción y se sigue trabajando en ella",
            link: "",
            image: "/projects/adventjs.webp",
            tags:["react", "rails", "expo"]
          },
          {
            title: "Creación de un api Proxy en python, rails y AWS SQS",
            description:
              "En mi última empresa, se planteó la necesidad de crear un api proxy que se conectara a un servicio externo y que permitiera a los equipos de desarrollo trabajar de manera más eficiente. Tras un análisis, se decidió crear un api proxy en python que se conectaba a un servicio externo y que se comunicaba con el monolito de Rails a través de AWS SQS. Tras un proceso de 2 semanas, se consiguió crear el api proxy en python, rails y AWS SQS, lo que permitió a los equipos de desarrollo trabajar de manera más eficiente y escalable. Actualmente, el api proxy se encuentra en producción y se sigue trabajando en él",
            link: "",
            image: "/projects/adventjs.webp",
            tags:["python", "rails", "sqs"]
          }
    ],
    'view_more': 'Ver más',
  },
} as const;
