let navBar = document.querySelector(".navbar"),
contTextLogo = document.querySelector(".cont-text-logo"),
formulario = document.querySelector("#formulario");

window.addEventListener('load', function() {
    updateNavbarClasses(); // Llama a la función para establecer las clases del navbar al cargar la página

    window.addEventListener('resize', function() {
        updateNavbarClasses(); // Llama a la función cada vez que cambie el tamaño de la ventana
    });
});

function updateNavbarClasses() {
    let navbar = document.querySelector('.navbar');
    let windowWidth = window.innerWidth;

    if (windowWidth <= 768) {
        navbar.classList.remove('navbar-dark');
        navbar.classList.add('navbar-light');
        contTextLogo.classList.add('text-dark')
        contTextLogo.classList.remove("text-white")
    } else {
        navbar.classList.remove('navbar-light');
        navbar.classList.add('navbar-dark');
        contTextLogo.classList.remove('text-dark')
        contTextLogo.classList.add("text-white")
    }
}



window.addEventListener("scroll", ()=>{
    if (window.innerWidth > 768) {
        if (window.scrollY === 0) {
            navBar.classList.add("navBarTop")
            navBar.classList.add("py-5")
            navBar.classList.add("navbar-dark")
            navBar.classList.remove("navBarBottom")
            contTextLogo.classList.add("text-white")
            contTextLogo.classList.remove("text-dark")
    
        } else if (window.scrollY > 0) {
            navBar.classList.remove("navBarTop")
            navBar.classList.add("navBarBottom")
            navBar.classList.remove("py-5")
            navBar.classList.remove("navbar-dark")
            contTextLogo.classList.add("text-dark")
            contTextLogo.classList.remove("text-white")
        }
    }

    
});

document.addEventListener('DOMContentLoaded', function () {
    // Obtener el botón del navbar y el menú desplegable
    var navbarToggler = document.querySelector('.navbar-toggler');
    var navbarCollapse = document.querySelector('.navbar-collapse');
  
    // Agregar un evento de clic al documento
    document.addEventListener('click', function (event) {
      // Verificar si el clic no ocurrió dentro del menú desplegable y el botón del navbar
      if (!navbarCollapse.contains(event.target) && !navbarToggler.contains(event.target)) {
        // Cerrar el menú desplegable si está abierto
        if (!navbarCollapse.classList.contains('collapsed')) {
          navbarToggler.click();
        }
      }
    });
  
    // Obtener todos los enlaces del menú desplegable
    var dropdownLinks = document.querySelectorAll('.navbar-nav .nav-link');
  
    // Agregar evento de clic para cada enlace del menú desplegable
    dropdownLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        // Cerrar el menú desplegable
        navbarToggler.click();
      });
    });
  });
  



formulario.addEventListener('submit', function(e) {
    e.preventDefault(); 
    let nombre = document.getElementById('nombre').value;
    let telefono = document.getElementById('telefono').value;
    let mensaje = document.getElementById('mensaje').value;
    let textoWhatsapp = 'Hola, soy ' + nombre + '. Mi teléfono es ' + telefono + '. Mensaje: ' + mensaje;
    let linkWhatsapp = 'https://wa.me/5491128980237?text=' + encodeURIComponent(textoWhatsapp);
    window.open(linkWhatsapp, '_blank');
});