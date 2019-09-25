function password_match(passw, passwc) {
	if (passw != passwc) {
		alert("Passwords do not match");
		return false;
	}


	$.post("http://jucse-mylib.000webhostapp.com/password.php", { cd: cd_no, pw: passw })
		.done(function (data) {
			alert(data);
			loadPage('login','Login');
		});

	return false;
}