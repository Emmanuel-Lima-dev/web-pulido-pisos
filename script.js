let navBar = document.querySelector(".navbar"),
contTextLogo = document.querySelector(".cont-text-logo"),
formulario = document.querySelector("#formulario");


window.addEventListener("scroll", ()=>{
   
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