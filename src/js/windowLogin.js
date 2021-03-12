import {linkLogReg} from './script';
import closeWindowLogin from './events';

export let linkRegistration;
export let closeBtn;
export let modal;
export let dark;
export let btn;

function createModalLoginWindow () {

    let form;

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

    function createClose() {
        closeBtn = document.createElement('i');
        closeBtn.classList.add('fas', 'fa-times', 'close_btn_window_login');
        modal.appendChild(closeBtn);
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
    
    function createButton() {
        btn = document.createElement('button');
        const containerBtn = document.createElement('div'),
              messageError = document.createElement('div');   

        containerBtn.classList.add('form_row', 'form_button'); 
        btn.classList.add('button_registr');
        btn.textContent = 'LOG IN';
        messageError.classList.add('message_error_window_login');
        messageError.textContent = 'Incorrect password or username';

        containerBtn.append(messageError, btn);
        form.appendChild(containerBtn);   
    }

    linkLogReg.addEventListener('click', () => {
        
        createModal();
        createDark();
        createClose();
        createHeaderModal();
        createForm(); 
        createInput('input_name', 'Username', 'text', 'input_name','', 'label_1');
        createInput('input_pas', 'Password', 'password', 'input_pas','', 'label_2'); 
        createInput('input_box', '', 'checkbox', 'input_box', 'Remember me', 'label_3');
        createButton();
        createLinkForgot();
        closeWindowLogin();
    });
}

export default createModalLoginWindow;

    


