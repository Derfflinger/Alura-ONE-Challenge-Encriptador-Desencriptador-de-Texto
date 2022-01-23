//HTML - JavaScript
var input = document.querySelector("input#input-texto");
var output = document.querySelector("input#output-texto");
var botonEncriptar = document.querySelector("input#btn-encriptar");
var botonDesencriptar = document.querySelector("input#btn-desencriptar");

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

//Funciones

function encriptar () {
    var input = document.querySelector("input#input-texto").value;
    console.log(input);
    var mayusculas = /[A-Z]/g;
    var caracteresEspeciales = /[áéíóú]/g;

    if (input.match(mayusculas)) {
        alert("No se permiten letras mayúsculas ni caracteres especiales");
    }
    else if (input.match(caracteresEspeciales)){
        alert("No se permiten letras mayúsculas ni caracteres especiales");
    } 
    else {
        var input = document.querySelector("input#input-texto").value; 
        var mensajeEncriptado = input.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
        document.querySelector("input#output-texto").value = mensajeEncriptado;
    }  
}  

function desencriptar () {
    var input = document.querySelector("input#input-texto").value;
    console.log(input);
    var mayusculas = /[A-Z]/g;
    var caracteresEspeciales = /[áéíóú]/g;

    if (input.match(mayusculas)) {
        alert("No se permiten letras mayúsculas ni caracteres especiales");
    }
    else if (input.match(caracteresEspeciales)){
        alert("No se permiten letras mayúsculas ni caracteres especiales");
    } 
    else {
        var input = document.querySelector("input#input-texto").value;
        var mensajeDesencriptado = input.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
        document.querySelector("input#output-texto").value = mensajeDesencriptado;
    }
}