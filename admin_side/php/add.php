<?php
header("Access-Control-Allow-Origin: *");
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
$acess = "'".strval($_POST['acess'])."'";
$title = "'".strval($_POST['title'])."'";
$edition = "'".strval($_POST['edition'])."'";
$subject = "'".strval($_POST['subject'])."'";
$publisher = "'".strval($_POST['publisher'])."'";
$author1 = "'".strval($_POST['author1'])."'";
$author2 = "'".strval($_POST['author2'])."'";
$author3 = "'".strval($_POST['author3'])."'";
$author4 = "'".strval($_POST['author4'])."'";
$author5 = "'".strval($_POST['author5'])."'";
$author6 = "'".strval($_POST['author6'])."'";

$return_array = array();
$sql = "INSERT INTO book_table $acess,$title,$edition,$subject,$publisher,$author1,$author2,$author3,$author4,$author5,$author6; ";
if ($link->query($sql) === TRUE) {
    echo 1;
} else {
    echo 0;
}


$link->close();

?>

