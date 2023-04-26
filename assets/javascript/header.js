const menu_all = document.getElementById("menu-all");
menu_all.addEventListener("click", (e)=>{
    const menu_all_1 = document.getElementById("menu-all-1");
    menu_all_1.classList.toggle("trouver");
});


const links = document.querySelectorAll('.links');
links.forEach(cle=>{
    const url = location.href;
    if (url.includes(cle.id)){
        cle.classList.add('big');
    }else{
        cle.classList.remove('big');
    }
})

