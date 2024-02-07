<?php
$host = "localhost";
$user = "root";
$pass = "";
$db = "database";
$conn = mysqli_connect($host, $user, $pass, $db);
if(!$conn) echo "Unable to connect to database";
?>