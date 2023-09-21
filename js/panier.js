let cart = JSON.parse(localStorage.getItem('panier'))

// get all btns in products class
let btns = document.querySelectorAll('#cart-btn');

btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        e.preventDefault()
        let id = e.target.dataset.id
        let price = e.target.dataset.price
        let title = e.target.dataset.title
        
        if(id in cart) {
            cart[id].qty++
            alert('+1')
        } else {
            // create item
            let item = {
                id: id,
                title: title,
                price: price,
                qty: 1
            }
            cart[id] = item
            alert(`vou avez r'ajouté "1 ${title}" au panier !`)
        }
        end(cart);
    })
})

let decrementBtn = document.querySelectorAll('#decrement')
decrementBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        let id = e.target.dataset.id
        if(id in cart) {
            cart[id].qty--;
            alert('-1')
        }
        end(cart);
    })
})
 
function end(cart) {
    localStorage.setItem('panier', JSON.stringify(cart))
    //console.table(JSON.parse(localStorage.getItem('panier')))
    
    //faire un update() qui uppdate le total price / price et la qty
    location.reload()
}