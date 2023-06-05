const statoAttuale = STATUS.LOGGED_IN_INSEGNANTE;

window.addEventListener("DOMContentLoaded", () => {
  const formEsercizio = document.getElementById("form-crea-esercizio");
  const formContainer = formEsercizio.querySelector(".creazione-container");
  const formTipologiaEsercizio = document.getElementById("tipologia-esercizio");

  formEsercizio.addEventListener("submit", (e) => {
    e.preventDefault();
    gestisciSubmit(formTipologiaEsercizio.value);
  });

  formTipologiaEsercizio.addEventListener("change", (e) => {
    formContainer.innerHTML =
      TIPOLOGIA_ESERCIZIO_HTML_TEMPLATE[e.target.value] ??
      "Errore! Ricaricare la pagina";

    switch (e.target.value) {
      case TIPO_ESERCIZI.VERO_FALSO:
        break;
      case TIPO_ESERCIZI.TESTO_BUCATO:
        gestisciTestoBucato();
        break;
      case TIPO_ESERCIZI.RISPOSTE_MULTIPLE:
        gestisciRisposteMultiple();
        break;
    }
  });

  suggerimentoArgomento();

  document.getElementById("btn-publica").textContent =
    statoAttuale === STATUS.LOGGED_IN_INSEGNANTE ? "Publica" : "Proponi";

  document
    .querySelector('#form-crea-esercizio button[type="reset"]')
    .addEventListener("click", () => {
      document
        .querySelectorAll("#form-crea-esercizio .badge")
        .forEach((badge) => badge.remove());
      formTipologiaEsercizio.selectedIndex = 0;
      formTipologiaEsercizio.dispatchEvent(new Event("change"));
    });

  document.getElementById("btn-preview").addEventListener("click", () => {
    alert(
      "Preview dell'esercizio: implementazione da parte del gruppo che fa la visualizzazione degli esercizi"
    );
  });
});

function suggerimentoArgomento(
  textInput = document.getElementById("argomento-esercizio"),
  btnAggiungi = document.querySelector("#argomento-esercizio + button"),
  boxArgomenti = document.getElementById("box-argomenti"),
  suggerimento = document.querySelector(".setting-container .suggerimento")
) {
  const argomenti = ARGOMENTI.map((obj) => obj.argomento).toSorted();
  let parolaInFocus = false;
  let btnCliccabile = true;

  textInput.oninput = (e) => {
    suggerimento.innerHTML = "";
    let parola = e.target.value;
    if (parola.length === 0) {
      parolaInFocus = false;
      return;
    }

    const parolaSuggerita = cercaParola(argomenti, parola);
    if (parolaSuggerita === null) {
      parolaInFocus = false;
      return;
    }

    e.target.value = parolaSuggerita.substring(0, parola.length);
    suggerimento.innerHTML = parolaSuggerita;
    parolaInFocus = true;
  };

  textInput.onkeydown = (e) => {
    if (e.key !== "Enter" && e.key !== "Tab") return;
    if (parolaInFocus) textInput.value = suggerimento.textContent;
  };

  btnAggiungi.onclick = () => {
    if (!btnCliccabile) return;
    if (parolaInFocus) {
      boxArgomenti.append(nuovoBadgeArgomento(suggerimento.textContent));
      textInput.value = "";
      suggerimento.textContent = "";
      return;
    }
    btnCliccabile = false;
    const altBdColor = textInput.style.borderColor;
    textInput.style.borderColor = "var(--bs-red)";
    setTimeout(() => {
      textInput.style.borderColor = altBdColor;
      btnCliccabile = true;
    }, 800);
  };
}

function gestisciVeroFalso() {}

function gestisciTestoBucato() {
  const btnNuovaOpzione = document.getElementById(
    "risposteMultiple-nuovaOpzione"
  );
  const btnRimuoviOpzione = document.getElementById(
    "risposteMultiple-rimuoviOpzione"
  );
  const btnAggiungiGap = document.getElementById(
    "risposteMultiple-aggiungiGap"
  );

  let contOpzioni = 2;

  console.log(btnNuovaOpzione, btnRimuoviOpzione);

  btnNuovaOpzione.onclick = () => {
    if (contOpzioni >= 4) return;
    contOpzioni += 1;
    document.querySelector(".opzioni").append(nuovoOpzioneNuovaGap());
  };

  btnRimuoviOpzione.onclick = () => {
    if (contOpzioni <= 2) return;
    contOpzioni -= 1;
    const box = document.querySelector(".opzioni");
    box.removeChild(box.lastChild);
  };

  btnAggiungiGap.onclick = () => {
    let err = false;
    for (const opzione of document.querySelectorAll(".opzioni .input-group")) {
      err |= opzione.querySelector('input[type="text"]').value.trim() === "";
    }

    if (err) {
      const alert = nuovoAlert(
        false,
        "<strong>Attenzione!</strong> Inserire tutte le opzioni"
      );
      document.body.prepend(alert);
      setTimeout(() => alert.querySelector("button").click(), 2500);
    } else {
      const box = document.getElementById("testoBucato-textBox");

      const alternative = [];
      let rispostaCorretta;

      for (const opzione of document.querySelectorAll(
        ".opzioni .input-group"
      )) {
        const input = opzione.querySelector('input[type="radio"]');
        if (input.checked)
          rispostaCorretta = opzione
            .querySelector('input[type="text"]')
            .value.trim();
        else
          alternative.push(
            opzione.querySelector('input[type="text"]').value.trim()
          );
      }

      box.append(nuovoDropdown(rispostaCorretta, alternative));
      box.innerHTML += "&nbsp;";
      setEndOfContenteditable(box);

      // pulizia
      document.querySelector(".opzioni").innerHTML = `
        <div class="input-group my-2">
          <div class="input-group-text">
            <input class="form-check-input mt-0" type="radio" name="nuovaGap-opzione" checked="checked">
          </div>
          <input type="text" class="form-control" aria-label="Text input with radio button"
            placeholder="Opzione 1">
        </div>
        <div class="input-group my-2">
          <div class="input-group-text">
            <input class="form-check-input mt-0" type="radio" name="nuovaGap-opzione">
          </div>
          <input type="text" class="form-control" aria-label="Text input with radio button"
            placeholder="Opzione 2">
        </div>
      `;
    }
  };
}
function setEndOfContenteditable(contentEditableElement) {
  var range, selection;
  if (document.createRange) {
    //Firefox, Chrome, Opera, Safari, IE 9+
    range = document.createRange(); //Create a range (a range is a like the selection but invisible)
    range.selectNodeContents(contentEditableElement); //Select the entire contents of the element with the range
    range.collapse(false); //collapse the range to the end point. false means collapse to end rather than the start
    selection = window.getSelection(); //get the selection object (allows you to change selection)
    selection.removeAllRanges(); //remove any selections already made
    selection.addRange(range); //make the range you have just created the visible selection
  } else if (document.selection) {
    //IE 8 and lower
    range = document.body.createTextRange(); //Create a range (a range is a like the selection but invisible)
    range.moveToElementText(contentEditableElement); //Select the entire contents of the element with the range
    range.collapse(false); //collapse the range to the end point. false means collapse to end rather than the start
    range.select(); //Select the range (make it the visible selection
  }
}

