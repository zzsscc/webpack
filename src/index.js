import './styles/index.css';
import './styles/index.scss';

// webpack and style loader
function component() {
    var element = document.createElement('div');

    element.innerHTML = 'Hello webpack2';
    element.classList.add('hello');

    return element;
}

function childComponent() {
    var element = document.createElement('div');

    element.innerHTML = 'hahaha';
    element.classList.add('hello-s');

    return element;
}

var fComponent = document.body.appendChild(component());
fComponent.appendChild(childComponent());

// file-loader
function imgComponent() {
    var element = document.createElement('div');

    element.classList.add('img');

    return element;
}
document.body.appendChild(imgComponent());