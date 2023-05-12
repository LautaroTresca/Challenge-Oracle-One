const botonEncriptar = document.getElementById("botonEncriptar");
const botonDesencriptar = document.getElementById("botonDesencriptar")
const rectangulo2 = document.getElementById("rectangulo2");
const botonCopiar = document.getElementById("botonCopiar");
let contenedorConTextoEncriptado = document.getElementById("contenedorConTextoEncriptado");
let inputTextoEntrada = document.getElementById("textoSinEncriptar"); 
let texto = " ";
let textoEncriptado = "";
let textDecodificado = "";
let letraACodificar = texto.length;

inputTextoEntrada.focus();

function verificarLetras(letra) {
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
    else if(letra === ""){
        letra += ""
    }

    textoEncriptado += letra
}

function decodificar(){
    textoEncriptado = contenedorConTextoEncriptado.value;
    for(i = 0; i < textoEncriptado.length; i++){
        const letra = textoEncriptado[i]
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

        textDecodificado += letra;
        console.log(textDecodificado)
    }
}


function copiarTexto(){
    let textoACopiar = contenedorConTextoEncriptado.value;
    navigator.clipboard.writeText(textoACopiar);
}

botonEncriptar.addEventListener("click", () => {
    rectangulo2.style.display = "flex";
    contenedorConTextoEncriptado.innerText = textoEncriptado.valueOf();
    textoEncriptado = "";
})


botonDesencriptar.addEventListener("click", () => {
    rectangulo2.style.display = "flex";
    decodificar();
    contenedorConTextoEncriptado.innerText = textDecodificado.valueOf();
})


inputTextoEntrada.addEventListener("click", () => {
    inputTextoEntrada.value = ""
})


inputTextoEntrada.addEventListener("keyup", (event) => {
   if(event.key = /^[a-z-?]$/.test(event.key)){
       texto = inputTextoEntrada.value;
       letraACodificar = texto.charAt(texto.length - 1);
       verificarLetras(letraACodificar);
   }
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



