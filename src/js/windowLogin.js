import {linkLogReg} from './script';

function m () {

let a, header, modal, form;

function createHeader() {
    header = document.createElement('header');
    document.body.appendChild(header);
}
createHeader();

function createModal() {
    modal = document.createElement('div');
    modal.classList.add('modal');
    document.body.appendChild(modal);
}

function createDark() {
    const dark = document.createElement('div');
    dark.classList.add('dark');
    document.body.appendChild(dark);
}


function createHeaderModal() {
    let headerModal = document.createElement('div');

    headerModal.textContent = 'LOG IN';
    headerModal.classList.add('header_modal');
    modal.appendChild(headerModal);
}



function createLinks(nameLink, NameClassLink){
    const ul = document.createElement('ul'),
        li = document.createElement('li'),
        icon = document.createElement('i');
    a = document.createElement('a');

    a.classList.add(NameClassLink);

    a.textContent = nameLink;
    icon.classList.add('fa', 'fa-sign-in');

    a.appendChild(icon);
    li.appendChild(a);
    ul.appendChild(li);
    header.appendChild(ul);
}

createLinks('Log in','link_login');

function createForm() {
    form = document.createElement('form');
    form.classList.add('form_modal');
    modal.appendChild(form);
}

function createInput(ID, NamePlaceholder, TypeInput,labelFor, labelText,labelID) {
    const input = document.createElement('input'),
        label = document.createElement('label'),
        divInput = document.createElement('div');

    input.setAttribute('type', TypeInput);
    input.setAttribute('placeholder', NamePlaceholder);
    divInput.classList.add('form_row'); 
    input.setAttribute('id', ID);
    label.setAttribute('for', labelFor);
    label.setAttribute('id', labelID);
    label.textContent = labelText;


    divInput.appendChild(input);  
    divInput.appendChild(label);  
    form.appendChild(divInput); 

}

function createLinkForgot() {
    let linkForgot = document.createElement('a'),
        divAnhor = document.createElement('div');

    divAnhor.classList.add('form_forgot'); 
    linkForgot.classList.add('link_forgot'); 
    linkForgot.textContent = 'Forgot Password?'; 

    divAnhor.appendChild(linkForgot);
    form.appendChild(divAnhor);
}

let btn;
function createButton() {
    btn = document.createElement('button');
    let containerBtn = document.createElement('div'); 

    containerBtn.classList.add('form_row', 'form_button'); 
    btn.classList.add('button_registr');
    btn.textContent = 'LOG IN';

    containerBtn.appendChild(btn);
    form.appendChild(containerBtn);   
}


linkLogReg.addEventListener('click', (e) => {
    e.preventDefault();
    createModal();
    createDark();
    createHeaderModal();
    createForm(); 
    createInput('input_name', 'Username', 'text', 'input_name','', 'label_1');
    createInput('input_pas', 'Password', 'password', 'input_pas','', 'label_2'); 
    createInput('input_box', '', 'checkbox', 'input_box', 'Remember me', 'label_3');
    createButton();
    createLinkForgot();
    console.log('Hi')
    console.log(a)
    // pro()
});

}

export default m;

    


