<?php
 if(isset($_POST['submit'])){

  $fullname = $_POST['fullname'];
  $email = $_POST['email'];
  $phone = $_POST['phone'];
  $address = $_POST['address'];
  $photo = $_FILES['photo'];
  $photo_name = $_FILES['photo']['name'];
  $bio = $_POST['bio'];

  //validation of photo
  if($_FILES['photo']['error'] == 0){
   //array of photo types
   $mimetypes = ["image/jpeg", "image/jpg", "image/png", "image/gif"];
   //checking the type of the photo in array mimetypes
   if(in_array($_FILES['photo']['type'], $mimetypes)){
    //Image upload
    if(move_uploaded_file($_FILES['photo']['tmp_name'], 'public/'.$_FILES['photo']['name'])){
     echo "Image Uploaded";
    }else{
     echo "Image not able to upload";
    }
   }else{
    echo "Image type is not valid";
   }
  }else{
   echo "Image upload error";
  }

  include("connection.php");

  $sql = "INSERT INTO users(fullname, email, phone, address, photo, bio) VALUES ('$fullname','$email','$phone','$address','$photo','$bio')";

  $res = mysqli_query($conn, $sql);

  if($res){echo "Data Inserted into users";}
  else{echo "Unable to insert data into users";}

 }else{
  header("location: insert.php");
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
    <input type="text" name="fullname" id="fullname" value="" placeholder="fullname">
   </div>

   <div class="form-field">
    <input type="email" name="email" id="email" value="" placeholder="email">
   </div>

   <div class="form-field">
    <input type="number" name="phone" id="phone" value="" placeholder="phone">
   </div>

   <div class="form-field">
    <input type="text" name="address" id="address" value="" placeholder="address">
   </div>

   <div class="form-field">
    <input type="file" name="photo" id="photo" value="">
   </div>

   <div class="form-field">
    <textarea name="bio" id="bio" cols="30" rows="10"></textarea>
   </div>
   
   <input type="submit" name="submit" id="submit" value="submit">

  </form>
 </div>
</body>
</html>