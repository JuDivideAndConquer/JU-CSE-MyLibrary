<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

$servername = 'localhost';
$username = 'id10038623_admin';
$password = 'divideandconquer';
$dbname = 'id10038623_library';

//create connection
$link = mysqli_connect($servername, $username, $password);

if ($link) {
	mysqli_select_db($link, $dbname) or die(mysqli_error($link));
}

$key = strval($_POST['keyword']);

$return_array = array();
$sql = "SELECT * FROM book_table WHERE title LIKE '%$key%' OR subject LIKE '%$key%' OR author1 LIKE '%$key%' author2 LIKE '%$key%' author3 LIKE '%$key%' author4 LIKE '%$key%' author5 LIKE '%$key%' author6 LIKE '%$key%'";
$result = mysqli_query($link, $sql) or dir(mysqli_error($link)."".$sql);

while ($row = mysqli_fetch_assoc($result)) {
	array_push($return_array, $row);
}

$x = json_encode($return_array);
echo $x;
mysqli_close($link);
?>