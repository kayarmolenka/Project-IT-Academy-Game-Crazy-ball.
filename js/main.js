'use strict';

const root = document.querySelector('.root');
let container;

function createHeader () {
    let header = document.createElement('header'),
        h1 = document.createElement('h1');

    header.classList.add('header');
    header.appendChild(h1);
    h1.innerHTML = 'My programma very cool';
    root.appendChild(header);
}

createHeader();

function createContainer() {
    container = document.createElement('div');
    container.classList.add('container');
    root.appendChild(container);
}

createContainer();

function createLink (title, id) {
    let a = document.createElement('a');

    a.innerHTML = title;
    a.classList.add('a');
    a.setAttribute('href', '#');
    a.setAttribute('id', id);      
    container.appendChild(a);
}

createLink('Main', 'main');
createLink('Record', 'record');
createLink('Help', 'help');
createLink('Log in', 'log_in');
createLink('Start', 'start');

// function createModalLogin () {
//     let div = document.createElement('div');
//     div.classList.add('div');
//     container.appendChild(div);
//     let span = document.createElement('span');
//     span.classList.add('close');
//     div.appendChild(span);
//     let text = document.createTextNode('&times;');
//     span.appendChild(text);
//     document.body.style.overflow = 'hidden';
//     document.body.style.opacity = 0.8;
// }
// let btn = document.querySelector('#log_in');

// btn.addEventListener('click', (event) => {
//     event.preventDefault();
//     createModalLogin();
// })


