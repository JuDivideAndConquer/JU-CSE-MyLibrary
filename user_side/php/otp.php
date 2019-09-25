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
	$sucess='1';
    $cd = "'".strval($_POST['cd'])."'";
    $otpvalue = "'".strval($_POST['otpvalue'])."'";
    $sql = "SELECT * FROM otp_validity WHERE cd_no=$cd AND otp_value=$otpvalue AND is_valid='0'; ";
    $result =msysqli_query($link,$sql);
    $count=mysqli_num_rows($result);
    if(!empty($count)){
    	$result=mysqli_query($link,"UPDATE otp_validity SET is_valid =1 WHERE otp_value =$otpvalue");
    	$sucess='2';
    }
    echo $sucess;
    mysqli_close($link);

?>