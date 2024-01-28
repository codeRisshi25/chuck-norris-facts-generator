"use strict";

// Base URL for the API
const BASE_URL = "https://api.chucknorris.io/jokes/random";
// Create object for the generate button
let generateButton = document.querySelector(".generate");
// Create object for the copy button
let copyButton = document.querySelector(".btn2");
// Create object for the clear button
let clearButton = document.querySelector(".btn3");

// Function to make changes to the DOM
const displayFacts = function (message) {
  document.querySelector(".genText").textContent = message;
};

// Add event listener for the generate button
generateButton.addEventListener("click", function () {
  let fetchRes = fetch("https://api.chucknorris.io/jokes/random");
  fetchRes
    .then((res) => res.json())
    .then((fact) => {
      displayFacts(fact["value"]);
    });
});

// Add event listener for the copy button
copyButton.addEventListener("click", function () {
  let text = document.querySelector(".genText").textContent;
  navigator.clipboard.writeText(text);
});

// Add event listener for the clear button
clearButton.addEventListener("click", function () {
  document.querySelector(".genText").textContent = "";
});
