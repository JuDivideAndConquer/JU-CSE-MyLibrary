<?PHP
$sender = 'sadrulju@gmail.com';
$recipient = "'".strval($_POST['em'])."'";

$subject = "php mail test";
$message = "php test message";
$headers = 'From:' . $sender;

if (mail($recipient,$subject,$message,null,$headers))
{
    echo "Message accepted";
}
else
{
    echo "Error: Message not accepted";
}
?>