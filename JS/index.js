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
let ntipo0 = 0;//serve per fare si che la correzione funzioni anche con più di un esercizio di tipo 0 alla volta
let ntipo1 = 0;//serve per fare si che la correzione funzioni anche con più di un esercizio di tipo 1 alla volta
let ntipo2 = 0;//serve per fare si che la correzione funzioni anche con più di un esercizio di tipo 2 alla volta

const main = document.querySelector('html');
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
  @keyframes mioAnimation {
    0% {
      opacity: 0%;
    }
    100% {
      opacity: 100%;
    }
  }
`, styleSheet.cssRules.length);

main.addEventListener('mouseout', function() {
    document.getElementById('ntvsbl').classList.add('d-none')

});
function apri(){
    document.getElementById('ntvsbl').classList.remove('d-none')
    document.getElementById('ntvsbl').style.animation = 'mioAnimation 1s ease-in-out';
}
//testare esercizi uno alla volta generati casualmente (sara il gruppo svolgi es che poi ci dara il tipo e useremo quello)
esercizio.tipo = Math.floor(Math.random() * 3) 
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
function createUserArea(){
    let a = 
    `
     <div class="wrapper">
        <div class="typing-demo row">
            <h4 class="text-center mb-5 ntt col-12">Correzione degli esercizi svolti da: <b>${profiloUtente.nome} ${profiloUtente.cognome}</b> </h4>
        </div>
    </div>
     <div class="container rounded col-md-10 col-lg-11 col-8 p-3 ms-5 mb-3 position-relative" id="von">
        
            <span class="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-primary">
                I TUOI DATI
            <span class="visually-hidden">unread messages</span>
            </span>
            <button class="btnDati">il tuo Ruolo: <b>${printRuolo()}</b></button>
            <button class="btnDati">il tuo ID: <b>${profiloUtente.idUtente}</b></button>
            <button class="btnDati">la tua Classe: <b>${profiloUtente.classe}</b></button>
            <button class="btnDati">la tua Email: <b>${profiloUtente.email}</b></button>
            <button class="btnDati">il tuo livello: <b>${profiloUtente.livello}</b></button>
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
        <div class="container rounded col-md-10 col-lg-11 col-8 position-relative mt-3 mb-3 ms-5 p-3" id="corr">
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
                <ul class="list-group col-4 m-3" id="von">
                <li class="list-group-item bg-gradient int intestazione0 col-12">
                    ${esercizio.risposte.tipo0.domanda} 
                </li>
                <li class="list-group-item lgi bg-gradient col-12">
                  <input class="form-check-input rad  me-1 col-1" type="radio" name="listGroupRadio" value="" id="firstRadio" checked>
                  <label class="form-check-label fcl col-11" for="firstRadio">${esercizio.risposte.tipo0.opzioni[0]}</label>
                </li>
                <li class="list-group-item lgi bg-gradient col-12">
                  <input class="form-check-input rad  me-1 col-1" type="radio" name="listGroupRadio" value="" id="secondRadio">
                  <label class="form-check-label fcl col-11" for="secondRadio">${esercizio.risposte.tipo0.opzioni[1]}</label>
                </li>
                <li class="list-group-item lgi bg-gradient col-12">
                  <input class="form-check-input rad me-1 col-1" type="radio" name="listGroupRadio" value="" id="thirdRadio" checked>
                  <label class="form-check-label fcl col-11" for="thirdRadio">${esercizio.risposte.tipo0.opzioni[2]}</label>
                </li>
                <li class="list-group-item lgi bg-gradient col-12">
                  <input class="form-check-input rad me-1 col-1" type="radio" name="listGroupRadio" value="" id="thirdRadio">
                  <label class="form-check-label fcl col-11" for="thirdRadio">${esercizio.risposte.tipo0.opzioni[3]}</label>
                </li>
                </ul>
    `
    document.getElementById('corr').innerHTML =a
}
function correctMultipleChoice(){
    puntipossibi[numes] = 0;
    puntifatti[numes] = 0;
    let opzioni = document.getElementsByClassName('fcl');
    let opzioniRad = document.getElementsByClassName('rad');
    let liOpz = document.getElementsByClassName('lgi');
    let lun = ntipo0 * 4;
    for (let i = 0; i < opzioni.length - lun; ++i) {
        if (opzioni[i + lun].textContent === correzione.risposte.tipo0) {
            opzioniRad[i + lun].checked = true
            if (correzione.risposte.tipo0 === esercizio.risposte.tipo0.rispostaCorretta) {
                liOpz[i + lun].classList.add('list-group-item-success');
            } else {
                liOpz[i + lun].classList.add('list-group-item-danger');
                puntipossibi[numes]++;
                puntipossibilitot++;
            }
        }
        if (opzioni[i + lun].textContent === esercizio.risposte.tipo0.rispostaCorretta) {
            liOpz[i + lun].classList.add('list-group-item-success');
            puntifatti[numes] = puntifatti[numes] + 1;
            puntipossibi[numes] = puntipossibi[numes] + 1;
            puntifattitot++;
            puntipossibilitot++;
        }
    }
    numes++;
    console.log("risposta multipla: puntitot " + puntipossibi[numes - 1] + " puntifatti " + puntifatti[numes - 1]);
    let punti = document.getElementsByClassName("intestazione0");
    punti[ntipo0].innerHTML += puntifatti[numes - 1] + " / " + puntipossibi[numes - 1];
    ntipo0++;
}
function re_correctMultipleChoice(){
    let opzioni = document.getElementsByClassName('fcl');
    let opzioniRad = document.getElementsByClassName('rad');
    let liOpz = document.getElementsByClassName('lgi');
    for (let i = 0; i < opzioni.length; ++i) {
        if (opzioni[i].textContent === correzione.risposte.tipo0) {
            opzioniRad[i].checked = true
            if (correzione.risposte.tipo0 === esercizio.risposte.tipo0.rispostaCorretta) {
                liOpz[i].classList.add('list-group-item-success');
            } else {
                liOpz[i].classList.add('list-group-item-danger');
            }
        }
        if (opzioni[i].textContent === esercizio.risposte.tipo0.rispostaCorretta) {
            liOpz[i + lun].classList.add('list-group-item-success');
        }
    }
}
function createFillTheGaps(){
    let a = 
    `
     
        <ul class="list-group col-md-4 col-8 m-3" id="von">
            <li class="list-group-item bg-gradient int intestazione1">
                ${esercizio.risposte.tipo1.domanda} 
            </li>
            <li class="list-group-item">
                <form>
                    <p>${esercizio.risposte.tipo1.partitesto[0]}<input class="ifg col-12 col-sm-5" type="text" disbled placeholder=" ${correzione.risposte.tipo1[0]}" readonly>${esercizio.risposte.tipo1.partitesto[1]}<input class="ifg col-12 col-sm-5" type="text" placeholder=" ${correzione.risposte.tipo1[1]}" readonly>${esercizio.risposte.tipo1.partitesto[2]}
                    <input class="ifg col-12 col-sm-5" type="text" disbled placeholder=" ${correzione.risposte.tipo1[2]}" readonly>${esercizio.risposte.tipo1.partitesto[3]}<input type="text" class="ifg col-12 col-sm-5" disbled placeholder=" ${correzione.risposte.tipo1[3]}" readonly></p>
                </form>
            </li>
        </ul>
    `
    document.getElementById('corr').innerHTML =a
}
function correctFillTheGaps(){
    puntipossibi[numes] = 0;
    puntifatti[numes] = 0;
    let lun = ntipo1 * 4;
    let ipts = document.getElementsByClassName('ifg')
    for(let i=0; i<ipts.length - lun; i++){
        if(correzione.risposte.tipo1[i] === esercizio.risposte.tipo1.risposteCorrette[i]){
            ipts[i + lun].classList.add('bg-success')
            ipts[i + lun].classList.add('bg-opacity-25')
            puntifatti[numes] = puntifatti[numes] + 1;
            puntipossibi[numes] = puntipossibi[numes] + 1;
            puntifattitot++;
            puntipossibilitot++;
        }else{
            ipts[i + lun].classList.add('bg-danger')
            ipts[i + lun].classList.add('bg-opacity-25')
            puntipossibi[numes] = puntipossibi[numes] + 1;
            puntipossibilitot++;
        }
    }
    numes++;
    console.log("riempi gli spazzi: puntitot " + puntipossibi[numes - 1] + " puntifatti " + puntifatti[numes - 1]);
    let punti = document.getElementsByClassName("intestazione1");
    punti[ntipo1].innerHTML += puntifatti[numes - 1] + " / " + puntipossibi[numes - 1];
    ntipo1++;
}
function re_correctFillTheGaps(){
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
    <ul class="list-group col-4 m-3">
            <table class="table table-bordered rounded mt-3 col-3">
            <thead>
            <tr>
             <th colspan="3" class="rounded text-start bg-gradient mt-3 intestazione2" id="int" >
                ${esercizio.risposte.tipo2.domanda}
             </th>
            </tr>
              <tr class="bg-white">
                <th style="width: 70px" scope="col">Question</th>
                <th style="width: 30px" scope="col">T</th>
                <th style="width: 30px" scope="col">F</th>
              </tr>
            </thead>
            <tbody>
              <tr class="vftd">
                <td style="width: 70px">${esercizio.risposte.tipo2.domanda}</td>
                <td  style="width: 30px"> <input type="checkbox" class="ckdd" disabled checked></td>
                <td  style="width: 30px"> <input type="checkbox" class="ckdd" disabled></td>
              </tr>
            </tbody>
        </table>
    </ul>
    `
    document.getElementById('corr').innerHTML =a
}
function correctTrueOrFalse(){
    puntipossibi[numes] = 0;
    puntifatti[numes] = 0;
    let d = document.getElementsByClassName('vftd')
    console.log(d)
    if(esercizio.risposte.tipo2.rispostaCorretta != correzione.risposte.tipo2)
    {

        d[ntipo2].classList.add('bg-danger')
        d[ntipo2].classList.add('bg-gradient')
        d[ntipo2].classList.add('bg-opacity-25')
        d[ntipo2].classList.add('border-danger')
        document.getElementsByClassName('ckdd')[0].checked = true
        document.getElementsByClassName('ckdd')[1].checked = false
        puntipossibi[numes] = puntipossibi[numes] + 1;
        puntipossibilitot++;
        
    }else{

        d[ntipo2].classList.add('bg-success')
        d[ntipo2].classList.add('bg-gradient')
        d[ntipo2].classList.add('bg-opacity-25')
        d[ntipo2].classList.add('border-success')
        document.getElementsByClassName('ckdd')[1].checked = true
        document.getElementsByClassName('ckdd')[0].checked = false
        puntifatti[numes] = puntifatti[numes] + 1;
        puntipossibi[numes] = puntipossibi[numes] + 1;
        puntifattitot++;
        puntipossibilitot++;
    }
    numes++;
    console.log("vero o falso: puntitot " + puntipossibi[numes - 1] + " puntifatti " + puntifatti[numes - 1]);
    let punti = document.getElementsByClassName("intestazione2");
    punti[ntipo2].innerHTML += puntifatti[numes - 1] + " / " + puntipossibi[numes - 1];
    ntipo2++;
}
function re_correctTrueOrFalse(){
    let d = document.getElementsByClassName('vftd')[0]
    if(esercizio.risposte.tipo2.rispostaCorretta != correzione.risposte.tipo2)
    {

        d.classList.add('bg-danger')
        d.classList.add('bg-gradient')
        d.classList.add('bg-opacity-25')
        d.classList.add('border-danger')
        document.getElementsByClassName('ckdd')[0].checked = false
        document.getElementsByClassName('ckdd')[1].checked = true
        
    }else{

        d.classList.add('bg-success')
        d.classList.add('bg-gradient')
        d.classList.add('bg-opacity-25')
        d.classList.add('border-success')
        document.getElementsByClassName('ckdd')[1].checked = true
        document.getElementsByClassName('ckdd')[0].checked = false

    }
}
function correggiTutto(){
    let i= esercizio.tipo
    switch(i){
        case 0:
            correzione.risposte.tipo0 = esercizio.risposte.tipo0.rispostaCorretta
            createSceltaMultipla()
            re_correctMultipleChoice()
        break;
        case 1:
            for(let j=0; j<esercizio.risposte.tipo1.risposteCorrette.length; ++j)
               correzione.risposte.tipo1[j] = esercizio.risposte.tipo1.risposteCorrette[j]
            createFillTheGaps()
            re_correctFillTheGaps()
        break;
        case 2:
            correzione.risposte.tipo2 = esercizio.risposte.tipo2.rispostaCorretta
            createTrueOrFalse()
            re_correctTrueOrFalse()
        break;
    }
}

let finale = `
            <div class="container">
                <button id="partefinale" >totale: punti fatti ${puntifattitot} punti totali ${puntipossibilitot}</button>
                <button onclick="correggiTutto()" id="partefinale2">visualizza risposte corrette</button>
            </div>
             `
document.getElementById("usrArea").innerHTML += finale;
