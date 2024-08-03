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
}
