document.querySelector(".newCh").addEventListener("click", balancer);
function balancer(event){
    const m_modal = document.querySelector(".big-modal");
    m_modal.classList.toggle("show");
}

document.querySelector(".icon_delete").addEventListener("click", close);
function close(event){
    const m_modal = document.querySelector(".big-modal");
    m_modal.classList.remove("show");
}