//function to show the side navigation bar
function showSidenav() {
	$('#sidenav').css('transition', '0.5s ease')
	$('#sidenav').css('width', '60%');
	$('.sidenavItems').css('display', 'block');
	console.log("menu icon clicked");
}

//fucntion to collapse the side navigation bar
function hideSidenav() {
	$('#sidenav').css('transition', '0.5s ease')
	$('#sidenav').css('width', '0');
	$('.sidenavItems').css('display', 'none');
	console.log("sidenav hide icon clicked");
}

var touchx;

//minimum value of x coordinate in order to trigger showSidenav
var minXShowSidenav = 5;

//minimum value to x coordinate in order to trigger hideSidenav
var minXHideSidenav = 100;

//event listeners to enable swiping to show side navigation bar
document.getElementById('content').addEventListener('touchstart', function (evt) {
	touchx = evt.touches[0].clientX;
	console.log(touchx);
});

document.getElementById('content').addEventListener('touchmove', function (evt) {
	var touch = evt.touches[0];
	console.log(touch.clientX);

	if (touchx < 5) {
		$('#sidenav').css('transition', '0.1s ease')
		$('#sidenav').css('width', touch.clientX);
	}
});

document.getElementById('content').addEventListener('touchend', function () {
	if (touchx < minXShowSidenav) {
		showSidenav();
	}
});

// event listeners to enable swiping to collapse side navigation bar
document.getElementById('sidenav').addEventListener('touchmove', function (evt) {
	var touch = evt.touches[0];
	console.log(touch.clientX);
	$('#sidenav').css('transition', '0.1s ease')
	$('#sidenav').css('width', touch.clientX);
	touchx = touch.clientX;
});

document.getElementById('sidenav').addEventListener('touchend', function () {
	if (touchx < minXHideSidenav) {
		hideSidenav();
	}
	else {
		showSidenav();
	}
});


//---------------------------------------------------------------------------------
//function to change text in topBar
function change_text(text) {
	var topnav = document.getElementById('topBarHome');
	topnav.innerHTML = text;
}

//function to hide menu icon
function hide_icon() {
	var icon = document.getElementById('menuIcon');
	icon.style.display = "none";
	var sidenav = document.getElementById('sidenav');
	sidenav.style.display = "none";
}


//-----------------------------------------------------------------
//retrives the page
function getPage(callback, name) {
	var request = new XMLHttpRequest();
	request.onload = function () {
		callback(request.responseText);
	};
	request.open('GET', './' + name + '.html');
	request.send(null);
}
//fucntion to load the page
function loadPage(name, text, data) {
	var content = document.getElementById('content');
	getPage(function (home) {
		content.innerHTML = home;
	}, name)
	if (name == 'signUp' || name == 'login') {
		hide_icon();
	}
	change_text(text);
	hideSidenav();

}
//main fucntion--------------------------------------------------------
document.addEventListener('deviceready', function () {
	/*var PREF_LOGGED_IN = localStorage.getItem('PREF_LOGGED_IN');
	var PREF_SIGNED_UP = localStorage.getItem('PREF_SIGNED_UP');
	if(PREF_SIGNED_UP == null || PREF_SIGNED_UP == 'false'){
		loadPage('signup','Sign Up',null);
		PREF_SIGNED_UP='true';
	}
	else if(PREF_LOGGED_IN == null || PREF_LOGGED_IN == 'false'){
		loadPage('login','Login',null);
	}
	else{
		loadPage('homescreen','Home');

	}*/
	loadPage('login', 'Login');

});


