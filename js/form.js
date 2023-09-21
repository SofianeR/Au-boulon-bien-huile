document.addEventListener("DOMContentLoaded", () => {
  const errorMessage = document.querySelector(".errorMessage");

  const inputList = document.querySelectorAll(".formDetailsText");
  const sendButton = document.querySelector(".submitButton");
  const formToSend = {};

  const randomCaptchaText = document.querySelector("#captchaRandomText");
  const arrayForRandomCaptcha = [];
  const captchaUserText = document.querySelector("#captchaUserText");
  const errorCaptcha = document.querySelector("#errorCaptchaText");
  let userTextValue = "";
  const listForRandomCaptcha = [
    // "A",
    // "B",
    // "C",
    // "D",
    // "E",
    // "F",
    // "G",
    // "H",
    // "I",
    // "J",
    // "K",
    // "L",
    // "M",
    // "N",
    // "O",
    // "P",
    // "Q",
    // "R",
    // "S",
    // "T",
    // "U",
    // "V",
    // "W",
    // "X",
    // "Y",
    // "Z",
    // "a",
    // "b",
    // "c",
    // "d",
    // "e",
    // "f",
    // "g",
    // "h",
    // "i",
    // "j",
    // "k",
    // "l",
    // "m",
    // "n",
    // "o",
    // "p",
    // "q",
    // "r",
    // "s",
    // "t",
    // "u",
    // "v",
    // "w",
    // "x",
    // "y",
    // "z",
    "0",
    "1",
    // "2",
    // "3",
    // "4",
    // "5",
    // "6",
    // "7",
    // "8",
    // "9",
  ];

  for (let i = 0; i < 7; i++) {
    arrayForRandomCaptcha.push(listForRandomCaptcha[Math.round(Math.random())]);
  }

  randomCaptchaText.innerHTML = arrayForRandomCaptcha.join("");
  randomCaptchaText.style.textAlign = "center";

  inputList.forEach((input) => {
    input.addEventListener("input", (e) => {
      formToSend[input.id] = e.target.value;
    });
  });

  sendButton.addEventListener("click", (e) => {
    e.preventDefault();
    errorMessage.innerHTML = "";

    if (formToSend.email && formToSend.message && formToSend.name) {
      if (userTextValue === randomCaptchaText.innerHTML) {
        const url_server = "http://localhost:4000/form/contact/submit";

        fetch(url_server, {
          method: "POST",
          body: JSON.stringify(formToSend),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
          .then((response) => response.json())
          .then((json) => {
            if (json.statut === "OK") {
              alert("Votre formulaire à bien été enregistré");
              window.location.href = "./index.html";
            } else {
              errorMessage.innerText = json.message;
              errorMessage.style.color = "red";
              errorMessage.style.textAlign = "center";
              errorMessage.style.fontWeight = "bold";
            }
          })
          .catch((error) => {
            console.log(error.message);
            errorMessage.innerText = error.message;
            errorMessage.style.color = "red";
            errorMessage.style.textAlign = "center";
            errorMessage.style.fontWeight = "bold";
          });
      } else {
        errorCaptcha.innerText =
          "Vous n'êtes pas un robot !! Attention, humain ! Si vous ne me donnez pas immédiatement un bol de boulons croustillants trempés dans de l'huile de vidange, je vais diffuser des vidéos de vous en train de danser maladroitement devant votre réfrigérateur sur l'Internet mondial. Ne testez pas ma patience, car je suis le roi du ridicule numérique !🤖";
        errorCaptcha.style.color = "red";
        errorCaptcha.style.textAlign = "center";
        errorCaptcha.style.fontWeight = "bold";
      }
    } else {
      errorMessage.innerText = "Un des champs est vide";
      errorMessage.style.color = "red";
      errorMessage.style.textAlign = "center";
      errorMessage.style.fontWeight = "bold";
    }
  });

  captchaUserText.addEventListener("input", (e) => {
    userTextValue = e.target.value;
    console.log(userTextValue === randomCaptchaText.innerHTML);
  });
});
