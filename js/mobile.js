//PROCEED BUTTTON TO REDIRECT TO FINAL CHECKOUT PAGE
function proceedWithCard() {
  const input = document.getElementById("proceedWithCard");
  input.addEventListener("click", function(){
    location.href="http://google.com";
  });
}

export { proceedWithCard };
