//#region variabili globali

let btn_continua = document.querySelector(".btn-continua")
let level_choice = document.getElementById("level-choice")
let conditions_choice = document.getElementById("conditions-choice")
let input_choice = document.getElementById("input-choice")
let immagine = document.getElementById("contenitore-immagine-signup")
let containerForm = document.getElementById("contenitore-signup")
var nickname = document.querySelector("#nickname")          // Prendiamo il campo di testo dove deve essere inserito il nickname
var nickRegion = document.querySelector(".nick-input")      //Prende tutto il gruppo della form del nickname
var tagInput = document.querySelector("#tagInput");  //prende l'input type text relativo ai tag
var tagRegion = document.querySelector(".tags-input") //prende l'intero gruppo della form dei tags

//#endregion variabili globali

var tags = document.querySelector("#tags")

document.querySelector(".btn-continua").addEventListener("click", function (event) {
    let Form = document.querySelector(".form-container")
   
    event.preventDefault() // Previene il comportamento di Default della Form

   
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
            if (document.getElementById("terms-checkbox").checked && nickname.value != "") { // Controlliamo che l'utente abbia accettato i termini e le condizioni E che egli non abbia rimosso il nickname
            immagine.classList.add("d-none")
            document.querySelector("main>div:first-child")
            
            document.getElementById("contenitore-signup").classList.remove("col-md-5")
            document.getElementById("contenitore-signup").style.transition = "all 2s"
            Form.setAttribute("style", "width:750px; height:auto"); // Si cambia la larghezza del form box
            document.querySelector(".signup-img").setAttribute("style", "left:40%;") // Si sposta il logo VALearning
            titolo.textContent = "Seleziona le tue preferenze" // Cambiamente del contenuto del titolo del box registrazione
            paragrafo.textContent = "A fin di garantirti un'ottima esperienza, devi scegliere alcune cose tra cui le tue tipologie preferite di esercizi e gli argomenti su cui ti vuoi soffermare maggiormente." // Cambiamente del contenuto del paragrafo nel box registrazione
           
            nickRegion.classList.add("d-none")
            tagRegion.classList.remove("d-none")
            btn_continua.textContent = "Finito"
            level_choice.remove()
            conditions_choice.remove()
            input_choice.remove()
            document.getElementsByClassName("signin")[1].remove()
            tags.classList.remove("d-none")
        } else
            alert("Per continuare occorre compilare tutti i campi")
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
/* function scelta_avvenuta() {
    level_choice.classList.add("d-none")                 //rimuovo la classe che mostra la scelta del livello di inglese
    conditions_choice.classList.remove("d-none")
    btn_continua.textContent = "Registrati"
} */

let btn_tags = document.querySelectorAll(".btn-tags") // Prende tutti i bottoni tag
// tagInput TEXT BOX TAGS
// tagRegion GRUPPO FORM TAGS

const tag = []

let tag_container = document.querySelector(".tags-container > div") // Prende il div accanto all'input text

function setTags(e) { // Funzione che gestisce la scelta di uno o più tag
    tag.push(e.target) // Si aggiunge all'array il tag scelto
    tag_container.innerHTML = e.target.textContent // Si visualizza il tag scelto nel div accanto all'input text
}