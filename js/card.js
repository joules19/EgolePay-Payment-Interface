///This document controls card payment actions

//RUN PAYMENT OPERATION UPON CLICKING CARD PAYM BUTTON
const payWithCard = async () => {
  try {
    //Access to html elements with id
    const payBtn = document.getElementById("payWithCard");
    const cvvInput = document.getElementById("expiry");

    //retreiving values from inputs
    const cardHolder = document.getElementById("cardHolder").value;
    const cardNumber = document.getElementById("cardNumber").value;
    const expiry = document.getElementById("expiry").value;
    const cvv = document.getElementById("cvv").value;

    //formating values to remove extra space from string
    const formatCardNumber = cardNumber.replace(/\s+/g, "");
    const formatExpiry = expiry.replace(/\s+/g, "");

    //Passing arguments into method to validate input fields
    const returnedValidationVal = consolidatedValidation(
      cardHolder,
      cardNumber,
      expiry,
      cvvInput
    );

    //Return validation status to display error
    if (returnedValidationVal) {
      return alert(returnedValidationVal);
    }

    //Activates Spinner on button
    configureBtn("payWithCard");

    //Setting request headers
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    //Forming payload for payment endpoint
    var raw = JSON.stringify({
      paymentType: "card",
      apiKey: "PKwessdwwee43a",
      publicKey: "sdwwee43asasdad",
      secretKey: "UEt3ZXNzZHd3ZWU0M2FzZHd3ZWU0M2FzYXNkYWQ=",
      merchantID: "1",
      merchTrancRef: "7699jy54",
      pan: formatCardNumber,
      expiry: formatExpiry,
      amount: "300",
      cvv: cvv,
      cardholder: cardHolder,
      mobile: "08069493993",
      pin: "0000",
      currency: "NGN",
      description: "payment for goods",
      mobileTransfer: "null",
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    await fetch(
      "http://api.paydev.egolepay.com/api/PaymentEngine/makepayment",
      requestOptions
    )
      .then((response) => response.json())

      .then((data) => {
        //Proceeding if server response == 00
        if (data.statusCode == "00") {
          payBtn.style.display = "none";
          $("#proceedWithCard").fadeIn(500);
          proceedWithCard(data.subDefaultCardDetailsUrl);
        }

        //Error if server response == 01
        if (data.statusCode == "01") {
          alert(data.subDefaultCardDetailsUrl);
        }
      })
      .catch((error) => alert("error", error));
  } catch (error) {
    alert(error.message);
  }
};

//PROCEED BUTTTON TO REDIRECT TO FINAL CHECKOUT PAGE
const proceedWithCard = (urlString) => {
  const input = document.getElementById("proceedWithCard");
  //var proceedBtn = document.getElementById("proceedWithCard");

  input.addEventListener("click", function () {
    //Activates Spinner on button
    configureBtn("proceedWithCard");
    input.disabled = true;
    input.style.background = "#ff800075";
    location.href = urlString;
  });
};
