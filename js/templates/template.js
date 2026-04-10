const header = `
    <a href="index.html" class="logo">MB</a>
    <nav id="menu-navegacion">
        <ul class="nav-links">
        <!-- BARRA NAVEGACIÓN PRINCIPAL FIJADA ARRIBA -->
            <li><a href="./about.html">ABOUT</a></li>
            <li><a href="./index.html#skills">SKILLS</a></li>
            <li><a href="./index.html#cheatsheets">CHEATSHEETS</a></li>
            <li><a href="./index.html#recursos">RECURSOS</a></li>
            <li><a href="./contacto.html">CONTACTO</a></li>
        </ul>
    </nav>
    <!-- DARK-MODE -->
    <button class="dark-mode-toggle" id="darkModeToggle" aria-label="Cambiar modo oscuro/claro">
      <span class="sun-icon">🌙</span>
      <span class="moon-icon" style="display: none;">☀️</span>
    </button>
    <!-- MENU HAMBURGUESA ------> 
    <button id="btn-hamburguesa" class="hamburger">
        <span></span>
        <span></span>
        <span></span>
    </button>
`;

const footer = `
    <i>Envíame un mail directo clicando aquí si lo prefieres:</i>
    <a class="mailto" href="mailto:martabosquetlauci@gmail.com">martabosquetlauci@gmail.com</a>
    <span class="latido">❤</span> 
    <p>&copy; 2026 | Creado por Marta Bosquet  - Proyecto Programación</p>
`;

export {
  header,
  footer
};