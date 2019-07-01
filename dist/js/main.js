function loadJson() {
    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'dist/js/data.json', false);
    xhr.send();
    if (xhr.status != 200) {
        console.log( xhr.status + ': ' + xhr.statusText );
    } else {
        console.log( xhr.responseText );
    }
}