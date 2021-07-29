const socket = io();

// Elements

const $nameForm = document.querySelector(".name-form");

// Functions

$nameForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = document.querySelector("#username").value;
  document.querySelector(".name-section").classList.add("left");
});
