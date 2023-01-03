var encriptar = document.querySelector(".boton-encriptar");
var desencriptar = document.querySelector(".boton-desencriptar");
var imagen = document.querySelector(".imagen");
var subtitulo = document.querySelector(".subtitulo");
var texto = document.querySelector(".texto");
var resultado = document.querySelector(".texto-resultado");

encriptar.onclick = botonEncriptar;
desencriptar.onclick = botonDesencriptar;

function botonEncriptar(){
    ocultarTexto();
    var input = recuperarTexto();
    resultado.textContent = encriptarTexto(input);
}
function botonDesencriptar(){
    ocultarTexto();
    var input = recuperarTexto();
    resultado.textContent = desencriptarTexto(input);
}

function recuperarTexto(){
    var area = document.querySelector(".area-texto");
    return area.value;
}
function ocultarTexto(){
    imagen.classList.add("ocultar");
    subtitulo.classList.add("ocultar");
    texto.classList.add("ocultar");
}
function encriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if (texto[i] == "a"){
            textoFinal = textoFinal + "ai";
        }
        else if (texto[i] == "e"){
            textoFinal = textoFinal + "enter";
        }
        else if (texto[i] == "i"){
            textoFinal = textoFinal + "imes";
        }
        else if (texto[i] == "o"){
            textoFinal = textoFinal + "over";
        }
        else if (texto[i] == "u"){
            textoFinal = textoFinal + "ufat";
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
    }
    return textoFinal;
}

function desencriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if (texto[i] == "a"){
            textoFinal = textoFinal + "a";
            i = i + 1;
        }
        else if (texto[i] == "e"){
            textoFinal = textoFinal + "e";
            i = i + 4;
        }
        else if (texto[i] == "i"){
            textoFinal = textoFinal + "i";
            i = i + 3;
        }
        else if (texto[i] == "o"){
            textoFinal = textoFinal + "o";
            i = i + 3;
        }
        else if (texto[i] == "u"){
            textoFinal = textoFinal + "u";
            i = i + 3;
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
    }
    return textoFinal;
}