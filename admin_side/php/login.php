<?php
header("Access-Control-Allow-Origin: *");
ini_set('display_errors', 1);
error_reporting(E_ALL);

$password = "admin001";
$pw = "'".strval($_POST['pw'])."'";

if($password==$pw){echo true;}
else{echo false;}


?>
