# SPRINT FEATURES | Portfolio Personal - Marta Bosquet

¡Bienvenido/a a mi proyecto de Portfolio Personal! Este sitio web ha sido desarrollado como parte de mi formación en **The Bridge School**, enfocándome en la creación de una arquitectura modular, diseño responsive y funcionalidades interactivas avanzadas.

## 🚀 Sobre el Proyecto

Este sitio no es solo una carta de presentación, sino una demostración técnica de habilidades trabajadas durante mi formación. He pasado del mundo de las finanzas a la programación, y este proyecto refleja ese viaje a través de código limpio y estructurado.

### ✨ Características Principales

- **Arquitectura Modular**: Uso de módulos de JavaScript para separar la lógica de datos, plantillas y utilidades.
- **Modo Oscuro (Dark Mode)**: Interfaz adaptable con persistencia de preferencia de usuario.
- **Integración de APIs**: Widget meteorológico en tiempo real utilizando la OpenWeather API.
- **Generación Dinámica de Contenido**: Las secciones de habilidades (Skills), recursos y cheatsheets se generan automáticamente a partir de archivos de datos JS.
- **Diseño Responsive**: Adaptabilidad total a dispositivos móviles.
- **Navegación Interactiva**: Menús dinámicos y navegación fluida entre secciones.

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica para SEO y accesibilidad.
- **CSS3**: Variables CSS (tokens), Flexbox, Grid y animaciones personalizadas.
- **JavaScript (Vanilla)**: Lógica pura sin frameworks, gestión del DOM y consumo de APIs.
- **OpenWeather API**: Datos meteorológicos en vivo.
- **Google Fonts**: Tipografía moderna (Bowlby One y Roboto).

## 📂 Estructura de Directorios

```text
SPRINT-FEATURES/
├── CSS/
│   ├── darkMode.css    # Estilos específicos para el modo oscuro
│   ├── reset.css       # Normalización de estilos
│   └── styles.css      # Estilos principales y sistema de diseño
├── js/
│   ├── data/           # Archivos de datos (skills, recursos, cheatsheets)
│   ├── templates/      # Componentes HTML reutilizables (header, footer)
│   ├── utils/          # Funciones de utilidad (clima, dark mode, listas)
│   └── main.js         # Punto de entrada de la aplicación
├── index.html          # Página principal
├── about.html          # Sección sobre mí
├── contacto.html       # Formulario de contacto
├── recursos.html       # Biblioteca de recursos
└── cheatsheet-*.html   # Guías rápidas de HTML, CSS y JS
```

## 🚀 Instalación y Uso

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/Martabosquet/SPRINT-FEATURES.git
   ```
2. **Abrir el proyecto**:
   Simplemente abre el archivo `index.html` en tu navegador favorito o utiliza una extensión como *Live Server* en VS Code para una mejor experiencia.

3. **Configuración de API (Opcional)**:
   El widget de clima utiliza una clave de API. Si deseas usar tu propia clave, puedes modificarla en `js/utils/weather.js`.

## 📈 Proyectos Incluidos

En el portfolio también podrás encontrar enlaces a otros de mis trabajos:
- **CV-Portfolio**: Este mismo proyecto.
- **Project Break 1**: Herramientas útiles (Reloj, generador de contraseñas, links rápidos y estación meteorológica).
- **Pokedex**: Aplicación interactiva consumiendo la PokéAPI.

---
Desarrollado con ❤️ por [Marta Bosquet](https://github.com/Martabosquet)
