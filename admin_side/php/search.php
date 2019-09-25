<?php
header("Access-Control-Allow-Origin: *");
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

$key = strval($_POST['d']);

$return_array = array();

if($key=='1'){
	$sql = "SELECT book_table.* ,pending_issue_table.card_number FROM book_table INNER JOIN pending_issue_table ON book_table.acession_number=pending_issue_table.acession_number WHERE pending_issue_table.status=0 ";
}
else{
	$sql = "SELECT book_table.* ,pending_issue_table.card_number FROM book_table INNER JOIN pending_issue_table ON book_table.acession_number=pending_issue_table.acession_number WHERE pending_issue_table.status=1 ";
}

$result = mysqli_query($link, $sql) or dir(mysqli_error($link)."".$sql);

while ($row = mysqli_fetch_assoc($result)) {
	array_push($return_array, $row);
}

$x = json_encode($return_array);
echo $x;
mysqli_close($link);
?>
