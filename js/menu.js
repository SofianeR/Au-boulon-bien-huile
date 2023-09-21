
const toggleMenu = () =>{
    const menuButton = document.querySelector("#burger")
    const navPhone=document.querySelector(".menu_hidden_phone")
    
    if(navPhone) {
        menuButton.addEventListener("click",(e)=>{
            //console.log(navPhone)
            e.preventDefault()
            navPhone.style.display=(navPhone.style.display=="none")?"block":"none"
        })
    }
}
toggleMenu()
