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
$em = "'".strval($_POST['em'])."'";
?>