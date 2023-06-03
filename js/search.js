let spans = document.querySelectorAll("#filtro > .tag > span");
let spans2 = document.querySelectorAll(".type > span");
let cercaInput = document.querySelector("#searchBar > input");
let cercaNav = document.getElementById("cerca");
let close = document.querySelector(".close");
let diff_val = document.getElementsByClassName("val");
let index_val = document.getElementById("diff-val");

for (const obj of spans) {
    obj.addEventListener("click", function () {
        this.classList.toggle("spanClickArg");
    });
}

for (const obj of spans2) {
    obj.addEventListener("click", function () {
        this.classList.toggle("spanClickTyp");
    });
}

window.onresize = () => {if(cercaNav.style.height != ""){if(window.innerWidth >= 770) cercaNav.style.height = "83vh"; else cercaNav.style.height = "80vh";}};

cercaInput.addEventListener("click", () => {(window.innerWidth >= 770 ? cercaNav.style.height = "83vh" : cercaNav.style.height = "80vh")});
document.addEventListener("click", (e) => {
    if (!cercaNav.contains(e.target))
        cercaNav.style.height = "";

    close.addEventListener("click", () =>{
        cercaNav.style.height = "";
    });
});

function diff(i){
    index_val.innerText = (i+1).toString();

    for(let j=0; j<diff_val.length; j++){
        if(j <= i)
            diff_val[j].style.backgroundColor = "var(--azzurro2)";
        else
            diff_val[j].style.backgroundColor = "var(--gray2)"; 
    }
}

const esercizi = [
    {
        "title" : "Esercizio Present Perfect",
        "type" : "Testo Bucato",
        "description" : "Ei completa questo esercizio inserendo negli spazi il tempo corretto coniugato al present perfect e bla bla bla bla",
        "tag" : ["Grammatica", "Verbi", "Classi 3^"],
        "diff" : 2
    }
];

creaAccordion();

function creaAccordion(){
    let cont = document.querySelector("main");

    for(let i in esercizi){
        cont.appendChild(accordion_item(esercizi[i]));
    }

    let accPreviews = document.getElementsByClassName("accPreview");
    for (const acc of accPreviews) {
        acc.addEventListener("click", function () {
            if (this.parentElement.style.height == "") {
                this.parentElement.style.height = "fit-content";
                this.lastElementChild.textContent = "-";
            } else {
                this.parentElement.style.height = "";
                this.lastElementChild.textContent = "+";
            }
        });
    }
}

function accordion_item(esercizio){

    let strTag = ``;
    let iconType;
    let strDiff = ``;
    let accordion = document.createElement("div");
    accordion.className = "accordion";

    for(let i in esercizio.tag){
        strTag += `<span>` + esercizio.tag[i] + `</span>`;
    }

    for(let i=0; i<5; i++){
        if(i<esercizio.diff)
            strDiff += `<div class="val" style="background-color: var(--azzurro2)"></div>`;
        else
            strDiff += `<div class="val" style="background-color: var(--gray2)"></div>`;
    }

    console.log(esercizio.type);

    if(esercizio.type == "Vero e Falso")
        iconType = "e";
    else if(esercizio.type == "Testo Bucato")
        iconType = "a";
    else
        iconType = "c";

    accordion.innerHTML = `
        <div class="accPreview">
            <div>
                <span class="myIcon">${iconType}</span>
                <b class="titleEs">${esercizio.title}</b>
            </div>
            <span>+</span>
        </div>
        <div class="hideEs">
            <div>
                <div class="descEs">
                    ${esercizio.description}
                </div>
                <div class="tag">
                   ${strTag}
                </div>
            </div>
            <div>
                <div class="diff">
                    <span id="diff-val">${esercizio.diff}</span>
                    <div class="diff-val">
                        ${strDiff}
                    </div>
                </div>
                <button class="startEs" tabindex="-1">Inizia</button>
            </div>
        </div>
    `;

    return accordion;
}