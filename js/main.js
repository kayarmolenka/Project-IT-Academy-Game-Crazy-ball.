
const root = document.querySelector('.root');

function createHeader () {
    let header = document.createElement('header');
    header.classList.add('header');
    root.appendChild(header);
    let h1 = document.createElement('h1');
    header.appendChild(h1);
    let text = document.createTextNode('My programma very cool');
    h1.appendChild(text);
}

createHeader();

let container = document.createElement('div');
container.classList.add('container');
root.appendChild(container);

function createLink (title, id) {
    let a = document.createElement('a');
    let text = document.createTextNode(title);
    a.classList.add('a');
    a.appendChild(text);
    a.setAttribute('href', '#');
    a.setAttribute('id', id);      
    container.appendChild(a);
}

createLink('Main', 'main');
createLink('Record', 'record');
createLink('Help', 'help');
createLink('Log in', 'log_in');
createLink('Start', 'start');

function createModalLogin () {
    let div = document.createElement('div');
    div.classList.add('div');
    container.appendChild(div);
    let span = document.createElement('span');
    span.classList.add('close');
    div.appendChild(span);
    let text = document.createTextNode('&times;');
    span.appendChild(text);
    document.body.style.overflow = 'hidden';
    document.body.style.opacity = 0.8;
}
let btn = document.querySelector('#log_in');

btn.addEventListener('click', (event) => {
    event.preventDefault();
    createModalLogin();
})


