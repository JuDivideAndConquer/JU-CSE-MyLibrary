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
    if (name == 'signUp' || name == 'login') {
        hide_icon();
    }
    change_text(text);
}

document.addEventListener('deviceready', function() {
    loadPage("homescreen", "Home");
});