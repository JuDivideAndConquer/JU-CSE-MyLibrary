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
$d = "'".strval($_POST['d'])."'";


$return_array = array();
$sql = "SELECT * FROM book_table; ";
$result = mysqli_query($link , $sql) or die(mysqli_error($link)."".$sql);

while($row = mysqli_fetch_assoc($result))
{
	
	array_push($return_array,$row);
	
}

$x = json_encode($return_array);
echo $x ;
mysqli_close($link);
?>
