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
    let aus = "<div class='tags'>";
    for(let i of esercizio.argomento){
        aus += `<span class="badge badge-info">${i}   </span>`;
    }
    aus += `</div>
            <p>${esercizio.consegna}</p>
            <div>
                <input type="radio" id="v">
                <label for="v">V</label>
                <input type="radio" id="f">
                <label for="f">F</label>
            </div>
            <button onclick="correggi(${esercizio})">CORREGGI</button>`;

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
    let aus = "<div class='tags'>";
    for(let i of esercizio.argomento){
        aus += `<span>${i}   </span>`;
    }
    aus += `</div>
            <p>${esercizio.consegna}</p>
            <div>`;

    for(let i in esercizio.scelte){
        aus+=`
        <input type="radio" id="ris${i}">
        <label for="ris${i}">${esercizio.scelte[i]}</label>`;
    }
    aus += `</div>
    <button onclick="correggi(${esercizio})">CORREGGI</button>`;

    document.getElementsByClassName("esercizioRM")[0].innerHTML = aus;
}