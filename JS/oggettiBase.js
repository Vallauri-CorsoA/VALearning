//###########################################//
//                LEGENDA                    //
//  Tipi esercizi:                           //
//  0 -> Scelta Multipla                     //
//  1 -> Completa gli spazi                  //
//  2 -> Vero o Falso                        //
//                                           //
//###########################################//

let maxESERCIZI = 5; //massimo esercizi svolgibili in una volta

let profiloUtente = {//dati relativi all'utente
    tipo:"s",/* s-> studente, d->docente */
    idUtente : 2704, /* Modificabile nella pagina di profilo */
    classe : "3A Informatica",//classe dell'utente
    nome:"King", //nome dell'utente
    cognome:"Von",//cognome dell'utente
    email:"kingvon911@gmail.com",//email dell'utente
    livello:"B1",//livello di conoscenza dell'inglese dell'utente
    preferenze:[ 0, 2 ],//preferenze dell'utente
    documentiInseriti:[]//documenti inseriti dall'uente nel forum                 
};

let documento = {//dati relativi al documento postato sul forum
    path:"",//percorso del file 
    nome:"",//nome del file 
    argomenti:"",//argomento del file
    idProprietario:0//id dell'utente che ha postato il documento
}
let esercizio = new Array(maxESERCIZI)
esercizio[0]=
{   //dati relativi all'esercizio svolto
    id:0,/* Id che identifica univocamente l'esercizio */
    argomento:"Crimes",//argomento dell'esercizio
    difficolta: 1,//difficoltà dell'esercizio
    consegna: "Completa gli esercizi",/* Testo dell'esercizio/domanda */
    tipo:0,//tipo dell'esercizio 0 || 1 || 2
    risposte:{//parte reltiva alle tre tipologie di esercizio
        tipo0://domanda a risposte multiple
        {
            domanda: "Who is a murder?",//domanda dell'esercizio
            opzioni: ["A person who steals in markets", "A person who cheat at school", "A person who killed someone", "None of the previous"],//le possibili risposte che l'utente può scegliere
            rispostaCorretta: "A person who killed someone",//la risposta corretta
            punteggio: 0//il punteggio dell'esercizio
        },
        tipo1:{//riempi il testo bucato
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
}
let correzione = new Array(maxESERCIZI)
