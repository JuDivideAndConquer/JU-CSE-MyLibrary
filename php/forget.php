<?php
require 'PHPMailerAutoload.php';
require 'credential.php';

$mail = new PHPMailer();

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                    // Set mailer to use SMTP
$mail->Host = 'smtp1.gmail.com';                    // Specify main and backup SMTP servers
$mail->SMTPKeepAlive = true;   
$mail->Mailer = “smtp”; // don't change the quotes!
$mail->SMTPAuth = true;                             // Enable SMTP authentication
$mail->Username = EMAIL;                         	// SMTP username
$mail->Password = PASS;                           	// SMTP password
$mail->SMTPSecure = 'tls';                         // Enable TLS encryption, `ssl` also accepted
$mail->Port = 587;                                  // TCP port to connect to

$mail->setFrom(EMAIL, 'JU-cse-Library');
$mail->addAddress($_POST['em']);                    // Add a recipient
//$mail->addAddress('ellen@example.com');           // Name is optional
$mail->addReplyTo(EMAIL);

//$mail->addAttachment('/var/tmp/file.tar.gz');     // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg'); // Optional name
$mail->isHTML(true);                                 // Set email format to HTML

$mail->Subject = "OTP";
$mail->Body    = 'This is the HTML message body <b>in bold!</b>';
$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

if(!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'Message has been sent';
}
?>
