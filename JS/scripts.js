/*
let nombre = prompt("Introduce tu nombre:");

document.write("<p>Bienvenido " +nombre+ "<p>");
*/

//Tiene que ser en incógnito
let nombre = localStorage.getItem("resultado");

if (nombre === null){
    nombre = prompt("Cuál es tu nombre?");
    localStorage.setItem("resultado", nombre);
}

document.write("<p>Bienvenido " +nombre+ "<p>");

