"use strict";

const BASE_URL = "https://api.chucknorris.io/jokes/random";

async function getFacts() {
  const response = await fetch("https://api.chucknorris.io/jokes/random");
  const facts = await response.json();
  console.log(facts["value"]);
}
const displayFacts = function (message) {
  document.querySelector(".genText").textContent = message;
};

let generateButton = document.querySelector(".generate");

generateButton.addEventListener("click", function () {
  let fetchRes = fetch("https://api.chucknorris.io/jokes/random");
  fetchRes
    .then((res) => res.json())
    .then((fact) => {
      displayFacts(fact["value"]);
    });
});
