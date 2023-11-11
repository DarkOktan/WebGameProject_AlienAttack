<?php 
    $ID = filter_input(INPUT_POST, 'ID');
    $usernamePlayer = filter_input(INPUT_POST, 'username');
    $timeSpend = filter_input(INPUT_POST, 'timeSpend');
    $tryShoot = filter_input(INPUT_POST, 'tryShoot');

    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "dbalienattack";

    $con = new mysqli($servername, $username, $password,$dbname);

    if (mysqli_connect_error()){
        die("Not Connected");
    }

    $sql = "SELECT * FROM data WHERE username = '$usernamePlayer'";
    $result = $con->query($sql);
    if ($result->num_rows > 0){
        echo "Updating";
        while($row = $result->fetch_assoc()){
            if ($row["timespend"] > $timeSpend){
                if ($row["ID"] == $ID){
                    $sql = "UPDATE data SET timespend = $timeSpend,tryshoot = $tryShoot WHERE ID = $ID";
                    $con->query($sql);
    
                    echo "$con->error";
                }
            }else{
                echo "Not Bestscore";
            }
        }
    }else{
        echo "Insert";
        $sql = "INSERT INTO data (ID, username, timespend, tryshoot) VALUES ($ID, '$usernamePlayer', $timeSpend, $tryShoot)";
        
        $con->query($sql);

        echo "$con->error";
    }
?>