import {data_menu} from "./mock.js"

function init() {
    const carousel = document.getElementById('carousel')
    for(var i = 0; data_menu.length; i++) {
        console.log(data_menu[i])

        let html = `
            <div class="carousel-item" class="colorBlue">
                <img
                    src="${data_menu[i].img}"
                    alt="${data_menu[i].title} image"
                />
                <h3>${data_menu[i].title}</h3>
                <p>${data_menu[i].description}</p>
                <button id="cart-btn" data-id="${data_menu[i].id}" data-price="${data_menu[i].price}" data-title="${data_menu[i].title}">
                    add
                </button>
            </div>
        `;

        carousel.innerHTML += html
    }
}init()