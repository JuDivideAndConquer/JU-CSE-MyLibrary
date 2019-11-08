//function to change text in topBar
function change_text(text) {
    var topnav = document.getElementById('topBarHome');
    topnav.innerHTML = text;
}

//function to login admin
function login(password, checked) {
    localStorage.setItem('PREF_LOGGED_IN', checked);
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
    } else if (text == "Pending Issues") {
        loadResults(1);
    } else if (text == "Pending Returns") {
        loadResults(2);
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


//function to logout admin
function logout() {
    localStorage.setItem('PREF_LOGGED_IN', false);
    loadPage('login', 'Login', null);
}

//When page is fired
function readyPage() {
    var PREF_LOGGED_IN = localStorage.getItem('PREF_LOGGED_IN');
    if (PREF_LOGGED_IN == null || PREF_LOGGED_IN == 'false') {
        loadPage('login', 'Login');
    } else {
        loadPage("homescreen", "Home");

    }
}

function displayBooks(data, keyword) {
    var data = JSON.parse(data, true)
    var results = document.getElementById('results')
    results.innerHTML = ''
    for (i in data) {
        var bookDiv = createBookDiv(data[i], keyword)
        let book = data[i]
        results.appendChild(bookDiv)
    }
}

function issueReturnBook(book, keyword) {
    if (keyword == 1) {
        var r = confirm('Do you wish to issue this ?')
        if (r == false) { return }

    } else {
        var r = confirm('Do you wish to return this ?')
        if (r == false) { return }

    }

    $.post('http://jucse-mylib.000webhostapp.com/admin_side/issue.php', { ass: book['acession_number'], cd: book['card_number'], key: keyword })
        .done(function(data) {
            if (data == 1) {
                if (keyword == 1) {
                    alert('Issue successful');
                } else {
                    alert('Return successful')
                }

            } else {
                alert('Something went wrong. Try again later.')
            }
        })
}



function createBookDiv(book, keyword) {
    var bookDiv = document.createElement('div')
    bookDiv.classList.add('bookDiv')

    for (item in book) {
        var label = document.createElement('span')
        label.classList.add('bookDivLabel')
        var value = document.createElement('span')
        value.classList.add('bookDivValue')

        label.innerHTML = item + ' : '
        if (book[item] != '') {
            value.innerHTML = book[item]
            var bookSubDiv = document.createElement('div')
            bookSubDiv.classList.add('book' + item)
            bookSubDiv.appendChild(label)
            bookSubDiv.appendChild(value)
            bookDiv.appendChild(bookSubDiv)
        }
    }

    bookDiv.addEventListener('click', function(event) {
        issueReturnBook(book, keyword)
    })


    return bookDiv
}

function loadResults(keyword) {
    $.post('http://jucse-mylib.000webhostapp.com/admin_side/search.php', { d: keyword })
        .done(function(data) {
            displayBooks(data, keyword)

        })
}

function addBook(acess, title, edition, sub, publisher, author1, author2, author3, author4, author5, author6) {
    var r = confirm('Do you wish to add this book ?')
    if (r == false) { return }

    $.post('http://jucse-mylib.000webhostapp.com/admin_side/add.php', { acess: acess, title: title, edition: edition, subject: sub, publisher: publisher, author1: author1, author2: author2, author3: author3, author4: author4, author5: author5, author6: author6 })
        .done(function(data) {
            if (data == 1) {
                alert('Successfully added.')
                return true
            } else {
                alert('Something went wrong. Try again later.')
            }
            //alert(data)

        })
}


//Main
readyPage();