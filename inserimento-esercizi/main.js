//#region
// dati dall'esterno

const STATUS = {
  LOGGED_OUT: "LOGGED_OUT",
  LOGGED_IN_STUDENTE: "LOGGED_IN_STUDENTE",
  LOGGED_IN_INSEGNANTE: "LOGGED_IN_INSEGNANTE",
};

const statoAttuale = STATUS.LOGGED_IN_INSEGNANTE;

const ARGOMENTO = [
  {
    id: 1,
    argomento: "Prova1",
    difficoltà: 5,
    classe: 4,
  },
];

//#endregion

const formEsercizio = document.getElementById("form-crea-esercizio");

formEsercizio.addEventListener("submit", (e) => {
  e.preventDefault();
});
