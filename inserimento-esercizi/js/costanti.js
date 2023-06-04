//#region
// dati dall'esterno

const STATUS = {
  LOGGED_OUT: "LOGGED_OUT",
  LOGGED_IN_STUDENTE: "LOGGED_IN_STUDENTE",
  LOGGED_IN_INSEGNANTE: "LOGGED_IN_INSEGNANTE",
};

const TIPO_ESERCIZI = {
  VERO_FALSO: "veroFalso",
  TESTO_BUCATO: "testoBucato",
  RISPOSTE_MULTIPLE: "risposteMultiple",
};

const ARGOMENTI = [
  {
    id: 1,
    argomento: "Used to",
    classe: 3,
  },
  {
    id: 3,
    argomento: "For and Since",
    classe: 3,
  },
  {
    id: 6,
    argomento: "Present perfect simple",
    classe: 3,
  },
  {
    id: 2,
    argomento: "Present perfect continuous",
    classe: 3,
  },
  {
    id: 9,
    argomento: "Zero conditional",
    classe: 3,
  },
  {
    id: 11,
    argomento: "Future",
    classe: 3,
  },
];

//#endregion

const TIPOLOGIA_ESERCIZIO_HTML_TEMPLATE = {
  // MINIFIED
  veroFalso: `<div class="mb-4"><label for="veroFalso-domanda" class="mb-1">Domanda:</label><input type="text" class="form-control" id="veroFalso-domanda"></div><div class="mb-4"><label class="mb-1">Risposta:</label><div class="btn-group d-flex" role="group" aria-label="Basic radio toggle button group"><input type="radio" class="btn-check" name="btnradio" id="veroFalso-vero" autocomplete="off" checked="checked"><label class="btn btn-outline-success" for="veroFalso-vero">Vero</label><input type="radio" class="btn-check" name="btnradio" id="veroFalso-falso" autocomplete="off"><label class="btn btn-outline-danger" for="veroFalso-falso">Falso</label></div></div><div class=""><label for="veroFalso-correzione" class="form-label">Correzione in caso della risposta errata:</label><textarea class="form-control" id="veroFalso-correzione" rows="5" style="max-height:22em"></textarea></div>`,
  testoBucato: `<div class="">
  <div
  contenteditable="true"
  data-text="Inserisci il testo qui"
  id="testoBucato-testo"></div><!--<textarea class="form-control" placeholder="Inserire il testo qui" id="testoBucato-testo" rows="17" style="max-height: 34rem"></textarea>--><div class="form-text">Per inserire una gap scrivere: /(risposta 1 | risposta 2 | ...).<br>/ marca l'inizio di uno spazio vuoto e le parole, una o più separate dalla |, tra le parentesi tonde sono le possibili risposte corrette.</div></div>`,
  risposteMultiple: `<div class="mb-4"><label for="risposteMultiple-domanda" class="mb-1">Domanda:</label><input type="text" class="form-control" id="risposteMultiple-domanda"></div><div><label class="my-1">Inserire le opzioni and select the correct one</label><div class="opzioni"><div class="input-group my-2"><div class="input-group-text"><input class="form-check-input mt-0" type="radio" name="risposteMultiple-opzione" checked="checked"></div><input type="text" class="form-control" aria-label="Text input with radio button" placeholder="Opzione 1"></div><div class="input-group my-2"><div class="input-group-text"><input class="form-check-input mt-0" type="radio" name="risposteMultiple-opzione"></div><input type="text" class="form-control" aria-label="Text input with radio button" placeholder="Opzione 2"></div><div class="input-group my-2"><div class="input-group-text"><input class="form-check-input mt-0" type="radio" name="risposteMultiple-opzione"></div><input type="text" class="form-control" aria-label="Text input with radio button" placeholder="Opzione 3"></div></div></div><button class="btn btn-primary my-1" id="risposteMultiple-nuovaOpzione">Nuova opzione</button><button class="btn btn-danger mx-3 my-1" id="risposteMultiple-rimuoviOpzione">Rimuovi opzione</button>`,
};