function gestisciRisposteMultiple() {
  const btnNuovaOpzione = document.getElementById(
    "risposteMultiple-nuovaOpzione"
  );

  const btnrimuoviOpzione = document.getElementById(
    "risposteMultiple-rimuoviOpzione"
  );

  const opzioniBox = document.querySelector(".creazione-container .opzioni");

  let contOpzioni = 3;

  btnNuovaOpzione.onclick = () => {
    if (contOpzioni > 7) {
      return;
    }
    contOpzioni += 1;
    opzioniBox.append(nuovoOpzioneRisposteMultiple());
  };

  btnrimuoviOpzione.onclick = () => {
    if (contOpzioni < 4) {
      return;
    }
    contOpzioni -= 1;
    opzioniBox.removeChild(opzioniBox.lastChild);
  };
}

function gestisciSubmit(tipologiaEsercizio) {
  const elementiMancanti = [];

  if (document.querySelector("#box-argomenti").childElementCount === 0) {
    elementiMancanti.push("Argomento mancante");
  }

  switch (tipologiaEsercizio) {
    case TIPO_ESERCIZI.VERO_FALSO:
      if (document.getElementById("veroFalso-domanda").value.trim() === "") {
        elementiMancanti.push("Domanda del vero e falso mancante");
      }
      break;
    case TIPO_ESERCIZI.TESTO_BUCATO:
      if (document.getElementById("nome-esercizio").value.trim() === "") {
        elementiMancanti.push("Nome esercizio mancante");
      }
      if (!document.querySelector("#testoBucato-textBox > .dropdown")) {
        elementiMancanti.push("Inserisci almeno una gap!");
      }
      break;
    case TIPO_ESERCIZI.RISPOSTE_MULTIPLE:
      if (
        document.getElementById("risposteMultiple-domanda").value.trim() === ""
      ) {
        elementiMancanti.push("Domanda dell'esercizio mancante");
      }

      for (const inputGroup of document.querySelectorAll(
        ".creazione-container .opzioni > .input-group"
      )) {
        console.log(inputGroup);
        if (
          inputGroup.querySelector('input[type="text"]').value.trim() === ""
        ) {
          elementiMancanti.push("Testo opzioni mancante");
          break;
        }
      }
      break;
  }

  if (elementiMancanti.length === 0) {
    var alert = nuovoAlert(
      true,
      "<strong>Esercizio creato con success!</strong>"
    );
  } else {
    let messaggio = "";
    for (const errore of elementiMancanti) messaggio += `- ${errore} <br>`;
    var alert = nuovoAlert(
      false,
      "<strong>Attenzione!</strong><br>" + messaggio
    );
  }
  document.body.prepend(alert);
  setTimeout(() => alert.querySelector("button").click(), 2500);
}

// document.getElementById("btn-publica").addEventListener("click", () => {
//   if (
//     document.getElementById("veroFalso-domanda").value == "" ||
//     document.getElementById("nome-esercizio").value == "" ||
//     !document.getElementById("box-argomenti").firstChild
//   ) {
//     check_error = true;
//   }

//   if (check_error) {
//     if (document.getElementById("veroFalso-domanda").value == "") {
//       alertadd = `
//         <div style="position: absolute;
//         inset: 0;
//         margin: auto;">
//         <div class="alert alert-danger">
//           Inserisci la domanda del vero o false per favore!
//         </div>
//         </div>
//         `;
//     } else if (document.getElementById("nome-esercizio").value == "") {
//       alertadd = `
//         <div style="position: absolute;
//         inset: 0;
//         margin: auto;">
//         <div class="alert alert-danger">
//           Inserisci il nome dell'esercizio per favore!
//         </div>
//         </div>
//         `;
//     } else {
//       alertadd = `
//         <div style="position: absolute;
//         inset: 0;
//         margin: auto;">
//         <div class="alert alert-danger">
//           Seleziona un argomento per favore!
//         </div>
//         </div>`;
//     }
//     var objverofalse = document.createElement("div");
//     objverofalse.innerHTML = alertadd;
//     document.querySelector("body").append(objverofalse);
//     setTimeout(function () {
//       objverofalse.remove();
//     }, 3000);
//   }
// });
