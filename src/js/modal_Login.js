import {root} from './script.js';

export let btn;
export let form;
function callRegistrationWindow() {

    const containerModal = document.createElement('div');

    function createForm() {
        let header = document.createElement('div'),
        h2 = document.createElement('h2');
    
        form = document.createElement('form');

        h2.textContent = 'Create Account';
        form.classList.add('form_registration');
        form.setAttribute('name', 'form_inputs');
        header.classList.add('header_modal_login');
        containerModal.classList.add('container_modal');
    
        header.append(h2);
        containerModal.append(header, form);
    }

    createForm();
    
    function createFormControl (options) {
        let formControl = document.createElement('div'),
            label = document.createElement('label'),
            input = document.createElement('input'),
            icon = document.createElement('i'),
            small = document.createElement('small');
            
        label.textContent = options.nameInput;
        small.textContent = 'Error message';

        formControl.classList.add('form_control');
        input.setAttribute('type',options.inputType);
        input.setAttribute('placeholder',options.placeholder);
        input.setAttribute('class','input');
        input.setAttribute('id',options.inputID);

        icon.setAttribute('class','fas fa-check-circle'); 
        icon.setAttribute('id',options.iconID);

        formControl.append(label, input, icon, small);

        form.append(formControl);

    }
    createFormControl({
        nameInput: 'Username',
        placeholder: 'nic08',
        iconID: 'form_modal_icon_1',
        inputID: 'input_1',
        inputType: 'text'
    });

    createFormControl({
        nameInput: 'Email',
        placeholder: 'kayarmolenka@gmail.com',
        iconID: 'form_modal_icon_2',
        inputID: 'input_2',
        inputType: 'email'
    });

    createFormControl({
        nameInput: 'Password',
        placeholder: '47hYnn&',
        iconID: 'form_modal_icon_2',
        inputID: 'input_3',
        inputType: 'password'
    });

    createFormControl({
        nameInput: 'Password check',
        placeholder: '47hYnn&',
        iconID: 'form_modal_icon_4',
        inputID: 'input_4',
        inputType: 'password'
    });
    
    function createButton() {
        btn = document.createElement('button');

        form.append(btn);
        btn.insertAdjacentText('afterbegin','Sumbit');
    }
    
    createButton();



    root.append(containerModal);
}

export default callRegistrationWindow;