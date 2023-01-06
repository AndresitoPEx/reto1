// var encriptar = document.querySelector(".boton-encriptar");
// var desencriptar = document.querySelector(".boton-desencriptar");
// var imagen = document.querySelector(".imagen");
// var subtitulo = document.querySelector(".subtitulo");
// var texto = document.querySelector(".texto");
// var resultado = document.querySelector(".texto-resultado");

// encriptar.onclick = botonEncriptar;
// desencriptar.onclick = botonDesencriptar;

// function botonEncriptar(){
//     ocultarTexto();
//     var input = recuperarTexto();
//     resultado.textContent = encriptarTexto(input);
// }
// function botonDesencriptar(){
//     ocultarTexto();
//     var input = recuperarTexto();
//     resultado.textContent = desencriptarTexto(input);
// }

// function recuperarTexto(){
//     var area = document.querySelector(".area-texto");
//     return area.value;
// }
// function ocultarTexto(){
//     imagen.classList.add("ocultar");
//     subtitulo.classList.add("ocultar");
//     texto.classList.add("ocultar");
// }
// function encriptarTexto(mensaje){
//     var texto = mensaje;
//     var textoFinal = "";

//     for(var i = 0; i < texto.length; i++){
//         if (texto[i] == "a"){
//             textoFinal = textoFinal + "ai";
//         }
//         else if (texto[i] == "e"){
//             textoFinal = textoFinal + "enter";
//         }
//         else if (texto[i] == "i"){
//             textoFinal = textoFinal + "imes";
//         }
//         else if (texto[i] == "o"){
//             textoFinal = textoFinal + "over";
//         }
//         else if (texto[i] == "u"){
//             textoFinal = textoFinal + "ufat";
//         }
//         else{
//             textoFinal = textoFinal + texto[i];
//         }
//     }
//     return textoFinal;
// }

// function desencriptarTexto(mensaje){
//     var texto = mensaje;
//     var textoFinal = "";

//     for(var i = 0; i < texto.length; i++){
//         if (texto[i] == "a"){
//             textoFinal = textoFinal + "a";
//             i = i + 1;
//         }
//         else if (texto[i] == "e"){
//             textoFinal = textoFinal + "e";
//             i = i + 4;
//         }
//         else if (texto[i] == "i"){
//             textoFinal = textoFinal + "i";
//             i = i + 3;
//         }
//         else if (texto[i] == "o"){
//             textoFinal = textoFinal + "o";
//             i = i + 3;
//         }
//         else if (texto[i] == "u"){
//             textoFinal = textoFinal + "u";
//             i = i + 3;
//         }
//         else{
//             textoFinal = textoFinal + texto[i];
//         }
//     }
//     return textoFinal;
// }
function encriptar(){
    var texto = document.getElementById("area-texto").value.toLowerCase();
    var textoCifrado = texto.replace(/e/igm,"enter");
    var textoCifrado = textoCifrado.replace(/o/igm,"ober");
    var textoCifrado = textoCifrado.replace(/i/igm,"imes");
    var textoCifrado = textoCifrado.replace(/a/igm,"ai");
    var textoCifrado = textoCifrado.replace(/u/igm,"ufat");
    
    document.getElementById("imagen").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("texto2").style.display = "none";
    document.getElementById("resultado").innerHTML = textoCifrado;

    document.getElementById("resultado").style.display = "show";
    document.getElementById("resultado").style.display = "inherit";
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}
function desencriptar(){
    var texto = document.getElementById("area-texto").value.toLowerCase();
    var textoCifrado = texto.replace(/enter/igm,"e");
    var textoCifrado = textoCifrado.replace(/ober/igm,"o");
    var textoCifrado = textoCifrado.replace(/imes/igm,"i");
    var textoCifrado = textoCifrado.replace(/ai/igm,"a");
    var textoCifrado = textoCifrado.replace(/ufat/igm,"u");
    
    document.getElementById("imagen").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("texto2").style.display = "none";
    document.getElementById("resultado").innerHTML = textoCifrado;

    document.getElementById("resultado").style.display = "show";
    document.getElementById("resultado").style.display = "inherit";
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}
function copy(){
    var contenido = document.querySelector("#resultado");
    contenido.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles");
}