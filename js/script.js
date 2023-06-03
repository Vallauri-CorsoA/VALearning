//inizio header
function openLink(){
    let link = document.querySelector("#link");

    if(link.classList.contains("show")){
        link.classList.remove("show");
        link.classList.add("hide");
    }
    else{
        link.classList.remove("hide");
        link.classList.add("show");
    }
}

// fine header