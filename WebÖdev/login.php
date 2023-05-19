<?php
$username = $_POST["username"];
$password = $_POST["password"];

// Kullanıcı adı kontrolü
if($username === "furkan.geren@sakarya.edu.tr" && $password === "G221210376"){
  echo "success";
  exit;

} 
else {
  //header("Location: login.html");
  echo "Hatali";
  exit;
}
//header("Location: login.html");

?>