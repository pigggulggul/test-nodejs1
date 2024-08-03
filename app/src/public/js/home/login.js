"use strict";

const id = document.querySelector("#id");
const password = document.querySelector("#password");
const button = document.querySelector("button");

console.log(id);

button.addEventListener("click", login);

function login() {
  const req = {
    id: id.value,
    psword: password.value,
  };
  console.log(req);
  console.log(JSON.stringify(req));
  fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => console.log(res));
}
