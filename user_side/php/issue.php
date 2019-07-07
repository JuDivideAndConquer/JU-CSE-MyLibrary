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
$ass = "'".strval($_POST['ass'])."'";

$return_array = array();
$sql = "INSERT INTO pending_issue_table VALUES($ass,$cd,CURDATE(),DATE_ADD(CURDATE(), INTERVAL 30 DAY));";

if ($link->query($sql) === TRUE) {
    echo 1;
} else {
    echo 0;
}

$link->close();
?>

