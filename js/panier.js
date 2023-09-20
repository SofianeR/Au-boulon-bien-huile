let cart = {}

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
            //++
        } else {
            // create item
            let item = {
                id: id,
                title: title,
                price: price,
            }
            cart[id] = item
        }

        localStorage.setItem('cart', JSON.stringify(cart))
        console.log(cart)
    })
})

