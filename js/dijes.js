const dijes = [
    {
        imagen: "",
        nombre: "Dije de Oro",
        valor: "$1.200.000",
        material: "oro"
    },
    {
        imagen: "",
        nombre: "Dije de Plata",
        valor: "$1.100.000",
        material: "plata"
    },
    {
        imagen: "",
        nombre: "Dije de Bronce",
        valor: "$1.000.000",
        material: "bronce"
    },
    {
        imagen: "",
        nombre: "Dije de Acero",
        valor: "$1.300.000",
        material: "acero"
    },{
        imagen: "",
        nombre: "Dije de Oro",
        valor: "$1.200.000",
        material: "oro"
    },
    {
        imagen: "",
        nombre: "Dije de Plata",
        valor: "$1.100.000",
        material: "plata"
    },
    {
        imagen: "",
        nombre: "Dije de Bronce",
        valor: "$1.000.000",
        material: "bronce"
    },
    {
        imagen: "",
        nombre: "Dije de Acero",
        valor: "$1.300.000",
        material: "acero"
    },
    {
        imagen: "",
        nombre: "Dije de Oro",
        valor: "$1.200.000",
        material: "oro"
    },
    {
        imagen: "",
        nombre: "Dije de Plata",
        valor: "$1.100.000",
        material: "plata"
    },
    {
        imagen: "",
        nombre: "Dije de Bronce",
        valor: "$1.000.000",
        material: "bronce"
    },
    {
        imagen: "",
        nombre: "Dije de Acero",
        valor: "$1.300.000",
        material: "acero"
    },
    {
        imagen: "",
        nombre: "Dije de Oro",
        valor: "$1.200.000",
        material: "oro"
    },
    {
        imagen: "",
        nombre: "Dije de Plata",
        valor: "$1.100.000",
        material: "plata"
    },
    {
        imagen: "",
        nombre: "Dije de Bronce",
        valor: "$1.000.000",
        material: "bronce"
    },
    {
        imagen: "",
        nombre: "Dije de Acero",
        valor: "$1.300.000",
        material: "acero"
    }
];

function catalogoDijes(filterDijes) {
    const catalogD = document.getElementById('catalogD');
    catalogD.innerHTML = '';
    filterDijes.forEach(Dije => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${Dije.imagen}" alt="${Dije.nombre}">
            <h3>${Dije.nombre}</h3>
            <p>${Dije.valor}</p>
            <button onclick="verMas('${Dije.nombre}')">Ver más</button>
        `;
        catalogD.appendChild(card);
    });
}

function filterCatalog() {
    const material = document.getElementById('materialFilter').value;
    const filteredAnillos = material === 'all' ? dijes : dijes.filter(dijes => dijes.material === material);
    catalogoDijes(filteredAnillos);
}

function verMas(nombre) {
    alert(`Más detalles del ${nombre}`);
}

catalogoDijes(dijes);
