
function signUp(cardnumber, name, course, passw, passwc) {
	if (passw != passwc) {
		alert("Passwords do not match");
		return false;
	}


	$.post("http://jucse-mylib.000webhostapp.com/signUp.php", { cd: cardnumber, nm: name, cs: course, pw: passw })
		.done(function (data) {
			alert(data);
			loadPage('login','Login');
		});

	return false;
}