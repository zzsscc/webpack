function component() {
    var element = document.createElement('div');

    element.innerHTML = 'Hello webpack2';

    return element;
}

document.body.appendChild(component());