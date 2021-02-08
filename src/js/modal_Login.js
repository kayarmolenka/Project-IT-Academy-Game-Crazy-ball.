import {root} from './script.js';

export let btn;

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
    

    function createFormControl (nameInput, placehold, iconID, inputID, inputType) {
    let formControl = document.createElement('div'),
        label = document.createElement('label'),
        input = document.createElement('input'),
        textLabel = document.createTextNode(nameInput),
        icon = document.createElement('i'),
        small = document.createElement('small'),
        textSmall = document.createTextNode('Error message');
        

    formControl.classList.add('form_control');
    label.setAttribute('for','username');
    input.setAttribute('type',inputType);
    input.setAttribute('placeholder',placehold);
    input.setAttribute('class','input');
    input.setAttribute('id',inputID);
    icon.setAttribute('class','fas fa-check-circle'); //fas fa-exclamation-circle
    icon.setAttribute('id',iconID);

    form.appendChild(formControl);
    formControl.appendChild(label);
    label.appendChild(textLabel);
    formControl.appendChild(input);
    formControl.appendChild(icon);
    formControl.appendChild(small);
    small.appendChild(textSmall);

    }

    createFormControl('Username', 'nic08', 'form_modal_icon_1', 'input_1', 'text');
    createFormControl('Email', 'kayarmolenka@gmail.com', 'form_modal_icon_2', 'input_2', 'email');
    createFormControl('Password', '47hYnn&', 'form_modal_icon_3', 'input_3', 'password');
    createFormControl('Password check','47hYnn&', 'form_modal_icon_4', 'input_4', 'password');

    
    function createButton() {
        btn = document.createElement('button');

        form.append(btn);
        btn.insertAdjacentText('afterbegin','Sumbit');
    }
    
    createButton();

    root.append(containerModal);

}

export default callRegistrationWindow;