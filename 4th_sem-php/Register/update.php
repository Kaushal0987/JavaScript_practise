<?php 

if(isset($_POST['edit'])){

 session_start();

 $uid = $_GET['id'];

 $fullname = $_POST['fullname'];
 $email = $_POST['email'];
 $phone = $_POST['phone'];
 $address = $_POST['address'];
 $photo = $_FILES['photo'];
 $photo_name = $_FILES['photo']['name'];
 $bio = $_POST['bio'];

 if($_FILES['photo']['error'] == 0){
  $mimetypes = ["image/jpeg", "image/jpg", "image/png", "image/gif"];
  if(in_array($_FILES['photo']['type'], $mimetypes)){
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

 include "connection.php";

 $sql = "UPDATE user SET fullname = '$fullname', email = '$email', phone = '$phone', address = '$address', photo = '$photo', bio = '$bio' WHERE id = '$uid' ";

 $res = mysqli_query($conn, $sql);

 if($res) {
  $_SESSION['msg'] = "User Updated Succesfully";
 }
 else{
  $_SESSION['msg'] = "User Unable to update";
 }

 header("location: select.php");

}

?>