<?php

 include("connection.php");

 $qry = "SELECT * FROM users";

 $res mysqli_query($conn, $qry);

?>

<!DOCTYPE html>
<html lang="en">
<head>
 <meta charset="UTF-8">
 <meta name="viewport" content="width=device-width, initial-scale=1.0">
 <title>Display data from database</title>
</head>
<body>
 <h1>Users Data</h1>
 <?php echo (isset($_SESSION['msg'])) ? "<p class='msg'>".$_SESSION['msg']."</p>": ""; ?>
 <?php if($res): ?>
  <div class="table_box">
   <table>
    <thead>

     <th>#</th>
     <th>Fullname</th>
     <th>E-mail</th>
     <th>Phone</th>
     <th>Address</th>
     <th>Bio</th>
     <th>Photo</th>
     <th>Action</th>

    </thead>

    <?php $i=1; while($row = mysqli_fetch_assoc($res): )?>
    <tbody>

     <td><?php echo $i; ?></td>
     <td><?php echo $row['fullname']; ?></td>
     <td><?php echo $row['email']; ?></td>
     <td><?php echo $row['phone']; ?></td>
     <td><?php echo $row['address']; ?></td>
     <td><?php echo $row['bio']; ?></td>
     <td><?php echo $row['photo']; ?></td>
     <td>
      <a href="edit.php" ? uid = <?php echo $row['id']; ?>>Edit</a>
      <a href="delete.php" ? uid = <?php echo $row['id']; ?>>Delete</a>
     </td>

    </tbody>
    <?php $i++; endwhile;?>

   </table>
  </div>
 <?php else: ?>
  <p>Data was Unable to Retrive</p>
 <?php endif; ?>
</body>
</html>