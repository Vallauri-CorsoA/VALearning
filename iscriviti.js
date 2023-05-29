document.getElementsByClassName("btn-continua")[0].addEventListener("click", function (event) {
    event.preventDefault();
    /* Aggiungere controllo che l'input username non sia string.empty */
    document.getElementById("input-choice").classList.remove("d-none") // Si rimuove la classe Display None, in modo che apparga il prossimo campo da compilare
})

document.getElementById("scelta-studente").addEventListener("click", function () { // Funzione che gestisce la scelta 'Studente'
    document.getElementById("conditions-choice").classList.remove("d-none")
    document.getElementById("level-choice").classList.remove("d-none")
    document.getElementsByClassName("btn-continua")[0].textContent = "Registrati"
})

document.getElementById("scelta-docente").addEventListener("click", function () { // Funzione che gestisce la scelta 'Docente'
    document.getElementById("conditions-choice").classList.remove("d-none")
    document.getElementsByClassName("btn-continua")[0].textContent = "Registrati"
})