
document.querySelector(".btn-continua").addEventListener("click", function (event) {
    let Form = document.querySelector(".form-container")
    let immagine = document.getElementById("contenitore-immagine-signup")
    event.preventDefault() // Previene il comportamento di Default della Form
    /* Aggiungere controllo che l'input username non sia string.empty */
    
    var username = document.querySelector("#username");     //Prendiamo il campo di testo dove deve essere inserito l'username
    if (username.value == "") {                             //Se è vuoto allora aggiungiamo il feedback invalido sotto all'input text
        username.classList.add("is-invalid");
    }
    else{                                                               //Altrimenti...
    document.getElementById("input-choice").classList.remove("d-none") // Si rimuove la classe Display None, in modo che apparga il prossimo campo da compilare
    username.classList.remove("is-invalid") // Rimuove la scritta di invalidità nel caso si sia inserito un Username
    }

    if(this.textContent == "Registrati") {
        if(document.getElementById("terms-checkbox").checked) { // Controlliamo che l'utente abbia accettato i termini e le condizioni
            immagine.classList.add("d-none")
            document.getElementById("contenitore-signup").classList.remove("col-md-5")
            //document.getElementById("contenitore-signup").style.transition = "all 2s"

        } else alert("Per continuare occorre accettare i termini e le condizioni.")
        
        
    }
})

let btn_continua = document.querySelector(".btn-continua")

document.getElementById("scelta-studente").addEventListener("click", function () { // Funzione che gestisce la scelta 'Studente'
    document.getElementById("conditions-choice").classList.remove("d-none")         
    document.getElementById("level-choice").classList.remove("d-none")
    btn_continua.textContent = "Registrati"
})

document.getElementById("scelta-docente").addEventListener("click", function () { // Funzione che gestisce la scelta 'Docente'
    document.getElementById("level-choice").classList.add("d-none")                 //rimuovo la classe che mostra la scelta del livello di inglese
    document.getElementById("conditions-choice").classList.remove("d-none")
    btn_continua.textContent = "Registrati"
})