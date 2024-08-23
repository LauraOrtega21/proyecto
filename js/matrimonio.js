const joyasMatrimonio = [
    {
        imagen: "../Imagenes/AnilloMatrimonio1.jpg",
        nombre: "Anillo de Matrimonio 1",
        valor: "$3.000.000",
        tipo: "Bronce"
    },
    {
        imagen: "../Imagenes/CadenaMatrimonio1.jpg",
        nombre: "Cadena de Matrimonio 1",
        valor: "$3.500.000",
        tipo: "Oro"
    },
    {
        imagen: "../Imagenes/AretesMatrimonio1.jpg",
        nombre: "Aretes de Matrimonio 1",
        valor: "$2.500.000",
        tipo: "Plata"
    },
    {
        imagen: "../Imagenes/PulseraMatrimonio1.jpg",
        nombre: "Pulsera de Matrimonio 1",
        valor: "$2.800.000",
        tipo: "Oro"
    },
    {
        imagen: "../Imagenes/AnilloMatrimonio2.jpg",
        nombre: "Anillo de Matrimonio 2",
        valor: "$3.200.000",
        tipo: "Oro"
    },
    {
        imagen: "../Imagenes/CadenaMatrimonio2.jpg",
        nombre: "Cadena de Matrimonio 2",
        valor: "$3.700.000",
        tipo: "Plata"
    },
    {
        imagen: "../Imagenes/AretesMatrimonio2.jpg",
        nombre: "Aretes de Matrimonio 2",
        valor: "$2.700.000",
        tipo: "Bronce"
    },
    {
        imagen: "../Imagenes/PulseraMatrimonio2.jpg",
        nombre: "Pulsera de Matrimonio 2",
        valor: "$3.000.000",
        tipo: "Bronce"
    },
    {
        imagen: "../Imagenes/AnilloMatrimonio3.jpg",
        nombre: "Anillo de Matrimonio 3",
        valor: "$3.400.000",
        tipo: "Oro"
    },
    {
        imagen: "../Imagenes/CadenaMatrimonio3.jpg",
        nombre: "Cadena de Matrimonio 3",
        valor: "$3.900.000",
        tipo: "Bronce"
    },
    {
        imagen: "../Imagenes/AretesMatrimonio3.jpg",
        nombre: "Aretes de Matrimonio 3",
        valor: "$2.900.000",
        tipo: "Plata"
    },
    {
        imagen: "../Imagenes/PulseraMatrimonio3.jpg",
        nombre: "Pulsera de Matrimonio 3",
        valor: "$3.200.000",
        tipo: "Oro"
    }
];

function renderCatalog(filteredJoyas) {
    const catalog = document.getElementById('catalog');
    catalog.innerHTML = '';
    filteredJoyas.forEach(joya => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${joya.imagen}" alt="${joya.nombre}">
            <h3>${joya.nombre}</h3>
            <p>${joya.valor}</p>
            <button onclick="verMas('${joya.nombre}')">Ver más</button>
        `;
        catalog.appendChild(card);
    });
}

function filterCatalog() {
    const tipo = document.getElementById('tipoFilter').value;
    const filteredJoyas = tipo === 'all' ? joyasMatrimonio : joyasMatrimonio.filter(joya => joya.tipo === tipo);
    renderCatalog(filteredJoyas);
}

function verMas(nombre) {
    alert(`Más detalles de la ${nombre}`);
}

renderCatalog(joyasMatrimonio);

