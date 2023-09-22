let data = JSON.parse(localStorage.getItem('panier'))

function init() {
    let carousel = document.querySelector('#panier-list')
    //console.log(data)
    for(let item of data) {
        if(item) {
            let html = `
                <div class="card custom-card">
                    <h3>${item.title}</h3>
                    <div>
                        <p>price: ${item.price}€ ${item.qty > 1 ? ` / total: ${item.price * item.qty}€`: ''}</p>
                        <p>qty: ${item.qty}</p>
                        <button class="cm-btn cm-btn-alert" id="decrement" data-id=${item.id} data-title="${item.title}" data-price="${item.price}">
                        -
                        </button>
                        <button class="cm-btn cm-btn-valid" id="cart-btn" data-id=${item.id} data-title="${item.title}" data-price="${item.price}">
                        +
                        </button>
                    </div>
                </div>
            `
            carousel.innerHTML += html
        }
    }
}

init()
