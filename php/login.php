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

$return_array = array();
$sql = "SELECT * FROM user_table WHERE card_number=$cd AND password=$pw ; ";


$result = mysqli_query($link , $sql) or die(mysqli_error($link)."".$sql);
$row=mysqli_fetch_assoc($result);



$x = json_encode($row);
echo $x ;
mysqli_close($link);
?>
