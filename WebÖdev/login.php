<?php
$username = $_POST["username"];
$password = $_POST["password"];

// Kullanıcı adı kontrolü
if($username === "33@sakarya.edu.tr" && $password === "12345"){
	echo "success";
} 
else {
  //header("Location: login.html");
  echo "Hatali";
}
//header("Location: login.html");
exit;
?>