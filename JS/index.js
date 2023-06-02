/*
    al caricamento della pagina verra creata una sezione dedicata ai dati dell'utente creata dinamicamente 
    con i dati di profiloUtente. Successivamente Per comodità saranno pre-caricati gli oggetti per gestire la visualizzazione.
    Rimane tutto dinamico e organizzabile senza dover ri-stravolgere il codice.
    al caricamento della pagina verra creata una sezione dedicata ai dati
*/
createUserArea()
createCorrectionArea()
let puntifatti = [];//un vettore contenente tutti punteggi fatti nei singoli esercizzi
let puntipossibi = [];//un vettore contenente tutti i punteggi massimi dei singoli esercizzi
let puntifattitot = 0;//i punti ottenuti in totoale
let puntipossibilitot = 0;//il punteggio massimo in assoluto
let numes = 0;//variabile per cambiare cella dei vettori

//testare esercizi uno alla volta generati casualmente (sara il gruppo svolgi es che poi ci dara il tipo e useremo quello)
esercizio.tipo = Math.floor(Math.random()*3) 
switch(esercizio.tipo){
    case 0:
        createSceltaMultipla()
        correctMultipleChoice()
    break
    case 1:
        createFillTheGaps()
        correctFillTheGaps()
    break
    case 2:
        createTrueOrFalse()
        correctTrueOrFalse()
    break
    default:
        break;
}
//testare esercizi tutti in una volta
// createSceltaMultipla()
// correctMultipleChoice()
// createFillTheGaps()
// correctFillTheGaps()
// createTrueOrFalse()
// correctTrueOrFalse()
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
    document.getElementById('corr').innerHTML +=a
}

function correctMultipleChoice(){
    puntipossibi[numes] = 0;
    puntifatti[numes] = 0;
    let opzioni = document.getElementsByClassName('fcl');
    console.log(opzioni);
    let opzioniRad = document.getElementsByClassName('rad');
    console.log(opzioniRad);
    let liOpz = document.getElementsByClassName('lgi');
    for (let i = 0; i < opzioni.length; ++i) {
        if (opzioni[i].textContent === correzione.risposte.tipo0) {
            opzioniRad[i].checked = true
            if (correzione.risposte.tipo0 === esercizio.risposte.tipo0.rispostaCorretta) {
                liOpz[i].classList.add('list-group-item-success');
            } else {
                liOpz[i].classList.add('list-group-item-danger');
                puntipossibi[numes]++;
                puntipossibilitot++;
            }
        }
        if (opzioni[i].textContent === esercizio.risposte.tipo0.rispostaCorretta) {
            liOpz[i].classList.add('list-group-item-success');
            puntifatti[numes] = puntifatti[numes] + 1;
            puntipossibi[numes] = puntipossibi[numes] + 1;
            puntifattitot++;
            puntipossibilitot++;
        }
    }
    numes++;
    console.log("risposta multipla: puntitot " + puntipossibi[numes - 1] + " puntifatti " + puntifatti[numes - 1]);
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
                    <p>If you <input class="ifg" type="text" disbled placeholder="${correzione.risposte.tipo1[0]}" readonly> asked someone for <input class="ifg" type="text" placeholder="${correzione.risposte.tipo1[1]}" readonly> mobile phone number and they said, “Sorry, I 
                    <input class="m-3 ifg" type="text" disbled placeholder="${correzione.risposte.tipo1[2]}" readonly> own a mobile <input type="text" class="ifg" disbled placeholder="${correzione.risposte.tipo1[3]}" readonly> </p>
                </form>
            </li>
        </ul>
    `
    document.getElementById('corr').innerHTML +=a
}

function correctFillTheGaps(){
    puntipossibi[numes] = 0;
    puntifatti[numes] = 0;
    let ipts = document.getElementsByClassName('ifg')
    for(let i=0; i<ipts.length; i++){
        if(correzione.risposte.tipo1[i] === esercizio.risposte.tipo1.risposteCorrette[i]){
            ipts[i].classList.add('bg-success')
            ipts[i].classList.add('bg-opacity-25')
            puntifatti[numes] = puntifatti[numes] + 1;
            puntipossibi[numes] = puntipossibi[numes] + 1;
            puntifattitot++;
            puntipossibilitot++;
        }else{
            ipts[i].classList.add('bg-danger')
            ipts[i].classList.add('bg-opacity-25')
            puntipossibi[numes] = puntipossibi[numes] + 1;
            puntipossibilitot++;
        }
    }
    numes++;
    console.log("riempi gli spazzi: puntitot " + puntipossibi[numes - 1] + " puntifatti " + puntifatti[numes - 1]);
}

function createTrueOrFalse(){
    let a = 
    `
    <button type="button" class="btn bg-dark bg-gradient text-white col-12 text-start mt-3" aria-current="true">
        ${esercizio.risposte.tipo2.domanda}
    </button>
    <table class="table table-bordered">
        <thead>
          <tr>
            <th style="width: 70px" scope="col">Question</th>
            <th style="width: 30px" scope="col">T</th>
            <th style="width: 30px" scope="col">F</th>
          </tr>
        </thead>
        <tbody>
          <tr id="vftd">
            <td style="width: 70px">${esercizio.risposte.tipo2.domanda}</td>
            <td style="width: 30px"> <input type="checkbox" checked disabled></td>
            <td style="width: 30px"> <input type="checkbox" disabled></td>
          </tr>
        </tbody>
    </table>
    `
    document.getElementById('corr').innerHTML +=a
}

function correctTrueOrFalse(){
    puntipossibi[numes] = 0;
    puntifatti[numes] = 0;
    let d = document.getElementById('vftd')
    console.log(d)
    if(esercizio.risposte.tipo2.rispostaCorretta != correzione.risposte.tipo2)
    {

        d.classList.add('bg-danger')
        d.classList.add('bg-gradient')
        d.classList.add('bg-opacity-25')
        d.classList.add('border-danger')
        puntipossibi[numes] = puntipossibi[numes] + 1;
        puntipossibilitot++;
        
    }else{

        d.classList.add('bg-success')
        d.classList.add('bg-gradient')
        d.classList.add('bg-opacity-25')
        d.classList.add('border-success')
        puntifatti[numes] = puntifatti[numes] + 1;
        puntipossibi[numes] = puntipossibi[numes] + 1;
        puntifattitot++;
        puntipossibilitot++;
    }
    numes++;
    console.log("vero o falso: puntitot " + puntipossibi[numes - 1] + " puntifatti " + puntifatti[numes - 1]);
}

console.log("totale di tutti gli es: puntitot " + puntipossibilitot + " puntifatti " + puntifattitot);

