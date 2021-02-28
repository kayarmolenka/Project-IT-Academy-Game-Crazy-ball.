import createModalLoginWindow from './windowLogin';
import startGame from './game';


export const root = document.querySelector('.root');
let container, inputFile, imgAccount, labelAccount, header;

function createHeader () {
    header = document.createElement('header');
       
    header.classList.add('header');
        
    root.appendChild(header);
}

createHeader();

export function createContentHeader(nameUser) {
    const  div = document.createElement('div'),
           a = document.createElement('a');

    imgAccount = document.createElement('img'),
    inputFile = document.createElement('input');
    labelAccount = document.createElement('label');

    imgAccount.setAttribute('src', 'img/account_icon.png');
    imgAccount.setAttribute('alt', 'account_img');
    imgAccount.classList.add('img_account');
    div.textContent = nameUser;
    a.classList.add('list_acc');
    inputFile.setAttribute('type', 'file');
    inputFile.setAttribute('id', 'account_file');
    labelAccount.setAttribute('for', 'account_file');
    labelAccount.setAttribute('id', 'label_account');

    labelAccount.append(inputFile, imgAccount);
    a.append(div, labelAccount);
    header.append(a);


    inputFile.addEventListener('change', (event) => {
        const selectedFile = event.target.files[0];
        const reader = new FileReader();
        
        imgAccount.title = selectedFile.name;
        
        reader.onload = function(event) {
            imgAccount.src = event.target.result;
        };
        reader.readAsDataURL(selectedFile);
    })
}

export let linkLogReg;
function createHeaderLoginRegistration() {
    linkLogReg = document.createElement('a');

    linkLogReg.classList.add('link_log_reg');
    linkLogReg.textContent = 'Log in / Registration';

    header.append(linkLogReg);
}

createHeaderLoginRegistration();

createModalLoginWindow();



function createContainer() {
    container = document.createElement('div');
    container.classList.add('container');
    root.appendChild(container);
}

createContainer();

function createLink (title, id) {
    let a = document.createElement('a');

    a.innerHTML = title;
    a.classList.add('a_main');
    a.setAttribute('href', '#');
    a.setAttribute('id', id);      
    container.appendChild(a);
}

createLink('Start', 'link_start');
createLink('Record', 'record');
createLink('Help', 'help');



export const linkStart = document.querySelector('#link_start');

linkStart.addEventListener('click', () => {
    header.remove();
    container.remove();
    startGame();
})

console.log(header)
console.log(container)




