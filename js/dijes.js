const dijes = [
    {
        imagen: "../Imagenes/DijeOro1.jpg",
        nombre: "Dije de Oro 1",
        valor: "$800.000",
        material: "oro"
    },
    {
        imagen: "../Imagenes/DijePlata1.jpg",
        nombre: "Dije de Plata 1",
        valor: "$600.000",
        material: "plata"
    },
    {
        imagen: "../Imagenes/DijeBronce1.jpg",
        nombre: "Dije de Bronce 1",
        valor: "$500.000",
        material: "bronce"
    },
    {
        imagen: "../Imagenes/DijeAcero1.jpg",
        nombre: "Dije de Acero 1",
        valor: "$700.000",
        material: "acero"
    },
    {
        imagen: "../Imagenes/DijeOro2.jpg",
        nombre: "Dije de Oro 2",
        valor: "$900.000",
        material: "oro"
    },
    {
        imagen: "../Imagenes/DijePlata2.jpg",
        nombre: "Dije de Plata 2",
        valor: "$650.000",
        material: "plata"
    },
    {
        imagen: "../Imagenes/DijeBronce2.jpg",
        nombre: "Dije de Bronce 2",
        valor: "$550.000",
        material: "bronce"
    },
    {
        imagen: "../Imagenes/DijeAcero2.jpg",
        nombre: "Dije de Acero 2",
        valor: "$750.000",
        material: "acero"
    },
    {
        imagen: "../Imagenes/DijeOro3.jpg",
        nombre: "Dije de Oro 3",
        valor: "$850.000",
        material: "oro"
    },
    {
        imagen: "../Imagenes/DijePlata3.jpg",
        nombre: "Dije de Plata 3",
        valor: "$600.000",
        material: "plata"
    },
    {
        imagen: "../Imagenes/DijeBronce3.jpg",
        nombre: "Dije de Bronce 3",
        valor: "$500.000",
        material: "bronce"
    },
    {
        imagen: "../Imagenes/DijeAcero3.jpg",
        nombre: "Dije de Acero 3",
        valor: "$700.000",
        material: "acero"
    }
];

function renderCatalog(filteredDijes) {
    const catalog = document.getElementById('catalog');
    catalog.innerHTML = '';
    filteredDijes.forEach(dije => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${dije.imagen}" alt="${dije.nombre}">
            <h3>${dije.nombre}</h3>
            <p>${dije.valor}</p>
            <button onclick="verMas('${dije.nombre}')">Ver más</button>
        `;
        catalog.appendChild(card);
    });
}

function filterCatalog() {
    const material = document.getElementById('materialFilter').value;
    const filteredDijes = material === 'all' ? dijes : dijes.filter(dije => dije.material === material);
    renderCatalog(filteredDijes);
}

function verMas(nombre) {
    alert(`Más detalles del ${nombre}`);
}

renderCatalog(dijes);
