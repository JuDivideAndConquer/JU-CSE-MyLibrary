//=====================functions for login and sign up page======================================

//retrives the forget password page
function getloginPage(fragmentId,callback){
	var request = new XMLHttpRequest();
	request.onload = function(){
		callback(request.responseText);
	};
	request.open('GET','./login.html');
	request.send(null);
}
//fucntion to load the forget page
function loadloginPage(){
	var content = document.getElementById('cont');
	var fragmentId=location.hash.substr(1);
	console.log(fragmentId);
	console.log(location.hash);
	getloginPage(function(fragmentId){
		content.innerHTML = fragmentId;
	})
	//hide_icon();
	//change_text_login();
	console.log("sona ato vhule gele CO ki kore porbe");
}

//============================end of the function for login and sign up======================

document.addEventListener('deviceready',function(){
	window.onhashchange=loadloginPage;

	document.addEventListener('backbutton', function(){
    navigator.app.exitApp();
	});
});