const socket = io();

// Elements

const $nameForm = $(".name-form");
const $joinRoomBtn = $(".join-btn");
const $createRoomBtn = $(".create-btn");
const $cancelBtn = $(".cancel");
const $joinRoomBuffer = $(".join-room-buffer");
const $createRoomBuffer = $(".create-room-buffer");

// VARIABLES

let username = "Player";

// Functions

$nameForm.on("submit", (e) => {
  e.preventDefault();

  username = $("#username").value;
  $(".name-section").addClass("left");
  $(".rooms").removeClass("right");
});

$joinRoomBtn.on("click", (e) => {
  e.preventDefault();

  $joinRoomBtn.hide();
  $createRoomBuffer.addClass("hide");
  $createRoomBtn.hide();

  $joinRoomBuffer.removeClass("hide");
});

$createRoomBtn.on("click", (e) => {
  e.preventDefault();

  $joinRoomBtn.hide();
  $joinRoomBuffer.addClass("hide");
  $createRoomBtn.hide();

  $createRoomBuffer.removeClass("hide");
});

$cancelBtn.on("click", function (e) {
  e.preventDefault();
  $(this).parent().parent().addClass("hide");

  $joinRoomBtn.show();
  $createRoomBtn.show();
});
