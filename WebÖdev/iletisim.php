<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form</title>
</head>

<body>
   

    <?php
     
    if (isset($_POST['gonder'])) {
        $isim = $_POST['fname'];
        $soyisim = $_POST['lname'];
        $email = $_POST['fmail'];
        $sifre = $_POST['lsifre'];
        $dogum_tarihi = $_POST['birthday'];
        $telefon = $_POST['phone'];
        $cinsiyet = $_POST['cinsiyet'];

        $diller = "";
        if (isset($_POST["dil1"])) {
            $diller .= "Türkçe, ";
        }
        if (isset($_POST["dil2"])) {
            $diller .= "İngilizce, ";
        }
        if (isset($_POST["dil3"])) {
            $diller .= "Almanca, ";
        }
        if (isset($_POST["dil4"])) {
            $diller .= "İspanyolca, ";
        }
        if (isset($_POST["dil5"])) {
            $diller .= "Fransızca, ";
        }

        $mesaj = $_POST["message"];

        echo "<p>İsim: " . $isim . "</p>";
        echo "<p>Soyisim: " . $soyisim . "</p>";
        echo "<p>E-Mail: " . $email . "</p>";
        echo "<p>Şifre: " . $sifre . "</p>";
        echo "<p>Doğum Tarihi: " . $dogum_tarihi . "</p>";
        echo "<p>Telefon Numarası: " . $telefon . "</p>";
        echo "<p>Cinsiyet: " . $cinsiyet . "</p>";
        echo "<p>Bildiğiniz Diller: " . rtrim($diller, ", ") . "</p>";
        echo "<p>Mesaj: " . $mesaj . "</p>";
    }
    ?>


</body>

</html>