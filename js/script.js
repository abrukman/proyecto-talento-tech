//cargar pagina en section 'nosotrxs'
window.onload = () => {
    if (window.location.hash !== '#nosotrxs') {
        window.location.hash = 'nosotrxs';
    };
};

//menu hamburguesa
const botonMenu = document.getElementById('menu');
const navBar = document.getElementById('navbar');

const mostrarMenu = () => {
    navBar.classList.toggle('oculto');
};

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
});

//galeria de fotos
const fotos = document.getElementsByClassName('fotos');
const galeria = document.getElementById('galeria');
const btnAtras = document.getElementById('atras');
const btnAdelante = document.getElementById('adelante');
let fotoActiva = 0;
console.log(fotoActiva);

const resetearGaleria = () => {
    for (let i = 0; i < fotos.length; i++) {
        fotos[i].classList.remove('activa');
    };
    fotos[fotoActiva].classList.toggle('activa');
};

const pasarALaSigFoto = () => {
    if (fotoActiva === fotos.length - 1) {
        fotoActiva = 0;
        resetearGaleria();
    } else {
        fotoActiva += 1;
        resetearGaleria();
    };
};

const pasarALaFotoAnt = () => {
    if (fotoActiva === 0) {
        fotoActiva = fotos.length - 1;
        resetearGaleria();
    } else {
        fotoActiva -= 1;
        resetearGaleria();
    };
};

resetearGaleria();

btnAdelante.addEventListener('click', pasarALaSigFoto);
btnAtras.addEventListener('click', pasarALaFotoAnt);

//albumes

const sectionMusica = document.getElementById('musica');
console.log(sectionMusica)
fetch('../albums.json')
.then(response => {
    return response.json();
})
.then(data => {
    console.log(data);
    for (let i = 0; i < data.length; i++) {
        const albumDiv = document.createElement('div');
        albumDiv.classList.add('album');
        albumDiv.innerHTML = `<img class='tapaDisco'src='${data[i].tapa}' alt='portada ${data[i].nombre}'>
        <h3>${data[i].nombre}</h3>
        <button class='play'><i class="fa-solid fa-play"></i></button>`;
        console.log(albumDiv)
        sectionMusica.appendChild(albumDiv);
    };
});





