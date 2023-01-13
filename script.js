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