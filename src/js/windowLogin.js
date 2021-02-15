import {linkLogReg} from './script';
import callRegistrationWindow from './windowRegistr.js';
import actionBtn from './validate.js';

export let linkRegistration;

function createModalLoginWindow () {

let modal, form, dark;

function createModal() {
    modal = document.createElement('div');
    modal.classList.add('modal');
    document.body.appendChild(modal);
}

function createDark() {
    dark = document.createElement('div');
    dark.classList.add('dark');
    document.body.appendChild(dark);
}


function createHeaderModal() {
    let headerModal = document.createElement('div');

    headerModal.textContent = 'LOG IN';
    headerModal.classList.add('header_modal');
    modal.appendChild(headerModal);
}

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
    let divAnhor = document.createElement('div');

    linkRegistration = document.createElement('a');
    
    divAnhor.classList.add('form_forgot'); 
    linkRegistration.classList.add('link_registration'); 
    linkRegistration.textContent = 'Create new account'; 

    divAnhor.appendChild(linkRegistration);
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
    
    
    // pro()
    linkRegistration.addEventListener('click', () => {
        callRegistrationWindow();
        actionBtn();
        modal.remove();
        dark.remove();

    })
});





}

export default createModalLoginWindow;

    


