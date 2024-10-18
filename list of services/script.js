function search_animal() {
    let input = document.getElementById('Search').value
    input = input.toLowerCase();
    let x = document.getElementsByClassName('cookie');

    for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display = "none";
        }
        else {
            x[i].style.display = "list-item";
        }
    }
}