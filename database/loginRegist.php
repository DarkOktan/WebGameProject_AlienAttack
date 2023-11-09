<?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "dbalienattack";

    //Variabel For Login users
    $loginUsername = $_POST["username"];
    $loginPassword = $_POST["password"];

    $con = new mysqli($servername, $username, $password,$dbname);
    
    if ($con -> connect_error) {
        die("Nothing Data In Here " . $con -> connect_error);
    }

    $sql = "SELECT password, ID FROM users where username = '$loginUsername'";

    $result = $con->query($sql);
    
    if ($result->num_rows > 0) {
      // output data of each row
      while($row = $result->fetch_assoc()) {
          if ($row["password"] == $loginPassword) {
              # code...
              echo $row["ID"];
          }
          else{
              echo "Login Failed";
          }
      }
    } else {
      echo $loginUsername . " Doesn't Exists";
    }

    $con->close();
?>