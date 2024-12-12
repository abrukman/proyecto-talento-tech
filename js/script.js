

//menu hamburguesa
const botonMenu = document.getElementById('menu');
const navBar = document.getElementById('navbar');
console.log(botonMenu, navBar);

const mostrarMenu = () => {
    navBar.classList.toggle('oculto');
}

botonMenu.addEventListener('click', mostrarMenu);
navBar.addEventListener('click', mostrarMenu);

//funcionalidad formulario

const nombreUsuario = document.getElementById('nombre');
const botonSuscribirse = document.getElementById('submit');
const dialog = document.getElementById('suscripto');
const botonCerrarDialog = document.getElementById('cerrar');


botonSuscribirse.addEventListener('click', (e) => {
    if (localStorage.getItem('estaSuscripto') == 'true') {
        e.preventDefault();
        dialog.showModal();
    } else {
    localStorage.setItem('estaSuscripto', 'true');
    };
});

botonCerrarDialog.addEventListener('click', () => {
    dialog.close();
})


