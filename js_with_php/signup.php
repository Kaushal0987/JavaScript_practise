<?php
//Check submit button clicked or not, first. 
if(isset($_POST['submit'])) {
    /**#1 Test form submission */
    // echo "<pre>";
    // print_r($_POST);
    // var_dump($_FILES);
    // echo "</pre>";
    /**#2 Data collection first */
    $fullname = $_POST["fullname"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $address = $_POST["address"];
    $bio = $_POST['bio']; //quotation may be single or double but uniform
    $photo = $_FILES['photo'];
    $photo_name = $_FILES['photo']['name'];

    /**#3 Now we require database to resolve CRUD operation according to DBMS 
     * Note: Lets create connection.php file for database connection query
    */

} else {
    header("location: /formlogic"); // '/formlogic' symbol handle the index.php of project form practic folder named 'formlogic' where our register form exists.
}