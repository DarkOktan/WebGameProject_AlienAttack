<?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "dbalienattack";

    //Variabel For Login users
    $loginUsername = filter_input(INPUT_POST, 'usernameInput');
    $loginPassword = filter_input(INPUT_POST, 'passwordInput');

    $con = new mysqli($servername, $username, $password,$dbname);

    if (mysqli_connect_error()){
        die("Not Connected");
    }
    
    if (!empty($loginUsername)){
        if (!empty($loginPassword)){
            $sql = "SELECT * FROM users WHERE username = '$loginUsername'";
            $result = $con->query($sql);
            if ($result->num_rows > 0){
                while ($row = $result->fetch_assoc()){
                    if ($row["password"] == $loginPassword){
                        echo '<script>
                        window.localStorage.setItem("ID", '.$row["ID"].');
                        window.localStorage.setItem("StatusLogin", "Success"); 
                        window.location = "../mainmenu.html";
                        </script>';
                    }else{
                        echo "not login";
                    }
                }
            }else{
                echo '<script>
                 window.localStorage.setItem("StatusLogin", "Not Found"); 
                 window.location = "../login.html";
                </script>';
            }
        }else{
            echo "Password Should Not Be Empty";
            die();
        }
    }else{
        echo "Username Should Not Be Empty";
        die();
    }

    $con->close();
?>
