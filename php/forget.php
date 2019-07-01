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
session_start();
$rndno=rand(100000, 999999);//OTP generate
$message = urlencode("otp number.".$rndno);
$to=$_POST['em'];
$subject = "OTP for jucse library";
$txt = "Your One Time Password is: ".$rndno."";
$headers = "From: mollasumon54@gmail.com" . "\r\n" .
"CC: mollasumon54@gmail.com";
mail($to,$subject,$txt,$headers);
if(isset($_POST['btn-save']))
{
$_SESSION['em']=$_POST['em'];
$_SESSION['otp']=$rndno;
header( "Location: otp.php" ); 
} 
?>