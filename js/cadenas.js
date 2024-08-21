const cadenas = [
    {
        imagen: "../Imagenes/CadenaOro1.jpg",
        nombre: "Cadena de Oro 1",
        valor: "$2.500.000",
        material: "oro"
    },
    {
        imagen: "../Imagenes/CadenaPlata1.jpg",
        nombre: "Cadena de Plata 1",
        valor: "$1.800.000",
        material: "plata"
    },
    {
        imagen: "../Imagenes/CadenaBronce1.jpg",
        nombre: "Cadena de Bronce 1",
        valor: "$1.500.000",
        material: "bronce"
    },
    {
        imagen: "../Imagenes/CadenaAcero1.jpg",
        nombre: "Cadena de Acero 1",
        valor: "$2.000.000",
        material: "acero"
    },
    {
        imagen: "../Imagenes/CadenaOro2.jpg",
        nombre: "Cadena de Oro 2",
        valor: "$2.700.000",
        material: "oro"
    },
    {
        imagen: "../Imagenes/CadenaPlata2.jpg",
        nombre: "Cadena de Plata 2",
        valor: "$1.900.000",
        material: "plata"
    },
    {
        imagen: "../Imagenes/CadenaBronce2.jpg",
        nombre: "Cadena de Bronce 2",
        valor: "$1.600.000",
        material: "bronce"
    },
    {
        imagen: "../Imagenes/CadenaAcero2.jpg",
        nombre: "Cadena de Acero 2",
        valor: "$2.100.000",
        material: "acero"
    },
    {
        imagen: "../Imagenes/CadenaOro3.jpg",
        nombre: "Cadena de Oro 3",
        valor: "$2.800.000",
        material: "oro"
    },
    {
        imagen: "../Imagenes/CadenaPlata3.jpg",
        nombre: "Cadena de Plata 3",
        valor: "$2.000.000",
        material: "plata"
    },
    {
        imagen: "../Imagenes/CadenaBronce3.jpg",
        nombre: "Cadena de Bronce 3",
        valor: "$1.700.000",
        material: "bronce"
    },
    {
        imagen: "../Imagenes/CadenaAcero3.jpg",
        nombre: "Cadena de Acero 3",
        valor: "$2.200.000",
        material: "acero"
    }
];

function renderCatalog(filteredCadenas) {
    const catalog = document.getElementById('catalog');
    catalog.innerHTML = '';
    filteredCadenas.forEach(cadena => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${cadena.imagen}" alt="${cadena.nombre}">
            <h3>${cadena.nombre}</h3>
            <p>${cadena.valor}</p>
            <button onclick="verMas('${cadena.nombre}')">Ver más</button>
        `;
        catalog.appendChild(card);
    });
}

function filterCatalog() {
    const material = document.getElementById('materialFilter').value;
    const filteredCadenas = material === 'all' ? cadenas : cadenas.filter(cadena => cadena.material === material);
    renderCatalog(filteredCadenas);
}

function verMas(nombre) {
    alert(`Más detalles de la ${nombre}`);
}

renderCatalog(cadenas);
