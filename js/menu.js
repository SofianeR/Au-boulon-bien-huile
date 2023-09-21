
const toggleMenu = () =>{
    const menuButton = document.querySelector("#burger")
    const navPhone=document.querySelector(".menu_hidden_phone")
    
menuButton.addEventListener("click",(e)=>{
    console.log(navPhone)
    navPhone.style.display=(navPhone.style.display=="none")?"block":"none"
})
}
toggleMenu()
