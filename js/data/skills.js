const skills = [
  {
    name: "HTML5",
    icon: "https://cdn.simpleicons.org/html5/E34F26",
    state: "dominada",
    level: "AVANZADO",
    description: "Estructura semántica y accesible para aplicaciones web.",
    tags: ["Semantic HTML", "Accessibility", "SEO"]
  },
  {
    name: "CSS3",
    icon: "https://cdn.simpleicons.org/css/3178C6",
    state: "aprendiendo",
    level: "MEDIO",
    description: "Layouts modernos, animaciones y responsive design.",
    tags: ["Flexbox", "Grid", "Responsive"]
  },
  {
    name: "JavaScript",
    icon: "https://cdn.simpleicons.org/javascript/F7DF1E",
    state: "aprendiendo",
    level: "MEDIO",
    description: "ES6+, manipulación del DOM, async/await, fetch API, módulos y programación funcional.",
    tags: ["ES6", "DOM", "Fetch API", "Async/Await"]
  },
  {
    name: "Análisis Financiero",
    icon: "https://cdn-icons-png.flaticon.com/512/7768/7768568.png",
    state: "dominada",
    level: "AVANZADO",
    description: "Interpretación de ratios, cash flow y resultados para apoyar decisiones financieras.",
    tags: ["ratios", "cash flow", "presupuestos"]
  },
  {
    name: "Planificación financiera",
    icon: "https://cdn-icons-png.flaticon.com/512/7768/7768568.png",
    state: "dominada",
    level: "AVANZADO",
    description: "Elaboración de planes financieros a corto y largo plazo, con enfoque en la optimización de recursos y la gestión de riesgos.",
    tags: ["planes financieros", "optimización de recursos", "gestión de riesgos"]
  },
  {
    name: "Git",
    icon: "https://cdn.simpleicons.org/git/F05032",
    state: "dominada",
    level: "AVANZADO",
    description: "Control de versiones y trabajo colaborativo.",
    tags: ["Version Control", "Branches", "Commits"]
  },
  {
    name: "GitHub",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Github-desktop-logo-symbol.svg/1280px-Github-desktop-logo-symbol.svg.png",
    state: "dominada",
    level: "AVANZADO",
    description: "Repositorios remotos, pull requests y issues.",
    tags: ["Repositories", "PRs", "Issues"]
  },
  {
    name: "React",
    icon: "https://cdn.simpleicons.org/react/61DAFB",
    state: "aprendiendo",
    level: "PRINCIPIANTE",
    description: "Creación de interfaces de usuario interactivas basadas en componentes.",
    tags: ["Hooks", "Components", "Virtual DOM"]
  },
  {
    name: "Node.js",
    icon: "https://cdn.simpleicons.org/nodedotjs/339933",
    state: "aprendiendo",
    level: "PRINCIPIANTE",
    description: "Entorno de ejecución de JavaScript para el lado del servidor.",
    tags: ["Express", "Backend", "npm"]
  },
  {
    name: "Python",
    icon: "https://cdn.simpleicons.org/python/3776AB",
    state: "aprendiendo",
    level: "PRINCIPIANTE",
    description: "Lenguaje versátil para automatización y análisis de datos.",
    tags: ["Data Analysis", "Automation", "Scripts"]
  },
  {
    name: "SQL",
    icon: "https://cdn.simpleicons.org/mysql/4479A1",
    state: "aprendiendo",
    level: "PRINCIPIANTE",
    description: "Consulta y gestión de bases de datos relacionales.",
    tags: ["Queries", "Joins", "Databases"]
  },
  {
    name: "Modelado Financiero",
    icon: "https://cdn-icons-png.flaticon.com/512/11631/11631366.png",
    state: "dominada",
    level: "AVANZADO",
    description: "Construcción de modelos complejos para proyecciones y valoraciones.",
    tags: ["Excel", "VBA", "Forecasting"]
  },
  {
    name: "Gestión de Tesorería",
    icon: "https://cdn-icons-png.flaticon.com/512/2850/2850343.png",
    state: "dominada",
    level: "AVANZADO",
    description: "Control de flujos de caja y optimización de liquidez empresarial.",
    tags: ["Liquidez", "Cash Management", "Banca"]
  },
  {
    name: "Contabilidad de Costes",
    icon: "https://cdn-icons-png.flaticon.com/512/1497/1497835.png",
    state: "dominada",
    level: "AVANZADO",
    description: "Análisis y control de los costes de producción y márgenes operativos.",
    tags: ["Márgenes", "Punto muerto", "KPIs"]
  },
  {
    name: "Evaluación de Inversiones",
    icon: "https://cdn-icons-png.flaticon.com/512/2654/2654518.png",
    state: "dominada",
    level: "AVANZADO",
    description: "Análisis de rentabilidad de proyectos de inversión mediante VAN y TIR.",
    tags: ["VAN/NPV", "TIR/IRR", "Payback"]
  }
];

export default skills;