import callRegistrationWindow from './windowRegistr.js';
import actionBtn from './validate.js';
import m from './windowLogin';


export const root = document.querySelector('.root');
let container, inputFile, imgAccount, labelAccount, header;

function createHeader () {
    header = document.createElement('header');
       
    header.classList.add('header');
        
    root.appendChild(header);
}

createHeader();

function createContentHeader() {
    const  div = document.createElement('div'),
           a = document.createElement('a');

    imgAccount = document.createElement('img'),
    inputFile = document.createElement('input');
    labelAccount = document.createElement('label');

    imgAccount.setAttribute('src', 'img/account_icon.png');
    imgAccount.setAttribute('alt', 'account_img');
    imgAccount.classList.add('img_account');
    div.textContent = 'Username';
    a.classList.add('list_acc');
    inputFile.setAttribute('type', 'file');
    inputFile.setAttribute('id', 'account_file');
    labelAccount.setAttribute('for', 'account_file');
    labelAccount.setAttribute('id', 'label_account');

    labelAccount.append(inputFile, imgAccount);
    a.append(div, labelAccount);
    header.append(a);
}

// createContentHeader();

// inputFile.addEventListener('change', (event) => {
//     const selectedFile = event.target.files[0];
//     const reader = new FileReader();
    
//     imgAccount.title = selectedFile.name;
      
//     reader.onload = function(event) {
//         imgAccount.src = event.target.result;
//     };
//     reader.readAsDataURL(selectedFile);
// })
export let linkLogReg;
function createHeaderLoginRegistration() {
    linkLogReg = document.createElement('a');

    linkLogReg.classList.add('link_log_reg');
    linkLogReg.textContent = 'Log in / Registration';

    header.append(linkLogReg);
}

createHeaderLoginRegistration();

m();



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
// createLink('registration', 'log_in');
// createLink('LOGIN', 'log');


// const linkLog = document.querySelector('#log');
// const linkReg = document.querySelector('#log_in');

// linkLogReg.addEventListener('click', () => {
//     callRegistrationWindow();
//     actionBtn();                                    window registration

// });



