document.getElementsByClassName("btn-continua")[0].addEventListener("click", function (event) {
    event.preventDefault() // Previene il comportamento di Default della Form
    /* Aggiungere controllo che l'input username non sia string.empty */
    
    var username = document.querySelector("#username");     //Prendiamo il campo di testo dove deve essere inserito l'username
    if (username.value == "") {                             //Se è vuoto allora aggiungiamo il feedback invalido sotto all'input text
        username.classList.add("is-invalid");
    }
    else{                                                               //Altrimenti...
    document.getElementById("input-choice").classList.remove("d-none") // Si rimuove la classe Display None, in modo che apparga il prossimo campo da compilare
    }
})

document.getElementById("scelta-studente").addEventListener("click", function () { // Funzione che gestisce la scelta 'Studente'
    document.getElementById("conditions-choice").classList.remove("d-none")         
    document.getElementById("level-choice").classList.remove("d-none")
    document.getElementsByClassName("btn-continua")[0].textContent = "Registrati"
})

document.getElementById("scelta-docente").addEventListener("click", function () { // Funzione che gestisce la scelta 'Docente'
    document.getElementById("level-choice").classList.add("d-none")                 //rimuovo la classe che mostra la scelta del livello di inglese
    document.getElementById("conditions-choice").classList.remove("d-none")
    document.getElementsByClassName("btn-continua")[0].textContent = "Registrati"
})