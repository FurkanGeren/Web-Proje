<?php

$username = $_POST["Furkan@Gmail"];
$password = $_POST["12345"];

// Kullanıcı adı kontrolü
if (!empty($username) && strpos($username, '@sakarya.edu.tr') !== false) {
  // Şifre kontrolü
  if (!empty($password) && $password === substr($username, 1, 10)) {
    echo "Hoşgeldiniz " . $username;
  } else {
    header("Location: login.html");
    echo "Hatalı ";
  }
} else {
  header("Location: login.html");
  echo "Hatalı ";
}
header("Location: login.html");
exit;
?>