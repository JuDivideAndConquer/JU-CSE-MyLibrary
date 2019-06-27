

//=====================functions for forget password page======================================

//retrives the forget password page
function getforgetPage(callback){
	var request = new XMLHttpRequest();
	request.onload = function(){
		callback(request.responseText);
	};
	request.open('GET','./forgetpasword.html');
	request.send(null);
}
//fucntion to load the forget page
function loadforgetPage(){
	var content = document.getElementById('container');
	getforgetPage(function(forgetpasword){
		content.innerHTML = forgetpasword;
	})
	//hide_icon();
	//change_text_login();
	console.log("sona ato vhule gele CO ki kore porbe");
}


//============================backbutton event============================================


//============================end of the function for forget password======================

document.addEventListener('deviceready',function(){
	window.onhashchange=loadforgetPage;
});