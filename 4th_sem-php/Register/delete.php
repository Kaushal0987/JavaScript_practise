<?php
 session_start();

 $uid = $_GET['uid'];

 include("connection.php");

 $sql = "DELETE FROM users WHERE id = '$uid'";

 $res = mysqli_query($conn, $sql);

 if($res){
  $_SESSION['msg'] = "User Deleated Succesfully";
 }
 else{
  $_SESSION['msg'] = "Unable to delete user";
 }

 header("location: select.php");
?>