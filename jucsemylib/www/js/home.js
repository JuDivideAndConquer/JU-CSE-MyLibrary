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
(function(){
    var partialsCache = {}

    function fetchFile(path, callback){

        var request =new XMLHttpRequest();

        request.onload = function(){
            callback(request.responseText);
        };

        request.open("GET",path);
        request.send(null);
    }
})