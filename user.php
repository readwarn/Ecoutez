<?php
 $mail = $_POST['email'];
 
 // Database connection
 $conn = new mysqli('localhost','root','','test');
 if($conn->connect_error){
     echo "$conn->connect_error";
     die("Connection Failed : ". $conn->connect_error);
 } else {
     $stmt = $conn->prepare("insert into fan(name) values(?)");
     $stmt->bind_param("s", $mail);
     $execval = $stmt->execute();
     echo $execval;
     echo "Registration successfully...";
     $stmt->close();
     $conn->close();
 }
?>