//This document controls payment actions and styling upon clicking payment button

// Adds styling and spinner to the payament button upon click.
function configureBtn(id) {
  var btnElement = document.getElementById(id);
  btnElement.disabled = true;
  btnElement.style.backgroundColor = "#ff800075";

  const classesToAdd = ["fas", "fa-spinner", "fa-spin"];
  let i = document.createElement("i");
  btnElement.prepend(i);

  classesToAdd.forEach((ele) => {
    i.classList.add(...classesToAdd);
  });
}

// VALIDATION FOR CARDHOLDER NAME
const validateCardHolderName = function (name) {
  try {
    if (name == "" || name == null) {
      throw new Error("Cardholder field cannot be empty!");
    }
    var matches = name.match(/\d+/g);
    if (matches != null) {
      throw new Error("Please ensure the cardholder details are correct!");
    }
  } catch (error) {
    return error.message;
  }
};
// CONFIGURING CARD NETWORK ICONS UPON CARD NUMBER INPUT
function configureIcon(classes) {
  const element = document.getElementById("cardIcon");
  element.remove();
  var el = document.getElementById("cardN");
  let i = document.createElement("i");
  i.id = "cardIcon";
  el.prepend(i);
  classes.forEach((ele) => {
    i.classList.add(...classes);
  });
}

// STYLING BASED ON CARD NETWORK && VALIDATION FOR CARDNUMBER
const onChange = function (evt) {
  let firstElement = evt.target.value;

  if (firstElement == "") {
    let classes = ["far", "fa-credit-card"];
    configureIcon(classes);
  }

  if (firstElement == 5) {
    let classes = ["fab", "fa-cc-mastercard"];
    configureIcon(classes);
  }

  if (firstElement == 4) {
    let classes = ["fab", "fa-cc-visa"];
    configureIcon(classes);
  }

  if (firstElement == 3) {
    let classes = ["fab", "fa-cc-amex"];
    configureIcon(classes);
  }
};

var input = document.getElementById("cardNumber");
input.addEventListener("input", onChange, false);

const validateCardNumber = function (pan) {
  try {
    if (pan == "" || pan == null) {
      throw new Error("Card number field cannot be empty!");
    }
  } catch (error) {
    return error.message;
  }
};

//RUN PAYMENT OPERATION UPON CLICKING CARD PAYMENT BUTTON
function payWithCard() {
  const cardHolder = document.getElementById("cardHolder").value;
  const cardNumber = document.getElementById("cardNumber").value;
  const expiry = document.getElementById("expiry").value;
  const cvv = document.getElementById("cvv").value;

  const val = validateCardHolderName(cardHolder);
  const valX = validateCardNumber(cardNumber);

  if (val) {
    return alert(val);
  }
  if (valX) {
    return alert(valX);
  }

  configureBtn("payWithCard");
}

//RUN PAYMENT OPERATION UPON CLICKING MOBILE PAYMENT BUTTON
function payWithMobile() {
  configureBtn("payWithMobile");
  const mobile = document.getElementById("mobile").value;
}
