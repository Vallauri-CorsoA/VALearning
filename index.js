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
});


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

function creaEsTB(esercizio){
    let aus = "<div class='tags'>";
    for(let i of esercizio.argomento){
        aus += `<span>${i}   </span>`;
    }
    aus += `</div>
            <p>${esercizio.consegna}</p>
            <p>${esercizio.testoPrima}</p>
            <input type="text">
            <p>${esercizio.testoDopo}</p>
            <button onclick="correggi(${esercizio})">CORREGGI</button>`;

    document.getElementsByClassName("esercizioTB")[0].innerHTML = aus;
}

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