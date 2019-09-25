function displayBooks(data) {
    var data = JSON.parse(data, true);
    var results = document.getElementById('results');
    results.innerHTML = "";
    for (i in data) {
        var bookDiv = createBookDiv(data[i]);
        let book = data[i];
        results.appendChild(bookDiv);
    }
}

function changeIssuedBooks(x, acess) {
    var user_data = JSON.parse(x);
    $.post("http://jucse-mylib.000webhostapp.com/change.php", { is: user_data["books_issued"], cd: user_data["card_number"], ass: acess })
        .done(function(data) {
            console.log(data);
        });
}

function issueBook(book) {
    console.log(book);

    var user_data = JSON.parse(localStorage.getItem('user_data'), true);
    var card = user_data["card_number"];
    var num = user_data["books_issued"];
    if (num > 1) {
        alert("Cannot issue more than 2 books.");
        return;
    }
    var r = confirm("Do you wish to issue this ?");
    console.log(r);
    if (r == false) { return; }

    $.post("http://jucse-mylib.000webhostapp.com/issue.php", { ass: book["acession_number"], cd: card })
        .done(function(data) {
            if (data == 1) {
                user_data["books_issued"] = (parseInt(user_data["books_issued"]) + 1);
                var x = JSON.stringify(user_data);
                localStorage.setItem('user_data', x);
                changeIssuedBooks(x, book["acession_number"]);
                alert("Issue request successful");
            } else {
                alert("Book not available. Try again later.");
            }
        });

}

function createBookDiv(book) {
    var bookDiv = document.createElement('div');
    bookDiv.classList.add('bookDiv');

    for (item in book) {

        var label = document.createElement('span');
        label.classList.add('bookDivLabel');
        var value = document.createElement('span');
        value.classList.add('bookDivValue');

        label.innerHTML = item + " : ";
        if (book[item] != "") {
            value.innerHTML = book[item];
            var bookSubDiv = document.createElement('div');
            bookSubDiv.classList.add('book' + item);
            bookSubDiv.appendChild(label);
            bookSubDiv.appendChild(value);
            bookDiv.appendChild(bookSubDiv);
        }
    }
    bookDiv.addEventListener('click', function(event) {
        issueBook(book);
    });
    return bookDiv;
}

function loadResults(keyword) {
    if (keyword == null) {
        $.post("http://jucse-mylib.000webhostapp.com/search.php", { d: keyword })
            .done(function(data) {
                displayBooks(data);
            });
    } else {
        console.log(keyword);
        $.post("http://jucse-mylib.000webhostapp.com/search.php", { d: keyword })
            .done(function(data) {
                displayBooks(data);
            });
    }
}