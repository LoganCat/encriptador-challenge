var botonEncriptar = document.querySelector(".encriptar");
var botonDesencriptar = document.querySelector(".desencriptar");
var imagenArea2 = document.querySelector(".muneco");
var h3yP = document.querySelector(".decodificar-texto");
var textoEncriptarDesencriptar = document.querySelector(".texto-desencriptado");
var mostrarBoton = document.querySelector(".btn-copy");

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

// function borrarTexto() {
//     document.getElementById("ingresa-texto").value = "";
// }

document.getElementById("borrarTencriptar").addEventListener("click", function() {
    document.getElementById("ingresa-texto").value = "";
});

document.getElementById("borrarTdesencriptar").addEventListener("click", function() {
    document.getElementById("ingresa-texto").value = "";
});

// document.getElementById("btn-copiar").addEventListener("click", function() {
//     document.getElementById("textoDesencriptado").value = "";
// });


function encriptar(){
    ocultarAdelante();
    var cajatexto = recuperarTexto();
    textoEncriptarDesencriptar.textContent = encriptarTexto(cajatexto);
}

function desencriptar(){
    ocultarAdelante();
    var cajatexto = recuperarTexto();
    textoEncriptarDesencriptar.textContent = desencriptarTexto(cajatexto);
}

function recuperarTexto(){
    var cajatexto = document.querySelector(".texto-ingresado");
    return cajatexto.value;

}

function ocultarAdelante(){
    imagenArea2.classList.add("ocultar");
    h3yP.classList.add("ocultar");
    mostrarBoton.classList.add("mostrar");
}


function encriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "ai"
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "enter"
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "imes"
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "ober"
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "ufat"
        }
        else{
            textoFinal = textoFinal + texto[i]
        }
    }
    return textoFinal;
}

function desencriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "a"
            i = i+1;
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "e"
            i = i+4;
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "i"
            i = i+3;
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "o"
            i = i+3;
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "u"
            i = i+3;
        }
        else{
            textoFinal = textoFinal + texto[i]
        }
    }
    return textoFinal;
}

const btnCopiar = document.querySelector(".copiar");   
    btnCopiar.addEventListener("click", copiar = () => {
        var contenido = document.querySelector(".texto-desencriptado")
        .textContent;
        navigator.clipboard.writeText(contenido);
        console.log("hola mundo");
    });
