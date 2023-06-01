//###########################################//
//                LEGENDA                    //
//  Tipi esercizi:                           //
//  0 -> Scelta Multipla                     //
//  1 -> Completa gli spazi                  //
//  2 -> Vero o Falso                        //
//                                           //
//###########################################//

let maxESERCIZI = 3; //massimo esercizi svolgibili in una volta

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
    
}
let correzione = new Array(maxESERCIZI)
