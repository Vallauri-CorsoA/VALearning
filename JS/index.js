/*
    al caricamento della pagina verra creata una sezione dedicata ai dati dell'utente creata dinamicamente 
    con i dati di profiloUtente. Successivamente essendo che ci potranno essere più esercizi in diverse
    combinazioni, ho trasformato l'oggetto esercizi e correzione in un array di oggetti. Per comodità 
    alcune celle di entrambi gli array saranno pre-caricate per gestire la visualizzazione. Rimane 
    tutto dinamico e organizzabile senza dover ri-stravolgere il codice.
*/
createUserArea()
createCorrectionArea()
createStrutturaEsercizioAndCorrezione()

PRE_caricamentoStrutture() 

esercizio.tipo = Math.floor(Math.random()*3)
switch(esercizio.tipo){
    case 0:
        for(let idx =0; idx<esercizio.length; idx++){
            createSceltaMultipla(idx)
            correctMultipleChoice(idx)
        }
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
function createSceltaMultipla(i){
        let a = 
        `
        <div id="collapseOne" class="accordion-collapse collapse show col-6 m-2 mt-4" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div class="accordion-body">
            <div class="row">
                <div class"container col-4">
                    <ul class="list-group">
                     <button type="button" class="list-group-item list-group-item-secondary list-group-item-action active secondary" aria-current="true">
                        ${esercizio[i].risposte.tipo0.domanda} 
                      </button>
                    <li class="list-group-item lgi${i} ">
                      <input class="form-check-input rad${i} me-1" type="radio" name="listGroupRadio" value="" id="firstRadio" checked>
                      <label class="form-check-label fcl${i}" for="firstRadio">${esercizio[i].risposte.tipo0.opzioni[0]}</label>
                    </li>
                    <li class="list-group-item lgi${i} ">
                      <input class="form-check-input rad${i}  me-1" type="radio" name="listGroupRadio" value="" id="secondRadio">
                      <label class="form-check-label fcl${i}" for="secondRadio">${esercizio[i].risposte.tipo0.opzioni[1]}</label>
                    </li>
                    <li class="list-group-item lgi${i}">
                      <input class="form-check-input rad${i} me-1" type="radio" name="listGroupRadio" value="" id="thirdRadio">
                      <label class="form-check-label fcl${i}" for="thirdRadio">${esercizio[i].risposte.tipo0.opzioni[2]}</label>
                    </li>
                    <li class="list-group-item lgi${i} ">
                      <input class="form-check-input rad${i} me-1" type="radio" name="listGroupRadio" value="" id="thirdRadio">
                      <label class="form-check-label fcl${i}" for="thirdRadio">${esercizio[i].risposte.tipo0.opzioni[3]}</label>
                    </li>
                    </ul>
                </div>
            </div> 
        </div>
        </div>
        `
        document.getElementById('corr').innerHTML +=a
}
function correctMultipleChoice(i){
    let opzioni = document.getElementsByClassName("fcl"+i.toString());
    console.log(opzioni);
    let opzioniRad = document.getElementsByClassName('rad'+i.toString());
    console.log(opzioniRad);
    let liOpz = document.getElementsByClassName('lgi'+i.toString());
    for (let i = 0; i < opzioni.length; ++i) {
        if (opzioni[i].textContent === correzione.risposte.tipo0) {
            opzioniRad[i].checked = true
            if (correzione[i].risposte.tipo0 === esercizio[i].risposte.tipo0.rispostaCorretta) {
                liOpz[i].classList.add('list-group-item-success');
            } else {
                liOpz[i].classList.add('list-group-item-danger');
            }
        }
        if (opzioni[i].textContent === esercizio[i].risposte.tipo0.rispostaCorretta) {
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
                    <p>If you <input class="ifg" type="text" disbled placeholder="${correzione.risposte.tipo1[0]}" readonly> asked someone for <input class="ifg" type="text" placeholder="${correzione.risposte.tipo1[1]}" readonly> mobile phone number and they said, “Sorry, I 
                    <input class="m-3 ifg" type="text" disbled placeholder="${correzione.risposte.tipo1[2]}" readonly> own a mobile <input type="text" class="ifg" disbled placeholder="${correzione.risposte.tipo1[3]}" readonly> </p>
                </form>
            </li>
        </ul>
    `
    document.getElementById('corr').innerHTML +=a
}
function correctFillTheGaps(){
    let ipts = document.getElementsByClassName('ifg')
    for(let i=0; i<ipts.length; i++){
        if(correzione.risposte.tipo1[i] === esercizio.risposte.tipo1.risposteCorrette[i]){
            ipts[i].classList.add('bg-success')
            ipts[i].classList.add('bg-opacity-25')
        }else{
            ipts[i].classList.add('bg-danger')
            ipts[i].classList.add('bg-opacity-25')
        }
    }
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
    let d = document.getElementById('vftd')
    console.log(d)
    if(esercizio.risposte.tipo2.rispostaCorretta != correzione.risposte.tipo2)
    {

        d.classList.add('bg-danger')
        d.classList.add('bg-gradient')
        d.classList.add('bg-opacity-25')
        d.classList.add('border-danger')
        
    }else{

        d.classList.add('bg-success')
        d.classList.add('bg-gradient')
        d.classList.add('bg-opacity-25')
        d.classList.add('border-success')
    }
}
function createStrutturaEsercizioAndCorrezione(){
    for(let i=0; i<maxESERCIZI; ++i){
        esercizio[i]={
            id,
            argomento,
            difficolta,
            consegna,
            tipo,
            risposte:{
                tipo0:
                {
                    domanda,
                    opzioni: ["", "", "", ""],
                    rispostaCorretta,
                    punteggio
                },
                tipo1:{
                    domanda,
                    risposteCorrette:["","","",""],
                    punteggio: [0,0,0,0]
                },
                tipo2:{
                    domanda,
                    rispostaCorretta,
                    punteggio
                }
            }
        }

        correzione[i]={
            idUtente,
            idEsercizio,
            punteggioFinale,
            risposte: {
                tipo0,
                tipo1:["","","",""],
                tipo2
            }
        }
    }

}
function PRE_caricamentoStrutture(){
    esercizio[0] = {
        id:0,
        argomento:"Crimes",
        difficolta: 1,
        consegna: "Completa gli esercizi",
        tipo:0,
        risposte:{
            tipo0:
            {
                domanda: "Who is a murder?",
                opzioni: ["A person who steals in markets", "A person who cheat at school", "A person who killed someone", "None of the previous"],//le possibili risposte che l'utente può scegliere
                rispostaCorretta: "A person who killed someone",
                punteggio: 0
            },
            tipo1:{
                domanda: "Fill the gaps",
                risposteCorrette:[
                    "ever",
                    "their",
                    "don't",
                    "phone"
                ],
                punteggio: [0,0,0,0]
            },
            tipo2:{
                domanda:"Is King Von died?",
                rispostaCorretta: "F",
                punteggio: 0
            }
        }
    }
    esercizio[1] = {
        id:1,
        argomento:"Girls",
        difficolta: 2,
        consegna: "Completa gli esercizi",
        tipo:0,
        risposte:{
            tipo0:
            {
                domanda: "Who is a baker?",
                opzioni: ["A person who works in a boat", "A person who works at the baker's", "A person who kill people", "None of the previous"],
                rispostaCorretta: "A person who works at the baker's",
                punteggio: 0
            },
            tipo1:{
                domanda: "Fill the gaps",
                risposteCorrette:[
                    "ignore",
                    "got",
                    "whore",
                    "feeling"
                ],
                punteggio: [0,0,0,0]
            },
            tipo2:{
                domanda:"Are all girls the same?",
                rispostaCorretta: "T",
                punteggio: 0
            }
        }
    }
    esercizio[2] = {
        id:2,
        argomento:"Singers",
        difficolta: 2,
        consegna: "Completa gli esercizi",
        tipo:0,
        risposte:{
            tipo0:
            {
                domanda: "Who is a Lil Durk?",
                opzioni: ["Singer", "PopStar", "One of most iconic Chicago drill rappers", "None of the previous"],
                rispostaCorretta: "One of most iconic Chicago drill rappers",
                punteggio: 0
            },
            tipo1:{
                domanda: "Fill the gaps",
                risposteCorrette:[
                    "it",
                    "street",
                    "funeral",
                    "peace"
                ],
                punteggio: [0,0,0,0]
            },
            tipo2:{
                domanda:"Chief Keef > Lil Durk?",
                rispostaCorretta: "F",
                punteggio: 0
            }
        }
    }

    correzione[0]= {
        idUtente:2704,
        idEsercizio:0,
        punteggioFinale:0,
        risposte: {
            tipo0: "A person who killed someone",
            tipo1:[
                "ever",
                "them",
                "don't",
                "phone"
            ],
            tipo2:"V"
        }
    }
    correzione[1]= {
        idUtente:2704,
        idEsercizio:1,
        punteggioFinale:0,
        risposte: {
            tipo0: "A person who works at the baker's",
            tipo1:[
                "skip",
                "got",
                "whore",
                "feeling"
            ],
            tipo2:"V"
        }
    }
    correzione[1]= {
        idUtente:2704,
        idEsercizio:2,
        punteggioFinale:0,
        risposte: {
            tipo0: "Singer",
            tipo1:[
                "it",
                "street",
                "funeral",
                "peace"
            ],
            tipo2:"V"
        }
    }
}
