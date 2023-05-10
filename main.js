const botonEncriptar = document.getElementById("botonEncriptar");
const rectangulo2 = document.getElementById("rectangulo2");
const textoEncriptado = document.getElementById("textoEncriptado");
const botonCopiar = document.getElementById("botonCopiar");

function encriptar() {
    rectangulo2.style.display = "flex";
    let textoSinEncriptar = document.getElementById("textoSinEncriptar").value; 
    textoEncriptado.innerText = textoSinEncriptar;
}

function desencriptar() {
    rectangulo2.style.display = "none"
    botonCopiar.innerText = "Copiar"
}