const anillos = [
    {
        imagen: "../Imagenes/Oro1.jpg",
        nombre: "Anillo de Oro 1",
        valor: "$1.200.000",
        material: "oro"
    },
    {
        imagen: "../Imagenes/Plata1.jpg",
        nombre: "Anillo de Plata 1",
        valor: "$1.100.000",
        material: "plata"
    },
    {
        imagen: "../Imagenes/Bronce1.jpg",
        nombre: "Anillo de Bronce 1",
        valor: "$1.000.000",
        material: "bronce"
    },
    {
        imagen: "",
        nombre: "Anillo de Acero 1",
        valor: "$1.300.000",
        material: "acero"
    },
    {
        imagen: "../Imagenes/Oro2.jpg",
        nombre: "Anillo de Oro 2",
        valor: "$1.200.000",
        material: "oro"
    },
    {
        imagen: "../Imagenes/Plata2.jpg",
        nombre: "Anillo de Plata 2",
        valor: "$1.100.000",
        material: "plata"
    },
    {
        imagen: "../Imagenes/Bronce2.jpg",
        nombre: "Anillo de Bronce 2",
        valor: "$1.000.000",
        material: "bronce"
    },
    {
        imagen: "",
        nombre: "Anillo de Acero 2",
        valor: "$1.300.000",
        material: "acero"
    },
    {
        imagen: "../Imagenes/Oro3.jpg",
        nombre: "Anillo de Oro 3",
        valor: "$1.200.000",
        material: "oro"
    },
    {
        imagen: "../Imagenes/Plata3.jpg",
        nombre: "Anillo de Plata 3",
        valor: "$1.100.000",
        material: "plata"
    },
    {
        imagen: "../Imagenes/Bronce3.jpg",
        nombre: "Anillo de Bronce 3",
        valor: "$1.000.000",
        material: "bronce"
    },
    {
        imagen: "",
        nombre: "Anillo de Acero 3",
        valor: "$1.300.000",
        material: "acero"
    }
];

function renderCatalog(filteredAnillos) {
    const catalog = document.getElementById('catalog');
    catalog.innerHTML = '';
    filteredAnillos.forEach(anillo => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${anillo.imagen}" alt="${anillo.nombre}">
            <h3>${anillo.nombre}</h3>
            <p>${anillo.valor}</p>
            <button onclick="verMas('${anillo.nombre}')">Ver más</button>
        `;
        catalog.appendChild(card);
    });
}

function filterCatalog() {
    const material = document.getElementById('materialFilter').value;
    const filteredAnillos = material === 'all' ? anillos : anillos.filter(anillo => anillo.material === material);
    renderCatalog(filteredAnillos);
}

function verMas(nombre) {
    alert(`Más detalles del ${nombre}`);
}

renderCatalog(anillos);
