function showSidenav()
{
    $('#sidenav').css('width','60%');
    $('.sidenavItems').css('display','block');
    console.log("menu icon clicked");
}

function hideSidenav()
{
    $('#sidenav').css('width','0');
    $('.sidenavItems').css('display','none');
    console.log("sidenav hide icon clicked");
}