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
        
        main img {
            opacity: 70%;
            width: 100%;
        }
        
        .sectionOne img {
            margin: 10px;
            width: 25%;
            min-width: 200px;
            border: solid 2px #545c5f;
        
        }
        
        header {
            padding: 10px;
            box-shadow: 6px 5px 10px 5px #0000003d;
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
            color: white;
            margin: 5px;
        }
        
        nav ul a:hover {
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
            text-align: justify;
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
            margin-top: 5%;
            margin-bottom: 5%;
            display: flex;
            flex-wrap: wrap;
            flex-direction: row;
            gap: 25px;
            padding: 1rem;
        }
        
        .card {
            display: flex;
            background-color: #fcecc9;
            justify-content: center;
            align-items: center;
            padding: 2%;
            border-radius: 20px;
            max-height: 25%;
            box-shadow: 0px 0px 5px 0px #545c5f;
            text-align: justify;
        }
        
        .cart-text {
            display: flex;
            flex-direction: column;
        }   
        
        .card-image {
            margin: 2%;
            border-radius: 100%;
            border: solid 2px #545c5f;
            width: 25%;
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
            display: flex;
            margin: 0 15px;
            width: 33%;
            flex-direction: column;
            justify-content: space-between;
            background-color: #fcecc9;
        }
        
        .carousel-item img {
            width: 33%;
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
            width: 100%;
            align-items: center;
            margin: 0px;
            margin-bottom: 10%;
            padding-top: 5%;
            padding-bottom: 5%;
            box-shadow: 0px 0px 5px 0px #545c5f;
        }
        
        .carousel-item p {
            margin: 2%;
        }
        
        .card {
            flex-direction: column;
        }
        
        .card-image {
            width: 40%;
            min-width: 150px;
        }
        
        .sectionOneContent div {
            display: flex;
            gap: 2rem;
            align-items: center;
            margin: 0 2rem;
            flex-direction: column-reverse;
        }
        } 
        </style>
        <header class="colorGrey">
        <div>
          <a href="index.html"><img src="../assets/img/Logo/logo_header.webp"
              alt="Logo société au boulon bien huilé" /></a>
        </div>
        <nav>
          <i class="fa-solid fa-burger" id="burger"></i>
          <ul class="menu_hidden_phone">
            <li>
              <a href="../pages/menu.html">Menu</a>
            </li>
    
            <li>
              <a href="../pages/contact.html">Contact</a>
            </li>
    
            <li>
              <a href="../pages/nos-equipe.html">Nous</a>
            </li>
    
            <li>
              <a href="../pages/shop.html">
                <i class="fa-solid fa-cart-shopping"></i>
              </a>
            </li>
          </ul>
          <ul class="menu_hidden">
            <li>
              <a href="../pages/menu.html">Menu</a>
            </li>
    
            <li>
              <a href="../pages/contact.html">Contact</a>
            </li>
    
            <li>
              <a href="../pages/nos-equipe.html">Nous</a>
            </li>

            <li>
                <a href="../pages/login.html">Login</a>
            </li>
    
            <li>
              <a href="../pages/shop.html">
                <i class="fa-solid fa-cart-shopping"></i>
              </a>
            </li>
          </ul>
        </nav>
      </header>

        <slot></slot>
        
        <footer class="colorGrey">
        <img src="../assets/img/logo/logo_footer_medium.webp" alt="" />
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
