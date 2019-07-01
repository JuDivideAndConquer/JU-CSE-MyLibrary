function displayBooks(data) {
    var data = JSON.parse(data, true);
    var results = document.getElementById('results');
    results.innerHTML = "";
    for (i in data) {
        console.log(data[i]);
        var bookDiv = createBookDiv(data[i]);
        results.appendChild(bookDiv);
    }
}

function issueBook(book) {
    console.log(book);
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
            bookDiv.addEventListener('onclick', issueBook(book[item]));
        }
    }

    return bookDiv;
}

function loadResults(keyword) {
    if (keyword == null) {
        $.post("http://jucse-mylib.000webhostapp.com/search.php", { d: keyword })
            .done(function(data) {
                console.log(data);
                //alert(data);
                displayBooks(data);
            });
    } else {
        console.log(keyword);
        $.post("http://jucse-mylib.000webhostapp.com/search.php", { d: keyword })
            .done(function(data) {
                console.log(data);
                //alert(data);
                displayBooks(data);
            });
    }
}