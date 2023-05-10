//const adInput = document.getElementById("fname");
//adInput.addEventListener("input", function checkForm() {
// if (adInput.value === "") {
//const errorDiv = document.getElementById("error");
//  errorDiv.innerHTML = "Lütfen adınızı giriniz.";
//  }
//});

const form = document.getElementById("form1");
const errorMessage = document.getElementById("error-message");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const adInput = document.getElementById("fname");
  const soyadInput = document.getElementById("lname");
  const emailInput = document.querySelector(".mail");
  const passwordInput = document.getElementById("password");
  const erkekRadio = document.getElementById("ferkek");
  const kadinRadio = document.getElementById("fkadin");
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  const mailRegex =
    /^[^0-9][a-zA-z0-9_]+([.][a-zA-z0-9_]+)*[@][a-zA-z0-9_]+([.][a-zA-z0-9_]+)*[.][a-zA-Z]{2,4}$/i;
  let errorMessageText = "";
  let isChecked = false;
  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      isChecked = true;
      break;
    }
  }
  if (adInput.value === "") {
    errorMessageText += "Lütfen adınızı girin.<br>";
    errorMessage.style.border = "solid rgb(231, 2, 2)";
    errorMessage.style.color = "red";
    errorMessage.style.borderRadius = "1rem";
  }
  if (soyadInput.value === "") {
    errorMessageText += "Lütfen soyadınızı girin.<br>";
    errorMessage.style.border = "solid rgb(231, 2, 2)";
    errorMessage.style.color = "red";
    errorMessage.style.borderRadius = "1rem";
  }
  if (emailInput.value === "") {
    errorMessageText += "Lütfen e-mail adresinizi girin.<br>";
    errorMessage.style.border = "solid rgb(231, 2, 2)";
    errorMessage.style.color = "red";
    errorMessage.style.borderRadius = "1rem";
  } else if (!emailInput.value.match(mailRegex)) {
    errorMessageText += "Lütfen geçerli bir e-mail adresi girin.<br>";
    errorMessage.style.border = "solid rgb(231, 2, 2)";
    errorMessage.style.color = "red";
    errorMessage.style.borderRadius = "1rem";
  }
  if (passwordInput.value === "") {
    errorMessageText += "Lütfen şifrenizi girin.<br>";
    errorMessage.style.border = "solid rgb(231, 2, 2)";
    errorMessage.style.borderRadius = "1rem";
    errorMessage.style.color = "red";
  }
  if (!erkekRadio.checked && !kadinRadio.checked) {
    errorMessageText += "Lütfen cinsiyetinizi seçin.<br>";
    errorMessage.style.border = "solid rgb(231, 2, 2)";
    errorMessage.style.borderRadius = "1rem";
    errorMessage.style.color = "red";
  }
  if (!isChecked) {
    errorMessageText += "En az bir dil seçmelisiniz.";
    errorMessage.style.border = "solid rgb(231, 2, 2)";
    errorMessage.style.borderRadius = "1rem";
    errorMessage.style.color = "red";}

  if (errorMessageText !== "") {
    errorMessage.style.color = "red";
    errorMessage.innerHTML = errorMessageText;
    
  } else {
    errorMessageText += "Formlarda sıkıntı yok(Javascript).<br>";
    errorMessage.innerHTML = errorMessageText;
    errorMessage.style.border = "solid rgb(0, 128, 0)";
    errorMessage.style.borderRadius = "1rem";
    errorMessage.style.color = "green";
  }
});
