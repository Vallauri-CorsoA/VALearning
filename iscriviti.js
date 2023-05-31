//#region variabili globali
let btn_continua = document.querySelector(".btn-continua")
let level_choice = document.getElementById("level-choice")
let conditions_choice = document.getElementById("conditions-choice")
let input_choice = document.getElementById("input-choice")

//#endregion variabili globali

document.querySelector(".btn-continua").addEventListener("click", function (event) {
    let Form = document.querySelector(".form-container")
    let immagine = document.getElementById("contenitore-immagine-signup")
    event.preventDefault() // Previene il comportamento di Default della Form

    var nickname = document.querySelector("#nickname")          // Prendiamo il campo di testo dove deve essere inserito il nickname
    let titolo = document.querySelector(".form-container > h2") // Titolo del box registrazione
    let paragrafo = document.querySelector(".signin")           // <p> sotto il titolo nel box registrazione
    
    if (nickname.value == "") {                                 // Se è vuoto allora aggiungiamo il feedback invalido sotto all'input text
        nickname.classList.add("is-invalid");
    }
    else {                                                      // Altrimenti...
        input_choice.classList.remove("d-none") // Si rimuove la classe Display None, in modo che apparga il prossimo campo da compilare
        nickname.classList.remove("is-invalid") // Rimuove la scritta di invalidità nel caso si sia inserito un nickname
    }

    if (this.textContent == "Registrati") {
        if (document.getElementById("terms-checkbox").checked) { // Controlliamo che l'utente abbia accettato i termini e le condizioni
            immagine.classList.add("d-none")
            document.querySelector("main>div:first-child")
            
            document.getElementById("contenitore-signup").classList.remove("col-md-5")
            //document.getElementById("contenitore-signup").style.transition = "all 2s"
            Form.setAttribute("style", "width:1100px"); // Si cambia la larghezza del form box
            document.querySelector(".signup-img").setAttribute("style", "left:40%;") // Si sposta il logo VALearning
            titolo.textContent = "Seleziona le tue preferenze" // Cambiamente del contenuto del titolo del box registrazione
            paragrafo.textContent = "A fin di garantirti un'ottima esperienza, devi scegliere alcune cose tra cui le tue tipologie preferite di esercizi e gli argomenti su cui ti vuoi soffermare maggiormente." // Cambiamente del contenuto del paragrafo nel box registrazione

            btn_continua.textContent = "Finito"
            level_choice.remove()
            conditions_choice.remove()
            input_choice.remove()
            document.getElementsByClassName("signin")[1].remove()

            nickname.textContent = "Scelta argomenti"
        } else
            alert("Per continuare occorre accettare i termini e le condizioni.")
    }
})

document.getElementById("scelta-studente").addEventListener("click", function () { // Funzione che gestisce la scelta 'Studente'
    level_choice.classList.remove("d-none")
    conditions_choice.classList.remove("d-none")
    btn_continua.textContent = "Registrati"
})

document.getElementById("scelta-docente").addEventListener("click", function () { // Funzione che gestisce la scelta 'Docente'
    level_choice.classList.add("d-none")                 //rimuovo la classe che mostra la scelta del livello di inglese
    conditions_choice.classList.remove("d-none")
    btn_continua.textContent = "Registrati"
})

// DA IMPLEMENTARE SICCOME LE DUE FUNZIONI SOPRA HANNO LO STESSO CONTENUTO
function scelta_avvenuta() {
    level_choice.classList.add("d-none")                 //rimuovo la classe che mostra la scelta del livello di inglese
    conditions_choice.classList.remove("d-none")
    btn_continua.textContent = "Registrati"
}