/* FILE JAVASCRIPT DEDICATO ALLA PAGINA DI REGISTRAZIONE DELL'UTENTE */

//#region variabili globali

let btn_continua = document.querySelector(".btn-continua")            // Pulsante parte destra della schermata di registrazione
let level_choice = document.getElementById("level-choice")            // Scelta del livello di inglese
let conditions_choice = document.getElementById("conditions-choice")  // Paragrafo termini e condizioni
let input_choice = document.getElementById("input-choice")            // Contenitore scelta studente / docente
let immagine = document.getElementById("contenitore-immagine-signup") // Contenitore immagine schermata registrazione
var nickname = document.querySelector("#nickname")                    // Prendiamo il campo di testo dove deve essere inserito il nickname
var nickRegion = document.querySelector(".nick-input")                // Prende tutto il gruppo della form del nickname

var radioStud = document.getElementById("scelta-studente")            // Pulsante che permette la scelta 'studente'
var radioDoc = document.getElementById("scelta-docente")              // Pulsante che permette la scelta 'docente'

//#endregion variabili globali

// -------------------------------------------------------------------------------------------------- //

//#region onload

window.addEventListener("load", function () { // Funzione che gestisce alcune cose al caricamento della pagina
    radioStud.checked = false               // Il radio button dello studente non è selezionato
    radioDoc.checked = false                // Il radio button del docente non è selezionato
    document.getElementById("terms-checkbox").checked = false   // Il check button dei termini e condizioni non è selezionato
})

//#end region onload

// -------------------------------------------------------------------------------------------------- //

//#region gestione tags

let btn = document.querySelectorAll(".item-button"); // Pulsante contenente l'argomento selezionabile
let array = [];                                      // Creazione di un array
let div = document.getElementById("items");          // Prende la zona contenente i tag selezionati
let section = document.querySelector("section");     // Section contenente i tag selezionabili

for (let i = 0; i < btn.length; ++i) {
    btn[i].addEventListener("click", aggiungiTag);   // Prende tutti i bottoni e ci assegna l'evento onclick
}

// Gestione degli eventi per i bottoni "item-button"
function aggiungiTag(e) {
    //console.log(e.target.textContent) // Per debug
    array.push(e.target.textContent);         // Metto nell'array il textContent del bottone premuto
    //console.log(array)                      // Per debug
    e.target.disabled = true;                 // Disabilito il bottone che ho premuto per evitare tag doppi
    e.target.style.backgroundColor = "gray"
    div.innerHTML += `<button class="removebtn">${e.target.textContent}</button>`;  // Nel div dei tag ci inserisco un nuovo bottone "removebtn" che come textContent ha ciò che ho scelto

    let removebtn = document.querySelectorAll(".removebtn");      // Prendo i bottoni "removebtn"
    for (let j = 0; j < removebtn.length; ++j) {
        removebtn[j].addEventListener("click", function (e) {       // E a tutti essi ci assegno un evento click con una funzione implicita
            let togli = array.indexOf(removebtn[j].textContent);    // Prendo l'indice del bottone tramite il textContent e guardo perciò dove si trova nell'array
            array.splice(togli, 1);           // Tramite .splice() rimuovo un elemento (1) in posizione x
            //console.log(array)        // per debug
            removebtn[j].remove();            // Lo rimuovo visivamente
            for (let k = 0; k < btn.length; ++k) {
                if (btn[k].textContent == removebtn[j].textContent) {   // Ciclo per tutti i bottoni che ho e controllo se il textContent di uno dei bottoni è uguale al textContent di quello che ho tolto
                    btn[k].disabled = false;                            // Allora riabilito il bottone
                    btn[k].style.backgroundColor = "var(--azzurro1)"    // Si cambia lo sfondo del bottone
                }
            }
        });
    }
}
//#endregion gestione tags

// -------------------------------------------------------------------------------------------------- //

