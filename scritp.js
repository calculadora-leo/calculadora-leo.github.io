//CREADOR: LEONARDO ROPAIN 7/01/25
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
        let operacion = pantalla.textContent.replace(/\,/g, '');
        let resultado = eval(operacion);
        pantalla.textContent = resultado;
        coma();
        
        if (resultado === Infinity){
        pantalla.textContent("");
        }
        }   
        catch (e) {
            alert("OPERACION NO VALIDA, INTENTE NUEVAMENTE 😥");
            pantalla.textContent = "";
            
        }
    }


    function coma() {
        const pantalla = document.getElementById("pantalla");
        let contenido = pantalla.textContent.replace(/,/g, ''); // Eliminar comas previas
        
        if (!isNaN(contenido) && contenido.includes(".")) {
            let [entero, decimal] = contenido.split(".");
            entero = entero.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            pantalla.textContent = `${entero}.${decimal}`;
        } else {
            pantalla.textContent = contenido.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
    }
    



