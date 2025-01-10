function cambiaracero() {
    const pantalla = document.getElementById("pantalla");
    pantalla.textContent = ""; 
}
function escribirnumero(numero) {
    const pantalla = document.getElementById("pantalla");
    pantalla.textContent += numero;
}
function borrar(){
    const pantalla = document.getElementById("pantalla");
    pantalla.textContent = pantalla.textContent.slice(0, -1); 
}

function calcular() {
    const pantalla = document.getElementById("pantalla");
    try {
        pantalla.textContent = eval(pantalla.textContent);
         
    } catch (e) {
        alert("OPERACION NO VALIDA");
        pantalla.textContent = "";
}
}


 

