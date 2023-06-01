window.addEventListener("load", function(){
    document.getElementsByClassName("openES")[0].addEventListener("click", function(){
        creaEsVF(esercizioVF); // non mi sono venuti in mente altri modi per passare paramentri con l'addeventlistener
    });
    document.getElementsByClassName("openES")[1].addEventListener("click", function(){
        creaEsTB(esercizioTB); 
    });
    document.getElementsByClassName("openES")[2].addEventListener("click", function(){
        creaEsRM(esercizioRM);
    });
    document.getElementsByClassName("footer_anchor")[0].addEventListener("click", function(){
        let modal_crediti = document.getElementsByClassName("modal-body")[0];
        modal_crediti.innerHTML = `<p>Il progetto è stato creato dalla classe 3ªA INF nel 2023:</p>`;
        ciao();
    });
});

//Creazione esercizio vero/falso
function creaEsVF(esercizio){
    let aus = ` <div class="card esVF">
                    <div class="card-header">`;
    for(let i of esercizio.argomento)
        aus += `<span class="badge text-bg-info">${i} </span>   `;

    aus += `</div>
                <div class="card-body">
                    <div class="card-text">
                        <p>${esercizio.consegna}</p> 
                        <div>
                            <input type="radio" id="v" name="${esercizio.id}">
                            <label for="v">V</label>
                            <input type="radio" id="f" name="${esercizio.id}">
                            <label for="f">F</label>
                        </div>
                    </div>
                    <a href="#" class="btn btn-primary" onclick="correggi(${esercizio})>Correggi</a>
                </div>
            </div>`;

    document.getElementsByClassName("esercizioVF")[0].innerHTML = aus;
}

//Creazione esercizio con testo bucato
function creaEsTB(esercizio){
    /*
        <div class="card esTB">
            <div class="card-header">
                <span class="badge text-bg-info">verbi</span>
                <span class="badge text-bg-info">reading</span>
            </div>
            <div class="card-body">
                <div class="card-text">
                    <p>Scrivi ciao</p> 
                    <input type="text">
                    <p>hai scritto ciao?</p>
                </div>
                <a href="#" class="btn btn-primary">Correggi</a>
            </div>
        </div>
     */

    let aus = ` <div class="card esTB">
                    <div class="card-header">`;
    for(let i of esercizio.argomento){
        aus += `<span class="badge text-bg-info">${i}</span>   `;
    }
    aus += `<div class="card-body">
                <p>${esercizio.consegna}</p> 
                <div class="card-text">
                    <p>${esercizio.testoPrima}</p> 
                    <input type="text">
                    <p>${esercizio.testoDopo}</p>
                </div>
                <a href="#" class="btn btn-primary" onclick="correggi(${esercizio})">Correggi</a>
            </div>
        </div>`;

    document.getElementsByClassName("esercizioTB")[0].innerHTML = aus;
}

//Creazione esercizio a risposta multipla
function creaEsRM(esercizio){
    let aus = ` <div class="card esRM">
                    <div class="card-header">`;
    for(let i of esercizio.argomento){
        aus += `<span class="badge text-bg-info">${i}</span>   `;
    }
    aus += `</div>
            <div class="card-body">
                <div class="card-text">
                    <p>${esercizio.consegna}</p> 
                    <div>`;

    for(let i in esercizio.scelte){
        aus+=`
        <input type="radio" id="ris${i}" name="${esercizio.id}">
        <label for="ris${i}">${esercizio.scelte[i]}</label>`;
    }
    aus += `        </div>
                </div>
                <a href="#" class="btn btn-primary" onclick="correggi(${esercizio})>Correggi</a>
            </div>
            </div>`;

    document.getElementsByClassName("esercizioRM")[0].innerHTML = aus;
}

function ciao(){
    let modal_crediti = document.getElementsByClassName("modal-body")[0];
    for(let i=0; i<crediti.length; i++){
        modal_crediti.innerHTML += `<p id="p${i}">${crediti[i]}</p>`
    }
}