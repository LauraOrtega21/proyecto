const relojes = [
    {
        imagen: "../Imagenes/RelojOro1.jpg",
        nombre: "Reloj de Oro 1",
        valor: "$3.500.000",
        material: "oro"
    },
    {
        imagen: "../Imagenes/RelojPlata1.jpg",
        nombre: "Reloj de Plata 1",
        valor: "$2.800.000",
        material: "plata"
    },
    {
        imagen: "../Imagenes/RelojBronce1.jpg",
        nombre: "Reloj de Bronce 1",
        valor: "$2.500.000",
        material: "bronce"
    },
    {
        imagen: "../Imagenes/RelojAcero1.jpg",
        nombre: "Reloj de Acero 1",
        valor: "$3.000.000",
        material: "acero"
    },
    {
        imagen: "../Imagenes/RelojOro2.jpg",
        nombre: "Reloj de Oro 2",
        valor: "$3.700.000",
        material: "oro"
    },
    {
        imagen: "../Imagenes/RelojPlata2.jpg",
        nombre: "Reloj de Plata 2",
        valor: "$2.900.000",
        material: "plata"
    },
    {
        imagen: "../Imagenes/RelojBronce2.jpg",
        nombre: "Reloj de Bronce 2",
        valor: "$2.600.000",
        material: "bronce"
    },
    {
        imagen: "../Imagenes/RelojAcero2.jpg",
        nombre: "Reloj de Acero 2",
        valor: "$3.100.000",
        material: "acero"
    },
    {
        imagen: "../Imagenes/RelojOro3.jpg",
        nombre: "Reloj de Oro 3",
        valor: "$3.800.000",
        material: "oro"
    },
    {
        imagen: "../Imagenes/RelojPlata3.jpg",
        nombre: "Reloj de Plata 3",
        valor: "$3.000.000",
        material: "plata"
    },
    {
        imagen: "../Imagenes/RelojBronce3.jpg",
        nombre: "Reloj de Bronce 3",
        valor: "$2.700.000",
        material: "bronce"
    },
    {
        imagen: "../Imagenes/RelojAcero3.jpg",
        nombre: "Reloj de Acero 3",
        valor: "$3.200.000",
        material: "acero"
    }
];

function renderCatalog(filteredRelojes) {
    const catalog = document.getElementById('catalog');
    catalog.innerHTML = '';
    filteredRelojes.forEach(reloj => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${reloj.imagen}" alt="${reloj.nombre}">
            <h3>${reloj.nombre}</h3>
            <p>${reloj.valor}</p>
            <button onclick="verMas('${reloj.nombre}')">Ver más</button>
        `;
        catalog.appendChild(card);
    });
}

function filterCatalog() {
    const material = document.getElementById('materialFilter').value;
    const filteredRelojes = material === 'all' ? relojes : relojes.filter(reloj => reloj.material === material);
    renderCatalog(filteredRelojes);
}

function verMas(nombre) {
    alert(`Más detalles del ${nombre}`);
}

renderCatalog(relojes);
