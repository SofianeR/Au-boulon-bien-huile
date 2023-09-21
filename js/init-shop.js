let data = JSON.parse(localStorage.getItem('panier'))

function update() {
    
}

function init() {
    let carousel = document.querySelector('#panier-list')

    console.log(data)

    for(let item of data) {
        if(item) {
            let html = `
                <div>
                    <h3>${item.title}</h3>
                    <div>
                        <p>${item.price}</p>
                        <p>${item.qty}</p>
                    </div>
                    <button id="decrement" data-id=${item.id}>
                        -1
                    </button>
                </div>
            `

            carousel.innerHTML += html
        }
    }
}

init()

let decrementBtn = document.querySelectorAll('#decrement')
decrementBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        let id = e.target.dataset.id
        for(let item of data) {
            
            try {
                if(item!==null && item.qty >= 1) {
                    if(item.id === id) {
                        item.qty-1
                        localStorage.setItem("panier", JSON.stringify(data))
                    }
                } 
            } catch (error) {

            }
        }
    })
})