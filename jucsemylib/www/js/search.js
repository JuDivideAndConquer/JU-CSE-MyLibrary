//fucntion to load the page
function loadSearch() {
	var request = new XMLHttpRequest();
	request.onload = function () {
		var content = document.getElementById('content');
		content.innerHTML = request.responseText;
	};
	request.open('GET', './search.html');
	request.send(null);
	hideSidenav();
	var icon = document.getElementById('menuIcon');
	icon.style.display = "block";
	var sidenav = document.getElementById('sidenav');
	sidenav.style.display = "block";
	change_text("Available Books")
	loadResults(null);
}

function displayBooks(data) {
	var data = JSON.parse(data, true);
	console.log(data[0]);
}

function loadResults(params) {
	if (params == null) {
		$.post("http://jucse-mylib.000webhostapp.com/searchAll.php", { d: params })
			.done(function (data) {
				console.log(data);
				alert(data);
				displayBooks(data);
			});

	}

}