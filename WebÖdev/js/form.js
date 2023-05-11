//const adInput = document.getElementById("fname");
//adInput.addEventListener("input", function checkForm() {
// if (adInput.value === "") {
//const errorDiv = document.getElementById("error");
//  errorDiv.innerHTML = "Lütfen adınızı giriniz.";
//  }
//});

const form = document.getElementById("form1");
const errorMessage = document.getElementById("error-message");
const button = document.getElementById("submit-button");

button.addEventListener("click", function (event) {
  event.preventDefault();
  const adInput = document.getElementById("fname");
  const soyadInput = document.getElementById("lname");
  const emailInput = document.querySelector(".mail");
  const passwordInput = document.getElementById("password");
  const erkekRadio = document.getElementById("ferkek");
  const kadinRadio = document.getElementById("fkadin");
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  const dogum = document.getElementById("birthday");
  const tel = document.getElementById("phone");
  const mailRegex =
    /^[^0-9][a-zA-z0-9_]+([.][a-zA-z0-9_]+)*[@][a-zA-z0-9_]+([.][a-zA-z0-9_]+)*[.][a-zA-Z]{2,4}$/i;
  const phoneRegex = /^0(50[5-7]|[1-9]\d{2})\d{7}$/;
  let errorMessageText = "";
  const message = document.getElementById('message');
  let isChecked = false;
  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      isChecked = true;
      break;
    }
    dogum;
  }
  if (dogum.value === "") {
    errorMessageText += "Doğum tarihini girin.<br>";
    errorMessage.style.border = "solid rgb(231, 2, 2)";
    errorMessage.style.color = "red";
    errorMessage.style.borderRadius = "1rem";
    
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
  if (tel.value === "") {
    errorMessageText += "Lütfen telefon numaranızı girin.<br>";
    errorMessage.style.border = "solid rgb(231, 2, 2)";
    errorMessage.style.color = "red";
    errorMessage.style.borderRadius = "1rem";
  } else if (tel.value.length !== 11) {
    errorMessageText += "Lütfen geçerli bir telefon numarası girin.<br>";
    errorMessage.style.border = "solid rgb(231, 2, 2)";
    errorMessage.style.color = "red";
    errorMessage.style.borderRadius = "1rem";
  } else if (!tel.value.match(phoneRegex)) {
    errorMessageText += "Lütfen geçerli bir telefon numarası girin.<br>";
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
    errorMessageText += "En az bir dil seçmelisiniz.<br>";
    errorMessage.style.border = "solid rgb(231, 2, 2)";
    errorMessage.style.borderRadius = "1rem";
    errorMessage.style.color = "red";
    
  }
  if (message.value === '') {
    errorMessageText += "Mesajınızı yazın.<br>";
    errorMessage.style.border = "solid rgb(231, 2, 2)";
    errorMessage.style.borderRadius = "1rem";
    errorMessage.style.color = "red";
    
  }
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
