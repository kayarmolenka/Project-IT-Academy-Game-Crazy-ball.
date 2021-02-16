import {root} from './script.js';



export let btn;
export let form;


function callRegistrationWindow() {

    const containerModal = document.createElement('div');

    function createForm() {
        let header = document.createElement('div'),
            h2 = document.createElement('h2'),
            closeModalRegistration = document.createElement('i');

        form = document.createElement('form');
        
        h2.textContent = 'Create Account';
        form.classList.add('form_registration');
        form.setAttribute('name', 'form_inputs');
        header.classList.add('header_modal_login');
        containerModal.classList.add('container_modal');
        closeModalRegistration.classList.add('fas', 'fa-times', 'close_btn_window_registration');

    
        header.append(h2);
        containerModal.append(header, form, closeModalRegistration);
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
        label.classList.add('label_form_registration');
        small.classList.add('small_registration');
        small.setAttribute('id', options.smallId);

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
        inputType: 'text',
        smallId: 'small_name'
    });

    createFormControl({
        nameInput: 'Email',
        placeholder: 'kayarmolenka@gmail.com',
        iconID: 'form_modal_icon_2',
        inputID: 'input_2',
        inputType: 'email',
        smallId: 'small_email'
    });

    createFormControl({
        nameInput: 'Password',
        placeholder: '47hYnn&',
        iconID: 'form_modal_icon_3',
        inputID: 'input_3',
        inputType: 'password',
        smallId: 'small_password'
    });

    createFormControl({
        nameInput: 'Password check',
        placeholder: '47hYnn&',
        iconID: 'form_modal_icon_4',
        inputID: 'input_4',
        inputType: 'password',
        smallId: 'small_repeat_passwords'
    });
    
    function createButton() {
        btn = document.createElement('button');
        
        let div = document.createElement('div');

        btn.classList.add('btn_modal_registration');
        btn.textContent = 'Submit';
        div.classList.add('btn_modal_registration_form');

        div.append(btn);
        form.append(div);
        
    }
    
    createButton();



    root.append(containerModal);
}

export default callRegistrationWindow;