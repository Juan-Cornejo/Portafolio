document.getElementById("form-contacto").addEventListener("submit", function(event) {

    event.preventDefault();

    const statusMessage = document.getElementById("status-message");

    statusMessage.textContent = "Procesando...";
    statusMessage.classList.remove("sent");
    statusMessage.classList.add("processing");
    statusMessage.style.display = "block";

    setTimeout(function() {

        statusMessage.textContent = "¡Mensaje enviado!";
        statusMessage.classList.remove("processing");
        statusMessage.classList.add("sent");
 
        document.getElementById("form-contacto").reset();

        setTimeout(function() {
            statusMessage.style.display = "none";
        }, 5000);
    }, 2000);
});