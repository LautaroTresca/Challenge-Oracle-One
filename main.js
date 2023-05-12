const botonEncriptar = document.getElementById("botonEncriptar");
const botonDesencriptar = document.getElementById("botonDesencriptar")
const rectangulo2 = document.getElementById("rectangulo2");
const botonCopiar = document.getElementById("botonCopiar");
let contenedorConTexto = document.getElementById("contenedorConTexto");
let inputTextoEntrada = document.getElementById("textoSinEncriptar"); 
let texto = " ";
let textoEncriptado = "";
let arrayConTextoEncriptado = [];
let textoDecodificado = "";
inputTextoEntrada.focus();

// ---------------------------FUNCIONES------------------------ //


function encriptar(letra) {
    console.log(letra)
    if(letra === "e"){
        letra = "enter";
    }
    else if(letra === "i"){
        letra = "imes"
    }
    else if(letra === "a"){
        letra = "ai"
    }
    else if(letra === "o"){
        letra = "ober"
    }
    else if(letra === "u"){
        letra = "ufat"
    }
    else if(letra === " "){
        letra += ""
    }

    textoEncriptado += letra
    arrayConTextoEncriptado.push(letra)
}

function desencriptar(){
    for(i = 0; i < arrayConTextoEncriptado.length; i++){
        let letra = arrayConTextoEncriptado[i]
        if(letra === "enter"){
            letra = "e";
        }
        else if(letra === "imes"){
            letra = "i"
        }
        else if(letra === "ai"){
            letra = "a"
        }
        else if(letra === "ober"){
            letra = "o"
        }
        else if(letra === "ufat"){
            letra = "u"
        }
        else if(letra === ""){
            letra += ""
        }

        textoDecodificado += letra;
    }
}


function copiarTexto(){
    let textoACopiar = contenedorConTexto.value;
    navigator.clipboard.writeText(textoACopiar);
}





// ---------------------------EVENTOS------------------------ //





botonEncriptar.addEventListener("click", () => {
    rectangulo2.style.display = "flex";
    contenedorConTexto.innerText = textoEncriptado.valueOf();
    textoEncriptado = "";
})


botonDesencriptar.addEventListener("click", () => {
    rectangulo2.style.display = "flex";
    desencriptar();
    contenedorConTexto.innerText = textoDecodificado.valueOf();
})


inputTextoEntrada.addEventListener("keypress", (event) => {
    letra = event.key;
    encriptar(letra);
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



