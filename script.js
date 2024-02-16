// Seleccionar elementos del DOM una sola vez al cargar el script
const navBar = document.querySelector(".navbar");
const contTextLogo = document.querySelector(".cont-text-logo");
const formulario = document.querySelector("#formulario");
const navbarToggler = document.querySelector('.navbar-toggler');
const navbarCollapse = document.querySelector('.navbar-collapse');
const dropdownLinks = document.querySelectorAll('.navbar-nav .nav-link');
const telefono = document.querySelector('.telefono');
const botonWhatsAppPrincipal = document.querySelector()

// Función para actualizar las clases del navbar
function updateNavbarClasses() {
    const windowWidth = window.innerWidth;
    if (windowWidth <= 768) {
        navBar.classList.remove('navbar-dark');
        navBar.classList.add('navbar-light');
        contTextLogo.classList.add('text-dark')
        contTextLogo.classList.remove("text-white")
    } else {
        navBar.classList.remove('navbar-light');
        navBar.classList.add('navbar-dark');
        contTextLogo.classList.remove('text-dark')
        contTextLogo.classList.add("text-white")
    }
}

// Evento al cargar la página y al cambiar el tamaño de la ventana para actualizar las clases del navbar
window.addEventListener('load', updateNavbarClasses);
window.addEventListener('resize', updateNavbarClasses);

// Evento de scroll para ajustar las clases del navbar
window.addEventListener("scroll", () => {
    if (window.innerWidth > 768) {
        if (window.scrollY === 0) {
            navBar.classList.add("navBarTop", "py-5", "navbar-dark");
            navBar.classList.remove("navBarBottom");
            contTextLogo.classList.add("text-white");
            contTextLogo.classList.remove("text-dark");
        } else if (window.scrollY > 0) {
            navBar.classList.remove("navBarTop");
            navBar.classList.add("navBarBottom");
            navBar.classList.remove("py-5", "navbar-dark");
            contTextLogo.classList.add("text-dark");
            contTextLogo.classList.remove("text-white");
        }
    }
});

// Evento de clic en el documento para cerrar el menú desplegable si está abierto
document.addEventListener('click', (event) => {
    // Verificar si el clic ocurrió dentro del menú desplegable o en el botón del navbar
    const isClickInsideNavbar = navbarCollapse.contains(event.target) || navbarToggler.contains(event.target);
    
    if (!isClickInsideNavbar) {
        // Cerrar el menú desplegable si está abierto
        if (navbarCollapse.classList.contains('show')) {
            navbarToggler.click();
        }
    }
});

// Evento de clic para cerrar el menú desplegable al hacer clic en los enlaces del menú
dropdownLinks.forEach((link) => {
    link.addEventListener('click', () => {
        navbarToggler.click();
    });
});

telefono.addEventListener("keydown", (event) => {
  if (event.key.length === 1 && !/\d|-|\./.test(event.key)) {
    event.preventDefault();
  }
});

// Evento de envío del formulario
formulario.addEventListener('submit', (e) => {
    e.preventDefault(); 
    const nombre = document.querySelector('.nombre').value;
    const mensaje = document.querySelector('.mensaje').value;
    const textoWhatsapp = `Hola, soy ${nombre}.\nMi teléfono es ${telefono.value}.\nMensaje: ${mensaje}`;
    const linkWhatsapp = `https://wa.me/5491128980237?text=${encodeURIComponent(textoWhatsapp)}`;
    window.open(linkWhatsapp, '_blank');
});
