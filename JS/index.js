
createUserArea()
createCorrectionArea()
switch(esercizio.tipo){
    case 0:
        createSceltaMultipla()
    break
    case 1:
        createFillTheGaps()
    break
    case 2:
        createTrueOrFalse()
    break
    default:
        break;
}

function createUserArea(){
    let a = 
    `
     <div class="row">
        <p class="col-12 text-center">Correzione degli esercizi svolti da: <b>${profiloUtente.nome} ${profiloUtente.cognome}</b> </p>
     </div>
     <div class="row d-flex flex-column justify-content-start">
        <div class="container border border-3 rounded col-4 ms-3 me-5 position-relative">
            <span class="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-primary">
                I TUOI DATI
            <span class="visually-hidden">unread messages</span>
            </span>
            <p class="mt-3">il tuo Ruolo: <b>${printRuolo()}</b></p>
            <p class="mt-3">il tuo ID: <b>${profiloUtente.idUtente}</b></p>
            <p class="mt-3">la tua Classe: <b>${profiloUtente.classe}</b></p>
            <p class="mt-3">la tua Email: <b>${profiloUtente.email}</b></p>
            <p class="mt-3">il tuo livello: <b>${profiloUtente.livello}</b></p>
            
        </div>
        <div class="col-6"></div>
     </div>
    `
    document.getElementById('usrArea').innerHTML=a
}
function printRuolo(){
    return profiloUtente.tipo == "s" ? "studente" : "docente"
}
function createCorrectionArea(){
    let a = 
    `
        <div class="container border border-3 rounded col-12 position-relative mt-3 mb-3" id="corr">
            <span class="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-primary">
                LA TUA CORREZIONE
            <span class="visually-hidden">unread messages</span>
        </div>
    `
    document.getElementById('usrArea').innerHTML+=a
}
function createSceltaMultipla(){
    let a = 
    `
    <div id="collapseOne" class="accordion-collapse collapse show col-6 m-2 mt-4" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
    <div class="accordion-body">
        <div class="row">
            <div class"container col-4">
                <ul class="list-group">
                 <button type="button" class="list-group-item list-group-item-secondary list-group-item-action active secondary" aria-current="true">
                    ${esercizio.risposte.tipo0.domanda} 
                  </button>
                <li class="list-group-item lgi ">
                  <input class="form-check-input rad me-1" type="radio" name="listGroupRadio" value="" id="firstRadio" checked>
                  <label class="form-check-label fcl" for="firstRadio">${esercizio.risposte.tipo0.opzioni[0]}</label>
                </li>
                <li class="list-group-item lgi ">
                  <input class="form-check-input rad  me-1" type="radio" name="listGroupRadio" value="" id="secondRadio">
                  <label class="form-check-label fcl" for="secondRadio">${esercizio.risposte.tipo0.opzioni[1]}</label>
                </li>
                <li class="list-group-item lgi">
                  <input class="form-check-input rad me-1" type="radio" name="listGroupRadio" value="" id="thirdRadio">
                  <label class="form-check-label fcl" for="thirdRadio">${esercizio.risposte.tipo0.opzioni[2]}</label>
                </li>
                <li class="list-group-item lgi ">
                  <input class="form-check-input rad me-1" type="radio" name="listGroupRadio" value="" id="thirdRadio">
                  <label class="form-check-label fcl" for="thirdRadio">${esercizio.risposte.tipo0.opzioni[3]}</label>
                </li>
                </ul>
            </div>
        </div>
    </div>
    </div>
    `
    correctMultipleChoice()
    document.getElementById('corr').innerHTML +=a
}
function correctMultipleChoice(){
    let opzioni = document.getElementsByClassName('fcl');
    console.log(opzioni);
    let opzioniRad = document.getElementsByClassName('rad');
    console.log(opzioniRad);
    let liOpz = document.getElementsByClassName('lgi');
    for (let i = 0; i < opzioni.length; ++i) {
        if (opzioni[i].textContent === correzione.risposte.tipo0) {
            opzioniRad[i].textContent = "A";
            if (correzione.risposte.tipo0 === esercizio.risposte.tipo0.rispostaCorretta) {
                liOpz[i].classList.add('list-group-item-success');
            } else {
                liOpz[i].classList.add('list-group-item-danger');
            }
        }
        if (opzioni[i].textContent === esercizio.risposte.tipo0.rispostaCorretta) {
            liOpz[i].classList.add('list-group-item-success');
        }
    }
}
function createFillTheGaps(){
    let a = 
    `
        <ul class="list-group mt-3 mb-3">
            <button type="button" class="list-group-item list-group-item-secondary list-group-item-action active secondary" aria-current="true">
                ${esercizio.risposte.tipo1.domanda} 
            </button>
            <li class="list-group-item">
                <form>
                    <p>If you <input type="text" disbled placeholder="${correzione.risposte.tipo1[0]}" readonly> asked someone for <input type="text" placeholder="${correzione.risposte.tipo1[1]}" readonly> mobile phone number and they said, “Sorry, I 
                    <input class="m-3" type="text" disbled placeholder="${correzione.risposte.tipo1[2]}" readonly> own a mobile <input type="text" disbled placeholder="${correzione.risposte.tipo1[3]}" readonly> </p>
                </form>
            </li>
        </ul>
    `
    document.getElementById('corr').innerHTML +=a
}