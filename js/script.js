

//menu hamburguesa
const botonMenu = document.getElementById('menu');
const navBar = document.getElementById('navbar');
console.log(botonMenu, navBar);

const mostrarMenu = () => {
    navBar.classList.toggle('oculto');
}

botonMenu.addEventListener('click', mostrarMenu);
navBar.addEventListener('click', mostrarMenu);
//-------------------

