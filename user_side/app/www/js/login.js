//changes home params according to user data
function changeHomeParams(data) {
    var arr = JSON.parse(data, true);
    //alert(arr["name"]);
    document.getElementById('name').innerHTML = arr['name'];
    console.log(arr['name']);
    $("#designation").html(arr["course"]);
    $("#num").html(arr["books_issued"]);
}



//fucntion to load the page
function loadHome(data) {
    var request = new XMLHttpRequest();
    request.onload = function() {
        var content = document.getElementById('content');
        content.innerHTML = request.responseText;
        changeHomeParams(data);
    };
    request.open('GET', './homescreen.html');
    request.send(null);
    hideSidenav();
    var icon = document.getElementById('menuIcon');
    icon.style.display = "block";
    var sidenav = document.getElementById('sidenav');
    sidenav.style.display = "block";
    change_text("Home")
    localStorage.setItem('user_data', data);
    localStorage.setItem('PREF_LOGGED_IN', checked);
    console.log(checked);
}

function loginData(data) {
    console.log('Loading page');
    if (data == '\nnull') {
        alert('Invalid username or password');
    } else {
        loadHome(data);
    }
}

function login(cardnumber, password, checked) {
    console.log(cardnumber);
    console.log(password);
    $.post("http://jucse-mylib.000webhostapp.com/login.php", { cd: cardnumber, pw: password })
        .done(function(data) {
            console.log(data);
            loginData(data);
        });
    return false;
}