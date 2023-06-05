function creaRiass(){
  let div = `
  <div id="contenitoreRiass">
  <h2>CARICA IL PDF</h2>
  <div class="mb-3">
  <input class="form-control" type="file" id="formFile">
  </div>
  <br>

  <div class="row" id="input">
    <div class="col-sm-3 row g-3 align-items-center">
      <div class="col-4">
        <label for="inputPassword6" class="col-form-label">Classe</label>
      </div>
      <div class="col-8">
        <input type="text" id="inputClasse" class="form-control" aria-describedby="passwordHelpInline">
      </div>
    </div>
  <div class="col-sm-3 row g-3 align-items-center">
      <div class="col-5">
        <label for="inputPassword6" class="col-form-label">Argomento</label>
      </div>
      <div class="col-7">
        <input type="text" id="inputArgomento" class="form-control" aria-describedby="passwordHelpInline">
      </div>
  </div>
  <div class="col-sm-6 row g-3 align-items-center">
      <div class="col-2">
        <label for="inputPassword6" class="col-form-label">Tag</label>
      </div>
      <div class="col-10">
        <input type="text" id="inputTag" class="form-control" aria-describedby="passwordHelpInline">
      </div>
  </div>
</div>
<button class="ms-4 mb-5 mt-5 btn btn-primary" id="jonny" onclick="visualizzaPDF()">INVIO</button>
<button class="ms-4 mb-5 mt-5 btn btn-primary" id="btn2" onclick="conferma()">CONFERMA</button>
</div>
  `;

  document.querySelector("main").innerHTML = div;
}

/*
      <div class="col-sm-6 col-5">
      <span id="passwordHelpInline" class="form-text">
        Tag è una breve descrizione dei tratti principali del file
      </span>
      </div>
*/

function visualizzaRiass(){
  let div = `
  <div id="contenitoreRiass">
    <h2>PDF</h2>
    <div class="container">
      <div class="row height d-flex justify-content-center align-items-center">
          <div class="col-md-6"
          <div class="form">
              <i class="fa fa-search"></i>
              <input type="text" class="form-control form-input" placeholder="Ricerca l'Argomento">
              <span class="left-pan"><i class="fa fa-microphone"></i></span>
          </div>  
          </div>
      </div>
    </div>
    <div onload="caricaPdf()" id="contenitorePDF">
    </div>
  </div>
  `;

  document.querySelector("main").innerHTML = div;
}

function visualizzaPDF(){
  let pdfInput = document.querySelector("input[type=file]");
  

  let div = ` 
  <hr>
  <h2>anteprima pdf</h2>
  <iframe src="${pdfInput.value}" width="100%" height="400px"></iframe>
  `;

  document.getElementById("jonny").disabled = true;

  document.getElementById("contenitoreRiass").innerHTML += div; 
}

window.addEventListener('keydown', (event) => {

      let pdf = document.querySelectorAll(".pdf");
      let newpdf = ``;
  
      for(let i = 0; i< classe.length; i++){
          if(classe.toLowerCase[i].toLocaleLowerCase().includes(event.key.toLowerCase())){
              newpdf += `<iframe src="${pdf[i]}" width="100%" height="500px"></iframe>`
          }
      }
      document.getElementById("contenitorePDF").innerHTML = newpdf;

        pdf = document.querySelectorAll(".pdf");
        newpdf = ``;
    
        for(let i = 0; i< argomento.length; i++){
            if(argomento.toLowerCase[i].toLocaleLowerCase().includes(event.key.toLowerCase())){
                newpdf += `<iframe src="${pdf[i]}" width="100%" height="500px"></iframe>`
            }
        }
        document.getElementById("contenitorePDF").innerHTML = newpdf;
})

function caricaPdf(){
  let div = ``;
  let classeUt;

  for(let i in classe){
    if(classeUt == classe[i]){
      div += `
      <div class="pdf">
      <iframe src="${pdf[i]}" width="100%" height="500px"></iframe>
      </div>
    `;
    }
  }
  document.getElementById("contenitorePDF").innerHTML += div;
}

function conferma(){
  let inputClasse = document.getElementById("inputClasse");
  let inputArgomento = document.getElementById("inputArgomento");
  let inputTag = document.getElementById("inputTag");
  let pdfInput = document.querySelector("input[type=file]");
  let div = ``;

  if(inputClasse.value != "" && inputArgomento.value != "" && inputTag != "" && pdfInput.value != ""){
    classe.push(inputClasse.value);
    argomento.push(inputArgomento.value);
    tag.push(inputTag.value);
    pdf.push(pdfInput.value);
  }
  else{
    div = `
    <div class="alert alert-danger" role="alert">
      Attenzione! uno dei campi di testo non è completato!!!
    </div>
    `;

    let alert = document.getElementById("alert");
    alert.innerHTML = div;
    setTimeout(reset, 3000);
  }
}

function reset(){
  let alert = document.getElementById("alert");
  alert.innerHTML = `<div id="alert"></div>`;
}