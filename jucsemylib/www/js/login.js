function loadHomePage(data)
{
	
}

function loginData(data) {
	console.log('Loading page');
	if (data=='\nnull') {
		alert('Invalid username or password');
	}
	else {
		loadHomePage(data);
	}
}

function login(cardnumber, password) {
	console.log(cardnumber);
	console.log(password);

	$.post("http://jucse-mylib.000webhostapp.com/login.php", { cd: cardnumber, pw: password })
		.done(function (data) {
			console.log(data);
			loginData(data);
		});
	return false;
}