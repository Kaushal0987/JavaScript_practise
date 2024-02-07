<?php
 if(isset($_POST['submit'])){

  $username = $_POST['username'];
  $password = $_POST['password'];

  include("connection.php");

  $sql = "INSERT INTO users(username, password, phone, address, bio, photo) VALUES ('$username','$password')";

  $res = mysqli_query($conn, $sql);

  if($res){echo "Data Inserted into users";}
  else{echo "Unable to insert data into users";}

 }else{
  header("location: login.php");
 }
?>

<!DOCTYPE html>
<html lang="en">
<head>
 <meta charset="UTF-8">
 <meta name="viewport" content="width=device-width, initial-scale=1.0">
 <title>form</title>
</head>
<body>
 <h1>Form Fillup</h1>
 <div class="formbox">
  <form action="#" method="post" enctype="multipart/form-data" name="form" novalidate>

   <div class="form-field">
    <input type="text" name="username" id="username" value="" placeholder="username">
   </div>

   <div class="form-field">
    <input type="password" name="password" id="password" value="" placeholder="password">
   </div>
   
   <input type="submit" name="submit" id="submit" value="submit">

  </form>
 </div>
</body>
</html>