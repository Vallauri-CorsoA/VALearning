function start(){
    //organizzo zona dati utente
    createUserArea()
}
function createUserArea(){
    let a = 
    `
     <div class="row">
        <p class="col-12">Correzione degli esercizi svolti da: ${profiloUtente.nome} ${profiloUtente.cognome}</p>
     </div>
    `
    document.getElementById('usrArea').innerHTML=a
}