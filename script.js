const fondo = document.getElementById("fondo");

// TUS FOTOS EXACTAS
const fotos = [
    "fotos/foto1.jpg",
    "fotos/foto2.jpg",
    "fotos/foto3.jpg",
    "fotos/foto4.jpg",
    "fotos/foto5.jpg",
    "fotos/foto6.jpg",
    "fotos/foto7.jpg",
    "fotos/foto8.jpg",
    "fotos/foto9.jpg",
    "fotos/foto10.jpg",
    "fotos/foto11.jpg",
    "fotos/foto12.jpg",
    "fotos/foto13.jpg",
    "fotos/foto14.jpg",
    "fotos/foto15.jpg",
    "fotos/foto16.jpg",
    "fotos/foto17.jpg",
    "fotos/foto18.jpg",
    "fotos/foto19.jpg",
    "fotos/foto20.jpg",
    "fotos/foto21.jpg",
    "fotos/foto22.jpg",
    "fotos/foto23.jpg",
    "fotos/foto24.jpg",
    "fotos/foto25.jpg",
    "fotos/foto26.jpg",
    "fotos/foto27.jpg",
    "fotos/foto28.jpg",
    "fotos/foto29.jpg",
    "fotos/foto30.jpg",
    "fotos/foto31.jpg",
    "fotos/foto32.jpg",
    "fotos/foto33.jpg",
    "fotos/foto34.jpg",
    "fotos/foto35.jpg",
    "fotos/foto36.jpg",
    "fotos/foto37.jpg",
    "fotos/foto38.jpg",
    "fotos/foto39.jpg",
    "fotos/foto40.jpg",
    "fotos/foto41.jpg",
    "fotos/foto42.jpg",
    "fotos/foto43.jpg",
    "fotos/foto44.jpg",
    "fotos/foto45.jpg",
    "fotos/foto46.jpg",
    "fotos/foto47.jpg",
    "fotos/foto48.jpg",
    "fotos/foto49.jpg",
    "fotos/foto50.jpg",
    "fotos/foto51.jpg",
    "fotos/foto52.jpg",
    "fotos/foto53.jpg",
    "fotos/foto54.jpg",
    "fotos/foto55.jpg",
    "fotos/foto56.jpg",
    "fotos/foto57.jpg",
    "fotos/foto58.jpg",
    "fotos/foto59.jpg",
    "fotos/foto60.jpg",
    "fotos/foto61.jpg",
    "fotos/foto62.jpg",
    "fotos/foto63.jpg"
];

function crearFondo() {
    const img = document.createElement("div");
    img.classList.add("fondo-img");

    const foto = fotos[Math.floor(Math.random() * fotos.length)];
    img.style.backgroundImage = `url("${foto}")`;

    img.style.left = Math.random() * 100 + "vw";
    img.style.top = Math.random() * 100 + "vh";

    const size = 30 + Math.random() * 20;
    img.style.width = size + "px";
    img.style.height = size + "px";

    const duracion = 3 + Math.random() * 3;
    img.style.animationDuration = duracion + "s";

    fondo.appendChild(img);
}

for (let i = 0; i < 150; i++) {
    crearFondo();
}

setInterval(crearFondo, 1000);
