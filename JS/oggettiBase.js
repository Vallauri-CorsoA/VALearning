//###########################################//
//                LEGENDA                    //
//  Tipi esercizi:                           //
//  0 -> Scelta Multipla                     //
//  1 -> Completa gli spazi                  //
//  2 -> Vero o Falso                        //
//                                           //
//###########################################//


let profiloUtente = {
    /* s-> studente, d->docente */
    tipo:"s",
    idUtente : 2704, /* Modificabile nella pagina di profilo */
    classe : 3,
    nome:"King", 
    cognome:"Von",
    email:"kingvon911@gmail.com",
    livello:"B1",
    preferenze:[ 0, 2 ],
    documentiInseriti:[]
};

let documento = {
    path:"",
    nome:"",
    argomenti:"",
    idProprietario:0
}
let esercizio = {
    /* Id che identifica univocamente l'esercizio */
    id:0,
    argomento:"Crimes",
    /* Numero da ... a ... */
    difficolta: 1,
    /* Testo dell'esercizio/domanda */
    consegna: "Completa gli esercizi",
    tipo:0,
    risposte:{
        tipo0:
        {
            domanda: "Who is a murder?",
            opzioni: ["A person who steals in markets", "A person who cheat at school", "A person who killed someone", "None of the previous"],
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
};
let correzione = {
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
};

/*
    If you ever asked someone for their mobile phone number and they said, “Sorry, I don’t own a mobile phone,”
*/