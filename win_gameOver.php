<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "dbalienattack";

$con = new mysqli($servername, $username, $password, $dbname);

$sql = "SELECT * FROM data ORDER BY timespend ASC LIMIT 5";
$result = $con->query($sql);
?>

<!doctype html>
<meta charset="utf-8">

<head>
    <title>Alien attack</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div id="win_gameOver">
        <h1 style="color: white;">You Win</h1>
        <table border="1" style="margin-left: 30%; color: white;">
            <?php $i = 1; ?>
            <?php while ($row = $result->fetch_assoc()) : ?>
                <tr>
                    <td><?= $i; ?></td>
                    <?php $i++; ?>
                    <td><?= $row['username']; ?></td>
                    <td><?= $row['timespend']; ?></td>
                    <td><?= $row['tryshoot']; ?></td>
                </tr>
            <?php endwhile; ?>
        </table>
        <button id="Continue Button" style="margin-top: 30px;"><a href="mainmenu.html">Continue</a></button>
    </div>
</body>

</html>