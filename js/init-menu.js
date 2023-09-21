import { data_menu } from "./mock.js"

function init() {
    const carousel = document.getElementById('carousel')
    if (carousel) {
        for (let item of data_menu) {
            // console.log(item)
            if (item) {
                let html = `
            <div class="carousel-item" class="colorBlue">
                <img
                    src="${item.img}"
                    alt="${item.title} image"
                />
                <h3>${item.title}</h3>
                <p>${item.description}</p>
                <button class="cm-btn-valid" id="cart-btn" data-id="${item.id}" data-price="${item.price}" data-title="${item.title}">
                    add
                </button>
            </div>
        `;
                carousel.innerHTML += html
            }
        }
    }

}

init()