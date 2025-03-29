<?php
include("../inc/connection.php");

$roomNo = $name = $rent = $unit = $month = [];


for ($i = 1; $i <= 12; $i++) {
    $roomNo[$i] = $i;
    $name[$i] = $_POST["name$i"] ?? "";
    $rent[$i] = $_POST["rent$i"] ?? 17500;
    $unit[$i] = $_POST["units$i"] ?? 0;
    $month[$i] = $_POST["month$i"] ?? 1;

   $res = mysqli_query($con,
     "INSERT INTO personaldetails VALUES ('$name[$i]', '$rent[$i]', '$rent[$i]', ' $unit[$i]', '$month[$i]' ) ");

     if ($res) {
        echo "Success $i <br>";
     } else {
        echo "Unsuccess $i <br>";
     };
}



?>  