var carosello = [
    {
        imgpath: "https://www.tecnicadellascuola.it/wp-content/uploads/2022/07/Matematica_Casella-300x194.jpg",
        titolo: "Risolvi gli esercizi",
        desc:"...."
    },
    {
        imgpath: "https://www.tecnicadellascuola.it/wp-content/uploads/2022/07/Matematica_Casella-300x194.jpg",
        titolo: "Risolvi gli esercizi",
        desc:"...."
    },
    {
        imgpath: "https://www.tecnicadellascuola.it/wp-content/uploads/2022/07/Matematica_Casella-300x194.jpg",
        titolo: "Risolvi gli esercizi",
        desc:"...."
    },
    {
        imgpath: "https://www.tecnicadellascuola.it/wp-content/uploads/2022/07/Matematica_Casella-300x194.jpg",
        titolo: "Risolvi gli esercizi",
        desc:"...."
    }
];

let esercizio= {
    id:0,
    //testo esercizio/domanda
    argomento:" ",

    difficoltà: 0,
    consegna: " ",

    /**
     * -risposta multipla
     * -testo bucato
     * -vero/falso
     */
    //in base al tipo interpreto l'oggetto risposte in modo opportuno
    tipo: "",

    risposte:{
        punteggio:0,
    }

}

let profiloUtente={
    idUtente: 0,
    classe:"",
    nome:"",
    cognome:"",
    email:"",
    livello:{},//indicare il livello di conoscenza/esercizio/abilità
    preferenze:{},
    storicoEsercizi:{}
}

let documento={

}

