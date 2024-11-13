// Función para activar el dictado de texto
function activarDictado() {
    const texto = document.body.innerText;
    const mensaje = new SpeechSynthesisUtterance(texto);
    window.speechSynthesis.speak(mensaje);
}

// Función para mostrar mensaje de confirmación al apartar un juego y dictarlo
function apartarJuego(button) {
    const fechaInput = button.previousElementSibling;
    const fechaSeleccionada = fechaInput.value;

    if (fechaSeleccionada) {
        const mensajeConfirmacion = `Apartaste para el día ${fechaSeleccionada}`;
        alert(mensajeConfirmacion);
        
        // Dictar el mensaje de confirmación
        const mensaje = new SpeechSynthesisUtterance(mensajeConfirmacion);
        window.speechSynthesis.speak(mensaje);
    } else {
        const mensajeError = "Por favor selecciona una fecha antes de apartar.";
        alert(mensajeError);
        
        // Dictar el mensaje de error
        const mensaje = new SpeechSynthesisUtterance(mensajeError);
        window.speechSynthesis.speak(mensaje);
    }
}
