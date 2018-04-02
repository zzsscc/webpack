import './styles/index.css';
import './styles/index.scss';
import { printMe, printAll } from './print.js';

// webpack and style loader
const component = () => {
    const element = document.createElement('div');

    element.innerHTML = 'Hello webpack2';
    element.classList.add('hello');

    printMe();

    return element;
}

const childComponent = () => {
    const element = document.createElement('div');

    element.innerHTML = 'hahaha';
    element.classList.add('hello-s');

    return element;
}

const fComponent = document.body.appendChild(component());
fComponent.appendChild(childComponent());

// file-loader
const imgComponent = () => {
    const element = document.createElement('div');

    element.classList.add('img');
    element.onclick = printAll;

    return element;
}
document.body.appendChild(imgComponent());