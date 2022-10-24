//This file controls styling for the payment gateway card and form elements.

//Access to HTML elements by Id
var cardDiv = document.getElementById("card");
var cardBtn = document.getElementById("btn1");
var mobileDiv = document.getElementById("mobile");
var mobileBtn = document.getElementById("btn2");
var transferDiv = document.getElementById("transfer");
var transferBtn = document.getElementById("btn3");

//Setting default styling for controls button on page load
window.onload = function () {
  mobileDiv.style.display = "none";
  transferDiv.style.display = "none";
  cardBtn.style.backgroundColor = "#0D3C61";
  cardBtn.style.color = "#fff";
};

//controls for switching between card and mobile
$(document).ready(function () {
  $("#btn1").click(function () {
    if (cardDiv.style.display === "none") {
      $("#transfer").fadeOut();
      $("#mobile").fadeOut();
      $("#card").fadeIn(1000);
      cardBtnProps();
    }
  });

  $("#btn2").click(function () {
    if (mobileDiv.style.display === "none") {
      $("#card").fadeOut();
      $("#transfer").fadeOut();
      $("#mobile").fadeIn(1000);
      mobileBtnProps();
    }
  });

  $("#btn3").click(function () {
    if (transferDiv.style.display === "none") {
      $("#mobile").fadeOut();
      $("#card").fadeOut();
      $("#transfer").fadeIn(1000);
      transferBtnProps();
    }
  });
});

// styling for control button for switching between card and mobile
function cardBtnProps() {
  cardBtn.style.backgroundColor = "#0D3C61";
  cardBtn.style.color = "#fff";
  mobileBtn.style.border = "1px solid #0D3C61";
  mobileBtn.style.backgroundColor = "#fff";
  mobileBtn.style.color = "#0D3C61";
  transferBtn.style.border = "1px solid #0D3C61";
  transferBtn.style.backgroundColor = "#fff";
  transferBtn.style.color = "#0D3C61";
}

function mobileBtnProps() {
  mobileBtn.style.backgroundColor = "#0D3C61";
  mobileBtn.style.color = "#fff";
  cardBtn.style.backgroundColor = "#fff";
  cardBtn.style.color = "#0D3C61";
  cardBtn.style.border = "1px solid #0D3C61";
  transferBtn.style.border = "1px solid #0D3C61";
  transferBtn.style.backgroundColor = "#fff";
  transferBtn.style.color = "#0D3C61";
}

function transferBtnProps() {
  transferBtn.style.backgroundColor = "#0D3C61";
  transferBtn.style.color = "#fff";
  cardBtn.style.backgroundColor = "#fff";
  cardBtn.style.color = "#0D3C61";
  cardBtn.style.border = "1px solid #0D3C61";
  mobileBtn.style.border = "1px solid #0D3C61";
  mobileBtn.style.backgroundColor = "#fff";
  mobileBtn.style.color = "#0D3C61";
}
