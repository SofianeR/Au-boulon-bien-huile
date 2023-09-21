document.addEventListener("DOMContentLoaded", () => {
  const inputList = document.querySelectorAll(".formDetailsText");
  const sendButton = document.querySelector(".submitButton");
  const errorMessageContainer = document.querySelector(
    "#errorMessageContainer"
  );
  const errorMessage = document.querySelector(".errorMessage");

  const formToSend = {};

  inputList.forEach((input) => {
    input.addEventListener("input", (e) => {
      formToSend[input.id] = e.target.value;
    });
  });

  sendButton.addEventListener("click", (e) => {
    e.preventDefault();
    errorMessage.innerHTML = "";

    if (formToSend.email && formToSend.message && formToSend.name) {
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
          console.log(json);
          if (json.statut === "OK") {
            alert("Votre formulaire à bien été enregistré");
            window.location.href = "../index.html";
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
      errorMessage.innerText = "Un des champs est vide";
      errorMessage.style.color = "red";
      errorMessage.style.textAlign = "center";
      errorMessage.style.fontWeight = "bold";
    }
  });
});
