document.addEventListener("DOMContentLoaded", async () => {
  const tBody = document.querySelector("#tableToAppend");

  const url_server = "http://localhost:4000/contact/fetch/all";
  let contactList;

  await fetch(url_server)
    .then((response) => response.json())
    .then((data) => {
      contactList = data.message;
      contactList.map((contact) => {
        let newRow = document.createElement("tr");
        let nameCol = document.createElement("td");
        let messageCol = document.createElement("td");

        nameCol.innerHTML = contact.name;
        messageCol.innerHTML = contact.message;

        newRow.appendChild(nameCol);
        newRow.appendChild(messageCol);
        tBody.appendChild(newRow);
      });
    });
});
