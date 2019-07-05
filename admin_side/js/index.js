//function to change text in topBar
function change_text(text) {
    var topnav = document.getElementById('topBarHome');
    topnav.innerHTML = text;
}

//retrives the page
function getPage(callback, name) {
    var request = new XMLHttpRequest();
    request.onload = function() {
        callback(request.responseText);
    };
    request.open('GET', './' + name + '.html');
    request.send(null);
}
//fucntion to load the page
function loadPage(name, text, data) {
    var content = document.getElementById('content');
    getPage(function(home) {
        content.innerHTML = home;
    }, name)
    change_text(text);
}

function ready() {
    loadPage("homescreen", "Home");
};

window.onload = ready();