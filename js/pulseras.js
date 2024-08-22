const pulseras = [
    {
        imagen: "../Imagenes/PulseraOro1.jpg",
        nombre: "Pulsera de Oro 1",
        valor: "$2.500.000",
        material: "oro"
    },
    {
        imagen: "../Imagenes/PulseraPlata1.jpg",
        nombre: "Pulsera de Plata 1",
        valor: "$2.000.000",
        material: "plata"
    },
    {
        imagen: "../Imagenes/PulseraBronce1.jpg",
        nombre: "Pulsera de Bronce 1",
        valor: "$1.800.000",
        material: "bronce"
    },
    {
        imagen: "../Imagenes/PulseraAcero1.jpg",
        nombre: "Pulsera de Acero 1",
        valor: "$2.200.000",
        material: "acero"
    },
    {
        imagen: "../Imagenes/PulseraOro2.jpg",
        nombre: "Pulsera de Oro 2",
        valor: "$2.600.000",
        material: "oro"
    },
    {
        imagen: "../Imagenes/PulseraPlata2.jpg",
        nombre: "Pulsera de Plata 2",
        valor: "$2.100.000",
        material: "plata"
    },
    {
        imagen: "../Imagenes/PulseraBronce2.jpg",
        nombre: "Pulsera de Bronce 2",
        valor: "$1.900.000",
        material: "bronce"
    },
    {
        imagen: "../Imagenes/PulseraAcero2.jpg",
        nombre: "Pulsera de Acero 2",
        valor: "$2.300.000",
        material: "acero"
    },
    {
        imagen: "../Imagenes/PulseraOro3.jpg",
        nombre: "Pulsera de Oro 3",
        valor: "$2.700.000",
        material: "oro"
    },
    {
        imagen: "../Imagenes/PulseraPlata3.jpg",
        nombre: "Pulsera de Plata 3",
        valor: "$2.200.000",
        material: "plata"
    },
    {
        imagen: "../Imagenes/PulseraBronce3.jpg",
        nombre: "Pulsera de Bronce 3",
        valor: "$2.000.000",
        material: "bronce"
    },
    {
        imagen: "../Imagenes/PulseraAcero3.jpg",
        nombre: "Pulsera de Acero 3",
        valor: "$2.400.000",
        material: "acero"
    }
];

function renderCatalog(filteredPulseras) {
    const catalog = document.getElementById('catalog');
    catalog.innerHTML = '';
    filteredPulseras.forEach(pulsera => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${pulsera.imagen}" alt="${pulsera.nombre}">
            <h3>${pulsera.nombre}</h3>
            <p>${pulsera.valor}</p>
            <button onclick="verMas('${pulsera.nombre}')">Ver más</button>
        `;
        catalog.appendChild(card);
    });
}

function filterCatalog() {
    const material = document.getElementById('materialFilter').value;
    const filteredPulseras = material === 'all' ? pulseras : pulseras.filter(pulsera => pulsera.material === material);
    renderCatalog(filteredPulseras);
}

function verMas(nombre) {
    alert(`Más detalles de la ${nombre}`);
}

renderCatalog(pulseras);
