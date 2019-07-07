var cd_no;

function forget(cardNo,emailId)
{
    console.log(emailId);
    console.log(cardNo);
    $.post("http://jucse-mylib.000webhostapp.com/forget.php", { em: emailId, cd: cardNo})
        .done(function(data) {
        	alert(data);
            cd_no=cardNo;
            loadPage('otp','OTP');
        });
    return false;
}