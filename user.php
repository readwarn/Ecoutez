<?php
 $mail = $_POST['email'];
 
 // Database connection
 $conn = new mysqli('d9c88q3e09w6fdb2.cbetxkdyhwsb.us-east-1.rds.amazonaws.com','ptamhr1f32u7u8d6','gfsqgjg3qa5uau1n','w7g9d8ukscppdutc');
 if($conn->connect_error){
     echo "$conn->connect_error";
     die("Connection Failed : ". $conn->connect_error);
 } else {
     $stmt = $conn->prepare("insert into subscribers(name) values(?)");
     $stmt->bind_param("s", $mail);
     $execval = $stmt->execute();
     echo $execval;
     echo "Registration successfully...";
     $stmt->close();
     $conn->close();
 }
?>