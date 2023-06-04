//#region variabili globali
let btn_continua = document.querySelector(".btn-continua")
let level_choice = document.getElementById("level-choice")
let conditions_choice = document.getElementById("conditions-choice")
let input_choice = document.getElementById("input-choice")
let immagine = document.getElementById("contenitore-immagine-signup")
let containerForm = document.getElementById("contenitore-signup")
var nickname = document.querySelector("#nickname")          // Prendiamo il campo di testo dove deve essere inserito il nickname
var nickRegion = document.querySelector(".nick-input")      //Prende tutto il gruppo della form del nickname
//#endregion variabili globali

var radioStud = document.getElementById("scelta-studente")
var radioDoc = document.getElementById("scelta-docente")



/* PARTE DI CODICE CHE GESTISCE I TAGS*/

let btn = document.querySelectorAll(".item-button");
let array = [];
let div = document.getElementById("items");
let section = document.querySelector("section");



for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", aggiungiTag);    //prende tutti i bottoni e ci assegna l'evento click
  }

// Gestore di eventi per i bottoni "item-button"
function aggiungiTag(e) {   
  console.log(e.target.textContent);        //controllo se funziona con dei console.log
  array.push(e.target.textContent);         //metto nell'array il textContent del bottone premuto
  console.log(array);               
  e.target.disabled = true;                 //disabilito il bottone che ho premuto per evitare tag doppi
  div.innerHTML += `<button class="removebtn">${e.target.textContent}</button>`;  //nel div dei tag ci inserisco un nuovo bottone "removebtn" che come textContent ha ciò che ho scelto

  let removebtn = document.querySelectorAll(".removebtn");      //prendo i bottoni removebtn
  for (let j = 0; j < removebtn.length; j++) {                  
    removebtn[j].addEventListener("click", function(e) {       //e a tutti essi ci assegno un evento click con una funzione implicita
      console.log("Hai cliccato su un bottone remove");         //debug
      console.log(array.indexOf(removebtn[j].textContent));      
      let togli = array.indexOf(removebtn[j].textContent);      //prendo l'indice del bottone tramite il textContent e guardo perciò dove si trova nell'array
      array.splice(togli, 1);           //tramite .splice() rimuovo un elemento (1) in posizione x
      console.log(array);               //debug

      removebtn[j].remove();            //lo rimuovo visivamente
      for(let k=0; k<btn.length; k++){      
        if(btn[k].textContent == removebtn[j].textContent){     //ciclo per tutti i bottoni che ho e controllo se il textContent di uno dei bottoni è uguale al textContent di quello che ho tolto
          btn[k].disabled = false;                              //allora riabilito il bottone
        }
      }
      
    });
  }
}

// FINE PARTE DI CODICE CHE GESTISCE I TAGS






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

    if (this.textContent == "Registrati") {             //se il bottone ha scritta "registrati"
        if (radioDoc.checked) {                         //controllo se la radioButton del docente sia cliccata
            if (document.getElementById("terms-checkbox").checked && nickname.value != "") { // Controlliamo che l'utente abbia accettato i termini e le condizioni E che egli non abbia rimosso il nickname
                window.location.href = "accesso.html";                                         //in caso affermativo si torna all'accesso
            } else
                alert("Per continuare occorre compilare tutti i campi")                         //altrimenti no
        } else {                                                                      //se non è un docente allora
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
                btn_continua.textContent = "Finito"
                div.classList.remove("d-none")
                section.classList.remove("d-none")
                level_choice.remove()
                conditions_choice.remove()
                input_choice.remove()
                document.getElementsByClassName("signin")[1].remove()
            } else
                alert("Per continuare occorre compilare tutti i campi")
        }

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



