function cambiaracero() {
    const pantalla = document.getElementById("pantalla");
    pantalla.textContent = ""; 
}

function escribirnumero(numero) {
    const pantalla = document.getElementById("pantalla");
    pantalla.textContent += numero;
    coma();
}

function borrar() {
    const pantalla = document.getElementById("pantalla");
    pantalla.textContent = pantalla.textContent.slice(0, -1); 
    coma();
}

function calcular() {
    const pantalla = document.getElementById("pantalla");
    try {
        pantalla.textContent = eval(pantalla.textContent.replace(/\,/g, ''));
        coma();
    } catch (e) {
        alert("OPERACION NO VALIDA INTENTE NUEVAMENTE");
        pantalla.textContent = "";
    }
}

function coma() {
    const pantalla = document.getElementById("pantalla");
    let contenido = pantalla.textContent;
    contenido = contenido.replace(/\,/g, '');
    contenido = contenido.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    pantalla.textContent = contenido;
}

