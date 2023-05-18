const botonEncriptar = document.getElementById("botonEncriptar");
const botonDesencriptar = document.getElementById("botonDesencriptar")
const rectangulo2 = document.getElementById("rectangulo2");
const botonCopiar = document.getElementById("botonCopiar");
const TextoEntrada = document.getElementById("textoSinEncriptar"); 
let contenedorConTexto = document.getElementById("contenedorConTexto");
let texto = "";
let textoEncriptado = "";
let textoDecodificado = "";
let arrayTextoEncriptado = [];


// ---------------------------FUNCIONES------------------------ //

function verificarSiHayTexto() {
    if(texto === ""){
        Swal.fire({
            title: 'Debes poner algun texto',
            text: '',
            icon: 'warning',
            confirmButtonText: 'Ok'
        })
    }
}


function encriptar() {
    arrayTextoEncriptado = [];
    
    for(i = 0; i < texto.length; i++){
        let letra = texto[i];
        
        if(letra === "e"){
            letra = "enter";
        }
        else if(letra === "i"){
            letra = "imes";
        }
        else if(letra === "a"){
            letra = "ai";
        }
        else if(letra === "o"){
            letra = "ober";
        }
        else if(letra === "u"){
            letra = "ufat";
        }
        else if(letra === " "){
            letra += "";
        }
        
        textoEncriptado += letra;
        arrayTextoEncriptado.push(letra);
    }
    
}


function desencriptar(){
    
    for(i = 0; i < arrayTextoEncriptado.length ; i++){
        
        let letra = arrayTextoEncriptado[i];
        
        if(letra === "enter"){
            letra = "e";
        }
        else if(letra === "imes"){
            letra = "i";
        }
        else if(letra === "ai"){
            letra = "a";
        }
        else if(letra === "ober"){
            letra = "o";
        }
        else if(letra === "ufat"){
            letra = "u";
        }
        else if(letra === ""){
            letra += "";
        }

        textoDecodificado += letra;
    }
}


function copiarTexto(){
    console.log(contenedorConTexto.value)
    let textoACopiar = contenedorConTexto.value;
    navigator.clipboard.writeText(textoACopiar);
}




// ---------------------------EVENTOS------------------------ //




TextoEntrada.addEventListener("change", () => {
    texto = TextoEntrada.value;
})


botonEncriptar.addEventListener("click", () => {
    verificarSiHayTexto();
    encriptar();
    rectangulo2.style.display = "flex";
    contenedorConTexto.value = textoEncriptado.valueOf();
    textoEncriptado = "";
})


botonDesencriptar.addEventListener("click", () => {
    verificarSiHayTexto();
    desencriptar();
    rectangulo2.style.display = "flex";
    contenedorConTexto.value = textoDecodificado.valueOf();
    textoDecodificado = "";
})


botonCopiar.addEventListener("click", () => {
    copiarTexto();
    Toastify({
        text: "¡Copiado!",
        duration: 3000,
        destination: "",
        newWindow: true,
        gravity: "top", 
        position: "right", 
        stopOnFocus: true,
        className: "toastify",
        onClick: function(){} 
      }).showToast();
})



