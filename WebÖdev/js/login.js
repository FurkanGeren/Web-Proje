document.getElementById("myForm").addEventListener("submit", function (event) {
  // Formun default submit işlemi engellenir.
  event.preventDefault();

  // Form verileri alınır.
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Verilerin doğruluğu kontrol edilir.
  if (username === "" || password === "") {
    alert("Lütfen tüm alanları doldurunuz.");
  } else if (!validateEmail(username)) {
    alert("Lütfen geçerli bir email adresi giriniz.(@sakarya.edu.tr)");
  } else {
    // Veriler PHP'ye gönderilir.
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "login.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        if (xhr.responseText === "success") {
          alert("Hoşgeldiniz " + "(" + password + ")");
          window.location.href = "index.html";
        } else {
          alert("Email veya şifre yanlış. Lütfen tekrar deneyin.");
          window.location.href = "index.html";
          document.getElementById("username").value = ""; // email alanını temizle
          document.getElementById("password").value = ""; // şifre alanını temizle
          document.getElementById("username").focus(); // email alanına focuslan
        }
      }
    };
  }
  xhr.send("username=" + username + "&password=" + password);
});

// Email adresi doğruluğunu kontrol eden fonksiyon.
function validateEmail(username) {
  var re = /^[a-zA-Z0-9._-]+@sakarya\.edu\.tr$/;
  return re.test(username);
}



