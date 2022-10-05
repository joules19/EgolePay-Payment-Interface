// Adds styling and spinner to the payament button upon click.
function configureBtn(id) {
  var btnElement = document.getElementById(id);
  btnElement.innerText = "";

  btnElement.disabled = true;
  disableInputs(true);

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
      throw new Error("Cardholder field cannot be blank!");
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
function configureCardNetworkIcon(classes) {
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
const onCardNumberInputChange = function (evt) {
  let firstElement = evt.target.value;

  if (firstElement == "") {
    let classes = ["far", "fa-credit-card"];
    configureCardNetworkIcon(classes);
  }

  if (firstElement == 5) {
    let classes = ["fab", "fa-cc-mastercard"];
    configureCardNetworkIcon(classes);
  }

  if (firstElement == 4) {
    let classes = ["fab", "fa-cc-visa"];
    configureCardNetworkIcon(classes);
  }

  if (firstElement == 3) {
    let classes = ["fab", "fa-cc-amex"];
    configureCardNetworkIcon(classes);
  }
};

var input = document.getElementById("cardNumber");
input.addEventListener("input", onCardNumberInputChange, false);

const validateCardNumber = function (pan) {
  try {
    if (pan == "" || pan == null) {
      throw new Error("Card number field cannot be blank!");
    }
  } catch (error) {
    return error.message;
  }
};

// VALIDATING EXPIRY DATE FIELD
const validateCardExpiration = function (expiration) {
  try {
    if (expiration == "" || expiration == null) {
      throw new Error("Expiration Date field cannot be blank!");
    }
    const cardYear = expiration.charAt(5) + expiration.charAt(6);
    const d = new Date();
    const curYear = d.getFullYear();

    //  const slicedYear = curYear.charAt(2) + curYear.charAt(3)
    //  alert(slicedYear);
  } catch (error) {
    return error.message;
  }
};

// VALIDATING CVV2 FIELD
const validateCvv = function (cvv) {
  try {
    if (cvv == "" || cvv == null) {
      throw new Error("Cvv field cannot be blank!");
    }
  } catch (error) {
    return error.message;
  }
};

// CONSOLIDATED INPUT VALIDATION
const consolidatedValidation = function (cardHolder, cardNumber, expiry, cvv) {
  const cardHolderVal = validateCardHolderName(cardHolder);
  const cardNumberVal = validateCardNumber(cardNumber);
  const expirationVal = validateCardExpiration(expiry);
  const cvvVal = validateCvv(cvv);

  if (cardHolderVal) {
    return cardHolderVal;
  }
  if (cardNumberVal) {
    return cardNumberVal;
  }
  if (expirationVal) {
    return expirationVal;
  }
  if (cvvVal) {
    return cvvVal;
  }
};

//RUN PAYMENT OPERATION UPON CLICKING MOBILE PAYMENT BUTTON
function payWithMobile() {
  configureBtn("payWithMobile");
  const mobile = document.getElementById("mobile").value;
}

//FUNCTION TO DISABLE INPUTS AT DATA PROCESSING
const disableInputs = (a) => {
  if (a === true) {
    cardNumber.style.color = "#afafafe0";
    cardHolder.style.color = "#afafafe0";
    expiry.style.color = "#afafafe0";
    cvv.style.color = "#afafafe0";
    pin.style.color = "#afafafe0";

    document.getElementById("cardHolder").disabled = true;
    document.getElementById("cardNumber").disabled = true;
    document.getElementById("expiry").disabled = true;
    document.getElementById("cvv").disabled = true;
    document.getElementById("pin").disabled = true;
  } else {
    cardNumber.style.color = "#555555e1";
    document.getElementById("cardHolder").disabled = false;
    document.getElementById("cardNumber").disabled = false;
    document.getElementById("expiry").disabled = false;
    document.getElementById("cvv").disabled = false;
    document.getElementById("pin").disabled = false;
  }
};
