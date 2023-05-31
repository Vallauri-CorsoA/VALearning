const statoAttuale = STATUS.LOGGED_IN_INSEGNANTE;

window.addEventListener("DOMContentLoaded", () => {
  const formEsercizio = document.getElementById("form-crea-esercizio");
  const formContainer = formEsercizio.querySelector(".creazione-container");
  const formTipologiaEsercizio = document.getElementById("tipologia-esercizio");

  formEsercizio.addEventListener("submit", (e) => {
    e.preventDefault();
  });

  formTipologiaEsercizio.addEventListener("change", (e) => {
    formContainer.innerHTML =
      TIPOLOGIA_ESERCIZIO_HTML_TEMPLATE[e.target.value] ??
      "Errore! Ricaricare la pagina";

    switch (e.target.value) {
      case TIPO_ESERCIZI.VERO_FALSO:
        break;
      case TIPO_ESERCIZI.TESTO_BUCATO:
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

function gestisciTestoBucato() {}

function gestisciRisposteMultiple() {
  const btnNuovaOpzione = document.getElementById(
    "risposteMultiple-nuovaOpzione"
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
}
