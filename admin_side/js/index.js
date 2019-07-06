//function to change text in topBar
function change_text(text) {
    var topnav = document.getElementById('topBarHome');
    topnav.innerHTML = text;
}

//fucntion to load the page
function loadPage(name, text, data) {
    $('#content').load( './' + name + '.html');
    change_text(text);
}

function load_data(x){
    if(x==1){
        $.post("http://jucse-mylib.000webhostapp.com/admin_side/load_data.php", { type: '1' })
        .done(function(data) {
            alert(data);
           // var arr = JSON.parse(data, true);
           //  $(".reminder").html(arr[0]);
        });
    }
}


//Main
window.onload =  loadPage("homescreen", "Home");
load_data(1);