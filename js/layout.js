window.customElements.define(
  "layout-element",
  class extends HTMLElement {
    constructor() {
      super();

      // Créez un Shadow DOM pour encapsuler le contenu du composant.
      this.attachShadow({ mode: "open" });

      // Créez les éléments HTML pour le layout en utilisant des backticks.
      this.shadowRoot.innerHTML = `
        <style>
        @font-face {
            font-family: conthrax-sb;
            src: url("./assets/fonts/conthrax-sb.otf") format("opentype");
        }
        
        body {
            padding: 0px;
            margin: 0px;
            font-family: sans-serif;
        }
        
        main {
        
            min-height: 90vh;
        }
        
        img {
            padding: 10px;
            width: 25%;
            min-width: 200px;
            padding-left: 0px;
        
        }
        
        header {
            padding: 10px;
        }
        
        header, nav ul {
            display: flex;
            justify-content: space-around;
            align-items: center;
        
        }
        
        nav {
            width: 50%;
            font-size: 18px;
            display:flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }
        
        ul {
            list-style: none;
        
        }
        
        nav ul a {
            text-decoration: none;
            padding-inline: 10px;
            padding: 0.5rem 1rem;
            color: white;
        }
        
        nav ul a:hover {
            background-color: white;
            border-radius: 20px;
            color: black;
        }
        
        h1 {
            display: flex;
            justify-content: center;
            padding: 10px;
        }
        
        .homeSection {
            color: white;
            margin: 0 auto;
        }
        
        
        .sectionOne {
            padding: 0px;
            padding-left: 0px;
            /* color: white; */
        }
        
        .sectionOneContent {
            display: flex;
            flex-direction: column;
            width: 100%;
        }
        
        .sectionOneContent div {
            display: flex;
            gap: 2rem;
            align-items: center;
            margin:  0 2rem;
        }
        
        .sectionOneContent img {
            border-radius: 100%;
        }
        
        .fomulaire-contact {
            border-radius: 5%;
            box-shadow: 5px 5px 10px 1px #0000003d;
            margin: 20%;
        }
        
        .formContact {
            padding: 10%;
            display: flex;
            flex-direction: column;
            border-radius: 5px;
        }
        
        .formContact input, .formContact textarea {
            padding: 5%;
            border-radius: 5px;
        }
        
        .inputLabel {
            display: flex;
            flex-direction: column;
            text-align: center;
            margin: 5% 0;
        }
        
        .formContact button {
            padding: 5%;
            border: none;
            border-radius: 5px;
            background-color: #fcecc9;
            color: black;
            cursor: pointer;
        }
        
        .formContact button:hover {
            background-color: green;
            color: white;
        }
        
        .colorGrey {
            background-color: #545c5f;
        }
        
        .colorBlue {
            background-color: #4f6290;
        }
        
        footer {
            display: flex;
            padding: 10px;
            justify-content: space-between;
            align-items: center;
        }
        
        .footerContact {
            display: flex;
        }
        
        .footerContact a {
            padding: 5px;
            color: black;
            text-decoration: none;
        }
        
        .fa-brands, .fab {
            font-weight: 400;
            color: black;
            font-size: 24px;
        }
        
        .card-container {
            display: flex;
            flex-wrap: wrap;
            flex-direction: row;
            gap: 1rem;
            padding: 1rem;
        }
        
        .card {
        
            display: flex;
            background-color: #fcecc9;
        
            justify-content: center;
            align-items: center;
            padding: 1rem;
        
            border-radius: 20px;
        }
        
        .cart-text {
            display: flex;
            flex-direction: column;
        }
        
        .card-image {
            border-radius: 100%;
        }
        
        footer a {
            text-decoration: none;
            color: white;
        }
        
        
        /* PAGE MENU */
        
        .carousel {
            display: flex;
            flex-wrap: nowrap;
            overflow-x: scroll;
            max-width: 100vw;
        }
        
        .carousel-item {
            margin: 0 15px;
            width:33%;
        }
        
        .footerReso {
            width: 20%;
        }
        
        .footerReso a {
            margin: 0 5%;
        }
        
        .footerReso i {
            color: white;
        }
        
        .footerReso i:hover {
            color: black;
        }
        
        .footerReso a:hover {
            color: black;
        }
        .fa-burger {
        display:none;
        }
        .menu_hidden_phone{
            display:none;
        }
        @media (max-width: 768px)  {
            .fa-burger {
        display:block;
        color:white;
        }  .menu_hidden{
            display:none;
        }
        .menu_hidden_phone{
            display:block;
        }
        .carousel {
            display: flex;
            flex-direction: column;
            flex-wrap: nowrap;
           
            max-width: 100vw;
        }
        
        .carousel-item {
            margin: 0 15px;
            width:33%;
        }
        } 
        </style>
        <header class="colorGrey">
            <div>
                <img
                src="../assets/img/logo-no-background.png"
                alt="Logo société au boulon bien huilé"
                />
            </div>

          
            <nav >
                <i class="fa-solid fa-burger" id="burger"></i>
                <ul class="menu_hidden_phone">
                <li>
                    <a href="./index.html">Home</a>
                </li>

                <li>
                    <a href="./menu.html">Menu</a>
                </li>

                <li>
                    <a href="./contact.html">Contact</a>
                </li>

                <li>
                    <a href="./nos-equipe.html">Nous</a>
                </li>

                <li>
                    <a href="./shop.html">
                    <i class="fa-solid fa-cart-shopping"></i>
                    </a>
                </li>
                </ul>
                <ul class="menu_hidden">
                <li>
                    <a href="./index.html">Home</a>
                </li>

                <li>
                    <a href="./menu.html">Menu</a>
                </li>

                <li>
                    <a href="./contact.html">Contact</a>
                </li>

                <li>
                    <a href="./nos-equipe.html">Nous</a>
                </li>

                <li>
                    <a href="./shop.html">
                    <i class="fa-solid fa-cart-shopping"></i>
                    </a>
                </li>
                </ul>
            </nav>
        </header>

        <slot></slot>
        
        <footer class="colorGrey">
            <img src="../assets/img/logo-no-background.png" alt="" />
            <a href="tel:+33764534231">Notre numéro de téléphone</a>
            <a href="mailto:monMail@gmail.fr">Notre Email</a>

                <div class="footerReso">
                    <a href="http://www.facebook.fr">
                    <i class="fa-brands fa-facebook"></i>
                    </a>
                    <a href="http://www.instagram.fr">
                    <i class="fa-brands fa-instagram"></i>
                    </a>
                </div>
            </footer>
      `;
    }
  }
);

/**
   * html
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Document</title>
          <script src="layout.js"></script>
      </head>
      <body>
          <layout-element>
              hello
          </layout-element>
      </body>
      </html>
   */
