import './styles/index.css';
import './styles/index.scss';

function component() {
    var element = document.createElement('div');

    element.innerHTML = 'Hello webpack2';
    element.classList.add('hello');
    element.classList.add('hello-s');

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