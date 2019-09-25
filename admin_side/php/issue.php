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
$cd = "'".strval($_POST['cd'])."'";
$ass = "'".strval($_POST['ass'])."'";
$key = "'".strval($_POST['key'])."'";

$return_array = array();
if($key==1){
    $sql = "UPDATE pending_issue_table SET issue_date=CURDATE(), return_date=DATE_ADD(CURDATE(), INTERVAL 30 DAY), status=1 WHERE acession_number=$ass;";
    if ($link->query($sql) === TRUE) {
        echo 1;
    } else {
        echo 0;
    }
}
else{
    $sql = "INSERT INTO transaction_history_table SELECT acession_number,card_number,issue_date,CURDATE() FROM pending_issue_table WHERE acession_number=$ass; ";
    $sql1="DELETE FROM pending_issue_table WHERE acession_number=$ass;";
    $sql2="UPDATE user_table SET books_issued=books_issued-1 WHERE card_number=$cd;";
    $sql3="UPDATE book_table SET availability=1 WHERE acession_number=$ass;";
    if ($link->query($sql) === TRUE && $link->query($sql1) === TRUE && $link->query($sql2) === TRUE && $link->query($sql3) === TRUE) {
        echo 1;
    } else {
        echo 0;
    }
}

$link->close();

?>

