import {root} from './script.js';

export let btn;
export let form;
function callWindowLogin() {

    const containerModal = document.createElement('div');

    function createForm() {
        let header = document.createElement('div'),
        h2 = document.createElement('h2');
    
        form = document.createElement('form');

        h2.textContent = 'LOGIN';
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
        input.setAttribute('for',options.inputLab);
        label.setAttribute('id', options.labelID);

        icon.setAttribute('class','fas fa-check-circle'); 
        icon.setAttribute('id',options.iconID);

        label.appendChild(input);

        formControl.append(label, icon, small);

        form.append(formControl);

    }
    createFormControl({
        nameInput: '',
        placeholder: 'Username',
        iconID: 'form_modal_icon_1',
        inputID: 'input_1',
        inputType: 'text',
        inputLab: 'input_1',
        labelID: 'name_label'
    });

    
    createFormControl({
        nameInput: '',
        placeholder: 'Password',
        iconID: 'form_modal_icon_2',
        inputID: 'input_3',
        inputType: 'password',
        inputLab: 'input_3',
        labelID: 'pass_label'
    });

    createFormControl({
        nameInput: 'Remember me',
        placeholder: '',
        iconID: 'form_modal_icon_2',
        inputID: 'checkbox',
        inputType: 'checkbox',
        inputLab: 'checkbox',
        labelID: 'check_label'
    });
    
    function createButton() {
        btn = document.createElement('button');

        btn.classList.add('btn_modal_login');

        form.append(btn);
        btn.insertAdjacentText('afterbegin','Sumbit');
    }
    
    createButton();



    root.append(containerModal);
}

export default callWindowLogin;