const $formulario = document.querySelector("form");
const nombre = document.querySelector("#nombre");
const apellido = document.querySelector("#apellido");
const telefono = document.querySelector("#telefono");
const correo = document.querySelector("#correo");
const tipo_documento = document.querySelector("#tipo_documento");
const documento = document.querySelector("#documento");
const politicas = document.querySelector("#politicas");
const button = document.querySelector("#button");
const contraseña = document.querySelector("#contraseña");


const validar = (event) => {
    event.preventDefault();  
    let valid = true;

    if (nombre.value === "") {
        alert("El campo no puede estar vacío");
        nombre.focus();
        nombre.classList.add("error");
        valid = false;
    }
    if (apellido.value === "") {
        apellido.focus();
        apellido.classList.add("error");
        valid = false;
    }
    if (telefono.value === "") {
        telefono.focus();
        telefono.classList.add("error");
        valid = false;
    }
    if (correo.value === "") {
        correo.focus();
        correo.classList.add("error");
        valid = false;
    }
    if (tipo_documento.value === "") {
        tipo_documento.focus();
        tipo_documento.classList.add("error");
        valid = false;
    }
    if (documento.value === "") {
        documento.focus();
        documento.classList.add("error");
        valid = false;
    }

    if (valid) {
        $formulario.submit();
    }
}

const remover = (e, input) => {
    if (input.value !== "") {
        input.classList.remove("error");
        input.classList.add("correcto");
    } else {
        input.classList.remove("correcto");
        input.classList.add("error");
    }
}

$formulario.addEventListener("submit", validar);

nombre.addEventListener("blur", (event) => {
    remover(event, nombre);
});
apellido.addEventListener("blur", (event) => {
    remover(event, apellido);
});
telefono.addEventListener("blur", (event) => {
    remover(event, telefono);
});
correo.addEventListener("blur", (event) => {
    remover(event, direccion);
});
tipo_documento.addEventListener("blur", (event) => {
    remover(event, tipo_documento);
});
documento.addEventListener("blur", (event) => {
    remover(event, documento);
});
contraseña.addEventListener("blur", (event) => {
    remover(event, contraseña);
});

  
$formulario.addEventListener("submit", validar);

nombre.addEventListener("keydown", (event) => {
    remover(event, nombre);
});
apellido.addEventListener("keydown", (event) => {
    remover(event, apellido);
});
telefono.addEventListener("keydown", (event) => {
    remover(event, telefono);
});
correo.addEventListener("keydown", (event) => {
    remover(event, correo);
});
tipo_documento.addEventListener("keydown", (event) => {
    remover(event, tipo_documento);
});
documento.addEventListener("keydown", (event) => {
    remover(event, documento);
});
contraseña.addEventListener("keydown", (event) => {
    remover(event, documento);
});

addEventListener("DOMContentLoaded", (e)=>{
    if(!politicas.checked){
        console.log(button);
        button.setAttribute("disabled", "");
    }
});

politicas.addEventListener("change", function (e) {
    console.log(e.target.checked);
    if(e.target.checked){
        button.removeAttribute("disabled")
    }
})

    
    
const numeros = (event) => {
    if(event.keyCode < 48 || event.keyCode > 57){
     event.preventDefault()   
     console.log("Si")
    } 
}


const letras = (event, elemento) => {
    //console.log(elemento.value);
    // if (event.keyCode < 97 || event.keyCode > 122 && event.keyCode=== [250,243,237,233,225].includes(charCode){
    //  event.preventDefault()   
    // } 
let letras = /^[a-zA-ZÀ-ÿ\s]+$/;
    if (letras.test(elemento.value)){
        console.log("Si");
    }else{
        event.preventDefault() 
    }
}

documento.addEventListener("keypress", numeros)
telefono.addEventListener("keypress", numeros)
nombre.addEventListener("keyup", (event)=>{
    letras(event, nombre)
});
apellido.addEventListener("keypress", (event)=>{
    letras(event, apellido)
});
correo.addEventListener("keypress", (event)=>{
    letras(event, apellido)
});