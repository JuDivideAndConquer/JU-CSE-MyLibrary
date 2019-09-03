<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);


$servername = "localhost";
$username = "id10038623_admin";
$password = "divideandconquer";
$dbname = "id10038623_library";

// Create connection
$link = mysqli_connect($servername, $username, $password);

if($link)
{
	mysqli_select_db($link,$dbname) or die(mysqli_error($link));
}
?>

<?php
$cd = "'".strval($_POST['cd'])."'";
$pw = "'".strval($_POST['pw'])."'";
$nm = "'".strval($_POST['nm'])."'";
$cs = "'".strval($_POST['cs'])."'";
$ml = "'".strval($_POST['ml'])."'";
$return_array = array();
$sql = "INSERT INTO user_table VALUES($nm,$cd,$cs,'1','0',$pw,$ml) ;";

if ($link->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $link->error;
}

$link->close();
?>

<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);


$servername = "localhost";
$username = "id10038623_admin";
$password = "divideandconquer";
$dbname = "id10038623_library";

// Create connection
$link = mysqli_connect($servername, $username, $password);

if($link)
{
	mysqli_select_db($link,$dbname) or die(mysqli_error($link));
}
?>

<?php
$cd = "'".strval($_POST['cd'])."'";
$pw = "'".strval($_POST['pw'])."'";
$nm = "'".strval($_POST['nm'])."'";
$cs = "'".strval($_POST['cs'])."'";
$ml = "'".strval($_POST['ml'])."'";
$return_array = array();
$sql = "INSERT INTO user_table VALUES($nm,$cd,$cs,'1','0',$pw,$ml) ;";

if ($link->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $link->error;
}

$link->close();
?>

