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
fetch('../albums.json')
.then(response => {
    return response.json();
})
.then(data => {
    for (let i = 0; i < data.length; i++) {
        const tracksArr = data[i].tracks;
        const albumTracklist = document.createElement('ol');
        albumTracklist.id = `${data[i].nombre}-tracklist`;
        albumTracklist.classList.add('tracklist');
        for (let t = 0; t < tracksArr.length; t++) {
            albumTracklist.innerHTML += `<li><audio id='${tracksArr[t].titulo}' src='${tracksArr[t].src}'></audio>${tracksArr[t].id} - ${tracksArr[t].titulo}</li>`;
        };
        const albumDiv = document.createElement('div');
        albumDiv.classList.add('album');
        albumDiv.appendChild(albumTracklist);
        albumDiv.innerHTML += `<img class='tapaDisco'src='${data[i].tapa}' alt='portada ${data[i].nombre}'>
        <h3>${data[i].nombre}</h3>
        <div class="botonera">
            <button id='prev-track-${data[i].nombre}' class='secundario'><i class="fa-solid fa-backward-step"></i></button>
            <button id='play-${data[i].nombre}' class='principal'><i class="fa-solid fa-play"></i></button>
            <button id='next-track-${data[i].nombre}' class='secundario'><i class="fa-solid fa-forward-step"></i></i></button>
        </div>`;
        sectionMusica.appendChild(albumDiv);    
    };

    //reproduccion de musica
    const barbacoajAlbum = document.getElementById('barbacoaj-tracklist');
    console.log(barbacoajAlbum);
});






