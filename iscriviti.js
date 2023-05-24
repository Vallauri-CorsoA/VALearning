document.getElementsByClassName("btn-continua")[0].addEventListener("click", function () {
    /* Aggiungere controllo che l'input username non sia string.empty */
    document.getElementById("input-password").classList.remove("d-none")
})