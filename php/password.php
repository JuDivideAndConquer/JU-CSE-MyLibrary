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
    $pw = "'".strval($_POST['pw'])."'";
    $sql="SELECT * FROM user_table WHERE cd_no=$cd";
    $result =mysqli_query($link,$sql);
    if(mysqli_query($link,"UPDATE user_table SET password=$pw WHERE card_number=$cd")== TRUE)
    {
        echo"Change Password Successfully";
    }
    else{
        echo "Error: " . $sql . "<br>" . $link->error;
    }
    mysqli_close($link);
?>