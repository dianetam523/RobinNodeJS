var list = document.getElementById('demo');

function changeText2() {
    var firstname = document.getElementById('firstname').value;
    document.getElementById('boldStuff2').innerHTML = firstname;
    var entry = document.createElement('li');
    entry.appendChild(document.createTextNode(firstname));
    list.appendChild(entry);
}