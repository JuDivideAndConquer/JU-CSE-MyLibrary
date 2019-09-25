function loadpass(data)
{
	if(data==2)
	{
		loadPage('password','Change Your Password');
	}
	else
	{
		alert('Invalid OTP');
	}
}

function otpcheck(otpvalue)
{
	console.log(cd_no);
	console.log(otpvalue);
	$.post("http://jucse-mylib.000webhostapp.com/otp.php", { otpvalue: otpvalue, cd: cd_no})
        .done(function(data) {
        	loadpass(data);
    });
    return false;
}