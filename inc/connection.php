<?php

$con = mysqli_connect("localhost","root","","hemisapartment");

if (mysqli_connect_errno()) {
    die("Database connection fail" . mysqli_connect_error());
}
else {
    // echo"Connection Successful";
}

?>