//#region click sul bottone "continua"
document.querySelector(".btn-continua").addEventListener("click", function (event) { // Aggiunta dell'evento onclick sul pulsante per proseguire alla prossima schermata
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

    if (this.textContent == "Registrati") {             // Se il bottone ha scritta "registrati"
        
        if (radioDoc.checked) {                         // Controllo se la radioButton del docente sia cliccata
            if (document.getElementById("terms-checkbox").checked && nickname.value != "") {   // Controlliamo che l'utente abbia accettato i termini e le condizioni E che egli non abbia rimosso il nickname
                window.location.href = "accesso.html";                                         // In caso affermativo si torna all'accesso
            } else
                alert("Per continuare occorre compilare tutti i campi")                        // Altrimenti no
        } else {                                                                               // Se non è un docente allora
            if (document.getElementById("terms-checkbox").checked && nickname.value != "") {   // Controlliamo che l'utente abbia accettato i termini e le condizioni E che egli non abbia rimosso il nickname
                immagine.classList.add("d-none") // Scompare l'immagine a lato

                document.getElementById("contenitore-signup").classList.remove("col-md-5")
                document.getElementById("contenitore-signup").style.transition = "all 2s" // Transizione per il passaggio da una schermata all'altra
                Form.setAttribute("style", "width:750px; height:auto"); // Si cambia la larghezza del form box
                document.querySelector(".signup-img").setAttribute("style", "left:40%;") // Si sposta il logo VALearning
                titolo.textContent = "Seleziona le tue preferenze" // Cambiamente del contenuto del titolo del box registrazione
                paragrafo.textContent = "A fin di garantirti un'ottima esperienza, seleziona gli argomenti su cui vuoi soffermarti maggiormente." // Cambiamente del contenuto del paragrafo nel box registrazione

                nickRegion.classList.add("d-none") // Non si può vedere la parte relativa alla scelta di un nickname
                btn_continua.textContent = "Finito" // Si cambia la scritta del pulsante per far capire all'utente che quello è l'ultimo passaggio
                div.classList.remove("d-none") // Si può vedere la parte relativa alla scelta dei tags
                section.classList.remove("d-none") // Si vede la section
                level_choice.remove() // Rimozione scelta livello di inglese
                conditions_choice.remove() // Rimozione accettazione delle condizioni
                input_choice.remove() // Rimozione contenitore scelta studente / docente
                document.getElementsByClassName("signin")[1].remove() // Rimozione parte "Hai già un account"
            } else
                alert("Per continuare occorre compilare tutti i campi") // Caso in cui l'utente non ha compilato tutti i campi e vuole proseguire
        }
    }
})

//#endregion click sul bottone "continua"

// -------------------------------------------------------------------------------------------------- //

//#region scelta studente / docente

document.getElementById("scelta-studente").addEventListener("click", function () { // Funzione che gestisce la scelta 'Studente'
    level_choice.classList.remove("d-none")      // Appare la scelta del livello di inglese
    conditions_choice.classList.remove("d-none") // Appare il paragrafo che, se cliccato, mostra i termini e le condizioni
    btn_continua.textContent = "Registrati"      // Si cambia la scritta del pulsante in "Registrati"
})

document.getElementById("scelta-docente").addEventListener("click", function () { // Funzione che gestisce la scelta 'Docente'
    level_choice.classList.add("d-none")         //rimuovo la classe che mostra la scelta del livello di inglese
    conditions_choice.classList.remove("d-none") // Appare il paragrafo che, se cliccato, mostra i termini e le condizioni
    btn_continua.textContent = "Registrati"      // Si cambia la scritta del pulsante in "Registrati"
})

//#endregion  scelta studente / docente

// -------------------------------------------------------------------------------------------------- //

//#region generazione immagini parte inziale

// Vettore contenente i link delle immagini da generare nel contenitore a esse dedicato
var imagesRandom = [
    "https://cdn.betterwalls.com/pim/pr/WP/30012047/photo-wallpaper-london-palace-of-westminster-sunset_big01.jpg",
    "https://res.allmacwallpaper.com/get/Retina-MacBook-Air-13-inch-wallpapers/London-Panorama-2560x1600/8641-11.jpg",
    "https://besthqwallpapers.com/Uploads/22-6-2020/136695/london-tower-bridge-evening-sunset-modern-buildings.jpg",
    "https://images.lonelyplanetitalia.it/uploads/shutterstockrf-651736369?q=80&p=slider&s=b7df3965c5569aea0c33d8d4aab82cdc",
    "https://besthqwallpapers.com/Uploads/5-12-2020/148650/city-of-london-river-thames-4k-nightscapes-english-cities.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/7/72/Buckingham_Palace_from_gardens%2C_London%2C_UK_-_Diliff.jpg"
]

// Funzione che gestisce la generazione delle immagini
setInterval(function () {
    let rnd = Math.floor(Math.random() * imagesRandom.length) // Generazione di un numero casuale
    immagine.style.backgroundImage = `url("${imagesRandom[rnd]}")` // Si sceglie l'immagine con l'indice appena generato
    immagine.style.transition = "all 0.9s ease"; // Transizione tra un'immagine e l'altra

}, 5000)

//#endregion generazione immagini parte inziale