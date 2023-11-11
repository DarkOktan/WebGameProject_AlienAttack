<?php 

$servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "dbalienattack";

    //Variabel For Login users
    $registerUsername = filter_input(INPUT_POST, 'registerUsernameInput');
    $registerPassword = filter_input(INPUT_POST, 'registerPasswordInput');

    $con = new mysqli($servername, $username, $password,$dbname);

    if (mysqli_connect_error()){
        die("Not Connected");
    }

    $sql = "INSERT INTO users (ID, username, PASSWORD) VALUES (null, '$registerUsername', '$registerPassword')";
    if ($con->query($sql)){
        echo '<script>
        window.localStorage.setItem("ID", '.$con->insert_id.');
        window.localStorage.setItem("StatusLogin", "Success");
        window.location = "../mainmenu.html";
        </script>';
    }else{
        echo "$con->error";
    }

    $con->close();
?>