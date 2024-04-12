//////////////////////Menu////////////////////////

var menuBoton = document.getElementById("menu-boton");
var navMenu = document.getElementById("nav");
var menuIcono = document.getElementById("menu");

navMenu.style.display = "none";

menuBoton.onclick = function menu() {
    if(navMenu.style.display == "none") {
        navMenu.style.display = "block";
        menuIcono.src = "imagenes/cerrar.png";
    }
    else {
        navMenu.style.display = "none";
        menuIcono.src = "imagenes/menu.png";
    }
}

//////////////////////Texto que cambia////////////////////////
const textoEscritoSpan = document.querySelector(".cambio-texto");
const cursorSpan = document.querySelector(".cursor");
const arrayTexto = ["Primer fin de semana: 19 – 21 JULIO 2024", "Segundo fin de semana: 26 – 28 JULIO 2024"];
const delay = 100;
const delayBorrado = 25;
const delayNuevoTexto = 1600;
let textoArrayIndex = 0;
let charIndex = 0;

function textoEscrito() {
    if (!cursorSpan.classList.contains("blink")) cursorSpan.classList.add("blink");
    if(charIndex < arrayTexto[textoArrayIndex].length) {
        textoEscritoSpan.textContent +=  arrayTexto[textoArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(textoEscrito, delay);
    }
    else {
        cursorSpan.classList.remove("blink");
        setTimeout(borrar, delayNuevoTexto);
    }
}

function borrar() {
    if (!cursorSpan.classList.contains("blink")) cursorSpan.classList.add("blink");
    if (charIndex > 0) {
        textoEscritoSpan.textContent =  arrayTexto[textoArrayIndex].substring(0, charIndex-1);
        charIndex--;
        setTimeout(borrar, delayBorrado);
    }
    else {
        cursorSpan.classList.remove("blink");
        textoArrayIndex++;
        if (textoArrayIndex >= arrayTexto.length) textoArrayIndex = 0;
        setTimeout(textoEscrito, delay);
    }
}
        
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(textoEscrito, delayNuevoTexto - 1000);
});

//////////////////////////slider/////////////////////////////////////
let slider = tns({
    container : ".mi-slider",
    "slideBy" : 1,
    "speed" : 400,
    "nav" : false,
    controlsContainer: "#controles",
    prevButton : ".anterior",
    nextButton : ".siguiente",
    responsive: {
        1600: {
            items : 4,
            gutter : 20
        },
        1024: {
            items : 3,
            gutter : 20
        },
        768: {
            items : 2,
            gutter : 20
        },
        480: {
            items : 1
        }
    }
})