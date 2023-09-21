document.addEventListener("DOMContentLoaded", () => {
  const inputs = document.querySelectorAll("input");
  const buttonSend = document.querySelector("#loginButton");

  const loginDetails = {};
  inputs.forEach((input) => {
    input.addEventListener("input", (e) => {
      loginDetails[input.id] = e.target.value;
      //console.log(loginDetails);
    });
  });

  buttonSend.addEventListener("click", (e) => {
    e.preventDefault();

    const url_server = "http://localhost:4000/login/submit";

    fetch(url_server, {
      method: "POST",
      body: JSON.stringify(loginDetails),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.statut === "OK") {
          alert(`Bienvenue ${json.user.username}`);
          window.localStorage.setItem("connexion", json.user.token);
          window.location.href = "./backoffice.html";
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  });
});
