const modifier_all = document.querySelectorAll(".item-2 .modifier, .item-1 .modifier");
const annuler = document.querySelectorAll(".annuler");
annuler.forEach(btnAnnuler => btnAnnuler.addEventListener("click", fermer));
modifier_all.forEach(cle => {
    cle.addEventListener("click", apparaitre);
});

function apparaitre(event) {
    const idEvenet = event.target.id;
    const allEments = document.querySelectorAll(".modifier-all");
    allEments.forEach(els => {
        if (els.id.includes(idEvenet)){
           els.classList.toggle("open")
        }else{
            els.classList.remove("open");
        }
    });
}

function fermer(event){
    const lier = event.target.id.replace("fermer-", "");
    document.getElementById(`modifier-${lier}`).classList.toggle("open")
}


