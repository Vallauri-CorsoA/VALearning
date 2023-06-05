function start(){
    let div=document.getElementById("dati"); 
    div.innerHTML=
    `
    <div class="row mt-4">
        <div class="col-lg-6"><strong>Cognome: </strong>${profiloUtente[0].cognome}</div>
        <div class="col-lg-6"><strong>Nome: </strong>${profiloUtente[0].nome}</div>
    </div>
    <div class="row mt-4">
        <div class="col-lg-6"><strong>Email: </strong>${profiloUtente[0].email}</div>
        <div class="col-lg-6"><strong>Id: </strong>${profiloUtente[0].idUtente}</div>
    </div>
    <div class="row mt-4">
        <div class="col-lg-6"><strong>Tipo: </strong>${profiloUtente[0].tipo}</div>
        <div class="col-lg-6" id="classe"><strong>Classe: </strong>${profiloUtente[0].classe}<span class="material-symbols-outlined" id="modifica" onclick=mostraModale() >
        edit
        </span></div>
    </div>

    `;
    let slct=document.getElementById("selectClasse"); 
    let aus="";
    for(let i=0;i<classi.length;i++){
        aus+="<option>"+classi[i]+"</option>";
    }
    slct.innerHTML=aus;
    //mostra il livello di ogni argomento per ogni anno(se l anno non è ancora stato svolto non deve essere mostrato)
    for(let s = 0; s < 5; s++){
    let ptUtente = document.getElementsByClassName("punteggi")[s];

        for(let i = 0; i < livello.length; i++){
            ptUtente.innerHTML += `<tr>
            <td>${livello[i].argomenti}</td>
            <td>${livello[i].livelli}</td>
            <td>${livello[i].esCorretti}</td>
            <td>${livello[i].esSbagliati}</td>
        </tr>`;
        }

    }
        /*Preferenze mostra gli esercizi piu svolti di un certo argomento da parte dell'utente*/ 
        let prefUtente = document.getElementById("preferenze");
    
            for(let i = 0; i < preferenze.length; i++){
                let j = preferenze[i];
                prefUtente.innerHTML += `<tr>
                <td>${livello[j].argomenti}</td>
                <td>${livello[j].livelli}</td>
                <td>${livello[j].esCorretti}</td>
                <td>${livello[j].esSbagliati}</td>
                <td>${livello[j].esSvolti}</td>
            </tr>`;
            }

            let caricatiUtente = document.getElementById("caricati");
        
                for(let i = 0; i < documentiInseriti.length; i++){
                    caricatiUtente.innerHTML += `<tr>
                    <td>${documentiInseriti[i].nome}</td>
                    <td>${documentiInseriti[i].argomenti}</td>
                    <td>${documentiInseriti[i].anno}</td>
                    <td>${documentiInseriti[i].data}</td>
                </tr>`;
                }
}

function mostraModale(){
    const my_modal = new bootstrap.Modal("#my-modal");
    my_modal.show();
}

function salvaClasse(){
    let select=document.getElementById("selectClasse"); 
    let ind=select.selectedIndex;
    profiloUtente.classe=classi[ind];
    console.log(profiloUtente.classe);
    document.getElementById("classe").innerHTML=`<strong>Classe: </strong>${profiloUtente.classe}<span class="material-symbols-outlined" id="modifica" onclick=mostraModale() >
    edit
    </span>`;
}