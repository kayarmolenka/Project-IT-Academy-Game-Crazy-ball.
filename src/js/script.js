import callRegistrationWindow from './windowRegistr.js';
import actionBtn from './validate.js';
import callWindowLogin from './windowLogin';


export const root = document.querySelector('.root');
let container;

function createHeader () {
    let header = document.createElement('header');
        // h1 = document.createElement('h1');

    header.classList.add('header');
    // header.appendChild(h1);
    // h1.innerHTML = 'My program very cool';
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
createLink('registration', 'log_in');
createLink('LOGIN', 'log');


const linkLog = document.querySelector('#log');
const linkReg = document.querySelector('#log_in');

linkReg.addEventListener('click', () => {
    callRegistrationWindow();
    actionBtn();

});

linkLog.addEventListener('click', () => {
    callWindowLogin();
});

