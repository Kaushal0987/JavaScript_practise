<?php

include "connection.php";

$uid = $_GET['id'];

$qry = "SELECT fullname, email, phone, address, photo, bio FROM user WHERE id = '$uid'";

$res = mysqli_query($conn, $qry);

?>

<!DOCTYPE html>
<html lang="en">
<head>
 <meta charset="UTF-8">
 <meta name="viewport" content="width=device-width, initial-scale=1.0">
 <title>edit</title>
</head>
<body>
<h1>Form Edit</h1>
 <?php while($row = mysqli_fetch_assoc($res)); ?>
 <div class="formbox">
  <form action="update.php" method="post" enctype="multipart/form-data" name="form" novalidate>

   <div class="form-field">
    <input type="text" name="fullname" id="fullname" value="<?php echo $row['fullname']; ?>" >
   </div>

   <div class="form-field">
    <input type="email" name="email" id="email" value="<?php echo $row['email']; ?>" >
   </div>

   <div class="form-field">
    <input type="number" name="phone" id="phone" value="<?php echo $row['phone']; ?>" >
   </div>

   <div class="form-field">
    <input type="text" name="address" id="address" value="<?php echo $row['address']; ?>" >
   </div>

   <div class="form-field">
    <input type="file" name="photo" id="photo" value="<?php echo $row['photo']; ?>">
    <img src="public/<?php echo $row['photo']; ?>">
   </div>

   <div class="form-field">
    <textarea name="bio" id="bio" cols="30" rows="10" ><?php echo $row['bio']; ?></textarea>
   </div>
   
   <input type="submit" name="edit" id="edit" value="edit">

  </form>
 </div>
 <?php endwhile; ?>
</body>
</html>