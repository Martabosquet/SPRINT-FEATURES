const menu = () => {
    const btnHamburguesa = document.getElementById("btn-hamburguesa")
    const menuNavegacion = document.getElementById("menu-navegacion")
    const navLinks = document.querySelectorAll(".nav-links") // la lista de los enlaces

    // Menú hamburguesa: abrir/cerrar

    btnHamburguesa.addEventListener("click", (e) => {
    e.stopPropagation()

    menuNavegacion.classList.toggle("abierto")
    })

    navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        menuNavegacion.classList.remove("abierto")
    })
    })

    document.addEventListener("click", (e) => {
    if (
        !menuNavegacion.contains(e.target) &&
        !btnHamburguesa.contains(e.target)
    ) {
        menuNavegacion.classList.remove("abierto")
    }
    })
};



export default menu; 