document.addEventListener("DOMContentLoaded", () => {
  const inputs = document.querySelectorAll("input");
  const buttonSend = document.querySelector("#signupButton");

  const signupDetailsToSend = {};

  inputs.forEach((input) => {
    input.addEventListener("input", (e) => {
      signupDetailsToSend[input.id] = e.target.value;
    });
  });

  buttonSend.addEventListener("click", (e) => {
    e.preventDefault();

    if (
      signupDetailsToSend.password &&
      signupDetailsToSend.checkPassword &&
      signupDetailsToSend.password === signupDetailsToSend.checkPassword
    ) {
      const url_server = "http://localhost:4000/signup/submit";

      const dataToSendStringified = JSON.stringify(signupDetailsToSend);
      console.log(dataToSendStringified);

      fetch(url_server, {
        method: "POST",
        body: dataToSendStringified,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          if (json.statut === "OK") {
            window.location.href = "./backoffice.html";
          } else {
            errorMessage.innerText = json.message;
            errorMessage.style.color = "red";
            errorMessage.style.textAlign = "center";
            errorMessage.style.fontWeight = "bold";
          }
        })
        .catch((error) => {
          console.log(error);

          console.log(error.message);
        });
    } else {
      alert("erreur verification password");
    }
  });
});
