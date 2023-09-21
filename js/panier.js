let cart = []

// get all btns in products class
let btns = document.querySelectorAll('#cart-btn');

btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        console.log(e)

        e.preventDefault()
        let id = e.target.dataset.id
        let price = e.target.dataset.price
        let title = e.target.dataset.title
        
        if(id in cart) {
            cart[id].qty++
        } else {
            // create item
            let item = {
                id: id,
                title: title,
                price: price,
                qty: 1
            }
            cart[id] = item
        }

        localStorage.setItem('panier', JSON.stringify(cart))
        console.log(cart)
    })
})

