//function to show the side navigation bar
function showSidenav()
{
	$('#sidenav').css('transition','0.5s ease')
	$('#sidenav').css('width','60%');
	$('.sidenavItems').css('display','block');
	console.log("menu icon clicked");
}

//fucntion to collapse the side navigation bar
function hideSidenav()
{   
	$('#sidenav').css('transition','0.5s ease')
	$('#sidenav').css('width','0');
	$('.sidenavItems').css('display','none');
	console.log("sidenav hide icon clicked");
}

var touchx;

//minimum value of x coordinate in order to trigger showSidenav
var minXShowSidenav = 5;

//minimum value to x coordinate in order to trigger hideSidenav
var minXHideSidenav = 100;

//event listeners to enable swiping to show side navigation bar
document.getElementById('content').addEventListener('touchstart',function(evt)
{
	touchx = evt.touches[0].clientX;
	console.log(touchx);
});

document.getElementById('content').addEventListener('touchmove',function(evt)
{
	var touch = evt.touches[0];
	console.log(touch.clientX);

	if(touchx<5)
	{
		$('#sidenav').css('transition','0.1s ease')
		$('#sidenav').css('width',touch.clientX);
	}
});

document.getElementById('content').addEventListener('touchend',function()
{
	if(touchx<minXShowSidenav)
	{
		showSidenav();
	}
});

// event listeners to enable swiping to collapse side navigation bar
document.getElementById('sidenav').addEventListener('touchmove',function(evt)
{
	var touch = evt.touches[0];
	console.log(touch.clientX);
	$('#sidenav').css('transition','0.1s ease')
	$('#sidenav').css('width',touch.clientX);
	touchx=touch.clientX;
});

document.getElementById('sidenav').addEventListener('touchend',function()
{
	if(touchx<minXHideSidenav)
	{
		hideSidenav();
	}
	else
	{
		showSidenav();
	}
});

//retrives the login page
function getLoginPage(callback){
	var request = new XMLHttpRequest();
	request.onload = function(){
		callback(request.responseText);
	};
	request.open('GET','./login.html');
	request.send(null);
}
//fucntion to load the login page
function loadLoginPage(){
	var content = document.getElementById('content');
	getLoginPage(function(loginPage){
		content.innerHTML = loginPage;
	})
	hide_icon();
	change_text_login();
	console.log("login kore now sona");
}


//retrives the signup page
function getSignUpPage(callback){
	var request = new XMLHttpRequest();
	request.onload = function(){
		callback(request.responseText);
	};
	request.open('GET','./signUp.html');
	request.send(null);
}
//fucntion to load the signup page
function loadSignUpPage(){
	var content = document.getElementById('content');
	getSignUpPage(function(signUp){
		content.innerHTML = signUp;
	})
	hide_icon();
	change_text();
	console.log("signup page loaded");
}

//-----------------------------------------------------------------
//retrives the home page
function getHome(callback){
	var request = new XMLHttpRequest();
	request.onload = function(){
		callback(request.responseText);
	};
	request.open('GET','./homescreen.html');
	request.send(null);
}
//fucntion to load the home page
function loadHome(){
	var content = document.getElementById('content');
	getHome(function(home){
		content.innerHTML = home;
	})
	console.log("you are home");
}




//main fucntion--------------------------------------------------------
document.addEventListener('deviceready',function(){
	/*var PREF_LOGGED_IN = localStorage.getItem('PREF_LOGGED_IN');
	if(PREF_LOGGED_IN == null || PREF_LOGGED_IN == 'false'){
		loadLoginPage();
	}*/
	//loadSignUpPage();
	//loadHome();
	loadLoginPage();
});
