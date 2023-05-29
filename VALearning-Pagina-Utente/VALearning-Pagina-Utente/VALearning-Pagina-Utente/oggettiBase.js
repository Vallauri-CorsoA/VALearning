/*
    Oggetto completo relativo ad UN esercizio/domanda

*/
let esercizio = {
    /* Id che identifica univocamente l'esercizio */
    id:0,
    /* 
        argomento e difficoltà vegono visualizzati in html
        come fossero tag 
    */
    /* es. verbi, reading, ... */
    argomento:"",
    /* Numero da ... a ... */
    difficolta: 0,
    /* Testo dell'esercizio/domanda */
    consegna: "",
    
    /* In base al tipo interpreto l'oggetto risposte in maniera opportuna */
    /**
     * TIPI:
     * - risposta multipla
     * - testo bucato
     * - vero/falso
     */
    tipo:"",
    risposte:{
        /* Risposte possibili e corrette */
        punteggio:0/* Punteggi per ogni risposta! */
    }
};

/*
    Correzione di un esercizio/insieme di esercizi
*/
let correzione = {
    /* id dell'utente che ha svolto l'esercizio */
    idUtente:0,
    /**  id dell'esercizio svolto*/ 
    idEsercizio:0,

    /* Punteggio finale (dopo la correzione) */
    punteggioFinale:0,
    
    /* Risposte utente -> la struttura dipende dal tipo dell'esercizio */
    risposteDate: {}
};


let profiloUtente = {
    /* s-> studente, d->docente */
    tipo:"s",
    idUtente : 0,
    /* Modificabile nella pagina di profilo */
    classe : 0,
    nome:"", 
    cognome:"",
    email:"",
    
    /* Per ogni argomento (o classe di argomento) indicare 
    il livello di conoscenza/esercizio/abilità */
    livello:{},

    /*
        - argomenti degli esercizi svolti (calcolati)
        - contenuti preferiti (inseriti)
    */
    preferenze:{},

    documentiInseriti:[]
};

let documento = {
    path:"",
    nome:"",
    argomenti:"",
    idProprietario:0
}