const $openClose = document.getElementById("open-close"),
    $sidebar = document.getElementById("sidebar");

$openClose.addEventListener("click",()=>{
    $sidebar.classList.toggle("deploy")
})