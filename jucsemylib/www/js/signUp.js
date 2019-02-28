//function to change text in topBar
function change_text(){
	var topnav=document.getElementById('topBarHome');
	topnav.innerHTML= "Sign Up";
}

//function to hide menu icon
function hide_icon(){
	var icon=document.getElementById('menuIcon');
	icon.style.display= "none";
	
}

//function to adjust the view
/*function height_adjust(){
	var h = window.innerHeight;
	var hf=h-60px;
	var c=document.getElementById('content');
	c.style.height= hf;
	
}
//height_adjust();*/


//main fucntion--------------------------------------------------------
document.addEventListener('deviceready',function(){
	//loadLoginPage();

	hide_icon();
	change_text();
	console.log("signup page loaded");
});


