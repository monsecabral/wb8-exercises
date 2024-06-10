"use strict";

window.onload = 


function doSomething() {
  // fetches all users and places their names and emails
  // in a table
  let table = document.getElementById("userTable");
  fetch("http://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < data.length; i++) {
        let row = table.insertRow(-1);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        cell1.innerHTML = data[i].name;
        cell2.innerHTML = data[i].email;
      }
    });


    fetch(endpointUrl, {
        method: "POST",
        body: bodyData,
        headers: {
            "Content-type":
        "application/json; charset=UTF-8"}
        })
        .then(response => response.json())
        .then(json => {
        // If the POST finishes successfully, ...
        });
        .catch(err => {
        // If the POST returns an error, ...
        });
}
