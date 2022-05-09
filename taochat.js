var chatsubmit = () => {
    var chatbox = document.querySelector('#chat').value;
    var newEl = document.createElement("p");
    newEl.setAttribute("class", 'messenger');
    newEl.innerHTML = chatbox;
    document.querySelector('div').appendChild(newEl);
}



