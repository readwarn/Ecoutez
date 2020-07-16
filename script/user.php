<?php
    $mail = $_POST['email'];
   if (!empty($mail)){

       $host = "d9c88q3e09w6fdb2.cbetxkdyhwsb.us-east-1.rds.amazonaws.com";
       $dbusername = "ptamhr1f32u7u8d6";
       $dbpassword = "gfsqgjg3qa5uau1n";
       $dbname = "w7g9d8ukscppdutc";

       // Create connection
       $conn = new mysqli ($host, $dbusername, $dbpassword, $dbname);
       if (mysqli_connect_error()){
       die('Connect Error ('. mysqli_connect_errno() .') '
       . mysqli_connect_error());
       }
       else{
       $sql = "INSERT INTO subscribers(email)
       values ('$mail')";
       if ($conn->query($sql)){
       echo "THANKS FOR SUBSCRIBING";
       }
       else{
       echo "ERROR: ". $sql ."
       ". $conn->error;
       }
       $conn->close();
       }
   }  
   else{
   echo "OOPS!!! EMAIL SHOULD NOT BE EMPTY";
   die();
   }
?>