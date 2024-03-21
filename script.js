var botonEncriptar = document.querySelector(".encriptar");
var botonDesencriptar = document.querySelector(".desencriptar");
var imagenArea2 = document.querySelector(".muneco");
var h3yP = document.querySelector(".decodificar-texto");
var textoEncriptarDesencriptar = document.querySelector(".texto-desencriptado");

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

function encriptar(){
    ocultarAdelante();
    var cajatexto = recuperaTexto();
    textoEncriptarDesencriptar.textContent = encriptarTexto(cajatexto);
}

function desencriptar(){
    ocultarAdelante();
    var cajatexto = recuperaTexto();
    textoEncriptarDesencriptar.textContent = desencriptarTexto(cajatexto);
}

function recuperaTexto(){
    var cajatexto = document.querySelector(".cajatexto");
    return cajatexto.value;
}

function ocultarAdelante(){
    imagenArea2.classList.add("ocultar");
    h3yP.classList.add("ocultar");
}


