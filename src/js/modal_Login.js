import {root} from './script.js';

function callRegistrationWindow() {

    const containerModal = document.createElement('div');

    containerModal.classList.add('container_modal');

    let header = document.createElement('div'),
        h2 = document.createElement('h2'),
        form = document.createElement('form');
        
    form.classList.add('form_registration');
    header.classList.add('header_modal_login');

    h2.textContent = 'Create Account';

    header.append(h2);
    containerModal.append(header, form);
    

    function createFormControl (nameInput, placehold) {
    let formControl = document.createElement('div'),
        label = document.createElement('label'),
        input = document.createElement('input'),
        textLabel = document.createTextNode(nameInput),
        icon = document.createElement('i'),
        small = document.createElement('small'),
        textSmall = document.createTextNode('Error message');
        

    formControl.classList.add('formControl');
    label.setAttribute('for','username');
    input.setAttribute('type','text');
    input.setAttribute('placeholder',placehold);
    input.setAttribute('class','input');

    form.appendChild(formControl);
    formControl.appendChild(label);
    label.appendChild(textLabel);
    formControl.appendChild(input);
    formControl.appendChild(icon);
    formControl.appendChild(small);
    small.appendChild(textSmall);

    }

    createFormControl('Username', 'nic08');
    createFormControl('Email', 'kayarmolenka@gmail.com');
    createFormControl('Password', '47hYnn&');
    createFormControl('Password check','47hYnn&');

    function createButton() {
        const btn = document.createElement('button');

        form.append(btn);
        btn.insertAdjacentText('afterbegin','Sumbit');
    }
    
    createButton();

    root.append(containerModal);
}

export default callRegistrationWindow;