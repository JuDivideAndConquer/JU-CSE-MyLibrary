<?php
    $sender = 'sadrulju@gmail.com';
    $cd = "'".strval($_POST['cd'])."'";
    $email = "'".strval($_POST['em'])."'";
    $randno=$rndno=rand(100000, 999999);//OTP generate

    $subject = "JU-cse-libary";
    $message = "Your one time Password Is" . $randno;
    $headers = 'From:' . $sender;

    $r=mail($email, $subject, $message, $headers);
    echo $r;
    /*if ())
    {
    echo "Message accepted";
    }
    else
    {
        echo "Error: Message not accepted";
    }*/
?>