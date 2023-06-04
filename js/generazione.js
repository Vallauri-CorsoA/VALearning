/**
 * FILE FINALIZZATO ALLA GENERAZIONE CASUALE DI VERIFICHE(IN BASE AI FILTRI SELEZIONATI DALL'UTENTE)
 */


// Variabili globali

let livello = "A2"; // variabile contenente il livello dell'utente(gestito in precedenza)

//in alternativa, si può usare profiloUtente.livello ma è un oggetto più complesso che verrà gestito da altri gruppi, quindi usiamo 
//per semplicità questa variabile di esempio

// Seleziona livello di inglese in base a quello selezionato
function selezionaLivello(){
    let options = document.getElementsByTagName("option");
    let selezionato = false
    let i = -1
    while(!selezionato){
        if(options[++i].value==livello){
            options[i].selected = true;
            selezionato = true;
        }
        else 
            options[i].selected = false;

    }

}

let nEs = document.getElementById("nEsercizi");



function check(){

    //Controllo argomenti inutile dato che verrà utilizzata la barra di ricerca con etichette e quindi le uniche cose selezionabili saranno valide


    //Controllo numero esercizi
    let nEs = document.getElementById("nEsercizi");

    if(nEs.value>=3 && nEs.value <=30)
        genera();
    else
        nEs.value = "";

}

//////////////////////////////////////////////////////////////////////////////////////////////////////////




function genera(){
    //Funzione che pulisce il main e genera gli esercizi da quelli già esistenti
    let main = document.getElementsByTagName("main")[0];

    let nEs = document.getElementById("nEsercizi").value;

    


    while(main.hasChildNodes() && main.childElementCount>1)
        main.removeChild(main.lastChild);

    let child;
    let titolo;
    
    
    for(let i=0; i<nEs;i++){

        child = document.createElement("div");
        child.classList.add("container");
        
        
        if(i%2==0) // Risposta multipla
            child.innerHTML = `
            <div class="row dropdown my-3">
                <a class="btn btn-secondary dropdown-toggle col-12" href="#" role="button" onclick="coloraGiallo(${i})" data-bs-toggle="dropdown" aria-expanded="false">
                    Esercizio ${i+1} - <span class="consegna">Consegna Esercizio ${i+1}</span>
                </a>
        
                
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <li><a class="dropdown-item" onclick="coloraBlu(0,${i})" href="#">Risposta 1</a></li>
                    <li><a class="dropdown-item" onclick="coloraBlu(1,${i})" href="#">Risposta 2</a></li>
                    <li><a class="dropdown-item" onclick="coloraBlu(2,${i})" href="#">Risposta 3</a></li>
                </ul>
            </div>
            
        `;
        
        else//Vero o falso
            child.innerHTML = `
            <div class="row dropdown">
                <a class="btn btn-secondary dropdown-toggle col-12" href="#" role="button" onclick="coloraGiallo(${i})" data-bs-toggle="dropdown" aria-expanded="false">
                    Esercizio ${i+1} - <span class="consegna">Consegna Esercizio ${i+1}</span>
                </a>
        
                
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <li><a class="dropdown-item" onclick="coloraBlu(0,${i})" href="#">Risposta 1</a></li>
                    <li><a class="dropdown-item" onclick="coloraBlu(1,${i})" href="#">Risposta 2</a></li>
                    <li><a class="dropdown-item" onclick="coloraBlu(2,${i})" href="#">Risposta 3</a></li>
                </ul>
            </div>
            
        `;
           
        
        main.appendChild(child);
    
        
    }
    
}




function coloraGiallo(i){
    let esercizio = document.getElementsByClassName("dropdown-toggle")[i];

    esercizio.classList.remove("btn-secondary");
    esercizio.classList.add("btn-warning");

    

}

function coloraBlu(item, domanda){
    let esercizio = document.getElementsByClassName("dropdown-toggle")[domanda];

    esercizio.classList.remove("btn-warning");
    esercizio.classList.add("btn-primary");

    esercizio.innerText = "Esercizio " + domanda + " - Consegna Esercizio " + domanda + " - Risposta selezionata: " + (item+1);

    

    
    

}


