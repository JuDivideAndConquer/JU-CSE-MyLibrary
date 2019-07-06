//function to change text in topBar
function change_text(text) {
    var topnav = document.getElementById('topBarHome');
    topnav.innerHTML = text;
}

//function to login admin
function login(password, checked) {
    console.log("login button pressed");
    $.post("http://jucse-mylib.000webhostapp.com/admin_side/login.php", { pw: password })
        .done(function(data) {
            if (data == false) {
                alert('Invalid password');
                return false;
            } else {
                loadPage("homescreen", "Home");
                return true;
            }
        });

}

//fucntion to load the page
function loadPage(name, text, data) {
    $('#content').load('./' + name + '.html');
    change_text(text);
    if (text == "Home") {
        load_data(1);
        $('#sidenav').css('display', 'block');
        $('#topBar').css('display', 'block');
    } else if (text == "Login") {
        $('#sidenav').css('display', 'none');
        $('#topBar').css('display', 'none');
    }

}

//load data from server
function load_data(x) {
    if (x == 1) {
        $.post("http://jucse-mylib.000webhostapp.com/admin_side/load_data.php", { type: '1' })
            .done(function(data) {
                var arr = JSON.parse(data, true);
                $(".reminder").html(arr[1]["COUNT(*)"] + " Pending. Issue Now?");
                $("#num").html(arr[0]["COUNT(*)"]);

            });
    }
}


//Main
loadPage("login", "Login");